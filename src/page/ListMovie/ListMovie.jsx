import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobleStyles';
import ListsApi from '../../Api/ListApi';
import useCallData from '../../hooks/CallData';
import { Link } from 'react-router-dom';
import {FaRegPlayCircle } from 'react-icons/fa';
import { lowImg } from '../../Api/getImg';
import './ListMovie.scss';


ListMovie.propTypes = {
    
};

function ListMovie(props) {

    const [data, loading, error] = useCallData( ListsApi.getMovieNow(1) );

    return (
        <Container>
            <h1 className='title-movie-list'>Movie Now</h1>
            {(loading && !data)?
                <h2>Loading...</h2>
            :
                <div className='list-item'>
                   {data.map((data) => {
                    return(
                    <div className="item" data-aos="fade-up">
                        <Link to={`/movie?id=${data.id}`}>
                            <div className='movie-item'>
                                <img src={lowImg(data.poster_path)} alt="Poster" className='swiper__item-img' />
                                <p className='swiper__item-title'>{data.title}</p>
                                <div className='ibm-score' >{Math.floor(data.vote_average)}</div>
                                <div className="play-btn">
                                    <FaRegPlayCircle/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    )})}
                    
                </div>
            }
        </Container>
    );
}

export default ListMovie;