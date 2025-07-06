from django.shortcuts import render

def stadium_home(request):
    return render(request, 'stadium/index.html')
