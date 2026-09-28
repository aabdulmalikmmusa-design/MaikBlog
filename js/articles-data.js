/**
 * Nigerian Updates - Official Article Database & Data Store
 * Comprehensive Nigerian journalism covering politics, business, energy,
 * tech, Nollywood, culture, Afrobeats, sports, and international diplomacy.
 */

const BLOG_ARTICLES = [
  {
    id: "hero-hot-now",
    title: "Dangote Refinery Expands West African Fuel Exports as Domestic Output Hits Record Highs",
    subtitle: "Federal Government and NNPCL inaugurate new direct petroleum distribution network across 36 states.",
    category: "HOT NOW",
    categorySlug: "business",
    badgeType: "hot",
    date: "Nov 18, 2023",
    readTime: "5 min read",
    author: {
      name: "Chidinma Adeleke",
      role: "Chief Energy & Business Editor, Abuja Bureau",
      avatar: "assets/images/author-1.jpg"
    },
    image: "assets/images/hero-main.jpg",
    trending: true,
    views: "58.4k",
    likes: 2480,
    excerpt: "Nigeria's landmark 650,000-barrel-per-day petroleum refinery achieves full domestic supply capability, driving down transport logistics costs and boosting foreign exchange reserves across the ECOWAS region.",
    content: `
      <p class="lead">Nigeria's commercial energy ecosystem achieved a historic milestone today as the 650,000-barrel-per-day Dangote Petroleum Refinery ramped up domestic supply to all 36 states and launched maiden maritime shipments across neighboring West African coastal corridors.</p>
      
      <p>The landmark deployment, conducted under the Federal Government's Naira-for-crude framework with the Nigerian National Petroleum Company Limited (NNPCL), is already yielding tangible economic relief. Haulage unions in Lagos, Kano, Port Harcourt, and Onitsha reported significant stabilization in interstate transit fares, while industrial manufacturers celebrated guaranteed access to low-sulfur diesel.</p>
      
      <blockquote>
        "Domestic energy self-sufficiency represents the single greatest structural catalyst for industrial resurgence across Nigeria and the wider ECOWAS trade zone."
        <cite>— Chidinma Adeleke, Abuja Energy Forum</cite>
      </blockquote>
      
      <h3>Key Strategic Milestones</h3>
      <p>The Ministry of Petroleum Resources outlined three core pillars transforming the downstream sector:</p>
      
      <ul>
        <li><strong>Naira-Based Crude Transactions:</strong> Elimination of dollar-denominated import pressures, preserving over $7.2 billion in foreign exchange reserves annually.</li>
        <li><strong>Interstate Pipeline and Rail Logistics:</strong> Seamless multimodal distribution connecting maritime depots in Lekki directly to regional hubs in Kaduna and Ibadan.</li>
        <li><strong>West African Export Corridors:</strong> Official scheduled bunker shipments supplying certified Euro-V petroleum to Ghana, Côte d'Ivoire, and Senegal.</li>
      </ul>
      
      <p>Economic analysts at the Lagos Chamber of Commerce project that the sustained downstream expansion will generate upwards of 45,000 direct and ancillary technical jobs across logistics, pipeline engineering, and industrial manufacturing through 2027.</p>
    `
  },
  {
    id: "trending-1",
    title: "Naira Gains Momentum at NAFEM Window as Nigerian FinTech Capital Inflows Hit $1.2B",
    subtitle: "Central Bank market reforms and venture inflows strengthen liquidity across commercial banks.",
    category: "ECONOMY",
    categorySlug: "economy",
    badgeType: "default",
    date: "Nov 17, 2023",
    readTime: "4 min read",
    author: {
      name: "Babatunde Fashola",
      role: "Financial Markets Analyst, Lagos",
      avatar: "assets/images/author-2.jpg"
    },
    image: "assets/images/bitcoin.jpg",
    trending: true,
    views: "42.1k",
    likes: 1390,
    excerpt: "The Nigerian Naira appreciated strongly against major international currencies following enhanced transparency protocols at the official foreign exchange trading window.",
    content: `
      <p class="lead">The Nigerian Naira posted solid gains at the Nigerian Autonomous Foreign Exchange Market (NAFEM) this week, buoyed by multi-million-dollar Diaspora remittance inflows and aggressive institutional venture allocations into Nigerian fintech infrastructure.</p>
      <p>Market observers noted that the Central Bank of Nigeria's transparent price-discovery framework has restored investor confidence. Major international venture capital syndicates deployed over $1.2 billion into payment orchestration, cross-border digital commerce, and agricultural fintech startups based out of Yaba and Victoria Island.</p>
      <p>Treasury executives at tier-one Nigerian banks confirmed improved dollar liquidity, enabling import-dependent manufacturers to fulfill trade obligations with minimal exchange slippage.</p>
    `
  },
  {
    id: "trending-2",
    title: "Cross River Reopens Obudu Mountain Resort with Upgraded Cable Car & Eco-Trails",
    subtitle: "State tourism board and private concessionaires restore Nigeria's iconic high-altitude paradise.",
    category: "TRAVEL",
    categorySlug: "travel",
    badgeType: "default",
    date: "Nov 16, 2023",
    readTime: "4 min read",
    author: {
      name: "Ngozi Okafor",
      role: "Tourism & Heritage Writer, Calabar",
      avatar: "assets/images/author-1.jpg"
    },
    image: "assets/images/ocean.jpg",
    trending: true,
    views: "36.5k",
    likes: 980,
    excerpt: "Perched 1,576 meters above sea level on the Oshie Ridge, Obudu Mountain Resort welcomes back domestic and international travelers with modern eco-lodges and organic farms.",
    content: `
      <p class="lead">Cross River State has formally unveiled the rejuvenated Obudu Mountain Resort following a fourteen-month restoration that overhauled the famous 4-kilometer passenger cable car and established community-protected montane forest reserves.</p>
      <p>Visitors can once again enjoy crisp temperate mountain climates, guided birdwatching across cloud forests, and visits to the Becheve Nature Reserve canopy walkway. Local community cooperatives supply farm-fresh dairy and organic honey to resort guests, creating a sustainable model for rural ecotourism.</p>
    `
  },
  {
    id: "trending-3",
    title: "Yaba Tech Hubs Pioneer AI-Driven Crop Mapping for Northern Agricultural Belts",
    subtitle: "Software engineers in Lagos partner with Kano grain cooperatives to forecast crop yields with satellite telemetry.",
    category: "TECHNOLOGY",
    categorySlug: "technology",
    badgeType: "default",
    date: "Nov 15, 2023",
    readTime: "4 min read",
    author: {
      name: "Tariq Ibrahim",
      role: "Tech & Innovation Correspondent",
      avatar: "assets/images/author-2.jpg"
    },
    image: "assets/images/hikers.jpg",
    trending: true,
    views: "31.8k",
    likes: 840,
    excerpt: "Young Nigerian software engineers and agronomists deploy localized mobile artificial intelligence tools to optimize fertilizer use and protect maize and millet harvests.",
    content: `
      <p class="lead">A consortium of young developers based in Yaba's Silicon Lagoon has launched an AI-powered agro-telemetry platform that operates offline via low-cost mobile handsets across rural farming communities in Kano, Kaduna, and Jigawa states.</p>
      <p>The platform translates hyper-local weather predictions and soil moisture maps into Hausa, Fulfulde, and Kanuri audio voice notes, assisting smallholder farmers in preventing pest outbreaks and scheduling optimal planting cycles.</p>
    `
  },
  {
    id: "breaking-list-1",
    title: "Federal Executive Council Approves ₦4.2 Trillion Infrastructure & Railway Network Expansion",
    subtitle: "Cabinet endorses continuous standard-gauge rail connections linking Abuja, Kaduna, Kano, and Maradi.",
    category: "POLITICS",
    categorySlug: "politics",
    date: "NOV 17, 2023",
    readTime: "3 min read",
    author: { name: "Mustapha Garba", role: "State House Bureau", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/breaking-1.jpg",
    views: "29.4k",
    likes: 670,
    excerpt: "The Federal Executive Council presided over by the Presidency greenlights major multimodal transport investments to accelerate interstate commerce.",
    content: `<p>The Federal Executive Council meeting in the Council Chamber at Abuja approved major budgetary appropriations to connect industrial dry ports directly to national railway corridors.</p>`
  },
  {
    id: "breaking-list-2",
    title: "Lagos State Completes Phase Two of Electric Red Line Light Rail Transit to Marina",
    subtitle: "Mass transit milestone cuts commuting time between Alagbado and Lagos Island to under 45 minutes.",
    category: "LAGOS",
    categorySlug: "politics",
    date: "NOV 15, 2023",
    readTime: "4 min read",
    author: { name: "Oluwaseun Balogun", role: "Metropolitan Desk, Lagos", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/breaking-2.jpg",
    views: "38.2k",
    likes: 1220,
    excerpt: "Lagos Metropolitan Area Transport Authority celebrates the completion of major civil works on the electric Red Line rail corridor, modernizing public transit.",
    content: `<p>Commuters across the Lagos metropolis celebrate the arrival of high-frequency electric rolling stock, significantly reducing highway congestion along the busy Ikorodu Road corridor.</p>`
  },
  {
    id: "breaking-list-3",
    title: "Super Eagles Confirm International Squad Ahead of Africa Cup of Nations Campaign",
    subtitle: "Head Coach names 25-man roster featuring European league stars and home-grown NPFL standouts.",
    category: "SPORTS",
    categorySlug: "culture",
    date: "NOV 14, 2023",
    readTime: "3 min read",
    author: { name: "Emeka Anyanwu", role: "Sports Editor", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/breaking-3.jpg",
    views: "44.9k",
    likes: 1850,
    excerpt: "Nigeria's national football team gathers at the Godswill Akpabio International Stadium in Uyo for intensive training camp ahead of continental qualifiers.",
    content: `<p>With world-class strikers and an invigorated midfield, the Super Eagles will kick off their qualifying campaign with intense backing from millions of supporters nationwide.</p>`
  },
  {
    id: "breaking-list-4",
    title: "National Commission for Museums Celebrates Return of Historic 16th-Century Benin Bronzes",
    subtitle: "Federal Government receives repatriated royal artifacts in formal ceremony at the Oba of Benin's Palace.",
    category: "CULTURE",
    categorySlug: "culture",
    date: "NOV 14, 2023",
    readTime: "4 min read",
    author: { name: "Osasere Igbinedion", role: "Heritage Bureau, Benin City", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/breaking-4.jpg",
    views: "24.6k",
    likes: 790,
    excerpt: "Priceless ancestral brass and ivory castings return home to Edo State following successful diplomatic repatriation accords with European institutions.",
    content: `<p>The Oba of Benin and federal cultural officials welcomed back fifty-two masterfully carved brass plaques and royal commemorative heads that were seized over a century ago.</p>`
  },
  {
    id: "breaking-list-5",
    title: "Communications Commission (NCC) Unveils 10,000km Fiber Optic Rural Connectivity Drive",
    subtitle: "National broadband project to connect public secondary schools, polytechnics, and primary healthcare centers.",
    category: "TECH",
    categorySlug: "technology",
    date: "NOV 14, 2023",
    readTime: "4 min read",
    author: { name: "Zainab Bello", role: "Telecoms Correspondent", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/breaking-5.jpg",
    views: "27.3k",
    likes: 610,
    excerpt: "The Nigerian Communications Commission rolls out subsidized high-speed broadband rings across under-served agricultural and peri-urban districts.",
    content: `<p>Telecom operators and federal infrastructure funds partner to lay terrestrial fiber conduits linking schools and district medical clinics directly to national digital services.</p>`
  },
  {
    id: "breaking-featured",
    title: "National Assembly Convenes Bipartisan Committee on Electoral Modernization and Civic Liberties",
    subtitle: "Lawmakers, civil society coalitions, and youth organizations assemble in Abuja to advance real-time digital verification reforms.",
    category: "POLITICS",
    categorySlug: "politics",
    badgeType: "breaking",
    date: "NOV 15, 2023",
    readTime: "6 min read",
    author: {
      name: "Hon. Farouk Umar",
      role: "Chief Parliamentary Correspondent, Abuja",
      avatar: "assets/images/author-2.jpg"
    },
    image: "assets/images/protest.jpg",
    views: "61.3k",
    likes: 2100,
    excerpt: "Thousands of civic advocates, youth leaders, and electoral experts gather at the National Assembly complex in Abuja to deliver recommendations for transparent democratic governance.",
    content: `
      <p class="lead">Delegates representing youth coalitions, professional bar associations, and civil society organizations converged on the National Assembly in Abuja today for the commencement of public hearings on the Comprehensive Electoral and Civic Rights Bill.</p>
      
      <p>Key proposals submitted during the sessions include mandatory real-time electronic transmission of polling unit results directly to a publicly verifiable cryptographic portal, enhanced protections for peaceful community assembly, and the creation of dedicated electoral offenses tribunals.</p>
      
      <blockquote>
        "The vitality of Nigeria's democracy depends on the unwavering trust of its citizens, especially our vibrant youth who demand transparency and accountable governance."
        <cite>— Farouk Umar, National Assembly Press Corps</cite>
      </blockquote>
      
      <p>Legislative leaders from both chambers affirmed their commitment to concluding clause-by-clause consideration of the bill before the upcoming parliamentary recess.</p>
    `
  },
  {
    id: "popular-1",
    title: "Gurara Waterfalls and Yankari Game Reserve Attract Record Influx of Eco-Tourists",
    subtitle: "Niger and Bauchi States record surge in domestic holidaymakers exploring Nigeria's breathtaking natural wonderlands.",
    category: "TRAVEL",
    categorySlug: "travel",
    secondaryCategory: "TOURISM",
    date: "Nov 16, 2023",
    readTime: "4 min read",
    author: {
      name: "Amina Yusuf",
      role: "Ecotourism Reporter, Kaduna",
      avatar: "assets/images/author-1.jpg"
    },
    image: "assets/images/mountain-lake.jpg",
    views: "45.7k",
    likes: 1140,
    excerpt: "With pristine warm springs, cascading cataracts, and rich wildlife sanctuaries, Nigeria's premier eco-reserves emerge as top vacation destinations for city dwellers.",
    content: `
      <p class="lead">Yankari Game Reserve in Bauchi State and the spectacular roaring cascades of Gurara Waterfalls in Niger State recorded their highest quarterly domestic visitor numbers in over a decade.</p>
      <p>Families and adventure groups from Abuja, Lagos, and Jos are flocking to Wikki Warm Springs, where crystal-clear 31°C waters provide natural therapeutic relaxation amidst elephant herds and baboon troops.</p>
    `
  },
  {
    id: "popular-2",
    title: "NASRDA Collaborates with African Union on Climate-Resilient Satellite Orbiters",
    subtitle: "Nigerian Space Agency engineers lead development of drought-monitoring Earth observation satellites in Abuja.",
    category: "SCIENCE",
    categorySlug: "science",
    date: "Nov 15, 2023",
    readTime: "5 min read",
    author: {
      name: "Dr. Kalu Ndukwe",
      role: "Aerospace & Technology Correspondent",
      avatar: "assets/images/author-2.jpg"
    },
    image: "assets/images/satellite-dish.jpg",
    views: "38.9k",
    likes: 920,
    excerpt: "The National Space Research and Development Agency in Abuja finalizes calibration protocols for NigeriaSat-X to track Lake Chad water basin replenishments.",
    content: `
      <p class="lead">Engineers and telemetry specialists at the NASRDA headquarters in Abuja have completed the assembly of optical payload arrays destined for low-Earth orbit under the Pan-African Space Initiative.</p>
      <p>The mission will provide high-resolution multispectral data tracking Sahara desertification, groundwater recharge corridors, and coastal erosion along the Bight of Benin.</p>
    `
  },
  {
    id: "popular-3",
    title: "Lekki Deep Sea Port Slashes Regional Cargo Delays by 40% in Landmark Year",
    subtitle: "Automated container terminals in Lagos outpace West African rival ports in turnaround speed.",
    category: "ECONOMY",
    categorySlug: "economy",
    date: "Nov 14, 2023",
    readTime: "4 min read",
    author: {
      name: "Tunde Bakare",
      role: "Maritime & Trade Editor, Lagos",
      avatar: "assets/images/author-1.jpg"
    },
    image: "assets/images/cargo-port.jpg",
    views: "34.2k",
    likes: 810,
    excerpt: "Nigeria's flagship deep-sea port terminal in Lekki processes mega-container vessels with state-of-the-art super post-panamax electric gantry cranes.",
    content: `
      <p class="lead">One year following commercial commissioning, the Lekki Deep Sea Port has transformed Nigeria's maritime commerce, handling over 1.2 million twenty-foot equivalent units (TEUs) with an average vessel berth-to-departure turnaround time of under 36 hours.</p>
      <p>Shippers and freight forwarders report that automated electronic scanning and direct bonded barge links to Ikorodu have dramatically reduced demurrage costs.</p>
    `
  },
  {
    id: "popular-4",
    title: "Central Bank of Nigeria Expands Instant Digital Settlement Rails for Open Markets",
    subtitle: "NIBSS and licensed payment service providers deploy contactless payment QR terminals across major commercial bazaars.",
    category: "FINTECH",
    categorySlug: "economy",
    date: "Nov 14, 2023",
    readTime: "4 min read",
    author: {
      name: "Babatunde Fashola",
      role: "Capital Markets Analyst, Lagos",
      avatar: "assets/images/author-2.jpg"
    },
    image: "assets/images/bitcoin.jpg",
    views: "36.4k",
    likes: 880,
    excerpt: "Traders in Alaba International, Balogun, and Ariaria markets embrace low-cost digital payment terminals with instant settlement and zero network transaction failures.",
    content: `
      <p class="lead">The Central Bank of Nigeria in partnership with the Nigeria Inter-Bank Settlement System (NIBSS) has inaugurated universal interoperable QR standards across bustling open-air trading complexes nationwide.</p>
      <p>Market women and wholesale distributors can now accept instant payments from any commercial bank or mobile money wallet without requiring expensive POS hardware, cementing Nigeria's leadership in real-time retail digital payments.</p>
    `
  },
  {
    id: "editor-1",
    title: "Gulf of Guinea Deep Blue Project Enhances Regional Cargo Corridor Safety",
    subtitle: "Nigerian Maritime Administration and Safety Agency (NIMASA) achieves zero piracy incidents in territorial waters.",
    category: "MARITIME",
    categorySlug: "economy",
    date: "Nov 16, 2023",
    readTime: "4 min read",
    author: { name: "Tunde Bakare", role: "Maritime Desk", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/cargo-port.jpg",
    views: "29.8k",
    likes: 710,
    excerpt: "Nigeria's integrated maritime security architecture ensures safe navigation for international commercial vessels along the Atlantic coastline.",
    content: `<p>The Nigerian Navy and NIMASA continue joint maritime reconnaissance flights and fast patrol interceptor sweeps, drastically reducing war risk insurance premiums for vessels calling at Nigerian seaports.</p>`
  },
  {
    id: "editor-2",
    title: "Nollywood and Afrobeats Global Streaming Revenues Double in Historic Growth",
    subtitle: "Nigerian filmmakers and musical talents dominate international billboard charts and theatrical box office records.",
    category: "ENTERTAINMENT",
    categorySlug: "culture",
    date: "Nov 15, 2023",
    readTime: "4 min read",
    author: { name: "Stephanie Okon", role: "Entertainment Desk", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/nollywood.jpg",
    views: "48.6k",
    likes: 1950,
    excerpt: "From Lagos sound stages to global cinemas, Nigerian creative arts generate billions of naira in international licensing and festival accolades.",
    content: `<p>Major global streaming giants expand multi-million-dollar production commitments for Nigerian original series, highlighting authentic storytelling from Lagos, Enugu, and Jos.</p>`
  },
  {
    id: "editor-3",
    title: "Ondo and Cross River Cocoa Cooperatives Secure Direct European Organic Certification",
    subtitle: "Smallholder cocoa farmers boost household revenues by 60% through deforestation-free export compliance.",
    category: "AGRICULTURE",
    categorySlug: "business",
    date: "Nov 14, 2023",
    readTime: "5 min read",
    author: { name: "Amina Yusuf", role: "Agribusiness Reporter", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/ocean.jpg",
    views: "26.3k",
    likes: 670,
    excerpt: "Nigerian cocoa farmers pioneer GPS-tracked farm mapping to export premium quality single-origin beans directly to artisanal chocolatiers.",
    content: `<p>Farmers in Ondo's fertile agricultural belt have eliminated middlemen by utilizing blockchain traceability, earning premium international market prices for ethically cultivated cocoa pods.</p>`
  },
  {
    id: "worth-reading-video",
    title: "The Rhythm of Lagos: An In-Depth Exploration of Africa's Vibrant Megacity",
    subtitle: "An intimate cinematic documentary into the creative pulse, coastal vitality, and entrepreneurial brilliance of Lagos.",
    category: "TRAVEL",
    categorySlug: "travel",
    date: "Nov 17, 2023",
    readTime: "8 min watch",
    isVideo: true,
    videoDuration: "16:45",
    author: {
      name: "Kunle Adeyemi",
      role: "Documentary Director, Lagos",
      avatar: "assets/images/author-1.jpg"
    },
    image: "assets/images/worth-reading.jpg",
    views: "88.2k",
    likes: 3450,
    excerpt: "A breathtaking cinematic voyage across the Third Mainland Bridge, bustling art studios of Nike Art Gallery, and the sunlit beaches of Tarkwa Bay.",
    content: `
      <p class="lead">Filmed in 4K resolution across twelve bustling neighborhoods of Lagos, this documentary captures the unstoppable energy, innovation, and musical soul of Africa's premier economic powerhouse.</p>
      <p>Director Kunle Adeyemi takes viewers through dawn fish markets in Epe, high-tech incubators in Yaba, creative fashion ateliers in Lekki, and historic Afrobeat shrines where the sound of the continent was born.</p>
    `
  },
  {
    id: "worth-reading-item-2",
    title: "Ancient Nok Terracotta & Benin Artifacts: Preserving Nigeria's Millennium-Old Sculptural Genius",
    subtitle: "Archaeologists and conservators uncover new insights into iron-age metallurgy along the Niger-Benue confluence.",
    category: "CULTURE",
    categorySlug: "culture",
    date: "Nov 15, 2023",
    readTime: "4 min read",
    author: { name: "Osasere Igbinedion", role: "Historical Antiquities Bureau", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/mountain-lake.jpg",
    views: "22.8k",
    likes: 590,
    excerpt: "Excavations in Kaduna and Plateau states reveal that ancient Nigerian sculptors mastered complex ceramic kilns dating back to 500 BC.",
    content: `<p>Radiocarbon dating confirms that the Nok civilization developed sophisticated iron smelting and figurative ceramic sculpture centuries earlier than previously recognized.</p>`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BLOG_ARTICLES };
}
