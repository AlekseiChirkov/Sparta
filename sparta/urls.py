"""sparta URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('', include('shop.urls')),
    path('accounts/', include('allauth.urls')),
    path('rest_auth/', include('rest_auth.urls')),
    path('rest_auth/registration/', include('rest_auth.registration.urls')),
    path('rest_framework/', include('rest_framework.urls')),
    # Django auth
    path('reset-password/', auth_view.PasswordResetView.as_view(),
         name='password_reset'),
    path('reset-password/confirm/<uidb64>/<token>',
         auth_view.PasswordResetConfirmView.as_view(),
         name='password_reset_confirm'),
    path('reset-password/complete/',
         auth_view.PasswordResetCompleteView.as_view(),
         name='password_reset_complete'),
    path('reset-password/done/', auth_view.PasswordResetDoneView.as_view(),
         name='password_reset_done'),

]
