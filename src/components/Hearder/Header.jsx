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
import styled from "styled-components";

Header.propTypes = {};

const Search = styled.div`


`

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
                        <NavLink to={'/'} >Trang chủ</NavLink>
                        <NavLink to={"/kho-phim"} >Kho Phim</NavLink>
                        <NavLink to={"/phim-dien-anh?gener=movie-now"} >Phim Điện Ảnh</NavLink>
                        <NavLink to={"/phim-bo"} >Phim Bộ</NavLink>
                        <NavLink to={"/phim-thue"} >Phim Thuê</NavLink>
                    </div>
                    
                }
                <div className="menu" onClick={handleClick}>
                    <NavLink to={'/'} >Trang chủ</NavLink>
                    <NavLink to={"/kho-phim"} >Kho Phim</NavLink>
                    <NavLink to={"/phim-dien-anh?gener=movie-now"} >Phim Điện Ảnh</NavLink>
                    <NavLink to={"/phim-bo"} >Phim Bộ</NavLink>
                    <NavLink to={"/phim-thue"} >Phim Thuê</NavLink>
                </div>

                <FiSearch className="icon__search" onClick={handleSearch}/>
                
                {/* {isMobile?
                    
                    <FiSearch className="icon__search" onClick={handleSearch}/>
                    
                :
                    <div className="search__area" >
                        <input type="text" className="search" placeholder="Name, Gener, Actor, ..."/>
                        <FaSearch className="icon__search"/>
                    </div>
                } */}

                {/* {searchArea?
                    <div className="search__table" style={ { height: '100vh', width: '60vw', float: 'right' } }>
                        <input type="text" className="search-input" style={{width: "100%"}} placeholder='Name, Gener, Actor, ...' />
                    </div>
                :
                    null
            
                } */}

                {isMobile?

                    <div className="search__table-mobile" style={ searchArea? { height: '100vh'} : null}>
                       <input type="text" className="search-input" style={{width: "100%", position: 'absolute'}} placeholder='Name, Gener, Actor, ...' />
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
