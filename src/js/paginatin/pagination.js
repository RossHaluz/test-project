import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";
const TUI_VISIBLE_PAGES = 5;


export function creatPagination() {
    const paginatins = new Pagination(refs.pagination)
    console.log(paginatins)
}
