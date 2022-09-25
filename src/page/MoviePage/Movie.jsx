import queryString from "query-string";
import React, { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import DetalApi from '../../Api/DetalApi';
import { hightImg, lowImg, veryLowImg } from '../../Api/getImg';
import IframeMovie from "../../components/IframeMovie";
import SwiperList from "../../components/Swiper/SwiperList";
import useCallData from '../../hooks/CallData';
import './Movie.scss';

Movie.propTypes = {
    
};


function Movie(props) {

    const location = useLocation();
    const id = queryString.parse(location.search).id;
    
    useEffect(() => {
        if(localStorage.PATH__CURRENT !== location.search){
            document.location.reload(true)
        }
        localStorage.PATH__CURRENT = location.search;
    }, [location.search])

    
    const [data, loading, error] = useCallData( DetalApi.getFilmDetal(id) );
    const [actor, loadingActor, errorActor] = useCallData( DetalApi.getActor(id))
    const [similar, loadingSimilar, errorSimilar] = useCallData( DetalApi.getSimilar(id) )
    const [play , setPlay] = useState(false)
    console.log(data)
    function handlePlayClick() {
        setPlay(true);
    }
    function closeClick() {
        setPlay(false)
    }

    const actorJsx = [];
    const trailerJsx = [];
    if(!loadingActor){
        for (let i = 0; i < 5; i++) {
            actorJsx.push(
                <div key={i} className="actor-main">
                    <img src={veryLowImg(actor.cast[i].profile_path)} alt="Actor" className="img-actor" />
                    <p>{actor.cast[i].name}</p>
                    {actor.cast[i].character && <p>({actor.cast[i].character})</p>}
                </div>
            )
            
        }
        const trailerPath = data.videos?.results.filter((arr) => {
            return arr.type === "Trailer";
        })
        trailerPath?.forEach((arr, idx) => {
            trailerJsx.push(
                <iframe
                width="453"
                height="280"
                key={idx}
                src={`https://www.youtube.com/embed/${arr.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="trailer-iframe"
                >
                </iframe>
            )
        })
    }
    

    return (
        <div>
            {loading?
                <h1>Loading ...</h1>
            :
                <div className="film-detal">
                    
                    <div className="back-drop" style={{backgroundImage:`url(${hightImg(data.backdrop_path? data.backdrop_path : null)})`}}></div>
                    <div className="film-detal-info" >
                        <div className="film-detal-inforrrrr">
                            <div className="info-left">
                                <img src={lowImg(data.poster_path)} alt="Poster" onError={(e) => {e.target.onerror = null ; e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/003/393/218/small_2x/error-404-with-the-cute-french-fries-mascot-free-vector.jpg'}} className='poster'/>
                                <a href="#video" className="btn">
                                    <div className="btn-play" onClick={handlePlayClick}>Xem Phim</div>
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
                        <h2 className="content-container">Trailer</h2>
                        <div className="trailer">
                           
                            {trailerJsx}
                        </div>
                        <div className="similar">
                            <h2 className="content-container">Similar</h2>
                            <SwiperList data={similar} ></SwiperList>
                        </div>
                        {play? <IframeMovie data={data} closeClick={closeClick} ></IframeMovie> : null}
                    </div>
                </div>
            }
            
            
            
        </div>
    );
}

export default Movie;