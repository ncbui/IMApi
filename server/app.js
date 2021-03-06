const express = require("express");
const { searchByTitle, searchById } = require('./api.js')
const { NotFoundError } = require("./expressError");
const Movie = require("./models/Votes.js");

const app = express();

// parses JSON body => req.body object
app.use(express.json());

// parses traditional form data => req.body object
app.use(express.urlencoded({ extended: true }));


/** Search for Movies by Title*/
app.get("/search", async function (req, res, next) {
  try {
    const resp = await searchByTitle(`${req.body.searchTerm}`)

    if (!resp) throw new NotFoundError();

    return res.json(resp);
  } catch (err) {
    return next(err);
  }
});

/** Show Movie details by imdbID */
app.get("/details/:id", async function (req, res, next) {
  try {
    const resp = await searchById(`${req.params.id}`)

    if (!resp) throw new NotFoundError();

    return res.json(resp);
  } catch (err) {
    return next(err);
  }
});

// /** Vote for Movie details by imdbID */
// app.get("/vote", async function (req, res, next) {
//   const imdbID = `${req.body.id}`;
//   const voteType = `${req.body.voteType}`;

//   try {
//     // const resp = await searchById(`${req.body.id}`)

//     // if (!resp) throw new NotFoundError();

//     return res.json(resp);
//   } catch (err) {
//     return next(err);
//   }
// });

/** Handle 404 errors */
app.use(function (req, res, next) {
  const notFoundError = new NotFoundError();
  
  return next(notFoundError);
});

/** Generic error handler */
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { status, message },
  });
});

module.exports = app;