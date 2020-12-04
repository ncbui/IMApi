\echo 'Delete and recreate IMApi db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE imapi;
CREATE DATABASE imapi;
\connect imapi

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  title TEXT UNIQUE NOT NULL,
  thumbs_up INTEGER DEFAULT 0,
  thumbs_down INTEGER DEFAULT 0);


\echo 'Delete and recreate imapi_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE imapi_test;
CREATE DATABASE imapi_test;
\connect imapi_test

CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    thumbs_up INTEGER DEFAULT 0,
    thumbs_down INTEGER DEFAULT 0
);
