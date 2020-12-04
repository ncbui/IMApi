require("dotenv").config();

const axios = require('axios');
const IMDB_API_KEY = process.env.IMDB_API_KEY;
const IMDB_BASE_URL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com'
const IMDB_API_HOST = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
const MOVIE_DB_BASE_URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'
const MOVIE_DB_API_HOST = 'movie-database-imdb-alternative.p.rapidapi.com'

const search_headers = {
  'x-rapidapi-key': `${IMDB_API_KEY}`,
  'x-rapidapi-host': `${IMDB_API_HOST}`
};

const details_headers = {
  'x-rapidapi-key': `${IMDB_API_KEY}`,
  'x-rapidapi-host': `${MOVIE_DB_API_HOST}`,
  "useQueryString": true
}


/** Searches IMDB for all matches by name
 * 
 * @param {*} title 
 */
const searchByTitle = async (title) => {
  title = title.replace(/\s/g,'%20');
  const URL = `${IMDB_BASE_URL}/search/${title}`;

  try {
    /** WORKING, SEE OUTPUT BELOW */
    // const resp = await axios(URL, {headers: search_headers})
    // const searchResults = resp.data;

    const searchResults = MOCK_SEARCH_DATA; // FIXME: remove once details done

    if (!searchResults) throw new NotFoundError();

    return searchResults; // FIXME
  } catch (err) {
    console.log("Can't search for movie titles", { err });
    return null;
  }
}

/** Gets details from IMDB Alternative DB */

const searchById = async (id) => {
  const params = {"i": id};
  try {
    const resp = await axios(MOVIE_DB_BASE_URL, { params: params, headers: details_headers})
    const movieDetails = resp.data;
    // const movieDetails = MOCK_SEARCH_DATA; // FIXME: remove once details done

    if (!movieDetails) throw new NotFoundError();

    return movieDetails; // FIXME
  } catch (err) {
    console.log("Can't search for movie titles", { err });
    return null;
  }
}

module.exports = { searchByTitle, searchById }


const MOCK_SEARCH_DATA = {
  "title": {
    "titles": [
      {
        "title": "Spider-Man: Into the Spider-Verse",
        "image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@.jpg",
        "id": "tt4633694"
      },
      {
        "title": "Spider-Man: Into the Spider-Verse - The Ultimate Comics Cast",
        "image": "https://m.media-amazon.com/images/M/MV5BODM1YTA4ZGQtMjZiMi00NzY0LTk3ODAtN2ZlNjk2NTUxN2U5XkEyXkFqcGdeQXVyODE2NDgwMzM@.jpg",
        "id": "tt10188824"
      },
      {
        "title": "Spider-Man: Into the Spider-Verse",
        "image": "https://m.media-amazon.com/images/M/MV5BMDVhNGU4NTEtMzViNy00OGI1LWFkMGMtMTViYjA0MTQ3YjUwXkEyXkFqcGdeQXVyODUwNTE3OTY@.jpg",
        "id": "tt11953534"
      },
      {
        "title": "Spider-Man: Into The Spider-Verse - Unscripted - Shameik Moore, Hailee Steinfeld, Jake Johnson",
        "image": "https://m.media-amazon.com/images/M/MV5BYjlmMzkzOTgtMTg2OC00YzdhLWIzNDQtYjkyZDM4ZjI4YmFhXkEyXkFqcGdeQXVyMTM2Mzg4MA@@.jpg",
        "id": "tt11492378"
      }
    ],
      "names": [
        {
          "title": "Spiderman",
          "image": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png",
          "id": "nm8356112"
        },
        {
          "title": "B Spiderman",
          "image": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/name-2138558783._CB468460248_.png",
          "id": "nm6407433"
        }
      ],
        "companies": []
  }
}

const MOCK_FILM_1 = {
  "resp": {
    "Title": "Spider-Man: Into the Spider-Verse",
      "Year": "2018",
        "Rated": "PG",
          "Released": "14 Dec 2018",
            "Runtime": "117 min",
              "Genre": "Animation, Action, Adventure, Family, Sci-Fi",
                "Director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
                  "Writer": "Phil Lord (screenplay by), Rodney Rothman (screenplay by), Phil Lord (story by)",
                    "Actors": "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
                      "Plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
                        "Language": "English, Spanish",
                          "Country": "USA",
                            "Awards": "Won 1 Oscar. Another 79 wins & 55 nominations.",
                              "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
                                "Ratings": [
                                  {
                                    "Source": "Internet Movie Database",
                                    "Value": "8.4/10"
                                  },
                                  {
                                    "Source": "Rotten Tomatoes",
                                    "Value": "97%"
                                  },
                                  {
                                    "Source": "Metacritic",
                                    "Value": "87/100"
                                  }
                                ],
                                  "Metascore": "87",
                                    "imdbRating": "8.4",
                                      "imdbVotes": "352,930",
                                        "imdbID": "tt4633694",
                                          "Type": "movie",
                                            "DVD": "N/A",
                                              "BoxOffice": "N/A",
                                                "Production": "Sony Pictures Animation, Avi Arad, Pascal Pictures, Lord Miller",
                                                  "Website": "N/A",
                                                    "Response": "True"
  }
}

const MOCK_FILM_2 = {
  "resp": {
    "Title": "Spider-Man: Into the Spider-Verse - The Ultimate Comics Cast",
      "Year": "2019",
        "Rated": "N/A",
          "Released": "19 Mar 2019",
            "Runtime": "15 min",
              "Genre": "Documentary, Short",
                "Director": "N/A",
                  "Writer": "N/A",
                    "Actors": "Mahershala Ali, Nicolas Cage, Kimiko Glenn, Kathryn Hahn",
                      "Plot": "N/A",
                        "Language": "English",
                          "Country": "USA",
                            "Awards": "N/A",
                              "Poster": "https://m.media-amazon.com/images/M/MV5BODM1YTA4ZGQtMjZiMi00NzY0LTk3ODAtN2ZlNjk2NTUxN2U5XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
                                "Ratings": [
                                  {
                                    "Source": "Internet Movie Database",
                                    "Value": "7.3/10"
                                  }
                                ],
                                  "Metascore": "N/A",
                                    "imdbRating": "7.3",
                                      "imdbVotes": "19",
                                        "imdbID": "tt10188824",
                                          "Type": "movie",
                                            "DVD": "N/A",
                                              "BoxOffice": "N/A",
                                                "Production": "N/A",
                                                  "Website": "N/A",
                                                    "Response": "True"
  }
}
