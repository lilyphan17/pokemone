from django.db import models


class DreamTeam(models.Model):
    name = models.CharField(max_length=100)
    teamName = models.CharField(max_length=100)
    pick1 = models.CharField(max_length=100)
    pick2 = models.CharField(max_length=100)
    pick3 = models.CharField(max_length=100)
    pick4 = models.CharField(max_length=100)
    pick5 = models.CharField(max_length=100)
    pick6 = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)


class Answers(models.Model):
    last_answer = models.CharField(max_length=100)


class Score(models.Model):
    highscore = models.IntegerField(null=True, blank=True)


class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()