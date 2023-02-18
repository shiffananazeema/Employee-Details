from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField("Name", max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    dateofjoining = models.DateField("Date of Joining", auto_now_add=True)
    department = models.CharField("Department", max_length=100)
    salary = models.CharField(max_length=20)


    def __str__(self):
        return self.name