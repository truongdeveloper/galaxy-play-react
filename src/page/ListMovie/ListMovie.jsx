import queryString from "query-string";
import React, { useState } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from 'react-router-dom';
import { lowImg } from '../../Api/getImg';
import ListsApi from '../../Api/ListApi';
import useCallData from '../../hooks/CallData';
import { Container } from '../../styles/GlobleStyles';
import './ListMovie.scss';



ListMovie.propTypes = {
    
};

function ListMovie(props) {

    const location = useLocation();
    const gener = queryString.parse(location.search).gener;
    console.log(gener);
    const [page, setPage] = useState(1);
    function useMoreData() {
        const newPage = page + 1;
        // setPage(newPage);
        const [moreData, moreLoading, moreError] = useCallData(ListsApi.getMovieNow(newPage))
        data.concat(moreData)
    }
    const [data, loading, error] = useCallData( ListsApi.getMovieNow(1) );

    return (
        <Container>
            <h1 className='title-movie-list'>Movie Now</h1>
            <InfiniteScroll
                dataLength={data.length}
                next={useMoreData()}
                hasMore={true}
                loader={<p>Loading...</p>}
            >
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
            </InfiniteScroll>
        </Container>
    );
}

export default ListMovie;