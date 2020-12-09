from django import forms
from .models import Contact, DreamTeam


class TeamForm(forms.ModelForm):
    class Meta:
        model = DreamTeam
        fields = '__all__'


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'

        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your name'
            }),
            'last_name': forms.TextInput(attrs={'class': 'form-control',
                                                'placeholder': 'Enter your last name', }),
            'email': forms.TextInput(attrs={'class': 'form-control',
                                            'placeholder': 'Enter your email'}),
            'message': forms.Textarea(attrs={'class': 'form-control',
                                             'placeholder': 'Enter your message',
                                             'cols': '1', 'rows': '2'})

        }
