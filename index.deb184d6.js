var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},e.parcelRequired7c6=i),i("lhLDm");var n=i("lhLDm"),a=i("96LRb"),s=i("iWfcO");a=i("96LRb");var o=function(e){const t=e.map((({poster_path:e,title:t,release_date:l})=>{return`\n     <li class="galery-list__item card-set-iteam">\n          <img src="https://image.tmdb.org/t/p/w500/${e}" alt="${t}" class="galery-list__img" />\n          <h3 class="galery-list__title">${t}</h3>\n          <p class="galery-list__desc">\n            Science Fiction, Action, Adventure, Drama | ${i=l,i.split("").slice(0,4).join("")}\n          </p>\n        </li>\n    `;var i})).join("");a.default.galeryList.innerHTML=t};const d=new(0,n.default);function r(e){e.preventDefault();const t=a.default.formImput.value.trim();d.serchValue=t,a.default.galeryList.innerHTML="",d.getMouvieSearch().then((e=>{if(!e.results.length)return;o(e.results);(0,s.createPagination)(e.total_results,e.total_pages).on("beforeMove",(({page:e})=>{a.default.galeryList.innerHTML="",d.pageNum=e,d.getMouvieSearch().then((e=>{a.default.galeryList.innerHTML=o(e.results)}))}))})).catch((e=>console.log(e)))}a.default.form.addEventListener("submit",r);i("96LRb"),i("2QMTS"),(a=i("96LRb")).default.changeColor.addEventListener("click",(function(){document.body.classList.toggle("dark")}));a=i("96LRb");i("2QMTS");n=i("lhLDm");i("lhLDm");a=i("96LRb");function c({poster_path:e,title:t,vote_average:l,vote_count:i,popularity:n,overview:s}){const o=`\n    <div class="modal-content">\n     <img\n      src="https://image.tmdb.org/t/p/w500/${e}"\n      alt="${t}"\n      width="400"\n      height="500"\n      class="modal__img"\n    />\n    <div class="modal-wrapp">\n    <div class="modal-cover">\n    <h2 class="modal__title">${t}</h2>\n    <div class="modal-list-cover">\n    <ul class="modal__list list">\n      <li class="modal__list--item">Vote / Votes</li>\n      <li class="modal__list--item">Popularity</li>\n      <li class="modal__list--item">Original Title</li>\n      <li class="modal__list--item">Genre</li>\n    </ul>\n\n    <ul class="moda__option list">\n      <li class="modal__option--item">${l.toFixed(1)} / ${i}</li>\n      <li class="modal__option--item">${n}</li>\n      <li class="modal__option--item">${t}</li>\n      <li class="modal__option--item">SCIENCE FICTION</li>\n    </ul>\n    </div>\n    </div>\n\n    <h3 class="modal__about">ABOUT</h3>\n    <p class="modal__about--text">\n      ${s}\n    </p>\n    </div>\n    </div>\n    `;a.default.modalWrapp.insertAdjacentHTML("beforeend",o)}var u=i("g8ufL");const m=new(0,n.default),f=new(0,u.LocalStorageServiceFilms);let p;function _(){a.default.backdropModal.classList.add("is-hidden")}a.default.galeryList.addEventListener("click",(function(e){if(!e.target.classList.contains("galery-list__img"))return;a.default.modalWrapp.innerHTML="",p=e.target.dataset.id,m.getIdFilm=p,a.default.backdropModal.classList.remove("is-hidden"),m.getDateilsMovieById().then((e=>{c(e)}))})),a.default.closeBtn.addEventListener("click",(function(){_()})),a.default.modalBtnWatched.addEventListener("click",(function(){f.setFilms(p)})),a.default.modalBtnQueue.addEventListener("click",(function(){f.setQueueMovie(p)})),window.addEventListener("click",(e=>{e.target===a.default.backdropModal&&_()})),i("iWfcO");
//# sourceMappingURL=index.deb184d6.js.map
