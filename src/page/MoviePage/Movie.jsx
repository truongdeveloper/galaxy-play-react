import queryString from "query-string";
import React from 'react';
import { useLocation } from 'react-router-dom';
import DetalApi from '../../Api/DetalApi';
import { hightImg, lowImg, veryLowImg } from '../../Api/getImg';
import useCallData from '../../hooks/CallData';
import './Movie.scss';

Movie.propTypes = {
    
};


function Movie(props) {

    const location = useLocation();
    const id = queryString.parse(location.search).id;

    const getFilm = (id) => {
        const url = `https://www.2embed.to/embed/tmdb/movie?id=${id}`
        return url;
    }

    
    const [data, loading, error] = useCallData( DetalApi.getFilmDetal(id) );
    const [actor, loadingActor, errorActor] = useCallData( DetalApi.getActor(id))
    const [similar, loadingSimilar, errorSimilar] = useCallData( DetalApi.getSimilar(id) )
    
    const actorJsx = [];
    console.log(loadingActor);
    console.log(actor)
    if(!loadingActor){
        for (let i = 0; i < 5; i++) {
            actorJsx.push(
                <div key={i} className="actor-main">
                    <img src={veryLowImg(actor.cast[i].profile_path)} alt="Actor" className="img-actor" />
                    <p>{actor.cast[i].name}</p>
                    <p>({actor.cast[i].character})</p>
                </div>
            )
            
        }
    }

    return (
        <div>
            {loading?
                <h1>Loading ...</h1>
            :
                <div className="film-detal">
                    <div className="back-drop" style={{backgroundImage:`url(${hightImg(data.backdrop_path)})`}}></div>
                    <div className="film-detal-info">
                        <div className="info-left">
                            <img src={lowImg(data.poster_path)} alt="Poster" className='poster'/>
                            <a href="#video" className="btn">
                                <div className="btn-play">Xem Phim</div>
                            </a>
                        </div>
                        <div className="info-right">
                            <h1 className="title">{data.title}</h1>
                            <p>IBM: {Math.floor(data.vote_average)}</p>
                            <div className="genres">
                                {data.genres.map((arr, idx) => {
                                   return  <span key={idx} className='genres-item'>{arr.name}</span>
                                })}
                            </div>
                            <p>Release :{data.release_date}</p>
                            <p>{data.overview}</p>
                            <div className="actor">
                                {actorJsx}
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            }
            

            <div id='video'>
                <iframe 
                src={getFilm(id)} 
                title='Film iFrame' 
                frameBorder={0} 
                allowFullScreen
                className='frame-film'
                ></iframe>
            </div>
        </div>
    );
}

export default Movie;