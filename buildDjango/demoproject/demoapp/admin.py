from django.contrib import admin

# Register your models here.
from .models import Member #added
from .models import Result #added

admin.site.register(Member)
admin.site.register(Result)