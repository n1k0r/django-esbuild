from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name="main/home.html"
    extra_context = {
        "title": "Home",
        "header": "Home page",
    }
