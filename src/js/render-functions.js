import { gallery, lightbox } from '../main';

export function renderPhotos(images) {                        
  const markup = images                          
    .map(image => {
      console.log(image);
      return `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
               class="gallery-image"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3 class="image-title">Likes</h3><p class="image-description">${image.likes}</p></li>
            <li><h3 class="image-title">Views</h3><p class="image-description">${image.views}</p></li>
            <li><h3 class="image-title">Comments</h3><p class="image-description">${image.comments}</p></li>
            <li><h3 class="image-title">Downloads</h3><p class="image-description">${image.downloads}</p></li>
          </ul>
        </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}