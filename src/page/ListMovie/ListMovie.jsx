import queryString from "query-string";
import React, { useState } from 'react';
import { useRef } from "react";
import { useEffect } from "react";
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

    const page = useRef(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await ListsApi.getMovieNow(page);
                setData(newData);
                setLoading(false);
                // console.log(newData);
            } catch(error) {
                console.log(error)
            }
        }
        axiosPoster();
    },[])
    
    function useMoreData() {
        page.current = page.current + 1;
        const axiosPoster = async () => {
            try{
                const newData1 = await ListsApi.getMovieNow(page.current);
                setData([...data, ...newData1]);
            } catch(error) {
                console.log(error)
            }
        }
        axiosPoster();
        // const newData1 = [...data, ...moreData];
        // setData(newData1)
        // return newData1;
    }

    return (
        <Container>
            <h1 className='title-movie-list'>Movie Now</h1>
            <InfiniteScroll
                style={{ overflowY: 'hidden' }}
                dataLength={data.length}
                next={useMoreData}
                hasMore={page.current <= 10? true : false}
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