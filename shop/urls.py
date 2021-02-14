from django.urls import path, include
from django.contrib.staticfiles.urls import static

from . import views
from sparta import settings

app_name = 'shop'


urlpatterns = [
    path('', views.home, name='home'),
    path('shop/', views.shop, name='shop'),
    path('user/cart/', views.cart, name='cart'),
    path('user/profile/<int:id>/', views.profile, name='profile'),
    path('subscription-check/', views.subscription_check, name='subscription-check'),
    path('checkout/', views.checkout, name='check-out'),
    path('training-programs/', views.train_constructor, name='train_constructor'),

    path('update-item/', views.update_item, name='update-item'),
    path('process-order/', views.process_order, name='process-order'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
