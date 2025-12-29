import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

const CATEGORY_OPTIONS = ["Aksesoris", "Minuman", "Makanan", "Kerajinan"];
const DUSUN_OPTIONS = [
  "Geblug",
  "Bendo",
  "Bentar",
  "Cerme",
  "Kenteng",
  "Perampelan I",
  "Perampelan II",
  "Klumpit",
  "Sumberan",
];

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDusun, setSelectedDusun] = useState([]);

  // const toggleCategory = (label) => {
  //     setSelectedCategories((prev) => (prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]));
  // };

  const toggleDusun = (dusun) => {
    setSelectedDusun((prev) =>
      prev.includes(dusun) ? prev.filter((d) => d !== dusun) : [...prev, dusun]
    );
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((item) => {
        const matchCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(item.category);
        const matchDusun =
          selectedDusun.length === 0 || selectedDusun.includes(item.location);
        return matchCategory && matchDusun;
      }),
    [selectedCategories, selectedDusun]
  );

  return (
    <div
      id="products-section"
      className="container mx-auto px-6 md:px-12 py-12"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Produk Kami</h2>

      {/* Tombol toggle filter untuk mobile */}
      <div className="mb-4 flex justify-between items-center md:hidden">
        <span className="text-sm text-gray-600">Filter produk</span>
        <button
          type="button"
          onClick={() => setShowFilters((prev) => !prev)}
          className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100"
        >
          {showFilters ? "Tutup Filter" : "Lihat Filter"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SIDEBAR KIRI (Filter) */}
        <div
          className={`w-full md:w-1/4 mb-4 md:mb-0 ${
            showFilters ? "block" : "hidden md:block"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 md:p-5 space-y-6">
            {/* <div>
                            <h3 className="font-semibold text-sm text-gray-800 mb-3 flex items-center justify-between">
                                <span>Kategori</span>
                                <span className="text-[11px] uppercase tracking-wide text-gray-400">Pilih jenis</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORY_OPTIONS.map((label) => (
                                    <label key={label} className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-700 bg-gray-50 hover:bg-green-50 hover:border-green-200 cursor-pointer transition">
                                        <input type="checkbox" className="sr-only peer" checked={selectedCategories.includes(label)} onChange={() => toggleCategory(label)} />
                                        <span className="h-2 w-2 rounded-full bg-gray-300 mr-2 peer-checked:bg-green-500" />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div> */}

            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-semibold text-sm text-gray-800 mb-3 flex items-center justify-between">
                <span>Dusun</span>
                <span className="text-[11px] uppercase tracking-wide text-gray-400">
                  Lokasi UMKM
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                {DUSUN_OPTIONS.map((dusun) => (
                  <label
                    key={dusun}
                    className="inline-flex items-center px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 hover:bg-[#EAF4FF] hover:border-[#1C4D8D] cursor-pointer transition"
                  >
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={selectedDusun.includes(dusun)}
                      onChange={() => toggleDusun(dusun)}
                    />
                    <span className="h-2 w-2 rounded-full bg-gray-300 mr-2 peer-checked:bg-[#1C4D8D]" />
                    <span className="truncate">{dusun}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GRID PRODUK KANAN */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">
                  Produk tidak ada
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Coba ubah filter untuk menemukan produk
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="group"
                >
                  <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer h-full">
                    {/* Gambar produk */}
                    <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Badge lokasi di pojok kiri atas */}
                      <span className="absolute left-2 top-2 z-20 inline-flex items-center px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-medium text-gray-700 shadow-sm">
                        <span className="mr-1 text-[11px]">📍</span>
                        {item.location}
                      </span>
                    </div>

                    {/* Info produk */}
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-semibold text-sm mb-1 text-gray-900 line-clamp-2 group-hover:text-[#1C4D8D]">
                        {item.name}
                      </h4>
                      <p className="text-sm font-semibold text-[#1C4D8D] mb-2">
                        {item.price}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">
                          Produk UMKM Desa Prima
                        </span>
                        <span className="text-[11px] font-medium text-[#1C4D8D] group-hover:underline">
                          Lihat detail
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Tombol Lihat Selengkapnya */}
          {/* <div className="flex justify-center mt-2">
                        <button type="button" className="px-6 py-2.5 rounded-full bg-green-700 text-white text-sm font-semibold shadow-md hover:bg-green-800 hover:shadow-lg transition cursor-pointer">
                            Lihat Selengkapnya
                        </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
