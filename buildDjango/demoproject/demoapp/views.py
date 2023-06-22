from django.shortcuts import render
from django.template import loader
# Create your views here.
from django.http import HttpResponse
from django.http import HttpResponseRedirect #just added

from .models import Member #new1
from .models import Result #new2

def home(request):
    return HttpResponse("Hello World")

#Just added

def form(request):
    if (request.method=="GET"):
        return render(request, 'form.html', {})
    elif (request.method=="POST"):
        if 'form' in request.POST:
            text=request.POST["text"]
            email=request.POST["email"]
            password=request.POST["password"]

            new_book=Member(text=text, email=email, password=password)
            new_book.save()
        if 'form2' in request.POST:
            score=request.POST["score"]
            nickname=request.POST["nickname"]

            # if len(nickname) < 4:
            #     html = "should be more than 4"
            #     nickname="hi"
            #     return HttpResponse('rubbish')

            new_score=Result(nickname=nickname, score=score)
            new_score.save()

            # if Result.objects.filter(nickname=nickname).exists():
            #     html = 'try again'
            # else:
            #     new_score.save()

            # template = loader.get_template('form.html')
            return HttpResponseRedirect("http://127.0.0.1:8000/result2")
        return render(request, 'form.html', {})



# def form(request):
#     if (request.method=="POST"):
#         text=request.POST["text"]
#         email=request.POST["email"]
#         password=request.POST["password"]

#         new_book=Member(text=text, email=email, password=password)
#         new_book.save()
#     return render(request, 'form.html', {})
def testing(request):
    mydata = Member.objects.all()
    template = loader.get_template('result.html')
    context = {
        'mymembers' : mydata,
    }
    return HttpResponse(template.render(context, request))

def testing2(request):
    # mydata = Result.objects.all()
    # mydata = Result.objects.all().order_by('id', '-score').values()
    mydata = Result.objects.all().order_by('-score')[0:10]
    template = loader.get_template('result2.html')
    context = {
        'mymembers' : mydata,
    }
    return HttpResponse(template.render(context, request))