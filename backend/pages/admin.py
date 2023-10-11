from django.contrib import admin

from .models import CheckIn, Visits
admin.site.register(CheckIn)
admin.site.register(Visits)