/**
 * Konten UNIK per industri (Bahasa Indonesia) untuk halaman
 * /jasa-pembuatan-website-<slug>/.
 *
 * Setiap industri mempunyai konten khasnya sendiri (lead, intro, deskripsi
 * fitur, seksi lokal Bali, dan FAQ spesifik) agar halaman tidak menjadi
 * salinan template. Key objek = slug industri di industri.ts.
 */
export interface KontenIndustri {
  /** Judul SEO khusus industri ini (maks ~60 karakter) */
  metaTitle: string;
  /** Meta description khusus industri ini (maks ~160 karakter) */
  metaDescription: string;
  /** Kata kunci target; dipakai di structured data, bukan sebagai meta keywords */
  keywords: string[];
  /** Paragraf pembuka hero yang khas industri ini */
  heroLead: string;
  /** Blok intro "kenapa industri ini butuh website" yang ditulis khusus */
  intro: {
    h2: string;
    paragraf: string[];
    tips?: string;
  };
  /** Deskripsi kartu fitur, key = label pada industri.fitur */
  fiturDesc: Record<string, string>;
  /** Seksi lokal: pemahaman pasar Bali untuk industri ini + contoh ilustratif */
  lokal: {
    h2: string;
    paragraf: string[];
    ilustrasi: { judul: string; isi: string }[];
    /** Catatan agar contoh tidak disalahartikan sebagai klien nyata */
    catatan?: string;
  };
  /** FAQ spesifik industri */
  faq: { q: string; a: string }[];
}

export const kontenIndustri: Record<string, KontenIndustri> = {
villa: {
    metaTitle: 'Jasa Pembuatan Website Villa di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website villa di Bali dengan reservasi online dan galeri premium. Mulai Rp 799k, konsultasi gratis. Naikkan booking langsung tanpa komisi OTA.',
    keywords: ['jasa pembuatan website villa di bali', 'jasa bikin website villa bali', 'website villa bali', 'jasa website reservasi villa', 'pembuatan website villa ubud', 'jasa pembuatan website penginapan bali', 'web developer villa bali', 'website booking villa langsung'],
    heroLead: 'Tamu villa di Bali membandingkan belasan properti sebelum memutuskan menginap, mulai dari villa honeymoon di Ubud, villa surf di Canggu, sampai villa cliff di Uluwatu. Website resmi dengan reservasi online membuat villa Anda tampil premium dan bisa dipesan langsung, tanpa perantara dan tanpa komisi. zeepage merancang website villa yang sekelas pengalaman menginap yang Anda tawarkan.',
    intro: {
      h2: 'Kenapa Villa di Bali Tidak Cukup Mengandalkan OTA',
      paragraf: [
        'Banyak pemilik villa di Bali bergantung penuh pada platform OTA seperti Airbnb dan Booking.com. Masalahnya, komisi per booking terus menggerus margin, aturan main bisa berubah sewaktu-waktu, dan tamu yang puas tetap kembali memesan lewat platform, bukan langsung ke Anda. Di hasil pencarian pun villa Anda tenggelam di antara ratusan properti lain dengan tampilan yang seragam.',
        'Website resmi mengubah posisi tawar itu. Tamu yang mencari nama villa Anda di Google, atau mengetik pencarian seperti villa di Ubud dan private pool villa Bali, bisa diarahkan ke halaman yang Anda kendalikan penuh: galeri besar, kalender ketersediaan, tarif per musim, dan tombol reservasi yang langsung terhubung ke WhatsApp. Booking langsung berarti margin utuh dan data tamu menjadi milik Anda untuk pemasaran berikutnya.',
        'zeepage berbasis di Bali dan memahami karakter pasar villa di sini, dari tamu honeymoon Eropa, keluarga Australia, sampai digital nomad yang menginap bulanan. Kami membangun website villa yang cepat, multibahasa, dan dioptimalkan untuk pencarian lokal, dengan tampilan yang membuat calon tamu percaya sejak detik pertama.',
      ],
      tips: 'Tips dari zeepage untuk villa: tampilkan foto kolam dan kamar utama sebagai gambar pertama, sertakan kalender ketersediaan dan tombol WhatsApp yang selalu terlihat. Tamu internasional memutuskan dalam hitungan detik, jadi jangan biarkan mereka mencari cara menghubungi Anda.',
    },
    fiturDesc: {
      'Sistem Reservasi Online': 'Formulir pemesanan terstruktur dengan pilihan tanggal check-in, check-out, dan jumlah tamu, terkirim rapi ke email dan WhatsApp Anda.',
      'Galeri Foto & Video': 'Galeri foto resolusi tinggi dan video suasana villa yang tersusun per area, dari kolam, kamar, sampai pemandangan sekitar.',
      'Kalender Ketersediaan': 'Kalender yang menunjukkan tanggal tersedia dan terisi, sehingga tamu tidak perlu bertanya manual sebelum memesan.',
      'Integrasi Channel Manager': 'Sinkronisasi ketersediaan dengan channel manager populer agar kalender di website selaras dengan OTA dan tidak terjadi double booking.',
      'Peta & Panduan Lokasi': 'Peta interaktif plus panduan jarak ke pantai, restoran, dan bandara, menjawab pertanyaan lokasi yang selalu ditanyakan tamu.',
      'Multibahasa (ID/EN)': 'Konten dua bahasa Indonesia dan Inggris dengan struktur URL rapi, menjangkau tamu domestik dan mancanegara sekaligus.',
    },
    lokal: {
      h2: 'Memahami Pasar Villa di Bali',
      paragraf: [
        'Setiap kawasan villa di Bali punya karakter tamu yang berbeda. Ubud dicari untuk ketenangan, yoga, dan bulan madu. Canggu dan Berawa dipenuhi surfer dan digital nomad yang menginap mingguan hingga bulanan. Seminyak dan Petitenget adalah segmen premium dengan ekspektasi layanan tinggi, sementara Uluwatu tumbuh pesat untuk villa tebing dan acara pernikahan privat. Website yang baik menangkap karakter kawasan ini dalam teks dan visualnya, bukan sekadar memajang foto kamar.',
        'Musim kunjungan juga memengaruhi strategi. Pada high season, tamu memesan jauh hari dan membandingkan banyak opsi. Pada low season, penawaran long stay dan harga khusus nomad menjadi penentu. Website resmi memberi Anda ruang untuk mengatur tarif musiman, paket long stay, dan promo langsung yang tidak bisa dilakukan sebebas itu di platform OTA.',
      ],
      ilustrasi: [
        { judul: 'Villa keluarga di Sanur yang lelah membayar komisi', isi: 'Ilustrasi: sebuah villa keluarga menerima sebagian besar booking dari satu platform OTA dan membayar komisi untuk setiap tamu, termasuk tamu langganan yang kembali setiap tahun. Dengan website resmi dan reservasi langsung, tamu langganan diarahkan memesan lewat website sehingga margin per booking lebih sehat.' },
        { judul: 'Villa honeymoon di Ubud yang sulit ditemukan tamu asing', isi: 'Ilustrasi: villa kecil untuk pasangan di Ubud hanya dipromosikan lewat Instagram dan tidak muncul saat wisatawan asing mencari penginapan di Google. Website multibahasa dengan galeri dan panduan lokasi membuat villa tersebut bisa ditemukan lewat pencarian berbahasa Inggris.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website villa di Bali?', a: 'Paket landing page mulai Rp 799k, dan company profile Rp 1.499k termasuk domain .com gratis 1 tahun. Untuk villa dengan sistem reservasi online dan integrasi channel manager, biaya disesuaikan dengan fitur yang dibutuhkan dan tetap transparan sejak awal.' },
      { q: 'Berapa lama pengerjaan website villa?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu. Website dengan kalender ketersediaan dan sinkronisasi channel manager bisa membutuhkan waktu tambahan tergantung kesiapan data tarif dan foto properti Anda.' },
      { q: 'Apakah tamu bisa booking dan bayar langsung di website?', a: 'Bisa. Kami bisa memasang formulir reservasi yang terhubung ke WhatsApp dan email, kalender ketersediaan, dan bila dibutuhkan integrasi channel manager agar tanggal terisi di OTA otomatis tertutup di website, begitu juga sebaliknya.' },
      { q: 'Apakah website villa saya bisa ditemukan wisatawan di Google?', a: 'Kami menulis judul, deskripsi, dan konten yang menargetkan pencarian bertema villa dan kawasan Anda, misalnya villa di Ubud atau villa di Canggu, dilengkapi struktur data LocalBusiness. Cara ini membantu Google memahami lokasi dan layanan villa Anda untuk pencarian lokal.' },
      { q: 'Bagaimana proses pembuatan websitenya?', a: 'Dimulai dari konsultasi gratis untuk memahami karakter villa dan target tamu Anda. Setelah kesepakatan dan DP 50 persen, kami kerjakan desain dan konten dengan update progres berkala. Setelah Anda setuju, lakukan pelunasan dan website siap menerima reservasi.' },
    ],
  },
  hotel: {
    metaTitle: 'Jasa Pembuatan Website Hotel di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website hotel di Bali dengan mesin booking langsung dan manajemen tarif. Mulai Rp 799k, konsultasi gratis. Kurangi ketergantungan pada OTA.',
    keywords: ['jasa pembuatan website hotel di bali', 'jasa bikin website hotel bali', 'website hotel booking langsung', 'jasa website reservasi hotel', 'pembuatan website hotel nusa dua', 'jasa pembuatan website resort bali', 'web developer hotel bali', 'website hotel multibahasa'],
    heroLead: 'Wisatawan yang menginap di Bali hampir selalu membandingkan harga di OTA dengan website resmi hotel sebelum memesan. Website hotel dengan mesin booking langsung memberi tamu alasan memesan tanpa perantara: tarif terbaik, promo khusus member, dan informasi fasilitas yang lengkap. zeepage membangun website hotel yang cepat, elegan, dan siap mengubah pengunjung menjadi tamu.',
    intro: {
      h2: 'Website Resmi adalah Saluran Booking Termurah Hotel Anda',
      paragraf: [
        'Komisi OTA yang dibayar hotel untuk setiap kamar terjual adalah biaya yang terus berulang setiap bulan. Lebih dari itu, hubungan dengan tamu menjadi milik platform: hotel tidak memegang data tamu untuk program loyalitas atau penawaran kembali. Hotel yang hanya mengandalkan OTA akan selalu berada dalam perang harga dengan kompetitor di halaman yang sama.',
        'Website resmi dengan booking engine langsung memutus rantai itu. Tamu yang menemukan hotel Anda dari Google Maps, media sosial, atau rekomendasi bisa langsung memeriksa ketersediaan kamar, melihat tarif per tanggal, dan menyelesaikan reservasi di tempat yang sama. Anda bisa menambahkan nilai yang tidak tersedia di OTA, seperti late check-out gratis atau sarapan untuk pemesanan langsung, tanpa melanggar aturan parity.',
        'zeepage merancang website hotel dengan standar visual industri hospitality Bali: fotografi besar, tipografi bersih, dan alur booking sesingkat mungkin. Strukturnya mendukung banyak tipe kamar, tarif musiman, promo, dan dua bahasa, sehingga tim Anda mudah mengelola konten tanpa bergantung pada developer setiap ada perubahan harga.',
      ],
      tips: 'Tips dari zeepage untuk hotel: letakkan widget cek ketersediaan yang selalu terlihat di bagian atas halaman dan samakan tarif website dengan tarif OTA, lalu tambahkan satu keuntungan eksklusif untuk booking langsung. Kombinasi ini adalah pendorong konversi paling efektif untuk hotel.',
    },
    fiturDesc: {
      'Mesin Booking Langsung': 'Alur reservasi lengkap dari cek ketersediaan, pilih kamar, sampai konfirmasi, sehingga tamu tidak perlu berpindah ke platform lain.',
      'Manajemen Kamar & Tarif': 'Panel pengelolaan tipe kamar, kapasitas, fasilitas, dan tarif per musim yang mudah diperbarui oleh tim hotel Anda sendiri.',
      'Galeri Fasilitas': 'Galeri terstruktur untuk kolam, restoran, spa, ruang meeting, dan fasilitas lain dengan foto besar yang menjual pengalaman menginap.',
      'Promo & Paket Menginap': 'Halaman promo dan paket seperti honeymoon, family stay, atau long stay yang mudah dibuat dan dijadwalkan tampilnya.',
      'Integrasi PMS': 'Kemungkinan integrasi dengan property management system dan channel manager agar ketersediaan kamar selalu sinkron di semua saluran.',
      'Multibahasa (ID/EN)': 'Seluruh konten tersedia dalam Bahasa Indonesia dan Inggris, penting untuk tamu internasional yang mendominasi pasar hotel Bali.',
    },
    lokal: {
      h2: 'Karakter Pasar Hotel di Bali',
      paragraf: [
        'Bali menampung spektrum hotel yang sangat lebar, dari resort bintang lima di Nusa Dua dan Jimbaran, hotel keluarga di Sanur dan Kuta, sampai boutique hotel di Ubud dan Canggu. Masing-masing segmen punya perilaku pemesanan berbeda: tamu resort memesan jauh hari lewat riset panjang, tamu boutique hotel banyak datang dari pencarian Google dan media sosial, sementara tamu bisnis dan MICE menilai kelengkapan ruang acara. Website hotel harus berbicara dengan bahasa segmennya masing-masing.',
        'Persaingan lokalnya juga khas. Wisatawan sering membuka Google Maps dan mencari hotel di sekitar kawasan tujuan mereka, lalu memeriksa website resmi untuk memastikan fasilitas dan harga. Hotel tanpa website resmi yang meyakinkan akan kalah di langkah terakhir ini, sekalipun peringkatnya di OTA cukup baik.',
      ],
      ilustrasi: [
        { judul: 'Boutique hotel di Ubud yang ingin menaikkan booking langsung', isi: 'Ilustrasi: sebuah boutique hotel menerima hampir seluruh reservasi dari OTA dan ingin membangun saluran langsung. Website baru dengan mesin booking, galeri spa dan yoga, serta paket menginap membuat tamu dari pencarian Google bisa memesan tanpa perantara.' },
        { judul: 'Hotel keluarga di Sanur yang kesulitan mengelola promo', isi: 'Ilustrasi: hotel keluarga ingin menjalankan promo school holiday dan long stay, tetapi materi promo hanya bisa disebar lewat media sosial. Halaman promo di website resmi membuat penawaran mudah ditemukan calon tamu yang sedang membandingkan hotel di kawasan Sanur.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website hotel di Bali?', a: 'Paket dasar mulai Rp 799k untuk landing page dan Rp 1.499k untuk company profile termasuk domain .com gratis 1 tahun. Website hotel dengan mesin booking langsung dan integrasi PMS dihitung berdasarkan jumlah tipe kamar dan sistem yang dihubungkan, dengan rincian transparan di awal.' },
      { q: 'Berapa lama pengerjaan website hotel?', a: 'Landing page selesai sekitar 1-2 minggu dan company profile 2-4 minggu. Proyek dengan booking engine dan integrasi channel manager atau PMS umumnya memerlukan waktu tambahan untuk pengujian alur reservasi sampai benar-benar siap dipakai.' },
      { q: 'Apakah booking di website bisa sinkron dengan OTA?', a: 'Bisa, melalui integrasi channel manager atau PMS yang umum dipakai hotel di Bali. Ketersediaan kamar yang terjual di satu saluran akan menutup tanggal di saluran lain, sehingga risiko overbooking jauh berkurang.' },
      { q: 'Apakah staf hotel bisa mengubah tarif dan promo sendiri?', a: 'Bisa. Struktur website dirancang agar tim Anda dapat memperbarui tarif per musim, foto kamar, dan halaman promo tanpa keahlian teknis. Kami juga memberikan panduan singkat pengelolaan konten setelah website serah terima.' },
      { q: 'Bagaimana website membantu hotel muncul di pencarian lokal Bali?', a: 'Kami mengoptimalkan judul, deskripsi, dan konten untuk pencarian seperti hotel di Sanur atau hotel di Ubud, melengkapi struktur data LocalBusiness, dan menyarankan kelengkapan profil Google Business. Kombinasi ini membantu Google menampilkan hotel Anda untuk pencarian berbasis kawasan.' },
    ],
  },
  properti: {
    metaTitle: 'Jasa Pembuatan Website Properti di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website properti di Bali dengan listing terfilter, virtual tour, dan inquiry WhatsApp. Mulai Rp 799k, konsultasi gratis untuk agen dan developer.',
    keywords: ['jasa pembuatan website properti di bali', 'jasa bikin website real estate bali', 'website listing properti bali', 'jasa website agen properti', 'pembuatan website jual villa bali', 'website properti leasehold bali', 'web developer properti bali', 'website developer perumahan bali'],
    heroLead: 'Pembeli properti di Bali, terutama investor dan ekspatriat, memulai pencarian dari Google jauh sebelum menghubungi agen. Website properti dengan listing rapi, filter harga dan kawasan, serta virtual tour membuat portofolio Anda terlihat kredibel dan mudah dijelajahi. zeepage membangun website properti yang mengubah pencarian menjadi inquiry WhatsApp yang serius.',
    intro: {
      h2: 'Kenapa Agen Properti di Bali Tidak Bisa Mengandalkan Grup dan Marketplace Saja',
      paragraf: [
        'Banyak agen dan developer properti di Bali memasarkan listing hanya lewat grup Facebook, marketplace, dan broadcast WhatsApp. Cara ini membuat listing tercecer, cepat tenggelam oleh postingan baru, dan sulit dibagikan secara profesional kepada calon pembeli di luar negeri. Lebih penting lagi, tidak ada satu tempat resmi yang membangun kepercayaan bahwa bisnis Anda nyata dan berpengalaman.',
        'Website properti menyelesaikan ketiganya sekaligus. Semua listing tampil dalam katalog dengan filter kawasan, harga, jumlah kamar, dan status freehold atau leasehold. Setiap properti punya halaman sendiri dengan galeri, virtual tour, peta lokasi, dan tombol inquiry yang langsung membuka WhatsApp. Calon pembeli dari Australia, Eropa, atau Jakarta bisa menelusuri portofolio Anda kapan saja dan menghubungi saat sudah serius.',
        'zeepage memahami pasar properti Bali yang unik: perbedaan freehold dan leasehold, kawasan favorit ekspatriat seperti Berawa dan Uluwatu, serta kebutuhan konten dua bahasa. Kami merancang website yang tampil premium, cepat dibuka dari luar negeri, dan terstruktur agar listing mudah ditemukan lewat pencarian Google berbasis kawasan.',
      ],
      tips: 'Tips dari zeepage untuk properti: tulis setiap listing dengan format konsisten, harga dan status tanah selalu terlihat, foto cover berupa tampak depan terbaik, dan satu tombol WhatsApp yang selalu mengikuti layar. Konsistensi format adalah yang membedakan katalog profesional dari sekadar galeri foto.',
    },
    fiturDesc: {
      'Listing Properti + Filter': 'Katalog properti dengan filter kawasan, rentang harga, tipe, jumlah kamar, dan status tanah, sehingga pembeli menemukan unit yang cocok dalam hitungan detik.',
      'Galeri & Virtual Tour': 'Galeri foto besar per listing dan dukungan tautan virtual tour 360 derajat untuk pembeli yang menilai properti dari luar negeri.',
      'Formulir Inquiry WhatsApp': 'Tombol dan formulir inquiry yang membuka WhatsApp dengan pesan otomatis berisi nama properti, mengurangi chat tanpa konteks.',
      'Peta Lokasi Properti': 'Peta interaktif per listing dan per kawasan, membantu pembeli memahami posisi properti terhadap pantai, sekolah, dan pusat aktivitas.',
      'Halaman Agen': 'Profil agen dengan foto, spesialisasi kawasan, dan daftar listing yang ditangani, membangun kepercayaan sebelum kontak pertama.',
      'Multibahasa (ID/EN)': 'Konten dua bahasa untuk menjangkau pembeli domestik dan asing, dengan struktur yang rapi untuk masing-masing versi bahasa.',
    },
    lokal: {
      h2: 'Pasar Properti Bali dan Perilaku Pembelinya',
      paragraf: [
        'Pasar properti Bali digerakkan oleh tiga kelompok besar: investor yang mengejar yield sewa di kawasan wisata, ekspatriat yang mencari tempat tinggal jangka panjang, dan pembeli gaya hidup yang ingin rumah kedua. Kawasan seperti Canggu, Berawa, Pererenan, Uluwatu, dan Ubud punya profil permintaan berbeda, dari villa investasi dekat pantai sampai tanah dan rumah di lingkungan yang lebih tenang. Website yang mengelompokkan listing per kawasan membantu setiap kelompok menemukan relevansinya dengan cepat.',
        'Karena banyak transaksi bernilai besar dimulai dari riset online lintas negara, kecepatan website dan kejelasan informasi menjadi penentu. Istilah seperti leasehold 25 tahun, hak pakai, dan IMB atau PBG perlu dijelaskan dengan bahasa yang dipahami pembeli asing. Konten edukatif semacam ini juga yang membuat website properti lebih mudah ditemukan untuk pencarian informatif, bukan hanya pencarian listing.',
      ],
      ilustrasi: [
        { judul: 'Agen independen di Canggu dengan listing tercecer', isi: 'Ilustrasi: seorang agen memasarkan belasan villa leasehold lewat grup Facebook dan chat pribadi, sehingga calon pembeli sulit melihat semua opsi sekaligus. Katalog website dengan filter harga dan kawasan membuat seluruh portofolio bisa dibagikan dalam satu tautan profesional.' },
        { judul: 'Developer villa kecil di Uluwatu yang menjual ke pasar asing', isi: 'Ilustrasi: developer dengan beberapa unit villa baru ingin menjangkau pembeli Australia dan Eropa tanpa bergantung pada pameran. Halaman proyek berbahasa Inggris dengan virtual tour dan peta lokasi memberi calon pembeli bahan riset lengkap sebelum menjadwalkan survei.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website properti di Bali?', a: 'Paket landing page mulai Rp 799k dan company profile Rp 1.499k termasuk domain .com gratis 1 tahun. Website dengan katalog listing, filter pencarian, dan halaman agen dihitung dari jumlah fitur dan listing awal, dengan penawaran transparan sebelum pengerjaan dimulai.' },
      { q: 'Berapa lama pengerjaan website properti?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu. Katalog dengan banyak listing perdana memerlukan waktu tambahan untuk input data, jadi kami biasanya memprioritaskan listing unggulan agar website bisa tayang lebih dulu.' },
      { q: 'Apakah saya bisa menambah dan mengubah listing sendiri?', a: 'Bisa. Struktur listing dirancang agar Anda dapat menambah properti baru, mengubah harga, dan menandai unit terjual atau tersewa tanpa bantuan developer. Formatnya konsisten sehingga katalog tetap rapi seiring bertambahnya listing.' },
      { q: 'Apakah website membantu listing saya ditemukan pembeli di Google?', a: 'Setiap listing memiliki halaman sendiri dengan judul dan deskripsi yang menargetkan pencarian seperti villa dijual di Berawa atau tanah leasehold di Uluwatu, dilengkapi peta dan struktur data yang jelas. Ini memberi setiap properti peluang ditemukan lewat pencarian berbasis kawasan dan tipe.' },
      { q: 'Bagaimana proses pembuatan websitenya?', a: 'Kita mulai dari konsultasi gratis untuk memetakan target pembeli dan kawasan fokus Anda. Setelah kesepakatan dan DP 50 persen, kami bangun struktur katalog dan desain, lalu Anda meninjau progresnya secara berkala sampai serah terima dan pelunasan.' },
    ],
  },
  restoran: {
    metaTitle: 'Jasa Pembuatan Website Restoran di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website restoran di Bali dengan menu digital QR, reservasi online, dan galeri hidangan. Mulai Rp 799k, konsultasi gratis untuk restoran dan kafe.',
    keywords: ['jasa pembuatan website restoran di bali', 'jasa bikin website restoran bali', 'website menu digital restoran', 'jasa website kafe bali', 'pembuatan website fine dining bali', 'website reservasi restoran', 'web developer restoran bali', 'website kuliner bali'],
    heroLead: 'Wisatawan di Bali memilih tempat makan dari Google dan Google Maps, membaca menu dan ulasan sebelum memutuskan datang. Website restoran dengan menu digital, reservasi meja, dan galeri hidangan membuat restoran Anda ditemukan dan dipilih, bukan sekadar dilewati. zeepage merancang website restoran yang membangkitkan selera sejak halaman pertama dibuka.',
    intro: {
      h2: 'Instagram Saja Tidak Cukup untuk Restoran di Bali',
      paragraf: [
        'Media sosial memang bagus untuk suasana, tetapi feed tidak bisa menampilkan menu lengkap dengan harga, jam operasional, lokasi, dan reservasi secara rapi dan permanen. Saat wisatawan mengetik restoran di Seminyak atau tempat makan di Ubud, yang muncul adalah bisnis dengan kehadiran Google yang rapi. Restoran yang hanya aktif di Instagram sering tidak ikut dalam daftar pertimbangan itu sama sekali.',
        'Website resmi menampung semua yang dibutuhkan calon tamu dalam satu tempat: menu digital yang bisa dibuka dari kode QR di meja, cerita singkat tentang konsep dan chef, galeri hidangan, peta lokasi, dan tombol reservasi meja lewat WhatsApp. Menu digital juga menghemat biaya cetak ulang setiap ada perubahan harga atau menu musiman, karena pembaruan cukup dilakukan sekali secara online.',
        'zeepage merancang website restoran dengan fotografi sebagai bintangnya: gambar besar yang menggugah, tipografi bersih, dan kecepatan muat yang baik di jaringan seluler wisatawan. Strukturnya mendukung banyak cabang, menu berbeda per waktu, dan dua bahasa untuk tamu asing yang mendominasi banyak kawasan kuliner Bali.',
      ],
      tips: 'Tips dari zeepage untuk restoran: pasang menu lengkap dengan harga langsung di website, bukan hanya tautan PDF yang berat. Menu berbentuk teks terbaca oleh Google, sehingga hidangan khas Anda bisa ikut muncul dalam hasil pencarian.',
    },
    fiturDesc: {
      'Menu Digital + QR': 'Menu online terstruktur per kategori yang terhubung ke kode QR di meja, mudah diperbarui tanpa cetak ulang saat harga atau item berubah.',
      'Reservasi Meja Online': 'Formulir reservasi dengan pilihan tanggal, jam, dan jumlah tamu yang terkirim ke WhatsApp atau email, mengurangi telepon yang terlewat saat jam sibuk.',
      'Galeri Hidangan': 'Galeri foto makanan dan suasana restoran yang tersusun menarik, menjadi bahan pertimbangan utama wisatawan yang memilih dari layar ponsel.',
      'Integrasi Google Maps': 'Peta lokasi terhubung Google Maps lengkap dengan petunjuk rute, memudahkan tamu menemukan restoran Anda dari mana pun di Bali.',
      'Promo & Event': 'Halaman promo, happy hour, dan event khusus seperti live music atau chef table yang mudah dibuat dan dijadwalkan.',
      'Pemesanan via WhatsApp': 'Tombol pemesanan dan delivery lokal yang membuka WhatsApp dengan format pesan rapi, cocok untuk tamu yang menginap di sekitar restoran.',
    },
    lokal: {
      h2: 'Peta Kuliner Bali yang Sangat Kompetitif',
      paragraf: [
        'Bali adalah salah satu panggung kuliner paling ramai di Indonesia. Jalan Kayu Aya dan Petitenget dipenuhi fine dining dan restoran internasional, Canggu dipadati kafe untuk nomad dan peselancar, Ubud kuat dengan restoran sehat dan pemandangan lembah, sementara Sanur dan Jimbaran mengandalkan keluarga serta hidangan laut. Setiap kawasan punya jam ramai dan tipe tamu sendiri, dan website yang menyebut kawasan serta konsepnya secara spesifik akan terasa jauh lebih relevan bagi pencari.',
        'Perilaku wisatawan juga berpihak pada yang siap secara digital. Banyak tamu merencanakan makan malam sejak siang hari dengan membandingkan menu dan harga dari beberapa restoran. Restoran yang menampilkan menu lengkap dan reservasi mudah cenderung dipilih lebih dulu dibanding yang informasinya harus digali dari banyak unggahan media sosial.',
      ],
      ilustrasi: [
        { judul: 'Restoran seafood di Jimbaran yang kewalahan reservasi telepon', isi: 'Ilustrasi: restoran tepi pantai menerima reservasi grup besar lewat telepon yang sering terlewat pada jam persiapan sore. Formulir reservasi online membuat permintaan grup tercatat rapi beserta jumlah tamu dan kebutuhan mejanya.' },
        { judul: 'Kafe di Canggu yang menunya tidak pernah terbaca Google', isi: 'Ilustrasi: sebuah kafe populer di kalangan nomad hanya memasang menu sebagai gambar di media sosial, sehingga tidak muncul saat orang mencari sarapan atau tempat kerja dengan wifi di Canggu. Menu digital berbentuk teks di website membuat hidangan dan fasilitasnya bisa ditemukan Google.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website restoran di Bali?', a: 'Paket landing page mulai Rp 799k dan company profile Rp 1.499k termasuk domain .com gratis 1 tahun. Website restoran dengan menu digital QR dan reservasi online disesuaikan dengan jumlah menu dan cabang, dan rinciannya selalu kami sampaikan di awal.' },
      { q: 'Berapa lama pengerjaan website restoran?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu, tergantung kesiapan foto hidangan dan data menu. Bila foto belum tersedia, kami bisa mulai dari struktur dan menu terlebih dahulu agar website cepat tayang.' },
      { q: 'Apakah menu digital bisa diperbarui sendiri oleh staf?', a: 'Bisa. Menu disusun dalam format yang mudah diubah, sehingga staf dapat mengganti harga, menambah item musiman, atau menandai menu habis tanpa keahlian teknis. Kode QR di meja tetap sama karena terhubung ke halaman menu yang selalu terbaru.' },
      { q: 'Bagaimana website membantu restoran ditemukan wisatawan?', a: 'Kami mengoptimalkan halaman untuk pencarian seperti restoran di Seminyak atau kafe di Canggu, menampilkan menu dalam format teks yang terbaca Google, dan menghubungkan lokasi ke Google Maps. Ditambah profil Google Business yang rapi, restoran Anda lebih mudah masuk pertimbangan wisatawan.' },
      { q: 'Apakah bisa untuk restoran dengan beberapa cabang?', a: 'Bisa. Setiap cabang dapat memiliki halaman lokasi sendiri dengan menu, jam operasional, dan peta masing-masing, sementara identitas brand tetap satu. Struktur ini juga baik untuk pencarian per kawasan tempat cabang Anda berada.' },
    ],
  },
  'beach-club': {
    metaTitle: 'Jasa Website Beach Club di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website beach club di Bali dengan reservasi daybed, kalender event, dan galeri suasana. Mulai Rp 799k, konsultasi gratis untuk beach club Anda.',
    keywords: ['jasa pembuatan website beach club di bali', 'jasa bikin website beach club bali', 'website reservasi daybed bali', 'jasa website club bali', 'pembuatan website beach club canggu', 'website event beach club', 'web developer beach club bali', 'website nightlife bali'],
    heroLead: 'Beach club di Bali bersaing lewat pengalaman: sunset, line-up DJ, dan suasana yang harus sudah terasa sejak calon tamu membuka website. Website beach club dengan reservasi daybed, kalender event, dan galeri imersif mengubah rasa penasaran menjadi pemesanan. zeepage membangun website beach club yang semeriah acaranya dan semudah mungkin untuk reservasi.',
    intro: {
      h2: 'Beach Club Menjual Pengalaman, dan Penjualannya Dimulai dari Website',
      paragraf: [
        'Tamu beach club jarang datang secara spontan tanpa riset. Mereka memeriksa lokasi daybed, minimum spend, jadwal DJ, dan suasana dari foto sebelum memutuskan, apalagi untuk rombongan dan perayaan khusus. Bila semua informasi itu hanya tersebar di unggahan media sosial yang cepat tenggelam, banyak calon tamu beralih ke kompetitor yang informasinya lebih mudah ditemukan.',
        'Website resmi memberi satu panggung tetap untuk seluruh pengalaman Anda: denah area dan pilihan daybed atau cabana, formulir reservasi dan guestlist, kalender event yang selalu terbaru, menu dan bottle service, sampai galeri yang menangkap suasana golden hour khas pantai Bali. Tamu internasional bisa merencanakan kunjungan jauh hari, dan tim Anda menerima reservasi dalam format yang rapi, bukan rangkaian chat yang berserakan.',
        'zeepage merancang website beach club dengan energi visual tinggi tetapi tetap cepat dan mudah dipakai dari ponsel, karena mayoritas tamu membuka dari perjalanan. Kami memahami ritme industri ini, dari sunset session harian sampai event besar dengan DJ internasional, dan menyiapkan struktur yang memudahkan tim Anda memperbarui jadwal setiap minggu.',
      ],
      tips: 'Tips dari zeepage untuk beach club: tampilkan kalender event dan tombol reservasi daybed dalam jangkauan pertama layar. Tamu yang datang dari pencarian umumnya sudah tahu tanggal kunjungan mereka, jadi persingkat jalan dari rasa tertarik menuju pemesanan.',
    },
    fiturDesc: {
      'Reservasi Daybed & Meja': 'Formulir pemesanan daybed, cabana, dan meja dengan pilihan area, tanggal, dan jumlah tamu, lengkap dengan informasi minimum spend.',
      'Kalender Event & DJ': 'Kalender acara yang mudah diperbarui untuk sunset session, resident DJ, dan event khusus, dengan halaman detail per acara.',
      'Galeri Suasana': 'Galeri foto dan video besar yang menangkap suasana siang, sunset, dan malam, faktor penentu utama pilihan tamu.',
      'Menu & Bottle Service': 'Daftar menu makanan, minuman, dan paket bottle service yang rapi dan mudah diperbarui mengikuti musim dan event.',
      'Integrasi Instagram': 'Umpan Instagram tertanam agar konten harian Anda ikut mengisi website dan memberi bukti suasana terbaru tanpa kerja ganda.',
      'Tiket & Guestlist': 'Formulir guestlist dan dukungan tautan penjualan tiket untuk event khusus, membantu Anda membaca antusiasme sejak awal.',
    },
    lokal: {
      h2: 'Panggung Beach Club Bali dari Canggu sampai Uluwatu',
      paragraf: [
        'Garis pantai barat Bali adalah etalase beach club dunia. Petitenget dan Seminyak dikenal untuk pengalaman premium yang mapan, Berawa dan Canggu untuk energi muda dan komunitas nomad, sementara Uluwatu menawarkan dramatisnya tebing dan klub siang yang ikonik. Di sisi lain, Sanur mulai tumbuh dengan suasana yang lebih santai. Setiap lokasi menarik kerumunan berbeda, dan website yang menegaskan posisi serta karakter venue Anda membantu tamu yang tepat memilih Anda, bukan sekadar yang paling dekat.',
        'Sifat bisnisnya sangat musiman dan berbasis momen. High season, libur panjang, dan event khusus bisa menentukan pemasukan berbulan-bulan. Website yang lincah, dengan halaman event dan reservasi yang siap jauh hari, memberi Anda keunggulan saat wisatawan merencanakan perjalanan mereka dari negara asal.',
      ],
      ilustrasi: [
        { judul: 'Beach club di Berawa yang reservasinya berantakan di chat', isi: 'Ilustrasi: sebuah beach club menerima permintaan daybed dari banyak saluran chat sehingga staf kesulitan merangkum kebutuhan rombongan pada akhir pekan. Formulir reservasi terpusat membuat semua permintaan masuk dengan format tanggal, area, dan jumlah tamu yang seragam.' },
        { judul: 'Venue sunset di Uluwatu yang event-nya sulit ditemukan', isi: 'Ilustrasi: venue tebing rutin menggelar sesi DJ internasional, tetapi informasinya hanya muncul sesaat di media sosial dan terlewat oleh wisatawan yang merencanakan perjalanan sebulan sebelumnya. Kalender event di website membuat jadwal jangka panjang bisa ditemukan lewat pencarian Google.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website beach club di Bali?', a: 'Paket landing page mulai Rp 799k dan company profile Rp 1.499k termasuk domain .com gratis 1 tahun. Untuk beach club dengan reservasi daybed dan kalender event, biaya disesuaikan dengan kompleksitas alur pemesanan dan akan dirinci transparan sebelum pengerjaan.' },
      { q: 'Berapa lama pengerjaan website beach club?', a: 'Landing page umumnya 1-2 minggu dan company profile 2-4 minggu. Bila materi foto dan video suasana sudah siap, proses bisa berjalan lebih cepat. Fitur reservasi dan guestlist kami uji bersama tim Anda sebelum website tayang.' },
      { q: 'Apakah tim kami bisa memperbarui jadwal event sendiri?', a: 'Bisa. Kalender event dan halaman promo dirancang agar mudah diperbarui oleh tim internal tanpa keahlian teknis, termasuk menambah line-up DJ dan mengubah jam acara. Ini penting karena jadwal beach club berubah hampir setiap minggu.' },
      { q: 'Bagaimana website membantu tamu asing menemukan beach club kami?', a: 'Kami menyusun konten dua bahasa dengan target pencarian seperti beach club di Canggu atau sunset bar di Uluwatu, menautkan lokasi ke Google Maps, dan melengkapi struktur data bisnis lokal. Tamu yang merencanakan dari luar negeri pun bisa menemukan dan memesan lebih dulu.' },
      { q: 'Apakah website bisa menampilkan minimum spend dan denah area?', a: 'Bisa. Setiap tipe tempat duduk dapat dijelaskan dengan kapasitas, posisi terhadap kolam atau pantai, dan minimum spend-nya, sehingga tamu memahami pilihan sebelum mengisi formulir reservasi dan tim Anda menerima tamu yang ekspektasinya sudah tepat.' },
    ],
  },
  'tour-travel': {
    metaTitle: 'Jasa Website Tour & Travel di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website tour dan travel di Bali dengan katalog paket, booking online, dan itinerary detail. Mulai Rp 799k, konsultasi gratis untuk operator tour.',
    keywords: ['jasa pembuatan website tour travel di bali', 'jasa bikin website travel bali', 'website paket tour bali', 'jasa website agen travel', 'pembuatan website tour nusa penida', 'website booking tour bali', 'web developer travel bali', 'website private tour bali'],
    heroLead: 'Wisatawan merencanakan liburan Bali dari negara asal, membandingkan itinerary, harga, dan ulasan jauh sebelum tiba. Website tour dan travel dengan katalog paket, jadwal booking, dan itinerary detail membuat bisnis Anda terlihat profesional dan mudah dipesan. zeepage membangun website travel yang mengubah pencari paket tour menjadi tamu yang membayar DP.',
    intro: {
      h2: 'Operator Tour Bali Rugi Jika Hanya Mengandalkan Chat dan Brosur Digital',
      paragraf: [
        'Banyak operator tour di Bali menjual paket lewat chat WhatsApp, unggahan media sosial, dan perantara hotel atau sopir. Akibatnya, penjelasan paket yang sama harus diketik berulang-ulang, harga mudah dibocorkan kompetitor tanpa konteks nilai, dan tidak ada katalog resmi yang bisa dibagikan kepada calon tamu atau mitra agen di luar negeri. Saat wisatawan membandingkan beberapa operator, yang tampil paling rapi biasanya yang dipilih.',
        'Website resmi merapikan seluruh proses itu. Setiap paket tour tampil dengan itinerary per jam, titik jemput, termasuk dan tidak termasuk, galeri destinasi, serta formulir booking dengan pilihan tanggal. Calon tamu bisa mempelajari paket day trip ke Nusa Penida, tur budaya Ubud, atau paket multi hari keliling Bali tanpa menunggu balasan chat, lalu memesan dan membayar DP secara online.',
        'zeepage merancang website tour dan travel yang cepat, multibahasa, dan mudah dikelola oleh operator kecil sekalipun. Harga paket, jadwal, dan halaman destinasi dapat diperbarui sendiri, sementara struktur kontennya membantu setiap paket ditemukan untuk pencarian spesifik yang memang diketik wisatawan saat merencanakan liburan.',
      ],
      tips: 'Tips dari zeepage untuk tour dan travel: tulis itinerary dalam format jam yang jelas dan tampilkan harga mulai dari pada setiap paket. Wisatawan membandingkan banyak operator sekaligus, dan paket tanpa gambaran harga serta jadwal hampir selalu dilewati.',
    },
    fiturDesc: {
      'Katalog Paket Tour': 'Daftar paket terstruktur per kategori seperti day trip, multi hari, dan private tour, lengkap dengan harga mulai dari dan durasi.',
      'Booking & Jadwal Online': 'Formulir pemesanan dengan pilihan tanggal, jumlah peserta, dan titik jemput yang terkirim rapi ke WhatsApp dan email Anda.',
      'Galeri Destinasi': 'Galeri foto per destinasi seperti Nusa Penida, Ubud, dan Tanah Lot yang menjual pengalaman sebelum tamu membaca detailnya.',
      'Itinerary Detail': 'Rincian perjalanan per jam untuk setiap paket, termasuk termasuk dan tidak termasuk, agar tamu tahu persis apa yang mereka beli.',
      'Pembayaran DP Online': 'Dukungan tautan dan instruksi pembayaran uang muka yang jelas di halaman konfirmasi, mempercepat komitmen tamu setelah memilih paket.',
      'Multibahasa (ID/EN)': 'Konten Bahasa Indonesia dan Inggris untuk menjangkau wisatawan asing yang merencanakan perjalanan langsung tanpa agen perantara.',
    },
    lokal: {
      h2: 'Pola Perjalanan Wisatawan di Bali',
      paragraf: [
        'Liburan Bali punya pola yang berulang dan bisa dipetakan. Wisatawan pertama kali hampir selalu mengambil kombinasi Ubud, Tanah Lot, dan Uluwatu. Penggemar pantai dan fotografi mengejar day trip Nusa Penida dengan titik ikoniknya. Tamu keluarga memilih jadwal longgar dengan sopir privat, sementara penyelam dan pendaki menargetkan Amed, Tulamben, dan Gunung Batur untuk matahari terbit. Website yang menyusun paket mengikuti pola nyata ini terasa langsung relevan di mata calon tamu.',
        'Basis operasionalnya pun tersebar: banyak operator berangkat dari Denpasar, Sanur untuk penyeberangan ke Nusa Penida dan Nusa Lembongan, serta kawasan penginapan utama di Bali selatan untuk penjemputan. Menampilkan area jemput, estimasi waktu perjalanan, dan opsi private atau sharing secara transparan mengurangi pertanyaan berulang dan meningkatkan kepercayaan sejak halaman paket pertama.',
      ],
      ilustrasi: [
        { judul: 'Operator day trip Nusa Penida yang kewalahan menjawab chat', isi: 'Ilustrasi: operator kecil mengirim penjelasan itinerary dan harga yang sama ke puluhan calon tamu setiap hari lewat chat. Katalog paket online membuat calon tamu membaca detail sendiri dan hanya menghubungi saat siap memesan tanggal.' },
        { judul: 'Penyedia private tour di Ubud yang ingin menjual langsung ke tamu asing', isi: 'Ilustrasi: penyedia tur privat selama ini bergantung pada rekomendasi hotel dan sopir perantara. Website berbahasa Inggris dengan paket multi hari dan pembayaran DP online membuka saluran penjualan langsung dari wisatawan yang merencanakan perjalanan dari negaranya.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website tour dan travel di Bali?', a: 'Paket landing page mulai Rp 799k dan company profile Rp 1.499k termasuk domain .com gratis 1 tahun. Website dengan katalog paket lengkap dan booking online disesuaikan dengan jumlah paket awal, dan penawarannya kami rincikan sebelum pengerjaan dimulai.' },
      { q: 'Berapa lama pengerjaan website travel?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu. Jumlah paket yang diinput di awal memengaruhi waktu, jadi kami biasanya menayangkan paket terlaris lebih dahulu, lalu melengkapi sisanya secara bertahap.' },
      { q: 'Apakah saya bisa mengubah harga dan itinerary sendiri?', a: 'Bisa. Struktur paket dirancang agar Anda dapat memperbarui harga, jadwal, dan rincian itinerary tanpa keahlian teknis. Ini penting karena tarif transportasi dan tiket destinasi di Bali dapat berubah mengikuti musim.' },
      { q: 'Bagaimana website membantu paket saya ditemukan wisatawan?', a: 'Setiap paket memiliki halaman sendiri dengan judul dan konten yang menargetkan pencarian nyata seperti day trip Nusa Penida atau private tour Ubud, dilengkapi galeri destinasi dan itinerary yang kaya kata kunci alami. Halaman seperti ini menjawab persis yang diketik wisatawan saat merencanakan liburan.' },
      { q: 'Apakah tamu bisa membayar DP lewat website?', a: 'Bisa kami siapkan alur konfirmasi yang menyertakan instruksi dan tautan pembayaran DP setelah formulir booking terkirim, sehingga tamu segera mengunci tanggal. Detail metode pembayaran disesuaikan dengan rekening dan kanal yang biasa Anda gunakan.' },
    ],
  },
wedding: {
    metaTitle: 'Jasa Pembuatan Website Wedding di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website wedding di Bali untuk wedding organizer dan venue. Tampilan elegan dan siap menerima konsultasi. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website wedding di bali', 'jasa bikin website wedding organizer bali', 'website venue wedding bali', 'jasa website pernikahan bali', 'web designer wedding bali', 'pembuatan website wo bali', 'website wedding planner indonesia'],
    heroLead: 'Bali adalah salah satu destinasi wedding paling dicari di dunia, dari tebing Uluwatu dan hutan Ubud sampai pantai Nusa Dua. Calon pengantin dari Australia, Singapura, dan Eropa meriset vendor jauh sebelum terbang ke sini, dan keputusan mereka hampir selalu dimulai dari website yang mereka temukan di Google.',
    intro: {
      h2: 'Kenapa Bisnis Wedding di Bali Wajib Punya Website Sendiri',
      paragraf: [
        'Banyak wedding organizer dan venue di Bali mengandalkan Instagram sebagai satu-satunya etalase. Masalahnya, calon pengantin luar negeri tidak merencanakan pernikahan ratusan juta hanya dari feed media sosial. Mereka membandingkan portofolio lengkap, membaca detail paket, mengecek ketersediaan venue, lalu menghubungi vendor yang terlihat paling profesional dan mudah dihubungi.',
        'Website memberi Anda panggung yang tidak dimiliki media sosial: galeri wedding utuh per acara, halaman paket dan venue yang rapi, formulir konsultasi yang langsung masuk ke WhatsApp, serta versi bahasa Inggris untuk pasar internasional. Semua itu tampil meyakinkan kapan pun calon klien membuka, tanpa tenggelam oleh algoritma.',
        'zeepage merancang website wedding dengan estetika yang sekelas acaranya: foto besar, tipografi elegan, dan alur konsultasi yang singkat. Sebagai jasa pembuatan website wedding di bali, kami memahami cara calon pengantin mancanegara menilai vendor, dan website Anda dibangun untuk memenangkan penilaian itu.',
      ],
      tips: 'Tips dari zeepage: tampilkan satu galeri wedding utuh dari persiapan sampai resepsi, bukan hanya foto terbaik yang tercecer. Calon pengantin menilai konsistensi hasil kerja Anda dari satu acara penuh, dan itu yang membuat mereka berani booking dari luar negeri.',
    },
    fiturDesc: {
      'Portofolio Galeri Wedding': 'Galeri foto dan video per acara wedding yang tersusun rapi per tema, venue, dan jumlah tamu, agar calon pengantin bisa membayangkan hari mereka sendiri.',
      'Paket & Venue': 'Halaman paket wedding dan daftar venue partner lengkap dengan kapasitas, fasilitas, dan kisaran layanan, sehingga calon klien paham penawaran Anda sejak kunjungan pertama.',
      'Formulir Konsultasi': 'Formulir konsultasi singkat berisi tanggal acara, jumlah tamu, dan konsep yang diinginkan, terhubung langsung ke WhatsApp agar follow up terasa cepat dan personal.',
      'Testimoni Klien': 'Ruang khusus untuk menampilkan testimoni dan ulasan pasangan yang pernah Anda layani, lengkap dengan foto acara, sebagai bukti sosial yang meyakinkan calon klien baru.',
      'Vendor Partner': 'Halaman daftar vendor partner seperti dekorasi, katering, fotografi, dan MUA, menunjukkan bahwa Anda didukung tim lengkap untuk hari besar klien.',
      'Multibahasa (ID/EN)': 'Versi bahasa Indonesia dan Inggris dalam satu website, karena mayoritas calon pengantin destination wedding di Bali adalah pasangan internasional.',
    },
    lokal: {
      h2: 'Pasar Destination Wedding Bali yang Terus Dicari Dunia',
      paragraf: [
        'Setiap kawasan wedding di Bali punya karakter pasar sendiri. Uluwatu menjual dramatisnya tebing dan sunset untuk upacara intim, Ubud menawarkan nuansa hutan dan sungai untuk konsep tropis yang tenang, sedangkan Nusa Dua dan Jimbaran menjadi favorit resepsi besar di resort dan beachfront venue. Website yang baik menangkap karakter kawasan tempat Anda beroperasi, bukan sekadar menempel kata Bali.',
        'Calon pengantin internasional biasanya mulai riset 9 sampai 18 bulan sebelum hari H, membandingkan belasan vendor lewat Google dan Pinterest. Di fase inilah website menentukan apakah bisnis Anda masuk daftar pendek atau terlewat begitu saja. Jasa pembuatan website wedding di bali yang memahami perilaku riset ini akan menyusun konten Anda untuk menjawab pertanyaan mereka sejak halaman pertama.',
      ],
      ilustrasi: [
        { judul: 'Wedding organizer yang hanya tampil di Instagram', isi: 'Ilustrasi: sebuah wedding organizer di Canggu kebanjiran pertanyaan berulang soal harga dan paket lewat DM, dan sebagian calon klien hilang karena balasan lambat. Setelah punya website dengan halaman paket dan formulir konsultasi, pertanyaan dasar sudah terjawab sebelum chat pertama, dan percakapan langsung masuk ke tahap serius.' },
        { judul: 'Venue villa yang ingin booking langsung', isi: 'Ilustrasi: sebuah villa wedding di Uluwatu bergantung pada listing pihak ketiga untuk mendapatkan booking. Dengan website sendiri berisi galeri venue, kalender ketersediaan sederhana, dan tombol konsultasi, calon pengantin bisa menilai dan menghubungi langsung tanpa perantara.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website wedding di Bali?', a: 'Paket landing page mulai Rp 799k, cocok untuk wedding organizer yang baru butuh halaman perkenalan dan formulir konsultasi. Paket company profile Rp 1.499k sudah termasuk domain .com gratis 1 tahun dan halaman lengkap berisi galeri, paket, venue, serta versi dua bahasa bila dibutuhkan.' },
      { q: 'Berapa lama pengerjaan website wedding?', a: 'Landing page selesai dalam 1-2 minggu, sedangkan company profile lengkap 2-4 minggu tergantung jumlah galeri dan halaman venue. Materi foto wedding biasanya menjadi faktor penentu kecepatan, jadi siapkan folder foto terbaik Anda sejak awal.' },
      { q: 'Apakah website wedding saya bisa tampil untuk calon pengantin luar negeri?', a: 'Bisa. Kami menyiapkan versi bahasa Inggris dan struktur konten yang menjawab cara calon pengantin internasional mencari vendor, termasuk kata kunci kawasan seperti Uluwatu, Ubud, dan Nusa Dua. Ditambah profil Google Business yang rapi, peluang ditemukan dari luar negeri jauh lebih besar.' },
      { q: 'Fitur apa yang paling penting untuk website wedding organizer?', a: 'Tiga yang utama: galeri portofolio per acara, halaman paket dan venue yang jelas, serta formulir konsultasi yang terhubung ke WhatsApp. Ketiganya menjawab pertanyaan terbesar calon pengantin sebelum mereka memutuskan menghubungi Anda.' },
      { q: 'Bagaimana proses pembuatan websitenya?', a: 'Dimulai dari konsultasi gratis untuk memahami gaya dan target pasar Anda, lalu kami susun struktur halaman dan desain. Anda cukup menyiapkan foto, daftar paket, dan daftar venue, sisanya kami kerjakan dengan update progres berkala sampai website tayang.' },
    ],
  },
  spa: {
    metaTitle: 'Jasa Pembuatan Website Spa di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website spa di Bali dengan booking online, daftar harga, dan galeri suasana. Mulai Rp 799k, konsultasi gratis untuk bisnis spa Anda.',
    keywords: ['jasa pembuatan website spa di bali', 'jasa bikin website spa bali', 'website booking spa online', 'jasa website wellness bali', 'web designer spa seminyak', 'pembuatan website massage bali', 'website spa profesional'],
    heroLead: 'Dari spa premium di Seminyak sampai retreat wellness di Ubud, tamu spa di Bali hampir selalu memesan sebelum datang. Mereka membandingkan harga treatment, membaca suasana tempatnya, dan memilih spa yang paling mudah di-booking dari hasil pencarian Google.',
    intro: {
      h2: 'Spa di Bali Menang dari Kemudahan Booking, Bukan Sekadar Lokasi',
      paragraf: [
        'Persaingan spa di kawasan seperti Seminyak, Canggu, dan Ubud sangat ketat, dan wisatawan tidak berjalan kaki membandingkan satu per satu. Mereka membuka Google, melihat beberapa pilihan teratas, lalu memesan yang websitenya jelas: ada daftar treatment, harga transparan, dan tombol booking yang bekerja. Spa tanpa website resmi mudah terlewat, atau hanya ditemukan lewat listing pihak ketiga yang tidak bisa Anda kendalikan penuh.',
        'Website mengubah cara tamu menemukan dan memesan layanan Anda. Daftar harga dan paket yang rapi mengurangi pertanyaan berulang, galeri suasana menjual pengalaman sebelum tamu tiba, dan booking online menangkap reservasi bahkan di luar jam operasional. Semua terhubung ke WhatsApp yang sudah dipakai tim Anda setiap hari.',
        'zeepage membangun website spa dengan nuansa visual yang tenang dan premium, selaras dengan pengalaman yang Anda jual. Sebagai jasa pembuatan website spa di bali, kami menyusun setiap halaman agar wisatawan yang sedang merencanakan liburan bisa menemukan, percaya, dan memesan dalam sekali kunjungan.',
      ],
      tips: 'Tips dari zeepage: cantumkan harga treatment secara terbuka di website. Wisatawan asing sangat menghindari spa yang harganya harus ditanya dulu lewat chat, dan daftar harga yang jelas adalah pembeda paling cepat dari kompetitor di kawasan Anda.',
    },
    fiturDesc: {
      'Booking Treatment Online': 'Sistem pemesanan treatment berdasarkan tanggal, jam, dan jenis layanan yang terhubung ke WhatsApp, sehingga reservasi tercatat rapi tanpa perlu aplikasi tambahan.',
      'Daftar Harga & Paket': 'Halaman daftar treatment dan paket lengkap dengan durasi dan harga, mudah diperbarui kapan pun ada perubahan harga atau treatment baru.',
      'Galeri Suasana Spa': 'Galeri foto ruang treatment, terapis, dan detail suasana spa Anda, disusun untuk menjual ketenangan dan kualitas sejak tamu pertama kali membuka website.',
      'Gift Voucher': 'Halaman gift voucher untuk tamu yang ingin menghadiahkan treatment kepada pasangan atau keluarga, lengkap dengan alur pembelian sederhana lewat WhatsApp.',
      'Promo Member': 'Bagian khusus promo dan keanggotaan untuk pelanggan tetap seperti ekspatriat dan warga lokal, agar kunjungan berulang terus terjaga.',
      'Integrasi WhatsApp': 'Tombol WhatsApp yang selalu terlihat di setiap halaman, terhubung ke nomor admin spa Anda untuk konfirmasi booking dan pertanyaan cepat.',
    },
    lokal: {
      h2: 'Wellness Tourism Bali dan Cara Tamu Memilih Spa',
      paragraf: [
        'Bali adalah salah satu ibu kota wellness dunia. Ubud dipenuhi tamu yoga dan retreat yang mencari spa bernuansa alam, Seminyak dan Petitenget melayani wisatawan premium yang mengejar pengalaman mewah, sementara Canggu menjadi rumah para digital nomad yang menjadikan pijat dan recovery sebagai rutinitas mingguan. Setiap segmen ini mencari dan memesan dengan cara yang berbeda, dan website Anda perlu berbicara kepada mereka semua.',
        'Pola pemesanan tamu asing juga khas: mereka meriset spa dari negara asal atau dari hotel, membaca ulasan, membandingkan harga, lalu booking untuk hari tertentu. Spa yang muncul dengan website rapi dan harga jelas di fase riset ini memenangkan reservasi jauh sebelum tamu tiba di Bali. Di situlah jasa pembuatan website spa di bali memberi keunggulan nyata atas kompetitor yang hanya mengandalkan papan nama dan media sosial.',
      ],
      ilustrasi: [
        { judul: 'Spa yang kehilangan booking di luar jam buka', isi: 'Ilustrasi: sebuah spa di Ubud menerima banyak pertanyaan tengah malam dari calon tamu beda zona waktu, dan sebagian besar tidak berlanjut karena balasan baru datang pagi hari. Dengan halaman booking online yang mencatat pilihan treatment dan jam, permintaan tamu tertampung rapi dan tinggal dikonfirmasi saat tim mulai bekerja.' },
        { judul: 'Spa baru yang sulit bersaing di kawasan padat', isi: 'Ilustrasi: sebuah spa baru di Canggu kesulitan menonjol di antara puluhan spa lain di jalan yang sama. Website dengan daftar harga transparan, galeri suasana yang kuat, dan halaman promo member membantunya tampil meyakinkan dan memberi alasan bagi tamu untuk mencoba.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website spa di Bali?', a: 'Paket landing page mulai Rp 799k untuk spa yang butuh halaman perkenalan, daftar treatment, dan tombol booking. Paket company profile Rp 1.499k termasuk domain .com gratis 1 tahun, dengan halaman lengkap berisi harga, galeri, gift voucher, dan promo member.' },
      { q: 'Berapa lama pengerjaan website spa?', a: 'Landing page selesai dalam 1-2 minggu dan company profile dalam 2-4 minggu, tergantung kesiapan foto dan daftar harga Anda. Foto suasana spa yang bagus sangat menentukan hasil akhir, jadi kami sarankan menyiapkan foto terbaik sejak awal.' },
      { q: 'Apakah tamu asing bisa booking langsung dari website?', a: 'Bisa. Alur booking kami rancang sederhana dan terhubung ke WhatsApp, kanal yang paling familiar bagi wisatawan maupun tim Anda. Tamu memilih treatment dan waktu, lalu permintaan masuk sebagai pesan yang tinggal dikonfirmasi.' },
      { q: 'Bagaimana website membantu spa saya ditemukan di Google?', a: 'Kami menulis judul, deskripsi, dan konten yang menargetkan pencarian bertema spa dan kawasan Anda, misalnya spa di Ubud atau pijat di Canggu, lengkap dengan struktur data bisnis lokal. Dipadukan profil Google Business yang terisi penuh, spa Anda lebih mudah ditemukan wisatawan yang sedang meriset.' },
      { q: 'Bisakah saya memperbarui harga dan promo sendiri?', a: 'Struktur halaman kami susun agar daftar harga dan promo mudah diperbarui. Untuk perubahan berkala Anda bisa meminta bantuan kami, atau kami pandu cara mengelola bagian yang paling sering berubah.' },
    ],
  },
  klinik: {
    metaTitle: 'Jasa Pembuatan Website Klinik di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website klinik kecantikan dan gigi di Bali dengan booking konsultasi dan profil dokter. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website klinik di bali', 'jasa bikin website klinik kecantikan bali', 'website klinik gigi bali', 'jasa website medical tourism bali', 'web designer klinik denpasar', 'pembuatan website klinik profesional', 'website dental clinic bali'],
    heroLead: 'Bali adalah tujuan medical tourism yang serius, terutama untuk perawatan gigi dan kecantikan, dengan pasien dari Australia dan Eropa yang membandingkan klinik berbulan-bulan sebelum terbang. Mereka memilih klinik yang websitenya transparan soal dokter, layanan, dan harga, bukan yang paling ramai di media sosial.',
    intro: {
      h2: 'Pasien Memilih Klinik dari Website, Bukan dari Iklan',
      paragraf: [
        'Keputusan menjalani perawatan gigi atau tindakan kecantikan bukanlah pembelian impulsif. Calon pasien membaca profil dokter, memeriksa daftar layanan, membandingkan harga antar klinik, dan mencari tanda kredibilitas sebelum berani booking. Klinik yang hanya tampil di Instagram atau listing direktori kehilangan panggung terpentingnya, karena semua pertanyaan kritis itu tidak terjawab di satu tempat yang resmi.',
        'Website klinik yang baik bekerja seperti resepsionis dan brosur resmi sekaligus: profil dokter dan layanan yang jelas, daftar harga yang transparan, artikel edukasi yang menunjukkan keahlian, serta booking konsultasi yang mudah. Bagi pasien luar negeri, website juga menjadi bukti bahwa klinik Anda nyata, profesional, dan mudah dihubungi sebelum mereka membeli tiket pesawat.',
        'zeepage merancang website klinik dengan tampilan bersih dan terpercaya, jauh dari kesan promosi berlebihan. Sebagai jasa pembuatan website klinik kecantikan dan gigi di Bali, kami memahami standar kepercayaan yang dicari pasien lokal maupun medical tourist, dan setiap halaman dibangun untuk memenuhi standar itu.',
      ],
      tips: 'Tips dari zeepage: terbitkan artikel edukasi sederhana seperti panduan setelah perawatan atau perbandingan jenis treatment. Artikel seperti ini menjawab pertanyaan yang diketik pasien di Google setiap hari dan memposisikan klinik Anda sebagai ahli, bukan sekadar penjual layanan.',
    },
    fiturDesc: {
      'Booking Konsultasi': 'Formulir booking konsultasi berdasarkan layanan dan jadwal pilihan pasien, terhubung ke WhatsApp atau email klinik agar tim Anda mudah menindaklanjuti.',
      'Profil Dokter & Layanan': 'Halaman profil dokter beserta keahlian dan jadwal praktik, serta halaman layanan yang menjelaskan manfaat, proses, dan kisaran perawatan secara jelas.',
      'Daftar Harga Transparan': 'Daftar harga layanan yang terbuka dan mudah diperbarui, menjawab pertanyaan terbesar calon pasien dan mengurangi chat tanya harga yang berulang.',
      'Galeri Before-After': 'Galeri hasil perawatan sebelum dan sesudah yang ditampilkan secara etis dan rapi, membantu calon pasien memahami hasil realistis yang bisa diharapkan.',
      'Artikel Edukasi': 'Ruang blog edukasi seputar perawatan, persiapan, dan pemulihan yang membantu SEO klinik Anda sekaligus membangun kepercayaan calon pasien.',
      'Multibahasa (ID/EN)': 'Versi bahasa Indonesia dan Inggris dalam satu website, penting untuk menjangkau pasien medical tourism yang meneliti klinik Anda dari luar negeri.',
    },
    lokal: {
      h2: 'Medical Tourism Bali dan Standar Kepercayaan Pasien Asing',
      paragraf: [
        'Klinik gigi dan kecantikan di Denpasar, Kuta, Seminyak, dan Canggu melayani dua pasar sekaligus: warga lokal yang mencari perawatan rutin terpercaya, dan pasien asing yang datang khusus untuk treatment dengan biaya lebih kompetitif daripada negara asal mereka. Pasien asing ini sangat teliti. Mereka memeriksa legalitas dan profil dokter, membaca pengalaman pasien lain, dan membandingkan beberapa klinik sebelum memutuskan.',
        'Artinya, website klinik di Bali bersaing dalam skala internasional, bukan hanya dengan klinik sebelah. Tampilan, kelengkapan informasi, dan kecepatan respons menjadi penentu. Jasa pembuatan website klinik di bali yang tepat akan menonjolkan transparansi harga dan edukasi pasien, dua hal yang paling dicari medical tourist saat membandingkan klinik dari layar ponsel di negara mereka.',
      ],
      ilustrasi: [
        { judul: 'Klinik gigi yang kebanjiran chat tanya harga', isi: 'Ilustrasi: sebuah klinik gigi di Denpasar menerima pertanyaan harga yang sama setiap hari lewat chat, dan staf menghabiskan waktu menjawab satu per satu. Setelah daftar harga dan halaman layanan diterbitkan di website, sebagian besar pertanyaan dasar terjawab sendiri dan chat yang masuk sudah berisi calon pasien yang serius.' },
        { judul: 'Klinik kecantikan yang ingin menjangkau pasien asing', isi: 'Ilustrasi: sebuah klinik kecantikan di Seminyak ingin menarik pasien Australia yang sedang liburan panjang. Dengan versi bahasa Inggris, artikel edukasi perawatan, dan booking konsultasi online, calon pasien bisa meneliti dan memesan jadwal sebelum mereka tiba di Bali.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website klinik di Bali?', a: 'Paket landing page mulai Rp 799k untuk klinik yang butuh halaman resmi dan booking konsultasi sederhana. Paket company profile Rp 1.499k termasuk domain .com gratis 1 tahun, dengan halaman lengkap berisi profil dokter, layanan, daftar harga, artikel edukasi, dan versi dua bahasa.' },
      { q: 'Berapa lama pengerjaan website klinik?', a: 'Landing page selesai dalam 1-2 minggu, company profile dalam 2-4 minggu. Waktu terlama biasanya pada penyiapan materi seperti foto klinik, profil dokter, dan daftar harga resmi, jadi semakin siap materi Anda semakin cepat websitenya tayang.' },
      { q: 'Apakah website klinik bisa menjangkau pasien luar negeri?', a: 'Bisa. Kami menyiapkan versi bahasa Inggris dan konten yang menjawab cara pasien asing meneliti klinik, mulai dari profil dokter dan transparansi harga sampai artikel edukasi. Ini fondasi penting untuk pasar medical tourism Bali.' },
      { q: 'Apakah galeri before-after aman ditampilkan?', a: 'Galeri kami susun secara rapi dan etis, menampilkan hasil perawatan sebagai bahan informasi calon pasien. Anda tetap memegang kendali penuh atas foto mana yang boleh diterbitkan, dan foto hanya digunakan dengan persetujuan pasien yang bersangkutan.' },
      { q: 'Bagaimana proses pembuatan websitenya?', a: 'Mulai dari konsultasi gratis untuk memetakan layanan dan target pasien Anda, lalu penyusunan struktur halaman dan desain bernuansa bersih dan profesional. Kami kerjakan dengan update berkala, dan Anda meninjau sebelum website resmi tayang.' },
    ],
  },
  'rental-mobil': {
    metaTitle: 'Jasa Pembuatan Website Rental Mobil di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website rental mobil di Bali dengan katalog armada, harga transparan, dan booking WhatsApp. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website rental mobil di bali', 'jasa bikin website rental mobil bali', 'website sewa mobil bali', 'jasa website rent car bali', 'web designer rental mobil denpasar', 'pembuatan website sewa mobil online', 'website rental mobil profesional'],
    heroLead: 'Hampir setiap wisatawan yang mendarat di Bandara Ngurah Rai membutuhkan kendaraan, dan mereka membandingkan rental mobil dari Google sebelum memesan. Rental yang websitenya jelas soal armada, harga per hari, dan cara booking akan memenangkan pesanan itu, bukan yang hanya mengandalkan chat dan grup media sosial.',
    intro: {
      h2: 'Bisnis Rental Mobil Bali Dimenangkan dari Katalog yang Jelas',
      paragraf: [
        'Masalah klasik bisnis rental mobil adalah pertanyaan yang sama berulang setiap hari: mobil apa saja yang tersedia, berapa harga per harinya, bisa antar ke bandara atau tidak. Jika semua jawaban itu hanya ada di kepala admin dan tersebar di riwayat chat, calon penyewa yang tidak sabar akan pindah ke rental lain yang informasinya terbuka. Persaingan rental di Bali terlalu ketat untuk membiarkan itu terjadi.',
        'Website mengubah katalog armada Anda menjadi etalase yang bekerja 24 jam. Setiap unit tampil dengan foto, kapasitas, transmisi, dan harga harian yang jelas. Calon penyewa bisa menghitung durasi sewa, membaca syarat ketentuan sejak awal, lalu booking langsung lewat WhatsApp dengan konteks yang sudah lengkap. Admin Anda tinggal mengonfirmasi, bukan menjelaskan dari nol.',
        'zeepage membangun website rental mobil yang cepat, rapi di ponsel, dan fokus pada satu tujuan: mengubah pencari sewa mobil menjadi pemesan. Sebagai jasa pembuatan website rental mobil di bali, kami paham alur pikir wisatawan dan ekspatriat yang menyewa, dan setiap halaman disusun mengikuti alur itu.',
      ],
      tips: 'Tips dari zeepage: tampilkan harga per hari secara terbuka untuk setiap unit, termasuk keterangan dengan sopir atau lepas kunci. Transparansi harga adalah alasan utama wisatawan memilih satu rental dibanding rental lain yang mengharuskan tanya dulu lewat chat.',
    },
    fiturDesc: {
      'Katalog Armada + Harga': 'Katalog semua unit Anda lengkap dengan foto, kapasitas penumpang, jenis transmisi, dan harga sewa per hari, mudah diperbarui saat armada bertambah atau harga berubah.',
      'Booking via WhatsApp': 'Tombol booking di setiap unit yang membuka WhatsApp dengan pesan otomatis berisi nama mobil dan tanggal sewa, sehingga admin langsung paham kebutuhan penyewa.',
      'Hitung Durasi Sewa': 'Kalkulator sederhana untuk menghitung total biaya berdasarkan tanggal mulai, tanggal selesai, dan pilihan dengan sopir atau lepas kunci, membantu penyewa memutuskan lebih cepat.',
      'Syarat & Ketentuan Jelas': 'Halaman syarat dan ketentuan sewa yang rapi, mencakup dokumen yang dibutuhkan, kebijakan bahan bakar, dan keterlambatan, mengurangi salah paham sejak sebelum transaksi.',
      'Galeri Unit': 'Galeri foto asli setiap unit dari berbagai sudut termasuk interior, membangun kepercayaan bahwa mobil yang dipesan sama dengan yang akan diterima.',
      'Layanan Antar-Jemput': 'Informasi layanan antar dan jemput unit ke bandara, hotel, atau villa lengkap dengan area cakupan dan ketentuan biayanya bila ada.',
    },
    lokal: {
      h2: 'Pola Sewa Mobil Wisatawan dan Ekspatriat di Bali',
      paragraf: [
        'Pasar rental mobil Bali terbagi jelas. Wisatawan yang berlibur dalam waktu pendek menyewa harian dengan sopir untuk tur keliling Ubud, Uluwatu, dan Tanah Lot, biasanya dipesan mendadak dari hotel. Ekspatriat dan digital nomad di Canggu dan Denpasar menyewa mingguan sampai bulanan dengan skema lepas kunci. Dua segmen ini mencari dengan kata kunci dan ekspektasi harga yang berbeda, dan website yang baik melayani keduanya tanpa membingungkan.',
        'Musim liburan dan hari besar membuat permintaan melonjak, dan rental yang mudah ditemukan di Google pada momen itu panen pesanan. Website dengan katalog dan harga yang jelas juga mengurangi ketergantungan pada perantara dan komisi pihak ketiga. Itulah nilai jangka panjang dari jasa pembuatan website rental mobil di bali: Anda memiliki kanal pemesanan sendiri yang bekerja sepanjang tahun, termasuk di luar musim ramai.',
      ],
      ilustrasi: [
        { judul: 'Rental yang kewalahan menjawab chat saat musim ramai', isi: 'Ilustrasi: sebuah rental mobil di Kuta menerima puluhan chat per hari saat musim liburan, sebagian besar menanyakan daftar mobil dan harga yang sama. Setelah katalog armada dan harga diterbitkan di website, calon penyewa datang dengan pilihan yang sudah ditentukan dan chat berubah menjadi konfirmasi booking.' },
        { judul: 'Rental rumahan yang ingin terlihat profesional', isi: 'Ilustrasi: sebuah usaha rental kecil di Denpasar dengan armada terbatas ingin bersaing dengan rental besar. Website rapi berisi galeri unit asli, syarat sewa yang jelas, dan layanan antar-jemput bandara membuatnya terlihat setara dan dipercaya wisatawan yang baru pertama kali memesan.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website rental mobil di Bali?', a: 'Paket landing page mulai Rp 799k, cocok untuk rental yang butuh katalog armada ringkas dan tombol booking. Paket company profile Rp 1.499k termasuk domain .com gratis 1 tahun, dengan katalog lengkap, kalkulator durasi sewa, dan halaman syarat ketentuan.' },
      { q: 'Berapa lama pengerjaan website rental mobil?', a: 'Landing page selesai dalam 1-2 minggu, company profile dalam 2-4 minggu, tergantung jumlah unit dan kesiapan foto armada. Semakin lengkap foto dan data harga setiap unit, semakin cepat website Anda tayang.' },
      { q: 'Apakah penyewa bisa booking langsung dari website?', a: 'Bisa. Setiap unit dilengkapi tombol booking yang membuka WhatsApp dengan pesan otomatis berisi mobil dan tanggal pilihan penyewa. Cara ini paling efektif untuk rental di Bali karena wisatawan dan admin sama-sama familiar dengan WhatsApp.' },
      { q: 'Bagaimana website membantu rental saya ditemukan wisatawan?', a: 'Kami menyusun konten dengan target pencarian seperti sewa mobil di Bali, rental mobil Denpasar, dan antar-jemput bandara, lengkap dengan struktur data bisnis lokal dan profil Google Business. Wisatawan yang meriset dari jauh pun bisa menemukan dan memesan dari Anda.' },
      { q: 'Bisakah saya menambah unit dan mengubah harga sendiri?', a: 'Katalog kami susun agar penambahan unit dan perubahan harga mudah dilakukan. Untuk pengelolaan berkala Anda bisa meminta bantuan kami, atau kami pandu cara memperbarui bagian katalog yang paling sering berubah.' },
    ],
  },
  kafe: {
    metaTitle: 'Jasa Pembuatan Website Kafe di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website kafe di Bali dengan menu digital QR, galeri suasana, dan info lokasi yang jelas. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website kafe di bali', 'jasa bikin website coffee shop bali', 'website kafe canggu', 'jasa website restoran kafe bali', 'web designer kafe ubud', 'pembuatan website cafe profesional', 'website menu digital kafe'],
    heroLead: 'Kafe di Bali hidup dari penemuan: digital nomad di Canggu mencari tempat kerja dengan wifi kencang, wisatawan di Ubud memburu spot sarapan terbaik, dan semua itu dimulai dari pencarian Google dan foto suasana. Kafe yang mudah ditemukan dan terlihat menggoda di layar akan selalu lebih ramai.',
    intro: {
      h2: 'Kafe di Bali Dipilih dari Google Sebelum dari Jalan',
      paragraf: [
        'Sangat sedikit orang menemukan kafe baru karena kebetulan lewat. Mereka mencari coffee shop terdekat, kafe dengan wifi untuk bekerja, atau tempat brunch dengan suasana tertentu, lalu memutuskan dari foto, menu, dan ulasan yang mereka lihat. Kafe yang hanya mengandalkan Instagram kehilangan pencari paling siap datang ini, karena Instagram tidak muncul sebaik website di hasil pencarian lokal Google.',
        'Website memberi kafe Anda rumah resmi yang lengkap: menu digital yang bisa dibuka lewat QR di meja, galeri suasana yang menjual pengalaman, info jam buka dan lokasi yang akurat, sampai promo untuk pelanggan tetap. Pengunjung bisa memeriksa menu dan harga sebelum datang, dan pemilik kafe tidak perlu menjawab pertanyaan jam buka yang sama setiap hari.',
        'zeepage merancang website kafe dengan visual yang menggugah dan kecepatan muat yang tinggi di ponsel, karena hampir semua pencarian kafe terjadi dari HP sambil berjalan. Sebagai jasa pembuatan website kafe di bali, kami menyusun konten Anda untuk menangkap pencarian lokal paling menguntungkan di kawasan Anda.',
      ],
      tips: 'Tips dari zeepage: pasang menu digital dengan harga di website dan tautkan ke kode QR di meja. Pengunjung asing sangat terbantu oleh menu yang bisa mereka buka dan terjemahkan di ponsel sendiri, dan ini juga mengurangi biaya cetak ulang setiap ada perubahan menu.',
    },
    fiturDesc: {
      'Menu Digital + QR': 'Menu lengkap dengan foto dan harga yang bisa dibuka pengunjung lewat kode QR di meja, mudah diperbarui kapan pun ada menu baru atau perubahan harga.',
      'Galeri Suasana': 'Galeri foto interior, spot favorit, dan hidangan andalan kafe Anda, disusun untuk membuat calon pengunjung bisa merasakan suasana sebelum datang.',
      'Info Jam & Lokasi': 'Informasi jam operasional, alamat, dan peta lokasi yang akurat dan selalu tampil jelas, menjawab pertanyaan paling sering diajukan calon pengunjung.',
      'Promo & Loyalty': 'Halaman promo dan program loyalitas untuk pelanggan tetap seperti pekerja remote dan warga sekitar, agar kunjungan berulang terus terdorong.',
      'Integrasi Instagram': 'Umpan Instagram kafe Anda tampil langsung di website, menjembatani konten harian yang segar dengan informasi resmi yang dicari pengunjung di Google.',
      'Reservasi Meja': 'Fitur reservasi meja sederhana lewat WhatsApp untuk rombongan dan acara kecil, membantu Anda menyiapkan tempat tanpa tumpukan chat yang membingungkan.',
    },
    lokal: {
      h2: 'Budaya Kafe Bali: Nomad, Wisatawan, dan Komunitas Lokal',
      paragraf: [
        'Setiap kantong kafe di Bali punya publik sendiri. Canggu dipenuhi digital nomad yang menilai kafe dari wifi, colokan, dan kopi yang serius. Seminyak mengejar brunch premium dan suasana sosial, Ubud menawarkan kafe tenang bernuansa alam untuk wisatawan wellness, dan Denpasar melayani komunitas lokal serta mahasiswa dengan harga bersahabat. Website kafe yang baik menonjolkan keunggulan untuk publik kawasan Anda, bukan meniru kafe di kawasan lain.',
        'Pencarian kafe juga sangat bergantung momen: sarapan sebelum tur, tempat kerja siang hari, sampai spot sunset sore hari. Kafe yang muncul di Google dengan jam buka akurat, menu yang bisa dicek, dan foto suasana terbaru memenangkan momen-momen itu. Di sinilah jasa pembuatan website kafe di bali bekerja untuk Anda setiap hari, mengubah pencarian sekilas menjadi kunjungan nyata.',
      ],
      ilustrasi: [
        { judul: 'Kafe baru yang sepi karena tidak ditemukan', isi: 'Ilustrasi: sebuah kafe baru di Pererenan punya kopi dan interior bagus, tetapi calon pengunjung tidak tahu jam buka dan menunya karena hanya ada di Instagram. Setelah website tayang dengan info lengkap dan galeri suasana, pencari coffee shop di kawasan itu mulai menemukannya dan kunjungan perlahan naik.' },
        { judul: 'Kafe yang ingin mengurangi tanya jawab berulang', isi: 'Ilustrasi: sebuah kafe di Ubud kewalahan menjawab pertanyaan soal menu vegetarian dan ketersediaan tempat untuk bekerja. Dengan menu digital dan halaman info yang jelas di website, pertanyaan berulang jauh berkurang dan staf bisa fokus melayani tamu yang datang.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website kafe di Bali?', a: 'Paket landing page mulai Rp 799k, sudah cukup untuk kafe yang butuh halaman resmi, menu digital, dan info lokasi. Paket company profile Rp 1.499k termasuk domain .com gratis 1 tahun, dengan halaman lengkap berisi galeri, promo, dan reservasi meja.' },
      { q: 'Berapa lama pengerjaan website kafe?', a: 'Landing page selesai dalam 1-2 minggu, company profile dalam 2-4 minggu. Faktor penentu kecepatan biasanya foto suasana dan daftar menu final, jadi siapkan foto terbaik kafe Anda dan menu terbaru sejak awal.' },
      { q: 'Apa keuntungan menu digital dibanding menu cetak saja?', a: 'Menu digital di website bisa dibuka calon pengunjung sebelum datang, dibagikan lewat tautan, dan diperbarui kapan saja tanpa biaya cetak. Ditambah kode QR di meja, pengunjung bisa membaca menu dari ponsel mereka sendiri dengan nyaman.' },
      { q: 'Bagaimana website membantu kafe saya muncul di pencarian lokal?', a: 'Kami menargetkan pencarian bertema kafe dan kawasan Anda, misalnya coffee shop di Canggu atau kafe di Ubud, lengkap dengan struktur data bisnis lokal. Dipadukan profil Google Business yang akurat soal jam dan lokasi, kafe Anda lebih mudah ditemukan pencari terdekat.' },
      { q: 'Bisakah saya memperbarui menu dan promo sendiri?', a: 'Menu dan promo kami susun agar mudah diperbarui karena dua hal ini paling sering berubah di bisnis kafe. Anda bisa meminta bantuan kami untuk perubahan berkala, atau kami pandu cara mengelola bagiannya.' },
    ],
  },
  butik: {
    metaTitle: 'Jasa Pembuatan Website Butik di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website butik di Bali dengan lookbook, toko online, dan pengiriman internasional. Mulai Rp 799k, konsultasi gratis untuk brand Anda.',
    keywords: ['jasa pembuatan website butik di bali', 'jasa bikin website fashion bali', 'website toko online butik bali', 'jasa website brand fashion seminyak', 'web designer butik ubud', 'pembuatan website lookbook bali', 'website butik profesional'],
    heroLead: 'Butik di Jalan Kayu Aya Seminyak dan jalanan seni Ubud menjual gaya ke seluruh dunia, tetapi pembeli dari Australia, Eropa, dan Amerika menemukan brand lewat Google dan Instagram jauh sebelum mereka menginjak Bali. Website yang kuat mengubah pengagum dari jauh menjadi pembeli, bahkan setelah mereka pulang ke negaranya.',
    intro: {
      h2: 'Butik Bali Butuh Etalase yang Bekerja Melewati Musim Liburan',
      paragraf: [
        'Penjualan butik yang hanya mengandalkan kunjungan toko mengikuti musim wisata: ramai saat high season, sepi setelahnya. Padahal pembeli yang jatuh cinta pada koleksi Anda di Bali sering ingin membeli lagi dari negara asal mereka, dan wisatawan lain menemukan brand sejenis lewat pencarian seperti butik di Seminyak atau fashion brand Bali. Tanpa website dan toko online, semua permintaan itu hilang begitu saja atau jatuh ke tangan kompetitor.',
        'Website memberi butik Anda etalase permanen yang buka untuk dunia: katalog koleksi berbentuk lookbook yang memukau, toko online dengan checkout yang mudah, info ukuran dan stok yang jelas, serta pengiriman internasional untuk pelanggan luar negeri. Setiap koleksi baru punya rumah resmi yang bisa dibagikan, ditemukan Google, dan menghasilkan penjualan di luar jam buka toko.',
        'zeepage merancang website butik dengan estetika editorial yang sekelas brand fashion internasional, karena di industri ini tampilan adalah segalanya. Sebagai jasa pembuatan website butik di bali, kami memahami pembeli fashion menilai kualitas brand dari kualitas websitenya, dan desain Anda dibangun untuk lulus penilaian itu.',
      ],
      tips: 'Tips dari zeepage: foto lookbook konsisten dengan latar bersih dan pencahayaan seragam jauh lebih menjual daripada foto produk seadanya. Satu sesi foto yang direncanakan dengan baik bisa menghidupi website, Instagram, dan katalog Anda sekaligus selama satu musim penuh.',
    },
    fiturDesc: {
      'Katalog Koleksi (Lookbook)': 'Katalog koleksi per musim dalam format lookbook yang elegan, menampilkan setiap item dengan foto besar, nama koleksi, dan cerita singkat di baliknya.',
      'Toko Online + Checkout': 'Toko online lengkap dengan keranjang dan checkout yang sederhana, menerima pembayaran populer dan terhubung ke WhatsApp untuk konfirmasi pesanan bila dibutuhkan.',
      'Galeri Instagram': 'Umpan Instagram brand Anda tampil di website, menghubungkan konten harian dengan katalog resmi agar pengunjung bisa berpindah mulus dari inspirasi ke pembelian.',
      'Info Size & Stok': 'Panduan ukuran yang jelas dan informasi ketersediaan stok per item, mengurangi pengembalian barang dan pertanyaan berulang dari pembeli luar negeri.',
      'Promo & Sale': 'Halaman khusus promo dan sale musiman yang mudah diaktifkan saat pergantian koleksi, membantu menghabiskan stok lama dan menarik pembeli yang menunggu diskon.',
      'Pengiriman Internasional': 'Informasi pengiriman internasional yang transparan mencakup negara tujuan, estimasi waktu, dan ketentuan biaya, memberi keyakinan bagi pembeli dari luar negeri.',
    },
    lokal: {
      h2: 'Fashion Bali di Mata Pembeli Dunia',
      paragraf: [
        'Bali punya reputasi fashion yang khas: resort wear, linen tropis, dan kerajinan artisan dari perajin lokal yang dicari butik di Seminyak, Berawa, dan Ubud. Pembelinya bukan hanya yang berjalan di depan toko, melainkan juga pemilik butik luar negeri yang mencari pemasok, stylist yang menyiapkan pemotretan, dan wisatawan yang ingin mengulang pembelian setelah pulang. Semua kelompok ini meneliti brand lewat website sebelum menghubungi.',
        'Musim fashion Bali juga bergerak mengikuti kalender liburan dunia, bukan hanya kalender lokal. Website dengan toko online membuat brand Anda tetap menjual saat toko fisik sepi, dan koleksi baru bisa diluncurkan ke pelanggan di banyak negara pada hari yang sama. Jasa pembuatan website butik di bali yang tepat menjadikan website sebagai cabang utama brand Anda, bukan sekadar pelengkap media sosial.',
      ],
      ilustrasi: [
        { judul: 'Butik yang kehilangan pembeli setelah wisatawan pulang', isi: 'Ilustrasi: sebuah butik di Seminyak sering didatangi wisatawan yang berjanji membeli lagi dari negaranya, tetapi tidak ada tempat untuk mewujudkannya. Setelah toko online tayang dengan pengiriman internasional, janji itu punya tempat nyata dan pesanan mulai datang dari pelanggan lama di luar negeri.' },
        { judul: 'Brand fashion lokal yang ingin naik kelas', isi: 'Ilustrasi: sebuah brand fashion rumahan di Ubud menjual lewat marketplace dan media sosial, tetapi sulit menaikkan harga karena tampilannya terasa biasa. Website lookbook dengan fotografi yang konsisten dan cerita brand yang rapi mengubah persepsi pembeli, dan brand tampil setara dengan label yang lebih dulu mapan.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website butik di Bali?', a: 'Paket landing page mulai Rp 799k, cocok untuk lookbook dan katalog koleksi tanpa checkout. Paket company profile Rp 1.499k termasuk domain .com gratis 1 tahun, dengan toko online lengkap berisi katalog, info ukuran dan stok, serta halaman pengiriman internasional.' },
      { q: 'Berapa lama pengerjaan website butik?', a: 'Landing page selesai dalam 1-2 minggu, company profile dengan toko online dalam 2-4 minggu, tergantung jumlah produk dan kesiapan foto. Foto produk yang konsisten adalah penentu terbesar kualitas akhir, jadi rencanakan sesi foto sejak awal.' },
      { q: 'Apakah pembeli luar negeri bisa checkout langsung?', a: 'Bisa. Toko online kami lengkapi alur checkout yang sederhana dan halaman pengiriman internasional yang transparan soal tujuan, estimasi, dan biaya. Untuk pesanan khusus, tombol WhatsApp tetap tersedia sebagai jalur konsultasi cepat.' },
      { q: 'Bagaimana website membantu butik saya ditemukan pembeli baru?', a: 'Kami menulis konten dengan target pencarian seperti butik di Seminyak dan brand fashion Bali, melengkapi struktur data toko dan profil Google Business. Pembeli yang meneliti dari luar negeri pun bisa menemukan dan menilai brand Anda sebelum tiba di Bali.' },
      { q: 'Bisakah saya mengelola koleksi dan stok sendiri?', a: 'Katalog dan stok kami susun agar mudah dikelola mengikuti ritme pergantian koleksi fashion. Anda bisa memperbarui produk dengan panduan dari kami, atau menyerahkan pengelolaan berkala kepada tim kami.' },
    ],
  },
diving: {
    metaTitle: 'Jasa Pembuatan Website Diving di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website diving dan surf school di Bali: katalog trip, jadwal harian, dan booking online. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website diving di bali', 'website dive center bali', 'jasa buat website surf school bali', 'website operator diving bali', 'pembuatan website dive shop', 'website sekolah selam bali', 'jasa website wisata bahari bali'],
    heroLead: 'Wisatawan jarang memesan trip selam secara spontan: mereka membandingkan operator diving di Bali jauh hari sebelum terbang, langsung dari negara asal mereka. Website yang rapi dengan katalog trip, jadwal jelas, dan harga transparan membuat dive center atau surf school Anda yang dipilih, bukan kompetitor di sebelah.',
    intro: {
      h2: 'Kenapa Operator Diving dan Surf School Butuh Website Sendiri',
      paragraf: [
        'Sebagian besar operator diving di Bali masih mengandalkan Instagram, rekomendasi hotel, dan agen perjalanan untuk mendapatkan tamu. Masalahnya, calon penyelam dari luar negeri merencanakan perjalanan jauh hari dan membandingkan banyak operator lewat Google; kalau bisnis Anda tidak muncul dengan informasi lengkap, mereka memesan ke tempat lain. Ketergantungan pada agen juga memotong margin lewat komisi untuk setiap tamu yang datang.',
        'Website menyelesaikan masalah itu dengan menjadi etalase resmi yang Anda kendalikan penuh: katalog paket dive dan kursus dengan level sertifikasi yang dibutuhkan, jadwal trip harian, galeri bawah laut yang memukau, dan sistem booking dengan DP online. Tamu bisa membaca semuanya dalam Bahasa Inggris, memutuskan dengan yakin, lalu memesan langsung tanpa perantara.',
        'zeepage berbasis di Bali dan memahami cara wisatawan bahari merencanakan perjalanan. Kami membangun website operator diving yang cepat dibuka dari luar negeri, terstruktur untuk pencarian lokal seperti dive center Amed atau trip diving Nusa Penida, dan dilengkapi tombol WhatsApp agar pertanyaan singkat tetap bisa dilayani secara personal.',
      ],
      tips: 'Tampilkan info musim dan kondisi perairan untuk tiap spot selam, cantumkan logo sertifikasi resmi seperti PADI atau SSI, dan tulis harga dalam dua mata uang agar tamu asing tidak perlu bertanya ulang.',
    },
    fiturDesc: {
      'Paket Dive & Kursus': 'Halaman katalog berisi paket fun dive, trip harian, dan kursus sertifikasi dari level pemula sampai profesional, lengkap dengan jumlah dive, durasi, dan syarat pengalaman untuk tiap program.',
      'Jadwal Trip Harian': 'Bagian jadwal menampilkan keberangkatan trip setiap hari per spot selam beserta jam kumpulnya, sehingga tamu bisa menyesuaikan dengan itinerary liburan mereka di Bali.',
      'Galeri Bawah Laut': 'Galeri foto dan video bawah laut beresolusi tinggi yang tetap ringan dibuka, menampilkan wreck, terumbu karang, dan biota andalan dari spot selam yang Anda layani.',
      'Booking & DP Online': 'Formulir pemesanan terstruktur dengan pilihan paket, tanggal, dan jumlah peserta, plus opsi pembayaran uang muka agar slot trip tidak hangus begitu saja.',
      'Sertifikasi Instruktur': 'Bagian khusus menampilkan profil instruktur beserta sertifikasi dan pengalaman mengajarnya, faktor penentu kepercayaan bagi siswa kursus dan penyelam pemula.',
      'Multibahasa (ID/EN)': 'Seluruh konten tersedia dalam Bahasa Indonesia dan Inggris, karena mayoritas tamu diving dan surf school di Bali adalah wisatawan mancanegara.',
    },
    lokal: {
      h2: 'Spot Selam Kelas Dunia, Tamu dari Seluruh Dunia',
      paragraf: [
        'Bali dikelilingi spot selam dengan karakter berbeda: bangkai kapal USAT Liberty di Tulamben, manta point di Nusa Penida, taman laut Menjangan, sampai diving makro di Amed dan Padang Bai. Setiap spot menarik segmen tamu yang berbeda, dari penyelam fotografi berpengalaman sampai pemula yang baru mau mengambil lisensi open water.',
        'Di sisi lain, kawasan seperti Canggu, Uluwatu, dan Sanur dipenuhi surf school yang melayani peselancar pemula dan kelas privat untuk wisatawan serta ekspatriat. Persaingan antar operator di semua kawasan ini terjadi lebih dulu di Google, jauh sebelum tamu tiba di Bali, sehingga website yang kuat menentukan siapa yang kebagian booking lebih dulu.',
      ],
      ilustrasi: [
        { judul: 'Dive center di Amed yang sepi di luar musim ramai', isi: 'Ilustrasi: sebuah dive center kecil di Amed hanya ramai dari rekomendasi penginapan di sekitarnya. Dengan website berisi paket kursus dan jadwal trip yang jelas, mereka mulai menerima booking langsung dari penyelam Eropa yang merencanakan liburan dua bulan sebelumnya.' },
        { judul: 'Surf school di Canggu dengan booking WhatsApp yang berantakan', isi: 'Ilustrasi: sebuah surf school melayani belasan pesan WhatsApp setiap hari hanya untuk menanyakan jadwal pasang surut dan harga kelas. Setelah jadwal dan paket dipindah ke website dengan formulir booking, pertanyaan berulang berkurang dan para instruktur bisa fokus mengajar.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website diving di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Untuk operator dengan katalog trip dan sistem booking yang lebih kompleks, kebutuhannya dibahas dulu lewat konsultasi gratis agar paket yang diambil tepat.' },
      { q: 'Berapa lama pengerjaan website dive center?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak materi seperti foto bawah laut, daftar paket, dan harga kami terima. Katalog trip yang besar atau versi dua bahasa penuh bisa menambah waktu, dan jadwal pastinya disepakati di awal.' },
      { q: 'Apakah website bisa full Bahasa Inggris untuk tamu asing?', a: 'Bisa. Fitur Multibahasa (ID/EN) membuat setiap halaman punya versi Inggris, termasuk katalog paket, jadwal trip, dan formulir booking, karena sebagian besar tamu diving dan surf school di Bali datang dari luar negeri.' },
      { q: 'Apakah website membantu muncul di pencarian lokal Bali?', a: 'Struktur halaman dan konten kami susun untuk menargetkan pencarian seperti dive center di Amed, trip diving Nusa Penida, atau surf lesson di Canggu, lengkap dengan data terstruktur bisnis lokal dan panduan Google Business Profile. Kami tidak menjanjikan peringkat tertentu, tetapi fondasi SEO lokalnya dibangun sejak awal.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Mulai dari konsultasi gratis untuk memetakan paket dan spot andalan Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Selama proses berjalan, Anda bisa melihat hasilnya langsung lewat server pengembangan.' },
    ],
  },

  fotografer: {
    metaTitle: 'Jasa Pembuatan Website Fotografer di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website fotografer wedding di Bali: portofolio elegan, paket harga jelas, dan booking tanggal. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website fotografer di bali', 'website fotografer wedding bali', 'jasa buat website portofolio fotografer', 'website bali wedding photographer', 'pembuatan website prewedding bali', 'jasa website fotografer pernikahan', 'website portofolio fotografi bali'],
    heroLead: 'Pasangan yang menikah di Bali merencanakan semuanya dari luar negeri, dan fotografer adalah vendor yang paling awal mereka kunci. Website portofolio yang elegan dengan galeri utuh dan paket harga jelas membuat calon pengantin yakin memesan tanggal Anda sebelum sempat bertanya ke fotografer lain.',
    intro: {
      h2: 'Kenapa Fotografer Wedding di Bali Tidak Cukup Mengandalkan Instagram',
      paragraf: [
        'Instagram memang tempat calon klien menemukan fotografer, tetapi feed yang diatur algoritma dan foto yang terkompresi bukan cara terbaik menilai kualitas karya. Pasangan yang merencanakan pernikahan di Bali membandingkan banyak fotografer sekaligus; mereka butuh melihat galeri utuh dari satu pernikahan, membaca rincian paket dengan jelas, dan mengecek ketersediaan tanggal tanpa menunggu balasan DM berhari-hari.',
        'Website memberi Anda galeri resmi yang sepenuhnya berada dalam kendali Anda: portofolio per kategori seperti prewedding, hari H, dan sesi keluarga, paket harga yang transparan, serta formulir booking tanggal yang langsung masuk ke WhatsApp atau email. Klien yang serius bisa menilai karya, memilih paket, dan mengamankan tanggal dalam satu kunjungan.',
        'zeepage berbasis di Bali dan akrab dengan industri wedding di pulau ini. Kami merancang website fotografer dengan tampilan bersih yang membiarkan foto berbicara, loading yang tetap ringan meski galeri besar, dan struktur konten yang menargetkan pasangan mancanegara yang sedang menyusun pernikahan mereka di Bali.',
      ],
      tips: 'Pisahkan galeri per kategori dan per venue agar pasangan mudah membayangkan hari mereka, tampilkan harga mulai secara terbuka untuk menyaring pertanyaan yang serius, dan perbarui portofolio setiap selesai musim pernikahan.',
    },
    fiturDesc: {
      'Portofolio Galeri': 'Galeri utama berisi karya terbaik Anda dengan tampilan layar penuh dan navigasi yang halus, dioptimalkan agar foto tetap tajam tanpa membuat halaman terasa berat.',
      'Paket Harga Jelas': 'Halaman paket menampilkan rincian setiap paket foto dan video, durasi liputan, jumlah foto jadi, dan harga mulai, sehingga calon klien bisa memilih tanpa menebak-nebak.',
      'Formulir Booking Tanggal': 'Formulir khusus berisi tanggal acara, venue, dan jenis liputan yang diinginkan; setiap pengiriman langsung diteruskan ke WhatsApp atau email Anda untuk ditindaklanjuti.',
      'Galeri per Kategori': 'Koleksi foto dipisah per kategori seperti prewedding, wedding day, elopement, dan keluarga, memudahkan pasangan menemukan gaya liputan yang mereka cari.',
      'Testimoni Klien': 'Bagian khusus untuk menampilkan ulasan pasangan yang pernah Anda layani, ditata rapi di halaman agar calon klien bisa membaca pengalaman mereka secara langsung.',
      'Integrasi Instagram': 'Feed Instagram terbaru tampil otomatis di website, menjembatani calon klien yang menemukan Anda dari media sosial menuju halaman booking resmi Anda.',
    },
    lokal: {
      h2: 'Destinasi Wedding Dunia, Klien dari Berbagai Negara',
      paragraf: [
        'Bali adalah salah satu destinasi pernikahan paling dicari di dunia: kapel dan tebing dramatis di Uluwatu, hutan dan lembah di Ubud, resor tepi pantai di Nusa Dua dan Jimbaran, sampai venue kebun di sekitar Umalas dan Denpasar. Pasangan dari Australia, Eropa, dan Asia merencanakan pernikahan mereka 6 sampai 12 bulan sebelumnya, dan seluruh riset vendor dilakukan secara online.',
        'Artinya, persaingan fotografer wedding di Bali terjadi di hasil pencarian dan di layar ponsel calon pengantin yang berada di luar negeri. Fotografer dengan website portofolio yang rapi dan mudah ditemukan akan terlihat jauh lebih profesional dibanding yang hanya mengandalkan tautan galeri yang tersebar di banyak tempat.',
      ],
      ilustrasi: [
        { judul: 'Fotografer prewedding yang kehilangan calon klien di DM', isi: 'Ilustrasi: seorang fotografer prewedding di Bali membalas puluhan DM setiap minggu, tetapi banyak percakapan berhenti karena calon klien tidak bisa melihat paket dan galeri utuh. Setelah portofolio dan paket dipindah ke website, pertanyaan yang masuk jauh lebih serius dan siap booking.' },
        { judul: 'Fotografer wedding dengan galeri tersebar di banyak tautan', isi: 'Ilustrasi: seorang fotografer menyimpan galeri tiap pernikahan di tautan penyimpanan terpisah yang sulit dibagikan ke wedding planner. Dengan galeri per kategori di website, satu tautan saja cukup untuk menunjukkan semua gaya liputannya.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website fotografer di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Untuk portofolio dengan galeri sangat besar atau halaman paket berlapis, kebutuhan dibahas dulu lewat konsultasi gratis agar paketnya tepat.' },
      { q: 'Berapa lama pengerjaan website portofolio fotografer?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak foto pilihan, rincian paket, dan harga kami terima. Galeri per kategori yang banyak bisa menambah waktu kurasi, dan jadwal pastinya disepakati di awal.' },
      { q: 'Apakah galeri foto besar membuat website menjadi lambat?', a: 'Tidak, kalau dikelola dengan benar. Semua foto dikompresi dan dimuat secara bertahap, galeri dipisah per kategori agar tidak menumpuk dalam satu halaman, dan tampilannya dioptimalkan untuk ponsel karena sebagian besar calon pengantin membuka dari HP.' },
      { q: 'Apakah website membantu ditemukan pasangan dari luar negeri?', a: 'Konten dan struktur halaman kami susun untuk pencarian seperti bali wedding photographer dan fotografer wedding di Bali, dengan versi Bahasa Inggris agar pasangan mancanegara nyaman membaca. Kami tidak menjanjikan peringkat tertentu, tetapi fondasi SEO lokal dan internasionalnya dibangun sejak awal.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Dimulai dari konsultasi gratis untuk memetakan gaya dan kategori karya Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Anda bisa memantau hasil sementara lewat server pengembangan.' },
    ],
  },

  salon: {
    metaTitle: 'Jasa Pembuatan Website Salon di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website salon dan barbershop di Bali: booking jadwal online, daftar harga transparan, galeri hasil. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website salon di bali', 'website salon dan barbershop bali', 'jasa buat website salon kecantikan', 'website barbershop bali', 'pembuatan website salon rambut', 'jasa website beauty salon bali', 'website booking salon online'],
    heroLead: 'Di kawasan seperti Seminyak, Canggu, dan Ubud, salon dan barbershop bersaing memperebutkan wisatawan, ekspatriat, dan warga lokal yang mencari lewat Google sebelum datang. Website dengan daftar harga transparan dan booking online membuat salon Anda dipilih lebih dulu, bukan sekadar yang paling ramai di media sosial.',
    intro: {
      h2: 'Kenapa Salon dan Barbershop di Bali Butuh Website dengan Booking Online',
      paragraf: [
        'Banyak salon di Bali mengelola semua pemesanan lewat WhatsApp dan menampilkan harga hanya di sorotan Instagram yang sulit dicari kembali. Akibatnya pertanyaan yang sama berulang setiap hari, jadwal stylist mudah bentrok, dan calon pelanggan baru kesulitan membandingkan layanan. Sebagian dari mereka akhirnya memilih salon lain yang informasinya lebih mudah ditemukan.',
        'Website merapikan semua itu: daftar layanan dan harga yang selalu mutakhir, galeri hasil pewarnaan dan potongan, profil stylist, serta booking jadwal online yang masuk sebagai pesan terstruktur. Pelanggan memilih layanan, stylist, dan jam kunjungan dalam sekali jalan, dan tim Anda tinggal mengonfirmasi tanpa tanya-jawab panjang.',
        'zeepage berbasis di Bali dan memahami ritme bisnis kecantikan di kawasan wisata: padat saat musim liburan dan akhir pekan, lebih lengang di hari kerja. Kami membangun website salon yang cepat dibuka, mudah diperbarui harganya, dan dilengkapi halaman promo untuk membantu mengisi jam-jam sepi.',
      ],
      tips: 'Cantumkan daftar harga lengkap untuk mengurangi pertanyaan berulang, tampilkan foto hasil asli dari kursi salon Anda, dan tautkan tombol ulasan Google agar pelanggan yang puas mudah memberi bintang lima.',
    },
    fiturDesc: {
      'Booking Jadwal Online': 'Pelanggan memilih layanan, stylist, tanggal, dan jam dari formulir terstruktur; permintaan booking langsung diteruskan ke WhatsApp salon Anda untuk dikonfirmasi.',
      'Daftar Layanan & Harga': 'Menu layanan lengkap per kategori seperti potong, pewarnaan, perawatan, dan cukur, masing-masing dilengkapi durasi dan harga yang mudah Anda perbarui kapan saja.',
      'Galeri Hasil': 'Galeri foto sebelum dan sesudah pengerjaan yang memperlihatkan kualitas hasil salon Anda, jauh lebih meyakinkan daripada sekadar daftar harga.',
      'Profil Stylist': 'Halaman profil setiap stylist dan barber berisi keahlian, pengalaman, dan contoh karyanya, membantu pelanggan memilih orang yang tepat sejak awal.',
      'Promo & Paket': 'Bagian promo untuk paket bundel dan penawaran khusus hari kerja, berguna mengisi jadwal kosong di luar musim liburan dan akhir pekan.',
      'Integrasi WhatsApp': 'Tombol WhatsApp melayang di semua halaman untuk pertanyaan cepat, terhubung dengan nomor admin salon yang sudah Anda pakai sehari-hari.',
    },
    lokal: {
      h2: 'Pasar Kecantikan Bali: Wisatawan, Ekspatriat, dan Pelanggan Lokal',
      paragraf: [
        'Seminyak dan Petitenget dipenuhi salon premium yang melayani wisatawan dan kebutuhan persiapan wedding, Canggu dan Berawa menjadi rumah bagi barbershop serta salon langganan ekspatriat dan digital nomad, sementara Ubud kuat dengan salon bernuansa wellness dan Denpasar melayani pasar lokal yang besar. Setiap kawasan punya karakter pelanggan dan kisaran harga yang berbeda.',
        'Persamaannya, hampir semua pelanggan mencari lebih dulu di Google dengan kata kunci berbasis lokasi, misalnya salon di Seminyak atau barbershop di Canggu, lalu membandingkan harga dan ulasan sebelum memutuskan. Salon yang muncul dengan website lengkap berisi harga transparan akan memenangkan kunjungan pertama itu.',
      ],
      ilustrasi: [
        { judul: 'Barbershop di Canggu yang kewalahan setiap akhir pekan', isi: 'Ilustrasi: sebuah barbershop selalu penuh di akhir pekan sampai pelanggan mengantre tanpa kepastian, sementara di hari kerja kursinya banyak yang kosong. Dengan booking jadwal online dan halaman promo hari kerja di website, antrean menjadi lebih teratur dan jam sepi mulai terisi pelanggan baru.' },
        { judul: 'Salon di Seminyak yang melayani rombongan wedding', isi: 'Ilustrasi: sebuah salon sering menerima rombongan pengantin tetapi informasi paket bridalnya tersebar di chat pribadi. Setelah paket bridal dan galeri hasil ditampilkan di website, wedding planner lebih mudah merekomendasikan salon itu kepada klien mereka.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website salon di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Fitur seperti booking online dan halaman promo sudah bisa masuk dalam paket ini, dan kebutuhan spesifiknya dibahas dulu lewat konsultasi gratis.' },
      { q: 'Berapa lama pengerjaan website salon atau barbershop?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak daftar layanan, harga, dan foto galeri kami terima. Jumlah stylist yang dibuatkan profil dan banyaknya kategori layanan bisa memengaruhi jadwal, dan estimasi pastinya disepakati di awal.' },
      { q: 'Apakah saya bisa memperbarui harga dan promo sendiri?', a: 'Bisa. Daftar layanan, harga, dan promo disusun agar mudah diperbarui mengikuti perubahan di salon Anda, dan kami jelaskan cara mengelolanya saat serah terima. Untuk perubahan besar seperti menambah halaman layanan baru, Anda juga bisa menghubungi kami kembali.' },
      { q: 'Apakah website membantu salon saya ditemukan di pencarian lokal?', a: 'Struktur halaman dan konten kami susun untuk menargetkan pencarian berbasis kawasan seperti salon di Seminyak atau barbershop di Canggu, lengkap dengan data terstruktur bisnis lokal dan panduan Google Business Profile. Kami tidak menjanjikan peringkat tertentu, tetapi fondasi SEO lokalnya dibangun sejak awal.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Dimulai dari konsultasi gratis untuk memetakan layanan dan karakter salon Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Selama pengerjaan, Anda bisa melihat hasilnya lewat server pengembangan.' },
    ],
  },

  'guest-house': {
    metaTitle: 'Jasa Pembuatan Website Guest House di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website guest house dan homestay di Bali: booking kamar langsung tanpa potongan komisi OTA. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website guest house di bali', 'website homestay bali', 'jasa buat website penginapan bali', 'website booking langsung villa kecil', 'pembuatan website guest house', 'jasa website homestay tanpa komisi', 'website penginapan murah bali'],
    heroLead: 'Setiap booking yang masuk lewat OTA memotong komisi belasan persen dari pendapatan Anda, padahal banyak tamu sebenarnya lebih suka memesan langsung kalau bisa menemukan website resmi penginapannya. Website guest house dengan kalender ketersediaan dan harga transparan mengubah tamu OTA menjadi tamu langsung yang jauh lebih menguntungkan.',
    intro: {
      h2: 'Kenapa Guest House dan Homestay di Bali Perlu Channel Booking Sendiri',
      paragraf: [
        'Guest house dan homestay di Bali umumnya bergantung penuh pada OTA untuk mendapatkan tamu. Ketergantungan ini mahal: komisi dipotong dari setiap malam yang terjual, aturan main ditentukan oleh platform, dan tamu setia yang ingin menginap lagi tetap diarahkan kembali ke OTA. Tanpa website resmi, calon tamu yang mencari nama penginapan Anda di Google justru berpotensi menemukan penginapan lain.',
        'Website memberi Anda channel penjualan sendiri: galeri kamar dan fasilitas yang Anda kurasi sendiri, kalender ketersediaan, harga transparan, ulasan tamu, dan jalur booking langsung lewat formulir atau WhatsApp. OTA tetap berguna untuk penemuan pertama, tetapi kunjungan berikutnya bisa datang tanpa potongan komisi sama sekali.',
        'zeepage berbasis di Bali dan memahami pola tamu di tiap kawasan, dari pencari ketenangan di Ubud sampai peselancar dan pekerja remote di Canggu. Kami membangun website penginapan yang ringan dibuka dari luar negeri, tersedia dalam dua bahasa, dan dirancang agar nama penginapan Anda sendiri yang muncul saat dicari tamu.',
      ],
      tips: 'Samakan harga dengan OTA lalu tambahkan keuntungan khusus untuk pemesan langsung, misalnya sarapan gratis atau late check-out, dan cantumkan jarak ke pantai, bandara, dan tempat populer agar tamu bisa memutuskan dengan cepat.',
    },
    fiturDesc: {
      'Booking Kamar Langsung': 'Formulir pemesanan berisi tanggal check-in, durasi menginap, tipe kamar, dan jumlah tamu, diteruskan langsung ke WhatsApp atau email Anda tanpa potongan komisi pihak ketiga.',
      'Galeri Kamar & Fasilitas': 'Galeri foto per tipe kamar dan fasilitas seperti kolam renang, dapur bersama, dan area kerja, ditata agar tamu mendapat gambaran yang jujur sebelum memesan.',
      'Kalender Ketersediaan': 'Kalender yang menampilkan tanggal yang masih tersedia untuk setiap kamar, mengurangi tanya-jawab berulang dan membantu tamu merencanakan tanggal dengan pasti.',
      'Harga Transparan': 'Tabel harga per tipe kamar termasuk tarif mingguan dan bulanan untuk tamu long-stay, ditampilkan terbuka agar tamu bisa menghitung anggaran sejak awal.',
      'Ulasan Tamu': 'Bagian khusus untuk menampilkan ulasan tamu yang pernah menginap, dilengkapi tautan ke profil Google Anda agar calon tamu bisa memverifikasi sendiri.',
      'Multibahasa (ID/EN)': 'Konten tersedia dalam Bahasa Indonesia dan Inggris, mengingat mayoritas tamu guest house dan homestay di Bali berasal dari luar negeri.',
    },
    lokal: {
      h2: 'Karakter Tamu yang Berbeda di Setiap Kawasan Bali',
      paragraf: [
        'Ubud menarik tamu pencari budaya dan ketenangan yang cenderung menginap lebih lama, Canggu dan Berawa dipenuhi peselancar serta pekerja remote yang menyewa mingguan sampai bulanan, Sanur kuat di segmen keluarga dan tamu senior, sementara Uluwatu tumbuh sebagai basis peselancar dan wisatawan premium. Setiap segmen menilai penginapan dengan cara yang berbeda.',
        'Musim kunjungan juga berayun antara musim ramai dan musim sepi, sehingga penginapan yang punya website sendiri bisa mengatur strategi harga, paket long-stay, dan promo musim sepi secara mandiri. Tanpa channel sendiri, semua keputusan itu terikat pada aturan dan persaingan harga di dalam platform OTA.',
      ],
      ilustrasi: [
        { judul: 'Homestay di Ubud yang ingin mengurangi komisi OTA', isi: 'Ilustrasi: sebuah homestay keluarga di Ubud menerima sebagian besar tamu dari OTA dan membayar komisi untuk setiap booking, termasuk dari tamu yang sudah menginap ketiga kalinya. Setelah punya website dengan booking langsung, tamu berulang mulai memesan lewat WhatsApp resmi dan margin per malam menjadi lebih baik.' },
        { judul: 'Guest house di Sanur yang membidik tamu long-stay', isi: 'Ilustrasi: sebuah guest house di Sanur ingin menarik pensiunan dan pekerja remote yang menginap sebulan penuh, segmen yang sulit disaring di platform OTA. Halaman khusus long-stay di website berisi tarif bulanan dan fasilitas kerja membuat penawaran itu mudah ditemukan dan dibagikan.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website guest house di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Untuk penginapan dengan banyak tipe kamar dan kalender ketersediaan, kebutuhan dibahas dulu lewat konsultasi gratis agar paketnya sesuai.' },
      { q: 'Berapa lama pengerjaan website penginapan?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak foto kamar, daftar fasilitas, dan tabel harga kami terima. Jumlah tipe kamar dan kebutuhan versi dua bahasa bisa memengaruhi jadwal, dan estimasi pastinya disepakati di awal.' },
      { q: 'Apakah website ini berarti saya harus meninggalkan OTA?', a: 'Tidak. Website berfungsi sebagai channel tambahan untuk booking langsung, terutama dari tamu berulang dan tamu yang mencari nama penginapan Anda di Google. OTA tetap dipakai untuk menjangkau tamu baru, sementara website mengurangi potongan komisi secara bertahap.' },
      { q: 'Apakah harga dan kalender ketersediaan bisa saya perbarui sendiri?', a: 'Bisa. Harga per tipe kamar dan kalender ketersediaan disusun agar mudah diperbarui mengikuti perubahan di penginapan Anda, termasuk tarif musim ramai dan promo musim sepi, dan cara mengelolanya kami jelaskan saat serah terima.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Dimulai dari konsultasi gratis untuk memetakan tipe kamar dan segmen tamu Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Selama proses berjalan, Anda bisa melihat hasilnya lewat server pengembangan.' },
    ],
  },

  yoga: {
    metaTitle: 'Jasa Pembuatan Website Studio Yoga di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website studio yoga di Bali: jadwal kelas online, booking paket kelas, dan halaman retreat khusus. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website yoga di bali', 'website studio yoga bali', 'jasa buat website yoga studio ubud', 'website retreat yoga bali', 'pembuatan website shala yoga', 'jasa website wellness studio bali', 'website teacher training yoga'],
    heroLead: 'Pencari kelas yoga dan retreat di Bali merencanakan perjalanan mereka dari jauh: membandingkan studio, membaca profil guru, dan memesan tempat sebelum mendarat. Website studio dengan jadwal kelas online dan halaman retreat khusus membuat studio Anda masuk ke daftar mereka, bukan hanya studio yang lebih dulu terkenal.',
    intro: {
      h2: 'Kenapa Studio Yoga di Bali Butuh Website Lebih dari Sekadar Instagram',
      paragraf: [
        'Banyak studio yoga kecil di Bali mengumumkan jadwal hanya lewat story Instagram yang hilang dalam 24 jam dan menerima pendaftaran retreat lewat DM yang tercecer. Calon peserta dari luar negeri yang merencanakan perjalanan berbulan-bulan sebelumnya kesulitan menemukan informasi yang utuh: jadwal mingguan, harga paket kelas, profil pengajar, sampai rincian retreat dan pelatihan guru.',
        'Website menyatukan semuanya dalam satu tempat resmi: jadwal kelas yang diperbarui berkala, booking dan paket kelas, profil instruktur dengan latar pelatihannya, serta halaman khusus retreat dan event lengkap dengan formulir pendaftaran. Peserta bisa merencanakan kunjungan, membayar uang muka, dan datang dengan persiapan yang matang.',
        'zeepage berbasis di Bali, pulau yang menjadi salah satu pusat yoga dunia, dan memahami perbedaan kebutuhan shala kecil di Ubud dengan studio besar di Canggu. Kami membangun website studio yoga yang tenang secara visual, cepat dibuka, dan bisa berbahasa Inggris penuh agar mudah ditemukan komunitas yoga internasional.',
      ],
      tips: 'Selalu perbarui jadwal mingguan tepat waktu, buat halaman terpisah untuk retreat dan teacher training karena nilai pendaftarannya besar, dan tampilkan harga dalam Rupiah agar peserta asing bisa menghitung anggaran dengan jelas.',
    },
    fiturDesc: {
      'Jadwal Kelas Online': 'Halaman jadwal mingguan berisi kelas per hari, jam, level, dan pengajarnya, mudah diperbarui setiap ada perubahan kelas atau guru pengganti.',
      'Booking & Paket Kelas': 'Pemesanan tempat kelas dan pembelian paket seperti drop-in, paket beberapa kelas, sampai membership bulanan, dengan konfirmasi lewat WhatsApp atau email.',
      'Profil Instruktur': 'Profil setiap pengajar berisi gaya mengajar, sertifikasi pelatihan, dan pengalamannya, faktor utama yang membuat peserta memilih satu studio dibanding studio lainnya.',
      'Retreat & Event': 'Halaman khusus retreat, workshop, dan teacher training berisi itinerary, fasilitas, harga, dan formulir pendaftaran dengan opsi pembayaran uang muka.',
      'Galeri Studio': 'Galeri foto shala, suasana kelas, dan lingkungan sekitar studio yang membantu calon peserta membayangkan pengalaman mereka sebelum mendaftar.',
      'Multibahasa (ID/EN)': 'Versi Bahasa Inggris penuh untuk menjangkau peserta internasional, dilengkapi versi Indonesia untuk komunitas lokal dan ekspatriat yang tinggal di Bali.',
    },
    lokal: {
      h2: 'Ubud dan Bali di Peta Yoga Dunia',
      paragraf: [
        'Ubud dikenal luas sebagai jantung yoga Bali dengan shala yang dikelilingi sawah dan sungai, sementara Canggu, Berawa, dan Uluwatu berkembang dengan studio yang melayani peselancar, pekerja remote, dan komunitas wellness yang tinggal lebih lama. Setiap kawasan menarik peserta dengan motivasi berbeda, dari liburan singkat sampai pelatihan guru 200 jam.',
        'Kelompok retreat dari luar negeri biasanya memesan tempat 3 sampai 6 bulan sebelum keberangkatan dan membandingkan banyak studio lewat pencarian berbahasa Inggris. Studio yang muncul dengan website lengkap berisi jadwal, profil guru, dan halaman retreat yang meyakinkan akan memenangkan pendaftaran bernilai besar itu.',
      ],
      ilustrasi: [
        { judul: 'Shala kecil di Ubud dengan jadwal hanya di story Instagram', isi: 'Ilustrasi: sebuah shala keluarga di Ubud mengumumkan perubahan jadwal hanya lewat story Instagram, sehingga peserta dari luar kota sering tiba di kelas yang ternyata sudah diganti. Setelah jadwal dipindah ke halaman khusus di website, kebingungan itu hilang dan pendaftaran retreat pertamanya masuk dari peserta luar negeri.' },
        { judul: 'Studio di Canggu yang meluncurkan teacher training pertama', isi: 'Ilustrasi: sebuah studio di Canggu membuka pelatihan guru 200 jam pertamanya dan membutuhkan halaman pendaftaran yang terlihat serius. Landing page khusus berisi kurikulum, profil pengajar utama, dan formulir pendaftaran dengan uang muka membuat program itu lebih mudah terisi.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website studio yoga di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Halaman retreat atau teacher training tambahan bisa dimasukkan dalam paket, dan kebutuhan spesifiknya dibahas dulu lewat konsultasi gratis.' },
      { q: 'Berapa lama pengerjaan website studio yoga?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak jadwal kelas, profil instruktur, dan foto studio kami terima. Halaman retreat dengan itinerary lengkap atau versi dua bahasa penuh bisa menambah waktu, dan jadwal pastinya disepakati di awal.' },
      { q: 'Apakah jadwal kelas bisa saya perbarui sendiri setiap minggu?', a: 'Bisa. Halaman jadwal disusun agar mudah diperbarui mengikuti perubahan kelas, jam, dan guru pengganti di studio Anda, dan cara mengelolanya kami jelaskan saat serah terima website.' },
      { q: 'Apakah website membantu studio saya ditemukan peserta dari luar negeri?', a: 'Konten dan struktur halaman kami susun untuk pencarian berbahasa Inggris seperti yoga studio in Ubud atau yoga retreat Bali, dilengkapi versi Indonesia untuk pasar lokal. Kami tidak menjanjikan peringkat tertentu, tetapi fondasi SEO lokal dan internasionalnya dibangun sejak awal.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Dimulai dari konsultasi gratis untuk memetakan program dan karakter studio Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Selama pengerjaan, Anda bisa melihat hasil sementaranya lewat server pengembangan.' },
    ],
  },

  kursus: {
    metaTitle: 'Jasa Pembuatan Website Kursus di Bali | zeepage',
    metaDescription: 'Jasa pembuatan website kursus dan sekolah bahasa di Bali: katalog program per level, pendaftaran online, kelas trial. Mulai Rp 799k, konsultasi gratis.',
    keywords: ['jasa pembuatan website kursus di bali', 'website sekolah bahasa bali', 'jasa buat website lembaga kursus', 'website kursus bahasa inggris bali', 'pembuatan website tempat les', 'jasa website bimbingan belajar bali', 'website pendaftaran kursus online'],
    heroLead: 'Orang tua dan calon siswa di Bali membandingkan tempat kursus dari hasil pencarian Google: program apa saja yang ditawarkan, berapa biayanya, dan siapa pengajarnya. Website kursus dengan katalog program per level dan pendaftaran online membuat lembaga Anda terlihat paling siap dan paling dipercaya sejak klik pertama.',
    intro: {
      h2: 'Kenapa Lembaga Kursus di Bali Butuh Website dengan Pendaftaran Online',
      paragraf: [
        'Banyak lembaga kursus dan sekolah bahasa masih mengandalkan brosur, spanduk, dan chat WhatsApp untuk menjelaskan programnya. Calon siswa dan orang tua harus bertanya satu per satu soal level, jadwal, dan biaya, dan tidak sedikit yang berhenti di tengah jalan karena informasi tidak tersedia lengkap pada saat mereka sedang semangat mencari.',
        'Website mengubah proses itu: katalog program per level dengan penjelasan capaian belajar, jadwal dan harga yang transparan, profil pengajar, formulir pendaftaran online, sampai halaman kelas trial gratis sebagai pintu masuk siswa baru. Semua pertanyaan dasar sudah terjawab sebelum calon siswa menghubungi admin Anda.',
        'zeepage berbasis di Bali dan memahami pasar pendidikan di sini, dari sekolah bahasa Inggris untuk pekerja hospitality, kursus Bahasa Indonesia untuk ekspatriat, sampai tempat les anak di Denpasar. Kami membangun website lembaga kursus yang rapi, mudah dikelola admin, dan terstruktur untuk pencarian lokal per program dan per kawasan.',
      ],
      tips: 'Tulis biaya per level secara terbuka untuk menyaring calon siswa yang serius, jadikan formulir kelas trial gratis sebagai penawaran utama di halaman depan, dan umumkan jadwal batch baru jauh hari agar calon siswa bisa merencanakan waktunya.',
    },
    fiturDesc: {
      'Katalog Program & Level': 'Halaman katalog berisi semua program dan level yang ditawarkan beserta target capaian, durasi, dan prasyaratnya, sehingga calon siswa bisa memilih jalur belajar yang tepat secara mandiri.',
      'Pendaftaran Online': 'Formulir pendaftaran terstruktur berisi data siswa, program pilihan, dan jadwal yang diminati, diteruskan otomatis ke WhatsApp atau email admin lembaga Anda.',
      'Jadwal & Harga': 'Tabel jadwal kelas per batch dan biaya per level ditampilkan secara terbuka, termasuk opsi cicilan bila lembaga Anda menyediakannya, agar tidak ada lagi tanya-jawab berulang soal harga.',
      'Profil Pengajar': 'Profil setiap pengajar berisi latar pendidikan, sertifikasi, dan pengalaman mengajarnya, bukti kualitas yang paling sering ditanyakan oleh orang tua dan siswa dewasa.',
      'Testimoni Siswa': 'Bagian khusus untuk menampilkan cerita dan ulasan siswa serta alumni yang pernah belajar di lembaga Anda, ditata rapi agar mudah dibaca oleh calon siswa baru.',
      'Kelas Trial Gratis': 'Halaman dan formulir khusus pendaftaran kelas percobaan gratis, cara paling efektif mengubah pengunjung website yang masih ragu menjadi siswa yang benar-benar terdaftar.',
    },
    lokal: {
      h2: 'Pasar Kursus Bali: Ekspatriat, Pekerja Wisata, dan Keluarga Lokal',
      paragraf: [
        'Kebutuhan belajar di Bali datang dari banyak arah: ekspatriat di Canggu, Sanur, dan Seminyak yang belajar Bahasa Indonesia, pekerja hotel dan restoran yang wajib menguasai Bahasa Inggris dan bahasa asing lainnya, sampai keluarga lokal di Denpasar dan Gianyar yang mencari kursus Bahasa Inggris dan keterampilan untuk anak mereka.',
        'Semua segmen itu memulai pencarian dari Google dengan kata kunci yang spesifik, misalnya kursus bahasa Inggris di Denpasar atau kursus Bahasa Indonesia untuk ekspatriat di Canggu. Lembaga yang muncul dengan website berisi program, jadwal, dan harga yang lengkap akan dipersepsikan jauh lebih profesional daripada yang hanya punya halaman media sosial.',
      ],
      ilustrasi: [
        { judul: 'Sekolah Bahasa Indonesia untuk ekspatriat yang kewalahan melayani email', isi: 'Ilustrasi: sebuah sekolah bahasa untuk ekspatriat melayani pendaftaran lewat rangkaian email yang panjang karena calon siswa tidak menemukan info level dan harga di satu tempat. Setelah katalog program dan formulir pendaftaran online tayang di website, pertanyaan yang masuk tinggal seputar jadwal mulai belajar.' },
        { judul: 'Kursus Bahasa Inggris anak di Denpasar yang membidik orang tua muda', isi: 'Ilustrasi: sebuah kursus anak mengandalkan spanduk dan grup WhatsApp orang tua untuk membuka kelas baru. Dengan halaman kelas trial gratis di website, pendaftaran kelas percobaan mulai datang dari orang tua yang menemukan mereka lewat pencarian Google di kawasan sekitar.' },
      ],
      catatan: 'Semua skenario di atas adalah ilustrasi umum, bukan klien spesifik zeepage.',
    },
    faq: [
      { q: 'Berapa biaya jasa pembuatan website kursus di Bali?', a: 'Paket landing page mulai Rp 799k, sedangkan company profile lengkap mulai Rp 1.499k dan sudah termasuk domain .com gratis 1 tahun. Untuk lembaga dengan banyak program dan level, kebutuhan dibahas dulu lewat konsultasi gratis agar paket yang diambil sesuai skala lembaga Anda.' },
      { q: 'Berapa lama pengerjaan website lembaga kursus?', a: 'Estimasi landing page 1-2 minggu dan company profile 2-4 minggu sejak daftar program, jadwal, harga, dan profil pengajar kami terima. Katalog program yang besar atau formulir pendaftaran bercabang bisa menambah waktu, dan jadwal pastinya disepakati di awal.' },
      { q: 'Ke mana masuknya data dari formulir pendaftaran online?', a: 'Setiap pendaftaran dari formulir website diteruskan langsung ke WhatsApp atau email admin lembaga Anda, lengkap dengan program dan jadwal yang dipilih calon siswa. Hal yang sama berlaku untuk pendaftaran kelas trial gratis, sehingga tim Anda bisa menindaklanjuti dengan cepat.' },
      { q: 'Apakah website membantu kursus saya ditemukan di pencarian lokal?', a: 'Struktur halaman dan konten kami susun untuk menargetkan pencarian per program dan kawasan seperti kursus bahasa Inggris di Denpasar atau sekolah bahasa di Canggu, lengkap dengan data terstruktur bisnis lokal dan panduan Google Business Profile. Kami tidak menjanjikan peringkat tertentu, tetapi fondasi SEO lokalnya dibangun sejak awal.' },
      { q: 'Bagaimana proses pemesanannya dari awal sampai website tayang?', a: 'Dimulai dari konsultasi gratis untuk memetakan program dan segmen siswa Anda, lalu proposal paket, kesepakatan dan DP 50%, pengerjaan dengan update progres berkala, dan serah terima setelah pelunasan. Selama proses berjalan, Anda bisa melihat hasil sementaranya lewat server pengembangan.' },
    ],
  },
};

export const getKontenIndustri = (slug: string): KontenIndustri | undefined =>
  kontenIndustri[slug];
