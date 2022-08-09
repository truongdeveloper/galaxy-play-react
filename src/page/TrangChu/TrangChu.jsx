import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BannerSwiper from '../../components/BannerSwiper/BannerSwiper';
import ListsApi from '../../Api/ListApi';

TrangChu.propTypes = {
    
};

function TrangChu(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const axiosPoster = async () => {
            try{
                const newData = await ListsApi.getMovieNow();
                setData(newData);
                setLoading(false);
                console.log(newData);
            } catch(error) {
                console.log(error)
            }
        }
        axiosPoster();
    },[])

    return (
        <React.Fragment>
        { loading ?
            <p>Loading...</p>
        :
            <div>
                <BannerSwiper data={data}></BannerSwiper>
            </div>
        }
        </React.Fragment>
    );
}

export default TrangChu;