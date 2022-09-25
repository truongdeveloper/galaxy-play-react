import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Hearder/Header";
import ComingSoon from "./page/ComingSoon";
import KhoPhim from "./page/khoPhim/khoPhim";
import ListMovie from "./page/ListMovie/ListMovie";
import Movie from "./page/MoviePage/Movie";
import NotFound from "./page/NotFound";
import SearchPage from "./page/SearchPage/SearchPage";
import TrangChu from "./page/TrangChu/TrangChu";

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
                    <Route path={'/phim-dien-anh*'} element={<ListMovie/>} />
                    <Route path={'/phim-bo'} element={<ComingSoon/>} />
                    <Route path={'/movie/*'} element={<Movie/>} />
                    <Route path="/search/*" element={<SearchPage/>} />
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
