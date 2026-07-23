import json
import logging
import requests
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .forms import ContactForm

OLLAMA_CHAT_URL = getattr(
    settings, "OLLAMA_CHAT_URL", "https://ai.jfjelstul.org/api/chat"
)
OLLAMA_TIMEOUT = 10

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            import os
            # SQLite on Vercel is read-only; construct instance in-memory without database write.
            if os.environ.get('VERCEL') == '1' and settings.DATABASES['default']['ENGINE'] == 'django.db.backends.sqlite3':
                contact = form.save(commit=False)
            else:
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


@require_http_methods(["POST"])
def ai_chat_view(request):
    try:
        data = json.loads(request.body)
        user_message = data.get("message", "").strip()
    except (json.JSONDecodeError, TypeError):
        return JsonResponse({"reply": "Invalid request."}, status=400)

    if not user_message:
        return JsonResponse({"reply": "No message provided."}, status=400)

    system_message = getattr(settings, "OLLAMA_SYSTEM_MESSAGE", "")
    messages = []
    if system_message:
        messages.append({"role": "system", "content": system_message})
    messages.append({"role": "user", "content": user_message})

    payload = {
        "model": "llama2:latest",
        "stream": False,
        "messages": messages,
    }

    try:
        r = requests.post(
            OLLAMA_CHAT_URL,
            json=payload,
            timeout=OLLAMA_TIMEOUT,
        )
        r.raise_for_status()
        body = r.json()
        reply = (body.get("message") or {}).get("content", "No response.")
        return JsonResponse({"reply": reply})
    except (requests.RequestException, ValueError, KeyError):
        logging.exception("Ollama chat request failed")
        return JsonResponse({
            "reply": "The server is not running right now. Jake's PC might be off!"
        })


def city(request):
    return render(request, 'portfolio/city.html')

def hardware(request):
    return render(request, 'portfolio/hardware.html')

