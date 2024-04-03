from .settings import *


STATIC_ROOT = "/var/app/static/"
MEDIA_ROOT = "/var/app/media/"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "/var/app/db.sqlite3",
    }
}
