from django.contrib import admin
from .models import Poll , Option
from .models import QuizQuestion, QuizAttempt

# admin.site.register(Poll)


class OptionInline(admin.TabularInline):
    model = Option
    extra = 2

class PollAdmin(admin.ModelAdmin):
    inlines = [OptionInline]

admin.site.register(Poll, PollAdmin)
admin.site.register(Option)


class QuizQuestionAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'correct_option', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('question_text',)

admin.site.register(QuizQuestion, QuizQuestionAdmin)
admin.site.register(QuizAttempt)
