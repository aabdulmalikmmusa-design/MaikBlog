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
    categorySlug: "sports",
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
  },
  {
    id: "sports-npfl",
    title: "Remo Stars and Enyimba FC Clash in Thrilling Top-of-Table NPFL Championship Showdown",
    subtitle: "Record crowds in Ikenne witness tactical masterclass as the Nigerian Premier Football League heats up.",
    category: "SPORTS",
    categorySlug: "sports",
    date: "Nov 18, 2023",
    readTime: "4 min read",
    author: { name: "Emeka Anyanwu", role: "Sports Editor, Lagos Desk", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/breaking-3.jpg",
    views: "52.1k",
    likes: 2140,
    excerpt: "The Nigeria Premier Football League delivers prime sporting drama as title contenders battle for continental qualification tickets before a passionate stadium audience.",
    content: `
      <p class="lead">In an electrifying ninety minutes of high-tempo football at the Remo Stars Stadium, Remo Stars and nine-time champions Enyimba FC played out a breathless duel that showcased the accelerating tactical maturity of the domestic top flight.</p>
      <p>With live broadcast streaming across fourteen African nations and scout delegations in attendance from France and Portugal, the fixture exemplified the growing commercial revitalization of Nigerian club football.</p>
      <p>Both managers praised the state-of-the-art playing surface and disciplined officiating, hailing the NPFL's new governance structure as a benchmark for professional sports administration in Africa.</p>
    `
  },
  {
    id: "sports-osimhen",
    title: "Victor Osimhen Crowned African Footballer of the Year Following Historic Season",
    subtitle: "Super Eagles talisman becomes first Nigerian player to lift prestigious continental crown since 1999.",
    category: "SPORTS",
    categorySlug: "sports",
    date: "Nov 17, 2023",
    readTime: "5 min read",
    author: { name: "Emeka Anyanwu", role: "Sports Editor, Lagos Desk", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/breaking-3.jpg",
    views: "71.4k",
    likes: 3890,
    excerpt: "At a glittering CAF gala in Marrakech, the clinical Nigerian marksman etched his name into football folklore following a historic goalscoring spree.",
    content: `
      <p class="lead">Victor Osimhen's historic journey from the humble streets of Olusosun in Ojota, Lagos, reached the zenith of African sport today as the Confederation of African Football voted him the Men's African Player of the Year.</p>
      <p>The 25-year-old goal machine powered his club to a historic league title while firing the Super Eagles through qualification as top goalscorer. Accepting the award, Osimhen dedicated his victory to aspiring grassroots footballers training across Nigerian academies.</p>
    `
  },
  {
    id: "sports-dtigress",
    title: "D'Tigress Make African History with Historic Quarter-Final Breakthrough in Paris",
    subtitle: "Nigeria's national women's basketball team stuns top-five world ranking powerhouses with relentless grit.",
    category: "SPORTS",
    categorySlug: "sports",
    date: "Nov 16, 2023",
    readTime: "4 min read",
    author: { name: "Chidinma Adeleke", role: "Special Sports Correspondent", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/hikers.jpg",
    views: "48.2k",
    likes: 1980,
    excerpt: "Nigeria's women's basketball champions rewrite Olympic history books by advancing to the final eight with unmatched perimeter defense and clutch free-throw shooting.",
    content: `
      <p class="lead">Under the tactical guidance of Head Coach Rena Wakama, D'Tigress have permanently altered the international basketball landscape by becoming the first African team—male or female—to reach an Olympic basketball quarter-final.</p>
      <p>Backed by frantic cheering from thousands of Nigerian diaspora supporters, the reigning AfroBasket champions exhibited fierce team unity, relentless offensive rebounding, and fearless fast-break play.</p>
    `
  },
  {
    id: "sports-amusan",
    title: "Tobi Amusan Shatters Commonwealth 100m Hurdles Mark in Thrilling Diamond League Finale",
    subtitle: "World record holder defends her crown with blistering 12.28-second victory in front of packed stadium.",
    category: "SPORTS",
    categorySlug: "sports",
    date: "Nov 15, 2023",
    readTime: "3 min read",
    author: { name: "Emeka Anyanwu", role: "Sports Editor", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/breaking-3.jpg",
    views: "41.6k",
    likes: 1650,
    excerpt: "The pride of Ogun State continues her global athletics dominance with an emphatic gold medal display that left competitors trailing in her wake.",
    content: `
      <p class="lead">Nigeria's sprint queen Tobi Amusan produced another masterclass over the high hurdles, clocking a sensational 12.28 seconds to capture top honors at the global athletics championship.</p>
      <p>Amusan's trademark explosive start off the blocks and flawless hurdle clearance brought spectators to their feet, further cementing her status among Africa's most decorated track athletes of all time.</p>
    `
  },
  {
    id: "world-un-assembly",
    title: "Nigeria Champions African Permanent Seat at UN Security Council During New York Summit",
    subtitle: "Presidential delegation rallies global South partners behind comprehensive multilateral governance overhaul.",
    category: "WORLD",
    categorySlug: "world",
    date: "Nov 18, 2023",
    readTime: "5 min read",
    author: { name: "Hon. Farouk Umar", role: "Foreign Affairs Correspondent", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/abuja-gate.jpg",
    views: "54.8k",
    likes: 2410,
    excerpt: "Addressing the 79th General Assembly of the United Nations in New York, Nigeria spearheaded the continental demand for permanent African representation on the Security Council.",
    content: `
      <p class="lead">In an impassioned address before the United Nations General Assembly in New York, Nigeria's diplomatic delegation asserted that international governance institutions cannot maintain moral authority while denying 1.4 billion Africans permanent representation on the UN Security Council.</p>
      <p>The Nigerian stance received unanimous endorsement from the African Union caucus and prominent backing from Latin American and Asian partners, signaling renewed momentum for global multilateral institutional reform.</p>
    `
  },
  {
    id: "world-ecowas-pact",
    title: "ECOWAS Heads of State Ratify Landmark Sub-Regional Trade & Security Pact in Abuja",
    subtitle: "West African leaders agree on integrated border tariffs, joint security patrols, and energy power-sharing.",
    category: "WORLD",
    categorySlug: "world",
    date: "Nov 16, 2023",
    readTime: "4 min read",
    author: { name: "Mustapha Garba", role: "Diplomatic Desk, Abuja", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/lagos-skyline.jpg",
    views: "39.7k",
    likes: 1450,
    excerpt: "At the conclusion of the 64th Ordinary Summit of ECOWAS Heads of State in Abuja, fifteen member countries pledged unified action on regional trade corridors.",
    content: `
      <p class="lead">The Economic Community of West African States (ECOWAS) has concluded a historic tripartite pact in Abuja focusing on cross-border logistics deregulation, joint counter-terrorism intelligence hubs, and the West African Gas Pipeline interconnection.</p>
      <p>Officials emphasized that unified economic integration is critical to safeguarding sub-regional stability and accelerating industrial manufacturing across the Gulf of Guinea.</p>
    `
  },
  {
    id: "world-remittances",
    title: "Nigerian Diaspora Inflows Exceed $21 Billion as Central Bank Upgrades Direct FX Channels",
    subtitle: "Direct non-resident bank accounts and reduced remittance tariffs drive record remittances from UK, US, and Canada.",
    category: "WORLD",
    categorySlug: "world",
    date: "Nov 15, 2023",
    readTime: "4 min read",
    author: { name: "Babatunde Fashola", role: "Global Markets Desk", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/bitcoin.jpg",
    views: "43.3k",
    likes: 1720,
    excerpt: "Official World Bank reports confirm Nigeria remains Africa's premier remittance destination as modernized regulatory rails encourage direct foreign currency deposits.",
    content: `
      <p class="lead">Remittances sent home by Nigerians living and working in Europe, North America, and the Middle East reached an all-time record of $21.4 billion over the past four quarters, according to data released jointly by the Central Bank of Nigeria and international financial agencies.</p>
      <p>Diaspora funds are increasingly fueling direct real estate investments, technology startup seed capital, and medical infrastructure projects across all geopolitical zones.</p>
    `
  },
  {
    id: "world-afcfta-exports",
    title: "Nigerian Manufacturers Begin Zero-Tariff Shipments Across East Africa Under AfCFTA Accord",
    subtitle: "Industrial conglomerates dispatch maritime and air cargo to Kenya, Rwanda, and Uganda with official origin certificates.",
    category: "WORLD",
    categorySlug: "world",
    date: "Nov 14, 2023",
    readTime: "4 min read",
    author: { name: "Tunde Bakare", role: "International Trade Desk", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/cargo-port.jpg",
    views: "36.9k",
    likes: 1310,
    excerpt: "The African Continental Free Trade Area enters operational velocity as Nigerian manufactured pharmaceuticals, lubricants, and packaging materials enter East African markets duty-free.",
    content: `
      <p class="lead">History was made at the Apapa and Lekki port terminals as the first commercial consignments stamped under the AfCFTA Guided Trade Initiative cleared customs en route to East African ports with zero import duties.</p>
      <p>Exporters commended the digital certificate of origin system established by the Federal Ministry of Industry, Trade and Investment, which drastically reduced bureaucratic processing times.</p>
    `
  },
  {
    id: "science-solar-grid",
    title: "Rural Electrification Agency Deploys 500 Hybrid Solar Mini-Grids to Primary Health Clinics",
    subtitle: "Clean renewable power guarantees uninterrupted vaccine cold-storage across rural communities in 24 states.",
    category: "SCIENCE",
    categorySlug: "science",
    date: "Nov 17, 2023",
    readTime: "4 min read",
    author: { name: "Dr. Kalu Ndukwe", role: "Science & Energy Bureau", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/ocean.jpg",
    views: "37.5k",
    likes: 1290,
    excerpt: "The Federal Government's flagship off-grid solar initiative transforms primary healthcare outcomes by providing round-the-clock power to rural maternity clinics and neonatal units.",
    content: `
      <p class="lead">More than five hundred remote communities across Sokoto, Benue, Ebonyi, and Ondo states now enjoy uninterrupted solar electricity following the commissioning of decentralized mini-grid arrays by the Rural Electrification Agency.</p>
      <p>Health clinic administrators reported zero vaccine spoilage and immediate improvements in nighttime emergency obstetric deliveries, marking a watershed victory for green public health technology in Nigeria.</p>
    `
  },
  {
    id: "science-medical-genomics",
    title: "Nigerian Center for Disease Control & ACEGID Unveil World-Class Pathogen Genomics Center",
    subtitle: "State-of-the-art sequencing facility in Ede achieves real-time viral tracking for West Africa.",
    category: "SCIENCE",
    categorySlug: "science",
    date: "Nov 16, 2023",
    readTime: "5 min read",
    author: { name: "Dr. Kalu Ndukwe", role: "Biotechnology & Health Correspondent", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/satellite-dish.jpg",
    views: "33.8k",
    likes: 1040,
    excerpt: "Nigerian bio-scientists and bioinformaticians inaugurate Africa's most advanced gene-sequencing cluster, enabling instantaneous detection of emerging infectious diseases.",
    content: `
      <p class="lead">At the African Centre of Excellence for Genomics of Infectious Diseases (ACEGID) in Ede, Osun State, Nigerian medical researchers unveiled cutting-edge next-generation sequencing hardware capable of decoding pathogen RNA in under twelve hours.</p>
      <p>International health authorities lauded the hub, highlighting that African-led scientific innovation is now safeguarding global biosecurity against epidemic threats.</p>
    `
  },
  {
    id: "tech-fintech-unicorns",
    title: "Nigerian FinTech Valuation Surpasses $6 Billion as Digital Banking Reaches 90 Million Citizens",
    subtitle: "Tier-1 digital payment rails process over 1.4 billion real-time instant transactions every month.",
    category: "TECH",
    categorySlug: "technology",
    date: "Nov 17, 2023",
    readTime: "4 min read",
    author: { name: "Tariq Ibrahim", role: "Tech & Innovation Correspondent", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/bitcoin.jpg",
    views: "59.2k",
    likes: 2780,
    excerpt: "Nigerian digital banking pioneers and payment processors cement Lagos as Africa's undisputed financial technology capital through relentless product innovation.",
    content: `
      <p class="lead">Venture valuation data compiled by TechCabal and foreign investment monitors reveals that Nigerian financial technology corporations now command an aggregate valuation of more than $6.2 billion.</p>
      <p>From seamless offline USSD banking for market vendors to algorithmic micro-credit underwriting, Nigerian software engineers continue to construct the most sophisticated real-time payment architecture on the continent.</p>
    `
  },
  {
    id: "politics-local-govt-autonomy",
    title: "Supreme Court Upholds Financial Autonomy for 774 Local Government Councils Nationwide",
    subtitle: "Historic apex court ruling mandates direct federation revenue allocations into grassroots municipal accounts.",
    category: "POLITICS",
    categorySlug: "politics",
    date: "Nov 16, 2023",
    readTime: "5 min read",
    author: { name: "Hon. Farouk Umar", role: "Chief Parliamentary Correspondent", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/abuja-gate.jpg",
    views: "64.1k",
    likes: 2950,
    excerpt: "In a unanimous landmark verdict delivered in Abuja, Nigeria's Supreme Court abolished state-controlled joint municipal accounts, restoring grassroots fiscal independence.",
    content: `
      <p class="lead">The Supreme Court of Nigeria delivered a historic constitutional judgment today, declaring that all monthly revenue allocations originating from the Federation Account must be disbursed directly to the elected councils of Nigeria's 774 local government areas.</p>
      <p>Civic organizations, labor unions, and rural development advocates celebrated the decision as the most consequential democratization reform in twenty-five years of fourth-republic governance.</p>
    `
  },
  {
    id: "culture-afrobeats-grammys",
    title: "Burna Boy, Wizkid, and Tems Garner Multiple Nominations at 66th Annual Grammy Awards",
    subtitle: "Historic recognition across Best African Music Performance and Global Album categories cements Nigeria's sonic supremacy.",
    category: "ENTERTAINMENT",
    categorySlug: "culture",
    date: "Nov 17, 2023",
    readTime: "4 min read",
    author: { name: "Stephanie Okon", role: "Entertainment Desk, Lagos", avatar: "assets/images/author-2.jpg" },
    image: "assets/images/nollywood.jpg",
    views: "82.4k",
    likes: 4120,
    excerpt: "Nigerian musical heavyweights continue their triumphant march across global stadiums, landing historic nominations at the Recording Academy in Los Angeles.",
    content: `
      <p class="lead">Afrobeats' meteoric global dominance received resounding institutional affirmation from the Recording Academy today, as Nigerian artists secured prime nominations across five major Grammy categories.</p>
      <p>Industry tastemakers in Lagos and London observed that Nigerian musical production techniques, rhythmic syncopation, and lyrical storytelling have become the defining sonic currency of modern international pop culture.</p>
    `
  },
  {
    id: "travel-idanre-hills",
    title: "Ancient Idanre Hills and Ogbunike Caves Experience Surge in Adventure Tourism",
    subtitle: "Ondo and Anambra States restore centuries-old hiking stairs and forest eco-resorts for domestic travelers.",
    category: "TRAVEL",
    categorySlug: "travel",
    date: "Nov 15, 2023",
    readTime: "4 min read",
    author: { name: "Ngozi Okafor", role: "Tourism & Heritage Writer", avatar: "assets/images/author-1.jpg" },
    image: "assets/images/mountain-lake.jpg",
    views: "34.1k",
    likes: 1180,
    excerpt: "With 682 stone steps ascending into misty ancient granite citadels, Idanre Hills emerges as a top weekend adventure trek for hiking clubs and youth explorers.",
    content: `
      <p class="lead">Surrounded by dramatic volcanic inselbergs rising over 3,000 feet above sea level, the historic town of Idanre in Ondo State has welcomed thousands of intrepid backpackers and landscape photographers this holiday season.</p>
      <p>Local guides recount legends of the ancient Owa's palace while nature enthusiasts scale the famed 682 steps to enjoy panoramic views across pristine rainforest canopies.</p>
    `
  }
];

// Helper: Normalize category slug
function normalizeCategorySlug(cat) {
  if (!cat) return 'home';
  const c = cat.toLowerCase().trim();
  if (c === 'sports' || c === 'sport') return 'sports';
  if (c === 'politics' || c === 'politic' || c === 'lagos') return 'politics';
  if (c === 'economy' || c === 'business' || c === 'fintech' || c === 'agriculture' || c === 'maritime') return 'economy';
  if (c === 'technology' || c === 'tech') return 'technology';
  if (c === 'culture' || c === 'entertainment' || c === 'nollywood' || c === 'music') return 'culture';
  if (c === 'travel' || c === 'tourism') return 'travel';
  if (c === 'science' || c === 'space' || c === 'climate') return 'science';
  if (c === 'world' || c === 'ecowas' || c === 'diplomacy') return 'world';
  return c;
}

// Category Configuration Registry
const CATEGORY_REGISTRY = {
  'sports': {
    slug: 'sports',
    name: 'Sports',
    badge: 'SPORTS & ATHLETICS',
    headline: 'Super Eagles, NPFL, Athletics & Nigerian Sports Excellence',
    description: 'Comprehensive, real-time reporting from Lagos, Abuja, Godswill Akpabio Stadium, and international sporting arenas.',
    editor: 'Emeka Anyanwu, Sports Editor',
    accentColor: '#10b981',
    heroTag: 'SUPER EAGLES & NPFL',
    aliases: ['sports', 'sport', 'athletics', 'football']
  },
  'politics': {
    slug: 'politics',
    name: 'Politics',
    badge: 'POLITICS & GOVERNANCE',
    headline: 'National Assembly, State House & Nigerian Governance Watch',
    description: 'Investigative reporting, legislative insights, electoral modernization, and policy accountability across all 36 states and the FCT.',
    editor: 'Hon. Farouk Umar & Mustapha Garba',
    accentColor: '#2563eb',
    heroTag: 'ABUJA BUREAU',
    aliases: ['politics', 'politic', 'governance', 'lagos']
  },
  'economy': {
    slug: 'economy',
    name: 'Business',
    badge: 'BUSINESS & MARKETS',
    headline: 'CBN Monetary Policies, Energy Investments & Trade Corridors',
    description: 'Deep financial analysis covering the Dangote Refinery, NAFEM FX markets, maritime logistics, and Nigerian commercial enterprise.',
    editor: 'Chidinma Adeleke & Babatunde Fashola',
    accentColor: '#059669',
    heroTag: 'FINANCIAL MARKETS',
    aliases: ['economy', 'business', 'fintech', 'agriculture', 'maritime']
  },
  'technology': {
    slug: 'technology',
    name: 'Tech',
    badge: 'TECH & INNOVATION',
    headline: 'Yaba Startups, Artificial Intelligence & African Venture Capital',
    description: 'Tracking high-growth startups, national broadband connectivity, artificial intelligence, and developer talent driving Africa\'s digital revolution.',
    editor: 'Tariq Ibrahim & Zainab Bello',
    accentColor: '#0284c7',
    heroTag: 'SILICON LAGOON',
    aliases: ['technology', 'tech', 'startups', 'fintech']
  },
  'culture': {
    slug: 'culture',
    name: 'Entertainment',
    badge: 'NOLLYWOOD & CULTURE',
    headline: 'Nollywood Box Office, Afrobeats Global Charts & Ancestral Heritage',
    description: 'Celebrating the world-conquering vibrance of Nigerian cinema, Grammy-winning musicians, fashion runways, and repatriated royal artifacts.',
    editor: 'Stephanie Okon & Osasere Igbinedion',
    accentColor: '#8b5cf6',
    heroTag: 'ENTERTAINMENT DESK',
    aliases: ['culture', 'entertainment', 'nollywood', 'music']
  },
  'travel': {
    slug: 'travel',
    name: 'Travel',
    badge: 'TRAVEL & HERITAGE',
    headline: 'Obudu Cloud Forests, Yankari Springs & Nigerian Natural Wonders',
    description: 'Immersive guides to breathtaking ecotourism sanctuaries, historic waterfalls, ancient inselbergs, and the vibrant coastal spirit of Lagos.',
    editor: 'Ngozi Okafor & Kunle Adeyemi',
    accentColor: '#0ea5e9',
    heroTag: 'ECO-TOURISM',
    aliases: ['travel', 'tourism', 'heritage']
  },
  'science': {
    slug: 'science',
    name: 'Science',
    badge: 'SCIENCE & CLIMATE',
    headline: 'NASRDA Space Telemetry, Pathogen Genomics & Clean Energy',
    description: 'Pioneering scientific breakthroughs, solar mini-grid installations, agricultural telemetry, and biotechnology advancing human life in Africa.',
    editor: 'Dr. Kalu Ndukwe, Science Bureau',
    accentColor: '#6366f1',
    heroTag: 'AEROSPACE & BIOTECH',
    aliases: ['science', 'space', 'climate']
  },
  'world': {
    slug: 'world',
    name: 'World',
    badge: 'WORLD & DIPLOMACY',
    headline: 'African Union Integration, United Nations & Global Diplomacy',
    description: 'Analyzing Nigeria\'s leadership across ECOWAS, continental free trade under AfCFTA, multilateral diplomacy, and the 20-million-strong global diaspora.',
    editor: 'Diplomatic Press Corps',
    accentColor: '#d97706',
    heroTag: 'INTERNATIONAL DESK',
    aliases: ['world', 'ecowas', 'diplomacy', 'international']
  }
};

// Retrieve articles by category slug or alias
function getArticlesByCategory(categoryQuery) {
  if (!categoryQuery || categoryQuery === 'all') return BLOG_ARTICLES;
  const normalized = normalizeCategorySlug(categoryQuery);
  const cfg = CATEGORY_REGISTRY[normalized];
  const aliases = cfg ? cfg.aliases : [normalized];

  return BLOG_ARTICLES.filter(a => {
    const slug = (a.categorySlug || '').toLowerCase();
    const cat = (a.category || '').toLowerCase();
    return aliases.includes(slug) || aliases.some(al => cat.includes(al));
  });
}

function getCategoryConfig(categoryQuery) {
  const normalized = normalizeCategorySlug(categoryQuery);
  return CATEGORY_REGISTRY[normalized] || {
    slug: normalized,
    name: normalized.toUpperCase(),
    badge: normalized.toUpperCase() + ' DESK',
    headline: normalized.toUpperCase() + ' News & Updates',
    description: 'Latest reporting and in-depth updates.',
    editor: 'Editorial Board',
    accentColor: '#2563eb',
    heroTag: 'LATEST UPDATES',
    aliases: [normalized]
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BLOG_ARTICLES,
    normalizeCategorySlug,
    CATEGORY_REGISTRY,
    getArticlesByCategory,
    getCategoryConfig
  };
}

