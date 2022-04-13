#  Django

### Basic App

* Create an App and add app name to `installedapps`  

* Add `path('abc', views.abc)`

  ```python
  # urls.py
  
  from test11 import views
  urls = [path('abc', views.abc)]
  ```

* Create `abc()` in `views.py`

  ```python
  import django.http import HttpResponse
  def abc(request):
      s1 = "<h1>Welcome to Django</h1>"
      request HttpResponse(s1)
  ```

  

## New Project

* Run `django-admin startproject FifthPro`

* Run `django-admin startapp AppOne`

* Complete all the basic steps

* Create Functions in `views.py`

  ```python
  def Gun(request):
      return render(request, "guntur.html")
  def Vij(request):
      return render(request, "vijayawada.html")
  def viz(request):
      return render(request, "vizag.html")
  ```

* Create `paths` in `urls.py`

  ```python
  # urls.py
  from AppOne import views
  
  urlpatterns = [
  	path('admin/', admin.site.urls),
      path('guntur', views.Gun),
      path('vizag', views.Viz),
      path('vij', views.Vij)
  ]
  ```

* Create a `template` folder by right-clicking into `FifthPro` Project

* Set the `TEMP_DIR` 

* Create `guntur.html`, `vijayawada.html`, `vizag.html` in `template` folder

  ```html
  guntur.html
  
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Guntur</title>
  </head>
  
  <body>
      <h1>Welcome to Guntur</h1>
  
  </body>
  
  </html>
  
  same as guntur, create vizag, vijayawada files
  ```

* Run `python manage.py runserver` in `FifthPro`