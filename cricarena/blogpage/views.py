from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from .models import Post
from .serializers import PostSerializer


from django.shortcuts import render

def blog_page(request):
    return render(request, 'blogpage/blog.html')


class PostListCreate(APIView):
    permission_classes = [AllowAny]  # allow any user (logged in or not)

    def get(self, request):
        posts = Post.objects.all().order_by('-created_at')  # newest first
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        content = request.data.get("content", "")
        # Determine author and verification
        if request.user and request.user.is_authenticated:
            author = request.user.username
            verified = True
        else:
            author = "Guest"
            verified = False
        post = Post.objects.create(
            content=content,
            author_name=author,
            is_verified=verified
        )
        serializer = PostSerializer(post)
        return Response(serializer.data, status=201)
