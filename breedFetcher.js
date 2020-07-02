const request = require('request');
const breeds = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breeds}`, function(error, response, body) {
  if (error) console.error('error:', error);
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('not existing breed yet :)\ntry one more time');
  } else {
    console.log(data[0].description);
  }
});