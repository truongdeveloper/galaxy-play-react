import React from 'react';
import {FaRegWindowClose } from 'react-icons/fa';
import getFilm from '../Api/getFilm';
import loadingImg from '../assets/loader_cat.gif'


IframeMovie.propTypes = {
    
};

function IframeMovie({data, closeClick}) {
    function handleClick() {
        closeClick()
    }
    return (
        <div id='video'>
            <div className="background-position">
                <FaRegWindowClose className='close' onClick={handleClick}/>
                <img src={loadingImg} alt="Loading"  className='loading-iframe'/>
                <iframe
                style={{border: "none"}}
                src={getFilm(data.id)} 
                title='Film iFrame' 
                allowFullScreen
                className='frame-film'>
                </iframe>
            </div> 

        </div>
    );
}

export default IframeMovie;