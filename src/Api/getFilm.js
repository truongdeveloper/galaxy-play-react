
const getFilm = (id) => {
    const url = `https://multiembed.mov/?video_id=${id}&tmdb=1`
    return url;
}

export default getFilm