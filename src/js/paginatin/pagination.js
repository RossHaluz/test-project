import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup';



const fetchApi = new FetchFilmsApi;
let currentPage = 1;

refs.paginationItemNext.addEventListener('click', onClickBtnNext);
refs.paginationItemPrev.addEventListener('click', onClickBtnPrev);


export function onClickBtnNext() {
  refs.galeryList.innerHTML = "";
  currentPage += 1;
  fetchApi.pageNum = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.getTrendingMovies().then(data => creatMarkupPagination(data.results))
}

function onClickBtnPrev() {
  currentPage -= 1;
  refs.paginationListItemPage.innerHTML = currentPage;
}

function creatMarkupPagination(arr) {
  const markup = arr.map(({ poster_path, title, release_date, id }) => `
  <li class="galery-list__item card-set-iteam">
          <img data-id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="galery-list__img" />
          <h3 class="galery-list__title">${title}</h3>
          <p class="galery-list__desc">
            Science Fiction, Action, Adventure, Drama | ${splitDate(release_date)}
          </p>
        </li>
  `).join('');

  refs.galeryList.innerHTML = markup;
}

function splitDate(value) {
    const slit = value.split('').slice(0, 4).join('');

    return slit;

}