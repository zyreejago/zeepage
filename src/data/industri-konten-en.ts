/**
 * UNIQUE content per industry (English) for the pages
 * /en/website-design-<slugEn>-bali/.
 *
 * Every industry has its own content (lead, intro, feature descriptions,
 * Bali market section, and specific FAQ) so pages are not template copies.
 * Object keys = slugEn of the industry in industri.ts.
 * Field names intentionally mirror the Indonesian KontenIndustri interface.
 */
export interface KontenIndustriEn {
  /** SEO title for this industry (max ~60 characters) */
  metaTitle: string;
  /** Meta description for this industry (max ~160 characters) */
  metaDescription: string;
  /** Target keywords; used in structured data, not as meta keywords */
  keywords: string[];
  /** Hero opening paragraph specific to this industry */
  heroLead: string;
  /** Intro block written specifically for this industry */
  intro: {
    h2: string;
    paragraf: string[];
    tips?: string;
  };
  /** Feature card descriptions, key = label on industri.fiturEn */
  fiturDesc: Record<string, string>;
  /** Local section: Bali market understanding for this industry + illustrative examples */
  lokal: {
    h2: string;
    paragraf: string[];
    ilustrasi: { judul: string; isi: string }[];
    /** Note so examples are not mistaken for real clients */
    catatan?: string;
  };
  /** Industry-specific FAQ */
  faq: { q: string; a: string }[];
}

export const kontenIndustriEn: Record<string, KontenIndustriEn> = {
villa: {
    metaTitle: 'Villa Website Design in Bali | zeepage',
    metaDescription: 'Villa website design in Bali with online booking, availability calendar and photo galleries that cut OTA commissions. From Rp 699k, free consultation.',
    keywords: ['villa website design bali', 'website design for villas in bali', 'villa booking website', 'bali villa web designer', 'direct booking website for villas', 'villa website with booking system', 'luxury villa website design', 'villa rental website bali'],
    heroLead: 'Your villa guests are in Sydney, Singapore or Amsterdam right now, comparing Bali villas on their phones. A website design for villas in Bali with direct booking, a live availability calendar and cinematic galleries lets them book with you directly instead of through an OTA that takes a cut of every stay.',
    intro: {
      h2: 'Why Bali Villas Lose Bookings Without Their Own Website',
      paragraf: [
        'Many Bali villas rely entirely on Airbnb, Booking.com and Instagram. The listings look fine, but every reservation pays a commission, your ranking depends on an algorithm you cannot control, and guests remember the platform name instead of your villa name. When a happy guest wants to book again or recommend you to friends, there is no home base that carries your brand.',
        'A dedicated villa website changes that. Guests see full photo and video galleries, check real availability, read what is included, and book directly through your own booking system. You keep the full rate, own the guest relationship, and can offer returning guests a reason to skip the OTA next time.',
        'zeepage is a Bali-based website agency, so we design around how villas here actually sell: high-season and low-season rates, monthly stays for remote workers, staff and chef services, and the areas guests search for, from Canggu and Seminyak to Ubud and Uluwatu.',
      ],
      tips: 'Show live availability and a WhatsApp chat button above the fold. Most direct bookings start as a date check followed by one quick question.',
    },
    fiturDesc: {
      'Online Booking System': 'Guests choose dates, see the total price and confirm a reservation on your website, with payment links or bank transfer instructions handled automatically.',
      'Photo & Video Gallery': 'Full-screen galleries and walkthrough videos that show the pool, rooms and sunset views the way guests imagine their stay.',
      'Availability Calendar': 'A clear calendar synced with your booking channels so guests only inquire about dates that are actually open.',
      'Channel Manager Integration': 'Connect your website calendar with Airbnb, Booking.com and other channels to prevent double bookings.',
      'Location Map & Guide': 'An embedded map plus a mini guide to nearby beaches, cafes and attractions that helps guests picture the neighbourhood.',
      'Multilingual (ID/EN)': 'Full Indonesian and English versions so international guests and local partners both read comfortably and book with confidence.',
    },
    lokal: {
      h2: 'How Villa Guests Choose Where to Stay in Bali',
      paragraf: [
        'Bali villa demand follows distinct pockets. Seminyak and Petitenget draw style-conscious travellers who want dining and beach clubs nearby, Canggu and Pererenan attract surfers and remote workers booking month by month, Ubud sells calm and culture, while Uluwatu and Bingin pull surfers chasing reef breaks. Your website should speak to the pocket you sit in, not to Bali in general.',
        'Most international guests plan two to six months ahead and compare five or more villas before booking. They zoom into photos, check the exact location on a map, and read what is included down to breakfast and airport pickup. A website that answers all of that in one place wins the booking while slower pages are still being scrolled.',
      ],
      ilustrasi: [
        { judul: 'A private villa tired of OTA commissions', isi: 'Illustration: a four-bedroom villa in Pererenan rents well through OTAs but loses a slice of every booking to fees. With its own booking website and returning-guest offers, repeat visitors book direct and the owner keeps the full rate.' },
        { judul: 'A villa group that needs one booking hub', isi: 'Illustration: a small group of villas under one brand in Ubud lists each property separately on different platforms. A single website with a shared calendar and per-villa pages makes the whole collection look professional and far easier to manage.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a villa website cost in Bali?', a: 'Landing page packages start at Rp 699k, and a full company profile website is Rp 1.499k including a free .com domain for one year. Villas that need an online booking system and channel manager integration get a custom quote after a free consultation, based on the features required.' },
      { q: 'How long does it take to build?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. A villa site with booking and calendar integrations usually sits at the upper end of that range, depending on how quickly photos and content are ready.' },
      { q: 'Can guests pay online on the website?', a: 'Yes. We can connect payment links, bank transfer instructions or a payment gateway so guests can secure their dates with a deposit or full payment, and you receive a notification for every confirmed booking.' },
      { q: 'Will the website clash with my Airbnb or Booking.com listings?', a: 'No. The availability calendar can sync with your channels through a channel manager, so a date booked anywhere is blocked everywhere. Your website becomes the direct-booking channel, not a competitor to your listings.' },
      { q: 'Can the website rank when people search for villas in my area?', a: 'We build every page with local SEO structure for searches such as villa website design bali and area terms like Canggu, Seminyak or Ubud. Rankings grow with time and content, and the site is ready technically from day one.' },
    ],
  },
  hotel: {
    metaTitle: 'Hotel Website Design in Bali | zeepage',
    metaDescription: 'Hotel website design in Bali with a direct booking engine, room pages and promos that reduce OTA dependence. Packages from Rp 699k, free consultation.',
    keywords: ['hotel website design bali', 'website design for hotels in bali', 'hotel direct booking website', 'bali hotel web designer', 'hotel booking engine website', 'boutique hotel website design', 'resort website design bali', 'hotel website with PMS integration'],
    heroLead: 'Every night your rooms appear on OTA search results next to dozens of competitors, and every booking through them costs you commission. A hotel website design in Bali with its own booking engine gives guests a reason to book direct: best-rate perks, full room details and promos that OTAs never show.',
    intro: {
      h2: 'A Hotel Website That Earns Its Keep, Not Just a Brochure',
      paragraf: [
        'Most hotel websites in Bali are digital brochures: a few photos, a contact form, and a Book Now button that sends guests straight back to an OTA. The hotel pays for the website and still pays commission on the booking. Meanwhile the OTA page shows your rooms beside cheaper competitors, stripped of everything that makes your property special.',
        'A proper hotel website works as your direct sales channel. Each room type gets its own page with honest photos, sizes, occupancy and amenities. The booking engine shows live rates and availability, promos reward guests who book direct, and the whole journey takes minutes on a phone. Every direct booking is commission-free revenue and a guest relationship you own.',
        'zeepage designs hotel websites from Bali, for Bali hospitality. We understand high and low season pricing, the mix of international and domestic guests, and the areas travellers search, from Nusa Dua and Sanur to Ubud and Seminyak. The result is a website that supports your revenue team instead of decorating your brand.',
      ],
      tips: 'Put your direct-booking advantage in the hero section: a best-rate promise, free breakfast or a flexible cancellation note. Guests compare your site with the OTA tab open beside it.',
    },
    fiturDesc: {
      'Direct Booking Engine': 'Guests check live availability, compare room types and confirm reservations on your own website, so the booking and the guest data stay yours.',
      'Room & Rate Management': 'Structured pages for every room type with photos, capacity, amenities and seasonal rates that are easy for your team to update.',
      'Facilities Gallery': 'Rich galleries for the pool, spa, restaurant and meeting spaces that sell the full experience beyond the room.',
      'Promos & Stay Packages': 'Dedicated promo pages for honeymoon packages, long stays and seasonal offers that OTAs rarely display properly.',
      'PMS Integration': 'Connection options with popular property management systems so website availability stays in step with your front office.',
      'Multilingual (ID/EN)': 'Indonesian and English versions as standard, so domestic travellers and international guests both book without friction.',
    },
    lokal: {
      h2: 'How Travellers Pick a Hotel in Bali',
      paragraf: [
        'Bali hotel guests split into clear tribes. Families cluster in Nusa Dua and Sanur for calm beaches, couples look for boutique stays in Ubud and Seminyak, groups and surfers base in Canggu and Legian, and MICE guests need meeting facilities near the airport corridor. A hotel website should name its tribe early and prove the fit with the right photos and facilities.',
        'Most guests discover the hotel on an OTA or Google, then visit the official website to verify it is real and to hunt for a better rate. That verification visit is your one chance to convert a commission booking into a direct one. Slow pages, missing room details or a booking button that loops back to the OTA waste it.',
      ],
      ilustrasi: [
        { judul: 'A boutique hotel in Ubud paying for every booking', isi: 'Illustration: a 20-room boutique hotel fills well through OTAs but pays commission on nearly every reservation. A new website with a booking engine and a direct-booking breakfast perk shifts a growing share of guests to book direct each season.' },
        { judul: 'A beachfront resort with packages nobody sees', isi: 'Illustration: a resort in Sanur sells honeymoon and family packages at the front desk, but its website shows rooms only. Dedicated package pages let guests find and book those offers online before they arrive.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a hotel website cost?', a: 'Landing pages start at Rp 699k and a full company profile website is Rp 1.499k including a free .com domain for one year. Booking engine and PMS integration work is quoted after a free consultation, based on your systems and room count.' },
      { q: 'How long does a hotel website project take?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. Booking engine integration can extend the timeline slightly, depending on your PMS and payment gateway readiness.' },
      { q: 'Can the website connect to our existing PMS?', a: 'In most cases yes. We review which property management system you use during the free consultation and connect the booking flow so availability and reservations stay synchronised with your front office.' },
      { q: 'Do guests really book direct if the price matches the OTA?', a: 'Many do, when the website gives them a reason: a best-rate promise, breakfast included, flexible check-in or a welcome perk. Your website also owns the guest email and preferences, which no OTA shares with you.' },
      { q: 'Can the site support several languages for international guests?', a: 'Yes. Indonesian and English are included as standard in our hotel website design in Bali packages, and additional languages can be added as your guest mix requires.' },
    ],
  },
  'real-estate': {
    metaTitle: 'Real Estate Website Design in Bali | zeepage',
    metaDescription: 'Real estate website design in Bali with searchable property listings, filters, maps and WhatsApp inquiry forms. From Rp 699k, free consultation.',
    keywords: ['real estate website design bali', 'website design for property agents in bali', 'bali property listing website', 'villa for sale website bali', 'property website with search filters', 'real estate web designer bali', 'land for sale bali website', 'property agency website design'],
    heroLead: 'Most Bali property buyers start their search from another country, scrolling listings late at night in a different time zone. A real estate website design in Bali with filterable listings, maps and one-tap WhatsApp inquiries turns that quiet research into serious leads for your agency.',
    intro: {
      h2: 'Serious Buyers Do Serious Research — Give Them a Serious Website',
      paragraf: [
        'Many Bali agencies list properties across Facebook groups, marketplace portals and scattered chat threads. Buyers cannot filter by area, budget or land size, listings go stale, and every inquiry starts from zero because the key details were never written down. For a purchase worth billions of rupiah, that chaos quietly kills trust.',
        'A dedicated property website fixes the basics. Every listing carries structured data, honest photos, a map pin and clear freehold or leasehold terms. Buyers filter down to a shortlist themselves, then send a WhatsApp inquiry that arrives with the property reference attached. Your team spends time on qualified leads instead of answering the same questions all day.',
        'zeepage builds real estate websites from Bali with the local market in mind: villa sales in Canggu and Pererenan, land plots in Uluwatu and Nyang Nyang, family homes in Sanur and Renon, and the foreign-buyer questions that come with each. The site is designed to make an overseas buyer feel they already know the property.',
      ],
      tips: 'Never publish a listing without a map pin and a WhatsApp inquiry button. Overseas buyers almost never complete long contact forms, but they will send a chat message in seconds.',
    },
    fiturDesc: {
      'Property Listings + Filters': 'Structured listings that buyers can filter by area, price, bedrooms, land size and tenure, so the right shortlist appears in seconds.',
      'Gallery & Virtual Tours': 'Large photo galleries and video or 360 tour embeds that let overseas buyers walk through a villa before they ever land in Bali.',
      'WhatsApp Inquiry Forms': 'Every listing carries a one-tap WhatsApp inquiry pre-filled with the property title and reference, so leads arrive organised.',
      'Property Location Maps': 'Embedded maps showing the exact area, distance to beaches, schools and main roads, the details buyers always ask about.',
      'Agent Pages': 'Profiles for each agent with photo, specialisation and direct contact buttons, building personal trust behind the brand.',
      'Multilingual (ID/EN)': 'Indonesian and English listing content, because your buyers include Jakarta families and foreign investors in equal measure.',
    },
    lokal: {
      h2: 'Selling Bali Property to Buyers Who Are Not in Bali',
      paragraf: [
        'The Bali property market runs on overseas demand. Investors in Australia, Singapore and Europe compare villas in Berawa, Pererenan and Umalas for rental yield, while lifestyle buyers look at Ubud and Sanur for a future home. Leasehold terms, zoning and access roads confuse newcomers, so the websites that explain them clearly win the first conversation.',
        'Local buyers behave differently but need the same clarity: Denpasar and Renon families search in Indonesian, check the land certificate status in the listing, and drive past the location before inquiring. A bilingual website with maps and complete specifications serves both audiences without doubling your work.',
      ],
      ilustrasi: [
        { judul: 'An agent whose listings live in chat threads', isi: 'Illustration: an independent agent in Canggu manages forty listings through WhatsApp broadcasts and Facebook posts. After moving to a listing website with filters, buyers shortlist on their own and the agent only handles inquiries that match real budgets.' },
        { judul: 'A developer launching a small villa project', isi: 'Illustration: a developer builds six leasehold villas in Padang Linjong and needs overseas buyers before completion. A project website with virtual tours, payment stage explanations and agent pages gives the launch a credible home that a marketplace post cannot.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a real estate website cost in Bali?', a: 'Landing pages start at Rp 699k and a full company profile website is Rp 1.499k including a free .com domain for one year. Listing systems with filters and agent pages are quoted after a free consultation, based on listing volume and features.' },
      { q: 'How long does it take to launch?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. A full listing website depends on how many properties and photos you prepare at the start; most agencies launch within that 2-4 week window.' },
      { q: 'Can our team add and edit listings ourselves?', a: 'Yes. Listings are managed through a simple dashboard, so your team can publish new properties, adjust prices and mark listings as sold without calling a developer.' },
      { q: 'Can the website show both freehold and leasehold details?', a: 'Yes. Each listing can display tenure type, lease length, land size, certificate status and zoning notes in a consistent format that buyers can compare across properties.' },
      { q: 'Will it help buyers find us on Google?', a: 'We structure the site for local searches behind queries like real estate website design bali and buyer searches such as villa for sale in Canggu. Clean listing pages with maps and complete data give Google exactly what it needs to rank them over time.' },
    ],
  },
  restaurant: {
    metaTitle: 'Restaurant Website Design in Bali | zeepage',
    metaDescription: 'Restaurant website design in Bali with digital QR menus, online table reservations and Google Maps integration. From Rp 699k, free consultation.',
    keywords: ['restaurant website design bali', 'website design for restaurants in bali', 'restaurant website with digital menu', 'cafe website design bali', 'online table reservation website', 'bali restaurant web designer', 'fine dining website design bali', 'restaurant QR menu website'],
    heroLead: 'Before tourists in Bali choose where to eat, they check the menu, the photos and the map pin on their phones. A restaurant website design in Bali with a digital QR menu, online reservations and Google Maps integration turns those quick checks into seated guests.',
    intro: {
      h2: 'Your Next Guests Are Deciding on a Phone Screen',
      paragraf: [
        'Many Bali restaurants run on Instagram alone. The feed looks beautiful, but the menu is buried in highlights, opening hours change without notice, and there is no way to book a table. A tourist comparing three places for dinner tonight picks the one whose menu, prices and location are easiest to verify.',
        'A restaurant website puts the essentials in one permanent place: a digital menu that loads fast and updates in minutes, dish photography that sells the signature plates, online reservations for groups and occasions, and a map pin that brings guests to the door. It also gives Google a real page to rank when people search for dinner in your area.',
        'zeepage designs restaurant websites in Bali for the way dining works here: walk-in tourists, expat regulars, group bookings and special events. From fine dining in Seminyak and Petitenget to cafes in Canggu and Ubud, we build pages that make choosing your restaurant the easiest decision of the evening.',
      ],
      tips: 'Link your QR menu and reservation button from the homepage hero. Guests standing outside or sitting in traffic decide in under a minute, and a slow menu loses them.',
    },
    fiturDesc: {
      'Digital Menu + QR': 'A fast-loading menu page guests open by scanning a table QR code, updated centrally so price and availability changes appear everywhere at once.',
      'Online Table Reservations': 'A simple booking form or WhatsApp reservation flow for couples, families and group dinners, with confirmations your team can manage.',
      'Dish Gallery': 'Appetising photography galleries for signature dishes, chef specials and the dining room atmosphere that guests share and search for.',
      'Google Maps Integration': 'Embedded map, directions and parking notes connected to your Google Business Profile, so finding the restaurant is never the hard part.',
      'Promos & Events': 'Pages for happy hours, tasting menus, live music nights and holiday events that can be shared on social media and found on Google.',
      'WhatsApp Ordering': 'Click-to-chat ordering for takeaway and delivery within your area, with the menu already open on the screen when the chat starts.',
    },
    lokal: {
      h2: 'Eating Out in Bali Starts Long Before the First Course',
      paragraf: [
        'Dining in Bali is an itinerary item, not an afterthought. Visitors plan one special dinner in Seminyak or Petitenget, hunt specific cafes in Canggu and Berawa, and look for family-friendly spots in Sanur and Jimbaran. Expat residents keep their own shortlists and check menus before committing to a drive across town in traffic.',
        'Local occasions matter too: birthdays, office gatherings and community events send group organisers searching for venues with capacity, set menus and parking. A website that states group options, private room details and reservation steps clearly captures bookings that a social media profile quietly misses.',
      ],
      ilustrasi: [
        { judul: 'A fine dining room invisible on Google', isi: 'Illustration: a chef-led restaurant in Petitenget relies on walk-ins and hotel referrals while its menu exists only as photos in a story highlight. A website with a proper menu, reservation flow and map presence lets planning travellers book it days before they arrive.' },
        { judul: 'A cafe tired of reprinting menus', isi: 'Illustration: a busy Canggu cafe changes prices and specials weekly and keeps reprinting paper menus. A QR digital menu cuts the reprints, and the same link in the website and social bio keeps every guest looking at the current version.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a restaurant website cost?', a: 'Landing pages start at Rp 699k and a full company profile website is Rp 1.499k including a free .com domain for one year. Reservation systems and online ordering setups are quoted after a free consultation.' },
      { q: 'How long does it take to build?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. Most restaurants launch on the faster side once menu content and food photography are ready.' },
      { q: 'Can we update the digital menu ourselves?', a: 'Yes. The QR menu is edited through a simple dashboard, and one update changes the menu on the website, the table QR codes and any link you have shared. No reprinting, no developer needed.' },
      { q: 'How do reservations work for guests?', a: 'Guests pick a date, time and party size, then confirm through a form or a pre-filled WhatsApp message. Your team receives the details in one place and can confirm or adjust quickly.' },
      { q: 'Will a website help our Google Maps presence?', a: 'Yes. We connect the website with your Google Business Profile, consistent opening hours and location data. That combination supports local searches behind restaurant website design bali and diner searches like best dinner in Seminyak.' },
    ],
  },
  'beach-club': {
    metaTitle: 'Beach Club Website Design in Bali | zeepage',
    metaDescription: 'Beach club website design in Bali with daybed reservations, event calendars and guestlist tools for sunset venues. From Rp 699k, free consultation.',
    keywords: ['beach club website design bali', 'website design for beach clubs in bali', 'daybed reservation website', 'beach club event calendar website', 'bali beach club web designer', 'club website with guestlist', 'sunset bar website design bali', 'beach club booking website'],
    heroLead: 'In Bali, the sunset session is booked long before the sun goes down: daybeds, tables and guestlists are decided on phones days ahead. A beach club website design in Bali with reservations, an event calendar and galleries that carry the vibe turns followers into confirmed guests.',
    intro: {
      h2: 'The Party Is Planned Days Before Sunset',
      paragraf: [
        'Beach clubs sell a schedule: sunset sessions, DJ nights, pool days and special events. Yet many venues announce everything through disappearing social media stories. Guests cannot check who plays this Friday, whether daybeds are still available, or what the minimum spend is, so they book the club that answers those questions fastest.',
        'A beach club website organises the chaos. The event calendar shows the month at a glance, daybed and table reservations lock in revenue before the weekend, and galleries carry the atmosphere better than any caption. Guestlist and ticket tools handle big nights without your team drowning in direct messages.',
        'zeepage builds beach club websites in Bali with the local scene in mind: Berawa and Canggu surf crowds, Seminyak and Petitenget sunset institutions, Uluwatu cliff venues. We design for phones first, because that is where your guests plan the day while sitting in traffic or by the pool.',
      ],
      tips: 'Update the event calendar every Monday and pin the reservation button on every page. Event pages shared early in the week collect bookings while competitors are still designing their posters.',
    },
    fiturDesc: {
      'Daybed & Table Reservations': 'Guests choose their spot type, date and package, then confirm through a booking flow that records minimum spend agreements clearly.',
      'Event & DJ Calendar': 'A visual calendar for resident nights, guest DJs and special events, each with its own shareable page and lineup details.',
      'Atmosphere Gallery': 'Photo and video galleries of sunset hours, pool scenes and night energy that sell the experience before guests arrive.',
      'Menu & Bottle Service': 'Food, drinks and bottle service menus with prices, so groups can plan their spend and pre-book packages.',
      'Instagram Integration': 'Live social feeds and share buttons that connect the website with the channel where your audience already follows you.',
      'Tickets & Guestlist': 'Ticket links and guestlist signup forms for headline events, with capacity limits and confirmation messages handled neatly.',
    },
    lokal: {
      h2: 'Bali Beach Clubs Compete on Vibe and on Planning',
      paragraf: [
        'The Bali beach club map is dense: Canggu and Berawa draw the surf and remote-work crowd, Petitenget and Seminyak hold the classic sunset names, and Uluwatu sells cliff-top drama. Visitors with only a few days on the island pre-plan one or two big sessions, compare line-ups, and book the venue that makes planning effortless.',
        'Residents and expats behave like regulars everywhere: they follow residencies, celebrate birthdays at favourite spots and bring visiting friends along. A website with a current calendar, clear packages and fast reservations becomes their planning shortcut, while venues that rely on stories alone fade between posts.',
      ],
      ilustrasi: [
        { judul: 'A club losing weekend bookings to faster rivals', isi: 'Illustration: a Berawa beach club announces daybed packages only through stories that vanish in a day. Groups planning a birthday cannot find the details a week later and book elsewhere. A website with permanent package pages and reservations captures those groups early.' },
        { judul: 'A venue hosting international DJ nights', isi: 'Illustration: a Uluwatu venue books headline DJs monthly but sells tickets through scattered links and chat inquiries. Event pages with ticketing and guestlist tools give every show one clear home that promoters and guests can share.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a beach club website cost?', a: 'Landing pages start at Rp 699k and a full company profile website is Rp 1.499k including a free .com domain for one year. Reservation, ticketing and guestlist features are quoted after a free consultation based on your event volume.' },
      { q: 'How long does the build take?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. Venues usually launch before a big event date, and we plan the calendar and reservation features first so the essentials go live on time.' },
      { q: 'Can guests reserve a specific daybed or table?', a: 'Yes. The reservation flow can offer daybeds, sofas, tables and VIP areas with different minimum spends, and your team receives each confirmed booking with guest details in one place.' },
      { q: 'Can we sell tickets and manage a guestlist?', a: 'Yes. Event pages can carry ticket purchase links and guestlist forms with capacity limits, so headline nights are organised before doors open instead of through hundreds of chat messages.' },
      { q: 'Will the website help tourists find our events on Google?', a: 'We structure event and venue pages for local discovery behind searches like beach club website design bali and event searches in your area. A current calendar gives Google fresh pages to index every week.' },
    ],
  },
  'tour-travel': {
    metaTitle: 'Tour & Travel Website Design in Bali | zeepage',
    metaDescription: 'Tour and travel website design in Bali with package catalogs, detailed itineraries and online deposit payments. From Rp 699k, free consultation.',
    keywords: ['tour website design bali', 'travel agency website design bali', 'website design for tour operators in bali', 'bali tour booking website', 'tour package website with online booking', 'travel web designer bali', 'nusa penida tour website', 'bali day trip booking website'],
    heroLead: 'Travellers plan their Bali days before they land: sunrise treks, island crossings and temple tours are compared and booked from home. A tour and travel website design in Bali with a clear package catalog, detailed itineraries and online deposits turns that planning into paid bookings.',
    intro: {
      h2: 'Your Guests Book Their Holiday Before the Flight',
      paragraf: [
        'Many Bali tour operators run entirely on chat. Packages live in screenshots, prices get renegotiated in every conversation, and there is no deposit, so no-shows cost a driver and a full day. Travellers comparing three operators pick the one whose trips look organised and bookable, not the one that replies fastest at midnight.',
        'A travel website puts your operation on rails. Each package gets a page with itinerary, pickup times, inclusions and honest photos. Guests book a date, pay a deposit online, and receive a confirmation. You get committed bookings, a schedule your drivers can plan around, and a catalogue link you can share anywhere.',
        'zeepage designs tour and travel websites in Bali for operators of every size: Nusa Penida day trips, Mount Batur sunrise treks, Ubud cultural tours, multi-day island packages. As a Bali-based agency we know the routes, the seasons and the questions travellers ask before they pay.',
      ],
      tips: 'Publish full itineraries with pickup times and a clear included and excluded list. Travellers compare operators side by side, and the most transparent package page usually wins the booking.',
    },
    fiturDesc: {
      'Tour Package Catalog': 'Organised package pages by destination and duration, each with photos, highlights, prices and a booking button that is always visible.',
      'Online Booking & Scheduling': 'Guests pick a date and group size and submit a booking that lands in your schedule, reducing double bookings and endless chat coordination.',
      'Destination Gallery': 'Galleries for Nusa Penida, Mount Batur, Ubud, Uluwatu and more, showing travellers exactly what each trip looks like in every season.',
      'Detailed Itineraries': 'Hour-by-hour itinerary sections with pickup points, stops, inclusions and what to bring, answering questions before they are asked.',
      'Online Deposit Payments': 'Deposit collection through payment links or gateways, so bookings are financially committed and no-shows drop sharply.',
      'Multilingual (ID/EN)': 'English-first pages for international guests with Indonesian versions for domestic travellers, who now book Bali trips in large numbers.',
    },
    lokal: {
      h2: 'Selling Bali Experiences to a World That Plans Ahead',
      paragraf: [
        'Bali tour demand follows the flight schedule. International guests book signature days first: a Nusa Penida crossing, a Batur sunrise, a Ubud loop of temples, rice terraces and waterfalls. They read itineraries closely, check pickup coverage for their hotel area, and pay deposits to operators whose websites feel as reliable as the big platforms.',
        'Domestic travellers are now just as important, travelling in family groups and company outings with different needs: Indonesian-language pages, per-person pricing clarity and flexible private car options. A bilingual catalogue serves both markets from the same schedule and the same fleet.',
      ],
      ilustrasi: [
        { judul: 'An operator losing days to no-shows', isi: 'Illustration: a small Ubud tour operator confirms bookings by chat with no deposit, and guests regularly vanish on the morning of the trip. With website bookings and online deposits, the schedule fills with committed guests and drivers stop wasting days.' },
        { judul: 'A Penida trip seller competing on screenshots', isi: 'Illustration: a Nusa Penida day-trip seller sends the same photo album to every inquiry and retypes the itinerary daily. A package page with the full route, swim stops and boat times answers everything in one link and closes bookings while competitors are still typing.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a tour and travel website cost?', a: 'Landing pages start at Rp 699k and a full company profile website is Rp 1.499k including a free .com domain for one year. Booking and deposit payment features are quoted after a free consultation, based on your package count and payment methods.' },
      { q: 'How long does it take to build?', a: 'A landing page takes 1-2 weeks and a company profile website 2-4 weeks. Most operators launch once their main packages, prices and photos are prepared; additional trips can be added any time after launch.' },
      { q: 'How do online deposits work?', a: 'Guests pay a set deposit or percentage through a payment link or gateway when they book, and the balance is settled on the day. You receive a notification for every paid booking, so your schedule only holds committed trips.' },
      { q: 'Can we manage packages and prices ourselves?', a: 'Yes. Packages, itineraries, photos and prices are managed through a simple dashboard, so seasonal price changes and new trips do not require a developer.' },
      { q: 'Will the website help travellers find our tours on Google?', a: 'We build package pages around real searches behind tour website design bali and traveller queries like Nusa Penida day trip or Mount Batur sunrise trek. Clear itineraries and complete trip data give those pages what they need to compete over time.' },
    ],
  },
wedding: {
    metaTitle: 'Wedding Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali wedding venues, planners, and vendors from Rp 699k. Photo galleries, packages, and inquiry forms. Free consultation.',
    keywords: ['wedding website design bali', 'website design for wedding venues bali', 'bali wedding vendor website', 'wedding planner website bali', 'destination wedding website bali', 'wedding venue website design', 'bali wedding website design'],
    heroLead: 'Bali is one of the most sought-after destination wedding locations in the world, from Uluwatu clifftop venues and Ubud jungle resorts to Seminyak beachfront villas. Couples from Australia, Singapore, and Europe plan their wedding 6 to 12 months ahead and shortlist venues and vendors entirely online. A wedding website design in Bali that looks premium and answers questions fast is how your business makes that shortlist.',
    intro: { h2: 'Why Bali Wedding Businesses Need More Than an Instagram Feed', paragraf: ['Many wedding venues, planners, florists, and photographers in Bali rely only on Instagram or WhatsApp chats to present their work. The problem is that engaged couples compare five to ten vendors side by side, and a social media feed buries your best work under newer posts, gives no clear package pricing, and offers no structured way to check availability for a specific date.', 'A dedicated website fixes that. Your portfolio is organized by venue, style, and area. Packages are clear. An inquiry form collects the wedding date, guest count, and venue preference in one go, so you reply with a real proposal instead of a long chat thread. For international couples, a bilingual site removes the hesitation that comes from unclear information.', 'zeepage builds websites for wedding businesses in Bali with the visual standard this market expects: large photography, clean typography, and fast loading on hotel Wi-Fi and mobile data. Every page is structured for local and international search, so couples searching for wedding website design in Bali or vendors in a specific area can find you.'], tips: 'Practical tip: organize your gallery by real wedding locations, such as Cliff Wedding in Uluwatu or Garden Wedding in Ubud, and place the inquiry form on every gallery page. Couples fall in love with a specific setting first, then ask about price.' },
    fiturDesc: { 'Wedding Gallery Portfolio': 'Full-screen photo galleries organized by venue, theme, or area, so couples can picture their own celebration and browse your best work without digging through a social feed.', 'Packages & Venues': 'Clearly structured package pages with inclusions, capacity, and starting prices, plus dedicated pages for each venue or service area you cover.', 'Consultation Forms': 'Inquiry forms that capture wedding date, guest count, venue, and budget range, sent straight to your WhatsApp or email so no lead is lost.', 'Client Testimonials': 'A dedicated section to display testimonials and reviews from couples you have served, placed near the inquiry form to build trust at the decision moment.', 'Partner Vendors': 'A partner page linking photographers, florists, decorators, and makeup artists you collaborate with, strengthening your network and giving couples a complete picture.', 'Multilingual (ID/EN)': 'Indonesian and English versions of every page, so local couples and international destination-wedding clients both read your offer in their own language.' },
    lokal: { h2: 'Selling Weddings Across Bali, Area by Area', paragraf: ['Each wedding region in Bali sells a different dream. Uluwatu and the Bukit Peninsula offer clifftop chapels and sunset villas, Ubud offers jungle and rice-field serenity, Seminyak and Canggu offer stylish beach clubs and private villas, while Nusa Dua offers large resort ballrooms for big guest lists. Your website should speak to the setting you actually serve instead of using generic wedding language.', 'Most of your clients are not in Bali when they decide. They compare venues from Sydney, Singapore, or London, often a year before the date, and they judge professionalism by how complete and credible a website feels. Clear packages, real photos, and fast replies decide who gets booked.'], ilustrasi: [{ judul: 'A private villa venue that only took inquiries by chat', isi: 'Illustration: a villa in Seminyak received wedding inquiries through personal chat, and details about capacity and packages had to be retyped every time. With a venue page listing capacity, facilities, and a date-availability inquiry form, couples arrive with the basics answered and the conversation starts at the proposal stage.' }, { judul: 'A wedding planner coordinating vendors across areas', isi: 'Illustration: a planner working between Ubud and Uluwatu keeps a partner vendor page and bilingual package pages, so an overseas couple can review the full team and pricing in English before the first video call.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a wedding website cost in Bali?', a: 'zeepage packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website, which includes a free .com domain for 1 year. Gallery-heavy wedding sites with bilingual pages are quoted transparently after a free consultation, based on the number of pages and features.' }, { q: 'How long does it take to build?', a: 'A landing page takes around 1-2 weeks and a company profile website around 2-4 weeks. If your wedding season is approaching, tell us your target date during the free consultation so the schedule can be planned around it.' }, { q: 'Can international couples find my website on Google?', a: 'Yes, that is the goal of the structure we build. Pages are written and structured for searches such as wedding website design in Bali and venue-specific searches, with English pages for overseas couples. Rankings build over time as your content and profiles grow, and we set up the technical foundation from day one.' }, { q: 'Can couples check availability or book a date on the site?', a: 'The site includes an inquiry form that captures the wedding date and details, delivered instantly to your WhatsApp or email. Full calendar booking systems can be discussed if your venue handles a high volume of inquiries.' }, { q: 'Do I need my own photos before starting?', a: 'Real photos of your venue or past events convert far better than stock images. If your photo library is limited, we design the layout around the strongest images you have and structure galleries so you can add new weddings over time.' }],
  },
  spa: {
    metaTitle: 'Spa Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali spas and wellness studios from Rp 699k. Online booking, treatment price lists, and gift vouchers. Free consultation.',
    keywords: ['spa website design bali', 'website design for spas in bali', 'bali wellness website design', 'day spa website bali', 'massage studio website bali', 'spa booking website design', 'spa website bali'],
    heroLead: 'Wellness is one of the main reasons travelers come to Bali, and guests in Ubud, Seminyak, and Canggu compare spa menus and prices on their phones before booking. A spa website design in Bali with clear treatments, honest prices, and one-tap booking turns those searches into appointments.',
    intro: { h2: 'Why Bali Spas Lose Guests to Competitors With Better Websites', paragraf: ['Many spas in Bali depend on walk-ins, hotel referrals, and Instagram. That works until a guest searches for a spa nearby or compares treatment prices across three spas on the same street. Without a website, your menu, prices, and atmosphere are invisible at the exact moment guests decide.', 'A spa website puts your treatment menu, durations, and prices on one clear page, with booking that connects straight to WhatsApp. Guests already know what they want before they arrive, front-desk questions drop, and your spa appears in Google and Maps searches for your area.', 'zeepage designs spa websites with the calm, premium feel your guests expect, and structures every page for local search so travelers looking for a spa in your part of Bali find accurate hours, location, and prices.'], tips: 'Practical tip: show your three signature treatments with prices and durations at the top of the homepage. Most guests book the treatment they understand fastest, and transparent pricing removes the need to ask by chat.' },
    fiturDesc: { 'Online Treatment Booking': 'Booking buttons and forms that send treatment, date, and guest details directly to your WhatsApp, so reservations are confirmed in minutes instead of long chat threads.', 'Price List & Packages': 'A clean treatment menu with durations and prices, plus package pages for couples, groups, and half-day or full-day wellness programs.', 'Spa Atmosphere Gallery': 'Photo galleries of your treatment rooms, gardens, and facilities that convey the calm of your space before guests ever visit.', 'Gift Vouchers': 'A gift voucher page with a purchase inquiry flow, a popular option for birthdays, honeymoons, and hotel guests buying for a partner.', 'Member Promos': 'A promotions section for member deals, happy-hour treatments, and seasonal offers that you can update as campaigns change.', 'WhatsApp Integration': 'A floating WhatsApp button and click-to-chat links on every page, matching how guests in Bali actually prefer to book.' },
    lokal: { h2: 'Wellness Tourism, From Ubud Retreats to Seminyak Day Spas', paragraf: ['Ubud is the wellness heart of Bali, filled with yoga retreats and healing centers where guests stay a week or more and book treatments repeatedly. Seminyak and Canggu serve a faster rhythm: hotel guests, surfers recovering after sessions, and digital nomads booking a massage between workdays. Your website should match the pace and price point of the guests in your area.', 'Seasonality matters too. High season brings walk-in demand, while quieter months reward spas whose websites rank well and run member promotions. A website with clear packages for retreat groups and long-stay guests helps smooth that cycle.'], ilustrasi: [{ judul: 'A day spa depending entirely on walk-in traffic', isi: 'Illustration: a spa on a busy Seminyak street adds an online treatment menu with prices and WhatsApp booking, so hotel guests nearby can reserve a slot before leaving their room instead of choosing whichever spa they pass first.' }, { judul: 'A wellness studio selling retreat packages', isi: 'Illustration: a studio near Ubud publishes multi-day wellness packages with schedules and inclusions on its website, so retreat organizers can evaluate and book without a dozen back-and-forth messages.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a spa website cost?', a: 'Packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website with a free .com domain for 1 year. Booking features and bilingual pages are scoped transparently during a free consultation.' }, { q: 'Can guests book a treatment directly on the website?', a: 'Yes. Booking buttons and forms connect to your WhatsApp with the treatment, date, and time pre-filled, which is how most guests in Bali prefer to confirm. Online payment or calendar systems can be discussed for larger spas.' }, { q: 'How long does it take to launch?', a: 'A landing page takes around 1-2 weeks and a company profile website around 2-4 weeks, depending on how quickly treatment lists and photos are provided.' }, { q: 'Will my spa appear in Google searches for my area?', a: 'We structure pages for local searches such as spa website design in Bali and area-based treatment searches, and align the site with your Google Business Profile details. Visibility grows over time with reviews and consistent information.' }, { q: 'Can I update prices and promotions myself?', a: 'The price list and promo sections are structured so updates are straightforward. During handover we show you how the pages are organized, and maintenance packages are available if you prefer us to handle updates.' }],
  },
  clinic: {
    metaTitle: 'Clinic Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali beauty and dental clinics from Rp 699k. Consultation booking, transparent prices, and doctor profiles. Free consultation.',
    keywords: ['clinic website design bali', 'dental clinic website bali', 'beauty clinic website design', 'medical tourism website bali', 'aesthetic clinic website design', 'website design for clinics in bali', 'clinic website bali'],
    heroLead: 'Bali is a growing medical tourism destination, with patients flying in from Australia and beyond for dental work and aesthetic treatments. These patients research clinics, doctors, and prices carefully before booking a flight. A clinic website design in Bali that is transparent and professional is what turns that research into a consultation booking.',
    intro: { h2: 'Why Clinics in Bali Win Patients on Trust, and Trust Starts Online', paragraf: ['Patients choosing a clinic in another country are cautious. They compare treatment results, read about the doctors, and look for clear pricing. Clinics that only show an Instagram page or send price lists by chat often lose patients to competitors whose websites answer these questions openly.', 'A proper clinic website presents your doctors and services, publishes a transparent price list, explains each treatment in educational articles, and makes consultation booking effortless. For international patients, English pages with treatment timelines help them plan flights and recovery days with confidence.', 'zeepage builds clinic websites with a clean, clinical, and credible design standard, structured for both local patients in Denpasar and the wider Bali area and international medical tourists searching from home.'], tips: 'Practical tip: publish starting prices for your most searched treatments, such as veneers, implants, or signature facials. Clinics that hide all prices behind chat requests get fewer inquiries from overseas patients comparing three clinics at once.' },
    fiturDesc: { 'Consultation Booking': 'Booking forms and WhatsApp buttons that capture the treatment of interest and preferred date, so your front desk can respond with a prepared consultation plan.', 'Doctor & Service Profiles': 'Dedicated profiles for each doctor and a service page for each treatment, presenting credentials, experience, and what the procedure involves.', 'Transparent Price List': 'A clear price list page with starting prices per treatment, helping patients budget honestly and reducing unqualified inquiries.', 'Before-After Gallery': 'A gallery section to present treatment results with patient consent, organized by treatment type so prospective patients can set realistic expectations.', 'Educational Articles': 'A blog section for treatment guides, aftercare explanations, and recovery timelines that answer patient questions and support search visibility.', 'Multilingual (ID/EN)': 'Indonesian and English pages so local patients and international medical tourists each get complete information in their own language.' },
    lokal: { h2: 'Medical Tourism in Bali: Patients Who Research Before They Fly', paragraf: ['Dental and aesthetic clinics around Denpasar, Seminyak, and Canggu serve a mix of local patients and fly-in patients, many from Australia where comparable treatments cost far more. These visitors plan treatment around a holiday: consultation in the first days, the procedure in the middle, and a check-up before flying home. Your website needs to explain timelines as clearly as prices.', 'Trust signals decide this market. Patients look for named doctors, sterilization and facility information, and honest explanations of procedures and aftercare. A website that presents all of this calmly and completely outperforms a flashy page that only shows promotions.'], ilustrasi: [{ judul: 'A dental clinic quoting every price by chat', isi: 'Illustration: a clinic in Denpasar answers the same price questions dozens of times a week. After publishing a price list page and treatment timelines, inquiries shift from basic price questions to actual consultation bookings with dates attached.' }, { judul: 'A beauty clinic launching a new treatment', isi: 'Illustration: a clinic in Seminyak introduces a new facial treatment with an educational article explaining who it suits, how many sessions are typical, and the aftercare involved, so patients arrive informed instead of skeptical.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a clinic website cost?', a: 'Packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website including a free .com domain for 1 year. Multi-doctor, bilingual clinic sites are scoped during a free consultation with transparent pricing.' }, { q: 'Can patients book consultations through the website?', a: 'Yes. Booking forms and WhatsApp integration capture the treatment and preferred schedule, and your team confirms from there. The flow is designed for both local patients and overseas patients planning around flights.' }, { q: 'Is it appropriate to show prices and before-after photos?', a: 'Transparent starting prices are standard practice among clinics serving medical tourists and greatly improve inquiry quality. Before-after galleries are presented with patient consent and realistic descriptions, never exaggerated claims.' }, { q: 'How long does the website take to build?', a: 'A landing page takes around 1-2 weeks and a company profile website around 2-4 weeks. Doctor profiles and treatment content usually determine the pace, and we help structure the material you provide.' }, { q: 'Will the site help patients from overseas find us?', a: 'Pages are structured for the searches patients actually make, such as dental treatment in Bali or beauty clinic in Bali, with English content and educational articles answering what patients research before traveling. Visibility compounds over time as articles and reviews grow.' }],
  },
  'car-rental': {
    metaTitle: 'Car Rental Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali car rental businesses from Rp 699k. Fleet catalog with clear pricing and WhatsApp booking. Free consultation.',
    keywords: ['car rental website design bali', 'website design for car rental in bali', 'bali car hire website', 'car rental booking website', 'rental car website design', 'monthly car rental bali website', 'car rental website bali'],
    heroLead: 'Travelers arriving at Ngurah Rai Airport search for a rental car before they even leave the terminal, and long-stay visitors in Canggu and Ubud compare monthly rates. A car rental website design in Bali with a clear fleet catalog and honest pricing wins those bookings while competitors are still replying to chats one by one.',
    intro: { h2: 'Why Bali Car Rental Businesses Outgrow Chat-Based Booking', paragraf: ['Most rental businesses in Bali run on WhatsApp chats and marketplace posts. Every inquiry means sending the same car photos, price lists, and terms repeatedly, and there is no single place where a customer can verify your fleet, your prices, and whether your business is legitimate.', 'A rental website solves this with a fleet catalog that shows each unit, daily and monthly rates, and rental terms up front. Customers choose a car, calculate the cost for their dates, and book through WhatsApp with the details already filled in. Your replies become confirmations, not explanations.', 'zeepage builds car rental websites structured for how travelers actually search, by area and by car type, so your business can be found by tourists planning from home and by expats already living in Bali.'], tips: 'Practical tip: always show both daily and monthly prices for each car. Long-stay visitors and digital nomads are your highest-value customers, and most rental websites hide monthly rates behind a chat request.' },
    fiturDesc: { 'Fleet Catalog + Pricing': 'A catalog page for every unit with photos, seats, transmission, and daily and monthly rates, so customers can compare cars without asking one by one.', 'WhatsApp Booking': 'Booking buttons that open WhatsApp with the car, dates, and pickup location pre-filled, turning catalog browsing into confirmed reservations.', 'Rental Duration Calculator': 'A simple calculator where customers enter pickup and return dates and instantly see the total cost, reducing price questions and abandoned inquiries.', 'Clear Terms & Conditions': 'A dedicated terms page covering deposit, driver options, fuel policy, and late returns, protecting your business and filtering out risky renters.', 'Unit Gallery': 'Photo galleries for each car, interior and exterior, so customers trust the actual condition of the unit they will receive.', 'Pickup & Drop-off Service': 'A service section explaining airport and hotel pickup and drop-off coverage by area, a key deciding factor for arriving tourists.' },
    lokal: { h2: 'Rental Demand Across Bali, From Airport Arrivals to Monthly Nomads', paragraf: ['Rental demand in Bali comes in two rhythms. Tourists in Kuta, Seminyak, and around the airport want a car for three to seven days, often with a driver, and they book fast from their phones. Expats and digital nomads in Canggu, Ubud, and Sanur rent monthly, compare rates carefully, and renew with businesses they trust.', 'Your website should serve both: quick booking for short trips and transparent monthly pricing for long stays. Clear area coverage, from Denpasar to Uluwatu, also reassures customers who are unsure whether you deliver to their villa or hotel.'], ilustrasi: [{ judul: 'A rental owner answering the same questions all day', isi: 'Illustration: a small rental business in Denpasar spends hours daily sending price lists by chat. With a fleet catalog and duration calculator online, customers check prices themselves and chats become bookings instead of questions.' }, { judul: 'A rental business targeting monthly expat customers', isi: 'Illustration: a rental near Canggu publishes monthly rates and renewal terms on its website, making it easy for long-stay visitors to choose them over competitors who only advertise daily prices.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a car rental website cost?', a: 'Packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website with a free .com domain for 1 year. Fleet size and calculator features are scoped transparently during a free consultation.' }, { q: 'Can customers calculate the total price themselves?', a: 'Yes. The duration calculator multiplies your daily or monthly rate by the selected dates and shows the total before booking, which removes the most common question rental businesses receive.' }, { q: 'How do bookings work through the website?', a: 'Customers pick a car and tap the booking button, which opens WhatsApp with the car, dates, and pickup location already written. You confirm availability and the booking is done, with no separate app for customers to learn.' }, { q: 'Will tourists find my rental business on Google?', a: 'Pages are structured for the searches travelers make, such as car rental in Bali or monthly car rental in Canggu, and aligned with your Google Business Profile. Consistent fleet and pricing information strengthens trust signals over time.' }, { q: 'Can I update car prices and units myself?', a: 'The catalog is organized so price and unit updates are straightforward. We walk you through the structure at handover, and maintenance packages are available if you prefer us to manage updates.' }],
  },
  cafe: {
    metaTitle: 'Cafe Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali cafes and coffee shops from Rp 699k. Digital QR menus, galleries, and table reservations. Free consultation.',
    keywords: ['cafe website design bali', 'coffee shop website design bali', 'website design for cafes in bali', 'cafe website design', 'digital menu website bali', 'bali coffee shop website', 'restaurant cafe website bali'],
    heroLead: 'Bali cafe culture runs on discovery: digital nomads in Canggu hunting for good Wi-Fi and better coffee, tourists in Ubud choosing a brunch spot from Google Maps. A cafe website design in Bali with your menu, atmosphere, and opening hours in one place turns those searches into seated guests.',
    intro: { h2: 'Why Bali Cafes Need a Website Behind the Instagram Account', paragraf: ['Instagram shows your prettiest latte art, but it does not answer the questions guests actually search: what is on the menu, what does it cost, are you open now, and where exactly are you. Cafes without a website lose the Google and Maps searches that decide where people eat today.', 'A cafe website puts a digital menu, gallery, hours, and location on one fast page. Guests check the menu before they come, scan a QR code at the table to browse, and find your promotions without following a social account. It also gives you a permanent home that no algorithm change can bury.', 'zeepage designs cafe websites with strong photography and local search structure, so your cafe can be found by the nomads, tourists, and locals searching in your neighborhood.'], tips: 'Practical tip: keep a fast, mobile menu page that is easy to update instead of a heavy PDF file. Guests decide within seconds, and a slow or outdated menu is one of the most common reasons a cafe loses a walk-in to the place next door.' },
    fiturDesc: { 'Digital Menu + QR': 'A mobile-friendly digital menu linked to table QR codes, so guests browse food and drinks on their own phones and you update items or prices in one place.', 'Atmosphere Gallery': 'Galleries of your interior, seating, and signature dishes that sell the experience, essential for cafes competing on vibe and workspace comfort.', 'Hours & Location Info': 'Clear opening hours, address, and map links on every page, matching your Google Business Profile so guests never arrive at a closed door.', 'Promos & Loyalty': 'A promotions section for happy hours, weekly specials, and loyalty offers that brings regulars back between visits.', 'Instagram Integration': 'Your latest Instagram posts displayed on the website, connecting your most active channel with the menu and location information guests need.', 'Table Reservations': 'Simple reservation forms or WhatsApp booking for groups and events, so weekend brunch crowds and remote-work meetups can secure seats ahead.' },
    lokal: { h2: 'Cafe Scenes of Bali: Canggu Nomads, Ubud Slow Mornings, Seminyak Brunch', paragraf: ['Every cafe area in Bali has its own crowd. Canggu cafes double as offices for digital nomads who care about Wi-Fi speed, power outlets, and coffee quality. Ubud draws slow travelers and wellness guests looking for healthy menus. Seminyak and Berawa compete on brunch presentation and design. Your website should tell visitors, on the first screen, which crowd you serve.', 'Guests also move between discovery channels: they find you on Maps, check your menu on your website, then look at Instagram for the latest vibe. A website that ties these together, with the same name, hours, and location everywhere, converts that journey far better than any single channel.'], ilustrasi: [{ judul: 'A nomad-friendly cafe invisible on Google', isi: 'Illustration: a cafe in Canggu is full on weekends from word of mouth but quiet on weekdays. After publishing a website with its menu, Wi-Fi and workspace details, and opening hours, weekday remote workers start finding it through area searches.' }, { judul: 'A cafe reprinting menus at every price change', isi: 'Illustration: a cafe in Ubud switches to a QR digital menu, so seasonal dishes and price adjustments go live instantly without reprinting, and the same menu appears on the website for guests checking before they visit.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a cafe website cost?', a: 'Packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website including a free .com domain for 1 year. QR menu and reservation features are scoped during a free consultation.' }, { q: 'Can I update the digital menu myself?', a: 'Yes. The menu is structured for quick edits to items and prices, and the same update appears on the website and the table QR menu. We show you the process at handover, and maintenance help is available.' }, { q: 'Will my cafe show up when people search nearby?', a: 'We structure the site for local searches and keep your name, address, and hours consistent with your Google Business Profile, which is the foundation for appearing in Maps and near-me results as reviews accumulate.' }, { q: 'Can the website connect to my Instagram?', a: 'Yes. Your Instagram feed can be embedded on the site, so the photos you already post daily also work on your website, next to the menu and location details that turn viewers into visitors.' }, { q: 'How fast can the website go live?', a: 'A landing page takes around 1-2 weeks and a company profile website around 2-4 weeks. Cafes usually launch fastest when menu content and photos are ready at the start.' }],
  },
  boutique: {
    metaTitle: 'Boutique Website Design in Bali | zeepage',
    metaDescription: 'Website design for Bali fashion boutiques from Rp 699k. Lookbook catalogs, online checkout, and international shipping pages. Free consultation.',
    keywords: ['boutique website design bali', 'fashion boutique website bali', 'website design for boutiques in bali', 'clothing store website bali', 'lookbook website design', 'boutique online store bali', 'bali fashion website design'],
    heroLead: 'Bali boutiques sell a lifestyle that tourists discover on Jalan Kayu Aya in Seminyak, in Canggu concept stores, and at Ubud artisan markets, then want to reorder from home. A boutique website design in Bali with a beautiful lookbook and real checkout turns one holiday purchase into repeat international orders.',
    intro: { h2: 'Why Bali Boutiques Need an Online Store, Not Just a Beautiful Shop', paragraf: ['A physical boutique only sells to people walking past. Tourists who loved your resort wear or handmade bags leave Bali within days, and without a website there is no way for them to buy again, or for new customers abroad to discover the brand at all. An Instagram shop alone limits checkout, sizing information, and shipping clarity.', 'A boutique website combines a lookbook that sells the aesthetic with a working online store: clear product pages, size and stock information, secure checkout, and international shipping terms. Customers who found you in Seminyak can reorder from Sydney or Amsterdam, and new customers can find the collection through search.', 'zeepage builds boutique websites with the visual polish fashion requires and the practical structure an online store needs, so your brand looks as good online as it does in the shop.'], tips: 'Practical tip: photograph each collection as a styled lookbook, not single product shots on plain backgrounds. Bali fashion sells the holiday feeling, and styled photos convert browsers into buyers far better than plain catalog images.' },
    fiturDesc: { 'Collection Catalog (Lookbook)': 'Lookbook-style collection pages that present your pieces as complete looks, building the brand story that justifies your price point.', 'Online Store + Checkout': 'A complete online store with product pages, cart, and checkout, so customers in Bali and overseas can buy without manual chat ordering.', 'Instagram Gallery': 'Your Instagram feed integrated into the site, keeping the boutique fresh with daily content and connecting followers to products they can buy.', 'Size & Stock Info': 'Clear size guides, measurements, and stock status on every product page, reducing returns and the sizing questions that flood your inbox.', 'Promos & Sales': 'Promotion banners and sale collections for seasonal campaigns, sample sales, and new collection launches.', 'International Shipping': 'A shipping information page covering countries, costs, and delivery times, removing the biggest hesitation for overseas customers.' },
    lokal: { h2: 'Bali Fashion: Resort Wear, Artisan Craft, and Customers on Two Continents', paragraf: ['Bali fashion has a distinct identity: resort wear, linen, swimwear, and handmade accessories produced by local artisans. Seminyak and the Oberoi area serve style-conscious tourists, Canggu stores blend surf and street fashion, and Ubud shops lean into natural materials and craft. Your website should position the collection inside that identity instead of looking like a generic clothing store.', 'The commercial pattern is unique too. Discovery happens offline in the shop, but the long-term value is online: repeat orders from home countries, wholesale inquiries from overseas boutiques, and followers who first saw the brand on holiday. A website is the bridge between those two worlds.'], ilustrasi: [{ judul: 'A resort wear label selling only to walk-in tourists', isi: 'Illustration: a Seminyak boutique adds an online store with lookbook collections and international shipping information. Past customers start reordering from Australia, and the shop earns outside the holiday season as well.' }, { judul: 'An artisan bag brand flooded with chat orders', isi: 'Illustration: a Ubud bag maker moves from manual chat orders to product pages with size and stock information, so customers order directly and the owner spends time on production instead of copying payment details.' }], catatan: 'All scenarios above are general illustrations, not specific zeepage clients.' },
    faq: [{ q: 'How much does a boutique website cost?', a: 'Packages start at Rp 699k for a landing page and Rp 1.499k for a complete company profile website with a free .com domain for 1 year. Full online store builds with checkout are scoped during a free consultation based on product count and features.' }, { q: 'Can customers overseas actually buy from the website?', a: 'Yes. The online store includes checkout and an international shipping information page, so customers in Australia, Europe, and beyond can order with clear costs and delivery times instead of negotiating by chat.' }, { q: 'How are sizes and stock handled?', a: 'Each product page shows size guides, measurements, and stock status. This reduces sizing questions and returns, and makes the store manageable even with small, artisan-scale inventory.' }, { q: 'Can I sell through Instagram as well?', a: 'Yes. Your Instagram feed is integrated into the website, and product content can point followers to the store pages where checkout happens. The website becomes the permanent sales hub behind your social content.' }, { q: 'How long does a boutique website take?', a: 'A landing page takes around 1-2 weeks and a company profile website around 2-4 weeks. Online stores depend on how many products are loaded at launch; we plan the catalog structure with you during the free consultation.' }],
  },
diving: {
    metaTitle: 'Dive Operator Website Design in Bali | zeepage',
    metaDescription: 'Website design for dive operators and surf schools in Bali from Rp 699k. Trip schedules, online booking, and underwater galleries. Free consultation.',
    keywords: ['dive operator website design bali', 'website design for dive shops in bali', 'scuba diving website bali', 'surf school website design bali', 'dive center website bali', 'diving tour website design', 'bali dive operator web design'],
    heroLead: 'Divers research everything online long before they land in Bali, comparing dive sites, prices, and safety records from their home country. zeepage builds websites for dive operators and surf schools that turn those searches into confirmed bookings, from Amed and Tulamben to Nusa Penida and Padang Bai.',
    intro: {
      h2: 'Why Dive Operators in Bali Lose Bookings Without a Website',
      paragraf: [
        'Most dive centers in Bali still rely on Instagram, walk-in traffic, and hotel referrals. The problem is that international divers plan their trips weeks ahead, searching for dive packages, fun dive prices, and course schedules before they ever set foot on the island. If your operation does not appear in those searches with clear, trustworthy information, the booking goes to a competitor who does.',
        'A professional website gives your dive operation a permanent home for everything a customer needs to decide: trip schedules to Nusa Penida or the USAT Liberty wreck, PADI and SSI course pricing, instructor credentials, and real photos of what divers will see underwater. Add online booking with deposits and you stop losing guests to slow chat replies across time zones.',
        'zeepage designs websites for dive operators and surf schools across Bali that are fast, mobile-friendly, and easy to update yourself when seasons, prices, or schedules change. Every page is structured to be found by divers searching for exactly what you offer, in the exact area where you operate.',
      ],
      tips: 'Publish your dive trip schedule and prices openly. Divers distrust operators who hide pricing behind chat messages, and pages with clear package prices consistently earn more direct inquiries.',
    },
    fiturDesc: {
      'Dive Packages & Courses': 'Present fun dives, day trips, and certification courses in a clear layout with prices, duration, group size, and what is included, so visitors can compare and choose without asking first.',
      'Daily Trip Schedule': 'Show which dive sites you visit each day of the week, from manta points at Nusa Penida to macro sites in Padang Bai, so guests can plan their stay around your trips.',
      'Underwater Gallery': 'A fast-loading gallery of your best underwater photography and video stills, organized by dive site, giving visitors a vivid reason to book with you instead of a competitor.',
      'Online Booking & Deposits': 'A booking form connected to deposit payments, so international guests can secure their spot immediately instead of waiting hours for a reply across time zones.',
      'Instructor Certifications': 'A dedicated section displaying instructor credentials, certifying agencies such as PADI or SSI, languages spoken, and years of experience, because safety is the first thing divers check.',
      'Multilingual (ID/EN)': 'Full Indonesian and English versions of your site, so local divers and international visitors both read your offer in the language they trust most.',
    },
    lokal: {
      h2: 'Diving Businesses Across Bali Compete for the Same Search',
      paragraf: [
        'Bali diving is concentrated in distinct pockets, each with its own character: the USAT Liberty wreck and relaxed macro diving in Tulamben and Amed, manta rays and drift dives around Nusa Penida and Nusa Lembongan, muck diving in Padang Bai and Secret Bay, and the reefs of Menjangan in the northwest. A website that names these sites and areas specifically matches what divers actually type into Google.',
        'Surf schools along the Bukit Peninsula and in Canggu face the same challenge: students compare lesson packages, board rental prices, and instructor experience online before booking. zeepage builds pages that speak to your exact coastline, your exact spots, and your exact offer, so your business shows up when visitors plan their Bali trip from abroad.',
      ],
      ilustrasi: [
        { judul: 'A dive center in Amed relying on walk-ins', isi: 'A small dive center gets most guests from nearby hotels and foot traffic, so rainy weeks and low season hit hard. With a website showing its Amed and Tulamben trip schedule, course prices, and a deposit booking form, it can receive confirmed reservations from divers planning their trip months in advance.' },
        { judul: 'A surf school in Canggu competing on Instagram only', isi: 'A surf school posts daily wave photos but has no fixed page for lesson prices or packages, so potential students must send a message and wait. A website with clear lesson packages, instructor profiles, and a booking form turns profile visitors into paying students with far less back and forth.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a website for a dive operator in Bali cost?', a: 'A landing page starts at Rp 699k, and a full company profile website is Rp 1.499k, including a free .com domain for one year. Both are one-time prices with no hidden fees, and a free consultation is available before you decide.' },
      { q: 'How long does it take to build my dive center website?', a: 'A landing page typically takes 1-2 weeks and a company profile website 2-4 weeks, depending on how quickly photos, prices, and schedule details are ready on your side.' },
      { q: 'Can guests book and pay a deposit directly on the website?', a: 'Yes. We can add a booking form with trip selection, dates, and number of divers, connected to a deposit payment step, so reservations are confirmed automatically instead of through long chat threads.' },
      { q: 'Will my website show up when divers search for diving in my area?', a: 'We structure your pages around the dive sites and areas you serve, such as Nusa Penida, Amed, or Tulamben, with local business schema and clear headings. Rankings grow over time with content and reviews, and we set up the technical foundation properly from day one.' },
      { q: 'I run a surf school, not a dive center. Is this still suitable?', a: 'Yes. The same structure works for surf schools: lesson packages, daily schedules, instructor profiles, galleries, and booking forms, adapted to surf lessons in areas like Canggu, Uluwatu, or Kuta.' },
    ],
  },
  photographer: {
    metaTitle: 'Wedding Photographer Website Design Bali | zeepage',
    metaDescription: 'Website design for wedding photographers in Bali from Rp 699k. Stunning galleries, clear packages, and date booking forms. Free consultation available.',
    keywords: ['wedding photographer website design bali', 'website design for photographers in bali', 'photographer portfolio website bali', 'bali wedding photography website', 'photography website design bali', 'freelance photographer website bali'],
    heroLead: 'Couples planning a Bali wedding shortlist their photographer from the other side of the world, judging purely by what they find online. zeepage builds portfolio websites for wedding photographers in Bali that showcase your best work, present packages clearly, and make it effortless for couples to check your availability and book.',
    intro: {
      h2: 'Your Portfolio Deserves More Than an Instagram Grid',
      paragraf: [
        'Instagram is where couples discover photographers, but it is rarely where they decide. A wedding is one of the biggest purchases a couple will ever make, and before paying a deposit they want to see full galleries, transparent packages, and a professional who looks established. An Instagram profile with compressed images and prices hidden in highlights does not give them that confidence.',
        'Your own website changes the conversation. Full wedding galleries organized by venue and style, packages with clear inclusions, an availability form for their date, and a dedicated page for testimonials all work together to turn a curious visitor into a booked client. It also means couples find you through Google searches like wedding photographer Bali, not only through hashtags.',
        'zeepage designs fast, image-focused websites for Bali wedding photographers that keep your photos sharp, load quickly on any connection, and are simple to update every time you shoot a new wedding worth showing.',
      ],
      tips: 'Organize galleries by real Bali venues and locations, such as Uluwatu cliff weddings or Ubud jungle ceremonies. Couples search by venue, and a gallery page named for the venue can bring you inquiries Instagram never will.',
    },
    fiturDesc: {
      'Gallery Portfolio': 'Large, full-screen galleries that present your photography at its best, with fast loading and a clean layout that keeps all attention on the images, not the interface.',
      'Clear Pricing Packages': 'Present your packages with hours of coverage, deliverables, and inclusions in a tidy comparison layout, so couples can choose confidently without a long email exchange first.',
      'Date Booking Form': 'A simple inquiry form asking for wedding date, venue, and guest count, so you receive complete, serious inquiries and can check availability before replying.',
      'Category Galleries': 'Separate galleries for weddings, pre-weddings, engagements, and family sessions, each reachable from search engines and easy for visitors to browse by what they need.',
      'Client Testimonials': 'A dedicated section where you can display kind words from past couples in an elegant format, building trust with visitors who are comparing several photographers.',
      'Instagram Integration': 'A live feed of your latest Instagram work embedded on the site, keeping your portfolio feeling fresh between website updates and connecting both audiences.',
    },
    lokal: {
      h2: 'Bali Wedding Photography Is a Global Market',
      paragraf: [
        'Bali is one of the most sought-after wedding destinations in the world. Couples fly in from Australia, Europe, and across Asia to marry at cliff-top venues in Uluwatu, jungle resorts in Ubud, beachfront chapels in Nusa Dua, and private villas in Seminyak and Canggu. Nearly all of them research and book their vendors online, often a year in advance, without ever visiting the island first.',
        'That means your website is your showroom, your meeting, and your contract pitch in one. zeepage builds photographer websites that name the venues and regions you shoot in, load beautifully on slow hotel Wi-Fi anywhere in the world, and present your work with the polish that premium destination weddings demand.',
      ],
      ilustrasi: [
        { judul: 'A photographer losing inquiries to slow replies', isi: 'A talented Bali wedding photographer receives many casual Instagram messages but few serious bookings, because couples cannot see packages or check dates. A website with clear packages and a date inquiry form filters casual chats from real clients and presents a far more professional first impression.' },
        { judul: 'A pre-wedding specialist invisible on Google', isi: 'A photographer specializing in pre-wedding shoots in Ubud relies entirely on referrals. Dedicated gallery pages for pre-wedding sessions in Ubud, named and described properly, give search engines something to rank when couples plan their shoot from abroad.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a photographer website cost?', a: 'A landing page starts at Rp 699k, and a full company profile website with complete galleries is Rp 1.499k, including a free .com domain for one year. You can start with a free consultation to decide which fits your portfolio size.' },
      { q: 'How long will my website take to finish?', a: 'A landing page takes about 1-2 weeks and a company profile website 2-4 weeks. The main factor is how quickly your selected portfolio photos are ready, since image selection is the heart of a photographer site.' },
      { q: 'Will large photo galleries make my website slow?', a: 'No. We optimize and compress images properly and use modern loading techniques, so galleries stay sharp while loading quickly, even for couples browsing from overseas connections.' },
      { q: 'Can couples check my availability for their wedding date?', a: 'Yes. We add a date booking inquiry form where couples enter their wedding date and venue. You receive the full details by email or WhatsApp and can confirm availability personally.' },
      { q: 'Can the website help me appear on Google for Bali wedding searches?', a: 'We build gallery and service pages around the searches couples actually use, such as wedding photographer Bali and pre-wedding Ubud, with proper titles and local schema. Combined with your portfolio quality, this gives search engines clear signals about your specialty and location.' },
    ],
  },
  salon: {
    metaTitle: 'Salon & Barbershop Website Design Bali | zeepage',
    metaDescription: 'Website design for salons and barbershops in Bali from Rp 699k. Online appointments, price lists, and results galleries. Free consultation, chat us today.',
    keywords: ['salon website design bali', 'website design for barbershops in bali', 'beauty salon website bali', 'hair salon web design bali', 'barbershop website design', 'salon booking website bali'],
    heroLead: 'In Bali, customers choose a salon the same way they choose a restaurant: they check photos, prices, and reviews on Google first. zeepage builds websites for salons and barbershops that put your work, your price list, and your booking button in front of locals, expats, and visitors in areas like Seminyak, Canggu, and Denpasar.',
    intro: {
      h2: 'Why Salons in Bali Need More Than Social Media',
      paragraf: [
        'Many salons in Bali depend entirely on Instagram and passing foot traffic. But when someone searches for a haircut, balayage, or barber near them, they compare the top results on Google, and a salon without a website often does not appear at all. Even loyal customers struggle when your price list lives only in story highlights and booking means waiting for a DM reply.',
        'A dedicated website fixes this in one place: a clear service and price list, a gallery of real results from your chairs, stylist profiles that build trust, and an appointment booking button connected to WhatsApp. Customers decide faster, book in seconds, and arrive already knowing what they want and what it costs.',
        'zeepage designs clean, fast websites for salons and barbershops in Bali that you can update yourself whenever prices or promos change, with a structure built to be found by people searching for grooming services in your neighborhood.',
      ],
      tips: 'Show real prices on your website. Salons that publish a clear price list receive more bookings because customers feel safe from surprises, and price pages are exactly what people search for before visiting a new salon.',
    },
    fiturDesc: {
      'Online Appointment Booking': 'A booking button and form that lets customers pick a service and time, with requests flowing straight to your WhatsApp or email so no appointment slips away in a crowded inbox.',
      'Service & Price List': 'A tidy, easy-to-scan list of every service with prices, from haircuts and coloring to treatments and grooming packages, updatable anytime your prices change.',
      'Results Gallery': 'A gallery of before-and-after photos and finished styles from your own salon, the single most convincing content for a customer choosing where to book.',
      'Stylist Profiles': 'Individual profiles for each stylist and barber with their specialties and experience, so customers can request the person whose work they like most.',
      'Promos & Packages': 'A dedicated section for current promotions, bundle packages, and seasonal offers that you can swap in minutes to fill quiet days.',
      'WhatsApp Integration': 'A floating WhatsApp button and click-to-chat links throughout the site, matching how customers in Indonesia prefer to ask questions and confirm bookings.',
    },
    lokal: {
      h2: 'Salon Customers in Bali Search by Neighborhood',
      paragraf: [
        'Bali grooming is hyper-local. Expats in Canggu search for barbers near Batu Bolong, visitors in Seminyak look for salons around Petitenget and Kayu Aya, professionals in Denpasar want somewhere reliable near Renon, and wedding parties in Uluwatu need styling on location. A website that clearly states your area and services lines up exactly with how these customers search.',
        'Tourism also brings a steady flow of one-time customers who will never see your Instagram: wedding guests, event attendees, and holiday visitors who need a blowout, a shave, or a full styling session this week. zeepage builds salon websites that capture this ready-to-book demand with local pages, clear pricing, and instant WhatsApp contact.',
      ],
      ilustrasi: [
        { judul: 'A barbershop in Canggu invisible to new arrivals', isi: 'A well-reviewed barbershop fills chairs on weekends but sits empty on weekdays because newcomers to the area never find it online. A website with its price list, barber profiles, and a booking button gives it a permanent presence in local searches all week long.' },
        { judul: 'A beauty salon losing bookings to slow DMs', isi: 'A salon in Seminyak takes bookings through Instagram messages, and customers often book elsewhere after waiting hours for a reply. Moving the price list and appointment booking onto a website with WhatsApp confirmation removes the delay and the lost customers that came with it.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a salon website cost?', a: 'A landing page starts at Rp 699k, and a full company profile website is Rp 1.499k, including a free .com domain for one year. Both include mobile-friendly design, and you can begin with a free consultation.' },
      { q: 'How long does it take to build?', a: 'A landing page takes around 1-2 weeks and a company profile website 2-4 weeks. Having your service list, prices, and salon photos ready helps us finish faster.' },
      { q: 'Can customers really book appointments through the website?', a: 'Yes. Customers choose a service and preferred time through a booking form, and the request goes directly to your WhatsApp or email. You confirm personally, so your existing scheduling habits stay exactly the same.' },
      { q: 'Can I update prices and promos myself?', a: 'Yes. We build the site so routine updates like price changes, new promos, and gallery photos are simple to manage, and we show you how during handover.' },
      { q: 'Will a website help my salon appear in local Google searches?', a: 'We structure your pages around your services and area, such as barbershop Canggu or salon Seminyak, with local business schema and clear headings. Together with your Google Business Profile, this strengthens your presence in neighborhood searches over time.' },
    ],
  },
  'guest-house': {
    metaTitle: 'Guest House Website Design in Bali | zeepage',
    metaDescription: 'Website design for guest houses and homestays in Bali from Rp 699k. Take direct bookings and stop paying OTA commissions. Free consultation available.',
    keywords: ['guest house website design bali', 'website design for homestays in bali', 'homestay website bali', 'guesthouse direct booking website', 'villa guest house web design bali', 'bali accommodation website design'],
    heroLead: 'Every booking through an OTA costs your guest house a significant commission, month after month. zeepage builds websites for guest houses and homestays in Bali with direct booking, real photos, and clear pricing, so guests in areas from Ubud to Sanur book with you, not through a middleman.',
    intro: {
      h2: 'Stop Renting Your Own Guests from Booking Platforms',
      paragraf: [
        'Most small guest houses and homestays in Bali live entirely on OTA platforms. The guests arrive, but so does the bill: commission on every single night, no direct relationship with your guests, and no way for happy visitors to find you again except through the same platform that charges you. Meanwhile, travelers who search Google for accommodation in your area may never see your property at all.',
        'Your own website changes the economics. A direct booking channel with an availability calendar, honest room galleries, transparent pricing, and guest reviews gives travelers a reason to book straight with you, especially repeat guests and referrals. Even a modest share of direct bookings saves meaningful money across a year.',
        'zeepage designs warm, fast websites for Bali guest houses and homestays that work beautifully on phones, present your rooms at their best, and make direct booking feel as easy as the big platforms, without the commission.',
      ],
      tips: 'Offer a small direct-booking perk, such as free breakfast or airport pickup, and state it clearly on your website. Guests compare total value, and a modest perk often wins against OTA prices while still saving you commission.',
    },
    fiturDesc: {
      'Direct Room Booking': 'A booking inquiry and reservation flow on your own website, so guests book directly with you and you keep the full room rate instead of sharing it with a platform.',
      'Room & Facilities Gallery': 'Bright, honest galleries for every room type and shared facility, from gardens and pools to breakfast areas, presented so visitors can picture their stay clearly.',
      'Availability Calendar': 'A calendar showing which dates are open for each room, reducing back-and-forth messages and helping guests plan instantly around their flights.',
      'Transparent Pricing': 'Clear nightly and weekly rates per room, including what is covered, so guests trust the price they see and book without negotiation.',
      'Guest Reviews': 'A dedicated section where you can display reviews from past guests in a warm, credible layout, giving new visitors the confidence to book a small property they have never seen.',
      'Multilingual (ID/EN)': 'Indonesian and English versions of your website, welcoming both domestic travelers and the international guests who make up much of Bali tourism.',
    },
    lokal: {
      h2: 'Small Stays Across Bali Deserve Direct Bookings Too',
      paragraf: [
        'Bali accommodation is wonderfully varied: family homestays among the rice fields of Ubud, surf guest houses in Canggu and Uluwatu, quiet beachside stays in Sanur and Amed, and budget rooms near the bustle of Kuta and Legian. What they share is dependence on the same few booking platforms and the same commission taken from every night sold.',
        'Travelers, meanwhile, increasingly search Google directly for guest houses in a specific village or near a specific beach, and many prefer booking with the owner when the website looks trustworthy. zeepage builds guest house websites that name your exact area, show your rooms honestly, and make that direct booking simple on any device.',
      ],
      ilustrasi: [
        { judul: 'A family homestay in Ubud paying commission on every guest', isi: 'A family-run homestay receives nearly all its guests through one OTA and loses a portion of every booking to commission, including repeat guests who already know the family. A website with a direct booking form and reviews lets returning guests and their friends book directly, keeping that revenue in the family.' },
        { judul: 'A surf guest house in Uluwatu relying on walk-ins', isi: 'A small guest house near the surf breaks fills rooms in high season but struggles in quieter months, with no channel of its own. A website showing rooms, prices, and availability gives surf travelers planning from overseas a way to find and book it directly in any season.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a guest house website cost?', a: 'A landing page starts at Rp 699k, and a full company profile website is Rp 1.499k, including a free .com domain for one year. For most small properties, a single month of saved OTA commission can outweigh the entire cost, and consultation is free.' },
      { q: 'How long does it take to build my website?', a: 'A landing page takes about 1-2 weeks and a company profile website 2-4 weeks. Good photos of your rooms speed things up, and a smartphone camera in daylight is usually enough to start.' },
      { q: 'Can guests check availability and book without calling?', a: 'Yes. The availability calendar shows open dates per room, and the booking form sends the request straight to your WhatsApp or email, so you confirm personally and keep full control of your calendar.' },
      { q: 'Should I leave the OTA platforms completely?', a: 'Not necessarily. Many properties keep OTAs for discovery and use their website for repeat guests, referrals, and direct searches. The website gives you a channel you own, so the balance of power shifts gradually in your favor.' },
      { q: 'Will my guest house appear when travelers search my area?', a: 'We build your pages around your location and property type, such as homestay in Ubud or guest house near Sanur beach, with local schema and clear descriptions. Visibility grows over time, especially as direct guests and reviews accumulate.' },
    ],
  },
  yoga: {
    metaTitle: 'Yoga Studio Website Design in Bali | zeepage',
    metaDescription: 'Website design for yoga studios in Bali from Rp 699k. Class schedules, online booking, and retreat pages in ID and EN. Free consultation, start today.',
    keywords: ['yoga studio website design bali', 'website design for yoga studios in bali', 'yoga retreat website bali', 'yoga teacher website design', 'wellness studio website bali', 'ubud yoga website design'],
    heroLead: 'Students choose their Bali yoga studio online, comparing class schedules, teacher styles, and retreat dates before they arrive on the island. zeepage builds calm, beautiful websites for yoga studios in Ubud, Canggu, and beyond that publish your schedule, take class bookings, and present your retreats to a global audience.',
    intro: {
      h2: 'Your Studio Schedule Should Not Live Only on Instagram Stories',
      paragraf: [
        'Many Bali yoga studios announce classes through Instagram stories that vanish in a day and pin schedules in posts that are outdated within a month. New students, especially visitors planning a yoga holiday, cannot easily find when your classes run, who teaches them, or how to join a retreat. Drop-in guests decide based on the clearest website, not the busiest feed.',
        'A proper website gives your studio a stable home: a weekly class schedule that is always current, class and package booking, teacher profiles that convey your lineage and style, and dedicated retreat pages that international students can find through Google months before their trip.',
        'zeepage designs serene, fast websites for yoga studios and independent teachers in Bali that reflect the atmosphere of your shala, stay simple to update each week, and speak to both local regulars and the global wellness travelers Bali attracts.',
      ],
      tips: 'Give every retreat its own page with dates, location, and what is included. Retreat searches are planned months ahead, and a dedicated page can be found by students comparing Bali retreats long before they book flights.',
    },
    fiturDesc: {
      'Online Class Schedule': 'A clear weekly schedule showing class times, styles, levels, and teachers, easy to update whenever your timetable changes with the season.',
      'Class Booking & Packages': 'Online booking for drop-in classes plus class packs and memberships, so students reserve their mat in advance and your front desk runs calmly.',
      'Instructor Profiles': 'Thoughtful profiles for each teacher covering training, lineage, and teaching style, helping students choose classes with the teacher who suits their practice.',
      'Retreats & Events': 'Dedicated pages for retreats, workshops, and teacher trainings with dates, programs, and inquiry forms, built to be found by students planning from overseas.',
      'Studio Gallery': 'A peaceful gallery of your shala, garden, and practice spaces that conveys the feeling of studying with you far better than words alone.',
      'Multilingual (ID/EN)': 'Full Indonesian and English versions, welcoming the local community and the international students who form the heart of Bali yoga tourism.',
    },
    lokal: {
      h2: 'Bali Is One of the Yoga Capitals of the World',
      paragraf: [
        'Ubud has grown into a global center for yoga and wellness, drawing students, teacher trainees, and retreat groups from every continent, while Canggu, Sanur, and Uluwatu have built their own distinct studio scenes. In this market, a studio is not competing only with the shala down the road, but with every studio a visitor finds in search results before booking a flight.',
        'The students researching Bali yoga trips plan early and compare carefully: schedules, teacher backgrounds, retreat inclusions, and the atmosphere of the space. zeepage builds studio websites that answer all of it in one place, named for your area and your styles, so your studio is part of that shortlist instead of an Instagram account they scroll past.',
      ],
      ilustrasi: [
        { judul: 'An Ubud studio whose schedule confuses visitors', isi: 'A respected yoga studio posts its weekly schedule as an image on Instagram, but the image is months old and visitors arrive for classes that no longer run. A website with a current, easy-to-update schedule and class booking ends the confusion and fills mats more reliably.' },
        { judul: 'A teacher training with no page of its own', isi: 'A studio runs a respected 200-hour teacher training twice a year but promotes it only through posts that disappear. A dedicated training page with dates, curriculum outline, and an inquiry form gives prospective trainees something to find, read, and share year-round.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a yoga studio website cost?', a: 'A landing page starts at Rp 699k, and a full company profile website is Rp 1.499k, including a free .com domain for one year. A free consultation helps you decide how many pages your studio actually needs.' },
      { q: 'How long does it take to build?', a: 'A landing page takes about 1-2 weeks and a company profile website 2-4 weeks. Studios that already have class descriptions and teacher bios ready usually finish at the faster end.' },
      { q: 'Can I update the class schedule myself every week?', a: 'Yes. The schedule is built to be edited easily, and we walk you through it at handover, so changing a class time or adding a guest teacher takes minutes, not a call to a developer.' },
      { q: 'Can students book classes and retreats through the site?', a: 'Yes. Students can book drop-in classes and class packages online, and retreat pages carry inquiry forms with dates and group size, so every serious inquiry reaches you complete.' },
      { q: 'Will my studio show up for yoga searches in my area?', a: 'We structure your pages around your location and offerings, such as yoga studio Ubud or yoga retreat Bali, with clear headings and local schema. Combined with reviews and steady content, this builds your presence in the searches your future students actually use.' },
    ],
  },
  'language-school': {
    metaTitle: 'Language School Website Design Bali | zeepage',
    metaDescription: 'Website design for language schools and courses in Bali from Rp 699k. Program catalogs, online enrollment, and free trial booking. Free consultation.',
    keywords: ['language school website design bali', 'website design for courses in bali', 'language course website bali', 'english course website design', 'sekolah bahasa website bali', 'online enrollment website design'],
    heroLead: 'Students and parents compare language schools online, looking for clear programs, honest prices, and an easy way to try a class. zeepage builds websites for language schools and course centers in Bali that present your programs by level, take enrollments online, and turn curious visitors into enrolled students.',
    intro: {
      h2: 'Enrollment Should Start on Your Website, Not in a Chat Thread',
      paragraf: [
        'Many language schools and course centers in Bali still explain programs, levels, and fees one by one through chat messages. Prospective students ask the same questions repeatedly, staff spend hours replying, and many inquiries quietly go cold. Parents researching schools for their children face the same fog: no clear curriculum, no visible prices, no easy next step.',
        'A well-built website answers everything upfront: a catalog of programs by level and age group, transparent schedules and pricing, teacher profiles that build confidence, and online enrollment with a free trial class offer that lowers the barrier to starting. Your team then spends its time teaching and following up warm leads instead of copying the same answers.',
        'zeepage designs clear, trustworthy websites for language schools in Bali, from English courses for local students to Indonesian language programs for expats, built in Indonesian and English and structured to be found by the students you want to reach.',
      ],
      tips: 'Lead with a free trial class offer and put the enrollment button on every program page. Trial offers convert far better than generic contact forms because they give hesitant students a low-risk first step.',
    },
    fiturDesc: {
      'Program & Level Catalog': 'An organized catalog of every program by language, level, and age group, with outcomes and duration explained clearly, so students self-select the right course before contacting you.',
      'Online Enrollment': 'An enrollment form capturing student details, chosen program, and preferred schedule, sent straight to your admissions team so no inquiry is lost in a chat history.',
      'Schedule & Pricing': 'Transparent class schedules and tuition fees per program, the two questions every prospective student asks first, answered before they ever message you.',
      'Teacher Profiles': 'Profiles for your teachers with qualifications, experience, and teaching approach, giving parents and adult students confidence in who will be in the classroom.',
      'Student Testimonials': 'A dedicated section where you can display feedback from your students and parents in a clean, credible format that supports every claim your program pages make.',
      'Free Trial Classes': 'A featured trial class booking flow with its own form and follow-up details, turning your best conversion tool into the centerpiece of the website.',
    },
    lokal: {
      h2: 'Language Learning in Bali Serves Two Growing Markets',
      paragraf: [
        'Bali language education runs in two directions at once. Local students and professionals across Denpasar, Badung, and Gianyar invest in English, Mandarin, Japanese, and Korean courses to compete for tourism and remote-work careers, while a large expat community in Canggu, Sanur, and Ubud looks for Indonesian language courses to settle into island life. Both groups research schools online before committing.',
        'Parents are the third audience, comparing schools for their children based on programs, teachers, and safety of the environment, almost entirely through what they find on Google. zeepage builds language school websites that speak to all three audiences with the right language versions, clear locations, and enrollment flows that respect how each group decides.',
      ],
      ilustrasi: [
        { judul: 'An English course center answering the same questions daily', isi: 'A course center in Denpasar spends hours each day replying to chat messages asking about levels, schedules, and fees. A website with a full program catalog, pricing, and an online enrollment form answers those questions permanently and lets staff focus on students who are ready to join.' },
        { judul: 'An Indonesian language school for expats with no trial offer online', isi: 'A small school in Sanur teaches Indonesian to expats but promotes only through community boards, and interested learners hesitate to commit to a full course. Adding a free trial class page with easy booking gives newcomers a comfortable first step and a steady flow of new students.' },
      ],
      catatan: 'All scenarios above are general illustrations, not specific zeepage clients.',
    },
    faq: [
      { q: 'How much does a language school website cost?', a: 'A landing page starts at Rp 699k, and a full company profile website is Rp 1.499k, including a free .com domain for one year. Consultation is free, and we will recommend the structure that fits your number of programs.' },
      { q: 'How long does it take to build?', a: 'A landing page takes about 1-2 weeks and a company profile website 2-4 weeks. Schools with many programs finish faster when course descriptions and fee tables are prepared in advance.' },
      { q: 'Can students enroll and book a free trial class online?', a: 'Yes. The enrollment form collects student details, program choice, and schedule preference, and trial class booking can have its own featured flow, so your admissions team receives complete, ready-to-follow-up inquiries.' },
      { q: 'We teach both local students and expats. Can the site serve both?', a: 'Yes. The website can run in Indonesian and English, with program pages tailored to each audience, such as English courses for local professionals and Indonesian courses for expat residents in Bali.' },
      { q: 'Will the website help students find our school on Google?', a: 'We build program and location pages around real searches, such as English course Denpasar or Indonesian language course Bali, with clear titles and local schema. Visibility builds over time, supported by reviews and consistent program content.' },
    ],
  },
};

export const getKontenIndustriEn = (slugEn: string): KontenIndustriEn | undefined =>
  kontenIndustriEn[slugEn];
