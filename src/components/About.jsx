import gambar1 from "../assets/img-1.jpg";

const About = () => {
    return (
        <section id="about-section" className="container mx-auto px-6 md:px-12 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Tentang Kami</h2>

            <img className="mx-auto mb-8 h-144 w-288 object-cover rounded-lg" src={gambar1} alt="gambar 1" />

            <p className="text-center text-gray-800 max-w-3xl mx-auto leading-relaxed mb-8">Desa Prima hadir untuk membantu warga desa mendapatkan informasi dan layanan sehari-hari dengan cara yang sederhana dan mudah dimengerti. Kami membuat informasi penting jadi jelas, supaya semua usia — termasuk mbah-mbah — bisa terbantu.</p>
        </section>
    );
};

export default About;
