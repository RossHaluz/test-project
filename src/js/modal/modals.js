import refs from "../fetch-service/refs";
import getTrendingMoviesAndRender from '../main/renderMainMarkup';
import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import {renderMarkupModal} from '../main/renderMarkupModal';

const fethApi = new FetchFilmsApi()

refs.galeryList.addEventListener('click', onClickFilm);
refs.closeBtn.addEventListener('click', onClickCloseBtn);

export function onClickFilm(e) {
if (!e.target.classList.contains('galery-list__img')) {
    return;
}
   refs.modalWrapp.innerHTML = "";
    const filmId = e.target.dataset.id;
    fethApi.getIdFilm = filmId;
    refs.backdropModal.classList.remove('is-hidden');

    fethApi.getDateilsMovieById().then(data => {
        renderMarkupModal(data)
    })
     
    
}

window.addEventListener('click', (e) => {
    if (e.target === refs.backdropModal) {
        closeModal()
    }
})

function onClickCloseBtn() {
    closeModal();
}

function closeModal() {
    refs.backdropModal.classList.add('is-hidden');
    // refs.closeBtn.removeEventListener('click', onClickCloseBtn);
}