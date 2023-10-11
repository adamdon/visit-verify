from django.shortcuts import render
from rest_framework import viewsets

from .serializers import CheckInSerializer
from .models import CheckIn

# Create your views here.


def home(request):
    return render(request, "pages/home.html", {})

# views.py


class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all().order_by('name')
    serializer_class = CheckInSerializer