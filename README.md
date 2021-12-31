# iportfolio

This my iportfolio. It has been made with [Vue 3](https://v3.vuejs.org/) and [Express](https://expressjs.com/fr/).

Node 16 has been used for this project.

## Frontend

In the directory named `frontend`.

Download all packages with: `npm i`.

Launch the frontend with: `npm run serve`.

## Backend

> For this part you will need to have a [Mongo](https://www.mongodb.com/) server.

In the directory named `backend`.

Download all packages with: `npm i`.

Create a file `backend\infos.json`.

```json
{
   "random_key" : "a random string",
   "mongo_str" : "Mongo uri"
}
```

Initialize the database with: `npm run init-db`

Launch the backend with: `npm run start`



