#Configuracion Basica entorno en Windows 10 **python 3.9.5**

  Desde la pagina oficial de python descargar la ultima version para windows 10
* [Descargar ultima version de python](https://www.python.org/downloads/)  
* [djangoproject.com](https://djangoproject.com/) **FRAMEWORK documentacion e informacion**

***

### instalar entorno virtual

  Desde una terminal ejecutar :
~~~
pip install virtualenv
~~~

### Crear entorno virtual llamado Servicio donde se instala Django y demas utilidades

~~~
virtualenv Servicio
~~~

### Activar entorno vitural

~~~
Servicio\Scripts\activate
~~~

* deactivate para ***desactivar y salir del entorno virtual***

# Instalar Django 3.2.3/ / Motor Base de datos SQLlite 3

  Una vez creado el entorno virtual y activado correctamente se puede instalar los programas y dependencias necesarias.

~~~
pip install Django
~~~
  Para ver la version de django en una terminal escribir ***python***

~~~
 import django
 django.VERSION
 exit()
~~~

### Crear proyecto en django

~~~
django-admin startproject UniversitySocialNetwork
~~~
