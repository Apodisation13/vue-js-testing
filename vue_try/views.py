# from django.http import HttpResponse

from django.shortcuts import render


def home_view(request):
    # return HttpResponse('hello from Django')
    values = range(6)
    health = 95
    dj_obj = {'key1': 'value1', 'key2': 'value2'}

    context = {
        'values_list': values,
        'health_from_django': health,
        'object_from_django': dj_obj
    }
    return render(request, 'vue_try/try.html', context=context)
