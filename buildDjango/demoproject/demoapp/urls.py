from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('form', views.form, name = 'form'), #just added
    path('result', views.testing, name = 'result'), #just added
    path('result2', views.testing2, name = 'result2'), #just added
]
