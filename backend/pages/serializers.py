# serializers.py
from rest_framework import serializers

from .models import CheckIn

class CheckInSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CheckIn
        fields = ('name', 'status')