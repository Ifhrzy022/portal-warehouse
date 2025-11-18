// data/modules.ts

export type Module = {
  id: number;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  topics: string[];
};

// INI YANG PENTING: export const MODULES = [...]
export const MODULES: Module[] = [
  {
    id: 1,
    slug: "pengenalan-warehouse",
    title: "Pengenalan Warehouse",
    description:
      "Memahami konsep dasar warehouse, fungsi, dan peran dalam supply chain perusahaan.",
    duration: "45 menit",
    level: "Pemula",
    topics: [
      "Definisi Warehouse",
      "Fungsi Warehouse",
      "Peran dalam Supply Chain",
      "Struktur Organisasi Warehouse",
    ],
  },
  {
    id: 2,
    slug: "layout-warehouse",
    title: "Layout Warehouse",
    description:
      "Mempelajari perancangan layout warehouse yang efisien dan aman.",
    duration: "60 menit",
    level: "Pemula",
    topics: [
      "Zona Penyimpanan",
      "Receiving & Shipping Area",
      "Picking Area",
      "Area K3 & Safety",
    ],
  },
  {
    id: 3,
    slug: "penerimaan-barang",
    title: "Sistem Penerimaan Barang",
    description:
      "Proses penerimaan barang dari supplier hingga siap disimpan di lokasi.",
    duration: "50 menit",
    level: "Menengah",
    topics: [
      "Pengecekan Dokumen",
      "Quality Check",
      "Labeling",
      "Put Away",
    ],
  },
  // boleh tambah modul lain di sini
];
