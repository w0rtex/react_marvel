// Default
import { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from "./spinner/spinner";
import Nav from "./nav/nav";

// Pages
const Home = lazy(() => import("./pages/home"));
const Shop = lazy(() => import("./pages/shop"));
const ShopItem = lazy(() => import("./pages/shop-item"));

const App = () => {
    return (
        <Router>
            <Nav />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/:comicId" element={<ShopItem />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
