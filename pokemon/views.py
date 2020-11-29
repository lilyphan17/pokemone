from django.shortcuts import render


# Create your views here.

def pokemon(request):
    return render(request, 'pokemon/home.html')


def pokedex(request):
    return render(request, 'pokemon/pokedex.html')


def quiz(request):
    return render(request, 'pokemon/quiz.html')


def dreamTeam(request):
    return render(request, 'pokemon/dreamTeam.html')


def starters(request):
    return render(request, 'pokemon/starters.html')


def contact(request):
    return render(request, 'pokemon/contact.html')
