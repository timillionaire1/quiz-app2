from django.shortcuts import render
from .server import Addbook

def HomePage(request):
    if (request.method=="POST"):
        text=request.POST["text"]
        email=request.POST["email"]
        password=request.POST["password"]

        new_book=Addbook(text=text, email=email, password=password)
        new_book.save()

    return render(request, 'index.html', {})