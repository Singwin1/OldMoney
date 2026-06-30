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
