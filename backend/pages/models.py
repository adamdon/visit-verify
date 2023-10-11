from django.db import models

# Create your models here.

class CheckIn(models.Model):
    name = models.CharField(max_length=60)
    status = models.CharField(max_length=60)
    def __str__(self):
        return self.name

# class Users(models.Model):
#     firstname = models.CharField(max_length=60)
#     lastname = models.CharField(max_length=60)
#     contact = models.CharField(max_length=60)
#     email = models.CharField(max_length=60)
#     address = models.CharField(max_length=60)
#     def __str__(self):
#         return self.firstname

class Visits(models.Model):
    username = models.CharField(max_length=60)
    checkInTime = models.DateTimeField()
    checkOutTime = models.DateTimeField(null=True, blank=True)
    ExpectedDuration = models.IntegerField()
    GPS_Location = models.CharField(max_length=60)
    def __str__(self):
        return self.username
    class Meta:
        db_table = "visits"