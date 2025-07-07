from django.shortcuts import render

def tactics_view(request):
    return render(request, 'crictactics/tactics.html')
