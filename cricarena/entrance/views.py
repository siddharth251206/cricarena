from django.shortcuts import render

def entrance_view(request):
    return render(request, 'entrance/index.html')
