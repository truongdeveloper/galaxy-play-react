import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoglx.svg";
import "./header.scss";
import {FaSearch } from 'react-icons/fa';

Header.propTypes = {};

function Header(props) {
    return (
        <nav>
            <div className="nav__container">
                <NavLink to={""}>
                    <img src={logo} alt="" className="img__logo"/>
                </NavLink>
                <div className="menu">
                    <NavLink to={"/kho-phim"}>Kho Phim</NavLink>
                    <NavLink to={"/phim-dien-anh"}>Phim Điện Ảnh</NavLink>
                    <NavLink to={"/phim-bo"}>Phim Bộ</NavLink>
                    <NavLink to={"/phim-thue"}>Phim Thuê</NavLink>
                    <NavLink to={"/khuyen-mai"}>Khuyến Mãi</NavLink>
                    <NavLink to={"/ho-tro"}>Hỗ Trợ</NavLink>
                </div>
                <div className="search__area" >
                    <input type="text" className="search" placeholder="Name, Gener, Actor, ..."/>
                    <FaSearch className="icon__search"/>
                </div>
                <div className="login btn__1">
                    <NavLink to={"/login"}>Đăng Nhập</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
