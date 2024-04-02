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
  currentPage = 1;
  gallery.innerHTML = '';
  inputUser = inputForm.value.trim();
  loaderOpen();
  checkInput();
  showLoadMore();
  inputForm.value = '';
});

export function addButtonLoad() {
  btnLoad.addEventListener('click', event => {
  event.preventDefault();
  currentPage += 1;
  checkInput().then(() => myScroll());
  showLoadMore();
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
  loaderItem.classList.remove('hidden');
}

function loaderDel() {
  loaderItem.classList.add('hidden');
}

export function showLoadMore() {
  btnLoad.classList.remove('hidden');
}

export function hideLoadMore() {
  btnLoad.classList.add('hidden');
}

function myScroll() {
    const height = gallery.firstChild.getBoundingClientRect().height;
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }





