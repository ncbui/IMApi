# Movie API

## About the Application

This repository contains two separate applications: `client`, which is a Create React App for the frontend, and `server`, an Express/Node API for the backend.

## Getting Started on the Server

1. clone the repository
2. `cd server`
3. `npm install` to install dependencies
4. `createdb imapi`
5. `createdb imapi-test`
6. `psql < imapi.sql`
7. Create a `.env` file in the root of the server
    7a. Obtain an API key from https://rapidapi.com/collection/movie-apis
    7b. Subscribe to the Movie Database API: https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative
8. `npm start`

### Run tests

1. `cd server`
2. `npm test`

## Getting started on the client

1. `cd client`
2. `npm install`
3. Create a `.env` file in the root of the server directory to contain different variables.
4. `npm start` 
5. visit the site with localhost:3000

### Run tests