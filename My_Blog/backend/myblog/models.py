# from django.db import models # type: ignore
# from django.contrib.auth.models import AbstractUser # type: ignore
# # Create your models here.
# class CustomUser(AbstractUser):
#     email = models.EmailField(unique=True)
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username']

#     groups = models.ManyToManyField(  
#         'auth.Group',  
#         related_name='customuser_set',  # Change the reverse relationship name  
#         blank=True,  
#         help_text='The groups this user belongs to.',  
#         verbose_name='groups'  
#     )  
    
#     user_permissions = models.ManyToManyField(  
#         'auth.Permission',  
#         related_name='customuser_set',  # Change the reverse relationship name  
#         blank=True,  
#         help_text='Specific permissions for this user.',  
#         verbose_name='user permissions'  
#     )  

#     def _str_(self):
#         return self.email

# class Myblog(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField(blank=True)
#     image = models.ImageField(null=True,blank=True,upload_to="images/")
#     posted_date = models.DateField(auto_now_add=True)


#     def _str_(self):
#         return self.title

from django.db import models
class Blog(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(max_length=500, blank=True) 
    # image = models.ImageField(null=True,blank=True,upload_to="images/")
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title
    

 