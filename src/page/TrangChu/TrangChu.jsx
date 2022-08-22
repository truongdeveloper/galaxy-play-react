import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BannerSwiper from '../../components/BannerSwiper/BannerSwiper';
import ListsApi from '../../Api/ListApi';
import { Container } from '../../styles/GlobleStyles';
import { NavLink } from 'react-router-dom';
import { lowImg } from '../../Api/getImg';
import './Trangchu.scss'
import { isMobile } from 'react-device-detect';
import loadingIMG from '../../assets/loading.webp'

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
        <Container>
            { loading ?
                <p>Loading...</p>
            :
                <div>
                    <BannerSwiper data={data}></BannerSwiper>
                </div>
            }
        </Container>
        <Container>
            <div className="partner">
                <div className="partner__left">
                    <h2 className="partner__left-title">Giải trí online không giới hạn hàng nghìn giờ nội dung đậm chất Việt</h2>
                    <div className="partner__left-content">
                        <div className="content">
                            <p>Bom tấn Việt chiếu rạp độc quyền và sớm nhất</p>
                            <p>Thư viện phim Việt lớn nhất Việt Nam</p>
                            <p>Phim Bộ độc quyền Galaxy Play</p>
                            <p>Phim Bộ Hot Châu Á</p>
                            <p>Siêu phẩm điện ảnh Hollywood và Disney</p>
                        </div>
                        <div className="btn__1">
                            <NavLink to={"/kho-phim"}>Kho Phim</NavLink>
                        </div>
                    </div>
                </div>
                <div className="partner__right">
                {isMobile?

                    <img src={loadingIMG} alt="Mobile" />
                :
                    <>
                        { loading?

                                <p>Loading...</p>
                        :
                            <>
                                <div>
                                    <img src={lowImg(data[2].poster_path)} alt="" />
                                    <img src={lowImg(data[4].poster_path)} alt="" className='img-middle'/>
                                    <img src={lowImg(data[6].poster_path)} alt="" />
                                </div>
                                <div>
                                    <img src={lowImg(data[8].poster_path)} alt="" />
                                    <img src={lowImg(data[10].poster_path)} alt="" className='img-middle'/>
                                    <img src={lowImg(data[12].poster_path)} alt="" />
                                </div>
                            </>
                        }
                    </>
                }
                </div>
            </div>
        </Container>
        </React.Fragment>
    );
}
export default TrangChu;