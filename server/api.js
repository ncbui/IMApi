require("dotenv").config();

const axios = require('axios');
const IMDB_API_KEY = process.env.IMDB_API_KEY;
const IMDB_BASE_URL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com'
const IMDB_API_HOST = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'

const headers = {
  'x-rapidapi-key': `${IMDB_API_KEY}`,
  'x-rapidapi-host': `${IMDB_API_HOST}`
};

/** FROM Rapid Api */
// var options = {
//   method: 'GET',
//   url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/SpiderMan',
//   headers: {
//     'x-rapidapi-key': '',
//     'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


const searchByTitle = async (title) => {
  title = title.replace(/\s/g,'%20');
  const URL = `${IMDB_BASE_URL}/search/${title}`;

  try {
    /** WORKING, SEE OUTPUT BELOW */
    // const resp = await axios(URL, {headers})
    // const searchResults = resp.data;

    const searchResults = MOCK_SEARCH_DATA; // FIXME: remove once details done

    if (!searchResults) throw new NotFoundError();

    return searchResults; // FIXME
  } catch (err) {
    console.log("Can't search for movie titles", { err });
    return null;
  }
}

module.exports = { searchByTitle }


const MOCK_SEARCH_DATA = {
  "title": {
    "titles": [
      {
        "title": "Spider-Man: Into the Spider-Verse",
        "image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@.jpg",
        "id": "tt4633694"
      },
      {
        "title": "Spider-Man: Into the Spider-Verse 2",
        "image": "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/32x44/film-3119741174._CB468665901_.png",
        "id": "tt9362722"
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