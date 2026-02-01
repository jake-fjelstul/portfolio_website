from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

from .forms import ContactForm

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()

            # Send email to you
            subject = f"New message from {contact.name}"
            body = f"Name: {contact.name}\nEmail: {contact.email}\n\n{contact.message}"

            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=False,
            )

            messages.success(request, "Thanks for reaching out! I’ll get back to you soon.")
            return redirect('index')
        else:
            messages.error(request, "There was an error with your submission.")
    else:
        form = ContactForm()

    return render(request, 'portfolio/index.html', {'form': form})


def unity(request):
    return render(request, 'portfolio/unity.html')

def django_projects(request):
    return render(request, 'portfolio/django.html')

def timeline(request):
    return render(request, 'portfolio/timeline.html')

def rust(request):
    return render(request, 'portfolio/rust.html')

def react(request):
    return render(request, 'portfolio/react.html')

def writing(request):
    return render(request, 'portfolio/writing.html')

def cpp_projects(request):
    return render(request, 'portfolio/cpp.html')

def java_projects(request):
    return render(request, 'portfolio/java.html')

def ai_page(request):
    return render(request, 'portfolio/ai.html')

def city(request):
    return render(request, 'portfolio/city.html')

def hardware(request):
    return render(request, 'portfolio/hardware.html')

