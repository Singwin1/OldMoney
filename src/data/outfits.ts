export type Gender = "men" | "women";
export type Category = "outerwear" | "top" | "bottom" | "shoes" | "accessory";
export type Season = "spring" | "summer" | "autumn" | "winter";

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
  seasons: Season[];
};

export const categories: { id: Category; label: string; labelEn: string }[] = [
  { id: "outerwear", label: "Svrchní vrstva", labelEn: "Outerwear" },
  { id: "top", label: "Vrchní díl", labelEn: "Top" },
  { id: "bottom", label: "Spodní díl", labelEn: "Bottom" },
  { id: "shoes", label: "Obuv", labelEn: "Shoes" },
  { id: "accessory", label: "Doplněk", labelEn: "Accessory" },
];

// [gender, category, name_cs, fabric_cs, hex, paletteIds, name_en, fabric_en, seasons]
type Raw = [Gender, Category, string, string, string, string[], string, string, Season[]];

const raw: Raw[] = [
  // ---- MEN — Hamptons Cream ----
  ["men", "outerwear", "Dvouřadý námořnický blejzr", "Vlněná flanela", "#1b2a3d", ["hamptons-cream"], "Double-breasted naval blazer", "Wool flannel", ["spring", "autumn"]],
  ["men", "top", "Oxfordská košile, krémová", "Bavlněný oxford", "#f5f0e6", ["hamptons-cream"], "Oxford shirt, cream", "Cotton oxford", ["spring", "summer", "autumn"]],
  ["men", "top", "Pruhované polo tričko", "Piké bavlna", "#faf7f0", ["hamptons-cream"], "Striped polo shirt", "Piqué cotton", ["spring", "summer"]],
  ["men", "bottom", "Chino kalhoty, béžová", "Bavlněná gabardén", "#b08d57", ["hamptons-cream"], "Chino trousers, beige", "Cotton gabardine", ["spring", "summer", "autumn"]],
  ["men", "shoes", "Penny loafers", "Hovězí useň", "#b08d57", ["hamptons-cream"], "Penny loafers", "Bovine leather", ["spring", "summer", "autumn"]],
  ["men", "accessory", "Pletený kožený pásek", "Useň", "#a8884f", ["hamptons-cream"], "Braided leather belt", "Leather", ["spring", "summer", "autumn", "winter"]],

  // ---- MEN — English Countryside ----
  ["men", "outerwear", "Tweedové sako s lokty", "Donegal tweed", "#2a2724", ["english-countryside"], "Tweed jacket with elbow patches", "Donegal tweed", ["autumn", "winter"]],
  ["men", "top", "Svetr s výstřihem do V", "Jehněčí vlna", "#44573f", ["english-countryside"], "V-neck sweater", "Lambswool", ["autumn", "winter", "spring"]],
  ["men", "top", "Kostkovaná košile", "Bavlněná flanela", "#c9a679", ["english-countryside"], "Checked shirt", "Cotton flannel", ["spring", "autumn", "winter"]],
  ["men", "bottom", "Manšestrové kalhoty", "Žebrovaný manšestr", "#c9a679", ["english-countryside"], "Corduroy trousers", "Ribbed corduroy", ["autumn", "winter"]],
  ["men", "shoes", "Kožené brogues", "Děrovaná useň", "#2a2724", ["english-countryside"], "Leather brogues", "Perforated leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Kravata paisley", "Hedvábí", "#2e3d2f", ["english-countryside"], "Paisley tie", "Silk", ["spring", "autumn", "winter"]],

  // ---- MEN — Burgundy Estate ----
  ["men", "outerwear", "Sako z bavlněného sametu", "Bavlněný samet", "#5e2129", ["burgundy-estate"], "Cotton velvet jacket", "Cotton velvet", ["autumn", "winter"]],
  ["men", "top", "Košile s jemným proužkem", "Bavlna", "#f5f0e6", ["burgundy-estate"], "Fine-striped shirt", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Pletený golf", "Merino vlna", "#5e2129", ["burgundy-estate"], "Knit turtleneck", "Merino wool", ["autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["burgundy-estate"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Oxfordky", "Lakovaná useň", "#2a2724", ["burgundy-estate"], "Oxford shoes", "Patent leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Hedvábný kapesníček", "Hedvábí", "#5e2129", ["burgundy-estate"], "Silk pocket square", "Silk", ["spring", "summer", "autumn", "winter"]],

  // ---- MEN — Yacht Club Navy ----
  ["men", "outerwear", "Dvouřadé sako se zlatými knoflíky", "Vlna", "#1b2a3d", ["yacht-club-navy"], "Double-breasted jacket with gold buttons", "Wool", ["spring", "autumn"]],
  ["men", "top", "Bílá košile s manžetovými knoflíčky", "Bavlna", "#faf7f0", ["yacht-club-navy"], "White shirt with cufflinks", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Tričko s kulatým výstřihem, písková", "Bavlna", "#c9a679", ["yacht-club-navy"], "Crewneck t-shirt, sand", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty", "Len", "#c9a679", ["yacht-club-navy"], "Linen trousers", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Boat shoes", "Useň", "#c9a679", ["yacht-club-navy"], "Boat shoes", "Leather", ["spring", "summer"]],
  ["men", "accessory", "Hedvábná kravata, námořnická", "Hedvábí", "#2c4258", ["yacht-club-navy"], "Silk tie, navy", "Silk", ["spring", "autumn", "winter"]],

  // ---- MEN — Tweed & Oak ----
  ["men", "outerwear", "Kabát z velbloudí vlny", "Velbloudí vlna", "#b08d57", ["tweed-oak"], "Camel wool overcoat", "Camel wool", ["autumn", "winter"]],
  ["men", "top", "Flanelová košile", "Flanel", "#8a8270", ["tweed-oak"], "Flannel shirt", "Flannel", ["autumn", "winter", "spring"]],
  ["men", "top", "Svetr s copánkovým vzorem", "Vlna", "#2e3d2f", ["tweed-oak"], "Cable-knit sweater", "Wool", ["autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"], "Wool trousers, forest green", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Semišové chukka boty", "Semiš", "#b08d57", ["tweed-oak"], "Suede chukka boots", "Suede", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Kožené rukavice", "Useň", "#2a2724", ["tweed-oak"], "Leather gloves", "Leather", ["winter"]],

  // ---- WOMEN — Hamptons Cream ----
  ["women", "outerwear", "Lehké flanelové sako", "Vlna", "#1b2a3d", ["hamptons-cream"], "Lightweight flannel blazer", "Wool", ["spring", "autumn"]],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#f5f0e6", ["hamptons-cream"], "Silk blouse, cream", "Silk", ["spring", "summer", "autumn"]],
  ["women", "top", "Pruhované tričko, bretonské", "Bavlna", "#1b2a3d", ["hamptons-cream"], "Breton striped top", "Cotton", ["spring", "summer"]],
  ["women", "bottom", "Plisovaná midi sukně", "Bavlněný kepr", "#b08d57", ["hamptons-cream"], "Pleated midi skirt", "Cotton twill", ["spring", "summer", "autumn"]],
  ["women", "shoes", "Espadrilky s klínem", "Juta a plátno", "#faf7f0", ["hamptons-cream"], "Wedge espadrilles", "Jute and canvas", ["summer"]],
  ["women", "accessory", "Perlový náhrdelník", "Perly", "#a8884f", ["hamptons-cream"], "Pearl necklace", "Pearls", ["spring", "summer", "autumn", "winter"]],

  // ---- WOMEN — English Countryside ----
  ["women", "outerwear", "Vlněné kárované pončo", "Vlna", "#44573f", ["english-countryside"], "Plaid wool poncho", "Wool", ["autumn", "winter"]],
  ["women", "top", "Rolák z merino vlny", "Merino vlna", "#2e3d2f", ["english-countryside"], "Merino wool turtleneck", "Merino wool", ["autumn", "winter", "spring"]],
  ["women", "top", "Košile s kostkovaným vzorem", "Flanel", "#c9a679", ["english-countryside"], "Checked shirt", "Flannel", ["spring", "autumn"]],
  ["women", "bottom", "Manšestrová sukně", "Manšestr", "#c9a679", ["english-countryside"], "Corduroy skirt", "Corduroy", ["autumn", "winter"]],
  ["women", "shoes", "Jezdecké kotníkové boty", "Useň", "#2a2724", ["english-countryside"], "Riding ankle boots", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Hedvábný šátek s loveckým motivem", "Hedvábí", "#c9a679", ["english-countryside"], "Silk scarf with hunting motif", "Silk", ["spring", "autumn", "winter"]],

  // ---- WOMEN — Burgundy Estate ----
  ["women", "outerwear", "Sametové sako", "Bavlněný samet", "#5e2129", ["burgundy-estate"], "Velvet blazer", "Cotton velvet", ["autumn", "winter"]],
  ["women", "top", "Halenka s mašlí, smetanová", "Hedvábí", "#f5f0e6", ["burgundy-estate"], "Bow blouse, cream", "Silk", ["spring", "summer", "autumn"]],
  ["women", "top", "Hedvábný top, vínová", "Hedvábí", "#5e2129", ["burgundy-estate"], "Silk top, burgundy", "Silk", ["spring", "autumn", "winter"]],
  ["women", "bottom", "Vlněná tužková sukně", "Vlna", "#2a2724", ["burgundy-estate"], "Wool pencil skirt", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Lodičky na nízkém podpatku", "Lakovaná useň", "#5e2129", ["burgundy-estate"], "Low-heel pumps", "Patent leather", ["spring", "summer", "autumn"]],
  ["women", "accessory", "Sponka do vlasů, broušená", "Kov a perleť", "#a8884f", ["burgundy-estate"], "Cut crystal hair clip", "Metal and mother of pearl", ["spring", "summer", "autumn", "winter"]],

  // ---- WOMEN — Yacht Club Navy ----
  ["women", "outerwear", "Dvouřadý trenčkot", "Bavlněná gabardén", "#1b2a3d", ["yacht-club-navy"], "Double-breasted trench coat", "Cotton gabardine", ["spring", "autumn"]],
  ["women", "top", "Pruhované tričko, námořnické", "Bavlna", "#faf7f0", ["yacht-club-navy"], "Striped top, nautical", "Cotton", ["spring", "summer"]],
  ["women", "top", "Halenka, bílá s knoflíky", "Bavlna", "#faf7f0", ["yacht-club-navy"], "White button-up blouse", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "bottom", "Plátěné culottes", "Len", "#c9a679", ["yacht-club-navy"], "Linen culottes", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené mokasíny", "Useň", "#c9a679", ["yacht-club-navy"], "Leather loafers", "Leather", ["spring", "autumn"]],
  ["women", "accessory", "Hedvábný šátek s kotvami", "Hedvábí", "#2c4258", ["yacht-club-navy"], "Silk scarf with anchors", "Silk", ["spring", "summer", "autumn"]],

  // ---- WOMEN — Tweed & Oak ----
  ["women", "outerwear", "Kabát z velbloudí vlny, midi", "Velbloudí vlna", "#b08d57", ["tweed-oak"], "Camel wool midi coat", "Camel wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr", "Kašmír", "#ece3d2", ["tweed-oak"], "Cashmere sweater", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Košile z broušené bavlny", "Bavlna", "#8a8270", ["tweed-oak"], "Brushed cotton shirt", "Cotton", ["spring", "autumn"]],
  ["women", "bottom", "Vlněné culottes, lesní zelená", "Vlna", "#2e3d2f", ["tweed-oak"], "Wool culottes, forest green", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Semišové mokasíny", "Semiš", "#b08d57", ["tweed-oak"], "Suede loafers", "Suede", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Kožená kabelka typu saddle", "Useň", "#8a8270", ["tweed-oak"], "Leather saddle bag", "Leather", ["spring", "summer", "autumn", "winter"]],

  // ---- MEN — Italian Riviera ----
  ["men", "outerwear", "Lněný blejzr, světle modrý", "Len", "#7ab5c4", ["italian-riviera"], "Linen blazer, light blue", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile s krátkým rukávem, krémová", "Len", "#faf7f0", ["italian-riviera"], "Short-sleeve shirt, cream", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo, terracotta", "Piké bavlna", "#c97a5a", ["italian-riviera"], "Polo, terracotta", "Piqué cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, písková", "Len", "#e0c99a", ["italian-riviera"], "Linen trousers, sand", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Kožené sandály, hnědé", "Useň", "#c97a5a", ["italian-riviera"], "Leather sandals, brown", "Leather", ["summer"]],
  ["men", "accessory", "Hedvábný kapesník, aqua", "Hedvábí", "#7ab5c4", ["italian-riviera"], "Silk pocket square, aqua", "Silk", ["spring", "summer"]],

  // ---- WOMEN — Italian Riviera ----
  ["women", "outerwear", "Lněné sako, aqua", "Len", "#7ab5c4", ["italian-riviera"], "Linen blazer, aqua", "Linen", ["spring", "summer"]],
  ["women", "top", "Hedvábná halenka, terracotta", "Hedvábí", "#c97a5a", ["italian-riviera"], "Silk blouse, terracotta", "Silk", ["spring", "summer"]],
  ["women", "top", "Top bez rukávů, smetanový", "Bavlna", "#faf7f0", ["italian-riviera"], "Sleeveless top, cream", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, písková", "Len", "#e0c99a", ["italian-riviera"], "Midi skirt, sand", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené sandálky s pásky", "Useň", "#c97a5a", ["italian-riviera"], "Strappy leather sandals", "Leather", ["summer"]],
  ["women", "accessory", "Zlatý náramek", "Kov", "#a8884f", ["italian-riviera"], "Gold bracelet", "Metal", ["spring", "summer"]],

  // ---- MEN — Monte Carlo ----
  ["men", "outerwear", "Smokinové sako, černé", "Vlna", "#1a1a1a", ["monte-carlo"], "Tuxedo jacket, black", "Wool", ["spring", "autumn", "winter"]],
  ["men", "top", "Bílá smokingová košile", "Bavlna", "#faf7f0", ["monte-carlo"], "White dress shirt", "Cotton", ["spring", "summer", "autumn", "winter"]],
  ["men", "top", "Kašmírový svetr, slonovinová", "Kašmír", "#faf7f0", ["monte-carlo"], "Cashmere sweater, ivory", "Cashmere", ["autumn", "winter", "spring"]],
  ["men", "bottom", "Úzké černé kalhoty", "Vlna", "#1a1a1a", ["monte-carlo"], "Slim black trousers", "Wool", ["spring", "autumn", "winter"]],
  ["men", "shoes", "Lakované oxfordky", "Lakovaná useň", "#1a1a1a", ["monte-carlo"], "Patent leather Oxfords", "Patent leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Zlaté manžetové knoflíčky", "Kov", "#d4b896", ["monte-carlo"], "Gold cufflinks", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ---- WOMEN — Monte Carlo ----
  ["women", "outerwear", "Smokinový blejzr, černý", "Vlna", "#1a1a1a", ["monte-carlo"], "Tuxedo blazer, black", "Wool", ["spring", "autumn", "winter"]],
  ["women", "top", "Hedvábná halenka, champagne", "Hedvábí", "#d4b896", ["monte-carlo"], "Silk blouse, champagne", "Silk", ["spring", "summer", "autumn"]],
  ["women", "top", "Kašmírový svetr, slonovinová", "Kašmír", "#faf7f0", ["monte-carlo"], "Cashmere sweater, ivory", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Úzká černá midi sukně", "Vlna", "#1a1a1a", ["monte-carlo"], "Slim black midi skirt", "Wool", ["spring", "autumn", "winter"]],
  ["women", "shoes", "Lodičky, černé", "Useň", "#1a1a1a", ["monte-carlo"], "Black pumps", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Zlatý náhrdelník, jednoduchý", "Kov", "#d4b896", ["monte-carlo"], "Simple gold necklace", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ---- MEN — Scottish Highlands ----
  ["men", "outerwear", "Vlněný kabát, vřesová", "Vlna", "#7d6b8a", ["scottish-highlands"], "Wool coat, heather", "Wool", ["autumn", "winter"]],
  ["men", "top", "Rolák z merino vlny, mlhavá", "Merino vlna", "#c5bec8", ["scottish-highlands"], "Merino turtleneck, mist", "Merino wool", ["autumn", "winter", "spring"]],
  ["men", "top", "Kostkovaná košile, kapradí", "Flanel", "#5e4a2e", ["scottish-highlands"], "Checked shirt, bracken", "Flannel", ["spring", "autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, tmavé", "Vlna", "#2a2724", ["scottish-highlands"], "Dark wool trousers", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Těžké kožené brogues", "Useň", "#5e4a2e", ["scottish-highlands"], "Heavy leather brogues", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Vlněná tartanová šála", "Vlna", "#7d6b8a", ["scottish-highlands"], "Wool tartan scarf", "Wool", ["autumn", "winter", "spring"]],

  // ---- WOMEN — Scottish Highlands ----
  ["women", "outerwear", "Vlněné pončo, vřes", "Vlna", "#7d6b8a", ["scottish-highlands"], "Wool poncho, heather", "Wool", ["autumn", "winter"]],
  ["women", "top", "Roláček, mlhavá", "Merino vlna", "#c5bec8", ["scottish-highlands"], "Turtleneck, mist", "Merino wool", ["autumn", "winter", "spring"]],
  ["women", "top", "Kostkovaná košile, kapradí", "Flanel", "#5e4a2e", ["scottish-highlands"], "Checked shirt, bracken", "Flannel", ["spring", "autumn"]],
  ["women", "bottom", "Vlněná sukně, tmavá", "Vlna", "#2a2724", ["scottish-highlands"], "Dark wool skirt", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kotníkové boty", "Useň", "#5e4a2e", ["scottish-highlands"], "Leather ankle boots", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Hedvábný šátek, vřesová", "Hedvábí", "#7d6b8a", ["scottish-highlands"], "Silk scarf, heather", "Silk", ["spring", "autumn", "winter"]],

  // ---- MEN — Palm Beach ----
  ["men", "outerwear", "Lněný blejzr, korálový", "Len", "#d4816a", ["palm-beach"], "Linen blazer, coral", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo tričko, bílé", "Piké bavlna", "#faf7f0", ["palm-beach"], "White polo shirt", "Piqué cotton", ["spring", "summer"]],
  ["men", "top", "Tričko, aqua", "Bavlna", "#7ab5c4", ["palm-beach"], "T-shirt, aqua", "Cotton", ["summer"]],
  ["men", "bottom", "Lněné šortky, písková", "Len", "#e0c99a", ["palm-beach"], "Linen shorts, sand", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály", "Useň", "#d4816a", ["palm-beach"], "Leather sandals", "Leather", ["summer"]],
  ["men", "accessory", "Tkané náramky", "Bavlna", "#e0c99a", ["palm-beach"], "Woven bracelets", "Cotton", ["spring", "summer"]],

  // ---- WOMEN — Palm Beach ----
  ["women", "outerwear", "Lněný kimono blejzr", "Len", "#d4816a", ["palm-beach"], "Linen kimono blazer", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, aqua", "Bavlna", "#7ab5c4", ["palm-beach"], "Blouse, aqua", "Cotton", ["spring", "summer"]],
  ["women", "top", "Top, korálový", "Bavlna", "#d4816a", ["palm-beach"], "Top, coral", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, písková", "Len", "#e0c99a", ["palm-beach"], "Midi skirt, sand", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Sandálky s pásky", "Useň", "#d4816a", ["palm-beach"], "Strappy sandals", "Leather", ["summer"]],
  ["women", "accessory", "Zlatý náhrdelník, jemný", "Kov", "#a8884f", ["palm-beach"], "Delicate gold necklace", "Metal", ["spring", "summer"]],

  // ---- MEN — Vienna Winter ----
  ["men", "outerwear", "Přiléhavý vlněný kabát, šedý", "Vlna", "#4a5568", ["vienna-winter"], "Fitted wool coat, grey", "Wool", ["autumn", "winter"]],
  ["men", "top", "Turtleneck, vínový", "Merino vlna", "#6b2737", ["vienna-winter"], "Turtleneck, wine", "Merino wool", ["autumn", "winter"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#f5f0e6", ["vienna-winter"], "Shirt, cream", "Cotton", ["spring", "autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, šedé", "Vlna", "#4a5568", ["vienna-winter"], "Wool trousers, grey", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Černé kožené oxfordky", "Useň", "#2a2724", ["vienna-winter"], "Black leather Oxfords", "Leather", ["autumn", "winter", "spring"]],
  ["men", "accessory", "Hedvábný kapesníček, bordeaux", "Hedvábí", "#6b2737", ["vienna-winter"], "Silk pocket square, bordeaux", "Silk", ["autumn", "winter", "spring"]],

  // ---- WOMEN — Vienna Winter ----
  ["women", "outerwear", "Vlněný kabát, stříbrná šedá", "Vlna", "#9aa5b4", ["vienna-winter"], "Wool coat, silver grey", "Wool", ["autumn", "winter"]],
  ["women", "top", "Svetr, vínový", "Kašmír", "#6b2737", ["vienna-winter"], "Sweater, wine", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#f5f0e6", ["vienna-winter"], "Silk blouse, cream", "Silk", ["spring", "autumn", "winter"]],
  ["women", "bottom", "Vlněná tužková sukně, šedá", "Vlna", "#4a5568", ["vienna-winter"], "Wool pencil skirt, grey", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kozačky na podpatku", "Useň", "#2a2724", ["vienna-winter"], "Leather heeled boots", "Leather", ["autumn", "winter"]],
  ["women", "accessory", "Hedvábný šátek, stříbrná", "Hedvábí", "#9aa5b4", ["vienna-winter"], "Silk scarf, silver", "Silk", ["autumn", "winter", "spring"]],

  // ---- MEN — Côte d'Azur ----
  ["men", "outerwear", "Vzdušný lněný blejzr, azure", "Len", "#4a8fbd", ["cote-dazur"], "Airy linen blazer, azure", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, bílá s modrými pruhy", "Bavlna", "#faf7f0", ["cote-dazur"], "White shirt with blue stripes", "Cotton", ["spring", "summer"]],
  ["men", "top", "Polo, levandulové", "Piké bavlna", "#9b8fbd", ["cote-dazur"], "Polo, lavender", "Piqué cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, písková", "Len", "#e0c99a", ["cote-dazur"], "Linen trousers, sand", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Espadrilky, modré", "Bavlna a juta", "#4a8fbd", ["cote-dazur"], "Espadrilles, blue", "Cotton and jute", ["summer"]],
  ["men", "accessory", "Zlatý řetízkový náramek", "Kov", "#a8884f", ["cote-dazur"], "Gold chain bracelet", "Metal", ["spring", "summer"]],

  // ---- WOMEN — Côte d'Azur ----
  ["women", "outerwear", "Lněné sako, azure", "Len", "#4a8fbd", ["cote-dazur"], "Linen jacket, azure", "Linen", ["spring", "summer"]],
  ["women", "top", "Top, levandulový", "Hedvábí", "#9b8fbd", ["cote-dazur"], "Top, lavender", "Silk", ["spring", "summer"]],
  ["women", "top", "Halenka, bílá", "Bavlna", "#faf7f0", ["cote-dazur"], "Blouse, white", "Cotton", ["spring", "summer"]],
  ["women", "bottom", "Culottes, písková", "Len", "#e0c99a", ["cote-dazur"], "Culottes, sand", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Bílé espadrilky s klínem", "Juta a plátno", "#faf7f0", ["cote-dazur"], "White wedge espadrilles", "Jute and canvas", ["summer"]],
  ["women", "accessory", "Zlaté náušnice", "Kov", "#a8884f", ["cote-dazur"], "Gold earrings", "Metal", ["spring", "summer"]],

  // ---- MEN — Oxbridge ----
  ["men", "outerwear", "Sako, oxfordská modrá", "Vlna", "#1e3a5f", ["oxbridge"], "Blazer, Oxford blue", "Wool", ["spring", "autumn"]],
  ["men", "top", "Košile s tenkými proužky", "Bavlna", "#ece3d2", ["oxbridge"], "Thin-striped shirt", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Svetr, maroon", "Merino vlna", "#7a2535", ["oxbridge"], "Sweater, maroon", "Merino wool", ["autumn", "winter", "spring"]],
  ["men", "bottom", "Manšestrové kalhoty, modré", "Manšestr", "#1e3a5f", ["oxbridge"], "Corduroy trousers, blue", "Corduroy", ["autumn", "winter"]],
  ["men", "shoes", "Kožené loafery s třásněmi", "Useň", "#b8963e", ["oxbridge"], "Tassel leather loafers", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Proužkovaná kravata, oxford", "Hedvábí", "#7a2535", ["oxbridge"], "Striped tie, Oxford", "Silk", ["spring", "autumn", "winter"]],

  // ---- WOMEN — Oxbridge ----
  ["women", "outerwear", "Kabát, oxfordská modrá", "Vlna", "#1e3a5f", ["oxbridge"], "Coat, Oxford blue", "Wool", ["autumn", "winter"]],
  ["women", "top", "Košile, smetanová", "Bavlna", "#ece3d2", ["oxbridge"], "Shirt, cream", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "top", "Svetr, maroon", "Merino vlna", "#7a2535", ["oxbridge"], "Sweater, maroon", "Merino wool", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Sukně, tweedová modrá", "Tweed", "#1e3a5f", ["oxbridge"], "Tweed blue skirt", "Tweed", ["autumn", "winter"]],
  ["women", "shoes", "Kožené loaferky", "Useň", "#b8963e", ["oxbridge"], "Leather loafers", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Brož s kamenem", "Kov a kámen", "#7a2535", ["oxbridge"], "Stone brooch", "Metal and stone", ["spring", "autumn", "winter"]],

  // ---- MEN — Tuscan Villa ----
  ["men", "outerwear", "Lněné sako, terracotta", "Len", "#c97a5a", ["tuscan-villa"], "Linen jacket, terracotta", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, olivová", "Len", "#6b7c3f", ["tuscan-villa"], "Shirt, olive", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo, slonovinové", "Bavlna", "#faf7f0", ["tuscan-villa"], "Polo, ivory", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, písková", "Len", "#e8d5a0", ["tuscan-villa"], "Linen trousers, sand", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Kožené mokasíny, russet", "Useň", "#8b4a2e", ["tuscan-villa"], "Leather loafers, russet", "Leather", ["spring", "summer", "autumn"]],
  ["men", "accessory", "Kožený pásek, terracotta", "Useň", "#c97a5a", ["tuscan-villa"], "Leather belt, terracotta", "Leather", ["spring", "summer"]],

  // ---- WOMEN — Tuscan Villa ----
  ["women", "outerwear", "Lněné sako, olivová", "Len", "#6b7c3f", ["tuscan-villa"], "Linen jacket, olive", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, terracotta", "Hedvábí", "#c97a5a", ["tuscan-villa"], "Blouse, terracotta", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, slonovinový", "Bavlna", "#faf7f0", ["tuscan-villa"], "Top, ivory", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, písková", "Len", "#e8d5a0", ["tuscan-villa"], "Midi skirt, sand", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené sandálky, russet", "Useň", "#8b4a2e", ["tuscan-villa"], "Leather sandals, russet", "Leather", ["summer"]],
  ["women", "accessory", "Keramický náhrdelník", "Keramika", "#c97a5a", ["tuscan-villa"], "Ceramic necklace", "Ceramic", ["spring", "summer"]],

  // ---- MEN — Connecticut Autumn ----
  ["men", "outerwear", "Kabát, podzimní rezavá", "Vlna", "#b85c2e", ["connecticut-autumn"], "Overcoat, autumn rust", "Wool", ["autumn", "winter"]],
  ["men", "top", "Svetr s copánky, javorová", "Vlna", "#c87941", ["connecticut-autumn"], "Cable-knit sweater, maple", "Wool", ["autumn", "winter", "spring"]],
  ["men", "top", "Flanelová košile, russet", "Flanel", "#b85c2e", ["connecticut-autumn"], "Flannel shirt, russet", "Flannel", ["autumn", "winter"]],
  ["men", "bottom", "Vlněné chino, tan", "Vlna", "#c9a679", ["connecticut-autumn"], "Wool chinos, tan", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené boty, lesní", "Useň", "#2e3d2f", ["connecticut-autumn"], "Leather boots, forest", "Leather", ["autumn", "winter"]],
  ["men", "accessory", "Kožené rukavice, javorová", "Useň", "#c87941", ["connecticut-autumn"], "Leather gloves, maple", "Leather", ["autumn", "winter"]],

  // ---- WOMEN — Connecticut Autumn ----
  ["women", "outerwear", "Kabát, rezavý", "Vlna", "#b85c2e", ["connecticut-autumn"], "Coat, rust", "Wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr, javorová", "Kašmír", "#c87941", ["connecticut-autumn"], "Cashmere sweater, maple", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Košile, krémová", "Bavlna", "#f5f0e6", ["connecticut-autumn"], "Shirt, cream", "Cotton", ["spring", "autumn"]],
  ["women", "bottom", "Vlněná sukně, podzimní", "Vlna", "#c87941", ["connecticut-autumn"], "Wool skirt, autumn", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kozačky, lesní", "Useň", "#2e3d2f", ["connecticut-autumn"], "Leather boots, forest", "Leather", ["autumn", "winter"]],
  ["women", "accessory", "Vlněný šátek, lesní zelená", "Vlna", "#2e3d2f", ["connecticut-autumn"], "Wool scarf, forest green", "Wool", ["autumn", "winter", "spring"]],

  // ---- MEN — Cape Cod Grey ----
  ["men", "outerwear", "Vlněné sako, břidlicová", "Vlna", "#6b7280", ["cape-cod-grey"], "Wool blazer, slate", "Wool", ["spring", "autumn"]],
  ["men", "top", "Košile, bílá", "Bavlna", "#faf7f0", ["cape-cod-grey"], "Shirt, white", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Svetr, plaveň", "Bavlna", "#a09078", ["cape-cod-grey"], "Sweater, driftwood", "Cotton", ["spring", "autumn", "winter"]],
  ["men", "bottom", "Plátěné kalhoty, břidlicová", "Len", "#6b7280", ["cape-cod-grey"], "Linen trousers, slate", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Kožené tenisky, bílé", "Useň", "#faf7f0", ["cape-cod-grey"], "White leather sneakers", "Leather", ["spring", "summer"]],
  ["men", "accessory", "Hodinky s koženým řemínkem", "Useň a kov", "#a09078", ["cape-cod-grey"], "Watch with leather strap", "Leather and metal", ["spring", "summer", "autumn", "winter"]],

  // ---- WOMEN — Cape Cod Grey ----
  ["women", "outerwear", "Vlněný kabát, mlhová", "Vlna", "#d1d5db", ["cape-cod-grey"], "Wool coat, fog", "Wool", ["spring", "autumn", "winter"]],
  ["women", "top", "Halenka, bílá", "Bavlna", "#faf7f0", ["cape-cod-grey"], "Blouse, white", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "top", "Svetr, plaveň", "Kašmír", "#a09078", ["cape-cod-grey"], "Sweater, driftwood", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Culottes, břidlicová", "Len", "#6b7280", ["cape-cod-grey"], "Culottes, slate", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Bílé kožené tenisky", "Useň", "#faf7f0", ["cape-cod-grey"], "White leather sneakers", "Leather", ["spring", "summer"]],
  ["women", "accessory", "Náhrdelník, říční perly", "Perly", "#d1d5db", ["cape-cod-grey"], "River pearl necklace", "Pearls", ["spring", "summer", "autumn", "winter"]],

  // ── ST. MORITZ ──────────────────────────────────────────────────────────
  // ---- MEN — St. Moritz ----
  ["men", "outerwear", "Lyžařský kabát, alpská modrá", "Technická vlna", "#2b4a7a", ["st-moritz"], "Ski coat, alpine blue", "Technical wool", ["winter"]],
  ["men", "top", "Kašmírový svetr, smetanový", "Kašmír", "#f7f9fc", ["st-moritz"], "Cashmere sweater, cream", "Cashmere", ["autumn", "winter", "spring"]],
  ["men", "top", "Turtleneck, champagne", "Merino vlna", "#d4b896", ["st-moritz"], "Turtleneck, champagne", "Merino wool", ["autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["st-moritz"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené lyžařské boty", "Useň", "#b07840", ["st-moritz"], "Leather ski boots", "Leather", ["winter"]],
  ["men", "accessory", "Zlaté hodinky", "Kov", "#d4b896", ["st-moritz"], "Gold watch", "Metal", ["spring", "summer", "autumn", "winter"]],
  // ---- WOMEN — St. Moritz ----
  ["women", "outerwear", "Kožešinový kabát, krémový", "Vlna a kožešina", "#f7f9fc", ["st-moritz"], "Fur-trim coat, cream", "Wool and fur", ["winter"]],
  ["women", "top", "Kašmírový svetr, alpská modrá", "Kašmír", "#2b4a7a", ["st-moritz"], "Cashmere sweater, alpine blue", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Hedvábný top, champagne", "Hedvábí", "#d4b896", ["st-moritz"], "Silk top, champagne", "Silk", ["spring", "summer", "autumn"]],
  ["women", "bottom", "Vlněné kalhoty, tmavé", "Vlna", "#2a2724", ["st-moritz"], "Wool trousers, dark", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kotníkové boty, caramel", "Useň", "#b07840", ["st-moritz"], "Leather ankle boots, caramel", "Leather", ["autumn", "winter"]],
  ["women", "accessory", "Zlaté náušnice, kulaté", "Kov", "#d4b896", ["st-moritz"], "Round gold earrings", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ── PORTOFINO ───────────────────────────────────────────────────────────
  // ---- MEN — Portofino ----
  ["men", "outerwear", "Lněné sako, okrové", "Len", "#d4a843", ["portofino"], "Linen jacket, ochre", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile s krátkým rukávem, tyrkys", "Len", "#3a9f9f", ["portofino"], "Short-sleeve shirt, turquoise", "Linen", ["summer"]],
  ["men", "top", "Polo tričko, korálové", "Bavlna", "#d4735a", ["portofino"], "Polo shirt, coral", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné šortky, slonovinové", "Len", "#faf7f0", ["portofino"], "Linen shorts, ivory", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, námořnická", "Useň", "#1b2a3d", ["portofino"], "Leather sandals, navy", "Leather", ["summer"]],
  ["men", "accessory", "Zlatý řetízkový náramek", "Kov", "#d4a843", ["portofino"], "Gold chain bracelet", "Metal", ["spring", "summer"]],
  // ---- WOMEN — Portofino ----
  ["women", "outerwear", "Kimono blejzr, tyrkys", "Len", "#3a9f9f", ["portofino"], "Kimono blazer, turquoise", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, korálová", "Hedvábí", "#d4735a", ["portofino"], "Blouse, coral", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, okrový", "Bavlna", "#d4a843", ["portofino"], "Top, ochre", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, slonovinová", "Len", "#faf7f0", ["portofino"], "Midi skirt, ivory", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Zlaté sandálky", "Useň a kov", "#d4a843", ["portofino"], "Gold sandals", "Leather and metal", ["summer"]],
  ["women", "accessory", "Zlatý náhrdelník s přívěskem", "Kov", "#d4a843", ["portofino"], "Gold pendant necklace", "Metal", ["spring", "summer"]],

  // ── LONDON CLUB ─────────────────────────────────────────────────────────
  // ---- MEN — London Club ----
  ["men", "outerwear", "Tweedové sako, club green", "Tweed", "#1e3d2a", ["london-club"], "Tweed jacket, club green", "Tweed", ["autumn", "winter"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#f0ead8", ["london-club"], "Shirt, cream", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Kašmírový svetr, amber", "Kašmír", "#c8843a", ["london-club"], "Cashmere sweater, amber", "Cashmere", ["autumn", "winter", "spring"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["london-club"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené oxfordky, hnědé", "Useň", "#5c2e1a", ["london-club"], "Brown leather Oxfords", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Hedvábný kapesník, mahagon", "Hedvábí", "#5c2e1a", ["london-club"], "Silk pocket square, mahogany", "Silk", ["spring", "autumn", "winter"]],
  // ---- WOMEN — London Club ----
  ["women", "outerwear", "Vlněný kabát, tmavě zelený", "Vlna", "#1e3d2a", ["london-club"], "Wool coat, dark green", "Wool", ["autumn", "winter"]],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#f0ead8", ["london-club"], "Silk blouse, cream", "Silk", ["spring", "autumn"]],
  ["women", "top", "Kašmírový svetr, amber", "Kašmír", "#c8843a", ["london-club"], "Cashmere sweater, amber", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Vlněná sukně, tmavá", "Vlna", "#2a2724", ["london-club"], "Wool skirt, dark", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené loaferky, hnědé", "Useň", "#5c2e1a", ["london-club"], "Brown leather loafers", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Brož s achátem", "Kov a kámen", "#c8843a", ["london-club"], "Agate brooch", "Metal and stone", ["spring", "autumn", "winter"]],

  // ── AMALFI COAST ────────────────────────────────────────────────────────
  // ---- MEN — Amalfi Coast ----
  ["men", "outerwear", "Vzdušný lněný blejzr, bílý", "Len", "#fefefe", ["amalfi-coast"], "Airy linen blazer, white", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, citrónová", "Len", "#e8c84a", ["amalfi-coast"], "Shirt, lemon", "Linen", ["summer"]],
  ["men", "top", "Polo, azurové", "Bavlna", "#3a7abf", ["amalfi-coast"], "Polo, azure", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, bílé", "Len", "#fefefe", ["amalfi-coast"], "Linen trousers, white", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, olivové", "Useň", "#6b7c3f", ["amalfi-coast"], "Leather sandals, olive", "Leather", ["summer"]],
  ["men", "accessory", "Sluneční brýle, zlaté obroučky", "Kov a sklo", "#e8c84a", ["amalfi-coast"], "Sunglasses, gold frames", "Metal and glass", ["spring", "summer"]],
  // ---- WOMEN — Amalfi Coast ----
  ["women", "outerwear", "Lněné sako, azurové", "Len", "#3a7abf", ["amalfi-coast"], "Linen jacket, azure", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, citrónová", "Hedvábí", "#e8c84a", ["amalfi-coast"], "Blouse, lemon", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, bílý", "Bavlna", "#fefefe", ["amalfi-coast"], "Top, white", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, terracotta", "Len", "#c97a5a", ["amalfi-coast"], "Maxi skirt, terracotta", "Linen", ["summer"]],
  ["women", "shoes", "Kožené sandálky s pásky, zlaté", "Useň a kov", "#e8c84a", ["amalfi-coast"], "Strappy leather sandals, gold", "Leather and metal", ["summer"]],
  ["women", "accessory", "Zlaté náušnice, velké kruhy", "Kov", "#e8c84a", ["amalfi-coast"], "Large gold hoop earrings", "Metal", ["spring", "summer"]],

  // ── NORMANDY MANOR ──────────────────────────────────────────────────────
  // ---- MEN — Normandy Manor ----
  ["men", "outerwear", "Vlněný kabát, břidlicová", "Vlna", "#5a6a7a", ["normandy-manor"], "Wool coat, slate", "Wool", ["autumn", "winter"]],
  ["men", "top", "Svetr s V-výstřihem, zelená", "Merino vlna", "#5a7a45", ["normandy-manor"], "V-neck sweater, green", "Merino wool", ["spring", "autumn", "winter"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#ede8da", ["normandy-manor"], "Shirt, cream", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "bottom", "Kalhoty, slate", "Vlna", "#5a6a7a", ["normandy-manor"], "Trousers, slate", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené brogues, hnědé", "Useň", "#9a8e7c", ["normandy-manor"], "Brown leather brogues", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Vlněný šátek, zelený", "Vlna", "#5a7a45", ["normandy-manor"], "Wool scarf, green", "Wool", ["autumn", "winter", "spring"]],
  // ---- WOMEN — Normandy Manor ----
  ["women", "outerwear", "Vlněný kabát, krémový", "Vlna", "#ede8da", ["normandy-manor"], "Wool coat, cream", "Wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr, šalvěj", "Kašmír", "#5a7a45", ["normandy-manor"], "Cashmere sweater, sage", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Košile, krémová", "Bavlna", "#ede8da", ["normandy-manor"], "Shirt, cream", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "bottom", "Sukně midi, stone", "Vlna", "#9a8e7c", ["normandy-manor"], "Midi skirt, stone", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kotníkové boty", "Useň", "#5a6a7a", ["normandy-manor"], "Leather ankle boots", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Hedvábný šátek, zelený", "Hedvábí", "#5a7a45", ["normandy-manor"], "Silk scarf, green", "Silk", ["spring", "autumn", "winter"]],

  // ── GENEVA LAKE ─────────────────────────────────────────────────────────
  // ---- MEN — Geneva Lake ----
  ["men", "outerwear", "Přiléhavý kabát, platinový", "Vlna", "#c8cfd8", ["geneva-lake"], "Fitted coat, platinum", "Wool", ["autumn", "winter"]],
  ["men", "top", "Turtleneck, ledová modrá", "Merino vlna", "#b8d4e8", ["geneva-lake"], "Turtleneck, ice blue", "Merino wool", ["autumn", "winter"]],
  ["men", "top", "Košile, bílá", "Bavlna", "#fefefe", ["geneva-lake"], "Shirt, white", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "bottom", "Vlněné kalhoty, tmavá", "Vlna", "#1b2a3d", ["geneva-lake"], "Wool trousers, dark", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené oxfordky, tmavé", "Useň", "#1b2a3d", ["geneva-lake"], "Dark leather Oxfords", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Hodinky, ocelová", "Ocel a kov", "#c8cfd8", ["geneva-lake"], "Watch, steel", "Steel and metal", ["spring", "summer", "autumn", "winter"]],
  // ---- WOMEN — Geneva Lake ----
  ["women", "outerwear", "Vlněný kabát, bílý", "Vlna", "#fefefe", ["geneva-lake"], "Wool coat, white", "Wool", ["autumn", "winter"]],
  ["women", "top", "Hedvábná halenka, ledová", "Hedvábí", "#b8d4e8", ["geneva-lake"], "Silk blouse, ice", "Silk", ["spring", "summer", "autumn"]],
  ["women", "top", "Kašmírový svetr, platinový", "Kašmír", "#c8cfd8", ["geneva-lake"], "Cashmere sweater, platinum", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Vlněné kalhoty, tmavé", "Vlna", "#1b2a3d", ["geneva-lake"], "Wool trousers, dark", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené lodičky, camel", "Useň", "#b08d57", ["geneva-lake"], "Leather pumps, camel", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Perlový náhrdelník, sladkovodní", "Perly", "#c8cfd8", ["geneva-lake"], "Freshwater pearl necklace", "Pearls", ["spring", "summer", "autumn", "winter"]],

  // ── NANTUCKET GREY ──────────────────────────────────────────────────────
  // ---- MEN — Nantucket Grey ----
  ["men", "outerwear", "Vlněné sako, břidlicová", "Vlna", "#8a8e92", ["nantucket-grey"], "Wool blazer, shingle", "Wool", ["spring", "autumn"]],
  ["men", "top", "Bílá košile", "Bavlna", "#fefefe", ["nantucket-grey"], "White shirt", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "top", "Svetr, modrošedý", "Bavlna", "#7a8fad", ["nantucket-grey"], "Sweater, blue-grey", "Cotton", ["spring", "autumn", "winter"]],
  ["men", "bottom", "Lněné kalhoty, bílé", "Len", "#fefefe", ["nantucket-grey"], "Linen trousers, white", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Boat shoes, plaveň", "Useň", "#9a8870", ["nantucket-grey"], "Boat shoes, driftwood", "Leather", ["spring", "summer"]],
  ["men", "accessory", "Hedvábná kravata, modrošedá", "Hedvábí", "#7a8fad", ["nantucket-grey"], "Silk tie, blue-grey", "Silk", ["spring", "autumn", "winter"]],
  // ---- WOMEN — Nantucket Grey ----
  ["women", "outerwear", "Kabát, mlhová šedá", "Vlna", "#8a8e92", ["nantucket-grey"], "Coat, fog grey", "Wool", ["spring", "autumn", "winter"]],
  ["women", "top", "Halenka, bílá", "Bavlna", "#fefefe", ["nantucket-grey"], "Blouse, white", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "top", "Kašmírový svetr, modrošedý", "Kašmír", "#7a8fad", ["nantucket-grey"], "Cashmere sweater, blue-grey", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "bottom", "Culottes, bílé", "Len", "#fefefe", ["nantucket-grey"], "Culottes, white", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené tenisky, bílé", "Useň", "#fefefe", ["nantucket-grey"], "White leather sneakers", "Leather", ["spring", "summer"]],
  ["women", "accessory", "Perlový náramek", "Perly", "#8a8e92", ["nantucket-grey"], "Pearl bracelet", "Pearls", ["spring", "summer", "autumn", "winter"]],

  // ── MARRAKECH DUSK ──────────────────────────────────────────────────────
  // ---- MEN — Marrakech Dusk ----
  ["men", "outerwear", "Lněný blazer, šafrán", "Len", "#d4882a", ["marrakech-dusk"], "Linen blazer, saffron", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, slonovinová", "Len", "#f5edd8", ["marrakech-dusk"], "Shirt, ivory", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo, terracotta", "Bavlna", "#b85a3a", ["marrakech-dusk"], "Polo, terracotta", "Cotton", ["spring", "summer", "autumn"]],
  ["men", "bottom", "Plátěné kalhoty, slonovinová", "Len", "#f5edd8", ["marrakech-dusk"], "Linen trousers, ivory", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Kožené moccasiny, espresso", "Useň", "#2a1f1a", ["marrakech-dusk"], "Leather moccasins, espresso", "Leather", ["spring", "summer", "autumn"]],
  ["men", "accessory", "Zlatý prstýnek", "Kov", "#c8963a", ["marrakech-dusk"], "Gold ring", "Metal", ["spring", "summer", "autumn", "winter"]],
  // ---- WOMEN — Marrakech Dusk ----
  ["women", "outerwear", "Kimono blejzr, zlaté", "Len a hedvábí", "#c8963a", ["marrakech-dusk"], "Kimono blazer, gold", "Linen and silk", ["spring", "summer"]],
  ["women", "top", "Halenka, šafrán", "Hedvábí", "#d4882a", ["marrakech-dusk"], "Blouse, saffron", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, slonovinový", "Bavlna", "#f5edd8", ["marrakech-dusk"], "Top, ivory", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, terracotta", "Len", "#b85a3a", ["marrakech-dusk"], "Maxi skirt, terracotta", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené sandálky, zlaté", "Useň a kov", "#c8963a", ["marrakech-dusk"], "Leather sandals, gold", "Leather and metal", ["summer"]],
  ["women", "accessory", "Zlaté náušnice, kapky", "Kov", "#c8963a", ["marrakech-dusk"], "Gold drop earrings", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ── BIARRITZ BLUE ───────────────────────────────────────────────────────
  // ---- MEN — Biarritz Blue ----
  ["men", "outerwear", "Vlněné sako, námořnická", "Vlna", "#1b2a3d", ["biarritz-blue"], "Wool blazer, navy", "Wool", ["spring", "autumn"]],
  ["men", "top", "Pruhované tričko, červenomodré", "Bavlna", "#fefefe", ["biarritz-blue"], "Striped top, red and blue", "Cotton", ["spring", "summer"]],
  ["men", "top", "Polo tričko, bílé", "Bavlna", "#fefefe", ["biarritz-blue"], "White polo shirt", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Bílé chino kalhoty", "Bavlna", "#fefefe", ["biarritz-blue"], "White chino trousers", "Cotton", ["spring", "summer"]],
  ["men", "shoes", "Espadrilky, námořnická", "Bavlna a juta", "#1b2a3d", ["biarritz-blue"], "Espadrilles, navy", "Cotton and jute", ["summer"]],
  ["men", "accessory", "Kožený pásek, camel", "Useň", "#b08d57", ["biarritz-blue"], "Leather belt, camel", "Leather", ["spring", "summer", "autumn"]],
  // ---- WOMEN — Biarritz Blue ----
  ["women", "outerwear", "Dvouřadý kabát, námořnická", "Vlna", "#1b2a3d", ["biarritz-blue"], "Double-breasted coat, navy", "Wool", ["spring", "autumn"]],
  ["women", "top", "Pruhovaná košile, červenomodrá", "Bavlna", "#a82832", ["biarritz-blue"], "Striped shirt, red and blue", "Cotton", ["spring", "summer"]],
  ["women", "top", "Top, bílý", "Bavlna", "#fefefe", ["biarritz-blue"], "Top, white", "Cotton", ["summer"]],
  ["women", "bottom", "Culottes, námořnická", "Len", "#1b2a3d", ["biarritz-blue"], "Culottes, navy", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené mokasíny, camel", "Useň", "#b08d57", ["biarritz-blue"], "Leather loafers, camel", "Leather", ["spring", "autumn"]],
  ["women", "accessory", "Hedvábný šátek, námořnická", "Hedvábí", "#1b2a3d", ["biarritz-blue"], "Silk scarf, navy", "Silk", ["spring", "summer", "autumn"]],

  // ── POSITANO SUNSET ─────────────────────────────────────────────────────
  // ---- MEN — Positano Sunset ----
  ["men", "outerwear", "Lněné sako, kobaltové", "Len", "#2a5aad", ["positano-sunset"], "Linen jacket, cobalt", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, starorůžová", "Len", "#d4927a", ["positano-sunset"], "Shirt, dusty rose", "Linen", ["summer"]],
  ["men", "top", "Polo, slonovinové", "Bavlna", "#faf7f0", ["positano-sunset"], "Polo, ivory", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, slonovinové", "Len", "#faf7f0", ["positano-sunset"], "Linen trousers, ivory", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, olivové", "Useň", "#6b7c3f", ["positano-sunset"], "Leather sandals, olive", "Leather", ["summer"]],
  ["men", "accessory", "Zlatý náramek", "Kov", "#c8a040", ["positano-sunset"], "Gold bracelet", "Metal", ["spring", "summer"]],
  // ---- WOMEN — Positano Sunset ----
  ["women", "outerwear", "Lněné sako, kobaltové", "Len", "#2a5aad", ["positano-sunset"], "Linen jacket, cobalt", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, starorůžová", "Hedvábí", "#d4927a", ["positano-sunset"], "Blouse, dusty rose", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, slonovinový", "Bavlna", "#faf7f0", ["positano-sunset"], "Top, ivory", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, kobaltová", "Len", "#2a5aad", ["positano-sunset"], "Maxi skirt, cobalt", "Linen", ["summer"]],
  ["women", "shoes", "Zlaté sandálky, páskové", "Useň a kov", "#c8a040", ["positano-sunset"], "Gold strappy sandals", "Leather and metal", ["summer"]],
  ["women", "accessory", "Zlaté náušnice, slunce", "Kov", "#c8a040", ["positano-sunset"], "Gold sun earrings", "Metal", ["spring", "summer"]],

  // ── NEWPORT PREP ────────────────────────────────────────────────────────
  // ---- MEN — Newport Prep ----
  ["men", "outerwear", "Dvouřadé sako, námořnická", "Vlna", "#1b2a3d", ["newport-prep"], "Double-breasted blazer, navy", "Wool", ["spring", "autumn"]],
  ["men", "top", "Košile v proužku, červenobílá", "Bavlna", "#fefefe", ["newport-prep"], "Striped shirt, red and white", "Cotton", ["spring", "summer"]],
  ["men", "top", "Polo, khaki", "Bavlna", "#c9a679", ["newport-prep"], "Polo, khaki", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Bílé plátěné kalhoty", "Len", "#fefefe", ["newport-prep"], "White linen trousers", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Boat shoes, khaki", "Useň", "#c9a679", ["newport-prep"], "Boat shoes, khaki", "Leather", ["spring", "summer"]],
  ["men", "accessory", "Pruhovaná kravata, námořnická", "Hedvábí", "#a82828", ["newport-prep"], "Striped tie, navy and red", "Silk", ["spring", "autumn", "winter"]],
  // ---- WOMEN — Newport Prep ----
  ["women", "outerwear", "Blejzr, námořnická", "Vlna", "#1b2a3d", ["newport-prep"], "Blazer, navy", "Wool", ["spring", "autumn"]],
  ["women", "top", "Pruhované tričko, červenobílé", "Bavlna", "#a82828", ["newport-prep"], "Striped top, red and white", "Cotton", ["spring", "summer"]],
  ["women", "top", "Bílá košile", "Bavlna", "#fefefe", ["newport-prep"], "White shirt", "Cotton", ["spring", "summer", "autumn"]],
  ["women", "bottom", "Plisovaná sukně, zelená", "Vlna", "#3a6e3a", ["newport-prep"], "Pleated skirt, green", "Wool", ["spring", "autumn"]],
  ["women", "shoes", "Kožené loaferky, khaki", "Useň", "#c9a679", ["newport-prep"], "Leather loafers, khaki", "Leather", ["spring", "autumn"]],
  ["women", "accessory", "Zlatá čelenka", "Kov", "#c9a679", ["newport-prep"], "Gold headband", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ── LAKE COMO ───────────────────────────────────────────────────────────
  // ---- MEN — Lake Como ----
  ["men", "outerwear", "Lněné sako, jezerní zelená", "Len", "#3a7a6e", ["lake-como"], "Linen jacket, lake green", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, azurová", "Len", "#4a8fbd", ["lake-como"], "Shirt, azure", "Linen", ["summer"]],
  ["men", "top", "Polo, slonovinové", "Bavlna", "#faf7f0", ["lake-como"], "Polo, ivory", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, slonovinové", "Len", "#faf7f0", ["lake-como"], "Linen trousers, ivory", "Linen", ["summer"]],
  ["men", "shoes", "Kožené mokasíny, caramel", "Useň", "#b07840", ["lake-como"], "Leather loafers, caramel", "Leather", ["spring", "summer", "autumn"]],
  ["men", "accessory", "Zlatý náramek, jezerní", "Kov", "#b07840", ["lake-como"], "Gold bracelet, lakeside", "Metal", ["spring", "summer"]],
  // ---- WOMEN — Lake Como ----
  ["women", "outerwear", "Lněné sako, azurové", "Len", "#4a8fbd", ["lake-como"], "Linen jacket, azure", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, blush", "Hedvábí", "#d4a090", ["lake-como"], "Blouse, blush", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, slonovinový", "Bavlna", "#faf7f0", ["lake-como"], "Top, ivory", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, jezerní zelená", "Len", "#3a7a6e", ["lake-como"], "Midi skirt, lake green", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Kožené sandálky, caramel", "Useň", "#b07840", ["lake-como"], "Leather sandals, caramel", "Leather", ["summer"]],
  ["women", "accessory", "Náhrdelník, zlatý přívěsek", "Kov", "#b07840", ["lake-como"], "Gold pendant necklace", "Metal", ["spring", "summer"]],

  // ── BERMUDA BLUSH ───────────────────────────────────────────────────────
  // ---- MEN — Bermuda Blush ----
  ["men", "outerwear", "Lněné sako, šalvěj", "Len", "#7a9a7a", ["bermuda-blush"], "Linen jacket, sage", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo tričko, korálové", "Bavlna", "#d4816a", ["bermuda-blush"], "Polo shirt, coral", "Cotton", ["spring", "summer"]],
  ["men", "top", "Košile, bílá", "Len", "#fefefe", ["bermuda-blush"], "Shirt, white", "Linen", ["spring", "summer"]],
  ["men", "bottom", "Plátěné šortky, khaki", "Len", "#c9a679", ["bermuda-blush"], "Linen shorts, khaki", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, bílé", "Useň", "#fefefe", ["bermuda-blush"], "White leather sandals", "Leather", ["summer"]],
  ["men", "accessory", "Pletený pásek, khaki", "Bavlna", "#c9a679", ["bermuda-blush"], "Woven belt, khaki", "Cotton", ["spring", "summer"]],
  // ---- WOMEN — Bermuda Blush ----
  ["women", "outerwear", "Lněný kimono blejzr, šalvěj", "Len", "#7a9a7a", ["bermuda-blush"], "Linen kimono blazer, sage", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, blush", "Bavlna", "#e0a898", ["bermuda-blush"], "Blouse, blush", "Cotton", ["spring", "summer"]],
  ["women", "top", "Top, korálový", "Bavlna", "#d4816a", ["bermuda-blush"], "Top, coral", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, bílá", "Len", "#fefefe", ["bermuda-blush"], "Maxi skirt, white", "Linen", ["summer"]],
  ["women", "shoes", "Bílé sandálky", "Useň", "#fefefe", ["bermuda-blush"], "White sandals", "Leather", ["summer"]],
  ["women", "accessory", "Korálový náhrdelník, blush", "Korál", "#e0a898", ["bermuda-blush"], "Coral necklace, blush", "Coral", ["spring", "summer"]],

  // ── ASPEN LODGE ─────────────────────────────────────────────────────────
  // ---- MEN — Aspen Lodge ----
  ["men", "outerwear", "Horský kabát, tabákový", "Vlna", "#7a4e2a", ["aspen-lodge"], "Mountain coat, tobacco", "Wool", ["autumn", "winter"]],
  ["men", "top", "Kašmírový svetr s copánky, smetanový", "Kašmír", "#f0e8d8", ["aspen-lodge"], "Cable-knit cashmere sweater, cream", "Cashmere", ["autumn", "winter"]],
  ["men", "top", "Flanelová košile, borovicová", "Flanel", "#2e4a30", ["aspen-lodge"], "Flannel shirt, pine", "Flannel", ["autumn", "winter"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["aspen-lodge"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené semišové boty, tabákové", "Semiš", "#7a4e2a", ["aspen-lodge"], "Suede boots, tobacco", "Suede", ["autumn", "winter"]],
  ["men", "accessory", "Kašmírová šála, caramel", "Kašmír", "#b07840", ["aspen-lodge"], "Cashmere scarf, caramel", "Cashmere", ["autumn", "winter"]],
  // ---- WOMEN — Aspen Lodge ----
  ["women", "outerwear", "Kožešinový kabát, krémový", "Vlna a kožešina", "#f0e8d8", ["aspen-lodge"], "Shearling coat, cream", "Wool and shearling", ["winter"]],
  ["women", "top", "Kašmírový svetr, tabákový", "Kašmír", "#7a4e2a", ["aspen-lodge"], "Cashmere sweater, tobacco", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Rolák, caramel", "Merino vlna", "#b07840", ["aspen-lodge"], "Turtleneck, caramel", "Merino wool", ["autumn", "winter"]],
  ["women", "bottom", "Vlněné kalhoty, borovicová", "Vlna", "#2e4a30", ["aspen-lodge"], "Wool trousers, pine", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené sněhové boty, hnědé", "Useň", "#7a4e2a", ["aspen-lodge"], "Leather snow boots, brown", "Leather", ["winter"]],
  ["women", "accessory", "Kašmírová čelenka, caramel", "Kašmír", "#b07840", ["aspen-lodge"], "Cashmere headband, caramel", "Cashmere", ["autumn", "winter"]],

  // ── KYOTO AUTUMN ────────────────────────────────────────────────────────
  // ---- MEN — Kyoto Autumn ----
  ["men", "outerwear", "Vlněné sako, indigové", "Vlna", "#2a3a6a", ["kyoto-autumn"], "Wool jacket, indigo", "Wool", ["autumn", "winter"]],
  ["men", "top", "Svetr, zlatý", "Merino vlna", "#c8a040", ["kyoto-autumn"], "Sweater, gold", "Merino wool", ["autumn", "winter", "spring"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#f5edd8", ["kyoto-autumn"], "Shirt, cream", "Cotton", ["spring", "autumn"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["kyoto-autumn"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené boty, tmavé", "Useň", "#2a3a6a", ["kyoto-autumn"], "Leather boots, dark", "Leather", ["autumn", "winter"]],
  ["men", "accessory", "Hedvábná kravata, javorová červená", "Hedvábí", "#c84a28", ["kyoto-autumn"], "Silk tie, maple red", "Silk", ["spring", "autumn", "winter"]],
  // ---- WOMEN — Kyoto Autumn ----
  ["women", "outerwear", "Vlněný kabát, indigový", "Vlna", "#2a3a6a", ["kyoto-autumn"], "Wool coat, indigo", "Wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr, javorová červená", "Kašmír", "#c84a28", ["kyoto-autumn"], "Cashmere sweater, maple red", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Halenka, zlatá", "Hedvábí", "#c8a040", ["kyoto-autumn"], "Blouse, gold", "Silk", ["spring", "autumn"]],
  ["women", "bottom", "Tužková sukně, indigová", "Vlna", "#2a3a6a", ["kyoto-autumn"], "Pencil skirt, indigo", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené boty s podpatkem, tmavé", "Useň", "#2a2724", ["kyoto-autumn"], "Leather heeled boots, dark", "Leather", ["autumn", "winter"]],
  ["women", "accessory", "Zlaté náušnice, jehlice", "Kov", "#c8a040", ["kyoto-autumn"], "Gold pin earrings", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ── ANTIBES GARDEN ──────────────────────────────────────────────────────
  // ---- MEN — Antibes Garden ----
  ["men", "outerwear", "Lněné sako, šalvěj", "Len", "#7a9a7a", ["antibes-garden"], "Linen jacket, sage", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, levandulová", "Len", "#b0a4c8", ["antibes-garden"], "Shirt, lavender", "Linen", ["spring", "summer"]],
  ["men", "top", "Polo, slonovinové", "Bavlna", "#faf7f0", ["antibes-garden"], "Polo, ivory", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, stone", "Len", "#9a8e7c", ["antibes-garden"], "Linen trousers, stone", "Linen", ["spring", "summer"]],
  ["men", "shoes", "Espadrilky, šalvěj", "Bavlna a juta", "#7a9a7a", ["antibes-garden"], "Espadrilles, sage", "Cotton and jute", ["summer"]],
  ["men", "accessory", "Levandulový kapesník", "Hedvábí", "#b0a4c8", ["antibes-garden"], "Lavender pocket square", "Silk", ["spring", "summer"]],
  // ---- WOMEN — Antibes Garden ----
  ["women", "outerwear", "Lněné sako, levandulové", "Len", "#8a7aad", ["antibes-garden"], "Linen jacket, violet", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, šalvěj", "Hedvábí", "#7a9a7a", ["antibes-garden"], "Blouse, sage", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, slonovinový", "Bavlna", "#faf7f0", ["antibes-garden"], "Top, ivory", "Cotton", ["summer"]],
  ["women", "bottom", "Midi sukně, levandulová", "Len", "#b0a4c8", ["antibes-garden"], "Midi skirt, lavender", "Linen", ["spring", "summer"]],
  ["women", "shoes", "Bílé espadrilky s klínem", "Juta a plátno", "#faf7f0", ["antibes-garden"], "White wedge espadrilles", "Jute and canvas", ["summer"]],
  ["women", "accessory", "Levandulový šátek do vlasů", "Hedvábí", "#b0a4c8", ["antibes-garden"], "Lavender hair scarf", "Silk", ["spring", "summer"]],

  // ── EDINBURGH GREY ──────────────────────────────────────────────────────
  // ---- MEN — Edinburgh Grey ----
  ["men", "outerwear", "Vlněný kabát, granitový", "Vlna", "#4a4e58", ["edinburgh-grey"], "Wool coat, granite", "Wool", ["autumn", "winter"]],
  ["men", "top", "Svetr, burgundy", "Merino vlna", "#6a2838", ["edinburgh-grey"], "Sweater, burgundy", "Merino wool", ["autumn", "winter", "spring"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#ede8da", ["edinburgh-grey"], "Shirt, cream", "Cotton", ["spring", "autumn"]],
  ["men", "bottom", "Vlněné kalhoty, uhlová", "Vlna", "#2a2724", ["edinburgh-grey"], "Wool trousers, charcoal", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené brogues, granitové", "Useň", "#4a4e58", ["edinburgh-grey"], "Leather brogues, granite", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Tartanová šála, burgundy", "Vlna", "#6a2838", ["edinburgh-grey"], "Tartan scarf, burgundy", "Wool", ["autumn", "winter", "spring"]],
  // ---- WOMEN — Edinburgh Grey ----
  ["women", "outerwear", "Vlněný kabát, tmavě šedý", "Vlna", "#4a4e58", ["edinburgh-grey"], "Wool coat, dark grey", "Wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr, burgundy", "Kašmír", "#6a2838", ["edinburgh-grey"], "Cashmere sweater, burgundy", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Halenka, krémová", "Hedvábí", "#ede8da", ["edinburgh-grey"], "Blouse, cream", "Silk", ["spring", "autumn"]],
  ["women", "bottom", "Sukně midi, granitová", "Vlna", "#4a4e58", ["edinburgh-grey"], "Midi skirt, granite", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kotníkové boty, tmavé", "Useň", "#2a2724", ["edinburgh-grey"], "Leather ankle boots, dark", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Brož z jantaru", "Jantar a kov", "#c89040", ["edinburgh-grey"], "Amber brooch", "Amber and metal", ["spring", "autumn", "winter"]],

  // ── RIO GOLDEN ──────────────────────────────────────────────────────────
  // ---- MEN — Rio Golden ----
  ["men", "outerwear", "Lněné sako, slonovinové", "Len", "#f5edd8", ["rio-golden"], "Linen jacket, ivory", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, zlatá", "Hedvábí", "#d4a030", ["rio-golden"], "Shirt, gold", "Silk", ["summer"]],
  ["men", "top", "Polo, bílé", "Bavlna", "#fefefe", ["rio-golden"], "Polo, white", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Lněné kalhoty, bílé", "Len", "#fefefe", ["rio-golden"], "Linen trousers, white", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, bronzové", "Useň", "#a06830", ["rio-golden"], "Leather sandals, bronze", "Leather", ["summer"]],
  ["men", "accessory", "Zlatý řetízek", "Kov", "#d4a030", ["rio-golden"], "Gold chain", "Metal", ["spring", "summer"]],
  // ---- WOMEN — Rio Golden ----
  ["women", "outerwear", "Lněný blejzr, zlatý", "Len", "#d4a030", ["rio-golden"], "Linen blazer, gold", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, bronzová", "Hedvábí", "#a06830", ["rio-golden"], "Blouse, bronze", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, bílý", "Bavlna", "#fefefe", ["rio-golden"], "Top, white", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, zlatá", "Hedvábí", "#d4a030", ["rio-golden"], "Maxi skirt, gold", "Silk", ["summer"]],
  ["women", "shoes", "Zlaté sandálky, vysoký podpatek", "Useň a kov", "#d4a030", ["rio-golden"], "Gold high-heel sandals", "Leather and metal", ["summer"]],
  ["women", "accessory", "Zlaté náušnice, velké kruhy", "Kov", "#d4a030", ["rio-golden"], "Large gold hoop earrings", "Metal", ["spring", "summer", "autumn", "winter"]],

  // ── BLACK FOREST ────────────────────────────────────────────────────────
  // ---- MEN — Black Forest ----
  ["men", "outerwear", "Vlněný kabát, ébenový", "Vlna", "#1a1f1a", ["black-forest"], "Wool coat, ebony", "Wool", ["autumn", "winter"]],
  ["men", "top", "Svetr, mechový", "Merino vlna", "#4a5a3a", ["black-forest"], "Sweater, moss", "Merino wool", ["autumn", "winter", "spring"]],
  ["men", "top", "Košile, krémová", "Bavlna", "#ede8da", ["black-forest"], "Shirt, cream", "Cotton", ["spring", "autumn"]],
  ["men", "bottom", "Vlněné kalhoty, tmavé", "Vlna", "#1a1f1a", ["black-forest"], "Wool trousers, dark", "Wool", ["autumn", "winter"]],
  ["men", "shoes", "Kožené boty, amber", "Useň", "#c89040", ["black-forest"], "Leather boots, amber", "Leather", ["spring", "autumn", "winter"]],
  ["men", "accessory", "Kašmírová šála, mechová", "Kašmír", "#4a5a3a", ["black-forest"], "Cashmere scarf, moss", "Cashmere", ["autumn", "winter", "spring"]],
  // ---- WOMEN — Black Forest ----
  ["women", "outerwear", "Vlněný kabát, ébenový", "Vlna", "#1a1f1a", ["black-forest"], "Wool coat, ebony", "Wool", ["autumn", "winter"]],
  ["women", "top", "Kašmírový svetr, mechový", "Kašmír", "#4a5a3a", ["black-forest"], "Cashmere sweater, moss", "Cashmere", ["autumn", "winter", "spring"]],
  ["women", "top", "Hedvábná halenka, krémová", "Hedvábí", "#ede8da", ["black-forest"], "Silk blouse, cream", "Silk", ["spring", "autumn"]],
  ["women", "bottom", "Tužková sukně, ébenová", "Vlna", "#1a1f1a", ["black-forest"], "Pencil skirt, ebony", "Wool", ["autumn", "winter"]],
  ["women", "shoes", "Kožené kotníkové boty, amber", "Useň", "#c89040", ["black-forest"], "Leather ankle boots, amber", "Leather", ["spring", "autumn", "winter"]],
  ["women", "accessory", "Zlatá brož, listový motiv", "Kov", "#c89040", ["black-forest"], "Gold brooch, leaf motif", "Metal", ["spring", "autumn", "winter"]],

  // ── CAPRI BLUE ──────────────────────────────────────────────────────────
  // ---- MEN — Capri Blue ----
  ["men", "outerwear", "Lněné sako, kobaltové", "Len", "#1a4aad", ["capri-blue"], "Linen jacket, cobalt", "Linen", ["spring", "summer"]],
  ["men", "top", "Košile, citrónová", "Len", "#e8c840", ["capri-blue"], "Shirt, lemon", "Linen", ["summer"]],
  ["men", "top", "Polo, bílé", "Bavlna", "#fefefe", ["capri-blue"], "Polo, white", "Cotton", ["spring", "summer"]],
  ["men", "bottom", "Plátěné kalhoty, bílé", "Len", "#fefefe", ["capri-blue"], "Linen trousers, white", "Linen", ["summer"]],
  ["men", "shoes", "Kožené sandály, aqua", "Useň", "#4ab5c0", ["capri-blue"], "Leather sandals, aqua", "Leather", ["summer"]],
  ["men", "accessory", "Námořnická plátěná taška", "Plátno", "#1b2a3d", ["capri-blue"], "Navy canvas bag", "Canvas", ["spring", "summer"]],
  // ---- WOMEN — Capri Blue ----
  ["women", "outerwear", "Lněné sako, aqua", "Len", "#4ab5c0", ["capri-blue"], "Linen jacket, aqua", "Linen", ["spring", "summer"]],
  ["women", "top", "Halenka, kobaltová", "Hedvábí", "#1a4aad", ["capri-blue"], "Blouse, cobalt", "Silk", ["spring", "summer"]],
  ["women", "top", "Top, citrónový", "Bavlna", "#e8c840", ["capri-blue"], "Top, lemon", "Cotton", ["summer"]],
  ["women", "bottom", "Maxi sukně, bílá", "Len", "#fefefe", ["capri-blue"], "Maxi skirt, white", "Linen", ["summer"]],
  ["women", "shoes", "Kobaltové sandálky", "Useň", "#1a4aad", ["capri-blue"], "Cobalt sandals", "Leather", ["summer"]],
  ["women", "accessory", "Zlaté náušnice, hvězda", "Kov", "#e8c840", ["capri-blue"], "Gold star earrings", "Metal", ["spring", "summer"]],
];

export const outfitPieces: OutfitPiece[] = raw.map(
  ([gender, category, name, fabric, hex, paletteIds, nameEn, fabricEn, seasons], index) => ({
    id: `${gender}-${category}-${index}`,
    gender,
    category,
    name,
    nameEn,
    fabric,
    fabricEn,
    hex,
    paletteIds,
    seasons,
  })
);
