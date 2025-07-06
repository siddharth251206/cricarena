from django.shortcuts import render, redirect, get_object_or_404
from .models import Poll , Option
from django.http import JsonResponse
from django.shortcuts import render
from .models import QuizQuestion
from .models import QuizAttempt
import random
# Create your views here.

# def quiz_home(request):
#     """
#     Render the quiz home page.
#     """
#     return render(request, 'quiz/page.html')

def poll_list(request):
    polls = Poll.objects.all().order_by('-created_at')
    # questions = QuizQuestion.objects.all() 
    all_questions = list( QuizQuestion.objects.all())

    if ( len(all_questions) > 5 ):
        questions = random.sample( all_questions,5)
    else:
        questions = all_questions
    
    return render(request, 'quiz/poll.html', {'polls': polls , 'questions': questions})

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


# ------------------------------
# QUIZ


def cricket_quiz(request):
    # Get all questions and randomize
    all_questions = list(QuizQuestion.objects.all())
    
    # Select 10 random questions
    if len(all_questions) > 5:
        questions = random.sample(all_questions, 5 )
    else:
        questions = all_questions
    
    context = {
        'questions': questions,
    }
    return render(request, 'quiz/quiz.html', context)

def submit_quiz(request):
    if request.method == 'POST':
        questions = QuizQuestion.objects.all()
        user_answers = {}
        results = []
        score = 0

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

        results = [
    r for r in results if r['user_answer']  # Only keep answered questions
    ]

        return render(request, 'quiz/result.html', {
            'score': score,
            'total': questions.count(),
            'results': results,
        })