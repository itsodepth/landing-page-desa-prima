// src/data.js

// PERBAIKAN: Tambahkan './' di depan 'assets' agar sistem membaca folder lokal
import boluKelapa from "./assets/produk/bolu-kue-jadul.webp";
import krecekSingkong from "./assets/produk/krecek-singkong.webp";
import opakSingkong from "./assets/produk/opak-singkong.webp";
import kripikBakso from "./assets/produk/kripso.webp";
import kueBawang from "./assets/produk/kue-bawang-anindya.webp";
import patolo from "./assets/produk/patolo.webp";
import keripikPisang from "./assets/produk/keripik-pisang-makmur.webp";
import peyekKacang from "./assets/produk/peyek-kacang-makmur.webp";
import keripikSingkong from "./assets/produk/keripik-singkong-windhu-utari.webp";
import peyekKacangUtijana from "./assets/produk/peyek-kacang-makmur.webp";
import manggleng from "./assets/produk/manggleng.webp";

export const products = [
    {
        id: 1,
        name: "Bolu Kelapa Jadul",
        price: "Rp15.000",
        category: "Makanan",
        description: "Bolu kelapa dengan cita rasa klasik yang selalu bikin rindu. Memiliki tekstur yang padat namun lembut, dengan serutan kelapa parut asli yang memberikan rasa gurih manis di setiap gigitan. Cocok untuk teman minum teh hangat. (Produksi: Ibu Sukini)",
        images: [boluKelapa],
        location: "Bentar",
        whatsapp: "6285786474699",
    },
    {
        id: 2,
        name: "Krecek Singkong",
        price: "Rp12.000",
        category: "Makanan",
        description: "Krecek singkong yang diolah secara tradisional, dijemur hingga kering sempurna sebelum digoreng. Menghasilkan tekstur yang renyah dan mengembang dengan rasa gurih alami singkong. (Produksi: Ibu Tini)",
        images: [krecekSingkong],
        location: "Bendo",
        whatsapp: "6285848020772",
    },
    {
        id: 3,
        name: "Opak Singkong Romeo",
        price: "Rp10.000",
        category: "Makanan",
        description: "Opak singkong 'Romeo' yang tipis dan super renyah. Dibuat dari singkong pilihan yang ditumbuk halus dan dibumbui dengan pas. Camilan ringan yang tidak bikin kenyang, tapi bikin ketagihan. (Produksi: Ibu Sukini)",
        images: [opakSingkong],
        location: "Bentar",
        whatsapp: "6285786474699",
    },
    {
        id: 4,
        name: "Kripik Bakso Arsy",
        price: "Rp18.000",
        category: "Makanan",
        description: "Inovasi camilan dari bakso daging yang diiris tipis dan digoreng garing hingga menjadi keripik. Sensasi rasa daging sapi yang kuat berpadu dengan tekstur kriuk yang unik. (Produksi: Ibu Lastri)",
        images: [kripikBakso],
        location: "Bendo",
        whatsapp: "6285868450981",
    },
    {
        id: 5,
        name: "Kue Bawang Anindya",
        price: "Rp20.000",
        category: "Makanan",
        description: "Kue bawang atau stik bawang dengan aroma seledri dan bawang yang harum. Teksturnya empuk dan renyah, tidak keras saat digigit. Bumbunya meresap sempurna, cocok untuk isi toples di rumah. (Produksi: Ibu Yuni)",
        images: [kueBawang],
        location: "Bendo",
        whatsapp: "6282243522208",
    },
    {
        id: 6,
        name: "Patolo",
        price: "Rp10.000",
        category: "Makanan",
        description: "Jajanan tradisional yang terbuat dari tepung beras dikukus, sering disajikan dengan parutan kelapa atau santan. Memiliki tekstur kenyal dan rasa yang lembut di lidah, membawa nuansa nostalgia pedesaan. (Produksi: Ibu Sukini)",
        images: [patolo],
        location: "Bentar",
        whatsapp: "6285786474699",
    },
    {
        id: 7,
        name: "Keripik Pisang Makmur",
        price: "Rp15.000",
        category: "Makanan",
        description: "Keripik pisang dengan potongan yang pas, tidak terlalu tebal dan tidak terlalu tipis. Digoreng dengan kematangan yang tepat sehingga warnanya kuning cerah dan rasanya manis alami pisang. (Produksi: Ibu Muryanti)",
        images: [keripikPisang],
        location: "Perampelan II",
        whatsapp: "6285700232558",
    },
    {
        id: 8,
        name: "Peyek Kacang Makmur",
        price: "Rp15.000",
        category: "Makanan",
        // Note: Deskripsi di kodemu sebelumnya tertukar dengan Keripik Talas, sudah saya perbaiki menyesuaikan Peyek Kacang.
        description: "Rempeyek renyah dengan toping kacang tanah pilihan. Gurih, renyah, dan aroma daun jeruknya terasa pas. (Produksi: Ibu Muryanti/Tini)", 
        images: [peyekKacang],
        location: "Perampelan II",
        whatsapp: "6285700232558",
    },
    {
        id: 9,
        name: "Keripik Singkong",
        price: "Rp12.000",
        category: "Makanan",
        description: "Keripik singkong original yang renyah tanpa pengawet. Menggunakan bumbu bawang ketumbar yang sederhana namun nendang. Teman setia saat santai atau nonton TV. (Produksi: Ibu Tini)",
        images: [keripikSingkong],
        location: "Bendo",
        whatsapp: "6285848020772",
    },
    {
        id: 10,
        name: "Peyek Kacang Utijana",
        price: "Rp15.000",
        category: "Makanan",
        description: "Rempeyek dengan taburan kacang tanah yang melimpah dan irisan daun jeruk yang wangi. Adonan tepungnya tipis dan super renyah, tidak berminyak berlebihan. (Produksi: Ibu Tini)",
        images: [peyekKacangUtijana],
        location: "Bendo",
        whatsapp: "6285848020772",
    },
    {
        id: 11,
        name: "Manggleng Pedas Manis",
        price: "Rp15.000",
        category: "Makanan",
        description: "Manggleng adalah olahan singkong kukus yang dikeringkan lalu digoreng, memiliki tekstur lebih 'berisi' daripada keripik biasa. Dibalut dengan bumbu pedas manis yang lengket dan menggugah selera. (Produksi: Ibu Sukini)",
        images: [manggleng],
        location: "Bentar",
        whatsapp: "6285786474699",
    },
];