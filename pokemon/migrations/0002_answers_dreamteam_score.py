# Generated by Django 3.1.3 on 2020-12-09 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_answer', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='DreamTeam',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('teamName', models.CharField(max_length=100)),
                ('pick1', models.CharField(max_length=100)),
                ('pick2', models.CharField(max_length=100)),
                ('pick3', models.CharField(max_length=100)),
                ('pick4', models.CharField(max_length=100)),
                ('pick5', models.CharField(max_length=100)),
                ('pick6', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField()),
            ],
        ),
    ]
