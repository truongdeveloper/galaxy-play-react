import React from 'react';
import PropTypes from 'prop-types';
import NotFoundimg from '../assets/404.svg'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

NotFound.propTypes = {
    
};

 export const BtnHome = styled.div`
    display: flex;
    align-items: center;
    height: 82vh;
    justify-content: center;
`

function NotFound(props) {
    return (
        <BtnHome>
            <center>
                <img src={NotFoundimg} alt="" />
                <h2>Rất tiếc, không thể tìm thấy trang bạn mong muốn.</h2>
                <h3> Vui lòng về lại Trang chủ Galaxy Play!</h3>
                <div className={'btn__1'} style={{width: '100px'}}>
                    <NavLink to={'/'}>Trang chủ</NavLink>
                </div>
            </center>
        </BtnHome>
    );
}

export default NotFound;