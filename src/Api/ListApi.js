import axiosClient from "./axiosCliend";

const API_KEY = "api_key=e9e9d8da18ae29fc430845952232787c";
const ListsApi = {
    getMovieNow(page) {
        const url = `/movie/now_playing?${API_KEY}&language=en-US&page=${page ? page : 1}`;
        return axiosClient.get(url);
    },


    getPopular(page) {
        const url = `/movie/popular?${API_KEY}&language=en-US&page=${page ? page : 1}`;
        return axiosClient.get(url);
    },

    getUpComing(page) {
        const url = `/movie/upcoming?${API_KEY}&language=en-US&page=${page ? page : 1}`;
        return axiosClient.get(url);
    },

    getTopRate(page) {
        const url = `/movie/top_rated?${API_KEY}&language=en-US&page=${page ? page : 1}`;
        return axiosClient.get(url);
    },

    getQuery(page, keyword) {
        const url = `/search/keyword?${API_KEY}&page=${page ? page : 1}&query=${keyword}`;
        return axiosClient.get(url);
    },
};

export default ListsApi;