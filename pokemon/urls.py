from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.pokemon, name="pokemon"),
    path('pokedex', views.pokedex, name="pokedex"),
    path('contact', views.contact, name="contact"),

    # Dream Team page
    path('dreamTeam', views.dreamTeam, name="dreamTeam"),
    path('add', views.add, name="add"),
    path('update/<int:team_id>', views.update_team, name="update_team"),
    path('delete/<int:team_id>', views.delete_team, name="delete_team"),

    # Authentication page
    path('register', views.register, name="register"),
    path('login_view', views.login_view, name="login_view"),
    path('logout_view', views.logout_view, name="logout_view"),
    path('accounts/login/', auth_views.LoginView.as_view()),

    # Quiz page
    path('quiz', views.quiz, name="quiz"),
    path('test', views.test, name="test")
]