from django.utils.timezone import now
from django.utils.dateparse import parse_datetime 
from django.shortcuts import render, redirect, get_object_or_404
from .models import Poll , Option
from django.http import JsonResponse
from django.shortcuts import render
from .models import QuizQuestion
from .models import QuizAttempt
from django.contrib.auth.decorators import login_required
from .models import LeaderboardProfile
import random
from django.db.models import Q
from achievements.utils import award_achievement
from django.db.models import F
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache

@csrf_exempt
def submit_review(request):
    if request.method == "POST":
        review_type = request.POST.get("review_type")
        rating = request.POST.get("rating")
        feedback = request.POST.get("feedback")
        user = request.user.username if request.user.is_authenticated else "Anonymous"

        message = f"""
🧑‍💻 User: {user}
📝 Review Type: {review_type}
⭐ Rating: {rating}
💬 Feedback: {feedback}
        """

        send_mail(
            subject=f"[CRICARENA] New {review_type.capitalize()} Review",
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=["shsheth2006@gmail.com"],  # Replace with your Gmail
        )

    return redirect("/home/")  # or redirect back to results page


    # existing quiz logic

# Create your views here.

# def quiz_home(request):
#     """
#     Render the quiz home page.
#     """
#     return render(request, 'quiz/page.html')

def poll_list(request):
    polls = Poll.objects.all().order_by('-created_at')

    for poll in polls:
        options = poll.options.all()
        total_votes = sum(opt.votes for opt in options)
        for opt in options:
            opt.percentage = round((opt.votes / total_votes) * 100, 2) if total_votes else 0

    user_votes = []  # populate this if needed for auth logic

    return render(request, 'quiz/poll.html', {
        'polls': polls,
        'user_votes': user_votes,
    })


def vote(request, option_id):
    option = Option.objects.get(id=option_id)
    option.votes += 1
    option.save()
    poll = option.poll
    options = poll.options.all()
    total_votes = sum(opt.votes for opt in options)
    results = [
        {
            'id': opt.id,
            'text': opt.text,
            'votes': opt.votes,
            'percent': (opt.votes / total_votes * 100) if total_votes > 0 else 0
        }
        for opt in options
    ]
    return JsonResponse({'success': True, 'results': results})

def calculate_quiz_rating(score, total, time_taken, difficulty):
    accuracy = score / total if total else 0
    avg_time = time_taken.total_seconds() / total if time_taken and total else 0

    difficulty_weights = {
        'easy': 1,
        'medium': 2,
        'hard': 3,
    }

    expected_accuracy = {
        'easy': 0.9,
        'medium': 0.7,
        'hard': 0.5,
    }

    difficulty_weight = difficulty_weights.get(difficulty.lower(), 2)
    expected = expected_accuracy.get(difficulty.lower(), 0.7)

    speed_score = max(0, min(1, (30 - avg_time) / 15))  # 0 to 1 scale
    raw_rating = (
        accuracy * 50 +
        speed_score * 20 +
        (difficulty_weight / 3) * 20
    )
    adjustment = (accuracy - expected) * 10  # ±10 point swing

    return round(min(100, max(0, raw_rating + adjustment)), 2)

# ------------------------------
# QUIZ

def quiz_home(request):
    request.session.pop('quiz_submitted', None) 
    return render(request, 'quiz/landing.html')

@never_cache
@login_required
def cricket_quiz(request):
    if request.session.get('quiz_submitted'):
        return redirect('quiz_home')
    
    if request.method == 'POST':
        selected_difficulty = request.POST.get('difficulty')
        request.session['selected_difficulty'] = selected_difficulty

        if selected_difficulty:
            all_questions = QuizQuestion.objects.filter(difficulty=selected_difficulty)
        else:
            all_questions = QuizQuestion.objects.all()

        all_questions = list(all_questions)

        # ✅ Get previously attempted question IDs from session
        attempted_question_ids = set(request.session.get('attempted_questions', []))

        seen_questions = [q for q in all_questions if q.id in attempted_question_ids]
        unseen_questions = [q for q in all_questions if q.id not in attempted_question_ids]

        # ✅ Select up to 7 unseen and up to 3 seen
        selected_unseen = random.sample(unseen_questions, min(7, len(unseen_questions)))
        selected_seen = random.sample(seen_questions, min(3, len(seen_questions)))

        total_selected = selected_unseen + selected_seen

        # 🔁 If less than 10 selected, fill from remaining (but no repeats)
        if len(total_selected) < 10:
            already_selected_ids = {q.id for q in total_selected}
            remaining_pool = [q for q in all_questions if q.id not in already_selected_ids]
            filler_needed = 10 - len(total_selected)
            filler = random.sample(remaining_pool, min(filler_needed, len(remaining_pool)))
            total_selected += filler

        # Shuffle the final question list
        random.shuffle(total_selected)

        # ✅ Save question IDs for grading later
        request.session['attempted_questions'] = [q.id for q in total_selected]
        request.session['quiz_start_time'] = now().isoformat()

        return render(request, 'quiz/quiz.html', {
            'questions': total_selected,
            'selected_difficulty': selected_difficulty,
        })

    return redirect('quiz_home')

def leaderboard_view(request):
    active_user_ids = QuizAttempt.objects.values_list('user_id', flat=True).distinct()
    leaderboard = LeaderboardProfile.objects.filter(
        user__id__in=active_user_ids
    ).select_related('user').order_by('-average_rating')

    return render(request, 'quiz/leaderboard.html', {
        'leaderboard': leaderboard,
    })


@login_required
def submit_quiz(request):
    if request.method == 'POST':
        from datetime import timedelta

        unlocked = []
        questions = QuizQuestion.objects.filter(id__in=request.session.get('attempted_questions', []))
        results = []
        score = 0
        attempted_question_ids = []

        for question in questions:
            user_answer = request.POST.get(f'question_{question.id}')
            correct = str(question.correct_option)
            is_correct = user_answer == correct
            if is_correct:
                score += 1
            results.append({
                'question': question.question_text,
                'user_answer': getattr(question, f'option{user_answer}') if user_answer else None,
                'correct_answer': getattr(question, f'option{correct}'),
                'is_correct': is_correct,
            })
            attempted_question_ids.append(question.id)

        results = [r for r in results if r['user_answer']]
        total_questions = 10
        correct_answers = score
        wrong_answers = total_questions - correct_answers
        percentage = round((correct_answers / total_questions) * 100, 2)

        def format_time_taken(td):
            total_seconds = int(td.total_seconds())
            minutes, seconds = divmod(total_seconds, 60)
            return f"{minutes:02d}:{seconds:02d}"

        start_time_str = request.session.get('quiz_start_time')
        time_taken = None
        formatted_time_taken = None

        if start_time_str:
            start_time = parse_datetime(start_time_str)
            time_taken = now() - start_time
            formatted_time_taken = format_time_taken(time_taken)
            request.session.pop('quiz_start_time', None)

        difficulty = request.session.get('selected_difficulty', 'N/A')
        request.session.pop('selected_difficulty', None)

        QuizAttempt.objects.create(
            user=request.user,
            score=score,
            total=total_questions,
            difficulty=difficulty,
            time_taken=time_taken,
        )

        def award(name):
            from achievements.utils import award_achievement
            unlocked_name = award_achievement(request.user, name)
            if unlocked_name:
                unlocked.append(unlocked_name)

        # Milestones
        total_attempts = QuizAttempt.objects.filter(user=request.user).count()
        if total_attempts == 1:
            award("First Blood")
        elif total_attempts == 5:
            award("Quiz Grinder")
        elif total_attempts == 20:
            award("Quiz Addict")

        # Performance
        if score >= 8:
            award("Quiz Master")
        if score == 10:
            award("Quiz God")
        if score == 0:
            award("Flop Show")

        # Streaks
        last_attempts = QuizAttempt.objects.filter(user=request.user).order_by('-attempted_at')[:5]
        high_scores = [a.score for a in last_attempts if a.score >= 8]
        if len(high_scores) >= 3:
            award("On Fire")
        if len(high_scores) == 5:
            award("Unstoppable")

        # Comeback logic
        if last_attempts.count() >= 2:
            prev_score = last_attempts[1].score
            if prev_score < 5 and score == 10:
                award("Comeback King")
            if prev_score < 4 and score > 8:
                award("Bounce Back")

        # Difficulty-based
        easy_quizzes = QuizAttempt.objects.filter(user=request.user, difficulty='Easy').count()
        hard_quizzes = QuizAttempt.objects.filter(user=request.user, difficulty='Hard').count()
        if easy_quizzes >= 5:
            award("Easy Peasy")
        if hard_quizzes >= 5:
            award("Tough Cookie")

        # Failure streak
        low_scores = QuizAttempt.objects.filter(user=request.user, score__lte=6).count()
        if total_attempts >= 10 and low_scores == total_attempts:
            award("Never Give Up")

        # Leaderboard update
        quiz_rating = calculate_quiz_rating(score, total_questions, time_taken, difficulty)
        lb, _ = LeaderboardProfile.objects.get_or_create(user=request.user)
        user_attempts = QuizAttempt.objects.filter(user=request.user)

        if not user_attempts.exists():
            lb.quizzes_taken = 1
            lb.average_rating = quiz_rating
            lb.accuracy = round((score / total_questions) * 100, 2)
            request.user.quiz_attempts = 1
            request.user.highest_score = score
        else:
            lb.quizzes_taken = user_attempts.count()
            total_rating = sum(
                calculate_quiz_rating(a.score, a.total, a.time_taken, a.difficulty)
                for a in user_attempts
            )
            lb.average_rating = round(total_rating / lb.quizzes_taken, 2)

            total_correct = sum(a.score for a in user_attempts)
            total_questions_done = sum(a.total for a in user_attempts)
            lb.accuracy = round((total_correct / total_questions_done) * 100, 2) if total_questions_done else 0
            request.user.quiz_attempts = lb.quizzes_taken
            request.user.highest_score = max(a.score for a in user_attempts)

        lb.save()
        request.user.save()

        leaderboard = LeaderboardProfile.objects.select_related('user').filter(
            Q(user__quizattempt__isnull=False)
        ).distinct().order_by('-average_rating')

        # 🏆 Leaderboard Achievements
        # 🏆 Leaderboard Achievements
        try:
            ranked_leaderboard = list(leaderboard)
            rank = ranked_leaderboard.index(next(lb for lb in leaderboard if lb.user == request.user)) + 1

            if rank <= 10:
                award("Top 10 Player")

            appeared_before = request.user.userachievement_set.filter(achievement__name="Leaderboard Debut").exists()
            if not appeared_before:
                award("Leaderboard Debut")

    # 🆕 Consistent Performer (in top 50 for at least 3 attempts)
            past_ranks = request.session.get('past_ranks', [])
            if rank <= 50:
                past_ranks.append(rank)
                request.session['past_ranks'] = past_ranks[-5:]  # keep last 5

                if len([r for r in past_ranks if r <= 50]) >= 3:
                    award("Consistent Performer")

    # 🆕 Rating Machine
            if lb.average_rating >= 80 and lb.quizzes_taken >= 5:
                award("Rating Machine")

    # 🆕 Climbing Fast (optional: store previous rank in session or DB)
            prev_rank = request.session.get('last_rank')
            if prev_rank and prev_rank - rank >= 5:
                award("Climbing Fast")

            request.session['last_rank'] = rank

        except StopIteration:
            pass


        request.session['attempted_questions'] = attempted_question_ids

        if percentage >= 90:
            performance_level = "Legend"
        elif percentage >= 75:
            performance_level = "Pro"
        elif percentage >= 50:
            performance_level = "Intermediate"
        else:
            performance_level = "Beginner"
        request.session['quiz_submitted'] = True
        request.session['quiz_result_context'] = {
    'score': score,
    'total_questions': total_questions,
    'correct_answers': correct_answers,
    'wrong_answers': wrong_answers,
    'selected_difficulty': difficulty,
    'percentage': percentage,
    'results': results,
    'performance_level': performance_level,
    'time_taken': formatted_time_taken,
    'unlocked_achievements': unlocked,
}
        return redirect('quiz_result_page')

    return redirect('quiz_home')
@login_required
def quiz_result_page(request):
    context = request.session.pop('quiz_result_context', None)
    if not context:
        return redirect('quiz_home')

    leaderboard = LeaderboardProfile.objects.select_related('user').filter(
        Q(user__quizattempt__isnull=False)
    ).distinct().order_by('-average_rating')

    context['leaderboard'] = leaderboard
    return render(request, 'quiz/result.html', context)
