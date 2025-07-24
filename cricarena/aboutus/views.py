from django.shortcuts import render

def aboutus_page(request):
    return render(request, 'index.html')
