## Solar System API

this project was originally built as part of a #DearJuniorDev Hackahon, in which each team had a week to build a web app that teaches about the solar system.  

You can see & access this api here: <https://solar-system-hackathon-backend.herokuapp.com>

## Instructions to run locally

1. Clone this project to your computer. 

`$ git clone https://github.com/matthewcsimpson/Solar-System-Hackathon-Backend`

2. Install dependencies with NPM Install

`$ npm install`

3. Create a new database on your local machine. 

4. Create a `.env` file with the following keys:

```````
PORT=<your port of choice here>
DATABASE_HOST=localhost
DATABASE_USER=<database username here>
DATABASE_PASSWORD=<database password here>
DATABASE_NAME=<database password here>
```````

5. Migrate the database tables 

`$ knex migrate:latest`

6. Seed the database information 

`$ knex seed:run`

7. Spin up the project in development mode!

`$ npm run dev`

8. The project should now be running at http://localhost:PORT
