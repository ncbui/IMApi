/** ExpressError extends normal JS error.
 *
 *  The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    if (process.env.NODE_ENV !== "test") console.error(this.stack);
  }
}

/** 404 NOT FOUND error. */

class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

module.exports = {
  ExpressError,
  NotFoundError
}