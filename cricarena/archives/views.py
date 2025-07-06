from django.shortcuts import render

def react_page(request):
    return render(request, 'archives/index.html')
