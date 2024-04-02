import{a as g,S as y,i as p}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&h(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();let c=0;async function L(){try{const s=(await g.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${i}&image_type=photo&page=${n}&per_page=15&orientation=horizontal&safesearch=true`)).data.hits;return c=s.length,s}catch(e){console.error(e)}}function b(e){const s=e.map(r=>`<li class="gallery-item">
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
        </li>`).join("");d.insertAdjacentHTML("beforeend",s),w.refresh(),c<n*15?iziToast.show({color:"#EF4040",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):c<15?iziToast.show({color:"#EF4040",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):(O(),$(),R())}const l=document.querySelector(".input-form"),v=document.querySelector(".btn"),d=document.querySelector(".gallery"),f=document.querySelector(".loader-item"),u=document.querySelector(".btn-load");let i="",n=1;const w=new y(".gallery a",{captionDelay:250,captionsData:"alt"});v.addEventListener("click",e=>{e.preventDefault(),S(),d.innerHTML="",i!==l.value.trim()&&(n=1),i=l.value.trim(),m(),l.value=""});function $(){u.addEventListener("click",e=>{e.preventDefault(),n+=1,m(),P()})}function m(){return L().then(e=>{i===""?p.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?p.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(e)}).catch(e=>console.log(e)).finally(()=>q())}function S(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function O(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}function R(){const e=d.firstChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
