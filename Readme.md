# Teachers and Courses system. #
- [x] Start Database
- [x] Build Server
- [x] Build model,controller,routes 
- [x] Create tests for Teachers
- [ ] Create tests for Cources
- [ ] Create failing tests
- [ ] Create mock database for test
- [ ] Fix Dockerfile
## Database Design ##
![Untitled (1)](https://user-images.githubusercontent.com/32159637/111438013-5345d000-8736-11eb-82c1-63269e2dc77d.png)


Required ```node_modules```
1. ```express``` : For the server and json
2. ```nodemon``` : For hot reload 
3. ```dotenv``` : For enviromental veriables
4. ```pg & pg-hstore``` : To connect to PostgreSQL. pg-hstore is a node package for serializing and deserializing JSON data to hstore format.
5. ```sequelize``` : To Handle promise
6. ```cors``` : To handle cross origin
7. ```mocha, chai, chai-http``` : Testing Framework

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


## Aplications Features
# Running the application 
First after cloneing the application type
```bash
yarn install 
```
## Available Scripts
Start : Will run the node server using ```node app.js```
```bash
yarn run start
```

Dev : will run with hotreload
```bash
yarn run dev
```

Test : Will test using Mocha
```bash
yarn test
```

## Appliocation Explaination
I have created ```app.js``` to act as the enrtypoint for the api 
## Creating models
I created a models folder with ```models/index.js``` and use sequelize to set up associations in it
*
<img width="316" alt="Screen Shot 2564-03-18 at 8 43 59 AM" src="https://user-images.githubusercontent.com/32159637/111560900-188b7880-87c6-11eb-94cb-eb3ebe94e871.png">

