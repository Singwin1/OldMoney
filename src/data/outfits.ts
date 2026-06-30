export type Gender = "men" | "women";
export type Category = "outerwear" | "top" | "bottom" | "shoes" | "accessory";

export type OutfitPiece = {
  id: string;
  gender: Gender;
  category: Category;
  name: string;
  fabric: string;
  hex: string;
  paletteIds: string[];
};

export const categories: { id: Category; label: string }[] = [
  { id: "outerwear", label: "Svrchní vrstva" },
  { id: "top", label: "Vrchní díl" },
  { id: "bottom", label: "Spodní díl" },
  { id: "shoes", label: "Obuv" },
  { id: "accessory", label: "Doplněk" },
];

type Raw = [Gender, Category, string, string, string, string[]];

const raw: Raw[] = [
  // ---- MEN — Hamptons Cream ----
  ["men", "outerwear", "Dvouřadý námořnický blejzr", "Vlněná flanela", "#1b2a3d", ["hamptons-cream"]],
  ["men", "top", "Oxfordská košile, krémová", "Bavlněný oxford", "#f5f0e6", ["hamptons-cream"]],
  ["men", "top", "Pruhované polo tričko", "Piké bavlna", "#faf7f0", ["hamptons-cream"]],
  ["men", "bottom", "Chino kalhoty, béžová", "Bavlněná gabardén", "#b08d57", ["hamptons-cream"]],
  ["men", "shoes", "Penny loafers", "Hovězí useň", "#b08d57", ["hamptons-cream"]],
  ["men", "accessory", "Pletený kožený pásek", "Useň", "#a8884f", ["hamptons-cream"]],

  // ---- MEN — English Countryside ----
  ["men", "outerwear", "Tweedové sako s lokty", "Donegal tweed", "#2a2724", ["english-countryside"]],
  ["men", "top", "Svetr s výstřihem do V", "Jehněčí vlna", "#44573f", ["english-countryside"]],
  ["men", "top", "Kostkovaná košile", "Bavlněná flanela", "#c9a679", ["english-countryside"]],
  ["men", "bottom", "Manšestrové kalhoty", "Žebrovaný manšestr", "#c9a679", ["english-countryside"]],
  ["men", "shoes", "Kožené brogues", "Děrovaná useň", "#2a2724", ["english-countryside"]],
  ["men", "accessory", "Kravata paisley", "Hedvábí", "#2e3d2f", ["english-countryside"]],

  // ---- MEN — Burgundy Estate ----
  ["men", "outerwear", "Sako z bavlněného sametu", "Bavlněný samet", "#5e2129", ["burgundy-estate"]],
  ["men", "top", "Košile s jemným proužkem", "Bavlna", "#f5f0e6", ["burgundy-estate"]],
  ["men", "top", "Pletený golf", "Merino vlna", "#5e2129", ["burgundy-estate"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["burgundy-estate"]],
  ["men", "shoes", "Oxfordky", "Lakovaná useň", "#2a2724", ["burgundy-estate"]],
  ["men", "accessory", "Hedvábný kapesníček", "Hedvábí", "#5e2129", ["burgundy-estate"]],

  // ---- MEN — Yacht Club Navy ----
  ["men", "outerwear", "Dvouřadé sako se zlatými knoflíky", "Vlna", "#1b2a3d", ["yacht-club-navy"]],
  ["men", "top", "Bílá košile s manžetovými knoflíčky", "Bavlna", "#faf7f0", ["yacht-club-navy"]],
  ["men", "top", "Tričko s kulatým výstřihem, písková", "Bavlna", "#c9a679", ["yacht-club-navy"]],
  ["men", "bottom", "Plátěné kalhoty", "Len", "#c9a679", ["yacht-club-navy"]],
  ["men", "shoes", "Boat shoes", "Useň", "#c9a679", ["yacht-club-navy"]],
  ["men", "accessory", "Hedvábná kravata, námořnická", "Hedvábí", "#2c4258", ["yacht-club-navy"]],

  // ---- MEN — Tweed & Oak ----
  ["men", "outerwear", "Kabát z velbloudí vlny", "Velbloudí vlna", "#b08d57", ["tweed-oak"]],
  ["men", "top", "Flanelová košile", "Flanel", "#8a8270", ["tweed-oak"]],
  ["men", "top", "Svetr s copánkovým vzorem", "Vlna", "#2e3d2f", ["tweed-oak"]],
  ["men", "bottom", "Vlněné kalhoty, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"]],
  ["men", "shoes", "Semišové chukka boty", "Semiš", "#b08d57", ["tweed-oak"]],
  ["men", "accessory", "Kožené rukavice", "Useň", "#2a2724", ["tweed-oak"]],

  // ---- WOMEN — Hamptons Cream ----
  ["women", "outerwear", "Lehké flanelové sako", "Vlna", "#1b2a3d", ["hamptons-cream"]],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#f5f0e6", ["hamptons-cream"]],
  ["women", "top", "Pruhované tričko, bretonské", "Bavlna", "#1b2a3d", ["hamptons-cream"]],
  ["women", "bottom", "Plisovaná midi sukně", "Bavlněný kepr", "#b08d57", ["hamptons-cream"]],
  ["women", "shoes", "Espadrilky s klínem", "Juta a plátno", "#faf7f0", ["hamptons-cream"]],
  ["women", "accessory", "Perlový náhrdelník", "Perly", "#a8884f", ["hamptons-cream"]],

  // ---- WOMEN — English Countryside ----
  ["women", "outerwear", "Vlněné kárované pončo", "Vlna", "#44573f", ["english-countryside"]],
  ["women", "top", "Rolák z merino vlny", "Merino vlna", "#2e3d2f", ["english-countryside"]],
  ["women", "top", "Košile s kostkovaným vzorem", "Flanel", "#c9a679", ["english-countryside"]],
  ["women", "bottom", "Manšestrová sukně", "Manšestr", "#c9a679", ["english-countryside"]],
  ["women", "shoes", "Jezdecké kotníkové boty", "Useň", "#2a2724", ["english-countryside"]],
  ["women", "accessory", "Hedvábný šátek s loveckým motivem", "Hedvábí", "#c9a679", ["english-countryside"]],

  // ---- WOMEN — Burgundy Estate ----
  ["women", "outerwear", "Sametové sako", "Bavlněný samet", "#5e2129", ["burgundy-estate"]],
  ["women", "top", "Halenka s mašlí, smetanová", "Hedvábí", "#f5f0e6", ["burgundy-estate"]],
  ["women", "top", "Hedvábný top, vínová", "Hedvábí", "#5e2129", ["burgundy-estate"]],
  ["women", "bottom", "Vlněná tužková sukně", "Vlna", "#2a2724", ["burgundy-estate"]],
  ["women", "shoes", "Lodičky na nízkém podpatku", "Lakovaná useň", "#5e2129", ["burgundy-estate"]],
  ["women", "accessory", "Sponka do vlasů, broušená", "Kov a perleť", "#a8884f", ["burgundy-estate"]],

  // ---- WOMEN — Yacht Club Navy ----
  ["women", "outerwear", "Dvouřadý trenčkot", "Bavlněná gabardén", "#1b2a3d", ["yacht-club-navy"]],
  ["women", "top", "Pruhované tričko, námořnické", "Bavlna", "#faf7f0", ["yacht-club-navy"]],
  ["women", "top", "Halenka, bílá s knoflíky", "Bavlna", "#faf7f0", ["yacht-club-navy"]],
  ["women", "bottom", "Plátěné culottes", "Len", "#c9a679", ["yacht-club-navy"]],
  ["women", "shoes", "Kožené mokasíny", "Useň", "#c9a679", ["yacht-club-navy"]],
  ["women", "accessory", "Hedvábný šátek s kotvami", "Hedvábí", "#2c4258", ["yacht-club-navy"]],

  // ---- WOMEN — Tweed & Oak ----
  ["women", "outerwear", "Kabát z velbloudí vlny, midi", "Velbloudí vlna", "#b08d57", ["tweed-oak"]],
  ["women", "top", "Kašmírový svetr", "Kašmír", "#ece3d2", ["tweed-oak"]],
  ["women", "top", "Košile z broušené bavlny", "Bavlna", "#8a8270", ["tweed-oak"]],
  ["women", "bottom", "Vlněné culottes, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"]],
  ["women", "shoes", "Semišové mokasíny", "Semiš", "#b08d57", ["tweed-oak"]],
  ["women", "accessory", "Kožená kabelka typu saddle", "Useň", "#8a8270", ["tweed-oak"]],
];

export const outfitPieces: OutfitPiece[] = raw.map(
  ([gender, category, name, fabric, hex, paletteIds], index) => ({
    id: `${gender}-${category}-${index}`,
    gender,
    category,
    name,
    fabric,
    hex,
    paletteIds,
  })
);
