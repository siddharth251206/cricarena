from django.shortcuts import render

def ipl_home(request):
    return render(request, 'ipl/index.html')
