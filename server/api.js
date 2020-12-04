const axios = require('axios');
const { IMDB_API_KEY } = require('../.env');
const IMDB_BASE_URL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com'
const IMDB_API_HOST = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'

axios.defaults.headers = {
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
  title = title.replace(" ", "%20")
  const url = `${IMDB_BASE_URL}/search/${title}`

  try {
    const resp = await axios() // FIXME 

    if (!resp) throw new NotFoundError();

    return; // FIXME
  } catch (err) {
    return next(err);
  }
}

module.exports = { searchByTitle }