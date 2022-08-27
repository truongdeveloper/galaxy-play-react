import queryString from "query-string";
import React, { useEffect, useRef, useState } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from 'react-router-dom';
import { lowImg } from '../../Api/getImg';
import ListsApi from '../../Api/ListApi';
import { Container } from '../../styles/GlobleStyles';
import './ListMovie.scss';



ListMovie.propTypes = {
    
};

function ListMovie(props) {

    const location = useLocation();
    const gener = queryString.parse(location.search).gener;
    // console.log(gener);

    const callApiFunction = () => {
        switch(gener){
            case 'top-rate': return ListsApi.getTopRate(page.current);
            case 'movie-now': return ListsApi.getMovieNow(page.current);
            case 'popular': return ListsApi.getPopular(page.current);
            case 'up-coming': return ListsApi.getUpComing(page.current);
            default : return ListsApi.getMovieNow(page.current);
        }
    }

    const page = useRef(1);
    const [data, setData] = useState([1]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await callApiFunction();
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
                const newData1 = await callApiFunction();
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
            {(loading && !data)?

                <h2>Loading ...</h2>
            :
            <>
                <h1 className='title-movie-list'>{gener}</h1>
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
                        {data.map((data, idx) => {
                            return(
                            <div className="item" data-aos="fade-up" key={idx}>
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
            </>
            }
            
        </Container>
    );
}

export default ListMovie;