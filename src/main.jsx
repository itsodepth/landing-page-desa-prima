import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Partners from "./components/Partners.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Register icons
library.add(fab, faTiktok, faInstagram, faMapMarkerAlt, faEnvelope, faPhone);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Products />
                            <Partners />
                            <About />
                        </>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);
