export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                greenPrimary: "#5D866C", // Warna hijau seperti di gambar
                whitePrimary: "#f4f4f4",
                brownAccent: "#C2A68C",
            },
            fontFamily: {
                sans: ["Poppins", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
