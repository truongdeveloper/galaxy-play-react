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

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="" element={<TrangChu/>} />
                <Route path={'/kho-phim'} element={<KhoPhim/>}/>
                <Route path={'/phim-dien-anh'} element={<PhimDienAnh/>} />
                <Route path={'/phim-bo'} element={<PhimBo/>} />
                <Route path={'/phim-thue'} element={<ComingSoon/>} />
                <Route path={'/khuyen-mai'} element={<ComingSoon/>} />
                <Route path={'/ho-tro'} element={<ComingSoon/>} />
                <Route path={'/*'} element={<NotFound/>} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
