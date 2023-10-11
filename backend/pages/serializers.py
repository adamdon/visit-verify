# serializers.py
from rest_framework import serializers

from .models import CheckIn, Visits

class CheckInSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CheckIn
        fields = ('name', 'status')

class VisitsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Visits
        fields = ('username', 'checkInTime', 'checkOutTime', 'ExpectedDuration', 'GPS_Location')