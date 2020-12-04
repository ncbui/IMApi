const express = require("express");
const app = express();
const { NotFoundError } = require("./expressError");


// parses JSON body => req.body object
app.use(express.json());

// parses traditional form data => req.body object
app.use(express.urlencoded({ extended: true }));


/** Handle Search */
app.get("/search", function (req, res, next) {
  try {
    console.log(req.body.title)
    const res = searchByTitle(req.body.title)
    // const user = USERS.find(u => (
    //   u.username === req.params.username
    // ));
    if (!res) throw new NotFoundError();
    return res.json(req.body.title);
  } catch (err) {
    return next(err);
  }
});

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