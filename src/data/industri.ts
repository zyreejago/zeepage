/**
 * Data inti grup INDUSTRI untuk halaman jasa pembuatan website per industri.
 *
 * Halaman yang digenerate:
 * - ID: /jasa-pembuatan-website-<slug>/        (target: jasa pembuatan website <industri> di Bali)
 * - EN: /en/website-design-<slugEn>-bali/          (target: <industry> website design Bali)
 *
 * Konten unik per industri ada di industri-konten.ts (ID) dan industri-konten-en.ts (EN).
 * Label pada `fitur` / `fiturEn` dipakai sebagai key pada fiturDesc di file konten,
 * jadi ejaannya harus sama persis.
 */
export interface Industri {
  /** slug URL versi ID, dipakai pada /jasa-pembuatan-website-<slug>/ */
  slug: string;
  /** slug URL versi EN, dipakai pada /en/website-design-<slugEn>-bali/ */
  slugEn: string;
  /** nama tampil ID, mis. "Villa" */
  nama: string;
  /** nama tampil EN, mis. "Villas" */
  namaEn: string;
  /** deskripsi ringkas ID 1-2 kalimat */
  deskripsi: string;
  /** deskripsi ringkas EN 1-2 kalimat */
  deskripsiEn: string;
  /** label fitur website khas industri ini (ID) */
  fitur: string[];
  /** label fitur website khas industri ini (EN) */
  fiturEn: string[];
  /** slug daerah prioritas untuk internal linking */
  areaPrioritas: string[];
}

export const industriList: Industri[] = [
  // ===================== TIER 1 =====================
  {
    slug: 'villa',
    slugEn: 'villa',
    nama: 'Villa',
    namaEn: 'Villas',
    deskripsi:
      'Website villa dengan sistem reservasi langsung membantu pemilik dan manajemen villa di Bali lepas dari ketergantungan OTA dan komisi besar, sekaligus tampil mewah di mata tamu internasional.',
    deskripsiEn:
      'A villa website with direct booking helps Bali villa owners and management companies escape OTA dependency and high commissions while looking premium to international guests.',
    fitur: ['Sistem Reservasi Online', 'Galeri Foto & Video', 'Kalender Ketersediaan', 'Integrasi Channel Manager', 'Peta & Panduan Lokasi', 'Multibahasa (ID/EN)'],
    fiturEn: ['Online Booking System', 'Photo & Video Gallery', 'Availability Calendar', 'Channel Manager Integration', 'Location Map & Guide', 'Multilingual (ID/EN)'],
    areaPrioritas: ['canggu', 'seminyak', 'ubud', 'uluwatu', 'jimbaran'],
  },
  {
    slug: 'hotel',
    slugEn: 'hotel',
    nama: 'Hotel & Resort',
    namaEn: 'Hotels & Resorts',
    deskripsi:
      'Website hotel dan resort dengan mesin booking langsung menaikkan okupansi dari kanal sendiri dan menurunkan biaya komisi perantara, lengkap dengan manajemen kamar dan tarif.',
    deskripsiEn:
      'A hotel and resort website with a direct booking engine raises occupancy from your own channel and cuts intermediary commissions, complete with room and rate management.',
    fitur: ['Mesin Booking Langsung', 'Manajemen Kamar & Tarif', 'Galeri Fasilitas', 'Promo & Paket Menginap', 'Integrasi PMS', 'Multibahasa (ID/EN)'],
    fiturEn: ['Direct Booking Engine', 'Room & Rate Management', 'Facilities Gallery', 'Promos & Stay Packages', 'PMS Integration', 'Multilingual (ID/EN)'],
    areaPrioritas: ['nusa-dua', 'kuta', 'seminyak', 'ubud', 'sanur'],
  },
  {
    slug: 'properti',
    slugEn: 'real-estate',
    nama: 'Real Estate & Properti',
    namaEn: 'Real Estate',
    deskripsi:
      'Website agen properti dan real estate di Bali dengan listing terfilter, virtual tour, dan formulir inquiry WhatsApp untuk menangkap calon pembeli lokal dan asing lebih cepat.',
    deskripsiEn:
      'A Bali real estate website with filterable listings, virtual tours, and WhatsApp inquiry forms captures local and foreign buyers faster.',
    fitur: ['Listing Properti + Filter', 'Galeri & Virtual Tour', 'Formulir Inquiry WhatsApp', 'Peta Lokasi Properti', 'Halaman Agen', 'Multibahasa (ID/EN)'],
    fiturEn: ['Property Listings + Filters', 'Gallery & Virtual Tours', 'WhatsApp Inquiry Forms', 'Property Location Maps', 'Agent Pages', 'Multilingual (ID/EN)'],
    areaPrioritas: ['canggu', 'seminyak', 'denpasar', 'ubud', 'jimbaran'],
  },
  {
    slug: 'restoran',
    slugEn: 'restaurant',
    nama: 'Restoran & Fine Dining',
    namaEn: 'Restaurants & Fine Dining',
    deskripsi:
      'Website restoran dengan menu digital, reservasi meja, dan galeri hidangan membantu restoran di Bali ditemukan wisatawan yang mencari tempat makan lewat Google setiap hari.',
    deskripsiEn:
      'A restaurant website with digital menus, table reservations, and dish galleries helps Bali restaurants get found by tourists searching Google every day.',
    fitur: ['Menu Digital + QR', 'Reservasi Meja Online', 'Galeri Hidangan', 'Integrasi Google Maps', 'Promo & Event', 'Pemesanan via WhatsApp'],
    fiturEn: ['Digital Menu + QR', 'Online Table Reservations', 'Dish Gallery', 'Google Maps Integration', 'Promos & Events', 'WhatsApp Ordering'],
    areaPrioritas: ['seminyak', 'ubud', 'canggu', 'denpasar', 'kuta'],
  },
  {
    slug: 'beach-club',
    slugEn: 'beach-club',
    nama: 'Beach Club & Bar',
    namaEn: 'Beach Clubs & Bars',
    deskripsi:
      'Website beach club dan bar dengan reservasi daybed, kalender event, dan galeri suasana untuk memenangkan wisatawan premium yang merencanakan kunjungannya jauh hari.',
    deskripsiEn:
      'A beach club and bar website with daybed reservations, event calendars, and atmosphere galleries wins premium tourists who plan their visits well ahead.',
    fitur: ['Reservasi Daybed & Meja', 'Kalender Event & DJ', 'Galeri Suasana', 'Menu & Bottle Service', 'Integrasi Instagram', 'Tiket & Guestlist'],
    fiturEn: ['Daybed & Table Reservations', 'Event & DJ Calendar', 'Atmosphere Gallery', 'Menu & Bottle Service', 'Instagram Integration', 'Tickets & Guestlist'],
    areaPrioritas: ['seminyak', 'canggu', 'uluwatu', 'kuta', 'jimbaran'],
  },
  {
    slug: 'tour-travel',
    slugEn: 'tour-travel',
    nama: 'Tour & Travel',
    namaEn: 'Tours & Travel',
    deskripsi:
      'Website tour dan travel dengan katalog paket, itinerary detail, dan booking online membantu operator tur Bali menjual langsung ke wisatawan tanpa perantara.',
    deskripsiEn:
      'A tour and travel website with package catalogs, detailed itineraries, and online booking helps Bali tour operators sell directly to travelers without middlemen.',
    fitur: ['Katalog Paket Tour', 'Booking & Jadwal Online', 'Galeri Destinasi', 'Itinerary Detail', 'Pembayaran DP Online', 'Multibahasa (ID/EN)'],
    fiturEn: ['Tour Package Catalog', 'Online Booking & Scheduling', 'Destination Gallery', 'Detailed Itineraries', 'Online Deposit Payments', 'Multilingual (ID/EN)'],
    areaPrioritas: ['ubud', 'kuta', 'nusa-penida', 'denpasar', 'amed'],
  },
  {
    slug: 'wedding',
    slugEn: 'wedding',
    nama: 'Wedding Organizer & Venue',
    namaEn: 'Wedding Organizers & Venues',
    deskripsi:
      'Website wedding organizer dan venue pernikahan di Bali dengan portofolio galeri dan paket yang jelas untuk meyakinkan pasangan dari seluruh dunia merencanakan hari besarnya.',
    deskripsiEn:
      'A Bali wedding organizer and venue website with gallery portfolios and clear packages convinces couples worldwide to plan their big day here.',
    fitur: ['Portofolio Galeri Wedding', 'Paket & Venue', 'Formulir Konsultasi', 'Testimoni Klien', 'Vendor Partner', 'Multibahasa (ID/EN)'],
    fiturEn: ['Wedding Gallery Portfolio', 'Packages & Venues', 'Consultation Forms', 'Client Testimonials', 'Partner Vendors', 'Multilingual (ID/EN)'],
    areaPrioritas: ['uluwatu', 'ubud', 'jimbaran', 'tabanan', 'nusa-dua'],
  },
  {
    slug: 'spa',
    slugEn: 'spa',
    nama: 'Spa & Wellness',
    namaEn: 'Spas & Wellness',
    deskripsi:
      'Website spa dan wellness dengan booking treatment online dan daftar harga transparan membantu spa di Bali mengisi jadwal dari wisatawan maupun ekspatriat.',
    deskripsiEn:
      'A spa and wellness website with online treatment booking and transparent pricing helps Bali spas fill their schedules from tourists and expats alike.',
    fitur: ['Booking Treatment Online', 'Daftar Harga & Paket', 'Galeri Suasana Spa', 'Gift Voucher', 'Promo Member', 'Integrasi WhatsApp'],
    fiturEn: ['Online Treatment Booking', 'Price List & Packages', 'Spa Atmosphere Gallery', 'Gift Vouchers', 'Member Promos', 'WhatsApp Integration'],
    areaPrioritas: ['seminyak', 'ubud', 'nusa-dua', 'canggu', 'sanur'],
  },
  {
    slug: 'klinik',
    slugEn: 'clinic',
    nama: 'Klinik Kecantikan & Gigi',
    namaEn: 'Beauty & Dental Clinics',
    deskripsi:
      'Website klinik kecantikan dan gigi dengan booking konsultasi, profil dokter, dan harga transparan untuk menangkap pasar medical tourism Bali yang terus tumbuh.',
    deskripsiEn:
      'A beauty and dental clinic website with consultation booking, doctor profiles, and transparent pricing captures Bali\u2019s growing medical tourism market.',
    fitur: ['Booking Konsultasi', 'Profil Dokter & Layanan', 'Daftar Harga Transparan', 'Galeri Before-After', 'Artikel Edukasi', 'Multibahasa (ID/EN)'],
    fiturEn: ['Consultation Booking', 'Doctor & Service Profiles', 'Transparent Price List', 'Before-After Gallery', 'Educational Articles', 'Multilingual (ID/EN)'],
    areaPrioritas: ['denpasar', 'seminyak', 'renon', 'canggu', 'kuta'],
  },
  {
    slug: 'rental-mobil',
    slugEn: 'car-rental',
    nama: 'Rental Mobil & Transportasi',
    namaEn: 'Car Rentals & Transport',
    deskripsi:
      'Website rental mobil dengan katalog armada, harga transparan, dan booking via WhatsApp membantu usaha rental di Bali menang dari wisatawan yang memesan sebelum tiba.',
    deskripsiEn:
      'A car rental website with a fleet catalog, transparent pricing, and WhatsApp booking helps Bali rental businesses win tourists who book before they arrive.',
    fitur: ['Katalog Armada + Harga', 'Booking via WhatsApp', 'Hitung Durasi Sewa', 'Syarat & Ketentuan Jelas', 'Galeri Unit', 'Layanan Antar-Jemput'],
    fiturEn: ['Fleet Catalog + Pricing', 'WhatsApp Booking', 'Rental Duration Calculator', 'Clear Terms & Conditions', 'Unit Gallery', 'Pickup & Drop-off Service'],
    areaPrioritas: ['denpasar', 'kuta', 'tuban', 'ubud', 'sanur'],
  },

  // ===================== TIER 2 =====================
  {
    slug: 'kafe',
    slugEn: 'cafe',
    nama: 'Kafe & Coffee Shop',
    namaEn: 'Cafes & Coffee Shops',
    deskripsi:
      'Website kafe dan coffee shop dengan menu digital QR dan galeri suasana membantu kafe di Bali ditemukan digital nomad dan wisatawan yang mencari tempat nongkrong lewat Google Maps dan pencarian lokal.',
    deskripsiEn:
      'A cafe and coffee shop website with QR digital menus and atmosphere galleries helps Bali cafes get found by digital nomads and tourists through Google Maps and local search.',
    fitur: ['Menu Digital + QR', 'Galeri Suasana', 'Info Jam & Lokasi', 'Promo & Loyalty', 'Integrasi Instagram', 'Reservasi Meja'],
    fiturEn: ['Digital Menu + QR', 'Atmosphere Gallery', 'Hours & Location Info', 'Promos & Loyalty', 'Instagram Integration', 'Table Reservations'],
    areaPrioritas: ['canggu', 'ubud', 'denpasar', 'seminyak', 'renon'],
  },
  {
    slug: 'butik',
    slugEn: 'boutique',
    nama: 'Butik & Fashion',
    namaEn: 'Boutiques & Fashion',
    deskripsi:
      'Website butik dan brand fashion dengan lookbook dan toko online membantu label Bali menjual ke pelanggan mancanegara, bukan hanya yang berjalan melewati toko.',
    deskripsiEn:
      'A boutique and fashion brand website with lookbooks and an online store helps Bali labels sell to international customers, not just walk-ins.',
    fitur: ['Katalog Koleksi (Lookbook)', 'Toko Online + Checkout', 'Galeri Instagram', 'Info Size & Stok', 'Promo & Sale', 'Pengiriman Internasional'],
    fiturEn: ['Collection Catalog (Lookbook)', 'Online Store + Checkout', 'Instagram Gallery', 'Size & Stock Info', 'Promos & Sales', 'International Shipping'],
    areaPrioritas: ['seminyak', 'ubud', 'canggu', 'kuta', 'legian'],
  },
  {
    slug: 'diving',
    slugEn: 'diving',
    nama: 'Diving & Surf',
    namaEn: 'Diving & Surf',
    deskripsi:
      'Website operator diving dan surf school dengan paket, jadwal trip, dan booking online untuk menangkap wisatawan petualang yang merencanakan aktivitasnya dari jauh hari.',
    deskripsiEn:
      'A diving operator and surf school website with packages, trip schedules, and online booking captures adventure travelers who plan activities well in advance.',
    fitur: ['Paket Dive & Kursus', 'Jadwal Trip Harian', 'Galeri Bawah Laut', 'Booking & DP Online', 'Sertifikasi Instruktur', 'Multibahasa (ID/EN)'],
    fiturEn: ['Dive Packages & Courses', 'Daily Trip Schedule', 'Underwater Gallery', 'Online Booking & Deposits', 'Instructor Certifications', 'Multilingual (ID/EN)'],
    areaPrioritas: ['amed', 'nusa-penida', 'sanur', 'lovina', 'tuban'],
  },
  {
    slug: 'fotografer',
    slugEn: 'photographer',
    nama: 'Fotografer Wedding',
    namaEn: 'Wedding Photographers',
    deskripsi:
      'Website fotografer wedding dengan portofolio galeri yang kuat dan paket harga jelas untuk memenangkan pasangan yang mencari fotografer pernikahan di Bali dari luar negeri.',
    deskripsiEn:
      'A wedding photographer website with a strong gallery portfolio and clear pricing packages wins couples searching for a Bali wedding photographer from abroad.',
    fitur: ['Portofolio Galeri', 'Paket Harga Jelas', 'Formulir Booking Tanggal', 'Galeri per Kategori', 'Testimoni Klien', 'Integrasi Instagram'],
    fiturEn: ['Gallery Portfolio', 'Clear Pricing Packages', 'Date Booking Form', 'Category Galleries', 'Client Testimonials', 'Instagram Integration'],
    areaPrioritas: ['ubud', 'uluwatu', 'seminyak', 'tabanan', 'jimbaran'],
  },
  {
    slug: 'salon',
    slugEn: 'salon',
    nama: 'Salon & Barbershop',
    namaEn: 'Salons & Barbershops',
    deskripsi:
      'Website salon dan barbershop dengan booking jadwal online dan galeri hasil membantu salon di Bali mengisi kursi dari pelanggan lokal maupun wisatawan.',
    deskripsiEn:
      'A salon and barbershop website with online appointment booking and result galleries helps Bali salons fill chairs from locals and tourists alike.',
    fitur: ['Booking Jadwal Online', 'Daftar Layanan & Harga', 'Galeri Hasil', 'Profil Stylist', 'Promo & Paket', 'Integrasi WhatsApp'],
    fiturEn: ['Online Appointment Booking', 'Service & Price List', 'Results Gallery', 'Stylist Profiles', 'Promos & Packages', 'WhatsApp Integration'],
    areaPrioritas: ['denpasar', 'seminyak', 'canggu', 'renon', 'kuta'],
  },
  {
    slug: 'guest-house',
    slugEn: 'guest-house',
    nama: 'Guest House & Homestay',
    namaEn: 'Guest Houses & Homestays',
    deskripsi:
      'Website guest house dan homestay dengan booking kamar langsung dan harga transparan membantu penginapan kecil di Bali mengurangi komisi OTA dan membangun tamu langganan.',
    deskripsiEn:
      'A guest house and homestay website with direct room booking and transparent pricing helps small Bali properties cut OTA commissions and build repeat guests.',
    fitur: ['Booking Kamar Langsung', 'Galeri Kamar & Fasilitas', 'Kalender Ketersediaan', 'Harga Transparan', 'Ulasan Tamu', 'Multibahasa (ID/EN)'],
    fiturEn: ['Direct Room Booking', 'Room & Facilities Gallery', 'Availability Calendar', 'Transparent Pricing', 'Guest Reviews', 'Multilingual (ID/EN)'],
    areaPrioritas: ['ubud', 'canggu', 'kuta', 'lovina', 'sanur'],
  },
  {
    slug: 'yoga',
    slugEn: 'yoga',
    nama: 'Studio Yoga & Fitness',
    namaEn: 'Yoga & Fitness Studios',
    deskripsi:
      'Website studio yoga dan fitness dengan jadwal kelas online dan halaman retreat membantu studio di Bali menjangkau komunitas wellness global yang datang sepanjang tahun.',
    deskripsiEn:
      'A yoga and fitness studio website with online class schedules and retreat pages helps Bali studios reach the global wellness community that visits year-round.',
    fitur: ['Jadwal Kelas Online', 'Booking & Paket Kelas', 'Profil Instruktur', 'Retreat & Event', 'Galeri Studio', 'Multibahasa (ID/EN)'],
    fiturEn: ['Online Class Schedule', 'Class Booking & Packages', 'Instructor Profiles', 'Retreats & Events', 'Studio Gallery', 'Multilingual (ID/EN)'],
    areaPrioritas: ['ubud', 'canggu', 'sanur', 'seminyak', 'kintamani'],
  },
  {
    slug: 'kursus',
    slugEn: 'language-school',
    nama: 'Kursus & Sekolah Bahasa',
    namaEn: 'Language Schools & Courses',
    deskripsi:
      'Website kursus dan sekolah bahasa dengan katalog program dan pendaftaran online membantu lembaga di Bali menjangkau siswa lokal dan ekspatriat yang mencari kelas lewat Google.',
    deskripsiEn:
      'A language school and course website with program catalogs and online enrollment helps Bali institutions reach local students and expats searching on Google.',
    fitur: ['Katalog Program & Level', 'Pendaftaran Online', 'Jadwal & Harga', 'Profil Pengajar', 'Testimoni Siswa', 'Kelas Trial Gratis'],
    fiturEn: ['Program & Level Catalog', 'Online Enrollment', 'Schedule & Pricing', 'Teacher Profiles', 'Student Testimonials', 'Free Trial Classes'],
    areaPrioritas: ['denpasar', 'renon', 'ubud', 'kuta', 'jimbaran'],
  },
];

export const getIndustriBySlug = (slug: string): Industri | undefined =>
  industriList.find((i) => i.slug === slug);

export const getIndustriBySlugEn = (slugEn: string): Industri | undefined =>
  industriList.find((i) => i.slugEn === slugEn);
