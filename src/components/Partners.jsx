import React from "react";

const partners = [
    { name: "Lazismu", logo: "https://placehold.co/120x60/png?text=Lazismu" },
    { name: "NU", logo: "https://placehold.co/120x60/png?text=NU" },
    { name: "Muhammadiyah", logo: "https://placehold.co/120x60/png?text=Muhammadiyah" },
    { name: "Universitas", logo: "https://placehold.co/120x60/png?text=Univ" },
    { name: "Program", logo: "https://placehold.co/120x60/png?text=Program" },
    { name: "JavaScript", logo: "https://placehold.co/120x60/png?text=JavaScript" },
    { name: "HTML", logo: "https://placehold.co/120x60/png?text=HTML" },
    { name: "Redux", logo: "https://placehold.co/120x60/png?text=Redux" },
];

const Partners = () => {
    return (
        <div id="partners-section" className="container mx-auto px-6 md:px-12 py-12 md:py-16 ">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kemitraan Kami</h2>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Bekerja sama dengan berbagai organisasi dan institusi untuk mendukung pengembangan UMKM Desa Prima</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {partners.map((partner, idx) => (
                    <div key={idx} className="group bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 flex items-center justify-center cursor-pointer">
                        <div className="w-full h-16 md:h-20 flex items-center justify-center">
                            <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
