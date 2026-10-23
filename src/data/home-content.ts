import { blogPostsData } from './blog-posts';

export const WA =
  'https://wa.me/6288987244675?text=Halo%20zeepage%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website.%20Mohon%20bantuannya.';
export const WA_EN =
  'https://wa.me/6288987244675?text=Hello%20zeepage%2C%20I%20would%20like%20to%20consult%20about%20building%20a%20website.%20Please%20help.';

export type Lang = 'id' | 'en';

export const content: Record<Lang, any> = {
  id: {
    locale: 'id-ID',
    htmlLang: 'id',
    title: 'Jasa Pembuatan Website Profesional di Bali | zeepage',
    description:
      'zeepage adalah jasa pembuatan website di Bali untuk UMKM dan brand yang sedang bertumbuh. Landing page mulai Rp 799 ribu, company profile Rp 1.499 ribu, keduanya termasuk domain .com gratis 1 tahun, hosting gratis, SSL gratis, dan support gratis.',
    nav: [
      { label: 'Layanan', href: '#layanan' },
      { label: 'Karya', href: '#karya' },
      { label: 'Harga', href: '#harga' },
      { label: 'Tentang', href: '/tentang' },
      { label: 'Jurnal', href: '#jurnal' },
      { label: 'Kontak', href: '#kontak' },
    ],
    navCta: 'Konsultasi Gratis',
    hero: {
      eyebrow: 'Jasa pembuatan website, berbasis di Bali',
      h1a: 'Jasa pembuatan website',
      h1accent: 'di Bali',
      h1b: 'yang membuat bisnis Anda ditemukan pelanggan.',
      sub: 'Kami merancang dan membangun website yang cepat, rapi, dan mudah ditemukan di Google, untuk UMKM dan brand di Bali serta seluruh Indonesia.',
      priceLine: 'Paket website mulai Rp 799 ribu.',
      cta1: 'Konsultasi Gratis',
      cta2: 'Lihat Karya Pilihan',
      collage: [
        { src: '/demopadel.webp', alt: 'Contoh website aplikasi booking lapangan padel' },
        { src: '/sagaroof.webp', alt: 'Contoh website company profile perusahaan atap' },
        { src: '/travel.webp', alt: 'Contoh website perusahaan travel' },
        { src: '/posapotek.webp', alt: 'Contoh aplikasi web kasir apotek' },
      ],
    },
    marquee: ['Landing Page', 'Company Profile', 'E-Commerce', 'Web Application', 'Redesign Website', 'Maintenance'],
    manifesto: {
      label: 'ZEEPAGE / JASA WEB DARI BALI',
      text: 'zeepage adalah studio kecil yang mengerjakan setiap proyek secara langsung, tanpa perantara. Fokus kami sederhana: website yang tampil profesional, terbuka cepat di ponsel, dan mengubah pengunjung menjadi pelanggan yang menghubungi Anda lewat WhatsApp.',
      link: 'Lihat layanan kami',
    },
    services: {
      index: '01',
      label: 'Layanan',
      heading: 'Jasa pembuatan website di Bali',
      accent: 'untuk Anda.',
      note: 'Dua paket pertama harganya tetap dan tertulis jelas. Sisanya menyesuaikan kebutuhan, selalu diawali konsultasi gratis.',
      rows: [
        {
          name: 'Landing Page',
          price: 'Mulai Rp 799rb',
          desc: 'Satu halaman fokus konversi untuk campaign, peluncuran produk, atau personal brand. Sudah termasuk copywriting headline, tombol WhatsApp, dan form order.',
          meta: '1 halaman custom / 2x revisi / 1 sampai 2 minggu',
        },
        {
          name: 'Company Profile',
          price: 'Mulai Rp 1.499rb',
          desc: 'Website lengkap sampai 7 halaman untuk bisnis yang ingin tampil kredibel: beranda, tentang, layanan, portofolio, blog, dan kontak, dengan SEO on page dan domain .com gratis 1 tahun.',
          meta: 'Sampai 7 halaman / 3x revisi / 2 sampai 4 minggu',
        },
        {
          name: 'E-Commerce',
          price: 'Menyesuaikan kebutuhan',
          desc: 'Toko online dengan katalog produk, keranjang, dan payment gateway, supaya pelanggan bisa membeli langsung tanpa menunggu balasan admin.',
          meta: 'Katalog produk / pembayaran online / panel kelola',
        },
        {
          name: 'Web Application',
          price: 'Menyesuaikan kebutuhan',
          desc: 'Aplikasi dan sistem web custom mengikuti alur kerja bisnis Anda, dari sistem pemesanan, kasir, sampai dashboard internal.',
          meta: 'Custom sesuai alur bisnis / konsultasi dulu',
        },
        {
          name: 'Redesign dan Maintenance',
          price: 'Menyesuaikan kebutuhan',
          desc: 'Peremajaan website lama yang sudah lambat atau ketinggalan tampilan, plus perawatan rutin agar performa dan keamanannya terjaga.',
          meta: 'Audit awal gratis / laporan berkala',
        },
      ],
    },
    works: {
      index: '02',
      label: 'Karya pilihan',
      heading: 'Karya yang',
      accent: 'bermakna.',
      note: 'Pilihan proyek dan demo konsep terbaru dari studio kami.',
      items: [
        { title: 'DemoPadel', cat: 'Web Application', img: '/demopadel.webp', href: '/portofolio/demopadel/', demo: true },
        { title: 'Sagaroof', cat: 'Company Profile', img: '/sagaroof.webp', href: '/portofolio/sagaroof/', demo: true },
        { title: 'TravelGo', cat: 'Company Profile', img: '/travel.webp', href: '/portofolio/travelgo/', demo: false },
        { title: 'PosApotek', cat: 'Web Application', img: '/posapotek.webp', href: '/portofolio/posapotek/', demo: false },
      ],
      demoLabel: 'Demo konsep',
      allLabel: 'Lihat Semua Karya',
      allHref: '/portofolio/',
    },
    pricing: {
      index: '03',
      label: 'Harga',
      heading: 'Harga yang jelas',
      accent: 'sejak awal.',
      note: 'Tanpa biaya tersembunyi. Harga final tertulis di penawaran sebelum pengerjaan dimulai.',
      plans: [
        {
          name: 'Landing Page',
          price: 'Rp 799 ribu',
          target: 'Cocok untuk UMKM atau personal yang butuh satu halaman fokus konversi.',
          features: ['1 halaman full custom design', 'Copywriting headline', 'Integrasi WhatsApp dan form order', 'Domain .com gratis 1 tahun', 'Hosting gratis 1 tahun', 'SSL gratis (keamanan HTTPS)', 'Support gratis', '2x revisi desain', 'Maintenance gratis 30 hari', 'Biaya tahunan Rp 600 ribu mulai tahun ke 2'],
          popular: false,
          wa: 'https://wa.me/6288987244675?text=Halo%20zeepage%2C%20saya%20tertarik%20dengan%20paket%20Landing%20Page%20Rp%20799%20ribu.%20Mohon%20info%20selengkapnya.',
        },
        {
          name: 'Company Profile',
          price: 'Rp 1.499 ribu',
          target: 'Pilihan terbaik untuk bisnis yang ingin tampil lengkap dan kredibel.',
          features: ['Semua benefit paket Landing Page', 'Sampai 7 halaman lengkap', 'Domain .com gratis 1 tahun', 'Hosting gratis 1 tahun', 'SSL gratis (keamanan HTTPS)', 'Support gratis', 'Setup blog dan 1 artikel perdana', 'SEO on page: meta, schema, sitemap', 'Setup Google Business Profile', '3x revisi desain', 'Maintenance gratis 3 bulan', 'Biaya tahunan Rp 600 ribu mulai tahun ke 2'],
          popular: true,
          popularLabel: 'Paling dipilih',
          wa: 'https://wa.me/6288987244675?text=Halo%20zeepage%2C%20saya%20tertarik%20dengan%20paket%20Company%20Profile%20Rp%201.499%20ribu.%20Mohon%20info%20selengkapnya.',
        },
        {
          name: 'Custom',
          price: 'Harga menyesuaikan',
          priceSmall: true,
          target: 'Untuk e-commerce, aplikasi web, dan sistem khusus yang mengikuti alur bisnis Anda.',
          features: ['Konsultasi dan analisis kebutuhan gratis', 'Fitur dirancang mengikuti proses bisnis Anda', 'E-commerce, sistem booking, kasir, dashboard', 'Penawaran tertulis sebelum pengerjaan', 'Pendampingan setelah tayang'],
          popular: false,
          cta: 'Minta Penawaran',
          wa: 'https://wa.me/6288987244675?text=Halo%20zeepage%2C%20saya%20ingin%20konsultasi%20paket%20Custom%20untuk%20kebutuhan%20website%20saya.%20Mohon%20info%20selengkapnya.',
        },
      ],
      cta: 'Pilih Paket Ini',
    },
    testimonials: {
      index: '04',
      label: 'Testimoni',
      heading: 'Apa kata',
      accent: 'klien kami.',
      note: 'Pengalaman bisnis yang mempercayakan pembuatan websitenya kepada zeepage, dari konsultasi pertama sampai website tayang.',
      items: [
        { quote: 'Proses pengerjaannya rapi dan komunikasinya jelas. Website company profile kami selesai sesuai jadwal, dan sekarang calon tamu bisa melihat fasilitas beserta galeri fotonya dengan jauh lebih nyaman sebelum memutuskan menginap.', name: 'I Made Wirawan', role: 'Manajer Operasional, Villa Narendira Ubud', initials: 'MW' },
        { quote: 'Sebelumnya pemesanan hanya lewat WhatsApp dan sering terlewat. Setelah website jadi, tamu bisa melihat menu treatment dan langsung memesan dari halaman yang sama. Tampilannya juga sesuai dengan karakter brand kami.', name: 'Ni Luh Putri Ayu', role: 'Pemilik, Veluna Spa Seminyak', initials: 'PA' },
        { quote: 'Kami dibantu dari nol, mulai dari struktur halaman sampai penulisan konten. Website rental kami sekarang tampil profesional dan calon pelanggan bisa mengecek armada serta harga tanpa harus bertanya satu per satu.', name: 'Komang Adi Saputra', role: 'Direktur, Bali Artha Trans Denpasar', initials: 'AS' },
        { quote: 'Menu dan jam operasional sekarang bisa dilihat langsung di website. Pelanggan yang menemukan kami dari Google Maps jadi lebih mudah memutuskan untuk datang, dan reservasi meja meningkat terutama di akhir pekan.', name: 'Kadek Sri Wahyuni', role: 'Manajer, Dapur Pasih Sanur', initials: 'SW' },
        { quote: 'Website klinik kami sekarang memuat daftar treatment, harga, dan tombol booking yang terhubung ke WhatsApp. Penjelasan ke pasien jadi lebih singkat karena semua informasi sudah tersedia sebelum mereka datang.', name: 'Putu Ayu Lestari', role: 'Pemilik, Nalika Beauty Clinic Canggu', initials: 'AL' },
        { quote: 'Dari awal kami dijelaskan pilihan paketnya dengan transparan, tidak ada biaya tambahan di tengah jalan. Website kedai kami selesai dalam dua minggu dan katalog biji kopi sekarang bisa dipesan langsung dari halaman produk.', name: 'Gede Pramana', role: 'Pemilik, Kopi Kala Ubud', initials: 'GP' },
      ],
    },
    journal: {
      index: '05',
      label: 'Jurnal',
      heading: 'Catatan dari',
      accent: 'studio.',
      note: 'Panduan praktis seputar website untuk berbagai jenis bisnis di Bali.',
      items: [
        { title: 'Website untuk Spa di Bali: Menu Treatment, Harga, dan Reservasi Online', date: '17 Oktober 2026', href: '/blog/website-untuk-spa/' },
        { title: 'Website untuk Salon dan Barbershop di Bali: Layanan, Harga, dan Booking Jadwal Online', date: '17 Oktober 2026', href: '/blog/website-untuk-salon/' },
        { title: 'Website untuk Gym dan Studio Fitness di Bali: Jadwal Kelas, Harga Member, dan Pendaftaran Online', date: '17 Oktober 2026', href: '/blog/website-untuk-gym/' },
      ],
      allLabel: 'Lihat semua artikel',
      allHref: '/blog/',
    },
    areas: {
      label: 'Area Layanan',
      heading: 'Melayani jasa pembuatan website',
      accent: 'di seluruh Bali.',
      note: 'Basis kami di Bali dan semua pengerjaan berjalan online, jadi lokasi Anda tidak pernah jadi hambatan. Di luar Bali, kami melayani klien di seluruh Indonesia.',
    },
    steps: {
      index: '06',
      label: 'Cara kerja',
      heading: 'Empat langkah',
      accent: 'sampai tayang.',
      items: [
        { num: '01', title: 'Konsultasi dan briefing', desc: 'Ceritakan kebutuhan dan target bisnis Anda. Kami dengarkan, lalu rumuskan solusi yang tepat sasaran.' },
        { num: '02', title: 'Rekomendasi paket', desc: 'Kami sarankan jenis website dan paket yang paling sesuai, tanpa fitur mubazir dan tanpa biaya tersembunyi.' },
        { num: '03', title: 'Kesepakatan dan data', desc: 'Setelah penawaran disetujui, Anda membayar DP 50 persen dan melengkapi materi seperti logo, teks, dan foto.' },
        { num: '04', title: 'Pengerjaan dan serah terima', desc: 'Proyek dikerjakan dengan kabar progres berkala. Setelah Anda setuju dan pelunasan selesai, website siap tayang.' },
      ],
    },
    faq: {
      heading: 'Pertanyaan yang sering masuk',
      items: [
        { q: 'Berapa biaya membuat website di zeepage?', a: 'Landing page Rp 799 ribu dan company profile Rp 1.499 ribu, keduanya termasuk domain .com gratis 1 tahun, hosting gratis, SSL gratis, dan support gratis. Biaya tahunan Rp 600 ribu berlaku mulai tahun kedua. Kebutuhan khusus seperti e-commerce dan aplikasi web dihitung setelah konsultasi, selalu dengan penawaran tertulis di awal.' },
        { q: 'Berapa lama pengerjaannya?', a: 'Landing page selesai dalam 1 sampai 2 minggu. Company profile selesai dalam 2 sampai 4 minggu, tergantung kelengkapan materi dari Anda.' },
        { q: 'Apakah bisa revisi?', a: 'Bisa. Paket landing page termasuk 2 kali revisi desain dan company profile 3 kali revisi desain.' },
        { q: 'Apakah ada perawatan setelah website jadi?', a: 'Ada. Landing page termasuk maintenance gratis 30 hari dan company profile gratis 3 bulan. Setelah masa gratis berakhir, perawatan bisa dilanjutkan dengan paket berbayar.' },
        { q: 'Saya belum punya logo dan materi, apakah bisa dibantu?', a: 'Bisa. Ceritakan dulu bisnis Anda saat konsultasi, kami bantu arahkan kebutuhan logo, foto, dan teksnya agar website tetap bisa jalan.' },
      ],
    },
    contact: {
      index: '07',
      label: 'Kontak',
      heading: 'Punya proyek?',
      accent: 'Ceritakan idenya.',
      sub: 'Konsultasi gratis dan tanpa komitmen. Balasan pada jam kerja, langsung dari yang mengerjakan website Anda.',
      waLabel: 'Chat WhatsApp',
      rows: [
        { k: 'WhatsApp', v: '+62 889-8724-4675', href: WA },
        { k: 'Instagram', v: '@zeecreate.id', href: 'https://instagram.com/zeecreate.id' },
        { k: 'Basis', v: 'Bali, Indonesia', href: '#kontak' },
      ],
    },
    footer: {
      desc: 'Jasa pembuatan website profesional, cepat, dan SEO friendly untuk bisnis di Bali dan seluruh Indonesia.',
      rights: 'zeepage. Seluruh hak cipta dilindungi.',
      backTop: 'Kembali ke atas',
    },
  },
  en: {
    locale: 'en-US',
    htmlLang: 'en',
    title: 'Professional Website Design Services in Bali | zeepage',
    description:
      'zeepage provides website design services in Bali for growing businesses and brands. Landing pages from Rp 799k, company profile websites Rp 1.499k, both including a free .com domain for 1 year, free hosting, free SSL, and free support.',
    nav: [
      { label: 'Services', href: '#layanan' },
      { label: 'Work', href: '#karya' },
      { label: 'Pricing', href: '#harga' },
      { label: 'About', href: '/en/tentang' },
      { label: 'Journal', href: '#jurnal' },
      { label: 'Contact', href: '#kontak' },
    ],
    navCta: 'Free Consultation',
    hero: {
      eyebrow: 'Website design services, based in Bali',
      h1a: 'A website that gets',
      h1accent: 'your business',
      h1b: 'found by customers.',
      sub: 'We design and build fast, tidy websites that are easy to find on Google, for small businesses and growing brands in Bali and across Indonesia.',
      priceLine: 'Website packages from Rp 799k.',
      cta1: 'Free Consultation',
      cta2: 'See Selected Work',
      collage: [
        { src: '/demopadel.webp', alt: 'Sample booking web application for a padel venue' },
        { src: '/sagaroof.webp', alt: 'Sample company profile website for a roofing company' },
        { src: '/travel.webp', alt: 'Sample website for a travel company' },
        { src: '/posapotek.webp', alt: 'Sample point of sale web app for a pharmacy' },
      ],
    },
    marquee: ['Landing Page', 'Company Profile', 'E-Commerce', 'Web Application', 'Website Redesign', 'Maintenance'],
    manifesto: {
      label: 'ZEEPAGE / WEB SERVICE FROM BALI',
      text: 'zeepage is a small studio that works on every project directly, with no middlemen. Our focus is simple: a website that looks professional, loads fast on phones, and turns visitors into customers who message you on WhatsApp.',
      link: 'See our services',
    },
    services: {
      index: '01',
      label: 'Services',
      heading: 'Website design services in Bali',
      accent: 'for your business.',
      note: 'The first two packages have fixed, clearly written prices. The rest adapt to your needs, always starting with a free consultation.',
      rows: [
        {
          name: 'Landing Page',
          price: 'From Rp 799k',
          desc: 'One conversion focused page for a campaign, product launch, or personal brand. Includes headline copywriting, a WhatsApp button, and an order form.',
          meta: '1 custom page / 2 design revisions / 1 to 2 weeks',
        },
        {
          name: 'Company Profile',
          price: 'From Rp 1.499k',
          desc: 'A complete website of up to 7 pages for businesses that need credibility: home, about, services, portfolio, blog, and contact, with on page SEO and a free .com domain for 1 year.',
          meta: 'Up to 7 pages / 3 design revisions / 2 to 4 weeks',
        },
        {
          name: 'E-Commerce',
          price: 'Scoped to your needs',
          desc: 'An online store with a product catalog, cart, and payment gateway, so customers can buy directly without waiting for an admin reply.',
          meta: 'Product catalog / online payments / admin panel',
        },
        {
          name: 'Web Application',
          price: 'Scoped to your needs',
          desc: 'Custom web apps and systems that follow your business workflow, from booking systems and point of sale to internal dashboards.',
          meta: 'Built around your workflow / consultation first',
        },
        {
          name: 'Redesign and Maintenance',
          price: 'Scoped to your needs',
          desc: 'A refresh for old websites that feel slow or dated, plus routine care that keeps performance and security in shape.',
          meta: 'Free initial audit / periodic reports',
        },
      ],
    },
    works: {
      index: '02',
      label: 'Selected work',
      heading: 'Work that',
      accent: 'means something.',
      note: 'A selection of recent projects and concept demos from our studio.',
      items: [
        { title: 'DemoPadel', cat: 'Web Application', img: '/demopadel.webp', href: '/en/portfolio/demopadel/', demo: true },
        { title: 'Sagaroof', cat: 'Company Profile', img: '/sagaroof.webp', href: '/en/portfolio/sagaroof/', demo: true },
        { title: 'TravelGo', cat: 'Company Profile', img: '/travel.webp', href: '/en/portfolio/travelgo/', demo: false },
        { title: 'PosApotek', cat: 'Web Application', img: '/posapotek.webp', href: '/en/portfolio/posapotek/', demo: false },
      ],
      demoLabel: 'Concept demo',
      allLabel: 'See All Work',
      allHref: '/en/portfolio/',
    },
    pricing: {
      index: '03',
      label: 'Pricing',
      heading: 'Clear pricing',
      accent: 'from the start.',
      note: 'No hidden fees. Your final price is written in the proposal before work begins.',
      plans: [
        {
          name: 'Landing Page',
          price: 'Rp 799k',
          target: 'For small businesses or personal brands that need one conversion focused page.',
          features: ['1 fully custom designed page', 'Headline copywriting', 'WhatsApp and order form integration', 'Free .com domain for 1 year', 'Free hosting for 1 year', 'Free SSL (HTTPS security)', 'Free support', '2 design revisions', '30 days of free maintenance', 'Annual fee of Rp 600k from year 2'],
          popular: false,
          wa: 'https://wa.me/6288987244675?text=Hello%20zeepage%2C%20I%20am%20interested%20in%20the%20Landing%20Page%20package%20at%20Rp%20799k.%20Please%20send%20more%20details.',
        },
        {
          name: 'Company Profile',
          price: 'Rp 1.499k',
          target: 'The best choice for businesses that want a complete, credible presence.',
          features: ['Everything in the Landing Page package', 'Up to 7 complete pages', 'Free .com domain for 1 year', 'Free hosting for 1 year', 'Free SSL (HTTPS security)', 'Free support', 'Blog setup and 1 starter article', 'On page SEO: meta, schema, sitemap', 'Google Business Profile setup', '3 design revisions', '3 months of free maintenance', 'Annual fee of Rp 600k from year 2'],
          popular: true,
          popularLabel: 'Most chosen',
          wa: 'https://wa.me/6288987244675?text=Hello%20zeepage%2C%20I%20am%20interested%20in%20the%20Company%20Profile%20package%20at%20Rp%201.499k.%20Please%20send%20more%20details.',
        },
        {
          name: 'Custom',
          price: 'Scoped pricing',
          priceSmall: true,
          target: 'For e-commerce, web applications, and custom systems built around your workflow.',
          features: ['Free consultation and needs analysis', 'Features designed around your process', 'E-commerce, booking systems, POS, dashboards', 'Written proposal before we start', 'Support after launch'],
          popular: false,
          cta: 'Request a Quote',
          wa: 'https://wa.me/6288987244675?text=Hello%20zeepage%2C%20I%20would%20like%20to%20consult%20about%20a%20Custom%20package%20for%20my%20website%20needs.%20Please%20send%20more%20details.',
        },
      ],
      cta: 'Choose This Package',
    },
    testimonials: {
      index: '04',
      label: 'Testimonials',
      heading: 'What our',
      accent: 'clients say.',
      note: 'Stories from businesses that trusted zeepage with their website, from the first consultation to launch day.',
      items: [
        { quote: 'The process was tidy and the communication was clear. Our company profile website was finished on schedule, and guests can now browse our facilities and photo gallery much more comfortably before deciding to book.', name: 'I Made Wirawan', role: 'Operations Manager, Villa Narendira Ubud', initials: 'MW' },
        { quote: 'Bookings used to come only through WhatsApp and often slipped through. With the website, guests can see the treatment menu and book from the same page. The design also matches our brand character.', name: 'Ni Luh Putri Ayu', role: 'Owner, Veluna Spa Seminyak', initials: 'PA' },
        { quote: 'We were guided from zero, from page structure to content writing. Our rental website now looks professional, and customers can check the fleet and prices without having to ask one by one.', name: 'Komang Adi Saputra', role: 'Director, Bali Artha Trans Denpasar', initials: 'AS' },
        { quote: 'Our menu and opening hours can now be seen directly on the website. Customers who find us on Google Maps decide to visit much more easily, and table reservations have increased, especially on weekends.', name: 'Kadek Sri Wahyuni', role: 'Manager, Dapur Pasih Sanur', initials: 'SW' },
        { quote: 'Our clinic website now lists treatments, prices, and a booking button connected to WhatsApp. Explaining things to patients is much shorter because all the information is available before they arrive.', name: 'Putu Ayu Lestari', role: 'Owner, Nalika Beauty Clinic Canggu', initials: 'AL' },
        { quote: 'From the start, the package options were explained transparently, with no extra charges appearing midway. Our coffee shop website was finished in two weeks, and the coffee bean catalog can now be ordered directly from the product pages.', name: 'Gede Pramana', role: 'Owner, Kopi Kala Ubud', initials: 'GP' },
      ],
    },
    journal: {
      index: '05',
      label: 'Journal',
      heading: 'Notes from',
      accent: 'the studio.',
      note: 'Practical guides about websites for different kinds of businesses in Bali.',
      items: [
        { title: 'Website for Surf Camps in Bali: Lesson Packages, Schedules, and Direct Bookings', date: 'October 17, 2026', href: '/en/blog/website-for-surf-camps-in-bali/' },
        { title: 'Website for Yoga Studios in Bali: Class Schedules, Retreats, and Online Booking', date: 'October 17, 2026', href: '/en/blog/website-for-yoga-studios-in-bali/' },
        { title: 'Website for Dive Centers in Bali: Trip Schedules, Course Prices, and Direct Bookings', date: 'October 17, 2026', href: '/en/blog/website-for-dive-centers-in-bali/' },
      ],
      allLabel: 'See all articles',
      allHref: '/en/blog/',
    },
    areas: {
      label: 'Service Areas',
      heading: 'Website design services',
      accent: 'across Bali.',
      note: 'We are based in Bali and all work runs online, so your location is never a barrier. Outside Bali, we serve clients across Indonesia.',
    },
    steps: {
      index: '06',
      label: 'How we work',
      heading: 'Four steps',
      accent: 'to launch.',
      items: [
        { num: '01', title: 'Consultation and briefing', desc: 'Tell us about your business needs and goals. We listen, then shape the right solution.' },
        { num: '02', title: 'Package recommendation', desc: 'We recommend the website type and package that fits best, with no pointless features and no hidden fees.' },
        { num: '03', title: 'Agreement and materials', desc: 'Once the proposal is approved, you pay a 50 percent deposit and complete materials such as your logo, texts, and photos.' },
        { num: '04', title: 'Build and handover', desc: 'Your project is built with regular progress updates. After your approval and final payment, the website goes live.' },
      ],
    },
    faq: {
      heading: 'Questions we hear often',
      items: [
        { q: 'How much does a website cost at zeepage?', a: 'A landing page is Rp 799k and a company profile is Rp 1.499k, both including a free .com domain for 1 year, free hosting, free SSL, and free support. An annual fee of Rp 600k applies from year two. Custom needs such as e-commerce and web applications are quoted after a consultation, always in writing upfront.' },
        { q: 'How long does it take?', a: 'A landing page takes 1 to 2 weeks. A company profile takes 2 to 4 weeks, depending on how complete your materials are.' },
        { q: 'Can I ask for revisions?', a: 'Yes. The landing page package includes 2 design revisions and the company profile package includes 3 design revisions.' },
        { q: 'Is there maintenance after launch?', a: 'Yes. Landing pages include 30 days of free maintenance and company profiles include 3 months. After the free period, care can continue on a paid plan.' },
        { q: 'I have no logo or materials yet, can you help?', a: 'Yes. Tell us about your business during the consultation and we will guide what logo, photos, and texts are needed so the website can still move forward.' },
      ],
    },
    contact: {
      index: '07',
      label: 'Contact',
      heading: 'Have a project?',
      accent: 'Tell us the idea.',
      sub: 'Free consultation with no commitment. Replies during working hours, directly from the people building your website.',
      waLabel: 'Chat on WhatsApp',
      rows: [
        { k: 'WhatsApp', v: '+62 889-8724-4675', href: WA_EN },
        { k: 'Instagram', v: '@zeecreate.id', href: 'https://instagram.com/zeecreate.id' },
        { k: 'Based in', v: 'Bali, Indonesia', href: '#kontak' },
      ],
    },
    footer: {
      desc: 'A website design service building professional, fast, and SEO friendly websites for businesses in Bali and across Indonesia.',
      rights: 'zeepage. All rights reserved.',
      backTop: 'Back to top',
    },
  },
};

// Jurnal di homepage selalu mengambil 3 artikel terbaru dari data blog pusat
// (blog-posts.ts), jadi tidak perlu diperbarui manual setiap ada artikel baru.
// Item statis di atas hanya cadangan bila data blog kosong.
const MONTHS: Record<string, number> = {
  januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5,
  juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11,
  january: 0, february: 1, march: 2, may: 4, june: 5,
  july: 6, august: 7, october: 9, december: 11,
};

function postTime(date: string): number {
  const idMatch = date.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (idMatch) {
    const m = MONTHS[idMatch[2].toLowerCase()];
    if (m !== undefined) return new Date(+idMatch[3], m, +idMatch[1]).getTime();
  }
  const enMatch = date.match(/^(\S+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (enMatch) {
    const m = MONTHS[enMatch[1].toLowerCase()];
    if (m !== undefined) return new Date(+enMatch[3], m, +enMatch[2]).getTime();
  }
  const t = Date.parse(date);
  return Number.isNaN(t) ? 0 : t;
}

for (const lang of ['id', 'en'] as const) {
  const latest = [...blogPostsData[lang]]
    .sort((a, b) => postTime(b.date) - postTime(a.date))
    .slice(0, 3)
    .map((p) => ({ title: p.title, date: p.date, href: p.href }));
  if (latest.length) content[lang].journal.items = latest;
}
