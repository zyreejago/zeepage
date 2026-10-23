# Skill: Create Blog zeepage — SEO & Bing Webmaster Guidelines

Setiap artikel blog baru harus mengikuti standar SEO maksimal dan Bing Webmaster Guidelines agar layak diindex, digrounding, dan dikutip oleh Bing & Copilot.

## ⚠️ Aturan WAJIB Sebelum Mulai

### 1. Topik HARUS Terkini & Evergreen, Bukan Basi
- Artikel harus tentang **tren terbaru, masalah yang sedang relevan, atau topik evergreen** yang masih dicari orang
- ❌ **JANGAN** buat artikel tentang teknologi/usaha/layanan yang sudah usang
- ❌ **JANGAN** buat artikel yang ngebahas versi lama software jika sudah ada versi baru
- ❌ **JANGAN** buat artikel musiman di luar musimnya (misal: "Persiapan Lebaran" di bulan Desember)
- ✅ Topik bagus: tren website 2025, tips SEO terbaru, perbandingan teknologi terkini, panduan untuk pemula di tahun ini

### 2. Wajib Cek — Jangan Buat Artikel yang Sama dengan yang Sudah Ada
Sebelum menentukan topik, **WAJIB cek** daftar blog yang sudah ada di `src/pages/id/blog/`:
- `memilih-jasa-website/` — 7 Tips Memilih Jasa Pembuatan Website
- `biaya-bikin-website/` — Berapa Biaya Bikin Website?
- `landing-page-vs-company-profile/` — Landing Page vs Company Profile

**Aturan:**
- Topik baru **HARUS berbeda** dari 3 blog di atas — jangan buat variasi tipis-tipis dari topik yang sama
- Contoh **DILARANG**: "5 Tips Memilih Jasa Website" (mirip), "Biaya Bikin Toko Online" (mirip biaya-bikin-website)
- Jika ragu apakah topik terlalu mirip, **TANYA** dulu sebelum mulai nulis
- Idealnya topik baru membahas **sudut pandang atau segmen yang benar-benar berbeda**

---

## 3. URL & Lokasi File

Simpan di: `src/pages/id/blog/[slug]/index.astro`

### Aturan URL (Bing Guideline #17: Focus Each URL on a Single Topic):
- Gunakan slug deskriptif, 2-5 kata, pisah dengan `-`
- Jangan gunakan angka tanggal atau ID
- Contoh: `biaya-bikin-website/` ✅, `artikel-123/` ❌
- URL harus stabil selamanya — jangan diubah setelah publish (#20)

**WAJIB: Tambahkan artikel ke daftar post di halaman indeks blog:**
- `src/pages/id/blog/index.astro` → tambahkan objek baru ke array `const posts = [...]` (urutkan dari terbaru ke terlama)
- `src/pages/en/blog/index.astro` → tambahkan objek baru ke array `const posts = [...]` (urutkan dari terbaru ke terlama)
- Format objek: `{ title, href, image, date, excerpt }`
- `href` harus sesuai dengan URL folder blog, contoh: `/id/blog/judul-article/`
- `image` gunakan URL Unsplash yang sudah diverifikasi berfungsi
- Setelah ditambahkan, jalankan `npm run build` untuk memastikan tidak ada error


**Setelah publish**, jalankan IndexNow via build script (`npm run build`) — build otomatis notify Bing dalam 1-2 jam (#4).

---

## 4. Title Tag (max 55-60 karakter)

Bing #13: Title harus jelas, deskriptif, dan mencerminkan isi.

Format: `[Hook + Keyword Utama] | zeepage`

Aturan:
- Letakkan keyword utama di depan
- Max 60 karakter (Bing potong lebih dari itu)
- Unik — tidak boleh sama dengan artikel lain (#13)
- Contoh: `7 Tips Memilih Jasa Website Agar Tidak Tertipu | zeepage`

---

## 5. Meta Description (max 150-160 karakter)

Bing #13: Meta description yang baik meningkatkan eligibility untuk grounding.

Format: Hook + manfaat + keyword. Contoh:
```
"75% orang menilai kredibilitas dari website. Jangan sampai salah pilih jasa pembuatan website profesional."
```

Aturan:
- Max 160 karakter
- Bukan copy-paste dari kalimat pertama artikel
- Mengandung keyword utama
- Menggoda orang untuk klik

---

## 6. Heading Hierarchy (Bing #13: Gunakan heading logis)

```html
<h1>[Judul Artikel — hanya 1 per halaman]</h1>
<h2>[Sub-bagian utama]</h2>
<h3><Sub-bagian pendukung (jika perlu)></h3>
```

Aturan ketat:
- **Hanya 1 `<h1>`** — judul artikel
- `<h2>` untuk sub-bagian utama (minimal 3-4)
- `<h3>` hanya jika ada sub-topik di dalam `<h2>`
- Jangan loncat: `<h1>` → `<h3>` langsung ❌
- Setiap `<h2>` harus mengandung setidaknya 1 paragraf konten bermakna

---

## 7. Opening Hook — Surface Key Information Early (Bing #18)

Paragraf pertama WAJIB langsung menyentuh inti masalah.

Format:
```
"[Kutipan / statistik mengejutkan] [Fakta]. [Konsekuensi / urgensi] [Manfaat baca artikel ini]."
```

Aturan:
- Jangan pakai pembukaan panjang atau basa-basi
- 1-2 kalimat langsung ke inti (#18)
- Fluff/pengantar panjang = turunkan eligibility grounding

---

## 8. Konten — Content Quality (Bing #11, #15, #17)

### Setiap artikel harus:
- **Fokus pada 1 topik saja** (#17) — jangan campur 2 topik berbeda dalam 1 URL
- **Original + otoritatif** (#11) — bukan hasil scraping/rewriting tipis-tipis
- **Mandiri** (#15) — fakta dan klaim harus eksplisit, tidak bergantung pada konteks luar
- **Akurat & update** (#19) — revisi jika ada data/usang

### Struktur per sub-bagian:
1. `<h2>` sub-judul
2. Paragraf pembuka yang jelas
3. **Bold** pada kata kunci penting (tapi jangan spam — #22)
4. Sisipkan nilai jual zeepage secara natural
5. 1 highlight box per 2-3 sub-bagian

### Aturan Penulisan:
- ❌ **DILARANG KERAS** menggunakan tanda `-` (strip) di dalam konten artikel — termasuk untuk bullet point, pemisah, atau dekorasi teks. Gunakan tag HTML `<ul>`/`<li>` untuk list, `<hr>` untuk pemisah
- ❌ **DILARANG KERAS** menggunakan `—` (em dash / garis panjang) di dalam konten artikel. Ganti dengan tanda baca lain seperti `:` (titik dua) atau `.` (titik) atau tulis ulang kalimatnya
- ❌ **DILARANG** menggunakan `---` sebagai garis pemisah di dalam artikel
- ✅ Semua teks paragraf HARUS rata kanan kiri — gunakan class `text-justify` di `<div class="prose">`
- ✅ Gunakan format HTML yang proper untuk semua elemen

### Highlight Box (Inline CTA):
```html
<div class="bg-[#eef2ff] rounded-2xl p-8 my-8 border-l-4 border-[#2152cf]">
  <p class="text-sm text-gray-600"><strong class="text-[#1e2547]">Tips dari zeepage:</strong> [nilai jual]</p>
</div>
```

### Entity Definition (Bing #16):
- Nama orang/organisasi/produk harus konsisten di seluruh artikel
- Jangan gunakan referensi ambigu ("platform ini", "tools tersebut")
- Pertama kali disebut, tulis nama lengkap dulu, baru boleh disingkat

---

## 9. Structured Data (Bing #14)

WAJIB tambahkan JSON-LD `Article` atau `BlogPosting` di setiap artikel.

Template:
```astro
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Judul Artikel]",
  "description": "[Meta Description]",
  "author": {
    "@type": "Organization",
    "name": "zeepage"
  },
  "publisher": {
    "@type": "Organization",
    "name": "zeepage",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zeepage.com/logo.png"
    }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://zeepage.com/id/blog/[slug]/"
  }
};
```

**Warning**: Markup harus akurat — jangan asal copas (#22: misleading structured data bisa dihukum).

---

## 10. Gambar — Optimasi untuk Bing (Bing #12)

Aturan:
- 2-3 gambar per artikel dari Unsplash
- **Alt text**: deskriptif, mengandung keyword natural (#12)
- **File name**: gunakan nama deskriptif, bukan `IMG_1234.jpg`
- `loading="lazy"` wajib di semua gambar
- Jangan jadikan gambar sebagai satu-satunya sumber informasi (#12)
- Class: `w-full rounded-2xl my-8 shadow-lg`
- ✅ **WAJIB verifikasi URL gambar berfungsi** — test dulu di browser sebelum publish. Jangan asal copas URL Unsplash yang belum dicek. Foto Unsplash bisa dihapus atau diprivate kapan saja oleh uploader

### Cara verifikasi gambar Unsplash:
1. Buka URL gambar di browser (contoh: `https://images.unsplash.com/photo-xxxx?w=800&q=80`)
2. Pastikan muncul gambarnya, bukan halaman 404 atau error
3. Jika 404, cari foto alternatif yang masih aktif
4. Parameter `w` (width) dan `q` (quality) aman digonta-ganti sesuai kebutuhan

### Aturan Wajib: Daftar dan Larangan Menggunakan Ulang Gambar

Setiap artikel baru **WAJIB mencatat semua gambar** yang digunakan sebelum artikel dipublish. Daftar ini berlaku untuk artikel bahasa Indonesia (`id`) dan Inggris (`en`).

- Identitas gambar ditentukan oleh **Unsplash Photo ID** pada URL, yaitu bagian setelah `photo-`. Parameter seperti `?w=800&q=80` tidak membuat gambar menjadi baru.
- Sebelum memilih gambar, cek Photo ID di daftar registry di bawah untuk **ID dan EN**.
- **DILARANG menggunakan Photo ID yang sudah pernah dipakai** untuk artikel lain, termasuk artikel terjemahan, artikel terkait, atau artikel bahasa yang berbeda.
- Untuk pasangan artikel ID dan EN yang membahas topik sama, gunakan gambar yang berbeda di masing-masing bahasa.
- Gambar yang muncul di `src/pages/id/blog/index.astro` atau `src/pages/en/blog/index.astro` juga dihitung sebagai penggunaan. Jika gambar artikel dipakai sebagai thumbnail indeks, catat slug artikel dan `index blog`.
- Setiap artikel baru harus memakai 2 sampai 3 Photo ID baru yang belum ada di registry.
- Tambahkan record gambar segera setelah artikel dibuat dan sebelum menjalankan `npm run build`.
- Jika URL gambar tidak dapat diakses, pilih Photo ID lain lalu perbarui registry. Jangan menggunakan URL lama yang sudah 404 atau diprivate.
- Jika gambar diganti, jangan hapus riwayat Photo ID lama. Tandai sebagai `Diganti` dan tambahkan Photo ID baru dengan status `Aktif`.
- Duplikasi yang sudah ada pada artikel lama tidak perlu diganti secara otomatis. Registry ini adalah baseline; larangan berlaku untuk setiap pemilihan gambar baru mulai sekarang.

### Cara Memperbarui Registry

1. Setelah artikel selesai dibuat, ambil semua Photo ID dari URL gambar artikel.
2. Cocokkan setiap Photo ID dengan tabel `ID` atau `EN` di registry.
3. Jika Photo ID belum ada, tambahkan satu baris baru dan tulis slug artikel serta status `Aktif`.
4. Jika gambar juga dipakai di halaman indeks blog, tambahkan `index blog` pada kolom `Dipakai di`.
5. Simpan perubahan registry sebelum menjalankan `npm run build`.

### Format Pencatatan Gambar Baru

Gunakan format berikut untuk menambah record ke tabel bahasa yang sesuai:

```markdown
| Photo ID | URL Unsplash | Dipakai di | Bahasa | Tanggal dicatat | Status |
|---|---|---|---|---|---|
| `[photo-id]` | `https://images.unsplash.com/photo-[photo-id]?w=800&q=80` | `[slug-artikel]` atau `index blog` | `ID` / `EN` | `YYYY-MM-DD` | `Aktif` |
```

### Registry Gambar Blog Saat Ini

Registry ini diperbarui pada **7 Oktober 2026**. Semua Photo ID pada tabel berikut tercatat sebagai riwayat penggunaan dan tidak boleh digunakan kembali untuk artikel baru. Status ketersediaan URL diperiksa secara terpisah pada bagian **Catatan Ketersediaan URL**.

#### ID

| No | Photo ID | URL Unsplash | Dipakai saat ini |
|---:|---|---|---|
| 1 | `1432821596592-e2c18b78144f` | `https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80` | `index blog`, `panduan-seo-dasar`, `seo-multibahasa-hreflang`, `strategi-konten-website-efektif` |
| 2 | `1454165804606-c3d57bc86b40` | `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80` | `website-portofolio-freelancer` |
| 3 | `1460925895917-afdab827c52f` | `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80` | `core-web-vitals-optimal`, `fitur-wajib-website-bisnis`, `index blog`, `landing-page-vs-company-profile`, `memilih-jasa-website`, `migrasi-website-aman`, `optimasi-landing-page`, `redesain-website`, `website-roi-investasi-digital`, `woocommerce-vs-shopify-2025` |
| 4 | `1489875347897-49f64b51c1f8` | `https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&q=80` | `index blog`, `website-statis-vs-dinamis` |
| 5 | `1497366216548-37526070297c` | `https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80` | `index blog`, `manfaat-blog-untuk-bisnis` |
| 6 | `1499750310107-5fef28a66643` | `https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80` | `brief-website-proyek`, `index blog` |
| 7 | `1504384308090-c894fdcc538d` | `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80` | `branding-melalui-website`, `index blog`, `migrasi-website-aman` |
| 8 | `1517245386807-bb43f82c33c4` | `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80` | `index blog`, `testimoni-social-proof-website` |
| 9 | `1519389950473-47ba0277781c` | `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80` | `cara-menggunakan-google-analytics`, `index blog` |
| 10 | `1522542550221-31fd19575a2d` | `https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80` | `desain-website-inklusif`, `index blog`, `website-portofolio-freelancer` |
| 11 | `1526374965328-7f61d4dc18c5` | `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80` | `index blog`, `pentingnya-website-mobile-friendly` |
| 12 | `1533750516457-a7f992034fec` | `https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80` | `panduan-memilih-domain` |
| 13 | `1543286386-713bdd548da4` | `https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80` | `strategi-cro-tingkatkan-konversi` |
| 14 | `1550751827-4bd374c3f58b` | `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80` | `keamanan-website-bisnis` |
| 15 | `1551288049-bebda4e38f71` | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80` | `cara-menggunakan-google-analytics`, `core-web-vitals-optimal`, `index blog`, `memilih-jasa-website`, `panduan-seo-dasar`, `pentingnya-website-mobile-friendly`, `redesain-website`, `seo-multibahasa-hreflang`, `website-roi-investasi-digital` |
| 16 | `1551836022-deb4983cc9c0` | `https://images.unsplash.com/photo-1551836022-deb4983cc9c0?w=800&q=80` | `index blog`, `strategi-cro-tingkatkan-konversi` |
| 17 | `1552664730-d307ca884978` | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80` | `brief-website-proyek`, `strategi-konten-website-efektif` |
| 18 | `1553877522-43269d4ea984` | `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80` | `fitur-wajib-website-bisnis`, `index blog`, `memilih-jasa-website`, `optimasi-landing-page` |
| 19 | `1554224155-6726b3ff858f` | `https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80` | `biaya-bikin-website`, `index blog`, `tingkatkan-penjualan-dengan-website` |
| 20 | `1555949963-ff9fe0c870eb` | `https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80` | `website-statis-vs-dinamis` |
| 21 | `1556155092-490a1ba16284` | `https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80` | `index blog`, `website-vs-media-sosial` |
| 22 | `1556742049-0cfed4f6a45d` | `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80` | `index blog`, `panduan-toko-online-pemula`, `woocommerce-vs-shopify-2025` |
| 23 | `1556761175-b413da4baf72` | `https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80` | `biaya-bikin-website`, `branding-melalui-website`, `index blog`, `panduan-memilih-domain`, `tingkatkan-penjualan-dengan-website` |
| 24 | `1558494949-ef010cbdcc31` | `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80` | `index blog`, `tips-memilih-hosting-website` |
| 25 | `1559136555-9303baea8ebd` | `https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80` | `landing-page-vs-company-profile` |
| 26 | `1563013544-824ae1b704d3` | `https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80` | `index blog`, `keamanan-website-bisnis` |
| 27 | `1573164713714-d95e436ab8d6` | `https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80` | `desain-website-inklusif`, `index blog` |
| 28 | `1573164713988-8665fc963095` | `https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80` | `index blog`, `panduan-toko-online-pemula` |
| 29 | `1579165466741-7f35e475566f` | `https://images.unsplash.com/photo-1579165466741-7f35e475566f?w=800&q=80` | `integrasi-video-website` |
| 30 | `1597852074816-d933c7d2b988` | `https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80` | `tips-memilih-hosting-website` |
| 31 | `1600880292203-757bb62b4baf` | `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80` | `testimoni-social-proof-website` |
| 32 | `1611162616305-c69b3fa7fbe0` | `https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80` | `index blog`, `integrasi-video-website` |
| 33 | `1611162617213-7d7a39e9b1d7` | `https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80` | `manfaat-blog-untuk-bisnis` |
| 34 | `1611926653458-09294b3142bf` | `https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80` | `website-vs-media-sosial` |
| 35 | `1620712943543-bcc4688e7485` | `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80` | `cara-membuat-website-dengan-ai` |
| 36 | `1677442136019-21780ecad995` | `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80` | `cara-membuat-website-dengan-ai`, `index blog` |
| 37 | `1506740480073-8729e8c7b2d8` | `https://images.unsplash.com/photo-1506740480073-8729e8c7b2d8?w=800&q=80` | `tren-desain-website-2025` |
| 38 | `1558655146930-4d7a8b7c5e4a` | `https://images.unsplash.com/photo-1558655146930-4d7a8b7c5e4a?w=800&q=80` | `tren-desain-website-2025` |
| 39 | `1593642532973-d31b6557fa68` | `https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&q=80` | `tren-desain-website-2025` |

| 40 | `1486406146926-c627a92ad1ab` | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80` | `panduan-google-my-business`, index blog |
| 41 | `1526379082225-41fd7484c411` | `https://images.unsplash.com/photo-1526379082225-41fd7484c411?w=800&q=80` | `panduan-google-my-business`, index blog |
| 42 | `1517048676732-d65bc937f952` | `https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80` | `email-marketing-bisnis`, index blog |
| 43 | `1557804506-669a67965ba0` | `https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80` | `email-marketing-bisnis`, index blog |
| 44 | `1516321318423-f06f85e504b3` | `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80` | `checklist-website-sebelum-launching`, index blog |
| 45 | `1461749280684-dccba630e2f6` | `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80` | `checklist-website-sebelum-launching` |
| 46 | `1498050108023-c5249f4df085` | `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80` | `checklist-website-sebelum-launching` |
| 47 | `1485827404703-89b55fcc595e` | `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80` | `optimasi-aeo-ai-search`, `index blog` |
| 48 | `1518770660439-4636190af475` | `https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80` | `optimasi-aeo-ai-search` |
| 49 | `1676299081847-824916de030a` | `https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80` | `optimasi-aeo-ai-search` |
| 50 | `1675495666895-9091741bfd78` | `https://images.unsplash.com/photo-1675495666895-9091741bfd78?w=800&q=80` | `panduan-membuat-blog-seo`, `index blog` |
| 51 | `1461988320302-91bde64fc8e4` | `https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=800&q=80` | `panduan-membuat-blog-seo` |
| 52 | `1484480974693-6ca0a78fb36b` | `https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80` | `formulir-website-konversi`, `index blog` |
| 53 | `1550005809-91ad75fb315f` | `https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80` | `formulir-website-konversi` |
| 54 | `1517694712202-14dd9538aa97` | `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80` | `progressive-web-app-bisnis`, `index blog` |
| 55 | `1526498460520-4c246339dccb` | `https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80` | `progressive-web-app-bisnis` |
| 56 | `1507238691740-187a5b1d37b8` | `https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80` | `progressive-web-app-bisnis` |
| 57 | `1762330465857-07e4c81c0dfa` | `https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?w=800&q=80` | `chatbot-ai-website-bisnis`, `index blog` |
| 58 | `1766066014237-00645c74e9c6` | `https://images.unsplash.com/photo-1766066014237-00645c74e9c6?w=800&q=80` | `chatbot-ai-website-bisnis` |
| 59 | `1762330467475-a565d04e1808` | `https://images.unsplash.com/photo-1762330467475-a565d04e1808?w=800&q=80` | `chatbot-ai-website-bisnis` |
| 60 | `1542744173-8e7e53415bb0` | `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80` | `customer-journey-website-bisnis`, `index blog` |
| 61 | `1586296835409-fe3fe6b35b56` | `https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?w=800&q=80` | `customer-journey-website-bisnis` |
| 62 | `1522199755839-a2bacb67c546` | `https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80` | `customer-journey-website-bisnis` |
| 63 | `1451187580459-43490279c0fa` | `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80` | `strategi-link-building-aman`, `index blog` |
| 64 | `1521791136064-7986c2920216` | `https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80` | `strategi-link-building-aman` |
| 65 | `1516116216624-53e697fedbea` | `https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80` | `schema-markup-structured-data`, `index blog` |
| 66 | `1607799279861-4dd421887fb3` | `https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80` | `schema-markup-structured-data` |
| 67 | `1563986768609-322da13575f3` | `https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80` | `cookie-consent-privasi-website`, `index blog` |
| 68 | `1450101499163-c8848c66ca85` | `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80` | `cookie-consent-privasi-website` |
| 69 | `1516035069371-29a1b244cc32` | `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80` | `fotografi-website-bisnis`, `index blog` |
| 70 | `1554048612-b6a482bc67e5` | `https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80` | `fotografi-website-bisnis` |
| 71 | `1531973576160-7125cd663d86` | `https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80` | `panduan-google-search-console`, `index blog` |
| 72 | `1560472354-b33ff0c44a43` | `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80` | `panduan-google-search-console` |
| 73 | `1531403009284-440f080d1e12` | `https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80` | `faktor-peringkat-google`, `index blog` |
| 74 | `1531482615713-2afd69097998` | `https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80` | `faktor-peringkat-google` |

#### EN

| No | Photo ID | URL Unsplash | Dipakai saat ini |
|---:|---|---|---|
| 1 | `1432821596592-e2c18b78144f` | `https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80` | `multilingual-seo-hreflang`, `web-accessibility-wcag`, `zero-click-seo` |
| 2 | `1434030216411-0b793f4b4173` | `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80` | `why-business-needs-blog` |
| 3 | `1452457750107-cd8455f62db1` | `https://images.unsplash.com/photo-1452457750107-cd8455f62db1?w=800&q=80` | `essential-business-website-pages` |
| 4 | `1455390582262-044cdead277a` | `https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80` | `index blog`, `website-copy-that-converts`, `website-typography-guide` |
| 5 | `1460925895917-afdab827c52f` | `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80` | `index blog`, `landing-page-optimization`, `seo-beginners-guide`, `website-migration-checklist`, `website-redesign-guide`, `website-roi-guide` |
| 6 | `1486312338219-ce68d2c6f44d` | `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80` | `essential-business-website-pages`, `index blog` |
| 7 | `1489875347897-49f64b51c1f8` | `https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&q=80` | `website-speed-optimization` |
| 8 | `1499750310107-5fef28a66643` | `https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80` | `index blog`, `website-brief-guide`, `why-business-needs-blog` |
| 9 | `1504384308090-c894fdcc538d` | `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80` | `build-brand-identity-website`, `index blog`, `website-migration-checklist` |
| 10 | `1504639725590-34d0984388bd` | `https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80` | `index blog`, `website-speed-optimization` |
| 11 | `1507003211169-0a1dd7228f2d` | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80` | `website-typography-guide` |
| 12 | `1512941937669-90a1b58e7e9c` | `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80` | `index blog`, `mobile-first-indexing` |
| 13 | `1517245386807-bb43f82c33c4` | `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80` | `index blog`, `testimonials-social-proof-website` |
| 14 | `1519389950473-47ba0277781c` | `https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80` | `google-analytics-beginners-guide` |
| 15 | `1522202176988-66273c2fd55f` | `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80` | `build-brand-identity-website`, `ecommerce-vs-physical-store`, `index blog` |
| 16 | `1522542550221-31fd19575a2d` | `https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80` | `website-accessibility` |
| 17 | `1525904097878-94fb15835963` | `https://images.unsplash.com/photo-1525904097878-94fb15835963?w=800&q=80` | `website-color-psychology` |
| 18 | `1542744094-3a31f272c490` | `https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80` | `index blog`, `web-accessibility-wcag` |
| 19 | `1543286386-713bdd548da4` | `https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80` | `conversion-rate-optimization` |
| 20 | `1545239351-1141bd82e8a6` | `https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80` | `web-design-trends-2026` |
| 21 | `1550751827-4bd374c3f58b` | `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80` | `website-security-essentials` |
| 22 | `1551288049-bebda4e38f71` | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80` | `index blog`, `local-seo-guide`, `mobile-first-indexing`, `multilingual-seo-hreflang`, `seo-beginners-guide`, `small-business-website-2025`, `website-roi-guide`, `zero-click-seo` |
| 23 | `1551836022-d5d88e9218df` | `https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80` | `website-copy-that-converts` |
| 24 | `1551836022-deb4983cc9c0` | `https://images.unsplash.com/photo-1551836022-deb4983cc9c0?w=800&q=80` | `conversion-rate-optimization`, `index blog` |
| 25 | `1552664730-d307ca884978` | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80` | `google-analytics-beginners-guide`, `index blog`, `website-brief-guide` |
| 26 | `1553877522-43269d4ea984` | `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80` | `index blog`, `landing-page-optimization`, `small-business-website-2025`, `website-maintenance-guide` |
| 27 | `1554224155-6726b3ff858f` | `https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80` | `choose-domain-name`, `index blog`, `website-maintenance-guide`, `website-redesign-guide` |
| 28 | `1555949963-aa79dcee981c` | `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80` | `index blog`, `website-security-essentials` |
| 29 | `1556740758-90de374c12ad` | `https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80` | `ecommerce-vs-physical-store` |
| 30 | `1556761175-b413da4baf72` | `https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80` | `choose-domain-name`, `cost-of-not-having-website`, `index blog` |
| 31 | `1559136555-9303baea8ebd` | `https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80` | `cost-of-not-having-website`, `index blog` |
| 32 | `1561070791-2526d30994b5` | `https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80` | `index blog`, `website-color-psychology` |
| 33 | `1569336411162-8a12c8e2b9a3` | `https://images.unsplash.com/photo-1569336411162-8a12c8e2b9a3?w=800&q=80` | `index blog`, `local-seo-guide` |
| 34 | `1573164713714-d95e436ab8d6` | `https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80` | `index blog`, `website-accessibility` |
| 35 | `1579165466741-7f35e475566f` | `https://images.unsplash.com/photo-1579165466741-7f35e475566f?w=800&q=80` | `video-marketing-website` |
| 36 | `1581291518633-83b4ebd1d83e` | `https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80` | `index blog`, `web-design-trends-2026` |
| 37 | `1600880292203-757bb62b4baf` | `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80` | `testimonials-social-proof-website` |
| 38 | `1611162616305-c69b3fa7fbe0` | `https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80` | `index blog`, `video-marketing-website` |
| 39 | `1620712943543-bcc4688e7485` | `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80` | `ai-web-design-tools`, `index blog` |
| 40 | `1677442136019-21780ecad995` | `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80` | `ai-web-design-tools` |
| 41 | `1535378917042-10a22c95931a` | `https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80` | `answer-engine-optimization`, `index blog` |
| 42 | `1591453089816-0fbb971b454c` | `https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80` | `answer-engine-optimization` |
| 43 | `1531746790731-6c087fecd65a` | `https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80` | `answer-engine-optimization` |
| 44 | `1605379399642-870262d3d051` | `https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80` | `how-to-create-seo-friendly-blog`, `index blog` |
| 45 | `1636056514473-dd532ed74cf2` | `https://images.unsplash.com/photo-1636056514473-dd532ed74cf2?w=800&q=80` | `how-to-create-seo-friendly-blog` |
| 46 | `1497215728101-856f4ea42174` | `https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80` | `ux-writing-website-conversions`, `index blog` |
| 47 | `1522071820081-009f0129c71c` | `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80` | `ux-writing-website-conversions` |
| 48 | `1496181133206-80ce9b88a853` | `https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80` | `progressive-web-app-business`, `index blog` |
| 49 | `1555421689-d68471e189f2` | `https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80` | `progressive-web-app-business` |
| 50 | `1526040652367-ac003a0475fe` | `https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=800&q=80` | `progressive-web-app-business` |
| 51 | `1558089687-f282ffcbc126` | `https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80` | `voice-search-optimization`, `index blog` |
| 52 | `1519558260268-cde7e03a0152` | `https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800&q=80` | `voice-search-optimization` |
| 53 | `1512446816042-444d641267d4` | `https://images.unsplash.com/photo-1512446816042-444d641267d4?w=800&q=80` | `voice-search-optimization` |
| 54 | `1569143955568-8a0a706d0297` | `https://images.unsplash.com/photo-1569143955568-8a0a706d0297?w=800&q=80` | `headless-cms-business`, `index blog` |
| 55 | `1555066931-4365d14bab8c` | `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80` | `headless-cms-business` |
| 56 | `1628607292260-9195108b03b7` | `https://images.unsplash.com/photo-1628607292260-9195108b03b7?w=800&q=80` | `headless-cms-business` |
| 57 | `1521737711867-e3b97375f902` | `https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80` | `link-building-strategies`, `index blog` |
| 58 | `1544197150-b99a580bb7a8` | `https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80` | `link-building-strategies` |
| 59 | `1542831371-29b0f74f9713` | `https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80` | `schema-markup-structured-data`, `index blog` |
| 60 | `1509228468518-180dd4864904` | `https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80` | `schema-markup-structured-data` |
| 61 | `1633265486064-086b219458ec` | `https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80` | `cookie-consent-website-privacy`, `index blog` |
| 62 | `1591696205602-2f950c417cb9` | `https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80` | `cookie-consent-website-privacy` |
| 63 | `1520390138845-fd2d229dd553` | `https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=800&q=80` | `website-photography-business`, `index blog` |
| 64 | `1542038784456-1ea8e935640e` | `https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80` | `website-photography-business` |
| 65 | `1521737604893-d14cc237f11d` | `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80` | `google-search-console-beginners-guide`, `index blog` |
| 66 | `1556761175-5973dc0f32e7` | `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80` | `google-search-console-beginners-guide` |
| 67 | `1507679799987-c73779587ccf` | `https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80` | `google-ranking-factors`, `index blog` |
| 68 | `1526379095098-d400fd0bf935` | `https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80` | `google-ranking-factors` |

### Catatan Ketersediaan URL

Per 7 Oktober 2026, **98 dari 102 Photo ID** dalam registry mengembalikan HTTP 200. Empat URL berikut mengembalikan HTTP 404 dan tetap dicatat sebagai riwayat penggunaan, tetapi berstatus **Tidak tersedia** serta tidak boleh dipilih untuk artikel baru:

- `1551836022-deb4983cc9c0`
- `1579165466741-7f35e475566f`
- `1452457750107-cd8455f62db1`
- `1569336411162-8a12c8e2b9a3`

Ganti URL yang 404 pada artikel lama sebelum refresh atau publish ulang. Photo ID yang tidak tersedia tetap tidak boleh digunakan kembali; pilih Photo ID baru dan catat di registry.

---

## 11. Internal Linking — Bangun Authority (Bing #5, #17)

WAJIB:
- Breadcrumb di hero: `Beranda / Blog / [Judul]` — link ke `/id/` dan `/id/blog/`
- Related articles di akhir artikel (2 artikel lain)
- Link ke halaman service/homepage jika relevan

Aturan:
- Pakai `<a>` standar, bukan `onclick` atau JS (#5)
- Anchor text relevan, jangan "klik di sini"
- Link ke halaman internal zeepage, bukan external terus

---

## 12. CTA (Call to Action) — 2 Wajib

### Inline CTA (di tengah, dalam highlight box)
```html
<div class="bg-[#eef2ff] rounded-2xl p-8 my-8 border-l-4 border-[#2152cf]">
  <p class="text-base font-bold text-[#1e2547] mb-2">[hook]</p>
  <p class="text-sm text-gray-600">[deskripsi manfaat]. <strong>[closing]</strong></p>
</div>
```

### Closing CTA Box (di akhir, sebelum footer)
```html
<div class="bg-[#F8F9FC] rounded-2xl p-8 my-10 text-center border border-gray-200">
  <p class="text-lg font-bold text-[#1e2547] mb-3">[headline]</p>
  <p class="text-gray-600 text-sm mb-6">[deskripsi]. <strong>[closing hook].</strong></p>
  <a href="https://wa.me/6288987244675?text=[custom text]" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#2152cf] text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md">
    [CTA Text]
  </a>
</div>
```

---

## 13. Sticky Promo Card (Sidebar Artikel)

Setiap artikel WAJIB memiliki sticky promo card di sebelah kanan konten.

### Struktur Layout Artikel:
```html
<article class="py-16 bg-white">
  <div class="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:justify-center gap-8">
    <div class="max-w-3xl w-full min-w-0">
      <div class="prose prose-lg max-w-none min-w-0 text-justify">
        ... konten artikel ...
      </div>
    </div>
    <StickyPromo lang="id" />  <!-- atau lang="en" untuk artikel Inggris -->
  </div>
</article>
```

### Aturan:
- Gunakan komponen `<StickyPromo lang="id" />` atau `<StickyPromo lang="en" />` sesuai bahasa artikel
- Komponen sudah include: import dari `../../../../components/StickyPromo.astro`
- Card sticky di kanan dengan class `sticky top-24`
- Hanya muncul di layar `lg:` ke atas — mobile otomatis hidden
- Jangan hapus atau modifikasi komponen ini

---

## 14. WA Custom Message

Setiap CTA WA harus pakai custom text yang relevan dengan topik artikel:
- `saya%20baca%20artikel%20biaya%20bikin%20website`
- `saya%20baca%20artikel%20landing%20page%20vs%20company%20profile`

Bing #15: Pastikan informasi kontak eksplisit dan bisa diverifikasi.

---

## 15. Meta Directives (Bing #10)

Di BaseLayout sudah otomatis:
- `index, follow` — biarkan
- Jangan tambahkan `NOCACHE` atau `NOARCHIVE` jika ingin artikel digunakan di grounding/Copilot
- Jangan gunakan `DATA-NOSNIPPET` — ini membatasi kualitas citation

---

## 16. Freshness & Update (Bing #19)

- Setiap artikel yang diupdate: ubah `dateModified` di structured data
- Jalankan ulang `npm run build` (trigger IndexNow) — Bing tau konten berubah dalam 1-2 jam
- Jangan biarkan artikel usang dengan info salah — revisi atau hapus

---

## 17. Checklist Final Sebelum Publish

- [ ] Topik **terkini / evergreen** — bukan basi atau usang
- [ ] Topik **benar-benar berbeda** dari 3 blog yang sudah ada
- [ ] Title unik, max 60 karakter, keyword di depan
- [ ] Meta description, max 160 karakter
- [ ] Hanya 1 `<h1>`, heading hierarchy logis
- [ ] Paragraf pertama langsung ke inti (Bing #18)
- [ ] Konten original, fokus 1 topik (Bing #17)
- [ ] Minimal 1 highlight box
- [ ] Inline CTA + Closing CTA
- [ ] JSON-LD structured data (Article)
- [ ] Gambar: alt text deskriptif, lazy loading, URL berfungsi, dan Photo ID dicatat di registry ID/EN tanpa duplikasi
- [ ] Breadcrumb + related articles (internal link)
- [ ] Custom WA message sesuai topik
- [ ] URL slug deskriptif, stabil
- [ ] **Post ditambahkan ke array `const posts` di `src/pages/id/blog/index.astro` dan/atau `src/pages/en/blog/index.astro`**
- [ ] `npm run build` sukses (pastikan ga error)

---

## 18. Larangan (Bing Abuse Policy — #22)

- ❌ Jangan keyword stuffing — tulis untuk manusia, bukan mesin
- ❌ Jangan copy-paste artikel orang lain — ini scraping
- ❌ Jangan generate konten massal tanpa editorial review
- ❌ Jangan cloaking — konten harus sama untuk crawler dan user
- ❌ Jangan prompt injection / konten manipulatif untuk AI
- ❌ Jangan afiliasi doang tanpa added value (review/perbandingan asli)
