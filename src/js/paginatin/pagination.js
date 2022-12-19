import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup'
const TUI_VISIBLE_PAGES = 5;
const fetchApi = new FetchFilmsApi


export function creatPagination(totalItems) {
    const options = {
    totalItems: totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true
  };

  const pagination = new Pagination(refs.pagination, options);

}

