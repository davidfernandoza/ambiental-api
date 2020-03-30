
*Instalar el CLI de sequelize, para poder ejecutar todos los comandos de sequelize de forma nativa:* 

``npm i -g sequelize-cli``

<hr>

*Creacion de un nuevo modelo con su migracion:* 

``sequelize model:create --name NombreModelo --attributes atributo1:string,atributo2:integer``

<hr>

*Mi alias de sequelize:* 

``sq``

<hr>

*Ejecutar las migraciones de sequelize:* 

``sq db:migrate``

NOTA:
<small>
*Debe de haber un archivo de configuracion de sequelize para que el motor ORM fabrique una cadena de conexion* 
</small>

<hr>

*Devolver las migraciones para borrar la base de datos:*

``sq db:migrate:undo:all``
<hr>

*Instalar dependencias de npm en local*

``npm install package --save``

*Instalar dependencias de desarrollo de npm en local*

``npm install package --save-dev``

*Instalar dependencias de npm de forma global*

``npm i -g package``

NOTA:
<small>
*La ``i`` es una abreviacion de install.* 
</small>

*Desinstalar dependencias de npm*

``npm uninstall -g package``


<hr>


NODE:

El "#" en la version 12 de node afirma que el atributo es privado
 
