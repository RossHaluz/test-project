import axios from 'axios';

class FetchApiMovies{
    #API_KEY;
    #Total_page;
    constructor() {
        this.#API_KEY = 'f896ccabafb5d2939071b9f1aa9e42c1';
        this.BASE_URL = 'https://api.themoviedb.org/3';
        this.query = '';
        this.page = 1;
    }

    async serchFilm() {
        const resp = await axios.get(`${this.BASE_URL}/search/movie?api_key=${this.#API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`)
    
        return resp.data;
    }

    async getTrendingMovie() {
        const resp = await axios.get(`${this.BASE_URL}/trending/movie/day?api_key=${this.#API_KEY}&language=en-US&page=${this.page}&include_adult=false`)

        return resp.data;
    }

    get queryValue() {
        return this.query;
    }

    set queryValue(newValue) {
        this.query = newValue;
    }

}

export default FetchApiMovies