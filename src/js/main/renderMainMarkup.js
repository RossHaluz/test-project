import refs from '../fetch-service/refs';
import fetchApiMovies from '../fetch-service/fechFilmsApi';

const fetchApi = new fetchApiMovies()
fetchApi.getTrendingMovie().then(data => {
    renderMainMarkup(data.results)
})

function renderMainMarkup(arr) {
  const markup = arr.map(({ poster_path, title, date }) => `
    <li class="galery__list--item">
        <div class="film-thumb">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="galery__list--img" loading="lazy" />
        </div>
        <div class="filn-wrapp">
          <h2 class="galery__list--title">${title}</h2>
          <p class="galery__list--desc">Drama, Comedy | ${date}</p>
        </div>
      </li>
    `).join('')
  refs.list.insertAdjacentHTML('beforeend', markup)
  
}

export {renderMainMarkup}