# Understanding Django

* How to create a project
  * `django-admin startproject <project_name>` in CMD
  * Your folder will be created
  * To check your file whether it is running or not
    * `py manage.py runserver` in CMD, you will get `Successfully installed` comment

## Creating an Application

* Open CMD and type `py manage.py startapp <application_name>`

* Open your project root folder, there we can find some files.

* In `migrations` folder, open `views.py`
  * We need to send the request and receive the response back

```python
# in views.py file
from django.shortcuts import render
from django.http import HttpResponse

def display(request):
    s = '<h1>Welcome Message</h1>'
    return HttpResponse(s)
```

* In `urls.py` add `path('abc', views.display)` in  `urlpatterns` 
* Open Chrome, and type `abc` after file name. Your test will be displayed
* It is difficult to wrote all the code in string format, so we use templates



### Creating New Project

* `django-admin startproject KITS_TEMP`
* Move to `cd KITS_TEMP`
* Run `py manage.py startapp CAI`
* Here `KITS_TEMP`is a `Project` and `CAI` is an application
  * We can have Multiple Applications in a single folder.
  * Move to `settings.py` and add `'CAI,'` in InstalledApps List
  * Create a new folder `template` by right clicking the`KITS_TEMP` folder (root folder of our project) - For HTML files
  * Create a new folder `static` by right clicking the`KITS_TEMP` folder (root folder of our project) - For CSS files and images.
  * Create a path in `settings.py` under BASE_DIR
    * `TEMP_DIR = os.path.join(BASE_DIR, "template")`
    * `STATIC_DIR = os.path.join(BASE_DIR, "static")`
    * Go to `TEMPLATES` List and add `[TEMP_DIR]` for `DIRS`
      * Add `'static/'` for `STATIC_URL` and add `STATICFILES_DIR = [STATIC_DIR]`
  * Once `settings.py` setup is completed, we have to create `index.html`

```
a welcome message in index.html in template folder and link demo.css
<!DOCTYPE HTML>
{% load static %}

-- Syntax for linking css files --
<link rel = "" href = {% static "css/demo.css"}>
```

* Open `views.py`

  ```python
  # in views.py file
  from django.shortcuts import render
  from django.http import HttpResponse
  
  def display(request):
      return request(render,'index.html')
  ```

* Open `urls.py`

```python
from django.urls import path
from CAI import views as v1

urlpattern = [path('admin/', admin.site.urls), path('xyz', v1.display)]
```

* Create  `demo.css` under `static` folder

  ```css
  h1{
      color:red
  }
  ```

*  Copy some images into `images` folder under `static` folder

  ```
  linking images under index.html
  
  <img src = "{% static "images/chirul.jpg" % }" alt = "alt msg">
  
  in body tag
  ```

* Under `KITS_TEMP` to create a new app `py manage.py startapp CAI2`

* You will get CAI2 folder under KITS_TEMP.

* Go to `settings.py` and add `'CAI2,'` under `InstalledApps`

* Go to `views.py` under `CAI2` folder and add a `template_view` method

  ```python
  def template_view(request):
      name = 'gangothri'
      marks = "10"
      addr = "guntur"
      # to get all these details into html file, we create a dict
      
      my_dict = {'name': name, 'marks': marks, "addr": addr}
      
      return render(request, "student.html", my_dict)
  ```

* Go to `KITS_TEMP` go to `urls.py`

  ```python
  from CAI2 import views as v2
  
  urlpatters = [path('abc', v2.template_view)]
  ```

* Create `student.html` in `template` folder

```html
<body>
    <h1>
        Student details:
    </h1>
    <ul>
        <li>{{name}}</li>
        <li>{{marks}}</li>
        <li>{{addr}}</li>
    </ul>
</body>

It will display in your server.

127.0.0.1.8000/abc
```



## Connection Backend DB with Django

* `django-admin startproject KITS_T=model`
* Move to `cd KITS_model`
* Run `py manage.py startapp CAI`
* Here `KITS_TEMP`is a `Project` and `dbmodel` is an application
  * We can have Multiple Applications in a single folder.
  * Move to `settings.py` and add `'dbmodel,'` in InstalledApps List
  * Check `dbconnection` is perfect or not.
    * 

