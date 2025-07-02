from django.shortcuts import render

def stadium_home(request):
    return render(request, 'react/index.html')
