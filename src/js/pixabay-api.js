import axios from 'axios';

import { inputUser } from '../main';

export let amountOfHits = 0;

export async function getImage() {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${inputUser}&image_type=photo&page=currentPage&per_page=15&orientation=horizontal&safesearch=true`);

    const totalHits = response.data.hits;
    amountOfHits = totalHits;
    return totalHits;
  } catch (error) {
      console.error(error);
  }
}



