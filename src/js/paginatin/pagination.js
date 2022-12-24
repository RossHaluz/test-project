import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup'

const fetchApi = new FetchFilmsApi;
let currentPage = 0;

refs.paginationItemNext.addEventListener('click', onClickBtnNext);
refs.paginationItemPrev.addEventListener('click', onClickBtnPrev);


// export function createPagination(totalItems) {
  
// }

function onClickBtnNext() {
  currentPage += 1;
  refs.paginationListItemPage.innerHTML = currentPage;
  console.log(currentPage)
}

function onClickBtnPrev() {
  currentPage -= 1;
  refs.paginationListItemPage.innerHTML = currentPage;
}

