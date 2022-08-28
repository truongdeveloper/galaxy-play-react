import React from "react";
import { FaSearch } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoglx.svg";
import useScroll from "../../hooks/onScroll";
import "./header.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { isMobile, isMobileOnly } from "react-device-detect";
import {FiSearch} from 'react-icons/fi';

Header.propTypes = {};

function Header(props) {

    const scroll = useScroll();

    const [menu, setMenu] = useState(false);
    function handleClick() {
        if(menu){
            setMenu(false);
        }else{
            setMenu(true);
        }
    }
    const [searchArea, setSearchArea] = useState(false);

    function handleSearch() {
        if(searchArea) {
            setSearchArea(false);
        }else {
            setSearchArea(true);
        }
    }

    return (
        <nav style={scroll? {background: 'black'}:{}} >
            <div className="nav__container">
                <div className="menu__mobile-icon" onClick={handleClick}>
                    <FaBars className="menu__icon"/>
                </div>
                <NavLink to={""}>
                    <img src={logo} alt="" className="img__logo"/>
                </NavLink>
                {(isMobile && !menu)?
                        null
                    :
                    <div className="menu__mobile" onClick={handleClick}>
                        <NavLink to={'/'} data-aos="fade-up">Trang chủ</NavLink>
                        <NavLink to={"/kho-phim"} data-aos="fade-up">Kho Phim</NavLink>
                        <NavLink to={"/phim-dien-anh?gener=movie-now"} data-aos="fade-up">Phim Điện Ảnh</NavLink>
                        <NavLink to={"/phim-bo"} data-aos="fade-up">Phim Bộ</NavLink>
                        <NavLink to={"/phim-thue"} data-aos="fade-up">Phim Thuê</NavLink>
                        <NavLink to={"/khuyen-mai"} data-aos="fade-up">Khuyến Mãi</NavLink>
                        <NavLink to={"/ho-tro"} data-aos="fade-up">Hỗ Trợ</NavLink>
                    </div>
                    
                }
                <div className="menu" onClick={handleClick}>
                    <NavLink to={'/'} data-aos="fade-up">Trang chủ</NavLink>
                    <NavLink to={"/kho-phim"} data-aos="fade-up">Kho Phim</NavLink>
                    <NavLink to={"/phim-dien-anh?gener=movie-now"} data-aos="fade-up">Phim Điện Ảnh</NavLink>
                    <NavLink to={"/phim-bo"} data-aos="fade-up">Phim Bộ</NavLink>
                    <NavLink to={"/phim-thue"} data-aos="fade-up">Phim Thuê</NavLink>
                    <NavLink to={"/khuyen-mai"} data-aos="fade-up">Khuyến Mãi</NavLink>
                    <NavLink to={"/ho-tro"} data-aos="fade-up">Hỗ Trợ</NavLink>
                </div>
                
                {isMobile?
                    
                    <FiSearch className="icon__search" onClick={handleSearch}/>
                    
                :
                    <div className="search__area" >
                        <input type="text" className="search" placeholder="Name, Gener, Actor, ..."/>
                        <FaSearch className="icon__search"/>
                    </div>
                }

                {isMobile?

                    <div className="search__table-mobile" style={ searchArea? { height: '100vh'} : null}>
                       
                    </div>
                :
                    null
                }
                    

                
                <div className="login btn__1">
                    <NavLink to={"/login"}>Đăng Nhập</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
