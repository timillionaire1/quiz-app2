from django.db import models

# Create your models here.

class Member(models.Model):
    text=models.TextField(max_length=200, null=False, blank=False)
    email=models.EmailField(max_length=200, null=False, blank=False)
    password=models.CharField(max_length=200, null=False, blank=False)

    # def __str__(self):
        # return self.
class Result(models.Model):
    nickname=models.TextField(max_length=200, null=True, blank=False)
    score=models.PositiveIntegerField(null=True, blank=False)
