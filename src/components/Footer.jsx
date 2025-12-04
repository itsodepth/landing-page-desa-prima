import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const menuItems = ["Home", "Produk", "Kemitraan", "Tentang Kami"];
    const socialLinks = [
        { icon: faInstagram, name: "Instagram", url: "#" },
        { icon: faTiktok, name: "TikTok", url: "#" },
    ];

    return (
        <footer className="bg-[#5D866C] text-white pt-12 pb-6 mt-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
                    {/* Kolom 1 - Logo & Deskripsi */}
                    <div className="lg:col-span-1">
                        <div className="font-bold text-xl bg-white text-[#5D866C] px-3 py-1 rounded w-max mb-4">Logo UMKM</div>
                        <p className="text-sm text-gray-200 leading-relaxed mb-4">Platform yang menghubungkan produk UMKM Desa dengan pasar digital untuk mendukung ekonomi lokal.</p>
                    </div>

                    {/* Kolom 2 - Kontak & Alamat */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Kontak & Alamat</h4>
                        <ul className="text-sm text-gray-200 space-y-3">
                            <li className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-green-300 shrink-0" />
                                <span>
                                    Dusun Kenteng, Desa Ponjong,
                                    <br />
                                    Kecamatan Ponjong, Gunungkidul,
                                    <br />
                                    Yogyakarta 55892
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-green-300 shrink-0" />
                                <span>info@desaprima.umkm.id</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faPhone} className="text-green-300 shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3 - Menu */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Menu</h4>
                        <ul className="text-sm text-gray-200 space-y-2.5">
                            {menuItems.map((item, idx) => (
                                <li key={idx} className="hover:text-white cursor-pointer transition-colors duration-200 ">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 4 - Social Media */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Ikuti Kami</h4>
                        <p className="text-sm text-gray-200 mb-4">Tetap terhubung dengan kami di media sosial</p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label={social.name}>
                                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 pt-6 mt-8">
                    <p className="text-center text-xs md:text-sm text-gray-300">
                        Copyright © {new Date().getFullYear()} <span className="font-semibold text-white">Desa Prima UMKM</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
