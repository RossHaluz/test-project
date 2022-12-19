import fetchFilmsApi from '../fetch-service/fechFilmsApi'
import refs from '../fetch-service/refs';
import { onClickFilm } from '../modal/modals'



export function renderMarkupModal({ poster_path, title, vote_average, vote_count, popularity, overview }) {
    refs.galeryList.innerHTML = `
     <img
      src="https://image.tmdb.org/t/p/w500/${poster_path}"
      alt="${title}"
      width="400"
      height="500"
      class="modal__img"
    />
    <h2 class="modal__title">${title}</h2>
    <ul class="modal__list">
      <li class="modal__list--item">Vote / Votes</li>
      <li class="modal__list--item">Popularity</li>
      <li class="modal__list--item">Original Title</li>
      <li class="modal__list--item">Genre</li>
    </ul>

    <ul class="moda__option">
      <li class="modal__option--item">${vote_average.toFixed(1)} / ${vote_count}</li>
      <li class="modal__option--item">${popularity}</li>
      <li class="modal__option--item">${title}</li>
      <li class="modal__option--item">SCIENCE FICTION</li>
    </ul>

    <h3 class="modal__about">ABOUT</h3>
    <p class="modal__about--text">
      ${overview}
    </p>
    `;   
}
