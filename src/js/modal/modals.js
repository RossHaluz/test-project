import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';

const fethApi = new FetchFilmsApi()

refs.galeryList.addEventListener('click', onClickFilm);

export function onClickFilm(e){
    const filmId = e.target.dataset.id;
    fethApi.getIdFilm = filmId;

    fethApi.getDateilsMovieById().then(data => console.log(data))
}