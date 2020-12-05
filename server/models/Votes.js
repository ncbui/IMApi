"use strict";

const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");


/** Related functions for Movies. */

class Votes {
    /** Given a movie id, return data about movie.
   *
   * Returns { thumbs_up, thumbs_down }
   *
   * Returns { thumbs_up: 0, thumbs_down: 0 } if not found
   **/

  static async get(imdbID) {
    console.log("GET")
    const movieRes = await db.query(
      `SELECT thumbs_up, thumbs_down
           FROM votes
           WHERE imdbID = $1`, [imdbID]);

    let votes = movieRes.rows[0];

    if (!votes) votes = {"thumbs_up": 0, "thumbs_down": 0};

    return votes;
  }

  /** Add a movie (from data), update db, return new movie data.
   *
   * data should be { imdbID, title }
   *
   * Returns { imdbID, title, thumbs_up, thumbs_down }
   **/

  static async add(data) {
    const result = await db.query(
      `INSERT INTO votes (imdbID, title)
           VALUES ($1, $2)
           RETURNING imdbID, title, thumbs_up, thumbs_down`,
      [data.imdbID, data.title]);
    let movie = result.rows[0];

    return movie;
  }

  /** Update movie votes with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include: { imdbID, vote_type }
   *
   * Returns { imdbID, title, thumbs_up, thumbs_down }
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    if (Object.keys(data).length === 0) throw new BadRequestError("No data");

    const { setCols, values } = sqlForPartialUpdate(data);
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE votes 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                company_handle, 
                                title, 
                                salary, 
                                equity`;
    const result = await db.query(querySql, [...values, id]);
    const movie = result.rows[0];

    if (!movie) throw new NotFoundError(`No movie: ${id}`);

    return movie;
  }
}

module.exports = Votes;
