import iziToast from 'izitoast';                      
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';                  
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';

const inputForm = document.querySelector('.input-form');  
const button = document.querySelector('.btn');
export const gallery = document.querySelector('.gallery');   
const loaderItem = document.querySelector('.loader-item');
const btnLoad = document.querySelector('.btn-load')  


export let inputUser = "";
export let currentPage = 1;

export const lightbox = new SimpleLightbox('.gallery a', {  
  captionDelay: 250,
  captionsData: 'alt',
});

button.addEventListener('click', event => {   
  event.preventDefault();
  loaderOpen();
  gallery.innerHTML = '';
  inputUser = inputForm.value.trim();
  checkInput();
  inputForm.value = '';
  event.target.reset();
});

export function addButtonLoad() {
  btnLoad.addEventListener('click', event => {
  event.preventDefault();
  checkInput();
  hideLoadMore();
  currentPage += 1;
});
}

function checkInput() {     
  return getImage()
    .then(images => {
      if (inputUser === "") {
        iziToast.show({
          color: '#EF4040',
          message: `Please complete the field!`,
          position: 'topRight',
        });
      } else if (images.length === 0) {
        iziToast.error({
          color: '#EF4040',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      } else {
        renderPhotos(images);
      }
    })
    .catch(error => console.log(error))
    .finally(() => loaderDel());
}

function loaderOpen() {                                
  const spanElement = document.createElement('span');
  loaderItem.appendChild(spanElement);
  spanElement.classList.add('loader');
}

function loaderDel() {                          
  const loader = document.querySelector('.loader');
  loader.remove();
}


export function showLoadMore() {
  btnLoad.classList.remove('hidden');
}

function hideLoadMore() {
  btnLoad.classList.add('hidden');
}

export function myScroll() {
  const firstChild = gallery.firstChild;
  if (firstChild) {
    const height = firstChild.getBoundingClientRect().height;
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}