import axios from 'axios';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(responce => responce.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId){
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return axios
    .get(url)
    .then(responce => responce.data[0])
    .catch(error => {
throw error;
    })
}