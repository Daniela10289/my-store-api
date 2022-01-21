# my-store-api

json viewer chrome extension

REST: Representational State Transfer
GET: obtener información
PUT: modificar 
POST: crear
DELETE: eliminar
PATCH: modificaciones de datos especificos o actualizacion
 
 npm i faker

 Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

 levantar postgres
 docker-compose up -d postgres

saber si el contenedor esta corrindo y si esta correcto
docker-compose ps

detener el  contenedor
docker-compose down

conectarse al contenedor 
docker-compose exec postgres bash

ingresar con las credenciales
psql -h localhost -d my_store -U dani

entrar a la bd 
\d+

salir de la bd \q

salir  del contenedor
exit

obtener la ip del servidor
docker ps --obtener el id
docker ispect id  

-- INTEGRAR NODE CON POSTGRES

instalar el driver de node
npm install pg

curl localhost:8080/api/v1/products

¿Qué es un ORM? Instalación y configuración de Sequelize ORM

npm i dotenv

npm install --save sequelize

npm install --save pg-hstore

create table tasks (
	id serial primary key,
	title varchar ( 255 ) not null, 
	completed boolean default false
);

insert into tasks values (3, 'limpiar')

select * from tasks

select * from users

npm install --save mysql2

npm i sequelize-cli --save-dev

// generar migracion
npm run migrations:generate "create-customers"
npm run migrations:run
