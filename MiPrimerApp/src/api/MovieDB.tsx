import axios from "axios";

const movieDB = axios.create({

    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f800ec8b6fa91eabc4a552c6b49fa00f',
        language: 'en-US'
    }

});

export default movieDB;
