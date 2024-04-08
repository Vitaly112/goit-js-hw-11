import{i as p,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/";function g(r=""){const o="43270282-4a5d06b91258db09a976f913c",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${s}`).then(i=>{if(!i.ok)throw new Error("Ooooops!");return i.json()})}function y(r){return r.map(({id:o,webformatURL:s,tags:i,largeImageURL:e,likes:t,views:n,comments:d,downloads:h})=>`
        <li class="gallery-item" data-id=${o} heigth="200">
            <a class="gallery-link" href=${e}>
                <img src="${s}" alt="${i}" width="360">
            </a>
            <div class="gallery-word">
                <div class="gallery-opis">
                    <h2 class="title">Likes</h2>
                    <p  class="count">${t}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Views</h2>
                    <p  class="count">${n}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Comments</h2>
                    <p  class="count">${d}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${h}</p>
                </div>
            </div>
        </li>
    `).join("")}const c=document.querySelector(".js-search-form"),u=document.querySelector(".js-list"),a=document.querySelector(".loader");a.style.display="none";c.addEventListener("submit",v);function v(r){r.preventDefault();const{seachImage:o}=r.currentTarget.elements;a.style.display="block",u.innerHTML="",g(o.value).then(s=>{a.style.display="none",s.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(b(s.hits),w(),c.reset())}).catch(s=>{a.style.display="none",l("Oops! Something went wrong. Please try again later.")})}function l(r){p.error({title:"Error",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:r,position:"topRight"})}function b(r){u.insertAdjacentHTML("beforeend",y(r))}function w(){new f(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
