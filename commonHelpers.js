import{a as m,S as g,i as u}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let n=0;async function y(){try{const s=(await m.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${c}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`)).data.hits;return n=s,s}catch(e){console.error(e)}}function L(e){const s=e.map(o=>(console.log(o),`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
               class="gallery-image"
               src="${o.webformatURL}"
               data-source="${o.largeImageURL}"
               alt="${o.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3 class="image-title">Likes</h3><p class="image-description">${o.likes}</p></li>
            <li><h3 class="image-title">Views</h3><p class="image-description">${o.views}</p></li>
            <li><h3 class="image-title">Comments</h3><p class="image-description">${o.comments}</p></li>
            <li><h3 class="image-title">Downloads</h3><p class="image-description">${o.downloads}</p></li>
          </ul>
        </li>`)).join("");l.insertAdjacentHTML("beforeend",s),v.refresh(),n<h*15?iziToast.show({color:"red",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):n<15?iziToast.show({color:"red",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):(O(),S(),R())}const p=document.querySelector(".input-form"),b=document.querySelector(".btn"),l=document.querySelector(".gallery"),w=document.querySelector(".loader-item"),a=document.querySelector(".btn-load");let c="",h=1;const v=new g(".gallery a",{captionDelay:250,captionsData:"alt"});b.addEventListener("click",e=>{e.preventDefault(),$(),l.innerHTML="",c=p.value.trim(),f(),p.value="",e.target.reset()});function S(){a.addEventListener("click",e=>{e.preventDefault(),f(),P(),h+=1})}function f(){return y().then(e=>{c===""?u.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?u.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(e)}).catch(e=>console.log(e)).finally(()=>q())}function $(){const e=document.createElement("span");w.appendChild(e),e.classList.add("loader")}function q(){document.querySelector(".loader").remove()}function O(){a.classList.remove("hidden")}function P(){a.classList.add("hidden")}function R(){const e=l.firstChild;if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
