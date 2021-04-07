# Introduction to Loopback
1. sudo npm i -g @loopback/cli
2. lb4 app(name.....)
3. cd <app name>
4. npm start
5. to create an api :-
  - lb4 controller(name of the controller)
  - restart the server

  -------------------------
  keep note
  - id
  - title
  - text
  - status
## Create a Model
- lb4 model
  - specified all the attributes
## created datasource
- lb4 datasource
  - type of datasource
  - path of the json file
  - create the folder in the root folder with db.json
## Repository
  - lb4 repository
## create a controller
- lb4 controller
  - CURD controller

## Session 2
## to work on database
-  to remove the datasource
    - rm src/datasources/db.datasource.*
- to add the database :-
  - lb4 datasource
  - add all the database related information
- update migrate
    await app.migrateSchema({
    existingSchema,
    models: ['Note'],
  });
- npm run build
- npm run migrate;// table will be created
- npm start
