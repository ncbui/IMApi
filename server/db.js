"use strict";

/** Database setup for IMApi. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
