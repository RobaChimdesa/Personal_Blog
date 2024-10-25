# from django.shortcuts import render,get_object_or_404 # type: ignore
# from rest_framework.response import Response # type: ignore
# from rest_framework.generics import GenericAPIView,RetrieveAPIView  # type: ignore
# from rest_framework.permissions import AllowAny, IsAuthenticated  # type: ignore
# from rest_framework_simplejwt.tokens import RefreshToken  # type: ignore  
# from rest_framework.decorators import api_view # type: ignore
# from rest_framework import status # type: ignore
# from .models import Myblog
# from .serializer import *


# # Create your views here.

# class UserRegistrationAPView(GenericAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = UserRegistration

#     def post(self,request,*args,**kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         token = RefreshToken.for_user(user)
#         data = serializer.data
#         data["tokens"] = {
#             "refresh":str(token),
#             "access":str(token.access_token)}
        
#         return Response(data,status=status.HTTP_201_CREATED)
    

# class UserLoginAPIView(GenericAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = UserLoginSerializer

#     def post(self,request,*args,**kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception = True)
#         user = serializer.validated_data
#         serializer = UserSerializer(user)
#         token = RefreshToken.for_user(user)
#         data = serializer.data
#         data["tokens"] = {
              
#                 "refresh": str(token),  # Use the correct variable here  
#                 "access": str(token.access_token)  # Access token from refresh token  
            
#         }
#         return Response(data,status=status.HTTP_200_OK)


# class UserLogoutAPIView(GenericAPIView):
#     permission_classes = [IsAuthenticated]

#     def post(self,request,*args,**kwargs):
#         try:
#             refresh_token = request.data['refresh']
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception:
#             return Response(status=status.HTTP_400_BAD_REQUEST)




# @api_view(['GET','POST'])
# def blog_list(request):
#     if request.method == 'GET':
#         blogs = Myblog.objects.all()
#         serializer = BlogSerializer(blogs, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = BlogSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

# @api_view(['GET','PATCH','PUT','DELETE'])
# def blog_detail(request,pk):
#     blogs = get_object_or_404(Myblog,id=pk)
#     if request.method == 'GET':
#         serializer = BlogSerializer(blogs)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = BlogSerializer(blogs,data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'DELETE':
#         blogs.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

from rest_framework import viewsets
from .models import Blog
from .serializer import BlogSerializer

class BlogViewSet(viewsets.ModelViewSet):
      queryset = Blog.objects.all().order_by('-created_at')
      serializer_class = BlogSerializer

                 