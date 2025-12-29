import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logoImage from "../assets/logos.png";

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
  const scrollToAbout = makeScrollToSection("about-section");
  const scrollToLocation = makeScrollToSection("location-section");

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
    <nav
      className={`sticky top-0 z-50 bg-[#1C4D8D] text-[#F5F5F5] py-2 px-6 md:px-12 transition-transform duration-300 ${
        hiddenOnScroll ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Kiri */}
        <div
          className="cursor-pointer transition-opacity flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <img
            src={logoImage}
            alt="Logo UMKM"
            className="h-10 md:h-12 object-contain"
          />
          <span className="font-bold text-lg md:text-xl text-[#F5F5F5]">
            Desa Prima
          </span>
        </div>

        {/* --- MENU TENGAH (DESKTOP) --- */}
        <ul className="hidden md:flex space-x-24 text-md font-medium">
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={scrollToProducts}
          >
            Produk
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={scrollToAbout}
          >
            Tentang Kami
          </li>
          {/* Lokasi Desktop */}
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={scrollToLocation}
          >
            Lokasi
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
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-0.5 bg-[#F5F5F5] transition-transform ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-[#F5F5F5] transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 bg-[#F5F5F5] transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
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
            <li
              className="hover:text-gray-200 cursor-pointer"
              onClick={scrollToProducts}
            >
              Produk
            </li>
            <li
              className="hover:text-gray-200 cursor-pointer"
              onClick={scrollToAbout}
            >
              Tentang Kami
            </li>

            {/* Lokasi Mobile */}
            <li
              className="hover:text-gray-200 cursor-pointer"
              onClick={scrollToLocation}
            >
              Lokasi
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
