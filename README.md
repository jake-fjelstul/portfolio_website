## Website Portfolio

Jake Fjelstul’s personal portfolio built with Django 5.0. The site highlights Unity builds, Django experiments, Rust tooling, React interfaces, and more—all wrapped in a single-page flow with a hero section, animated project grid, skills wall, and a contact form that emails submissions directly to Jake.

### Features
- **Project hub** linking to dedicated pages for Unity, Django, Python, Rust, React, C++, Java, AI experiments, and a career timeline (`portfolio/templates/portfolio/*`).
- **Animated UI** using Bootstrap 5, AOS scroll animations, and custom assets from `portfolio/static/portfolio`.
- **Contact form** (`portfolio.forms.ContactForm`) that persists messages in SQLite (`portfolio.models.ContactMessage`) and emails details via SMTP (`portfolio/views.py`).
- **Production-ready static pipeline** powered by WhiteNoise with assets collected into `staticfiles/`.

### Tech Stack
- Django 5.0, Python 3.13
- Bootstrap 5, vanilla JS, AOS
- SQLite (default) but any Django-supported DB works
- WhiteNoise for static serving

### Getting Started
1. **Install prerequisites**
   - Python 3.11+ (3.13 recommended)
   - Pip / virtualenv tools

2. **Clone & bootstrap**
   ```bash
   git clone <repo-url> website-portfolio
   cd website-portfolio
   python3 -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Configure environment**
   Create `.env` (or export vars) and supply:
   ```
   DJANGO_SECRET_KEY=<random-string>
   DJANGO_DEBUG=True
   DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USE_TLS=True
   EMAIL_HOST_USER=<sender-email>
   EMAIL_HOST_PASSWORD=<app-password>
   DEFAULT_FROM_EMAIL=<sender-email>
   CONTACT_EMAIL=<destination-email>
   ```
   Update `portfolio_site/settings.py` to read from env vars before deploying—hard-coded secrets are acceptable only for local demos.

4. **Run migrations and seed data**
   ```bash
   python manage.py migrate
   python manage.py createsuperuser  # optional for admin access
   ```

5. **Start the dev server**
   ```bash
   python manage.py runserver
   ```
   Visit `http://127.0.0.1:8000/` to browse the hero page, explore project tabs, and test the contact form.

### Working With Projects
- Update copy and links per page under `portfolio/templates/portfolio/`.
- Add static assets (images, videos, WebGL builds) inside `portfolio/static/portfolio/`.
- Use `python manage.py collectstatic` when preparing for production; WhiteNoise will serve the collected files.

### Testing
```bash
python manage.py test
```
(Add coverage as you grow the codebase.)

### Deployment Notes
- Set `DEBUG=False`, configure `ALLOWED_HOSTS`, and ensure static files are collected.
- Provide production SMTP credentials for the contact form.
- The project currently targets PythonAnywhere; adapt `portfolio_site/settings.py` if hosting elsewhere (Gunicorn + Whitenoise works on most VPS providers).

### Contact
Questions or collaboration ideas? Reach out via the on-site form or email Jake at `jfjelstul1@gmail.com`.
