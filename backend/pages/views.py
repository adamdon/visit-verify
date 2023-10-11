from django.shortcuts import render
from rest_framework import viewsets
import datetime

from .serializers import CheckInSerializer, VisitsSerializer
from .models import CheckIn, Visits


from rest_framework.response import Response
from rest_framework import status

# Create your views here.


def home(request):
    return render(request, "pages/home.html", {})

# views.py


class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all().order_by('name')
    serializer_class = CheckInSerializer

class VisitsViewSet(viewsets.ModelViewSet):
    queryset = Visits.objects.all()
    serializer_class = VisitsSerializer

    def post(self, request, format=None):
        data = request.data
        data.update({'checkout': None})
        serializer = VisitsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, username, format=None):
        try:
            instance = Visits.objects.get(username=username, checkOutTime=None)
            data = { 'username': instance.username,
                    'checkInTime' : instance.checkInTime,
                    'checkOutTime' : datetime.now(),
                    'ExpectedDuration' : instance.ExpectedDuration,
                    'GPS_Location': instance.GPS_Location}
        except Visits.DoesNotExist:
            return Response({'error':'resource doesnt exist'}, sstatus=status.HTTP_404_NOT_FOUND)
        
        serializer = VisitsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)