import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BannerSwiper from '../../components/BannerSwiper/BannerSwiper';
import SwiperList from '../../components/Swiper/SwiperList';
import useCallData from '../../hooks/CallData';
import {FaArrowCircleRight } from 'react-icons/fa';
import { Container } from '../../styles/GlobleStyles';
import ListsApi from '../../Api/ListApi';


KhoPhim.propTypes = {
    
};

function KhoPhim(props) {

    const [data, loading, error] = useCallData( ListsApi.getTopRate(1) );
    console.log({data})
    // const {data2, loading2, error2} = useCallData(2)
    return (
        <React.Fragment>
            {!(data  &&   data?.length > 0)?
                <p>Loading...</p>
            :
                <div>
                    <BannerSwiper data={data}></BannerSwiper>
                </div>
            }
            {!(data  &&   data?.length > 0)?
                <h1>Loading....</h1>
                : (
                    <Container>
                        <Link to={'/list?gener=top-rate'} >
                            <h2 className="top-rate" style={{display: 'inline-block'}}>Top Rate</h2>
                            <FaArrowCircleRight style={{margin:'0 1rem'}}/>
                        </Link>
                        <SwiperList data={data}></SwiperList>
                    </Container>
                )
            }
            {!(data  &&   data?.length > 0)?
                <h1>Loading....</h1>
                : (
                    <Container>
                        <Link to={'/list?gener=top-rate'} >
                            <h2 className="top-rate" style={{display: 'inline-block'}}>Top Rate</h2>
                            <FaArrowCircleRight style={{margin:'0 1rem'}}/>
                        </Link>
                        <SwiperList data={data}></SwiperList>
                    </Container>
                )
            }
            {!(data  &&   data?.length > 0)?
                <h1>Loading....</h1>
                : (
                    <Container>
                        <Link to={'/list?gener=top-rate'} >
                            <h2 className="top-rate" style={{display: 'inline-block'}}>Top Rate</h2>
                            <FaArrowCircleRight style={{margin:'0 1rem'}}/>
                        </Link>
                        <SwiperList data={data}></SwiperList>
                    </Container>
                )
            }
            {!(data  &&   data?.length > 0)?
                <h1>Loading....</h1>
                : (
                    <Container>
                        <Link to={'/list?gener=top-rate'} >
                            <h2 className="top-rate" style={{display: 'inline-block'}}>Top Rate</h2>
                            <FaArrowCircleRight style={{margin:'0 1rem'}}/>
                        </Link>
                        <SwiperList data={data}></SwiperList>
                    </Container>
                )
            }
        
        </React.Fragment>

    );
}

export default KhoPhim;