OVERVIEW OF ORMs
	-PRODUCTIVITY
	-EFFICIENCY

IDENTIFY USE CASES
	- Large Complex Websites with lots of data

OPTIMIZATION
	-Faster more eficient queries.

MIGRATIONS
	-Changes to your database can be automated.

ALL OF THESE LEAD TO ==> A MORE ROBUST PLATFORM

//ORM RESOURCES
OVERVIWE: https://blog.yellowant.com/orm-rethinking-data-as-objects-8ddaa43b1410
SEQUELIZE: https://sequelize.org/master/manual/getting-started.html


//MIGRATION TECHNIQUE

npx sequelize-cli init      //initalise project
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string //create model
npx sequelize-cli migration:create -name UPDATE_MEMBERS  //create migration file manually
npx sequelize-cli db:migrate //run migration

