import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup'

const fetchApi = new FetchFilmsApi;
let currentPage = 1;

refs.paginationItemNext.addEventListener('click', onClickBtnNext);
refs.paginationItemPrev.addEventListener('click', onClickBtnPrev);


export function onClickBtnNext() {
  currentPage += 1;
  fetchApi.pageNum = currentPage;
  refs.paginationListItemPage.innerHTML = currentPage;
  fetchApi.getTrendingMovies(data => console.log(getTrendingMoviesAndRender()))
}

function onClickBtnPrev() {
  currentPage -= 1;
  refs.paginationListItemPage.innerHTML = currentPage;
}

