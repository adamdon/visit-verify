from django.db import models

# Create your models here.

# class CheckIn(models.Model):
#     name = models.CharField(max_length=60)
#     status = models.CharField(max_length=60)
#     def __str__(self):
#         return self.name

class Users(models.Model):
    username = models.CharField(max_length=60, primary_key=True)
    #username = models.CharField(max_length=60)
    firstname = models.CharField(max_length=60)
    lastname = models.CharField(max_length=60)
    contact = models.CharField(max_length=60)
    email = models.EmailField(max_length=254)
    address = models.CharField(max_length=60)
    def __str__(self):
        return self.username
    class Meta:
        db_table = "Users"

class Visits(models.Model):
    username = models.ForeignKey(Users, on_delete=models.CASCADE)
    #username = models.CharField(max_length=60)
    checkInTime = models.IntegerField()
    checkOutTime = models.IntegerField(null=True, blank=True)
    ExpectedDuration = models.IntegerField()
    GPS_Location = models.CharField(max_length=60)
    def __str__(self):
        return str(self.username)
    class Meta:
        db_table = "visits"