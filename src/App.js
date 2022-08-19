import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Hearder/Header";
import ComingSoon from "./page/ComingSoon";
import KhoPhim from "./page/khoPhim/khoPhim";
import NotFound from "./page/NotFound";
import PhimBo from "./page/phimBo/phimBo";
import PhimDienAnh from "./page/phimDienAnh/phimDienAnh";
import TrangChu from "./page/TrangChu/TrangChu";
import AOS from "aos";
import "aos/dist/aos.css";
import Movie from "./page/MoviePage/Movie";
import ListMovie from "./page/ListMovie/ListMovie";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-back",
        });
    }, []);
    
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Routes>
                    <Route path="" element={<TrangChu/>} />
                    <Route path={'/kho-phim'} element={<KhoPhim/>}/>
                    <Route path={'/phim-dien-anh'} element={<PhimDienAnh/>} />
                    <Route path={'/phim-bo'} element={<PhimBo/>} />
                    <Route path={'/movie/*'} element={<Movie/>} />
                    <Route path={'/list/*'} element={<ListMovie/>} />
                    <Route path={'/phim-thue'} element={<ComingSoon/>} />
                    <Route path={'/khuyen-mai'} element={<ComingSoon/>} />
                    <Route path={'/ho-tro'} element={<ComingSoon/>} />
                    <Route path={'/login'} element={<ComingSoon/>} />
                    <Route path={'/*'} element={<NotFound/>} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
