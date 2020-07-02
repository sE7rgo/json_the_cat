const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (!data[0]) {
        const error = 'not invented yet:)';
        callback(error);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = fetchBreedDescription;