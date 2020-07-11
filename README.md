# node-express-mongoose-template

Minimal node API server template with user authentication middleware.

## Run app in development environment with nodemon file watcher:

```sh
npm i nodemon -g
npm run dev
```

## Run app in production environment:

Create `.env` file:

```sh
NODE_ENV="development"
PORT="3002"
DB="mongodb://localhost:27017/collection_name"
JWT_SECRET="top_secret"
```

Create `.env` file:

```sh
npm start
```
