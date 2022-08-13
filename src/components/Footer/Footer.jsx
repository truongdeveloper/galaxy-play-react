import React from "react";
import logo from "../../assets/logoglx.svg";
import chungnhan from "../../assets/footer/informed.png";
import appStore from "../../assets/footer/_AppStore.png";
import googlePlay from "../../assets/footer/_GooglePlay.png";
import facebookIcon from "../../assets/footer/icon-social-facebook.svg";
import instaIcon from "../../assets/footer/icon-social-insta.svg";
import tiktokIcon from "../../assets/footer/icon-social-tiktok.svg";
import youtubeIcon from "../../assets/footer/icon-social-youtube.svg";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className="container">
            <div className="footer__logo">
                <img src={logo} alt="" className="img__logo-big" />
            </div>
            <div className="footer__content">
                <div className="footer__content-left">
                    <div className="address">
                        <p>
                            Galaxy Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Galaxy Play, thành viên của Công ty
                            Cổ Phần Giải Trí và Giáo Dục Galaxy (GEE.,JSC)
                        </p>
                        <p>
                            Địa chỉ: 59 Xa Lộ Hà Nội, Phường Thảo Điền, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh, Việt
                            Nam.
                        </p>
                        <p>Mã số doanh nghiệp: 0106539659.</p>
                        <p>Ngày cấp mã số doanh nghiệp: 15/5/2014.</p>
                        <p>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</p>
                        <img src={chungnhan} alt="" />
                    </div>
                    <div className="introduce">
                        <div className="introduce__title"><strong>GIỚI THIỆU</strong></div>
                        <div className="introduce__content">
                            <p>Quy chế sử dụng Dịch Vụ</p>
                            <p>Chính sách bảo mật</p>
                            <p>Khuyến mãi</p>
                        </div>
                    </div>
                </div>
                <div className="footer__content-right">
                    <div className="introduce">
                        <div className="introduce__title"><strong>HỖ TRỢ</strong></div>
                        <div className="introduce__content">
                            <p>1800 9090 (24/7)</p>
                            <p>vanminhtruong678 @gmail.com</p>
                            <p>truongdeveloper (Github)</p>
                        </div>
                    </div>
                    <div className="dowload__app">
                        <div className="introduce__title"><strong>TẢI ỨNG DỤNG</strong></div>
                        <div className="introduce__content">
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>
                        <div className="introduce__title"><strong>KẾT NỐI VỚI CHÚNG TÔI</strong></div>
                        <div className="introduce__content-svg">
                            <img src={facebookIcon} alt="" />
                            <img src={instaIcon} alt="" />
                            <img src={tiktokIcon} alt="" />
                            <img src={youtubeIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
