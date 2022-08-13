import axiosClient from "./axiosCliend";

const API_KEY = "api_key=e9e9d8da18ae29fc430845952232787c";
const DetalApi = {
    
    getFilmDetal(id) {
        const url = `/movie/${id}?${API_KEY}&append_to_response=videos`;
        return axiosClient.get(url);
    },

    getActor(id) {
        const url = `movie/${id}/casts?${API_KEY}`;
        return axiosClient.get(url);
    },

    getReviews(id) {
        const url = `/movie/${id}/reviews?${API_KEY}`;
        return axiosClient.get(url);
    },

    getSimilar(id, page) {
        const url = `/movie/${id}/similar?${API_KEY}&language=en-US&page=${page ? page : 1}`;
        return axiosClient.get(url);
    },
};

export default DetalApi;