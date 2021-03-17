# Teachers and Courses system.
Required ```node_modules```
1. ```express``` : For the server and json
2. ```nodemon``` : For hot reload 
3. ```dotenv``` : For enviromental veriables
4. ```pg & pg-hstore``` : To connect to PostgreSQL. pg-hstore is a node package for serializing and deserializing JSON data to hstore format.
5. ```sequelize``` : To Handle promise
6. ```cors``` : To handle cross origin

## Start Docker in local System
I started by creating a database on Docker
```bash
$ docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres
```

Providing Admin Previges : you can use pgadmin 

```sql
GRANT ALL PRIVILEGES ON DATABASE dev TO postgres
```
This runs a Portgres server locally on you computer 
User = postgres
pass = pass
port = localhost:5432

## Appliocation setup
I have created ```server.js``` to act as the enrtypoint for the api 
## Creating models
I created a models folder with ```index.js``` and use sequelize to set up associations in it




