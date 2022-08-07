import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoglx.svg";
import "./header.css";

Header.propTypes = {};

function Header(props) {
    return (
        <nav>
            <div className="nav__container">
                <NavLink to={""}>
                    <img src={logo} alt="" />
                </NavLink>
                <div className="menu">
                    <NavLink to={"/khophim"}>Kho Phim</NavLink>
                    <NavLink to={"/phim-dien-anh"}>Phim Điện Ảnh</NavLink>
                    <NavLink to={"/phim-bo"}>Phim Bộ</NavLink>
                    <NavLink to={"/phim-thue"}>Phim Thuê</NavLink>
                    <NavLink to={"/khuyen-mai"}>Khuyến Mãi</NavLink>
                    <NavLink to={"/hotro"}>Hỗ Trợ</NavLink>
                </div>
                <div className="login">
                    <NavLink to={"/login"} className="btn-1">
                        Đăng Nhập
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
