import React from 'react';
import PropTypes from 'prop-types';
import { BtnHome } from './NotFound';
import { NavLink } from 'react-router-dom';
import DevelopImg from '../assets/developing.svg'

ComingSoon.propTypes = {
    
};

function ComingSoon(props) {
    return (
        <BtnHome>
            <center>
                <img src={DevelopImg} alt=""  style={{width: '60%'}}/>
                <h2>Rất tiếc, Trang bạn mong muốn đang trong quá trình phát triển</h2>
                <h3> Vui lòng về lại Trang chủ Galaxy Play!</h3>
                <div className={'btn__1'} style={{width: '100px'}}>
                    <NavLink to={"/"}>Trang chủ</NavLink>
                </div>
            </center>
        </BtnHome>
    );
}

export default ComingSoon;