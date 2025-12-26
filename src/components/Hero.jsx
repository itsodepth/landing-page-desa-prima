import React, { useEffect, useState } from "react";
import banner1 from "../assets/produk/kripso.webp";
import banner2 from "../assets/produk/utijana.webp";
import banner3 from "../assets/produk/keripik-pisang-makmur.webp";
import peyekKacang from "../assets/produk/peyek-kacang-makmur.webp";
import boluKueJadul from "../assets/produk/bolu-kue-jadul.webp";
import kueBawang from "../assets/produk/kue-bawang-anindya.webp";

const banners = [banner1, banner2, banner3];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 10000); // ganti slide tiap 4 detik

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
    };

    return (
        <div className="container mx-auto px-6 md:px-12 py-8">
            {/* Bagian Slider Besar */}
            {/* Atur lebar banner di sini: misalnya tambah max-w-5xl mx-auto kalau mau lebih sempit */}
            <div className="w-full h-64 md:h-120 bg-gray-300 rounded-lg overflow-hidden mb-8 relative">
                <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {banners.map((src, idx) => (
                        <div key={idx} className="w-full h-full shrink-0">
                            <img src={src} alt={`Banner ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Tombol Panah */}
                <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center">
                    ‹
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center">
                    ›
                </button>

                {/* Indicator Bullets */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {banners.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-5" : "bg-white/60"}`} />
                    ))}
                </div>
            </div>

            {/* Grid Foto Kecil (Bento Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Item 1 - Besar */}
                <div className="md:col-span-2 h-64 md:h-80 bg-gray-200 rounded-2xl relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <img src={peyekKacang} alt="Peyek Kacang Makmur" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                        <h3 className="font-bold text-lg md:text-xl mb-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Peyek Kacang Makmur</h3>
                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Peyek kacang rasa gurih asli Geblug</p>
                    </div>
                </div>
                {/* Item 2 */}
                <div className="h-64 md:h-80 bg-gray-200 rounded-2xl relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <img src={boluKueJadul} alt="Bolu Kue Jadul" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                        <h3 className="font-bold text-base md:text-lg mb-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Bolu Kue Jadul</h3>
                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Bolu kue berbahan kelapa</p>
                    </div>
                </div>
                {/* Item 3 */}
                <div className="h-64 md:h-80 bg-gray-200 rounded-2xl relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <img src={kueBawang} alt="Kue Bawang Anindya" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                        <h3 className="font-bold text-base md:text-lg mb-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Kue Bawang Anindya</h3>
                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Kue bawang asli Desa Kenteng</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
