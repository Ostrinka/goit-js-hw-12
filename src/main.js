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
const btnLoad = document.querySelector('btn-load')  
const targetElem = document.querySelector('.target')

export let inputUser = "";
let currentPage;
let maxPage;
const pageSize = 15;

export const lightbox = new SimpleLightbox('.gallery a', {  
  captionDelay: 250,
  captionsData: 'alt',
});

button.addEventListener('click', event => {   
  event.preventDefault();
  loaderOpen();
  gallery.innerHTML = '';
  setTimeout(() => {
  inputUser = inputForm.value.trim();
  checkInput();
  }, 1000);
});

function checkInput() {     
  getImage()
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






// btnLoad.addEventListener('click', event => {
//     event.preventDefault();
//     inputUser;
//     checkInputValidity();
//     buttonLoad.remove();
//     loaderG();
//   });



// inputForm.addEventListener('submit', onFormSubmit);



// async function onFormSubmit(event) {
//   event.preventDefault();
//   showLoader();
//   inputUser = event.target.elements.image.value.trim();
//   currentPage = 1;
//   gallery.innerHTML = '';

//   if (!inputUser) {
//     alert('Empty fields');
//     return;
//   }
//   try {
//     showLoader();
//     const data = await renderPhotos(inputUser, currentPage);
//     maxPage = Math.ceil(data.totalHits / pageSize);;
//     renderArticles(data.articles);
//     checkObserverStatus();
//     hideLoader();
//   } catch (err) {
//     console.log(err);
//   }
//     hideLoader();
//     checkBtnStatus();
//     event.target.reset();
// }

// async function onLoadMoreClick() {
//   currentPage += 1;
//   showLoader();
//   try {
//     const data = await getArticles(inputUsery, currentPage);
//     renderArticles(data.articles);
//   } catch (err) {
//     console.log(err);
//   }

//   myScroll();
//   checkBtnStatus();
//   hideLoader();
// }


// function showLoadMore() {
//   btnLoad.classList.remove('hidden');
// }
// function hideLoadMore() {
//   btnLoad.classList.add('hidden');
// }

// function checkBtnStatus() {
//   if (currentPage >= maxPage) {
//     hideLoadMore();
//   } else {
//     showLoadMore();
//   }
// }

// function articleTemplate(obj) {
//   const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = obj;
//   return `<li class="gallery-item">u
//           <a class="gallery-link" href="${largeImageURL}">
//             <img
//                class="gallery-image"
//                src="${webformatURL}"
//                data-source="${largeImageURL}"
//                alt="${tags}"
//             />
//           </a>
//           <ul class="gallery-description">
//             <li><h3 class="image-title">Likes</h3><p class="image-description">${likes}</p></li>
//             <li><h3 class="image-title">Views</h3><p class="image-description">${views}</p></li>
//             <li><h3 class="image-title">Comments</h3><p class="image-description">${comments}</p></li>
//             <li><h3 class="image-title">Downloads</h3><p class="image-description">${downloads}</p></li>
//           </ul>
//         </li>`;
// }

// function articlesTemplate(arr) {
//   return arr.map(articleTemplate).join('');
// }

// function renderArticles(arr) {
//   const markup = articlesTemplate(arr);
//   gallery.insertAdjacentHTML('beforeend', markup);
// }

// function checkObserverStatus() {
//   if (currentPage >= maxPage) {
//     observer.unobserve(targetElem);
//   } else {
//     observer.observe(targetElem);
//   }
// }


// // ====================================================
// const observer = new IntersectionObserver(observerCallback);

// function observerCallback(entries) {
//   const entry = entries[0];
//   if (!entry.isIntersecting) return;
//   loadMore();
// }

// function myScroll() {
//   const height = gallery.firstChild.getBoundingClientRect().height;
//       window.scrollBy({
//       top: height * 2,
//       behavior: 'smooth',
//     });
// }