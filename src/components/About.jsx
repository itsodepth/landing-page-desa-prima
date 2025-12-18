import gambar1 from "../assets/img-1.jpg";

const About = () => {
    return (
        <section id="about-section" className="container mx-auto px-6 md:px-24 py-12">
            <h2 className="text-2xl md:text-2xl font-bold text-center mb-6">Tentang Kami</h2>

            <img className="mx-auto mb-8 h-96 w-192 object-cover rounded-lg" src={gambar1} alt="gambar 1" />

            <p className="text-justify text-gray-800 max-w-3xl mx-auto leading-relaxed mb-8">Desa Prima hadir untuk membantu warga desa mendapatkan informasi dan layanan sehari-hari dengan cara yang sederhana dan mudah dimengerti. Kami membuat informasi penting jadi jelas, supaya semua usia — termasuk mbah-mbah — bisa terbantu.</p>

            <div className="w-full max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-center mb-4">Lokasi Kami</h3>
                <div className="w-full rounded-lg overflow-hidden shadow">
                    <div className="w-full aspect-video">
                        <iframe title="Peta Kenteng, Ponjong, Gunung Kidul" src="https://www.google.com/maps?q=Kenteng%2C%20Ponjong%2C%20Gunung%20Kidul&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
