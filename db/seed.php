<?php
/**
 * Database Seeder
 * Populates MySQL database with all categories and rich articles.
 */

require_once __DIR__ . '/config.php';

$pdo = getDbConnection();
if (!$pdo) {
    die("Failed to connect to MySQL database.");
}

echo "Initializing MaikBlog Database...\n";

// 1. Seed Categories
$categories = [
    [
        'slug' => 'sports',
        'name' => 'Sports',
        'badge' => 'SPORTS & ATHLETICS',
        'headline' => 'Super Eagles, NPFL, Athletics & Nigerian Sports Excellence',
        'description' => 'Comprehensive, real-time reporting from Lagos, Abuja, Godswill Akpabio Stadium, and international sporting arenas.',
        'editor' => 'Emeka Anyanwu, Sports Editor',
        'accent_color' => '#10b981',
        'hero_tag' => 'SUPER EAGLES & NPFL'
    ],
    [
        'slug' => 'politics',
        'name' => 'Politics',
        'badge' => 'POLITICS & GOVERNANCE',
        'headline' => 'National Assembly, State House & Nigerian Governance Watch',
        'description' => 'Investigative reporting, legislative insights, electoral modernization, and policy accountability across all 36 states and the FCT.',
        'editor' => 'Hon. Farouk Umar & Mustapha Garba',
        'accent_color' => '#2563eb',
        'hero_tag' => 'ABUJA BUREAU'
    ],
    [
        'slug' => 'economy',
        'name' => 'Business',
        'badge' => 'BUSINESS & MARKETS',
        'headline' => 'CBN Monetary Policies, Energy Investments & Trade Corridors',
        'description' => 'Deep financial analysis covering the Dangote Refinery, NAFEM FX markets, maritime logistics, and Nigerian commercial enterprise.',
        'editor' => 'Chidinma Adeleke & Babatunde Fashola',
        'accent_color' => '#059669',
        'hero_tag' => 'FINANCIAL MARKETS'
    ],
    [
        'slug' => 'technology',
        'name' => 'Tech',
        'badge' => 'TECH & INNOVATION',
        'headline' => 'Yaba Startups, Artificial Intelligence & African Venture Capital',
        'description' => 'Tracking high-growth startups, national broadband connectivity, artificial intelligence, and developer talent driving Africa\'s digital revolution.',
        'editor' => 'Tariq Ibrahim & Zainab Bello',
        'accent_color' => '#0284c7',
        'hero_tag' => 'SILICON LAGOON'
    ],
    [
        'slug' => 'culture',
        'name' => 'Entertainment',
        'badge' => 'NOLLYWOOD & CULTURE',
        'headline' => 'Nollywood Box Office, Afrobeats Global Charts & Ancestral Heritage',
        'description' => 'Celebrating the world-conquering vibrance of Nigerian cinema, Grammy-winning musicians, fashion runways, and repatriated royal artifacts.',
        'editor' => 'Stephanie Okon & Osasere Igbinedion',
        'accent_color' => '#8b5cf6',
        'hero_tag' => 'ENTERTAINMENT DESK'
    ],
    [
        'slug' => 'travel',
        'name' => 'Travel',
        'badge' => 'TRAVEL & HERITAGE',
        'headline' => 'Obudu Cloud Forests, Yankari Springs & Nigerian Natural Wonders',
        'description' => 'Immersive guides to breathtaking ecotourism sanctuaries, historic waterfalls, ancient inselbergs, and the vibrant coastal spirit of Lagos.',
        'editor' => 'Ngozi Okafor & Kunle Adeyemi',
        'accent_color' => '#0ea5e9',
        'hero_tag' => 'ECO-TOURISM'
    ],
    [
        'slug' => 'science',
        'name' => 'Science',
        'badge' => 'SCIENCE & CLIMATE',
        'headline' => 'NASRDA Space Telemetry, Pathogen Genomics & Clean Energy',
        'description' => 'Pioneering scientific breakthroughs, solar mini-grid installations, agricultural telemetry, and biotechnology advancing human life in Africa.',
        'editor' => 'Dr. Kalu Ndukwe, Science Bureau',
        'accent_color' => '#6366f1',
        'hero_tag' => 'AEROSPACE & BIOTECH'
    ],
    [
        'slug' => 'world',
        'name' => 'World',
        'badge' => 'WORLD & DIPLOMACY',
        'headline' => 'African Union Integration, United Nations & Global Diplomacy',
        'description' => 'Analyzing Nigeria\'s leadership across ECOWAS, continental free trade under AfCFTA, multilateral diplomacy, and the 20-million-strong global diaspora.',
        'editor' => 'Diplomatic Press Corps',
        'accent_color' => '#d97706',
        'hero_tag' => 'INTERNATIONAL DESK'
    ]
];

$catStmt = $pdo->prepare("INSERT INTO `categories` (`slug`, `name`, `badge`, `headline`, `description`, `editor`, `accent_color`, `hero_tag`)
    VALUES (:slug, :name, :badge, :headline, :description, :editor, :accent_color, :hero_tag)
    ON DUPLICATE KEY UPDATE 
    `name` = VALUES(`name`),
    `badge` = VALUES(`badge`),
    `headline` = VALUES(`headline`),
    `description` = VALUES(`description`),
    `editor` = VALUES(`editor`),
    `accent_color` = VALUES(`accent_color`),
    `hero_tag` = VALUES(`hero_tag`)");

foreach ($categories as $cat) {
    $catStmt->execute($cat);
}
echo "Seeded " . count($categories) . " categories.\n";

// 2. Seed Articles
$articles = [
    [
        'id' => 'hero-hot-now',
        'title' => 'Dangote Refinery Expands West African Fuel Exports as Domestic Output Hits Record Highs',
        'subtitle' => 'Federal Government and NNPCL inaugurate new direct petroleum distribution network across 36 states.',
        'category_slug' => 'economy',
        'category_name' => 'HOT NOW',
        'badge_type' => 'hot',
        'date_str' => 'Nov 18, 2023',
        'read_time' => '5 min read',
        'author_name' => 'Chidinma Adeleke',
        'author_role' => 'Chief Energy & Business Editor, Abuja Bureau',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/hero-main.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '58.4k',
        'likes' => 2480,
        'excerpt' => 'Nigeria\'s landmark 650,000-barrel-per-day petroleum refinery achieves full domestic supply capability, driving down transport logistics costs and boosting foreign exchange reserves across the ECOWAS region.',
        'content' => '<p class="lead">Nigeria\'s commercial energy ecosystem achieved a historic milestone today as the 650,000-barrel-per-day Dangote Petroleum Refinery ramped up domestic supply to all 36 states and launched maiden maritime shipments across neighboring West African coastal corridors.</p><p>The landmark deployment, conducted under the Federal Government\'s Naira-for-crude framework with the Nigerian National Petroleum Company Limited (NNPCL), is already yielding tangible economic relief.</p><blockquote>"Domestic energy self-sufficiency represents the single greatest structural catalyst for industrial resurgence across Nigeria."<cite>— Chidinma Adeleke</cite></blockquote>'
    ],
    [
        'id' => 'trending-1',
        'title' => 'Naira Gains Momentum at NAFEM Window as Nigerian FinTech Capital Inflows Hit $1.2B',
        'subtitle' => 'Central Bank market reforms and venture inflows strengthen liquidity across commercial banks.',
        'category_slug' => 'economy',
        'category_name' => 'ECONOMY',
        'badge_type' => 'default',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Babatunde Fashola',
        'author_role' => 'Financial Markets Analyst, Lagos',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/bitcoin.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '42.1k',
        'likes' => 1390,
        'excerpt' => 'The Nigerian Naira appreciated strongly against major international currencies following enhanced transparency protocols at the official foreign exchange trading window.',
        'content' => '<p class="lead">The Nigerian Naira posted solid gains at the Nigerian Autonomous Foreign Exchange Market (NAFEM) this week, buoyed by multi-million-dollar Diaspora remittance inflows and aggressive institutional venture allocations into Nigerian fintech infrastructure.</p>'
    ],
    [
        'id' => 'trending-2',
        'title' => 'Cross River Reopens Obudu Mountain Resort with Upgraded Cable Car & Eco-Trails',
        'subtitle' => 'State tourism board and private concessionaires restore Nigeria\'s iconic high-altitude paradise.',
        'category_slug' => 'travel',
        'category_name' => 'TRAVEL',
        'badge_type' => 'default',
        'date_str' => 'Nov 16, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Ngozi Okafor',
        'author_role' => 'Tourism & Heritage Writer, Calabar',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/ocean.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '36.5k',
        'likes' => 980,
        'excerpt' => 'Perched 1,576 meters above sea level on the Oshie Ridge, Obudu Mountain Resort welcomes back domestic and international travelers with modern eco-lodges and organic farms.',
        'content' => '<p class="lead">Cross River State has formally unveiled the rejuvenated Obudu Mountain Resort following a fourteen-month restoration that overhauled the famous 4-kilometer passenger cable car and established community-protected montane forest reserves.</p>'
    ],
    [
        'id' => 'trending-3',
        'title' => 'Yaba Tech Hubs Pioneer AI-Driven Crop Mapping for Northern Agricultural Belts',
        'subtitle' => 'Software engineers in Lagos partner with Kano grain cooperatives to forecast crop yields with satellite telemetry.',
        'category_slug' => 'technology',
        'category_name' => 'TECHNOLOGY',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Tariq Ibrahim',
        'author_role' => 'Tech & Innovation Correspondent',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/hikers.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '31.8k',
        'likes' => 840,
        'excerpt' => 'Young Nigerian software engineers and agronomists deploy localized mobile artificial intelligence tools to optimize fertilizer use and protect maize and millet harvests.',
        'content' => '<p class="lead">A consortium of young developers based in Yaba\'s Silicon Lagoon has launched an AI-powered agro-telemetry platform that operates offline via low-cost mobile handsets across rural farming communities in Kano, Kaduna, and Jigawa states.</p>'
    ],
    [
        'id' => 'breaking-list-1',
        'title' => 'Federal Executive Council Approves ₦4.2 Trillion Infrastructure & Railway Network Expansion',
        'subtitle' => 'Cabinet endorses continuous standard-gauge rail connections linking Abuja, Kaduna, Kano, and Maradi.',
        'category_slug' => 'politics',
        'category_name' => 'POLITICS',
        'badge_type' => 'breaking',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '3 min read',
        'author_name' => 'Mustapha Garba',
        'author_role' => 'State House Bureau',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/breaking-1.jpg',
        'is_trending' => 0,
        'is_breaking' => 1,
        'views' => '29.4k',
        'likes' => 670,
        'excerpt' => 'The Federal Executive Council presided over by the Presidency greenlights major multimodal transport investments to accelerate interstate commerce.',
        'content' => '<p class="lead">The Federal Executive Council meeting in the Council Chamber at Abuja approved major budgetary appropriations to connect industrial dry ports directly to national railway corridors.</p>'
    ],
    [
        'id' => 'breaking-list-2',
        'title' => 'Lagos State Completes Phase Two of Electric Red Line Light Rail Transit to Marina',
        'subtitle' => 'Mass transit milestone cuts commuting time between Alagbado and Lagos Island to under 45 minutes.',
        'category_slug' => 'politics',
        'category_name' => 'LAGOS',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Oluwaseun Balogun',
        'author_role' => 'Metropolitan Desk, Lagos',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/breaking-2.jpg',
        'is_trending' => 0,
        'is_breaking' => 1,
        'views' => '38.2k',
        'likes' => 1220,
        'excerpt' => 'Lagos Metropolitan Area Transport Authority celebrates the completion of major civil works on the electric Red Line rail corridor, modernizing public transit.',
        'content' => '<p class="lead">Commuters across the Lagos metropolis celebrate the arrival of high-frequency electric rolling stock, significantly reducing highway congestion along the busy Ikorodu Road corridor.</p>'
    ],
    [
        'id' => 'breaking-list-3',
        'title' => 'Super Eagles Confirm International Squad Ahead of Africa Cup of Nations Campaign',
        'subtitle' => 'Head Coach names 25-man roster featuring European league stars and home-grown NPFL standouts.',
        'category_slug' => 'sports',
        'category_name' => 'SPORTS',
        'badge_type' => 'default',
        'date_str' => 'Nov 14, 2023',
        'read_time' => '3 min read',
        'author_name' => 'Emeka Anyanwu',
        'author_role' => 'Sports Editor',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/breaking-3.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '44.9k',
        'likes' => 1850,
        'excerpt' => 'Nigeria\'s national football team gathers at the Godswill Akpabio International Stadium in Uyo for intensive training camp ahead of continental qualifiers.',
        'content' => '<p class="lead">With world-class strikers and an invigorated midfield, the Super Eagles will kick off their qualifying campaign with intense backing from millions of supporters nationwide.</p><p>Head coach emphasized tactical cohesion and grassroots domestic representation, granting call-ups to standout performers from Enyimba FC and Remo Stars.</p>'
    ],
    [
        'id' => 'sports-npfl',
        'title' => 'Remo Stars and Enyimba FC Clash in Thrilling Top-of-Table NPFL Championship Showdown',
        'subtitle' => 'Record crowds in Ikenne witness tactical masterclass as the Nigerian Premier Football League heats up.',
        'category_slug' => 'sports',
        'category_name' => 'SPORTS',
        'badge_type' => 'default',
        'date_str' => 'Nov 18, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Emeka Anyanwu',
        'author_role' => 'Sports Editor, Lagos Desk',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/breaking-3.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '52.1k',
        'likes' => 2140,
        'excerpt' => 'The Nigeria Premier Football League delivers prime sporting drama as title contenders battle for continental qualification tickets before a passionate stadium audience.',
        'content' => '<p class="lead">In an electrifying ninety minutes of high-tempo football at the Remo Stars Stadium, Remo Stars and nine-time champions Enyimba FC played out a breathless duel that showcased the accelerating tactical maturity of the domestic top flight.</p>'
    ],
    [
        'id' => 'sports-osimhen',
        'title' => 'Victor Osimhen Crowned African Footballer of the Year Following Historic Season',
        'subtitle' => 'Super Eagles talisman becomes first Nigerian player to lift prestigious continental crown since 1999.',
        'category_slug' => 'sports',
        'category_name' => 'SPORTS',
        'badge_type' => 'hot',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '5 min read',
        'author_name' => 'Emeka Anyanwu',
        'author_role' => 'Sports Editor, Lagos Desk',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/breaking-3.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '71.4k',
        'likes' => 3890,
        'excerpt' => 'At a glittering CAF gala in Marrakech, the clinical Nigerian marksman etched his name into football folklore following a historic goalscoring spree.',
        'content' => '<p class="lead">Victor Osimhen\'s historic journey from the humble streets of Olusosun in Ojota, Lagos, reached the zenith of African sport today as the Confederation of African Football voted him the Men\'s African Player of the Year.</p>'
    ],
    [
        'id' => 'sports-dtigress',
        'title' => 'D\'Tigress Make African History with Historic Quarter-Final Breakthrough in Paris',
        'subtitle' => 'Nigeria\'s national women\'s basketball team stuns top-five world ranking powerhouses with relentless grit.',
        'category_slug' => 'sports',
        'category_name' => 'SPORTS',
        'badge_type' => 'default',
        'date_str' => 'Nov 16, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Chidinma Adeleke',
        'author_role' => 'Special Sports Correspondent',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/hikers.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '48.2k',
        'likes' => 1980,
        'excerpt' => 'Nigeria\'s women\'s basketball champions rewrite Olympic history books by advancing to the final eight with unmatched perimeter defense and clutch free-throw shooting.',
        'content' => '<p class="lead">Under the tactical guidance of Head Coach Rena Wakama, D\'Tigress have permanently altered the international basketball landscape by becoming the first African team—male or female—to reach an Olympic basketball quarter-final.</p>'
    ],
    [
        'id' => 'sports-amusan',
        'title' => 'Tobi Amusan Shatters Commonwealth 100m Hurdles Mark in Thrilling Diamond League Finale',
        'subtitle' => 'World record holder defends her crown with blistering 12.28-second victory in front of packed stadium.',
        'category_slug' => 'sports',
        'category_name' => 'SPORTS',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '3 min read',
        'author_name' => 'Emeka Anyanwu',
        'author_role' => 'Sports Editor',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/breaking-3.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '41.6k',
        'likes' => 1650,
        'excerpt' => 'The pride of Ogun State continues her global athletics dominance with an emphatic gold medal display that left competitors trailing in her wake.',
        'content' => '<p class="lead">Nigeria\'s sprint queen Tobi Amusan produced another masterclass over the high hurdles, clocking a sensational 12.28 seconds to capture top honors at the global athletics championship.</p>'
    ],
    [
        'id' => 'breaking-featured',
        'title' => 'National Assembly Convenes Bipartisan Committee on Electoral Modernization and Civic Liberties',
        'subtitle' => 'Lawmakers, civil society coalitions, and youth organizations assemble in Abuja to advance real-time digital verification reforms.',
        'category_slug' => 'politics',
        'category_name' => 'POLITICS',
        'badge_type' => 'breaking',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '6 min read',
        'author_name' => 'Hon. Farouk Umar',
        'author_role' => 'Chief Parliamentary Correspondent, Abuja',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/protest.jpg',
        'is_trending' => 1,
        'is_breaking' => 1,
        'views' => '61.3k',
        'likes' => 2100,
        'excerpt' => 'Thousands of civic advocates, youth leaders, and electoral experts gather at the National Assembly complex in Abuja to deliver recommendations for transparent democratic governance.',
        'content' => '<p class="lead">Delegates representing youth coalitions, professional bar associations, and civil society organizations converged on the National Assembly in Abuja today for the commencement of public hearings on the Comprehensive Electoral and Civic Rights Bill.</p>'
    ],
    [
        'id' => 'politics-local-govt-autonomy',
        'title' => 'Supreme Court Upholds Financial Autonomy for 774 Local Government Councils Nationwide',
        'subtitle' => 'Historic apex court ruling mandates direct federation revenue allocations into grassroots municipal accounts.',
        'category_slug' => 'politics',
        'category_name' => 'POLITICS',
        'badge_type' => 'default',
        'date_str' => 'Nov 16, 2023',
        'read_time' => '5 min read',
        'author_name' => 'Hon. Farouk Umar',
        'author_role' => 'Chief Parliamentary Correspondent',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/abuja-gate.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '64.1k',
        'likes' => 2950,
        'excerpt' => 'In a unanimous landmark verdict delivered in Abuja, Nigeria\'s Supreme Court abolished state-controlled joint municipal accounts, restoring grassroots fiscal independence.',
        'content' => '<p class="lead">The Supreme Court of Nigeria delivered a historic constitutional judgment today, declaring that all monthly revenue allocations originating from the Federation Account must be disbursed directly to the elected councils of Nigeria\'s 774 local government areas.</p>'
    ],
    [
        'id' => 'popular-1',
        'title' => 'Gurara Waterfalls and Yankari Game Reserve Attract Record Influx of Eco-Tourists',
        'subtitle' => 'Niger and Bauchi States record surge in domestic holidaymakers exploring Nigeria\'s breathtaking natural wonderlands.',
        'category_slug' => 'travel',
        'category_name' => 'TRAVEL',
        'badge_type' => 'default',
        'date_str' => 'Nov 16, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Amina Yusuf',
        'author_role' => 'Ecotourism Reporter, Kaduna',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/mountain-lake.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '45.7k',
        'likes' => 1140,
        'excerpt' => 'With pristine warm springs, cascading cataracts, and rich wildlife sanctuaries, Nigeria\'s premier eco-reserves emerge as top vacation destinations for city dwellers.',
        'content' => '<p class="lead">Yankari Game Reserve in Bauchi State and the spectacular roaring cascades of Gurara Waterfalls in Niger State recorded their highest quarterly domestic visitor numbers in over a decade.</p>'
    ],
    [
        'id' => 'travel-idanre-hills',
        'title' => 'Ancient Idanre Hills and Ogbunike Caves Experience Surge in Adventure Tourism',
        'subtitle' => 'Ondo and Anambra States restore centuries-old hiking stairs and forest eco-resorts for domestic travelers.',
        'category_slug' => 'travel',
        'category_name' => 'TRAVEL',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Ngozi Okafor',
        'author_role' => 'Tourism & Heritage Writer',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/mountain-lake.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '34.1k',
        'likes' => 1180,
        'excerpt' => 'With 682 stone steps ascending into misty ancient granite citadels, Idanre Hills emerges as a top weekend adventure trek for hiking clubs and youth explorers.',
        'content' => '<p class="lead">Surrounded by dramatic volcanic inselbergs rising over 3,000 feet above sea level, the historic town of Idanre in Ondo State has welcomed thousands of intrepid backpackers and landscape photographers this holiday season.</p>'
    ],
    [
        'id' => 'popular-2',
        'title' => 'NASRDA Collaborates with African Union on Climate-Resilient Satellite Orbiters',
        'subtitle' => 'Nigerian Space Agency engineers lead development of drought-monitoring Earth observation satellites in Abuja.',
        'category_slug' => 'science',
        'category_name' => 'SCIENCE',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '5 min read',
        'author_name' => 'Dr. Kalu Ndukwe',
        'author_role' => 'Aerospace & Technology Correspondent',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/satellite-dish.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '38.9k',
        'likes' => 920,
        'excerpt' => 'The National Space Research and Development Agency in Abuja finalizes calibration protocols for NigeriaSat-X to track Lake Chad water basin replenishments.',
        'content' => '<p class="lead">Engineers and telemetry specialists at the NASRDA headquarters in Abuja have completed the assembly of optical payload arrays destined for low-Earth orbit under the Pan-African Space Initiative.</p>'
    ],
    [
        'id' => 'science-solar-grid',
        'title' => 'Rural Electrification Agency Deploys 500 Hybrid Solar Mini-Grids to Primary Health Clinics',
        'subtitle' => 'Clean renewable power guarantees uninterrupted vaccine cold-storage across rural communities in 24 states.',
        'category_slug' => 'science',
        'category_name' => 'SCIENCE',
        'badge_type' => 'default',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Dr. Kalu Ndukwe',
        'author_role' => 'Science & Energy Bureau',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/ocean.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '37.5k',
        'likes' => 1290,
        'excerpt' => 'The Federal Government\'s flagship off-grid solar initiative transforms primary healthcare outcomes by providing round-the-clock power to rural maternity clinics and neonatal units.',
        'content' => '<p class="lead">More than five hundred remote communities across Sokoto, Benue, Ebonyi, and Ondo states now enjoy uninterrupted solar electricity following the commissioning of decentralized mini-grid arrays by the Rural Electrification Agency.</p>'
    ],
    [
        'id' => 'tech-fintech-unicorns',
        'title' => 'Nigerian FinTech Valuation Surpasses $6 Billion as Digital Banking Reaches 90 Million Citizens',
        'subtitle' => 'Tier-1 digital payment rails process over 1.4 billion real-time instant transactions every month.',
        'category_slug' => 'technology',
        'category_name' => 'TECH',
        'badge_type' => 'default',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Tariq Ibrahim',
        'author_role' => 'Tech & Innovation Correspondent',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/bitcoin.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '59.2k',
        'likes' => 2780,
        'excerpt' => 'Nigerian digital banking pioneers and payment processors cement Lagos as Africa\'s undisputed financial technology capital through relentless product innovation.',
        'content' => '<p class="lead">Venture valuation data compiled by TechCabal and foreign investment monitors reveals that Nigerian financial technology corporations now command an aggregate valuation of more than $6.2 billion.</p>'
    ],
    [
        'id' => 'editor-2',
        'title' => 'Nollywood and Afrobeats Global Streaming Revenues Double in Historic Growth',
        'subtitle' => 'Nigerian filmmakers and musical talents dominate international billboard charts and theatrical box office records.',
        'category_slug' => 'culture',
        'category_name' => 'ENTERTAINMENT',
        'badge_type' => 'default',
        'date_str' => 'Nov 15, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Stephanie Okon',
        'author_role' => 'Entertainment Desk',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/nollywood.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '48.6k',
        'likes' => 1950,
        'excerpt' => 'From Lagos sound stages to global cinemas, Nigerian creative arts generate billions of naira in international licensing and festival accolades.',
        'content' => '<p class="lead">Major global streaming giants expand multi-million-dollar production commitments for Nigerian original series, highlighting authentic storytelling from Lagos, Enugu, and Jos.</p>'
    ],
    [
        'id' => 'culture-afrobeats-grammys',
        'title' => 'Burna Boy, Wizkid, and Tems Garner Multiple Nominations at 66th Annual Grammy Awards',
        'subtitle' => 'Historic recognition across Best African Music Performance and Global Album categories cements Nigeria\'s sonic supremacy.',
        'category_slug' => 'culture',
        'category_name' => 'ENTERTAINMENT',
        'badge_type' => 'hot',
        'date_str' => 'Nov 17, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Stephanie Okon',
        'author_role' => 'Entertainment Desk, Lagos',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/nollywood.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '82.4k',
        'likes' => 4120,
        'excerpt' => 'Nigerian musical heavyweights continue their triumphant march across global stadiums, landing historic nominations at the Recording Academy in Los Angeles.',
        'content' => '<p class="lead">Afrobeats\' meteoric global dominance received resounding institutional affirmation from the Recording Academy today, as Nigerian artists secured prime nominations across five major Grammy categories.</p>'
    ],
    [
        'id' => 'world-un-assembly',
        'title' => 'Nigeria Champions African Permanent Seat at UN Security Council During New York Summit',
        'subtitle' => 'Presidential delegation rallies global South partners behind comprehensive multilateral governance overhaul.',
        'category_slug' => 'world',
        'category_name' => 'WORLD',
        'badge_type' => 'default',
        'date_str' => 'Nov 18, 2023',
        'read_time' => '5 min read',
        'author_name' => 'Hon. Farouk Umar',
        'author_role' => 'Foreign Affairs Correspondent',
        'author_avatar' => 'assets/images/author-2.jpg',
        'image' => 'assets/images/abuja-gate.jpg',
        'is_trending' => 1,
        'is_breaking' => 0,
        'views' => '54.8k',
        'likes' => 2410,
        'excerpt' => 'Addressing the 79th General Assembly of the United Nations in New York, Nigeria spearheaded the continental demand for permanent African representation on the Security Council.',
        'content' => '<p class="lead">In an impassioned address before the United Nations General Assembly in New York, Nigeria\'s diplomatic delegation asserted that international governance institutions cannot maintain moral authority while denying 1.4 billion Africans permanent representation on the UN Security Council.</p>'
    ],
    [
        'id' => 'world-ecowas-pact',
        'title' => 'ECOWAS Heads of State Ratify Landmark Sub-Regional Trade & Security Pact in Abuja',
        'subtitle' => 'West African leaders agree on integrated border tariffs, joint security patrols, and energy power-sharing.',
        'category_slug' => 'world',
        'category_name' => 'WORLD',
        'badge_type' => 'default',
        'date_str' => 'Nov 16, 2023',
        'read_time' => '4 min read',
        'author_name' => 'Mustapha Garba',
        'author_role' => 'Diplomatic Desk, Abuja',
        'author_avatar' => 'assets/images/author-1.jpg',
        'image' => 'assets/images/lagos-skyline.jpg',
        'is_trending' => 0,
        'is_breaking' => 0,
        'views' => '39.7k',
        'likes' => 1450,
        'excerpt' => 'At the conclusion of the 64th Ordinary Summit of ECOWAS Heads of State in Abuja, fifteen member countries pledged unified action on regional trade corridors.',
        'content' => '<p class="lead">The Economic Community of West African States (ECOWAS) has concluded a historic tripartite pact in Abuja focusing on cross-border logistics deregulation, joint counter-terrorism intelligence hubs, and the West African Gas Pipeline interconnection.</p>'
    ]
];

$artStmt = $pdo->prepare("INSERT INTO `articles` 
    (`id`, `title`, `subtitle`, `category_slug`, `category_name`, `badge_type`, `date_str`, `read_time`, `author_name`, `author_role`, `author_avatar`, `image`, `is_trending`, `is_breaking`, `views`, `likes`, `excerpt`, `content`)
    VALUES (:id, :title, :subtitle, :category_slug, :category_name, :badge_type, :date_str, :read_time, :author_name, :author_role, :author_avatar, :image, :is_trending, :is_breaking, :views, :likes, :excerpt, :content)
    ON DUPLICATE KEY UPDATE 
    `title` = VALUES(`title`),
    `subtitle` = VALUES(`subtitle`),
    `category_slug` = VALUES(`category_slug`),
    `category_name` = VALUES(`category_name`),
    `badge_type` = VALUES(`badge_type`),
    `date_str` = VALUES(`date_str`),
    `read_time` = VALUES(`read_time`),
    `author_name` = VALUES(`author_name`),
    `author_role` = VALUES(`author_role`),
    `author_avatar` = VALUES(`author_avatar`),
    `image` = VALUES(`image`),
    `is_trending` = VALUES(`is_trending`),
    `is_breaking` = VALUES(`is_breaking`),
    `views` = VALUES(`views`),
    `likes` = VALUES(`likes`),
    `excerpt` = VALUES(`excerpt`),
    `content` = VALUES(`content`)");

foreach ($articles as $art) {
    $artStmt->execute($art);
}
echo "Seeded " . count($articles) . " articles into MySQL.\n";

// 3. Seed Default Comments for testing
$comments = [
    [
        'article_id' => 'breaking-list-3',
        'author_name' => 'Engr. Aliyu Bello',
        'author_email' => 'aliyu.bello@example.com',
        'comment_text' => 'Crucial reporting. Accurate coverage of domestic institutional progress and sports excellence is essential for constructive civic discourse.'
    ],
    [
        'article_id' => 'breaking-list-3',
        'author_name' => 'Nneka Eze',
        'author_email' => 'nneka.eze@example.com',
        'comment_text' => 'Very insightful and thorough breakdown by the Nigerian Updates desk. Excited for the Super Eagles international campaign!'
    ],
    [
        'article_id' => 'hero-hot-now',
        'author_name' => 'Tariq Sanusi',
        'author_email' => 'tariq.s@example.com',
        'comment_text' => 'Energy independence is indeed the cornerstone of industrial transformation for West Africa.'
    ]
];

$commStmt = $pdo->prepare("INSERT INTO `comments` (`article_id`, `author_name`, `author_email`, `comment_text`)
    VALUES (:article_id, :author_name, :author_email, :comment_text)");

foreach ($comments as $comm) {
    $commStmt->execute($comm);
}
echo "Seeded default reader comments into MySQL.\n";
echo "MaikBlog MySQL Database initialization complete!\n";
