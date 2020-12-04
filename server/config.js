"use strict";

/** Shared config for application; can be req'd many places. */

require("dotenv").config();

const PORT = +process.env.PORT || 3000;

// Use dev database, testing database, or via env var, production database
const DB_URI = (process.env.NODE_ENV === "test")
    ? "imapi_test"
    : process.env.DATABASE_URL || "imapi";



module.exports = {
  PORT,
  DB_URI,
};
