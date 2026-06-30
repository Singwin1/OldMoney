export type Gender = "men" | "women";
export type Category = "outerwear" | "top" | "bottom" | "shoes" | "accessory";

export type OutfitPiece = {
  id: string;
  gender: Gender;
  category: Category;
  name: string;
  nameEn: string;
  fabric: string;
  fabricEn: string;
  hex: string;
  paletteIds: string[];
};

export const categories: { id: Category; label: string; labelEn: string }[] = [
  { id: "outerwear", label: "Svrchní vrstva", labelEn: "Outerwear" },
  { id: "top", label: "Vrchní díl", labelEn: "Top" },
  { id: "bottom", label: "Spodní díl", labelEn: "Bottom" },
  { id: "shoes", label: "Obuv", labelEn: "Shoes" },
  { id: "accessory", label: "Doplněk", labelEn: "Accessory" },
];

// [gender, category, name_cs, fabric_cs, hex, paletteIds, name_en, fabric_en]
type Raw = [Gender, Category, string, string, string, string[], string, string];

const raw: Raw[] = [
  // ---- MEN — Hamptons Cream ----
  ["men", "outerwear", "Dvouřadý námořnický blejzr", "Vlněná flanela", "#1b2a3d", ["hamptons-cream"], "Double-breasted naval blazer", "Wool flannel"],
  ["men", "top", "Oxfordská košile, krémová", "Bavlněný oxford", "#f5f0e6", ["hamptons-cream"], "Oxford shirt, cream", "Cotton oxford"],
  ["men", "top", "Pruhované polo tričko", "Piké bavlna", "#faf7f0", ["hamptons-cream"], "Striped polo shirt", "Piqué cotton"],
  ["men", "bottom", "Chino kalhoty, béžová", "Bavlněná gabardén", "#b08d57", ["hamptons-cream"], "Chino trousers, beige", "Cotton gabardine"],
  ["men", "shoes", "Penny loafers", "Hovězí useň", "#b08d57", ["hamptons-cream"], "Penny loafers", "Bovine leather"],
  ["men", "accessory", "Pletený kožený pásek", "Useň", "#a8884f", ["hamptons-cream"], "Braided leather belt", "Leather"],

  // ---- MEN — English Countryside ----
  ["men", "outerwear", "Tweedové sako s lokty", "Donegal tweed", "#2a2724", ["english-countryside"], "Tweed jacket with elbow patches", "Donegal tweed"],
  ["men", "top", "Svetr s výstřihem do V", "Jehněčí vlna", "#44573f", ["english-countryside"], "V-neck sweater", "Lambswool"],
  ["men", "top", "Kostkovaná košile", "Bavlněná flanela", "#c9a679", ["english-countryside"], "Checked shirt", "Cotton flannel"],
  ["men", "bottom", "Manšestrové kalhoty", "Žebrovaný manšestr", "#c9a679", ["english-countryside"], "Corduroy trousers", "Ribbed corduroy"],
  ["men", "shoes", "Kožené brogues", "Děrovaná useň", "#2a2724", ["english-countryside"], "Leather brogues", "Perforated leather"],
  ["men", "accessory", "Kravata paisley", "Hedvábí", "#2e3d2f", ["english-countryside"], "Paisley tie", "Silk"],

  // ---- MEN — Burgundy Estate ----
  ["men", "outerwear", "Sako z bavlněného sametu", "Bavlněný samet", "#5e2129", ["burgundy-estate"], "Cotton velvet jacket", "Cotton velvet"],
  ["men", "top", "Košile s jemným proužkem", "Bavlna", "#f5f0e6", ["burgundy-estate"], "Fine-striped shirt", "Cotton"],
  ["men", "top", "Pletený golf", "Merino vlna", "#5e2129", ["burgundy-estate"], "Knit turtleneck", "Merino wool"],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["burgundy-estate"], "Wool trousers, charcoal", "Wool"],
  ["men", "shoes", "Oxfordky", "Lakovaná useň", "#2a2724", ["burgundy-estate"], "Oxford shoes", "Patent leather"],
  ["men", "accessory", "Hedvábný kapesníček", "Hedvábí", "#5e2129", ["burgundy-estate"], "Silk pocket square", "Silk"],

  // ---- MEN — Yacht Club Navy ----
  ["men", "outerwear", "Dvouřadé sako se zlatými knoflíky", "Vlna", "#1b2a3d", ["yacht-club-navy"], "Double-breasted jacket with gold buttons", "Wool"],
  ["men", "top", "Bílá košile s manžetovými knoflíčky", "Bavlna", "#faf7f0", ["yacht-club-navy"], "White shirt with cufflinks", "Cotton"],
  ["men", "top", "Tričko s kulatým výstřihem, písková", "Bavlna", "#c9a679", ["yacht-club-navy"], "Crewneck t-shirt, sand", "Cotton"],
  ["men", "bottom", "Plátěné kalhoty", "Len", "#c9a679", ["yacht-club-navy"], "Linen trousers", "Linen"],
  ["men", "shoes", "Boat shoes", "Useň", "#c9a679", ["yacht-club-navy"], "Boat shoes", "Leather"],
  ["men", "accessory", "Hedvábná kravata, námořnická", "Hedvábí", "#2c4258", ["yacht-club-navy"], "Silk tie, navy", "Silk"],

  // ---- MEN — Tweed & Oak ----
  ["men", "outerwear", "Kabát z velbloudí vlny", "Velbloudí vlna", "#b08d57", ["tweed-oak"], "Camel wool overcoat", "Camel wool"],
  ["men", "top", "Flanelová košile", "Flanel", "#8a8270", ["tweed-oak"], "Flannel shirt", "Flannel"],
  ["men", "top", "Svetr s copánkovým vzorem", "Vlna", "#2e3d2f", ["tweed-oak"], "Cable-knit sweater", "Wool"],
  ["men", "bottom", "Vlněné kalhoty, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"], "Wool trousers, forest green", "Wool"],
  ["men", "shoes", "Semišové chukka boty", "Semiš", "#b08d57", ["tweed-oak"], "Suede chukka boots", "Suede"],
  ["men", "accessory", "Kožené rukavice", "Useň", "#2a2724", ["tweed-oak"], "Leather gloves", "Leather"],

  // ---- WOMEN — Hamptons Cream ----
  ["women", "outerwear", "Lehké flanelové sako", "Vlna", "#1b2a3d", ["hamptons-cream"], "Lightweight flannel blazer", "Wool"],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#f5f0e6", ["hamptons-cream"], "Silk blouse, cream", "Silk"],
  ["women", "top", "Pruhované tričko, bretonské", "Bavlna", "#1b2a3d", ["hamptons-cream"], "Breton striped top", "Cotton"],
  ["women", "bottom", "Plisovaná midi sukně", "Bavlněný kepr", "#b08d57", ["hamptons-cream"], "Pleated midi skirt", "Cotton twill"],
  ["women", "shoes", "Espadrilky s klínem", "Juta a plátno", "#faf7f0", ["hamptons-cream"], "Wedge espadrilles", "Jute and canvas"],
  ["women", "accessory", "Perlový náhrdelník", "Perly", "#a8884f", ["hamptons-cream"], "Pearl necklace", "Pearls"],

  // ---- WOMEN — English Countryside ----
  ["women", "outerwear", "Vlněné kárované pončo", "Vlna", "#44573f", ["english-countryside"], "Plaid wool poncho", "Wool"],
  ["women", "top", "Rolák z merino vlny", "Merino vlna", "#2e3d2f", ["english-countryside"], "Merino wool turtleneck", "Merino wool"],
  ["women", "top", "Košile s kostkovaným vzorem", "Flanel", "#c9a679", ["english-countryside"], "Checked shirt", "Flannel"],
  ["women", "bottom", "Manšestrová sukně", "Manšestr", "#c9a679", ["english-countryside"], "Corduroy skirt", "Corduroy"],
  ["women", "shoes", "Jezdecké kotníkové boty", "Useň", "#2a2724", ["english-countryside"], "Riding ankle boots", "Leather"],
  ["women", "accessory", "Hedvábný šátek s loveckým motivem", "Hedvábí", "#c9a679", ["english-countryside"], "Silk scarf with hunting motif", "Silk"],

  // ---- WOMEN — Burgundy Estate ----
  ["women", "outerwear", "Sametové sako", "Bavlněný samet", "#5e2129", ["burgundy-estate"], "Velvet blazer", "Cotton velvet"],
  ["women", "top", "Halenka s mašlí, smetanová", "Hedvábí", "#f5f0e6", ["burgundy-estate"], "Bow blouse, cream", "Silk"],
  ["women", "top", "Hedvábný top, vínová", "Hedvábí", "#5e2129", ["burgundy-estate"], "Silk top, burgundy", "Silk"],
  ["women", "bottom", "Vlněná tužková sukně", "Vlna", "#2a2724", ["burgundy-estate"], "Wool pencil skirt", "Wool"],
  ["women", "shoes", "Lodičky na nízkém podpatku", "Lakovaná useň", "#5e2129", ["burgundy-estate"], "Low-heel pumps", "Patent leather"],
  ["women", "accessory", "Sponka do vlasů, broušená", "Kov a perleť", "#a8884f", ["burgundy-estate"], "Cut crystal hair clip", "Metal and mother of pearl"],

  // ---- WOMEN — Yacht Club Navy ----
  ["women", "outerwear", "Dvouřadý trenčkot", "Bavlněná gabardén", "#1b2a3d", ["yacht-club-navy"], "Double-breasted trench coat", "Cotton gabardine"],
  ["women", "top", "Pruhované tričko, námořnické", "Bavlna", "#faf7f0", ["yacht-club-navy"], "Striped top, nautical", "Cotton"],
  ["women", "top", "Halenka, bílá s knoflíky", "Bavlna", "#faf7f0", ["yacht-club-navy"], "White button-up blouse", "Cotton"],
  ["women", "bottom", "Plátěné culottes", "Len", "#c9a679", ["yacht-club-navy"], "Linen culottes", "Linen"],
  ["women", "shoes", "Kožené mokasíny", "Useň", "#c9a679", ["yacht-club-navy"], "Leather loafers", "Leather"],
  ["women", "accessory", "Hedvábný šátek s kotvami", "Hedvábí", "#2c4258", ["yacht-club-navy"], "Silk scarf with anchors", "Silk"],

  // ---- WOMEN — Tweed & Oak ----
  ["women", "outerwear", "Kabát z velbloudí vlny, midi", "Velbloudí vlna", "#b08d57", ["tweed-oak"], "Camel wool midi coat", "Camel wool"],
  ["women", "top", "Kašmírový svetr", "Kašmír", "#ece3d2", ["tweed-oak"], "Cashmere sweater", "Cashmere"],
  ["women", "top", "Košile z broušené bavlny", "Bavlna", "#8a8270", ["tweed-oak"], "Brushed cotton shirt", "Cotton"],
  ["women", "bottom", "Vlněné culottes, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"], "Wool culottes, forest green", "Wool"],
  ["women", "shoes", "Semišové mokasíny", "Semiš", "#b08d57", ["tweed-oak"], "Suede loafers", "Suede"],
  ["women", "accessory", "Kožená kabelka typu saddle", "Useň", "#8a8270", ["tweed-oak"], "Leather saddle bag", "Leather"],
];

export const outfitPieces: OutfitPiece[] = raw.map(
  ([gender, category, name, fabric, hex, paletteIds, nameEn, fabricEn], index) => ({
    id: `${gender}-${category}-${index}`,
    gender,
    category,
    name,
    nameEn,
    fabric,
    fabricEn,
    hex,
    paletteIds,
  })
);
