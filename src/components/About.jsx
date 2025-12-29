import gambar1 from "../assets/desa-prima/gedung-desa-prima.jpeg";
import videoProfile from "../assets/vid/vid-profile.mp4";

const About = () => {
  return (
    <section
      id="about-section"
      className="container mx-auto px-6 md:px-24 py-12"
    >
      <h2 className="text-2xl md:text-2xl font-bold text-center mb-6">
        Tentang Desa Prima Kenteng
      </h2>

      <div className="mx-auto mb-8 h-96 w-full rounded-lg overflow-hidden max-w-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoProfile} type="video/mp4" />
          Video tidak didukung oleh browser Anda.
        </video>
      </div>

      <p className="text-justify text-gray-800 max-w-3xl mx-auto leading-relaxed mb-8">
        Desa Prima Kenteng adalah sebuah desa di Kecamatan Ponjong, Gunungkidul,
        Yogyakarta, yang menjadi percontohan program pemberdayaan perempuan
        bernama "Desa PRIMA (Perempuan Indonesia Maju Mandiri)", fokusnya
        memberdayakan perempuan rentan melalui pengembangan usaha ekonomi kecil
        (kuliner, kerajinan) dan pendampingan untuk meningkatkan kesejahteraan
        keluarga, didukung pemerintah daerah.
      </p>

      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-center mb-4">Lokasi Kami</h3>
        <div className="w-full rounded-lg overflow-hidden shadow">
          <div className="w-full aspect-video">
            <iframe
              title="Peta Kenteng, Ponjong, Gunung Kidul"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.10441788569!2d110.7524376!3d-7.988152399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bcb00445a0b5d%3A0xeda0f9faa5718b38!2sDesa%20Prima%20Kenteng!5e0!3m2!1sid!2sid!4v1766987621682!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
