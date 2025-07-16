from django.shortcuts import render

def home_view(request):
    nickname = request.session.pop('nickname', None)
    return render(request, 'h_index.html', {'nickname': nickname})
