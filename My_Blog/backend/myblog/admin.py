from django.contrib import admin # type: ignore
# from .models import Myblog,CustomUser
# from .forms import Usercreationform,Userchangeform
from django.contrib.auth.admin import UserAdmin
from .models import Blog

# Register your models here.
admin.site.register(Blog)
# @admin.register(CustomUser)
# class AdminUser(UserAdmin):
#     add_form = Usercreationform
#     form = Userchangeform
#     model = CustomUser

    