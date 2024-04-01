import{a as u,S as p,i as d}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let l=0;async function h(){try{const s=(await u.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${a}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`)).data.hits;return l=s,s}catch(e){console.error(e)}}function m(e){const s=e.map(o=>(console.log(o),`<li class="gallery-item">
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
        </li>`)).join("");n.insertAdjacentHTML("beforeend",s),w.refresh(),l<L*15?iziToast.show({color:"red",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):l<15?iziToast.show({color:"red",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):($(),O())}const f=document.querySelector(".input-form"),g=document.querySelector(".btn"),n=document.querySelector(".gallery"),y=document.querySelector(".loader-item"),b=document.querySelector(".btn-load");document.querySelector(".target");let a="",L=1;const w=new p(".gallery a",{captionDelay:250,captionsData:"alt"});g.addEventListener("click",e=>{e.preventDefault(),v(),n.innerHTML="",setTimeout(()=>{a=f.value.trim(),S()},1e3)});function S(){h().then(e=>{a===""?d.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?d.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(e)}).catch(e=>console.log(e)).finally(()=>q())}function v(){const e=document.createElement("span");y.appendChild(e),e.classList.add("loader")}function q(){document.querySelector(".loader").remove()}function $(){b.classList.remove("hidden")}function O(){const e=n.firstChild;if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
