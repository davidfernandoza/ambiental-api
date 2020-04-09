# Ambiental-api

Se hace documentación del backend de la aplicación de ambiental.
Este utiliza las buenas practicas del protocolo HTTP.

## API
Es un juego de preguntas y respuestas con administración de usuarios y jugadores.

## Tabla de contenido


- [Tipos de Endpoint](#tipos-de-endpoint).
- [Permisos de los Endpoints](#permisos-de-los-endpoints).
- [Respuestas de tipo 200](#respuestas-de-tipo-200).
- [Errores de tipo 400](#errores-de-tipo-400).
- [Error interno del servidor](#error-interno-del-servidor).
- [Answers](#answers).
- [Auth](#auth).
- [Players](#players).
- [Questions](#questions).
- [Users](#users).


## Tipos de Endpoint


1. **Auth:** Se necesita un Token de autentificación para un *Usuario(user)* o un *Jugador(player)* y un Token de CSRF quemado en la APP.
2. **Public:** Se necesita como mínimo el token de CSRF quemado en la APP.

## Permisos de los Endpoints


1. **Publico(Public):** Tanto personas autentificadas y sin autentificar pueden ver el contenido.
2. **Usuario(User):** Solo los usuarios pueden ver el contenido.
3. **Jugador(Player):** Solo los jugadores pueden ver el contenido.


**Nota:** Hay Endpoints que pueden tener la mezcla de estos permisos, y hay Endpoints *Unicos(Unique)* que solo se pueden consumir por la persona que esta autentificada.


## Respuestas de tipo 200


Son respuestas exitosas que el servidor manda.

### Respuesta 200:
Son respuestas que se mandan cuando una petición *GET* es exitosa, esta respuesta trae un *payload* donde viene los datos a consumir los cuales pueden ser de tipo *object*, *array(objects)* o *null*

```
name: 'Ok',
status: 200,
message: 'Recurso entregado con exito'
payload: [{}] / {} / null

```

### Respuesta 201:
Son respuestas que se mandan cuando una petición *POST* es exitosa al crear un recurso, esta respuesta trae un *payload* donde viene los datos creados y es de tipo *object*

```
name: 'Created',
status: 201,
message: 'Recurso creado con exito'
payload: {}

```

### Respuesta 204:
Son respuestas que se mandan cuando una petición *PUT / PATCH / DELETE* es exitosa, esta respuesta solo manda un *status 204 (No Content)* el cual no tiene un *contenido*


## Errores de tipo 400


Son errores creados por el cliente de la API.

### Error 400:
La consulta esta mal formulada, esta trae un *path* informando cual atributo puede ser el dañino.

```
name: 'Bad Request',
status: 400,
code: 'ERR400',
message: 'Consulta incorrecta'
path: [
	attributes
]

```

### Error 401:
La consulta es rechazada porque hace falta una autentificación.

```
name: 'Unauthorized',
status: 401,
code: 'ERR401',
message: 'No autorizado para solicitar recursos'

```

### Error 403:
La consulta es rechazada porque el usuario o jugador no tiene los permisos suficientes para usar este endpoint.

```
name: 'Forbidden',
status: 403,
code: 'ERR403',
message: 'No existen los permisos suficientes'

```

### Error 404:
La consulta es rechazada porque el recurso no existe. puede o no puede traer el *code* y puede o no puede trer un *payload* con valor *null* o *[]*

```
name: 'Not Found',
status: 404,
code: 'ERR404',
message: 'Recurso no encontrado'

```

## Error interno del servidor


El servidor cuando presenta errores internos lanza este error.

```
name: 'Internal Server Error',
status: 500,
code: 'ERR500',
message: 'Error interno del servidor'

```

# Answers

## Get(Auth)


Entrega una respuesta en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la respuesta a buscar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

## Create(Auth)


Crea a una respuesta para asignarle a pregunta.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```id_questions``` : ```integer``` Id numerico de la pregunta que le pertenece esta respuesta.
2. ```description``` : ```string``` Atributo de texto, el cual almacena la respuesta en si.
3. ```is_correct``` : ```boolean``` Atributo booleano que indica si una respuesta es correcta o no.

## Permisos:


1. ***Usuario(User)***

## Update(Auth)


Edita una respuesta en particular, dependiendo del id seteado en la url.


## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la respuesta a editar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```id_questions``` : ```integer``` Id numerico de la pregunta que le pertenece esta respuesta.
2. ```description``` : ```string``` Atributo de texto, el cual almacena la respuesta en si.
3. ```is_correct``` : ```boolean``` Atributo booleano que indica si una respuesta es correcta o no.


## Permisos:
	

1. ***Usuario(User)***

## Delete(Auth)


Elimina una respuesta en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la respuesta a eliminar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.


## Permisos:
	

1. ***Usuario(User)***

# Auth

## LoginPlayer(Public)


Recurso para la autentificación del jugador.

## Request
	

### Headers:
1. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Jugador(Player)***


## LoginUser(Public)


Recurso para la autentificación del usuario.

## Request
	

### Headers:
1. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

# Players

## GetAll(Auth)


Entrega la lista de todos los jugadores registrados en el sistema.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

## GetTop(Public)


Entrega el top de jugadores, dependiendo de la cantidad seteada en la url.  

## Request
	

### Url: 
1.  ```/top/:amound``` : ```integer``` Cantidad de registros a traer.

### Headers:
1. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Publico(Public)***

## Get(Auth)


Entrega a un jugador en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id del jugador a buscar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario o jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***
2. ***Jugador(Player) - Unico(Unique)***

## Create(Public)


Crea a un jugador.

## Request
	

### Headers:
1. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```username``` : ```string``` Atributo de texto que almacena el username unico de cada jugador.
2. ```password``` : ```string``` Atributo de texto, el cual almacena la pregunta en si.

## Permisos:


1. ***Publico(Public)***

## NewTOken(Auth)


Entrega un nuevo token de autentificación al jugador actualmente autentificado.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación del jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Jugador(Player) - Unico(Unique)***

## Update(Auth)


Edita a un jugador en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id del jugador a editar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario o jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```username``` : ```string``` Atributo de texto que almacena el username unico de cada jugador.
2. ```score``` : ```integer``` Atributo numerico que edita la puntuacion de cada jugador.


## Permisos:
	

1. ***Usuarios(User)***
2. ***Jugador(Player) - Unico(Unique)***

## UpdatePassword(Auth)


Edita el password del jugador actualmente autentificado.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación del jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```password``` : ```string``` Atributo de texto, que edita el password del jugador.


## Permisos:
	

1. ***Jugador(Player) - Unico(Unique)***

## Delete(Auth)


Elimina a un jugador en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id del jugador a eliminar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario o jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.


## Permisos:
	

1. ***Usuario(User)***
2. ***Jugador(Player) - Unico(Unique)***

# Questions

## GetAll(Auth)


Entrega la lista de todas las preguntas con sus respectivas respuestas registradas en el sistema.


## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario o jugador.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***
2. ***Jugador(Player)***

## Get(Auth)


Entrega una pregunta en particular con sus respectivas respuestas, dependiendo del id de la pregunta seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la pregunta a buscar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

## Create(Auth)


Crea una pregunta.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```description``` : ```string``` Atributo de texto que almacena la pregunta en si.


## Permisos:


1. ***Usuario(User)***

## Update(Auth)


Edita una pregunta en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la pregunta a editar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```description``` : ```string``` Atributo de texto, el cual almacena la pregunta en si.


## Permisos:
	

1. ***Usuario(User)***

## Delete(Auth)


Elimina una pregunta en particular con sus respectivas respuestas , dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id de la pregunta a eliminar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.


## Permisos:
	

1. ***Usuario(User)***

# Users

## GetAll(Auth)


Entrega la lista de todos los usuarios registrados en el sistema.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

## Get(Auth)


Entrega a un usuario en particular, dependiendo del id seteado en la url.

## Request
	

### Url: 
1.  ```/:id``` : ```integer``` Id del usuario a buscar.

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User)***

## Create(Auth)


Crea a un usuario.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```name``` : ```string``` Atributo de texto, el cual almacena el nombre completo del usuario.
2. ```email``` : ```string``` Atributo de texto que almacena el email unico de cada usuario.
3. ```password``` : ```string``` Atributo de texto que almacena la contraseña del usuario.

## Permisos:


1. ***Usuario(User)***

## NewToken(Auth)


Entrega un nuevo token de autentificación al usuario actualmente autentificado.


## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación del usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

## Permisos:


1. ***Usuario(User) - Unico(Unique)***

## Update(Auth)


Edita al usuario actualmente autentificado.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```name``` : ```string``` Atributo de texto, el cual edita el nombre completo del usuario.
2. ```email``` : ```string``` Atributo de texto que edita el email unico de cada usuario.


## Permisos:
	

1. ***Usuario(User) - Unico(Unique)***

## Patch(Auth)


Edita el password del usuario actualmente autentificado.


## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación del usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.

### Body:
1. ```password``` : ```string``` Atributo de texto que edita la contraseña del usuario.


## Permisos:
	

1. ***Usuario(User) - Unico(Unique)***

## Delete(Auth)


Elimina el usuario actualmente autentificado.

## Request
	

### Headers:
1. ```http_auth_token``` : ```string``` Token de autentificación de usuario.
2. ```http_csrf_token``` : ```string``` Token de CSRF de identificacion del dispositivo.


## Permisos:
	

1. ***Usuario(User) - Unico(Unique)***
