import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import {renderMarkupModal} from '../main/renderMarkupModal';

const fethApi = new FetchFilmsApi()

refs.galeryList.addEventListener('click', onClickFilm);

export function onClickFilm(e){
    const filmId = e.target.dataset.id;
    fethApi.getIdFilm = filmId;
    refs.backdropModal.classList.remove('is-hidden');

    fethApi.getDateilsMovieById().then(data => renderMarkupModal(data))
}