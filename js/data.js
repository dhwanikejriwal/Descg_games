// State Economic Statistics, Bilingual Dictionary (EN / HI) & Sector Arcade Item Bank
// Official Source: Chhattisgarh Economic Survey 2025-26 & Directorate of Economics & Statistics (DES)

const I18N = {
    en: {
        brand: "DES Chhattisgarh • Arcade Hub",
        navHub: "🎪 Home",
        navIntro: "💡 GDP",
        navSpinWheel: "🎡 Spin the Wheel",
        navVital: "📋 Vital Data Cycle",
        navBuilder: "📋 Citizen Schemes",
        themeBtn: "☀️ Light",
        langBtn: "🌐 हिंदी",

        // Rajyotsav 2026 Home Screen (4 Clean Cards)
        rajTitle: "CHHATTISGARH RAJYOTSAV 2026",
        rajSub: "Directorate of Economics & Statistics • Interactive Digital Pavilion",
        rajCard1Name: "GDP (जीडीपी)",
        rajCard1Sub: "What is GDP, Chhattisgarh Economy & Sector Sorting Game",
        rajCard2Name: "SPIN THE WHEEL (AANKDA CHAKRA)",
        rajCard2Sub: "DES CG & State NITI Aayog • 10 Key Indicators & Interactive Quiz",
        rajCard3Name: "VITAL DATA AWARENESS (CYCLE)",
        rajCard3Sub: "Birth & Death Registration • 21-Day Action Cycle & Legal Rights",
        rajCard4Name: "CITIZEN SCHEMES (SEWA SETU)",
        rajCard4Sub: "Prioritize 4 Citizen-Centric Schemes & Generate Your Blueprint",
        btnWhatIsGDP: "💡 What is GDP? (जीडीपी क्या है?)",
        btnStateBriefing: "📊 State Economy Briefing 2025–26",

        // Page 1: What is GDP? (Clean, Focused, Uncluttered)
        introBadge: "🏛️ Directorate of Economics & Statistics • CG Economic Survey 2025–26",
        introHeadline: "What is GDP?",
        introLead: "<b>Gross Domestic Product (GDP)</b> — or <b>GSDP</b> for our state — is the <b>total monetary value of all final goods and services</b> produced within Chhattisgarh in a single financial year. It is the master scorecard of our state's economic size, wealth, and progress.",

        calcLabel: "How GSDP is Calculated:",
        formulaGoods: "All Goods Produced",
        formulaGoodsSub: "Agriculture, Minerals, Bhilai Steel, Power & Manufacturing",
        formulaServices: "Every Service Provided",
        formulaServicesSub: "Healthcare, Transport, IT, Banking & Education",
        formulaTotal: "Total State GSDP (2025–26)",
        formulaTotalVal: "₹3,58,293 Cr (Real) • ₹6.31 Lakh Cr (Nominal)",

        sectorsHint: "Every rupee generated in Chhattisgarh comes from 3 core sectors: <b>🌾 Primary (17.8%)</b>, <b>🏭 Secondary (49.3%)</b>, and <b>💻 Tertiary (32.9%)</b>.",
        btnToDashboard: "Explore State Economy Briefing →",
        btnToArcade: "Play Sector Sorting Game 🎮",

        // Page 2: State Economy Briefing & Sectors
        deptBadge: "Directorate of Economics & Statistics • Chhattisgarh (Survey 2025–26)",
        dashboardTitle: "State Economy Briefing & Sector Breakdown",
        targetBadge: "🎯 Real Growth: 8.11% | Nominal: 11.57%",
        donutHoleTitle: "Real Growth",
        donutHoleVal: "8.11%",
        legendPri: "Primary (17.8%)",
        legendSec: "Secondary (49.3%)",
        legendTer: "Tertiary (32.9%)",

        cardRealTitle: "Real GSDP (Constant 2011-12)",
        cardRealVal: "₹3,58,293<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>Crore (8.11% Growth)</span>",
        cardRealSub: "Baseline Physical Production",

        cardNominalTitle: "Nominal GSDP (Current Prices)",
        cardNominalVal: "₹6.31<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>Lakh Cr (11.57% Growth)</span>",
        cardNominalSub: "Market Value at Today's Prices",

        cardPciTitle: "Per Capita Income (Annual)",
        cardPciVal: "₹1,79,244<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>Per Resident (+10.07%)</span>",
        cardPciSub: "Standard of Living Benchmark",

        secPriTitle: "🌾 Primary Sector (17.8%)",
        secPriDesc: "Natural wealth extraction: Agriculture, Rice farming, Coal & Iron mining, Bastar Forest produce (Tendu Patta), and Livestock.",
        secSecTitle: "🏭 Secondary Sector (49.3%)",
        secSecDesc: "Industrial backbone: Bhilai Steel Plant, Thermal Power Generation, Cement units, and Capital Infrastructure.",
        secTerTitle: "💻 Tertiary Sector (32.9%)",
        secTerDesc: "Services & Knowledge economy: IT Hubs, Chitrakote Eco-tourism, Rural FinTech, Healthcare, Logistics, and Higher Education.",
        btnLaunchArcade: "Launch Sector Sorting Arcade 🎮",

        // Page 3: Sector Arcade Game
        btnBriefing: "← Briefing",
        hudInstruct: "Catch falling economic activities into the correct sector bin!",
        hudControls: "Controls: Move Mouse / Drag Touch / Keys [A, S, D] or [←, ↓, →]",
        highScoreLabel: "🏆 Best:",
        scoreLabel: "Score:",
        binPriTitle: "🌾 Primary",
        binPriSub: "17.8% • Agri / Mining [A / ←]",
        binSecTitle: "🏭 Secondary",
        binSecSub: "49.3% • Industry / Power [S / ↓]",
        binTerTitle: "💻 Tertiary",
        binTerSub: "32.9% • Services / IT [D / →]",
        gameOverTitle: "Arcade Complete!",
        gameOverSub: "Your final economic planning score:",
        btnPlayAgain: "Play Again 🔄",
        btnDashboard: "Dashboard"
    },

    hi: {
        brand: "आर्थिक एवं सांख्यिकी संचालनालय • खेल केंद्र",
        navHub: "🎪 होम",
        navIntro: "💡 जीडीपी",
        navSpinWheel: "🎡 स्पिन द व्हील",
        navVital: "📋 जन्म-मृत्यु पंजीयन",
        navBuilder: "📋 नागरिक योजनाएं",
        themeBtn: "☀️ लाइट",
        langBtn: "🌐 English",

        // Rajyotsav 2026 Home Screen (4 Simple Hindi Cards)
        rajTitle: "छत्तीसगढ़ राज्योत्सव 2026",
        rajSub: "आर्थिक एवं सांख्यिकी संचालनालय • डिजिटल खेल केंद्र",
        rajCard1Name: "जीडीपी (GDP)",
        rajCard1Sub: "जीडीपी क्या है, राज्य की कुल कमाई और सेक्टर खेल",
        rajCard2Name: "स्पिन द व्हील (आंकड़ा चक्र)",
        rajCard2Sub: "DES CG व राज्य नीति आयोग: 10 आधिकारिक संकेतक, विजन 2047 व क्विज",
        rajCard3Name: "जन्म-मृत्यु पंजीयन जागरूकता",
        rajCard3Sub: "21 दिनों में निःशुल्क पंजीयन, समय चक्र और नागरिक अधिकार",
        rajCard4Name: "नागरिक योजनाएं (सेवा सेतु)",
        rajCard4Sub: "शीर्ष 4 जनकल्याणकारी योजनाएं चुनें और सेवा सेतु विजन कार्ड बनाएं",
        btnWhatIsGDP: "💡 जीडीपी क्या है? (What is GDP?)",
        btnStateBriefing: "📊 राज्य रिपोर्ट (2025–26)",

        // Page 1: What is GDP? (Simple Hindi, Clean & Clear)
        introBadge: "🏛️ आर्थिक एवं सांख्यिकी संचालनालय • आर्थिक सर्वेक्षण 2025-26",
        introHeadline: "जीडीपी क्या है?",
        introLead: "<b>जीडीपी (GDP)</b> — यानी हमारे राज्य के लिए <b>जीएसडीपी (GSDP)</b> — का सीधा मतलब है: <b>एक साल में छत्तीसगढ़ में कुल कितने रुपये का सामान बना और सेवाएं दी गईं</b>। यह हमारे पूरे राज्य की कुल कमाई और तरक्की का मुख्य रिपोर्ट कार्ड है।",

        calcLabel: "जीडीपी का सीधा हिसाब:",
        formulaGoods: "कुल बना सामान",
        formulaGoodsSub: "खेती-फसलें, खनिज-कोयला, भिलाई इस्पात, बिजली व कारखाने",
        formulaServices: "कुल सेवाएं",
        formulaServicesSub: "अस्पताल, गाड़ियां, बैंक, स्कूल, इंटरनेट व व्यापार",
        formulaTotal: "छत्तीसगढ़ की कुल कमाई (2025–26)",
        formulaTotalVal: "₹3,58,293 करोड़ (वास्तविक) • ₹6.31 लाख करोड़ (प्रचलित)",

        sectorsHint: "छत्तीसगढ़ में आने वाला हर रुपया इन्हीं 3 मुख्य क्षेत्रों से आता है: <b>🌾 खेती व खनन (17.8%)</b>, <b>🏭 उद्योग व बिजली (49.3%)</b>, और <b>💻 सेवाएं व व्यापार (32.9%)</b>।",
        btnToDashboard: "राज्य की पूरी रिपोर्ट देखें →",
        btnToArcade: "सेक्टर खेल खेलें 🎮",

        // Page 2: State Economy Briefing & Sectors
        deptBadge: "आर्थिक एवं सांख्यिकी संचालनालय • छत्तीसगढ़ (आर्थिक सर्वेक्षण 2025–26)",
        dashboardTitle: "राज्य अर्थव्यवस्था रिपोर्ट एवं सेक्टर विवरण",
        targetBadge: "🎯 वास्तविक वृद्धि: 8.11% | प्रचलित: 11.57%",
        donutHoleTitle: "वास्तविक दर",
        donutHoleVal: "8.11%",
        legendPri: "प्राथमिक (17.8%)",
        legendSec: "द्वितीयक (49.3%)",
        legendTer: "तृतीयक (32.9%)",

        cardRealTitle: "वास्तविक जीएसडीपी (स्थिर 2011-12)",
        cardRealVal: "₹3,58,293<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>करोड़ (8.11% वृद्धि)</span>",
        cardRealSub: "मुद्रास्फीति रहित वास्तविक उत्पादन",

        cardNominalTitle: "प्रचलित जीएसडीपी (वर्तमान भाव)",
        cardNominalVal: "₹6.31<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>लाख करोड़ (11.57% वृद्धि)</span>",
        cardNominalSub: "वर्तमान बाजार मूल्यों पर मूल्यांकन",

        cardPciTitle: "प्रति व्यक्ति आय (वार्षिक)",
        cardPciVal: "₹1,79,244<br><span style='font-size: 1.2rem; font-weight: 500; color: var(--text-muted);'>प्रति नागरिक (+10.07%)</span>",
        cardPciSub: "नागरिकों का औसत जीवन स्तर",

        secPriTitle: "🌾 प्राथमिक क्षेत्र (17.8%)",
        secPriDesc: "प्राकृतिक संपदा निष्कर्षण: कृषि, धान फसल, कोयला एवं लौह अयस्क खनन, वनोपज (तेंदूपत्ता) एवं पशुपालन।",
        secSecTitle: "🏭 द्वितीयक क्षेत्र (49.3%)",
        secSecDesc: "औद्योगिक इंजन: भिलाई इस्पात संयंत्र, ताप विद्युत उत्पादन, सीमेंट कारखाने एवं अधोसंरचना निर्माण।",
        secTerTitle: "💻 तृतीयक क्षेत्र (32.9%)",
        secTerDesc: "सेवाएं एवं डिजिटल अर्थव्यवस्था: आईटी हब, चित्रकोट पर्यटन, ग्रामीण बैंकिंग, स्वास्थ्य सेवाएं एवं परिवहन।",
        btnLaunchArcade: "सेक्टर सॉर्टिंग आर्केड खेलें 🎮",

        // Page 3: Sector Arcade Game
        btnBriefing: "← रिपोर्ट",
        hudInstruct: "गिरती हुई आर्थिक गतिविधियों को उनके सही सेक्टर डिब्बे में डालें!",
        hudControls: "नियंत्रण: माउस हिलाएं / टच ड्रैग / बटन [A, S, D] या [←, ↓, →]",
        highScoreLabel: "🏆 सर्वश्रेष्ठ:",
        scoreLabel: "स्कोर:",
        binPriTitle: "🌾 प्राथमिक",
        binPriSub: "17.8% • कृषि / खनन [A / ←]",
        binSecTitle: "🏭 द्वितीयक",
        binSecSub: "49.3% • उद्योग / विद्युत [S / ↓]",
        binTerTitle: "💻 तृतीयक",
        binTerSub: "32.9% • सेवाएं / आईटी [D / →]",
        gameOverTitle: "खेल समाप्त!",
        gameOverSub: "आपका अंतिम आर्थिक नियोजन स्कोर:",
        btnPlayAgain: "पुनः खेलें 🔄",
        btnDashboard: "डैशबोर्ड"
    }
};

const ECONOMY_DATA = {
    state: "Chhattisgarh",
    department: "Directorate of Economics & Statistics",
    surveyYear: "2025-26",
    title: "State Economy Briefing & Sector Arcade",
    realGSDP: "₹3,58,293 Crore",
    realGrowth: "8.11%",
    nominalGSDP: "₹6.31 Lakh Crore",
    nominalGrowth: "11.57%",
    perCapitaIncome: "₹1,79,244",
    pciGrowth: "10.07%",
    sectors: {
        pri: { id: "pri", share: 17.8, color: "#f59e0b", icon: "🌾" },
        sec: { id: "sec", share: 49.3, color: "#06b6d4", icon: "🏭" },
        ter: { id: "ter", share: 32.9, color: "#10b981", icon: "💻" }
    }
};

const ARCADE_ITEMS = [
    // Primary Sector
    { id: 1, icon: "🌾", labelEn: "Paddy Harvest", labelHi: "धान की फसल", type: "pri", detailEn: "Agriculture • 17.8%", detailHi: "कृषि क्षेत्र • 17.8%", bonus: false },
    { id: 2, icon: "⛏️", labelEn: "Iron Ore Mining", labelHi: "लौह अयस्क खनन", type: "pri", detailEn: "Bailadila Mines", detailHi: "बैलाडीला खदानें", bonus: false },
    { id: 3, icon: "🌲", labelEn: "Tendu Patta & MFP", labelHi: "तेंदूपत्ता व लघु वनोपज", type: "pri", detailEn: "Forest Resources", detailHi: "वन संपदा", bonus: false },
    { id: 4, icon: "🐟", labelEn: "Fisheries Culture", labelHi: "मत्स्य पालन", type: "pri", detailEn: "Allied Agriculture", detailHi: "संबद्ध कृषि कार्य", bonus: false },
    { id: 5, icon: "🐄", labelEn: "Dairy Production", labelHi: "दुग्ध एवं पशुपालन", type: "pri", detailEn: "Livestock Economy", detailHi: "पशुधन अर्थव्यवस्था", bonus: false },
    { id: 6, icon: "🌿", labelEn: "Medicinal Herbs", labelHi: "औषधीय वनोपज", type: "pri", detailEn: "Bastar Natural Wealth", detailHi: "बस्तर वन संपदा", bonus: false },

    // Secondary Sector
    { id: 7, icon: "🏭", labelEn: "Bhilai Steel Plant", labelHi: "भिलाई इस्पात संयंत्र", type: "sec", detailEn: "Heavy Industry • 49.3%", detailHi: "भारी उद्योग • 49.3%", bonus: false },
    { id: 8, icon: "⚡", labelEn: "Thermal Power Station", labelHi: "ताप विद्युत केंद्र", type: "sec", detailEn: "Power Surplus Grid", detailHi: "ऊर्जा सरप्लस ग्रिड", bonus: false },
    { id: 9, icon: "🏗️", labelEn: "Expressway Works", labelHi: "एक्सप्रेसवे निर्माण", type: "sec", detailEn: "Capital Construction", detailHi: "पूंजीगत निर्माण", bonus: false },
    { id: 10, icon: "🧱", labelEn: "Cement Factory", labelHi: "सीमेंट विनिर्माण", type: "sec", detailEn: "Mineral Processing", detailHi: "खनिज प्रसंस्करण", bonus: false },
    { id: 11, icon: "⚙️", labelEn: "Aluminium Smelter", labelHi: "एल्युमिनियम स्मेल्टर", type: "sec", detailEn: "Korba Plant", detailHi: "कोरबा संयंत्र", bonus: false },
    { id: 12, icon: "🔋", labelEn: "Solar Energy Park", labelHi: "सौर ऊर्जा पार्क", type: "sec", detailEn: "Clean Energy", detailHi: "हरित ऊर्जा उत्पादन", bonus: false },

    // Tertiary Sector
    { id: 13, icon: "💻", labelEn: "IT & Software Park", labelHi: "आईटी व सॉफ्टवेयर पार्क", type: "ter", detailEn: "Services • 32.9%", detailHi: "सेवा क्षेत्र • 32.9%", bonus: false },
    { id: 14, icon: "🏨", labelEn: "Chitrakote Tourism", labelHi: "चित्रकोट पर्यटन", type: "ter", detailEn: "Hospitality & Eco-tourism", detailHi: "होटल व ईको-टूरिज्म", bonus: false },
    { id: 15, icon: "🏦", labelEn: "Rural Banking", labelHi: "ग्रामीण बैंक व वित्तीय सेवा", type: "ter", detailEn: "Financial Inclusion", detailHi: "वित्तीय समावेशन", bonus: false },
    { id: 16, icon: "🏥", labelEn: "Medical Colleges", labelHi: "चिकित्सा व स्वास्थ्य सेवा", type: "ter", detailEn: "Public Health", detailHi: "स्वास्थ्य अधोसंरचना", bonus: false },
    { id: 17, icon: "🚛", labelEn: "Railway Freight", labelHi: "रेल माल परिवहन", type: "ter", detailEn: "Logistics Corridor", detailHi: "लॉजिस्टिक्स नेटवर्क", bonus: false },
    { id: 18, icon: "🎓", labelEn: "Higher Tech University", labelHi: "उच्च तकनीकी शिक्षा", type: "ter", detailEn: "IIT, IIIT & Universities", detailHi: "आईआईटी, विश्वविद्यालय", bonus: false },

    // Rare Gamified Golden Boosters
    { id: 19, icon: "🌟", labelEn: "Golden GSDP Booster", labelHi: "गोल्डन जीएसडीपी बूस्टर", type: "wild", detailEn: "Wildcard Bonus (+50)", detailHi: "वाइल्डकार्ड बोनस (+50)", bonus: true },
    { id: 20, icon: "💎", labelEn: "State Budget Surplus", labelHi: "राज्य बजट सरप्लस", type: "wild", detailEn: "Economic Boom (+50)", detailHi: "आर्थिक उछाल (+50)", bonus: true }
];

// Universal export
if (typeof window !== 'undefined') {
    window.I18N = I18N;
    window.ECONOMY_DATA = ECONOMY_DATA;
    window.ARCADE_ITEMS = ARCADE_ITEMS;
}
