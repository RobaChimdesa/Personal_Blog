from django.urls import path,include # type: ignore
from .views import BlogViewSet
from rest_framework.routers import DefaultRouter # type: ignore
# from . import views
router = DefaultRouter()
router.register(r'blogs',BlogViewSet)
urlpatterns = [
    # path("blog",views.blog_list, name='myblog'),
    # path("signup/",UserRegistrationAPView.as_view(),name="signup"),
    # path("signin/",UserLoginAPIView.as_view(),name="signin"),
    # path("logout/",UserLogoutAPIView.as_view(),name = "logout"),
    # path("blog/<int:pk>",views.blog_detail,name="blog_detail")
    path('',include(router.urls))
]
