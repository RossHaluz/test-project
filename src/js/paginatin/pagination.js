import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from "../fetch-service/refs";


export function creatPagination() {
    const instance = new Pagination(refs.pagination)

instance.getCurrentPage()
}
