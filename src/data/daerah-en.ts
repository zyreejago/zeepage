export interface DaerahEn {
  /** wilayah induk / zone in English */
  induk: string;
  /** English label for the area type */
  tipeLabel: 'Regency' | 'City' | 'Area' | 'Province';
  /** unique English description for content & meta */
  deskripsi: string;
  /** English industries */
  potensi: string[];
}

/**
 * English copy for each area, keyed by the same slug as `daerahList`.
 * Proper nouns (area name, landmarks) are reused from `daerah.ts`.
 */
export const daerahEn: Record<string, DaerahEn> = {
  bali: {
    induk: 'Indonesia',
    tipeLabel: 'Province',
    deskripsi:
      'Bali is a world-class travel destination and home to thousands of businesses: hotels, villas, restaurants, professional services, and creative SMEs. Digital competition on the Island of the Gods is fierce, making a professional website the key differentiator.',
    potensi: ['Hotels & Villas', 'Restaurants & Cafes', 'Professional Services', 'Retail & SMEs', 'Property', 'Clinics & Wellness'],
  },
  badung: {
    induk: 'South Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Badung Regency is the heart of South Bali's tourism and business scene, home to Kuta, Seminyak, Canggu, Jimbaran, and Nusa Dua. Competition here is fierce, so a professional digital presence is what sets a business apart.",
    potensi: ['Hotels & Villas', 'Restaurants & Cafes', 'Beach Clubs', 'Retail & Boutiques', 'Property & Villa Rentals'],
  },
  denpasar: {
    induk: 'South Bali',
    tipeLabel: 'City',
    deskripsi:
      'Denpasar is the capital of Bali Province and the center of government, education, and economy. Service businesses, restaurants, and clinics in this city compete hard for local Google searches.',
    potensi: ['SMEs & Retail', 'Culinary', 'Professional Services', 'Clinics & Healthcare', 'Education & Courses'],
  },
  gianyar: {
    induk: 'East Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Gianyar Regency is known as Bali's art and culture hub, with Ubud as a magnet for international travelers. The creative economy, wellness, and homestays are growing fast here.",
    potensi: ['Homestays & Villas', 'Yoga & Wellness', 'Art Galleries & Crafts', 'Healthy Dining', 'Tours & Travel'],
  },
  tabanan: {
    induk: 'Central Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Tabanan is Bali's rice barn, with stunning rice terraces and nature tourism from Tanah Lot to Jatiluwih. Agrotourism and wedding venues are the area's mainstays.",
    potensi: ['Agrotourism', 'Villas & Homestays', 'Rice Field Restaurants', 'Agricultural Products', 'Wedding Venues'],
  },
  klungkung: {
    induk: 'East Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Klungkung preserves the heritage of the Balinese kingdom and is now known worldwide for the charm of Nusa Penida. Marine tourism and local accommodation are developing rapidly.",
    potensi: ['Marine Tourism', 'Homestays', 'Nusa Penida Tours', 'Crafts', 'Local Cuisine'],
  },
  bangli: {
    induk: 'Central Bali',
    tipeLabel: 'Regency',
    deskripsi:
      'Bangli offers mountain tourism with Kintamani and Lake Batur as its icons. Coffee agrotourism and scenic restaurants are the main draws of this cool highland area.',
    potensi: ['Coffee Agrotourism', 'Mountain View Restaurants', 'Homestays', 'Trekking & Outdoor', 'Crafts'],
  },
  karangasem: {
    induk: 'East Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Karangasem at Bali's eastern tip offers diving, snorkeling, and still-pristine cultural tourism. Amed and Besakih make it a favorite for adventurous travelers.",
    potensi: ['Diving & Snorkeling', 'Homestays', 'Agrotourism', 'Culinary', 'Tours & Travel'],
  },
  buleleng: {
    induk: 'North Bali',
    tipeLabel: 'Regency',
    deskripsi:
      "Buleleng is Bali's largest regency, with Singaraja as its activity hub and Lovina as a marine destination. Fisheries, agrotourism, and culinary sectors grow steadily.",
    potensi: ['Marine Tourism', 'Agrotourism', 'Culinary', 'Homestays', 'Fisheries'],
  },
  jembrana: {
    induk: 'West Bali',
    tipeLabel: 'Regency',
    deskripsi:
      'Jembrana in West Bali is rich in agriculture, plantations, and tranquil nature tourism. SMEs and agribusinesses here are starting to embrace digital marketing to expand their market.',
    potensi: ['Agriculture & Plantations', 'Nature Tourism', 'SMEs', 'Culinary', 'Livestock'],
  },
  canggu: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Canggu is Bali's most dynamic digital nomad and lifestyle district. Cafes, villas, and creative services here must be visible online to reach travelers and expats.",
    potensi: ['Cafes & Restaurants', 'Villas & Coworking', 'Surf Schools', 'Retail & Fashion', 'Creative Services'],
  },
  seminyak: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Seminyak is Bali's premium lifestyle hub, with designer boutiques, beach clubs, and fine dining. Brands here compete through a luxurious and convincing online image.",
    potensi: ['Boutiques & Fashion', 'Fine Dining', 'Spa & Wellness', 'Villas', 'Beach Clubs'],
  },
  kuta: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Kuta is Bali's most recognizable gateway, with its beach, hotels, and shopping centers. The high volume of tourists makes businesses here highly dependent on Google visibility.",
    potensi: ['Hotels & Guesthouses', 'Restaurants', 'Souvenir Shops', 'Tours & Travel', 'Transport'],
  },
  legian: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Legian sits between Kuta and Seminyak with a relaxed tourist atmosphere. Hotels, bars, and restaurants along Jalan Legian compete for travelers' attention.",
    potensi: ['Hotels & Guesthouses', 'Restaurants', 'Bars & Nightlife', 'Retail', 'Spa'],
  },
  jimbaran: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Jimbaran is famous for its beachfront seafood restaurants and upscale resort area. Culinary and wedding businesses here rely on a strong online reputation.',
    potensi: ['Seafood Restaurants', 'Hotels & Resorts', 'Wedding Venues', 'Property', 'Spa'],
  },
  'nusa-dua': {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Nusa Dua is Bali's luxury resort area and MICE (meetings & conferences) hub. Hospitality businesses here require a classy website that reflects the quality of their service.",
    potensi: ['Luxury Hotels', 'Golf & Leisure', 'MICE & Events', 'Spa', 'Property'],
  },
  uluwatu: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Uluwatu at Bali's southern tip is known for its cliffs, world-class waves, and luxury villas. Surf camps and wedding venues here depend heavily on traveler searches.",
    potensi: ['Cliff Villas', 'Surf & Surf Camps', 'Beach Clubs', 'Wedding Venues', 'Restaurants'],
  },
  kerobokan: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Kerobokan connects Seminyak, Canggu, and Denpasar with many hidden villas and cafes. Local businesses here need a digital strategy to keep up with neighboring areas.',
    potensi: ['Villas & Guesthouses', 'Cafes', 'Retail', 'Local Services', 'Creative Studios'],
  },
  ubud: {
    induk: 'Gianyar Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Ubud is Bali's world-renowned center of culture, yoga, and wellness. Villas, galleries, and healthy restaurants here compete to reach global travelers seeking authentic experiences.",
    potensi: ['Villas & Homestays', 'Yoga & Wellness', 'Art Galleries', 'Healthy Restaurants', 'Tours & Travel'],
  },
  sanur: {
    induk: 'Denpasar City',
    tipeLabel: 'Area',
    deskripsi:
      'Sanur is known as a calm family beach area with beautiful sunrises. Hotels, restaurants, and clinics here target family travelers and retirees.',
    potensi: ['Family Hotels', 'Restaurants', 'Watersports', 'Clinics & Wellness', 'Retail'],
  },
  renon: {
    induk: 'Denpasar City',
    tipeLabel: 'Area',
    deskripsi:
      "Renon is Denpasar's business and office district, with many institutions and eateries. Professional service businesses here need solid online credibility.",
    potensi: ['Offices & Professional Services', 'Culinary', 'Clinics', 'Retail', 'Event Organizers'],
  },
  singaraja: {
    induk: 'Buleleng Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Singaraja is the largest city in North Bali and the education and trade center of Buleleng. SMEs and service providers here are starting to use websites to reach further.',
    potensi: ['SMEs & Retail', 'Culinary', 'Services', 'Education', 'Trade'],
  },
  lovina: {
    induk: 'Buleleng Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Lovina in North Bali is famous for dolphin watching and its black-sand beaches. Homestays and tour operators here rely on online bookings from travelers.',
    potensi: ['Dolphin Watching', 'Homestays', 'Restaurants', 'Diving', 'Tours & Travel'],
  },
  amed: {
    induk: 'Karangasem Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Amed in East Bali is a diving and snorkeling paradise with views of Mount Agung. Dive centers and homestays here depend heavily on reviews and online visibility.',
    potensi: ['Diving & Snorkeling', 'Homestays', 'Restaurants', 'Tours', 'Boats & Transport'],
  },
  'nusa-penida': {
    induk: 'Klungkung Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Nusa Penida is an island with iconic cliffs like the viral Kelingking Beach. Tour operators and accommodation here compete hard for traveler searches.',
    potensi: ['Tours & Travel', 'Homestays', 'Diving', 'Transport', 'Culinary'],
  },
  kintamani: {
    induk: 'Bangli Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Kintamani offers breathtaking views of Mount and Lake Batur. Coffee agrotourism, view restaurants, and outdoor activities are the backbone of the local economy.',
    potensi: ['Coffee Agrotourism', 'View Restaurants', 'Homestays', 'Trekking', 'Jeep Tours'],
  },
  'tanah-lot': {
    induk: 'Tabanan Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Tanah Lot is Tabanan's tourism icon, with a legendary temple perched on a rock. Villas, restaurants, and souvenir shops nearby are busy with visitors every day.",
    potensi: ['Villas & Homestays', 'Restaurants', 'Souvenir Shops', 'Tours', 'Wedding Venues'],
  },
  bedugul: {
    induk: 'Tabanan Regency',
    tipeLabel: 'Area',
    deskripsi:
      "Bedugul sits in Bali's highlands with cool air, a botanical garden, and beautiful lakes. Agrotourism and hotels here are ideal for targeting family travelers.",
    potensi: ['Agrotourism', 'Hotels & Homestays', 'Restaurants', 'Nature Tourism', 'Fruit Market'],
  },
  tuban: {
    induk: 'Badung Regency',
    tipeLabel: 'Area',
    deskripsi:
      'Tuban is the area south of Kuta near the airport, busy with transit hotels and eateries. Businesses here benefit from the high mobility of travelers.',
    potensi: ['Transit Hotels', 'Restaurants', 'Souvenir Shops', 'Transport', 'Spa'],
  },
};

export const getDaerahEn = (slug: string): DaerahEn | undefined => daerahEn[slug];
