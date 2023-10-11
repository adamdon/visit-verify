# serializers.py
from rest_framework import serializers

from .models import Users, Visits

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'firstname', 'lastname', 'contact', 'email', 'address')

class VisitsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Visits
        fields = ('username', 'checkInTime', 'checkOutTime', 'ExpectedDuration', 'GPS_Location')