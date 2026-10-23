export type TipeDaerah = 'provinsi' | 'kabupaten' | 'kota' | 'area';

export interface Daerah {
  /** slug URL, dipakai pada /jasa-website-<slug>/ */
  slug: string;
  /** nama tampil, mis. "Badung" */
  nama: string;
  /** jenis wilayah */
  tipe: TipeDaerah;
  /** wilayah induk / zona, mis. "Bali Selatan" */
  induk: string;
  /** deskripsi unik 1-2 kalimat untuk konten & meta description */
  deskripsi: string;
  /** industri / jenis bisnis unggulan setempat */
  potensi: string[];
  /** landmark / ikon daerah */
  landmark: string[];
  /** slug daerah sekitar untuk internal linking */
  areaSekitar: string[];
}

export const daerahList: Daerah[] = [
  // ===================== PROVINSI (pillar) =====================
  {
    slug: 'bali',
    nama: 'Bali',
    tipe: 'provinsi',
    induk: 'Indonesia',
    deskripsi:
      'Bali adalah destinasi wisata kelas dunia sekaligus rumah bagi ribuan bisnis: hotel, villa, restoran, jasa profesional, hingga UMKM kreatif. Persaingan digital di Pulau Dewata sangat ketat, sehingga website profesional menjadi pembeda utama.',
    potensi: ['Hotel & Villa', 'Restoran & Cafe', 'Jasa Profesional', 'Retail & UMKM', 'Properti', 'Klinik & Wellness'],
    landmark: ['Pantai Kuta', 'Pura Uluwatu', 'Tegallalang'],
    areaSekitar: ['badung', 'denpasar', 'gianyar', 'tabanan', 'buleleng', 'karangasem'],
  },

  // ===================== KABUPATEN / KOTA =====================
  {
    slug: 'badung',
    nama: 'Badung',
    tipe: 'kabupaten',
    induk: 'Bali Selatan',
    deskripsi:
      'Kabupaten Badung adalah jantung pariwisata dan bisnis Bali Selatan, menaungi kawasan Kuta, Seminyak, Canggu, Jimbaran, hingga Nusa Dua. Persaingan usaha di sini sangat ketat sehingga kehadiran digital yang profesional jadi penentu.',
    potensi: ['Hotel & Villa', 'Restoran & Cafe', 'Beach Club', 'Retail & Butik', 'Properti & Sewa Villa'],
    landmark: ['Pantai Kuta', 'Garuda Wisnu Kencana', 'Nusa Dua'],
    areaSekitar: ['kuta', 'seminyak', 'canggu', 'jimbaran'],
  },
  {
    slug: 'denpasar',
    nama: 'Denpasar',
    tipe: 'kota',
    induk: 'Bali Selatan',
    deskripsi:
      'Denpasar adalah ibu kota Provinsi Bali sekaligus pusat pemerintahan, pendidikan, dan ekonomi. Bisnis jasa, kuliner, hingga klinik di kota ini bersaing ketat di pencarian Google lokal.',
    potensi: ['UMKM & Retail', 'Kuliner', 'Jasa Profesional', 'Klinik & Kesehatan', 'Pendidikan & Kursus'],
    landmark: ['Taman Puputan', 'Pasar Badung', 'Museum Bali'],
    areaSekitar: ['renon', 'sanur', 'kerobokan'],
  },
  {
    slug: 'gianyar',
    nama: 'Gianyar',
    tipe: 'kabupaten',
    induk: 'Bali Timur',
    deskripsi:
      'Kabupaten Gianyar dikenal sebagai pusat seni dan budaya Bali dengan Ubud sebagai magnet wisatawan mancanegara. Ekonomi kreatif, wellness, dan homestay tumbuh pesat di wilayah ini.',
    potensi: ['Homestay & Villa', 'Yoga & Wellness', 'Galeri Seni & Kerajinan', 'Kuliner Sehat', 'Tour & Travel'],
    landmark: ['Ubud', 'Pasar Seni Sukawati', 'Air Terjun Tegenungan'],
    areaSekitar: ['ubud', 'sanur', 'denpasar'],
  },
  {
    slug: 'tabanan',
    nama: 'Tabanan',
    tipe: 'kabupaten',
    induk: 'Bali Tengah',
    deskripsi:
      'Tabanan adalah lumbung padi Bali dengan panorama sawah dan wisata alam yang memikat, mulai dari Tanah Lot hingga Jatiluwih. Agrowisata dan venue pernikahan menjadi andalan daerah ini.',
    potensi: ['Agrowisata', 'Villa & Homestay', 'Restoran Sawah', 'Produk Pertanian', 'Wedding Venue'],
    landmark: ['Tanah Lot', 'Jatiluwih', 'Bedugul'],
    areaSekitar: ['tanah-lot', 'bedugul', 'denpasar'],
  },
  {
    slug: 'klungkung',
    nama: 'Klungkung',
    tipe: 'kabupaten',
    induk: 'Bali Timur',
    deskripsi:
      'Klungkung menyimpan warisan sejarah Kerajaan Bali dan kini dikenal lewat pesona Nusa Penida yang mendunia. Wisata bahari serta akomodasi lokal berkembang cepat di sini.',
    potensi: ['Wisata Bahari', 'Homestay', 'Tour Nusa Penida', 'Kerajinan', 'Kuliner Lokal'],
    landmark: ['Kertha Gosa', 'Nusa Penida', 'Pantai Diamond'],
    areaSekitar: ['nusa-penida', 'gianyar', 'karangasem'],
  },
  {
    slug: 'bangli',
    nama: 'Bangli',
    tipe: 'kabupaten',
    induk: 'Bali Tengah',
    deskripsi:
      'Bangli menawarkan wisata pegunungan dengan Kintamani dan Danau Batur sebagai ikon. Agrowisata kopi dan restoran panorama menjadi daya tarik utama daerah berhawa sejuk ini.',
    potensi: ['Agrowisata Kopi', 'Restoran View Gunung', 'Homestay', 'Trekking & Outdoor', 'Kerajinan'],
    landmark: ['Kintamani', 'Danau Batur', 'Pura Kehen'],
    areaSekitar: ['kintamani', 'gianyar', 'karangasem'],
  },
  {
    slug: 'karangasem',
    nama: 'Karangasem',
    tipe: 'kabupaten',
    induk: 'Bali Timur',
    deskripsi:
      'Karangasem di ujung timur Bali menyajikan diving, snorkeling, dan wisata budaya yang masih alami. Amed dan Besakih menjadikannya destinasi favorit wisatawan petualang.',
    potensi: ['Diving & Snorkeling', 'Homestay', 'Agrowisata', 'Kuliner', 'Tour & Travel'],
    landmark: ['Besakih', 'Amed', 'Tirta Gangga'],
    areaSekitar: ['amed', 'klungkung', 'bangli'],
  },
  {
    slug: 'buleleng',
    nama: 'Buleleng',
    tipe: 'kabupaten',
    induk: 'Bali Utara',
    deskripsi:
      'Buleleng adalah kabupaten terluas di Bali dengan Singaraja sebagai pusat aktivitas dan Lovina sebagai destinasi bahari. Sektor perikanan, agrowisata, dan kuliner tumbuh stabil.',
    potensi: ['Wisata Bahari', 'Agrowisata', 'Kuliner', 'Homestay', 'Perikanan'],
    landmark: ['Lovina', 'Singaraja', 'Danau Buyan'],
    areaSekitar: ['singaraja', 'lovina', 'bedugul'],
  },
  {
    slug: 'jembrana',
    nama: 'Jembrana',
    tipe: 'kabupaten',
    induk: 'Bali Barat',
    deskripsi:
      'Jembrana di barat Bali kaya akan pertanian, perkebunan, dan wisata alam yang tenang. Pelaku UMKM dan agribisnis di sini mulai melirik pemasaran digital untuk memperluas pasar.',
    potensi: ['Pertanian & Perkebunan', 'Wisata Alam', 'UMKM', 'Kuliner', 'Peternakan'],
    landmark: ['Gilimanuk', 'Pantai Medewi', 'Taman Nasional Bali Barat'],
    areaSekitar: ['tabanan', 'denpasar', 'badung'],
  },

  // ===================== AREA POPULER =====================
  {
    slug: 'canggu',
    nama: 'Canggu',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Canggu adalah kawasan digital nomad dan lifestyle paling dinamis di Bali. Bisnis cafe, villa, dan jasa kreatif di sini wajib tampil online untuk menjangkau wisatawan dan ekspatriat.',
    potensi: ['Cafe & Restoran', 'Villa & Coworking', 'Surf School', 'Retail & Fashion', 'Jasa Kreatif'],
    landmark: ['Pantai Batu Bolong', 'Pantai Echo Beach', 'Jalan Pantai Batu Mejan'],
    areaSekitar: ['seminyak', 'kerobokan', 'kuta'],
  },
  {
    slug: 'seminyak',
    nama: 'Seminyak',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Seminyak adalah pusat lifestyle premium Bali dengan butik desainer, beach club, dan fine dining. Brand di sini bersaing lewat citra online yang mewah dan meyakinkan.',
    potensi: ['Butik & Fashion', 'Fine Dining', 'Spa & Wellness', 'Villa', 'Beach Club'],
    landmark: ['Pantai Seminyak', 'Jalan Kayu Aya', 'Petitenget'],
    areaSekitar: ['kuta', 'legian', 'kerobokan'],
  },
  {
    slug: 'kuta',
    nama: 'Kuta',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Kuta adalah gerbang wisata Bali yang paling dikenal dengan pantai, hotel, dan pusat perbelanjaan. Tingginya volume wisatawan membuat bisnis di sini sangat bergantung pada visibilitas Google.',
    potensi: ['Hotel & Guesthouse', 'Restoran', 'Toko Souvenir', 'Tour & Travel', 'Transport'],
    landmark: ['Pantai Kuta', 'Legian Street', 'Discovery Shopping Mall'],
    areaSekitar: ['legian', 'seminyak', 'tuban'],
  },
  {
    slug: 'legian',
    nama: 'Legian',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Legian berada di antara Kuta dan Seminyak dengan suasana wisata yang santai. Hotel, bar, dan restoran di sepanjang Jalan Legian bersaing merebut perhatian wisatawan.',
    potensi: ['Hotel & Guesthouse', 'Restoran', 'Bar & Nightlife', 'Retail', 'Spa'],
    landmark: ['Jalan Legian', 'Pantai Legian', 'Poppies Lane'],
    areaSekitar: ['kuta', 'seminyak', 'kerobokan'],
  },
  {
    slug: 'jimbaran',
    nama: 'Jimbaran',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Jimbaran terkenal dengan restoran seafood di tepi pantai dan kawasan resort kelas atas. Bisnis kuliner dan pernikahan di sini mengandalkan reputasi online yang kuat.',
    potensi: ['Restoran Seafood', 'Hotel & Resort', 'Wedding Venue', 'Properti', 'Spa'],
    landmark: ['Pantai Jimbaran', 'Kedonganan', 'Garuda Wisnu Kencana'],
    areaSekitar: ['nusa-dua', 'kuta', 'uluwatu'],
  },
  {
    slug: 'nusa-dua',
    nama: 'Nusa Dua',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Nusa Dua adalah kawasan resort mewah dan pusat MICE (pertemuan & konferensi) Bali. Bisnis hospitality di sini menuntut website berkelas yang mencerminkan kualitas layanan.',
    potensi: ['Hotel Bintang', 'Golf & Leisure', 'MICE & Event', 'Spa', 'Properti'],
    landmark: ['Pantai Nusa Dua', 'Bali Nusa Dua Convention Center', 'Water Blow'],
    areaSekitar: ['jimbaran', 'uluwatu', 'kuta'],
  },
  {
    slug: 'uluwatu',
    nama: 'Uluwatu',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Uluwatu di ujung selatan Bali dikenal dengan tebing, ombak kelas dunia, dan villa mewah. Surf camp serta wedding venue di sini sangat bergantung pada pencarian wisatawan.',
    potensi: ['Villa Cliff', 'Surf & Surf Camp', 'Beach Club', 'Wedding Venue', 'Restoran'],
    landmark: ['Pura Luhur Uluwatu', 'Pantai Padang Padang', 'Bingin'],
    areaSekitar: ['jimbaran', 'nusa-dua', 'kuta'],
  },
  {
    slug: 'kerobokan',
    nama: 'Kerobokan',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Kerobokan menghubungkan Seminyak, Canggu, dan Denpasar dengan banyak villa serta cafe tersembunyi. Bisnis lokal di sini butuh strategi digital agar tidak kalah dari kawasan tetangga.',
    potensi: ['Villa & Guesthouse', 'Cafe', 'Retail', 'Jasa Lokal', 'Studio Kreatif'],
    landmark: ['Jalan Raya Kerobokan', 'Umalas', 'Banjar Semer'],
    areaSekitar: ['seminyak', 'canggu', 'denpasar'],
  },
  {
    slug: 'ubud',
    nama: 'Ubud',
    tipe: 'area',
    induk: 'Kabupaten Gianyar',
    deskripsi:
      'Ubud adalah pusat budaya, yoga, dan wellness Bali yang mendunia. Villa, galeri, dan restoran sehat di sini bersaing menjangkau wisatawan global yang mencari pengalaman autentik.',
    potensi: ['Villa & Homestay', 'Yoga & Wellness', 'Galeri Seni', 'Restoran Sehat', 'Tour & Travel'],
    landmark: ['Puri Saren', 'Monkey Forest', 'Tegalalang'],
    areaSekitar: ['gianyar', 'sanur', 'denpasar'],
  },
  {
    slug: 'sanur',
    nama: 'Sanur',
    tipe: 'area',
    induk: 'Kota Denpasar',
    deskripsi:
      'Sanur dikenal sebagai kawasan pantai keluarga yang tenang dengan sunrise yang indah. Hotel, restoran, dan klinik di sini menyasar wisatawan keluarga dan pensiunan.',
    potensi: ['Hotel Keluarga', 'Restoran', 'Watersport', 'Klinik & Wellness', 'Retail'],
    landmark: ['Pantai Sanur', 'Jalan Danau Tamblingan', 'Mertasari'],
    areaSekitar: ['denpasar', 'renon', 'ubud'],
  },
  {
    slug: 'renon',
    nama: 'Renon',
    tipe: 'area',
    induk: 'Kota Denpasar',
    deskripsi:
      'Renon adalah kawasan bisnis dan perkantoran di Denpasar dengan banyak instansi serta kuliner. Bisnis jasa profesional di sini membutuhkan kredibilitas online yang solid.',
    potensi: ['Kantor & Jasa Profesional', 'Kuliner', 'Klinik', 'Retail', 'Event Organizer'],
    landmark: ['Lapangan Puputan Renon', 'Bajra Sandhi', 'Jalan Raya Puputan'],
    areaSekitar: ['denpasar', 'sanur', 'kerobokan'],
  },
  {
    slug: 'singaraja',
    nama: 'Singaraja',
    tipe: 'area',
    induk: 'Kabupaten Buleleng',
    deskripsi:
      'Singaraja adalah kota terbesar di Bali Utara dan pusat pendidikan serta perdagangan Buleleng. UMKM dan penyedia jasa di sini mulai memanfaatkan website untuk menjangkau lebih luas.',
    potensi: ['UMKM & Retail', 'Kuliner', 'Jasa', 'Pendidikan', 'Perdagangan'],
    landmark: ['Pelabuhan Buleleng', 'Gedong Kirtya', 'Pantai Penimbangan'],
    areaSekitar: ['lovina', 'buleleng', 'bedugul'],
  },
  {
    slug: 'lovina',
    nama: 'Lovina',
    tipe: 'area',
    induk: 'Kabupaten Buleleng',
    deskripsi:
      'Lovina di Bali Utara terkenal dengan wisata lumba-lumba dan pantai berpasir hitam. Homestay dan operator wisata di sini mengandalkan pemesanan online dari wisatawan.',
    potensi: ['Wisata Lumba-lumba', 'Homestay', 'Restoran', 'Diving', 'Tour & Travel'],
    landmark: ['Pantai Lovina', 'Kalibukbuk', 'Air Panas Banjar'],
    areaSekitar: ['singaraja', 'buleleng', 'bedugul'],
  },
  {
    slug: 'amed',
    nama: 'Amed',
    tipe: 'area',
    induk: 'Kabupaten Karangasem',
    deskripsi:
      'Amed di timur Bali adalah surga diving dan snorkeling dengan pemandangan Gunung Agung. Dive center dan homestay di sini sangat bergantung pada ulasan serta visibilitas online.',
    potensi: ['Diving & Snorkeling', 'Homestay', 'Restoran', 'Tour', 'Perahu & Transport'],
    landmark: ['Titik Diving USAT Liberty', 'Pantai Jemeluk', 'Bukit Amed'],
    areaSekitar: ['karangasem', 'klungkung', 'bangli'],
  },
  {
    slug: 'nusa-penida',
    nama: 'Nusa Penida',
    tipe: 'area',
    induk: 'Kabupaten Klungkung',
    deskripsi:
      'Nusa Penida adalah pulau dengan tebing ikonik seperti Kelingking Beach yang viral di media sosial. Operator tour dan akomodasi di sini bersaing keras di pencarian wisatawan.',
    potensi: ['Tour & Travel', 'Homestay', 'Diving', 'Transport', 'Kuliner'],
    landmark: ['Kelingking Beach', 'Diamond Beach', 'Angel Billabong'],
    areaSekitar: ['klungkung', 'sanur', 'gianyar'],
  },
  {
    slug: 'kintamani',
    nama: 'Kintamani',
    tipe: 'area',
    induk: 'Kabupaten Bangli',
    deskripsi:
      'Kintamani menawarkan panorama Gunung dan Danau Batur yang menakjubkan. Agrowisata kopi, restoran view, dan aktivitas outdoor menjadi tulang punggung ekonomi daerah ini.',
    potensi: ['Agrowisata Kopi', 'Restoran View', 'Homestay', 'Trekking', 'Jeep Tour'],
    landmark: ['Gunung Batur', 'Danau Batur', 'Desa Penglipuran'],
    areaSekitar: ['bangli', 'gianyar', 'ubud'],
  },
  {
    slug: 'tanah-lot',
    nama: 'Tanah Lot',
    tipe: 'area',
    induk: 'Kabupaten Tabanan',
    deskripsi:
      'Tanah Lot adalah ikon wisata Tabanan dengan pura di atas batu karang yang legendaris. Villa, restoran, dan toko oleh-oleh di sekitarnya ramai dikunjungi wisatawan setiap hari.',
    potensi: ['Villa & Homestay', 'Restoran', 'Toko Oleh-oleh', 'Tour', 'Wedding Venue'],
    landmark: ['Pura Tanah Lot', 'Pantai Beraban', 'Kediri'],
    areaSekitar: ['tabanan', 'canggu', 'denpasar'],
  },
  {
    slug: 'bedugul',
    nama: 'Bedugul',
    tipe: 'area',
    induk: 'Kabupaten Tabanan',
    deskripsi:
      'Bedugul berada di dataran tinggi Bali dengan udara sejuk, kebun raya, dan danau yang indah. Agrowisata serta hotel di kawasan ini cocok menyasar wisatawan keluarga.',
    potensi: ['Agrowisata', 'Hotel & Homestay', 'Restoran', 'Wisata Alam', 'Pasar Buah'],
    landmark: ['Kebun Raya Bedugul', 'Danau Beratan', 'Pura Ulun Danu'],
    areaSekitar: ['tabanan', 'buleleng', 'kintamani'],
  },
  // alias area lain di Badung yang sering dicari
  {
    slug: 'tuban',
    nama: 'Tuban',
    tipe: 'area',
    induk: 'Kabupaten Badung',
    deskripsi:
      'Tuban adalah kawasan di selatan Kuta dekat bandara, ramai dengan hotel transit dan kuliner. Bisnis di sini diuntungkan oleh tingginya mobilitas wisatawan.',
    potensi: ['Hotel Transit', 'Restoran', 'Toko Souvenir', 'Transport', 'Spa'],
    landmark: ['Bandara Ngurah Rai', 'Pantai Tuban', 'Jalan Raya Tuban'],
    areaSekitar: ['kuta', 'jimbaran', 'legian'],
  },
];

export const getDaerahBySlug = (slug: string): Daerah | undefined =>
  daerahList.find((d) => d.slug === slug);

export const getNamaBySlug = (slug: string): string =>
  getDaerahBySlug(slug)?.nama ?? slug;

/** Daerah yang sudah dibangun ulang ke slug keyword penuh /jasa-pembuatan-website-di-<slug>/ */
export const REBUILT_AREA_SLUGS = new Set(['badung', 'karangasem', 'jembrana', 'buleleng']);

/** URL halaman area versi Indonesia (slug baru untuk daerah yang dibangun ulang). */
export const areaUrlId = (slug: string): string =>
  REBUILT_AREA_SLUGS.has(slug)
    ? `/jasa-pembuatan-website-di-${slug}/`
    : `/jasa-website-${slug}/`;

/** Versi absolut dari areaUrlId. */
export const areaUrlIdAbs = (slug: string): string => `https://zeepage.com${areaUrlId(slug)}`;
