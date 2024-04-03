from django.urls import path

import buttons.views
import main.views


urlpatterns = [
    path("", main.views.HomeView.as_view(), name="home"),
    path("buttons/", buttons.views.ButtonsView.as_view(), name="buttons"),
]
