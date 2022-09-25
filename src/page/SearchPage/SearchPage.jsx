import React from 'react';
import PropTypes from 'prop-types';
import ListsApi from '../../Api/ListApi';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Container } from '../../styles/GlobleStyles';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from 'react-router-dom';
import { lowImg } from '../../Api/getImg';
import { FaRegPlayCircle } from 'react-icons/fa';




SearchPage.propTypes = {
    
};

function SearchPage(props) {


    const page = useRef(1);
    const [data, setData] = useState([1]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = useState('s');


    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await ListsApi.getQuery(1, keyword);
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
                const newData1 = await ListsApi.getQuery(1, keyword);
                setData([...data, ...newData1]);
                console.log(data)
            } catch(error) {
                console.log(error)
            }
        }
        axiosPoster();
    }
    return (
        <Container>
            {(loading && !data)?

                <h2>Loading ...</h2>
            :
            <>
                <h1 className='title-movie-list'>{keyword}</h1>
                <InfiniteScroll
                    style={{ overflowY: 'hidden' }}
                    dataLength={data.length}
                    next={useMoreData}
                    hasMore={page.current <= 2? true : false}
                    loader={<p>Loading...</p>}
                >
                    {(loading && !data)?
                        <h2>Loading...</h2>
                    :
                        <div className='list-item'>
                        {data.map((data, idx) => {
                            return(
                            <div className="item" key={idx} data-aos="fade-up">
                                <Link to={`/movie?id=${data.id}`}>
                                    <div className='movie-item'>
                                        <img src={lowImg(data.poster_path)} alt="Poster" onError={(e) => {e.target.onerror = null ; e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/003/393/218/small_2x/error-404-with-the-cute-french-fries-mascot-free-vector.jpg'}} className='swiper__item-img' />
                                        <p className='swiper__item-title'>{data.name}</p>
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
            </>
            }
            
        </Container>
    );
}

export default SearchPage;