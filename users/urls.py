from django.urls import path
from django.conf.urls import url
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns

from . import views
from sparta import settings

app_name = 'users'

urlpatterns = [
    path('signup/', views.signup_form, name='signup'),
    path('login/', views.login_form, name='login'),

    path('backend/activate/<uidb64>/<token>', views.activate, name='activate'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
