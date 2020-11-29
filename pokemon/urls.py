from django.urls import path
from . import views

urlpatterns = [
    path('', views.pokemon),
    path('pokedex', views.pokedex),
    path('quiz', views.quiz),
    path('dreamTeam', views.dreamTeam),
    path('starters', views.starters),
    path('contact', views.contact)
]