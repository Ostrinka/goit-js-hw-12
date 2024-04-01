import{a as u,S as p,i as n}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function d(){try{return(await u.get(`https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${i}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`)).data.hits}catch(e){console.error(e)}}function m(e){const s=e.map(o=>(console.log(o),`<li class="gallery-item">
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
        </li>`)).join("");c.insertAdjacentHTML("beforeend",s),y.refresh()}const f=document.querySelector(".input-form"),g=document.querySelector(".btn"),c=document.querySelector(".gallery"),h=document.querySelector(".loader-item");let i="";const y=new p(".gallery a",{captionDelay:250,captionsData:"alt"});g.addEventListener("click",e=>{e.preventDefault(),b(),c.innerHTML="",setTimeout(()=>{i=f.value.trim(),L()},1e3)});function L(){d().then(e=>{i===""?n.show({color:"#EF4040",message:"Please complete the field!",position:"topRight"}):e.length===0?n.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(e)}).catch(e=>console.log(e)).finally(()=>w())}function b(){const e=document.createElement("span");h.appendChild(e),e.classList.add("loader")}function w(){document.querySelector(".loader").remove()}
//# sourceMappingURL=commonHelpers.js.map
