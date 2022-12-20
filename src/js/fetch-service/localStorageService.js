export class LocalStorageServiceFilms {
    constructor() {
        this.keyName = 'films';
    }

    getFilms() {
        const filmsLocalStorage = localStorage.getItem(this.keyName)

        if (filmsLocalStorage !== null) {
            return JSON.parse(filmsLocalStorage)
        }

        return [];
    }

    setFilms(id) {
        let films = this.getFilms();
        let pushFilm = false;
        const index = films.indexOf(id);
        if (index === -1) {
            films.push(id);
            pushFilm = true;
        } else {
            films.splice(index, 1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(films));

        return {
            pushFilm,
            films,
        }
    }
}
