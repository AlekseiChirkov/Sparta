from django.urls import path
from django.contrib.staticfiles.urls import static, staticfiles_urlpatterns

from . import views
from sparta import settings

app_name = 'users'

urlpatterns = [
    # User registration
    path('signup/', views.signup_form, name='signup'),
    path('login/', views.login_form, name='login'),

    # Account activate
    path('backend/activate/<uidb64>/<token>', views.activate, name='activate'),
]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
