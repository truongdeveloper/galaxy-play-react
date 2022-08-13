
const getFilm = (id) => {
    const url = `https://www.2embed.to/embed/tmdb/movie?id=${id}`
    return url;
}

export default getFilm