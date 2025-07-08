from django.shortcuts import render

# Create your views here.
def comparison_page(request):
    return render(request, 'comparison/index.html')