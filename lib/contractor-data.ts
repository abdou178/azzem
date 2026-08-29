export interface EmergencyIssue {
  id: string;
  titleEn: string;
  titleAr: string;
  urgencyEn: string;
  urgencyAr: string;
  badgeColor: string;
  descriptionEn: string;
  descriptionAr: string;
  symptomsEn: string[];
  symptomsAr: string[];
  recommendedActionEn: string;
  recommendedActionAr: string;
  defaultSeverity: "critical" | "high" | "medium";
}

export interface SuburbCoverageItem {
  id: string;
  nameEn: string;
  nameAr: string;
  estimatedArrivalMin: number;
  featured: boolean;
  typeEn: string;
  typeAr: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  priceFromAED: number;
  timeEstimateEn: string;
  timeEstimateAr: string;
  warrantyEn: string;
  warrantyAr: string;
  bulletPointsEn: string[];
  bulletPointsAr: string[];
  iconName: string;
}

export interface PricingPlan {
  id: string;
  titleEn: string;
  titleAr: string;
  priceAED: number | string;
  tagEn?: string;
  tagAr?: string;
  popular?: boolean;
  descriptionEn: string;
  descriptionAr: string;
  includesEn: string[];
  includesAr: string[];
  responseEn: string;
  responseAr: string;
}

export interface Testimonial {
  id: string;
  authorEn: string;
  authorAr: string;
  communityEn: string;
  communityAr: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  serviceEn: string;
  serviceAr: string;
  commentEn: string;
  commentAr: string;
  verified: boolean;
}

export const CONTRACTOR_PROFILE = {
  businessNameEn: "Azeem AC Maintenance Dubai",
  businessNameAr: "عظيم لصيانة وتصليح المكيفات دبي",
  taglineEn: "Dubai's Premier 24/7 Emergency AC & Chiller Repair Specialists for Luxury Villas",
  taglineAr: "خبراء طوارئ صيانة وتصليح المكيفات المركزية والتشيلر لفلل دبي على مدار 24 ساعة",
  phoneRaw: "+971561458557",
  phoneFormatted: "+971 56 145 8557",
  whatsappNumber: "971561458557",
  email: "support@azeemacdubai.com",
  baseLocationEn: "Arabian Ranches & Ras Al Khor Industrial Area, Dubai, UAE",
  baseLocationAr: "المرابع العربية ومنطقة رأس الخور الصناعية، دبي، الإمارات",
  rating: 4.8,
  reviewCount: 52,
  avgArrivalTimeMinutes: "25–35",
  startingPriceAED: 180,
  warrantyDays: 90,
  operatingHoursEn: "24 Hours / 7 Days a Week (including holidays & peak heatwaves)",
  operatingHoursAr: "24 ساعة / 7 أيام في الأسبوع (طوال أيام العطلات وموجات الحر)",
  supportedBrands: [
    "O General",
    "Daikin",
    "Carrier",
    "York",
    "Mitsubishi Electric",
    "Trane",
    "Gree",
    "SKM",
    "Rheem",
  ],
};

export const EMERGENCY_ISSUES: EmergencyIssue[] = [
  {
    id: "ac-blowing-hot",
    titleEn: "AC Blowing Warm / Hot Air",
    titleAr: "تكييف ينفخ هواء حار / توقف التبريد تماماً",
    urgencyEn: "Critical Danger • 45°C Heatwave SOS",
    urgencyAr: "حالة طارئة جداً • موجة حر 45°",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    defaultSeverity: "critical",
    descriptionEn: "Compressor overload trip, blown run capacitor, or rapid refrigerant pressure loss.",
    descriptionAr: "فصل حماية الكباس، تلف مكثف التشغيل (الكباستور)، أو تهريب مفاجئ لغاز الفريون.",
    symptomsEn: [
      "Vents blow room temperature or hot air",
      "Outdoor fan turns but compressor stays silent",
      "Indoor temperature rising quickly above 30°C",
    ],
    symptomsAr: [
      "الهواء الخارج من فتحات التكييف دافئ أو حار",
      "مروحة الوحدة الخارجية تدور لكن الكمبروسر متوقف",
      "ارتفاع سريع في حرارة الغرف لأكثر من 30 درجة",
    ],
    recommendedActionEn: "Shut AC down at thermostat immediately to prevent catastrophic compressor burn out. Dispatch tech.",
    recommendedActionAr: "أوقف تشغيل المكيف من الترموستات فوراً لحماية المحرك من الاحتراق التام واطلب الفني.",
  },
  {
    id: "ac-ceiling-water-leak",
    titleEn: "Water Leaking from Ceiling / Drain Overflow",
    titleAr: "تسريب مياه من السقف الجبس / فيضان درين المكيف",
    urgencyEn: "High Urgency • Gypsum & Floor Damage Risk",
    urgencyAr: "طارئ جداً • خطر تدمير الجبس والديكور",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    defaultSeverity: "high",
    descriptionEn: "Algae/dust blockage in condensate drain line causing drip tray overflow into gypsum ceiling.",
    descriptionAr: "انسداد ماسورة تصريف المكيف (الدرين) وتجمع المياه وتدفقها فوق ألواح الجبس والسبوت لايت.",
    symptomsEn: [
      "Water pouring through light fixtures or false ceiling joints",
      "Drip tray overflowing inside the ceiling void",
      "Musty smell and wet spots on walls/floors",
    ],
    symptomsAr: [
      "تنقيط مياه مستمر من فتحات الدكت وسبوت لايت السقف",
      "امتلاء صينية التصريف وفيضانها داخل تجويف السقف",
      "رائحة رطوبة وظهور بقع ماء على الحوائط والأرضيات",
    ],
    recommendedActionEn: "Turn off unit, place container under leak, and request high-pressure nitrogen drain clear.",
    recommendedActionAr: "أوقف تشغيل الوحدة وضع وعاء تحت التسريب واطلب تسليك الدرين بالضغط العالي فوراً.",
  },
  {
    id: "compressor-tripping-breaker",
    titleEn: "Compressor Buzzing / Tripping Villa Breaker",
    titleAr: "صوت زن في الكمبروسر / سقوط القاطع الكهربائي",
    urgencyEn: "Immediate Danger • High Voltage Fault",
    urgencyAr: "خطر فوري • عطل كهربائي عالي الجهد",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    defaultSeverity: "critical",
    descriptionEn: "Locked rotor / seized motor, grounded compressor windings, or melted magnetic contactor.",
    descriptionAr: "قفش ميكانيكي في الكباس، التماس في الملفات، أو احتراق مفتاح التلامس الكهربائي (الكونتاكتور).",
    symptomsEn: [
      "Loud buzzing or humming noise on roof before breaker snaps",
      "Main DB distribution board breaker trips repeatedly",
      "Faint burnt electrical smell around outdoor unit",
    ],
    symptomsAr: [
      "صوت زن وطنين قوي من وحدة السطح قبل فصل القاطع",
      "سقوط قاطع الكهرباء الرئيسي بلوحة الفيلا باستمرار",
      "رائحة حريق كهربائي خفيفة حول الوحدة الخارجية",
    ],
    recommendedActionEn: "DO NOT keep resetting breaker as this can cause electrical fire. Keep breaker OFF.",
    recommendedActionAr: "لا تكرر رفع القاطع الكهربائي لتجنب حدوث التماس أو حريق. اتركه مفصولاً واطلب الفني.",
  },
  {
    id: "frozen-ac-ice-buildup",
    titleEn: "Frozen AC Coil / Ice on Copper Pipes",
    titleAr: "تجمد مواسير التكييف وتكون ثلج على الوحدة الداخلية",
    urgencyEn: "High Urgency • Evaporator Choking",
    urgencyAr: "طارئ جداً • انسداد المبخر وتجمد الفريون",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    defaultSeverity: "high",
    descriptionEn: "Severe air starvation from clogged filters/blower failure or critically low R410A/R22 gas charge.",
    descriptionAr: "انسداد شديد لمرور الهواء، تلف محرك مروحة البلاور، أو انخفاض حاد في ضغط غاز التبريد.",
    symptomsEn: [
      "Thick solid ice covering outdoor copper suction line",
      "Little to zero airflow coming out of villa registers",
      "Melting water dripping continuously as coil thaws",
    ],
    symptomsAr: [
      "تكون طبقة ثلج بيضاء سميكة على مواسير النحاس الخارجية",
      "ضعف شديد في خروج الهواء من الفتحات بالرغم من تشغيل المروحة",
      "تساقط كميات كبيرة من المياه عند ذوبان الثلج",
    ],
    recommendedActionEn: "Switch system mode from COOL to FAN ONLY to start controlled thawing. Request gas test.",
    recommendedActionAr: "حول النظام من وضع التبريد (Cool) إلى وضع المروحة (Fan Only) لبدء إذابة الثلج واطلب فحص الغاز.",
  },
  {
    id: "thermostat-error-code",
    titleEn: "Thermostat Blackout / Communication Error",
    titleAr: "عطل شاشة الترموستات / ظهور رمز خطأ في النظام",
    urgencyEn: "Medium Urgency • Control System Failure",
    urgencyAr: "أولوية عاجلة • عطل في لوحة التحكم الإلكترونية",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    defaultSeverity: "medium",
    descriptionEn: "Blown 24V transformer, fried control PCB board, or jammed motorized 2-way actuator valve.",
    descriptionAr: "تلف محول 24 فولت، احتراق كارتة التحكم (PCB)، أو عطل محرك محبس الماء المثلج (Actuator Valve).",
    symptomsEn: [
      "Thermostat screen completely blank or flickering",
      "Error codes displayed such as E1, E4, F3, CH05, or H6",
      "Unit fails to turn on or change cooling stages",
    ],
    symptomsAr: [
      "شاشة الترموستات مطفأة تماماً أو تومض باستمرار",
      "ظهور رموز أعطال مثل E1 أو E4 أو F3 أو CH05 أو H6",
      "المكيف لا يستجيب لأي أمر تشغيل أو تغيير في درجات الحرارة",
    ],
    recommendedActionEn: "Check if main AC isolator switch is ON. Request our diagnostic technician with PCB test gear.",
    recommendedActionAr: "تأكد من تشغيل مفتاح العازل (Isolator) الخاص بالمكيف واطلب فحص لوحة التحكم بالكمبيوتر.",
  },
];

export const SUBURBS_COVERAGE: SuburbCoverageItem[] = [
  {
    id: "arabian-ranches",
    nameEn: "Arabian Ranches 1, 2 & 3",
    nameAr: "المرابع العربية 1 و 2 و 3",
    estimatedArrivalMin: 25,
    featured: true,
    typeEn: "Primary Hub • Immediate Response",
    typeAr: "مركز رئيسي • استجابة فورية",
  },
  {
    id: "dubai-hills",
    nameEn: "Dubai Hills Estate",
    nameAr: "دبي هيلز استيت",
    estimatedArrivalMin: 25,
    featured: true,
    typeEn: "Villas & Mansions Dedicated Team",
    typeAr: "فريق مخصص للفلل والقصور",
  },
  {
    id: "damac-hills",
    nameEn: "Damac Hills 1 & 2 (Akoya)",
    nameAr: "داماك هيلز 1 و 2",
    estimatedArrivalMin: 30,
    featured: true,
    typeEn: "Fast Dispatch Unit",
    typeAr: "وحدة استجابة سريعة",
  },
  {
    id: "the-villa",
    nameEn: "The Villa & Dubailand",
    nameAr: "ذا فيلا ودبي لاند",
    estimatedArrivalMin: 25,
    featured: true,
    typeEn: "Dedicated Central AC Unit",
    typeAr: "وحدة تكييف مركزي متخصصة",
  },
  {
    id: "mudon",
    nameEn: "Mudon & Al Waha",
    nameAr: "مدن والواحة",
    estimatedArrivalMin: 25,
    featured: true,
    typeEn: "Direct Route Dispatch",
    typeAr: "طريق مباشر لطواقم الصيانة",
  },
  {
    id: "town-square",
    nameEn: "Town Square & Mira (Reem)",
    nameAr: "تاون سكوير وميرا (ريم)",
    estimatedArrivalMin: 30,
    featured: false,
    typeEn: "Daily On-Call Vans",
    typeAr: "سيارات صيانة مجهزة يومياً",
  },
  {
    id: "motor-city",
    nameEn: "Motor City & Studio City",
    nameAr: "موتور سيتي وستوديو سيتي",
    estimatedArrivalMin: 20,
    featured: false,
    typeEn: "Rapid Response Route",
    typeAr: "طريق استجابة فائقة السرعة",
  },
  {
    id: "jumeirah-golf-estates",
    nameEn: "Jumeirah Golf Estates & Victory Heights",
    nameAr: "جميرا جولف إستيت وفيكتوري هايتس",
    estimatedArrivalMin: 30,
    featured: false,
    typeEn: "Luxury Villa Tech Support",
    typeAr: "دعم فني لفلل الجولف الراقية",
  },
  {
    id: "palm-jumeirah",
    nameEn: "Palm Jumeirah & Emirates Hills",
    nameAr: "نخلة جميرا وتلال الإمارات",
    estimatedArrivalMin: 35,
    featured: false,
    typeEn: "Chiller & Central Specialist",
    typeAr: "أخصائيو تشيلر ومكيفات مركزية",
  },
  {
    id: "ras-al-khor",
    nameEn: "Ras Al Khor & Nad Al Sheba",
    nameAr: "رأس الخور وند الشبا",
    estimatedArrivalMin: 20,
    featured: false,
    typeEn: "Logistics Hub & Master Workshop",
    typeAr: "مركز العمليات وورشة القطع",
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "compressor-capacitor-replacement",
    titleEn: "Emergency Compressor & Capacitor Replacement",
    titleAr: "تبديل كباسات ومكثفات التكييف المركزي والسبليت فوراً",
    shortDescEn: "Same-visit supply and fitting of heavy-duty UAE-spec capacitors and Copeland/Danfoss compressors.",
    shortDescAr: "توريد وتركيب مكثفات أمريكية عالية التحمل وكباسات كوبلاند ودانفوس أصلية في نفس الزيارة.",
    fullDescEn: "Extreme Dubai summer ambient temperatures often overload weak capacitors and burn compressor contacts. We carry genuine OEM start/run capacitors (35uF to 70uF) and certified hermetic & scroll compressors in our mobile response vans for on-the-spot installation.",
    fullDescAr: "تتسبب درجات الحرارة المرتفعة في دبي بضغط هائل على مكثفات البدء واحتراق نقاط التلامس. نحمل في سياراتنا المتنقلة كافة مقاسات الكباستور الأصلية (35 إلى 70 ميكروفاراد) وكباسات معتمدة لضمان إعادة تشغيل التبريد فوراً.",
    priceFromAED: 250,
    timeEstimateEn: "45–60 Minutes",
    timeEstimateAr: "45–60 دقيقة",
    warrantyEn: "90 Days Replacement Guarantee",
    warrantyAr: "ضمان استبدال معتمد 90 يوماً",
    bulletPointsEn: [
      "Heavy-duty 440V/450V dual-rated run capacitors in stock",
      "Solid-state hard-start kits installed for tough compressors",
      "Compressor terminal repair with high-temp ceramic connectors",
      "Full amp-draw testing under simulated peak load",
    ],
    bulletPointsAr: [
      "كباستور أصلي 440/450 فولت يتحمل حرارة 85 درجة مئوية",
      "تركيب أطقم بدء التشغيل القوي (Hard Start Kits) للكباسات الثقيلة",
      "إصلاح أطراف توصيل الكباس بعوازل سيراميك حرارية",
      "قياس سحب التيار (الأمبير) تحت أقصى حمل تشغيل",
    ],
    iconName: "Zap",
  },
  {
    id: "refrigerant-leak-recharge",
    titleEn: "Refrigerant R410A / R22 Leak Detection & Gas Recharge",
    titleAr: "كشف تسريب وتعبئة غاز الفريون الأصلي (R410A / R22)",
    shortDescEn: "Electronic halogen leak detection, nitrogen pressure testing, copper brazing, and virgin factory gas refill.",
    shortDescAr: "كشف التسريب بجهاز الهالوجين الإلكتروني، فحص ضغط النيتروجين، لحام النحاس، وتعبئة فريون أصلي 100%.",
    fullDescEn: "Low refrigerant causes frozen coils and rapid compressor burnout. We use precision electronic halogen sniffers and high-pressure dry nitrogen to pinpoint minute micro-leaks, braze damaged copper lines with silver solder, and vacuum the system to 500 microns before charging virgin refrigerant by exact weight scale.",
    fullDescAr: "نقص غاز التبريد يسبب تجمد المواسير واحتراق الكباس. نستخدم أحدث أجهزة كشف الفريون بالليزر والنيتروجين المضغوط لتحديد أماكن التسريب الدقيقة ولحام النحاس بسبيكة الفضة وتفريغ الهواء بالفاكيوم قبل تعبئة الغاز النقي بالوزن الدقيق.",
    priceFromAED: 220,
    timeEstimateEn: "60–90 Minutes",
    timeEstimateAr: "60–90 دقيقة",
    warrantyEn: "90 Days Leak & Pressure Warranty",
    warrantyAr: "ضمان 90 يوماً على ضغط الغاز واللحام",
    bulletPointsEn: [
      "Virgin DuPont/Honeywell R410A and R22 gas cylinders only",
      "High-pressure oxygen-free nitrogen (OFN) test up to 350 PSI",
      "Digital manifold gauge superheat & subcooling calibration",
      "Deep vacuum pull down to remove all internal moisture",
    ],
    bulletPointsAr: [
      "استخدام غاز فريون أمريكي/أوروبي أصلي غير معاد تدويره",
      "اختبار ضغط النيتروجين الخالي من الأكسجين حتى 350 PSI",
      "ضبط درجات التبريد الفائق (Subcooling & Superheat) بالجيج الرقمي",
      "سحب الرطوبة من الدائرة بجهاز الفاكيوم حتى 500 ميكرون",
    ],
    iconName: "Gauge",
  },
  {
    id: "emergency-drain-unclogging",
    titleEn: "Emergency AC Drain Unclogging & Ceiling Leak Stoppage",
    titleAr: "تسليك مجاري تصريف المكيفات وإصلاح تسريب السقف فوراً",
    shortDescEn: "High-pressure nitrogen jet drain blast, anti-microbial biocide treatment, and drip tray realignment.",
    shortDescAr: "تسليك بالضغط العالي وقاذف النيتروجين، تعقيم مضاد للبكتيريا، وتعديل ميول صينية التصريف.",
    fullDescEn: "Dubai's high humidity leads to thick gelatinous bacterial sludge choking the 1-inch AC condensate drain lines. Our emergency crews deploy portable high-pressure nitrogen blasters and wet-vacuums to immediately clear the line, flush with enzymatic cleaners, and seal any leaking ceiling joints.",
    fullDescAr: "الرطوبة العالية في دبي تتسبب في تراكم الطحالب والرواسب الطينية التي تسد مواسير التصريف. تقوم طواقمنا بضخ النيتروجين عالي الضغط وشفط الرواسب بالفاكيوم وغسيل مجرى التصريف بمواد إنزيمية لمنع تكرار الانسداد.",
    priceFromAED: 180,
    timeEstimateEn: "30–45 Minutes",
    timeEstimateAr: "30–45 دقيقة",
    warrantyEn: "60 Days Free-Flow Guarantee",
    warrantyAr: "ضمان 60 يوماً على سلامة التصريف",
    bulletPointsEn: [
      "High-velocity nitrogen jetting clears stubborn calcium & sludge",
      "Anti-clog biocide slow-dissolve tabs placed in drain pan",
      "Float switch safety cutoff installation to prevent future spills",
      "Immediate ceiling moisture inspection and surface drying",
    ],
    bulletPointsAr: [
      "نسف التكلسات والرواسب الطينية بضغط النيتروجين القوي",
      "وضع أقراص بيولوجية بطيئة الذوبان في صينية التصريف لمنع الطحالب",
      "إمكانية تركيب حساس أمان (Float Switch) لإيقاف المكيف تلقائياً قبل الطفح",
      "معاينة فورية لرطوبة الجبس وتجفيف المكان",
    ],
    iconName: "Droplets",
  },
  {
    id: "central-chiller-pcb-repair",
    titleEn: "Central Chiller & Ducted Split PCB / Actuator Repair",
    titleAr: "إصلاح بوردات التحكم الإلكترونية ومحركات مراوح الدكت",
    shortDescEn: "Troubleshooting smart thermostats, 2-way/3-way chilled water valves, ECM fan motors, and control boards.",
    shortDescAr: "تشخيص وإصلاح الترموستات الذكي، محابس التشيلر الثنائية والثلاثية، ومحركات مراوح الدكت المركزية.",
    fullDescEn: "For ducted split systems and district cooling (Empower/Emicool/Tabreed) fan coil units (FCUs), we diagnose faulty motorized actuator valves, replace dead 24V step-down transformers, re-solder relay connections on motherboard PCBs, and calibrate modulating thermostats.",
    fullDescAr: "لوحدات الدكت والتشيلر وتبريد المناطق (إمباور/إميكول/تبريد)، نقوم بفحص محابس المياه المثلجة (Actuators)، تبديل المحولات الكهربائية، إصلاح لوحات التحكم الإلكترونية (PCB)، وبرمجة الترموستات الديجيتال لضمان تدفق الهواء البارد بكفاءة.",
    priceFromAED: 280,
    timeEstimateEn: "60–90 Minutes",
    timeEstimateAr: "60–90 دقيقة",
    warrantyEn: "90 Days Electrical Component Warranty",
    warrantyAr: "ضمان 90 يوماً على القطع الكهربائية",
    bulletPointsEn: [
      "Belimo, Honeywell & Danfoss actuator valve replacements",
      "Nest, Ecobee, Honeywell, and O General digital thermostat setups",
      "FCU multi-speed blower fan motor capacitor & bearing service",
      "Control relay circuit board troubleshooting on-site",
    ],
    bulletPointsAr: [
      "تبديل محابس بيليمو وهانيويل ودانفوس الأصلية للتشيلر",
      "برمجة وصيانة ترموستات نيست وإيكوبي وهانيويل وجنرال",
      "فحص رولمان بلي ومكثفات محركات مراوح الدكت المركزية",
      "فحص دوائر الريليهات والفيوزات بالبوردات الإلكترونية",
    ],
    iconName: "Cpu",
  },
  {
    id: "hydro-jet-coil-cleaning",
    titleEn: "Hydro-Jet Chemical Coil Cleaning & Deep Sanitization",
    titleAr: "غسيل وتنظيف كويل المكيف الكيميائي بالضغط العالي",
    shortDescEn: "Pressure washing of caked aluminum condenser and evaporator fins with HVAC coil cleaner.",
    shortDescAr: "تنظيف عميق لزعانف المبخر والمكثف بمضخات الضغط العالي ومواد كيميائية مخصصة لإزالة الغبار والتكلس.",
    fullDescEn: "Dubai sandstorms coat outdoor condenser coils with fine sand, dropping cooling efficiency by up to 40% and making compressors overheat. We apply foam chemical cleaner to melt grease and dirt, followed by controlled hydro-jet pressure rinsing to restore factory heat rejection.",
    fullDescAr: "تتراكم الرمال الناعمة وعوادم السيارات على كويل المكثف الخارجي مما يرفع حرارة الكباس ويقلل التبريد بنسبة 40%. نستخدم رغوة كيميائية خاصة وغسيل بالضغط المائي المنظم لاستعادة كفاءة التبريد المصنعية.",
    priceFromAED: 180,
    timeEstimateEn: "45–60 Minutes per Unit",
    timeEstimateAr: "45–60 دقيقة لكل ماكينة",
    warrantyEn: "Maximum Airflow & Energy Savings",
    warrantyAr: "أقصى تدفق هواء وتوفير باستهلاك الكهرباء",
    bulletPointsEn: [
      "Biodegradable alkaline coil degreaser application",
      "Fin comb straightening to restore laminar airflow",
      "Blower wheel deep decontamination and mould removal",
      "Indoor air quality anti-bacterial fogging treatment",
    ],
    bulletPointsAr: [
      "استخدام منظفات كيميائية صديقة للبيئة تذيب الرواسب دون إتلاف النحاس",
      "تمشيط الزعانف المعدنية المعوجة لفتح مجاري الهواء المسدودة",
      "تنظيف مروحة البلاور الداخلية وإزالة العفن والروائح الكريهة",
      "تعقيم مجاري الهواء بمواد مضادة للبكتيريا والجراثيم",
    ],
    iconName: "Sparkles",
  },
  {
    id: "villa-annual-contract",
    titleEn: "Comprehensive Villa HVAC Annual Maintenance Contract",
    titleAr: "عقود صيانة سنوية شاملة وتفقد دوري لفلل دبي",
    shortDescEn: "Quarterly preventative maintenance visits, priority emergency dispatch, and 15% discount on all parts.",
    shortDescAr: "زيارات صيانة وقائية دورية كل 3 أشهر، أولوية استجابة فورية للطوارئ، وخصم 15% على القطع.",
    fullDescEn: "Protect your villa investment and keep your family comfortable year-round with our comprehensive 4-visit annual preventative maintenance contracts designed specifically for Arabian Ranches, Dubai Hills, and luxury Dubai communities.",
    fullDescAr: "احمِ أجهزة تكييف فيلتك وتجنب الأعطال المفاجئة في ذروة الصيف مع عقود الصيانة الدورية 4 زيارات سنوياً مع فحص شامل لضغط الغاز والمكونات الكهربائية والتنظيف الوقائي.",
    priceFromAED: 1400,
    timeEstimateEn: "Quarterly Scheduled Visits",
    timeEstimateAr: "زيارات ربع سنوية مجدولة",
    warrantyEn: "Priority 24/7 VIP Emergency Dispatch",
    warrantyAr: "أولوية وصول طوارئ VIP على مدار الساعة",
    bulletPointsEn: [
      "4 comprehensive maintenance visits per year",
      "Zero callout fees for emergency breakdown visits",
      "Thermal imaging inspection of all electrical DBs & coils",
      "15% discount on genuine spare parts and compressors",
    ],
    bulletPointsAr: [
      "4 زيارات صيانة وقائية شاملة على مدار العام",
      "إلغاء رسوم الكشف والزيارات الطارئة طوال فترة العقد",
      "فحص حراري بكاميرات Thermal Imaging للوحات والكويلات",
      "خصم خاص 15% على جميع قطع الغيار الأصلية",
    ],
    iconName: "ShieldCheck",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "emergency-diagnostic",
    titleEn: "Emergency Diagnostic & Thermal Scan",
    titleAr: "كشف وتشخيص طوارئ شامل بالفحص الحراري",
    priceAED: 180,
    tagEn: "Applied toward repair bill",
    tagAr: "تُخصم من قيمة الفاتورة عند الإصلاح",
    descriptionEn: "Complete on-site inspection for 1 AC system with electronic gas leak scan and electrical safety test.",
    descriptionAr: "فحص فني متكامل لوحدة التكييف مع قياس ضغط الغاز والكشف الحراري واختبار سلامة الكهرباء.",
    includesEn: [
      "Thermal infrared coil scan & delta-T check",
      "Digital manifold refrigerant pressure test (R410A/R22)",
      "Capacitor mFd capacitance and compressor amp draw test",
      "Condensate drain line flow check",
      "Upfront written quote before any work commences",
    ],
    includesAr: [
      "فحص حراري لكفاءة التبريد وفرق درجات الحرارة (Delta-T)",
      "قياس ضغط غاز الفريون بالجيج الرقمي (R410A / R22)",
      "فحص كفاءة الكباستور وقياس سحب أمبير الكباس",
      "فحص مجرى تصريف مياه المكيف",
      "تقديم تسعيرة واضحة وثابتة قبل بدء أي تصليح",
    ],
    responseEn: "25–35 Min Dispatch",
    responseAr: "وصول خلال 25–35 دقيقة",
  },
  {
    id: "capacitor-drain-repair",
    titleEn: "Emergency Repair & Component Fix",
    titleAr: "تصليح طوارئ واستبدال القطع الاستهلاكية",
    priceAED: 250,
    popular: true,
    tagEn: "Most Common Emergency Fix",
    tagAr: "الأكثر طلباً في حالات الطوارئ",
    descriptionEn: "Same-day repair including replacement capacitor, drain unclogging, or electrical contactor replacement.",
    descriptionAr: "إصلاح فوري بنفس الزيارة يشمل استبدال الكباستور، تسليك الدرين، أو تبديل الكونتاكتور المحترق.",
    includesEn: [
      "Includes genuine heavy-duty 450V capacitor or contactor",
      "High-pressure nitrogen condensate drain flush",
      "Complete electrical terminal tight-up and cleaning",
      "Operating current and temperature drop verification",
      "90-Day written warranty on replaced parts",
    ],
    includesAr: [
      "يشمل قطعة كباستور أو كونتاكتور أصلي عالي التحمل",
      "تسليك مجرى الدرين بضغط النيتروجين العالي",
      "شد وتنظيف كافة التوصيلات والأسلاك الكهربائية",
      "فحص استقرار التيار وانخفاض درجة الحرارة",
      "ضمان كتابي معتمد لمدة 90 يوماً على القطع",
    ],
    responseEn: "Immediate Mobile Van Dispatch",
    responseAr: "إرسال سيارة الصيانة فوراً",
  },
  {
    id: "refrigerant-leak-pack",
    titleEn: "Refrigerant Leak Repair & Full Gas Fill",
    titleAr: "كشف التسريب وتعبئة غاز فريون كاملة",
    priceAED: 380,
    tagEn: "Full Restoration",
    tagAr: "استعادة التبريد الثلجي بالكامل",
    descriptionEn: "Complete electronic leak search, silver solder copper repair, vacuum cycle, and pure virgin gas recharge.",
    descriptionAr: "كشف تسريب إلكتروني، لحام مواسير النحاس بالفضة، سحب الهواء بالفاكيوم، وشحن فريون أصلي.",
    includesEn: [
      "Electronic halogen sniffer leak pinpointing",
      "Silver-brazing of leaking flare joints or copper pipes",
      "Deep vacuum pull-down (500 microns moisture extraction)",
      "Full factory weight recharge of virgin R410A / R22 gas",
      "90-Day guarantee against recurring gas loss",
    ],
    includesAr: [
      "تحديد مكان التهريب بدقة بأجهزة الاستشعار الإلكترونية",
      "لحام مواسير النحاس أو وصلات الفلير بسبيكة الفضة",
      "تفريغ الدائرة بالفاكيوم لسحب الرطوبة والشوائب",
      "شحن كامل لغاز الفريون الأصلي بالوزن المصنعي",
      "ضمان 90 يوماً على عدم نقص الغاز وجودة اللحام",
    ],
    responseEn: "Emergency Van with Full Cylinders",
    responseAr: "سيارة مجهزة بكافة أسطوانات الغاز",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    authorEn: "Tariq Al-Mansoor",
    authorAr: "طارق المنصور",
    communityEn: "Arabian Ranches 2 (Rosa)",
    communityAr: "المرابع العربية 2 (روزا)",
    rating: 5,
    dateEn: "3 days ago",
    dateAr: "منذ 3 أيام",
    serviceEn: "Emergency Compressor Capacitor & Gas Test",
    serviceAr: "تبديل كباستور كباس طارئ وفحص الغاز",
    commentEn: "Our ground-floor ducted AC died at 2 PM on a 47°C Saturday. Azeem AC team was at our villa gate in 22 minutes! The technician identified the blown 55uF capacitor in 5 minutes, replaced it with a heavy-duty unit, and our living room was down to 21°C within the hour. Lifesavers!",
    commentAr: "توقف مكيف الصالة الأرضي فجأة الساعة 2 ظهراً في يوم حار جداً 47 درجة. وصل فريق عظيم للتكييف عند بوابة الفيلا في 22 دقيقة فقط! كشف الفني على الكباستور المحترق واستبدله بقطعة أصلية وعادت برودة المنزل إلى 21 درجة خلال ساعة. خدمة طوارئ لا تقدر بثمن!",
    verified: true,
  },
  {
    id: "review-2",
    authorEn: "Alexander Sterling",
    authorAr: "ألكسندر ستيرلينغ",
    communityEn: "Dubai Hills Estate (Sidra 2)",
    communityAr: "دبي هيلز استيت (سيدرا 2)",
    rating: 5,
    dateEn: "1 week ago",
    dateAr: "منذ أسبوع",
    serviceEn: "Ceiling Water Leak & Drain Jetting",
    serviceAr: "تسريب مياه بالسقف وتسليك الدرين بالضغط",
    commentEn: "Water started dripping through our master bedroom gypsum ceiling spotlights. I called Azeem AC and they arrived in 28 minutes. They blasted the clogged drain line with nitrogen, cleaned the drain pan, and stopped the leak before any ceiling collapse occurred. Extremely professional and clean.",
    commentAr: "بدأ الماء يقطر من سبوت لايت جبس غرفة النوم الرئيسية. اتصلت بشركة عظيم ووصلوا خلال 28 دقيقة. نظفوا ماسورة الدرين بالنيتروجين المضغوط وعقموا صينية التصريف وتوقف التسريب فوراً قبل تضرر الجبس. تعامل راقي ونظافة فائقة في العمل.",
    verified: true,
  },
  {
    id: "review-3",
    authorEn: "Mariam Al-Hashemi",
    authorAr: "مريم الهاشمي",
    communityEn: "The Villa (Centro)",
    communityAr: "ذا فيلا (سنترو)",
    rating: 5,
    dateEn: "2 weeks ago",
    dateAr: "منذ أسبوعين",
    serviceEn: "Breaker Tripping & Contactor Replacement",
    serviceAr: "فصل القاطع وتبديل كونتاكتور السطح",
    commentEn: "Every time the AC started, the main villa DB board would trip with a loud buzz. Other companies told me I needed a whole new system for 14,000 AED. Azeem's master technician tested the unit and found only a shorted contactor and stuck relay. Fixed for under 400 AED! True honesty and expertise.",
    commentAr: "كلما شغلنا المكيف كان قاطع الكهرباء الرئيسي للفيلا يفصل مع صوت زن قوي. شركات أخرى طلبت تغيير الماكينة بالكامل بـ 14 ألف درهم! فني عظيم فحص الجهاز واكتشف أن المشكلة فقط في مفتاح الكونتاكتور والريليه وأصلحه بأقل من 400 درهم! أمانة واحترافية حقيقية.",
    verified: true,
  },
  {
    id: "review-4",
    authorEn: "Faisal Al-Kuwari",
    authorAr: "فيصل الكواري",
    communityEn: "Damac Hills (Silver Springs)",
    communityAr: "داماك هيلز (سيلفر سبرينغز)",
    rating: 5,
    dateEn: "3 weeks ago",
    dateAr: "منذ 3 أسابيع",
    serviceEn: "R410A Leak Repair & Copper Brazing",
    serviceAr: "لحام نحاس وشحن فريون أصلي R410A",
    commentEn: "Our Daikin package unit was blowing warm air. Azeem's technicians pressurized the system with nitrogen, found a microscopic pinhole leak in the outdoor flare connection, brazed it cleanly, and recharged with pure R410A gas. The cooling is icy cold now even at midday.",
    commentAr: "مكيف دايكن كان ينفخ هواء حار. فنيو عظيم ضغطوا الشبكة بالنيتروجين واكتشفوا تهريب دقيق في وصلة الفلير بالنحاس ولحموه باحترافية وشحنوا فريون أصلي. التبريد الآن ثلج حتى في أشد ساعات الظهيرة.",
    verified: true,
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "fast-response",
    titleEn: "25–35 Min Dubai Villa Arrival",
    titleAr: "وصول سريع 25–35 دقيقة لفلل دبي",
    descEn: "Strategically stationed mobile emergency vans near Arabian Ranches, Dubai Hills, and Al Qudra road for instantaneous dispatch.",
    descAr: "سيارات صيانة متنقلة متمركزة قرب المرابع ودبي هيلز وطريق القدرة لضمان أسرع وصول عند الطوارئ.",
    icon: "Clock",
  },
  {
    id: "genuine-parts",
    titleEn: "100% Genuine Heavy-Duty Parts",
    titleAr: "قطع غيار أصلية 100% شديدة التحمل",
    descEn: "We only stock authentic OEM capacitors, fan motors, and compressors rated for 55°C+ Arabian Gulf peak heatwaves.",
    descAr: "نعتمد فقط قطع غيار أصلية ومكثفات معتمدة تتحمل حرارة الخليج القصوى التي تتجاوز 55 درجة مئوية.",
    icon: "CheckCircle",
  },
  {
    id: "transparent-fees",
    titleEn: "Fixed Transparent Pricing",
    titleAr: "أسعار ثابتة وشفافة بدون مفاجآت",
    descEn: "Diagnostic fees starting from 180 AED, fully credited toward the repair. Written estimate before any bolt is turned.",
    descAr: "كشف يبدأ من 180 درهم يُخصم بالكامل من فاتورة الإصلاح، مع بيان تكلفة واضح قبل بدء العمل.",
    icon: "Receipt",
  },
  {
    id: "guarantee",
    titleEn: "90-Day Peace of Mind Warranty",
    titleAr: "ضمان كتابي معتمد لمدة 90 يوماً",
    descEn: "Every replaced component, gas recharge, and copper braze is backed by our unconditional 90-day parts and labor guarantee.",
    descAr: "كل قطعة يتم استبدالها أو شحنة غاز مغطاة بضمان حقيقي لمدة 90 يوماً ضد أي عيب مصنعي أو فني.",
    icon: "ShieldAlert",
  },
  {
    id: "certified-masters",
    titleEn: "Certified HVAC Master Technicians",
    titleAr: "مهندسون وفنيون معتمدون في التكييف",
    descEn: "Minimum 8+ years hands-on experience on O General, Daikin, Carrier, York, and district cooling FCU chiller systems.",
    descAr: "خبرة لا تقل عن 8 سنوات في أنظمة جنرال، دايكن، كارير، يورك، وأنظمة التشيلر المركزية.",
    icon: "Award",
  },
  {
    id: "clean-service",
    titleEn: "Respectful & Clean Villa Protocol",
    titleAr: "بروتوكول نظافة واحترافية داخل الفلل",
    descEn: "Shoe covers, protective floor runners, and high-suction drop cloths ensure your home interiors remain immaculate.",
    descAr: "ارتداء واقي الأحذية، فرش أغطية لحماية الأرضيات والجبس، وترك المكان نظيفاً تماماً بعد انتهاء الصيانة.",
    icon: "Sparkle",
  },
];

export const DICTIONARY = {
  en: {
    topBanner: {
      status: "DUBAI 24/7 EMERGENCY AC DISPATCH ON STANDBY",
      arrival: "Avg Arrival: 25–35 Mins Across Dubai Villas",
      callNow: "Call 24/7 Dispatch:",
    },
    nav: {
      brandSub: "Dubai 24/7 Emergency HVAC",
      emergencySOS: "1-Tap SOS Dispatch",
      services: "Services",
      triage: "AC Triage SOS",
      pricing: "Pricing",
      coverage: "Coverage",
      reviews: "Reviews",
      callUs: "Emergency Call",
      langSwitch: "عربي",
    },
    hero: {
      badge: "🚨 DUBAI VILLA EMERGENCY AC BREAKDOWN UNIT",
      headlinePrimary: "24/7 Emergency AC Repair & Chiller Restoration",
      headlineSecondary: "in Dubai Luxury Villas",
      subheadline:
        "AC blowing hot air, leaking water into your gypsum ceiling, or tripping the villa breaker in 45°C heat? Our certified HVAC master technicians arrive at your villa in 25–35 minutes with genuine parts.",
      ctaCall: "Call Master Tech Now",
      ctaWhatsapp: "WhatsApp 1-Tap SOS",
      avgArrival: "25–35 Min Arrival",
      avgArrivalSub: "Arabian Ranches & Dubai Hills",
      ratingValue: "4.8 / 5.0 Star Rating",
      ratingSub: "52+ Verified Villa Owners",
      warranty: "90-Day Guarantee",
      warrantySub: "On All Parts & Gas Refills",
      noHidden: "100% Upfront Pricing",
      noHiddenSub: "No surprise callout extras",
    },
    triage: {
      badge: "INTERACTIVE EMERGENCY AC TRIAGE",
      title: "What AC Emergency Are You Facing?",
      subtitle:
        "Select your AC issue and villa location below. Our system instantly prepares an emergency dispatch ticket to deploy the nearest mobile van with the exact parts required.",
      selectIssue: "1. Select AC Fault / Emergency Symptom:",
      selectLocation: "2. Select Your Dubai Villa Community:",
      locationPlaceholder: "Select your community...",
      selectedSummary: "Emergency Dispatch Ticket Summary:",
      faultLabel: "Detected Fault:",
      locationLabel: "Target Community:",
      estArrivalLabel: "Est. Arrival:",
      dispatchBtn: "1-Tap Send Emergency SOS via WhatsApp",
      directCallBtn: "Direct Phone Call (+971 56 145 8557)",
      urgencyTitle: "Severity:",
      recommendedAction: "Immediate Safety Advice:",
    },
    trust: {
      badge: "TRUST & COMPLIANCE",
      title: "Why Dubai's Premier Villa Communities Trust Azeem AC",
      supportedBrands: "Equipped with Genuine OEM Parts For All Major Brands:",
    },
    services: {
      badge: "EXPERT HVAC SERVICES",
      title: "24/7 Emergency Repair & Preventative Villa Maintenance",
      subtitle:
        "From rapid capacitor replacements to district cooling chiller repairs, we handle every HVAC fault with precision tools and factory-certified components.",
      startingFrom: "Starting from",
      viewDetails: "Emergency SOS Dispatch",
      warrantyBadge: "Warranty Included",
    },
    whyUs: {
      badge: "THE AZEEM AC ADVANTAGE",
      title: "Why Villa Owners Call Us Instead of Slow Maintenance Providers",
      subtitle:
        "When summer temperatures cross 45°C, waiting 24 to 48 hours for property management is dangerous. We provide instant same-hour resolution.",
      comparisonTitle: "How We Compare:",
      colFeature: "Service Feature",
      colUs: "Azeem AC Emergency Team",
      colOthers: "Standard Facilities / Others",
      row1: {
        feat: "Emergency Response Time",
        us: "25–35 Minutes Average",
        them: "24–72 Hours or Next Day",
      },
      row2: {
        feat: "Spare Parts Availability",
        us: "100% Genuine OEM in Mobile Vans",
        them: "Need to order from supplier (days delay)",
      },
      row3: {
        feat: "Night & Weekend Availability",
        us: "True 24/7/365 On-Call Dispatch",
        them: "Office hours only, extra weekend charges",
      },
      row4: {
        feat: "Warranty on Replaced Parts",
        us: "90-Day Written Warranty",
        them: "30-Day or No Warranty",
      },
    },
    pricing: {
      badge: "HONEST & TRANSPARENT",
      title: "Clear, Upfront Pricing With No Surprise Fees",
      subtitle:
        "Diagnostic fees are fully credited toward repair work. All replacement components come with transparent invoices and 90-day guarantees.",
      bookDiagnostic: "Book Diagnostic Dispatch",
      popularBadge: "MOST REQUESTED",
    },
    coverage: {
      badge: "FAST DUBAI COVERAGE",
      title: "Priority Response Across Prime Dubai Villa Communities",
      subtitle:
        "Our mobile workshops are stationed near major arterial highways (E311, E611, Al Qudra) for rapid villa gate arrival.",
      minsArrival: "Mins Avg",
      hubLabel: "Service Type",
      callFromArea: "Dispatch to My Villa",
    },
    reviews: {
      badge: "VERIFIED REVIEWS",
      title: "Real Feedback from Dubai Villa Residents",
      subtitle: "Over 52 verified reviews from homeowners in Arabian Ranches, Dubai Hills, The Villa, and Damac Hills.",
      verifiedBadge: "Verified Villa Owner",
    },
    dock: {
      callNow: "Call Dispatch (25m)",
      whatsappSOS: "WhatsApp SOS",
    },
    footer: {
      about:
        "Azeem AC Maintenance Dubai (عظيم لصيانة وتصليح المكيفات دبي) is Dubai's trusted 24/7 emergency HVAC repair team specializing in luxury villas, ducted split systems, and central chillers.",
      quickLinks: "Quick Navigation",
      emergencyServices: "Emergency Repairs",
      contactInfo: "24/7 Emergency Dispatch",
      rights: "All Rights Reserved. Registered HVAC Contractor, Dubai, UAE.",
      disclaimer:
        "Emergency response times (25–35 mins) are subject to traffic conditions and villa gate security clearance.",
    },
  },
  ar: {
    topBanner: {
      status: "طوارئ دبي 24/7 • طواقم صيانة التكييف على أهبة الاستعداد",
      arrival: "متوسط الوصول: 25–35 دقيقة لجميع مجمعات فلل دبي",
      callNow: "اتصال طوارئ 24/7:",
    },
    nav: {
      brandSub: "طوارئ تكييف دبي 24/7",
      emergencySOS: "طلب طوارئ SOS",
      services: "الخدمات",
      triage: "تشخيص الأعطال",
      pricing: "الأسعار",
      coverage: "مناطق التغطية",
      reviews: "آراء العملاء",
      callUs: "اتصال طوارئ",
      langSwitch: "English",
    },
    hero: {
      badge: "🚨 وحدة طوارئ أعطال التكييف المركزية لفلل دبي",
      headlinePrimary: "طوارئ صيانة وتصليح المكيفات المركزية والتشيلر",
      headlineSecondary: "في فلل ومنازل دبي الفاخرة على مدار 24 ساعة",
      subheadline:
        "هل ينفخ المكيف هواءً حاراً، أو يسرب الماء في سقف الجبس، أو يفصل قاطع الكهرباء في حرارة 45 درجة؟ فنيو التكييف المعتمدون لدينا يصلون إلى فيلتك خلال 25–35 دقيقة مع قطع الغيار الأصلية.",
      ctaCall: "اتصل بفني الطوارئ فوراً",
      ctaWhatsapp: "واتساب طوارئ بنقرة واحدة",
      avgArrival: "وصول 25–35 دقيقة",
      avgArrivalSub: "المرابع العربية ودبي هيلز",
      ratingValue: "تقييم 4.8 / 5.0 نجوم",
      ratingSub: "أكثر من 52 تقييم موثق لأصحاب الفلل",
      warranty: "ضمان معتمد 90 يوماً",
      warrantySub: "على جميع القطع وشحن الغاز",
      noHidden: "أسعار واضحة وشفافة",
      noHiddenSub: "بدون رسوم خفية أو إضافات مفاجئة",
    },
    triage: {
      badge: "نظام التشخيص التفاعلي لطوارئ التكييف",
      title: "ما هي مشكلة التكييف الطارئة التي تواجهها؟",
      subtitle:
        "اختر نوع العطل وموقع فيلتك في دبي أدناه. يقوم نظامنا بإعداد تذكرة إرسال طوارئ فورية لتوجيه أقرب سيارة صيانة مجهزة بالقطع المناسبة.",
      selectIssue: "1. حدد عطل المكيف / أعراض المشكلة:",
      selectLocation: "2. حدد مجمع الفلل الخاص بك في دبي:",
      locationPlaceholder: "اختر منطقتك السكنية...",
      selectedSummary: "ملخص تذكرة إرسال الطوارئ:",
      faultLabel: "العطل المحدد:",
      locationLabel: "المنطقة المستهدفة:",
      estArrivalLabel: "الوقت المقدر للوصول:",
      dispatchBtn: "إرسال طلب طوارئ SOS عبر الواتساب",
      directCallBtn: "اتصال هاتفي مباشر (+971 56 145 8557)",
      urgencyTitle: "درجة الخطورة:",
      recommendedAction: "إجراء السلامة الفوري المطلوب:",
    },
    trust: {
      badge: "الثقة والاعتماد",
      title: "لماذا يثق سكان أرقى مجمعات الفلل في دبي بشركة عظيم للتكييف",
      supportedBrands: "مجهزون بقطع غيار أصلية 100% لكبرى الماركات العالمية:",
    },
    services: {
      badge: "خدمات التكييف المتخصصة",
      title: "صيانة طوارئ 24/7 وتصليح شامل لفلل ومنازل دبي",
      subtitle:
        "من الاستبدال الفوري للمكثفات إلى صيانة بوردات التشيلر والتحكم، نعالج كافة الأعطال بأحدث الأجهزة الإلكترونية وقطع الغيار المصنعية.",
      startingFrom: "يبدأ من",
      viewDetails: "طلب صيانة فورية",
      warrantyBadge: "شامل الضمان",
    },
    whyUs: {
      badge: "ميزة عظيم للتكييف",
      title: "لماذا يتصل بنا أصحاب الفلل بدلاً من شركات الصيانة البطيئة",
      subtitle:
        "عندما تتجاوز درجات الحرارة 45 درجة صيفاً، يكون الانتظار ليوم أو يومين خطراً حقيقياً. نحن نقدم حلولاً فورية في نفس الساعة.",
      comparisonTitle: "مقارنة الخدمة:",
      colFeature: "ميزة الخدمة",
      colUs: "فريق طوارئ عظيم للتكييف",
      colOthers: "شركات الصيانة التقليدية / إدارة المباني",
      row1: {
        feat: "سرعة الاستجابة والوصول",
        us: "متوسط 25–35 دقيقة فقط",
        them: "24–72 ساعة أو باليوم التالي",
      },
      row2: {
        feat: "توفر قطع الغيار الأصلية",
        us: "متوفرة بنسبة 100% داخل سيارات الصيانة",
        them: "الحاجة للطلب من المورد والانتظار لأيام",
      },
      row3: {
        feat: "العمل الليلي وأيام العطلات",
        us: "طوارئ حقيقية 24/7/365",
        them: "ساعات عمل مكتبية مع رسوم عطلات باهظة",
      },
      row4: {
        feat: "الضمان على القطع والإصلاح",
        us: "ضمان كتابي معتمد لمدة 90 يوماً",
        them: "30 يوماً أو بدون أي ضمان",
      },
    },
    pricing: {
      badge: "شفافية وأمانة",
      title: "أسعار واضحة ومحددة مسبقاً بدون رسوم مخفية",
      subtitle:
        "رسوم الكشف تُخصم بالكامل من تكلفة الإصلاح في حال تنفيذ العمل. جميع القطع المستبدلة تأتي بفواتير وضمان 90 يوماً.",
      bookDiagnostic: "طلب فحص وتشخيص فوري",
      popularBadge: "الأكثر طلباً",
    },
    coverage: {
      badge: "تغطية سريعة في دبي",
      title: "استجابة فورية لكبرى مجمعات الفلل الراقية في دبي",
      subtitle:
        "ورش الصيانة المتنقلة تتمركز بجوار الطرق السريعة الرئيسية (شارع الشيخ محمد بن زايد، شارع القدرة، شارع الإمارات) لضمان سرعة الوصول.",
      minsArrival: "دقيقة متوسط الوصول",
      hubLabel: "نوع الخدمة",
      callFromArea: "أرسل فني إلى فيلتي",
    },
    reviews: {
      badge: "تقييمات موثقة",
      title: "آراء حقيقية من أصحاب الفلل وسكان دبي",
      subtitle: "أكثر من 52 تقييماً موثقاً من سكان المرابع العربية، دبي هيلز، ذا فيلا، وداماك هيلز.",
      verifiedBadge: "مالك فيلا موثق",
    },
    dock: {
      callNow: "اتصال طوارئ (25 دقيقة)",
      whatsappSOS: "واتساب طوارئ SOS",
    },
    footer: {
      about:
        "عظيم لصيانة وتصليح المكيفات دبي (Azeem AC Maintenance Dubai) هي الشركة الرائدة في طوارئ صيانة وتصليح التكييف المركزي والسبليت والتشيلر لفلل ومنازل دبي على مدار الساعة.",
      quickLinks: "روابط سريعة",
      emergencyServices: "خدمات الطوارئ",
      contactInfo: "تواصل الطوارئ 24/7",
      rights: "جميع الحقوق محفوظة. شركة معتمدة لصيانة التكييف، دبي، الإمارات.",
      disclaimer:
        "أوقات الوصول للطوارئ (25–35 دقيقة) تخضع للحالة المرورية وتصاريح بوابات مجمعات الفلل.",
    },
  },
};
