# from rest_framework import serializers # type: ignore
# from .models import Myblog,CustomUser
# from django.contrib.auth import authenticate # type: ignore

# class BlogSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Myblog
#         fields = '__all__'  


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('id','username','email')

# class UserRegistration(serializers.ModelSerializer):
#     password1 = serializers.CharField(write_only = True)
#     password2 = serializers.CharField(write_only = True)
#     class Meta:
#         model = CustomUser
#         fields = ('id','username','email','password1','password2')
#         extra_kwargs= {"password":{"write_only":True}}
#     def validate(self,attrs):
#         if attrs['password1'] != attrs['password2']:
#             raise serializers.ValidationError({"password1":"Password didn't match"})
#         password = attrs.get('password1','')
#         if len(password)<8:
#             raise serializers.ValidatonError("passwor must be atleast 8 characters")
#         return attrs
#     def create(self,validated_data):
#         password=validated_data.pop("password1")
#         validated_data.pop("password2")
#         return CustomUser.objects.create_user(password=password,**validated_data)
    
# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.CharField()
#     password = serializers.CharField(write_only=True)
#     def validate(self,data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError("Incorrect Credential")


from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'



     