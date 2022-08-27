import React from 'react';
import PropTypes from 'prop-types';
import { hightImg } from '../Api/getImg';
import {FaRegWindowClose } from 'react-icons/fa';
import loadingImg from '../assets/loader_cat.gif'


IframeMovie.propTypes = {
    
};

function IframeMovie({data, closeClick}) {
    console.log(data)

    const getFilm = (id) => {
        const url = `https://www.2embed.to/embed/tmdb/movie?id=${id}`
        return url;
    }
    function handleClick() {
        closeClick()
    }
    return (
        <div id='video'>
            <div className="background-position">
                <FaRegWindowClose className='close' onClick={handleClick}/>
                <img src={loadingImg} alt="Loading"  className='loading-iframe'/>
                <iframe 
                src={getFilm(data.id)} 
                title='Film iFrame' 
                frameBorder={0} 
                allowFullScreen
                className='frame-film'>
                </iframe>
            </div> 

        </div>
    );
}

export default IframeMovie;