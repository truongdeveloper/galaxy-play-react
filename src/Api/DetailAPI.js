import axiosClient from "./axiosCliend";

const API_KEY = `api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}`;
const DetailAPI = {
    
    getFilmDetail(id) {
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

export default DetailAPI;