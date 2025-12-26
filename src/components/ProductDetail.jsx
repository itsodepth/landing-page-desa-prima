import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);
    const images = product?.images && product.images.length > 0 ? product.images : [product.image];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide gambar
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Pastikan saat buka halaman detail selalu mulai dari atas
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    if (!product) {
        return <div className="container mx-auto px-6 md:px-12 py-12">Produk tidak ditemukan.</div>;
    }

    const waLink = product.whatsapp ? `https://wa.me/${product.whatsapp}` : null;

    return (
        <div className="container mx-auto px-6 md:px-12 py-12">
            <div className="mb-6">
                <Link to="/" className="text-sm text-[#1C4D8D] hover:underline">
                    ← Kembali ke beranda
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 relative">
                    <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((src, idx) => (
                            <div key={idx} className="w-full h-full shrink-0">
                                <img src={src} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                            {images.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-5" : "bg-white/60"}`} />
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h1 className="text-3xl md:text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-2xl font-semibold text-[#1C4D8D] mb-4">{product.price}</p>
                    {product.location && <p className="text-sm text-gray-500 mb-4">📍 {product.location}</p>}
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">{product.description}</p>

                    {waLink && (
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-[#1C4D8D] text-white text-sm font-semibold shadow-md hover:bg-[#4988C4] transition">
                            Hubungi via WhatsApp
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
