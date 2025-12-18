import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import About from "./About.jsx"; // HAPUS INI: Navbar tidak perlu import file halamannya, cukup di App.jsx

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
    const lastScrollY = useRef(0);
    const navigate = useNavigate();
    const location = useLocation();

    const makeScrollToSection = (id) => () => {
        const doScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (location.pathname === "/") {
            doScroll();
        } else {
            navigate("/");
            setTimeout(doScroll, 300);
        }

        setIsOpen(false);
    };

    const scrollToProducts = makeScrollToSection("products-section");
    const scrollToPartners = makeScrollToSection("partners-section");

    // Sembunyikan navbar saat scroll ke bawah
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current && currentY > 100) {
                setHiddenOnScroll(true);
            } else {
                setHiddenOnScroll(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 bg-[#5D866C] text-[#F5F5F5] py-4 px-6 md:px-12 transition-transform duration-300 ${hiddenOnScroll ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Kiri */}
                <div
                    className="font-bold text-xl bg-[#F5F5F5] text-[#5D866C] px-3 py-1 rounded cursor-pointer"
                    onClick={() => navigate("/")} // Opsional: Logo bisa diklik balik ke home
                >
                    Logo UMKM
                </div>

                {/* --- MENU TENGAH (DESKTOP) --- */}
                <ul className="hidden md:flex space-x-24 text-md font-medium">
                    <li className="hover:text-gray-200 cursor-pointer" onClick={() => navigate("/")}>
                        Home
                    </li>
                    <li className="hover:text-gray-200 cursor-pointer" onClick={scrollToProducts}>
                        Produk
                    </li>
                    <li className="hover:text-gray-200 cursor-pointer" onClick={scrollToPartners}>
                        Kemitraan
                    </li>
                    {/* MODIFIKASI 1: Link Desktop */}
                    <li className="hover:text-gray-200 cursor-pointer">
                        <Link to="/about">Tentang Kami</Link>
                    </li>
                </ul>

                {/* Icon + Hamburger - Kanan */}
                <div className="flex items-center space-x-4">
                    {/* Icon Sosmed - Desktop */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <span className="cursor-pointer hover:opacity-80">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </span>
                        <span className="cursor-pointer hover:opacity-80">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </span>
                    </div>

                    {/* Tombol Hamburger - Mobile */}
                    <button className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation">
                        <span className={`h-0.5 bg-[#F5F5F5] transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-0.5 bg-[#F5F5F5] transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`h-0.5 bg-[#F5F5F5] transition-transform ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </button>
                </div>
            </div>

            {/* --- MENU MOBILE DROPDOWN --- */}
            {isOpen && (
                <div className="md:hidden mt-3 px-2">
                    <ul className="flex flex-col space-y-2 text-sm font-medium">
                        <li
                            className="hover:text-gray-200 cursor-pointer"
                            onClick={() => {
                                navigate("/");
                                setIsOpen(false);
                            }}
                        >
                            Home
                        </li>
                        <li className="hover:text-gray-200 cursor-pointer" onClick={scrollToProducts}>
                            Produk
                        </li>
                        <li className="hover:text-gray-200 cursor-pointer" onClick={scrollToPartners}>
                            Kemitraan
                        </li>

                        {/* MODIFIKASI 2: Link Mobile */}
                        <li className="hover:text-gray-200 cursor-pointer">
                            {/* Tambahkan onClick setIsOpen(false) agar menu nutup setelah diklik */}
                            <Link to="/about" onClick={() => setIsOpen(false)}>
                                Tentang Kami
                            </Link>
                        </li>
                    </ul>
                    <div className="flex space-x-4 items-center mt-3">
                        <span className="cursor-pointer hover:opacity-80">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </span>
                        <span className="cursor-pointer hover:opacity-80">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </span>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
