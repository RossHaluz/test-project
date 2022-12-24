import FetchFilmsApi from '../fetch-service/fechFilmsApi';
import refs from '../fetch-service/refs';
import renderMarkupSearch from './renderMarkupSearch';

const apiFetch = new FetchFilmsApi()

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formInputSearch = refs.formImput.value.trim()
    apiFetch.serchValue = formInputSearch;

    refs.galeryList.innerHTML = "";

    apiFetch.getMouvieSearch().then(data => {
        if (!data.results.length) {
            return
        }
        renderMarkupSearch(data.results)

   }).catch(err => console.log(err))

}

export default onFormSubmit