import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key':
      'live_WDgVdKYg2mWEYAqZ6nCwD3BLNRnwVckfDAJevdvevwKcj86kfswAhCdkWYhmb2Vg',
  },
});

function fetchBreeds() {
  return instance
    .get('/breeds')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.statusText);
    });
}

function fetchCatByBreed(breedId) {
  return instance
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      throw new Error(error.response.statusText);
    });
}

export { fetchBreeds, fetchCatByBreed };
