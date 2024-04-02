import{a as y,S as L,i as h}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();let a=0;async function b(){try{const s=(await y.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${d}&image_type=photo&page=${i}&per_page=15&orientation=horizontal&safesearch=true`)).data.hits;return a=s.length,s}catch(e){console.error(e)}}function v(e){const s=e.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
               class="gallery-image"
               src="${r.webformatURL}"
               data-source="${r.largeImageURL}"
               alt="${r.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3 class="image-title">Likes</h3><p class="image-description">${r.likes}</p></li>
            <li><h3 class="image-title">Views</h3><p class="image-description">${r.views}</p></li>
            <li><h3 class="image-title">Comments</h3><p class="image-description">${r.comments}</p></li>
            <li><h3 class="image-title">Downloads</h3><p class="image-description">${r.downloads}</p></li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",s),$.refresh(),a<i*15?(hideLoadMore(),iziToast.show({color:"#EF4040",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):a<15?(hideLoadMore(),iziToast.show({color:"#EF4040",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(g(),S())}const p=document.querySelector(".input-form"),w=document.querySelector(".btn"),l=document.querySelector(".gallery"),f=document.querySelector(".loader-item"),c=document.querySelector(".btn-load");let d="",i;const $=new L(".gallery a",{captionDelay:250,captionsData:"alt"});w.addEventListener("click",e=>{e.preventDefault(),i=1,P(),l.innerHTML="",d=p.value.trim(),q(),m(),p.value=""});function S(){c.addEventListener("click",e=>{e.preventDefault(),i+=1,m().then(()=>R()),g()})}function m(){return b().then(e=>{d===""?h.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?h.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(e)}).catch(e=>console.log(e)).finally(()=>O())}function q(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function g(){c.classList.remove("hidden")}function P(){c.classList.add("hidden")}function R(){const e=l.firstChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
