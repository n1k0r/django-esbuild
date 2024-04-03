from django.views.generic import TemplateView


class ButtonsView(TemplateView):
    template_name="buttons/form.html"
    extra_context = {
        "title": "Buttons",
    }
