from django.shortcuts import render
from rest_framework import viewsets
import datetime

from .serializers import UsersSerializer, VisitsSerializer
from .models import Users, Visits


from rest_framework.response import Response
from rest_framework import status

# Create your views here.


def home(request):
    return render(request, "pages/home.html", {})

# views.py


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('username')
    serializer_class = UsersSerializer

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
    
    def put(self, request, format=None):
        data = request.data

        try:
            instance = Visits.objects.get(username=data["username"], checkOutTime=None)
            print(instance)
        except Visits.DoesNotExist:
            return Response({'error':'resource doesnt exist'}, status=status.HTTP_404_NOT_FOUND)
        
        instance.checkOutTime = data["checkOutTime"]
        instance.save()

        

        serializer = VisitsSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)