import refs from '../fetch-service/refs';
import fetchApiMovies from '../fetch-service/fechFilmsApi';

refs.form.addEventListener('submit', onSubmitForm);

const fetchApi = new fetchApiMovies()


function onSubmitForm(e) {
  e.preventDefault();
  refs.list.innerHTML = '';
  fetchApi.queryValue = e.target.elements.searchInput.value.trim();
  fetchApi.serchFilm().then(data => {
    if (!data.results.length) {
      throw new Error()
    }
  console.log(data)
   renderMarkup(data.results)
  }).catch(err => {
    console.error(err)
})
}

function renderMarkup(arr) {
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


export {onSubmitForm}
