export type Swatch = {
  name: string;
  hex: string;
};

export type Palette = {
  id: string;
  name: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  swatches: Swatch[];
};

export const FREE_PALETTE_IDS = new Set([
  "hamptons-cream",
  "english-countryside",
  "burgundy-estate",
  "yacht-club-navy",
  "tweed-oak",
]);

export const palettes: Palette[] = [
  {
    id: "hamptons-cream",
    name: "Hamptons Cream",
    tagline: "Letní rezidence u moře",
    taglineEn: "Summer residence by the sea",
    description:
      "Krémové a smetanové tóny doplněné teplým camelem a hlubokou námořnickou modří — elegance bez námahy.",
    descriptionEn:
      "Cream and ivory tones complemented by warm camel and deep navy — effortless elegance.",
    swatches: [
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Cream", hex: "#f5f0e6" },
      { name: "Camel", hex: "#b08d57" },
      { name: "Navy", hex: "#1b2a3d" },
      { name: "Gold", hex: "#a8884f" },
    ],
  },
  {
    id: "english-countryside",
    name: "English Countryside",
    tagline: "Venkovské sídlo, lov a tweed",
    taglineEn: "Country estate, hunting & tweed",
    description:
      "Lesní zelená a opálená hněď evokující procházky anglickým venkovem a herbářové interiéry.",
    descriptionEn:
      "Forest green and burnished brown evoking walks through the English countryside and herbarium interiors.",
    swatches: [
      { name: "Forest", hex: "#2e3d2f" },
      { name: "Hunter Green", hex: "#44573f" },
      { name: "Tan", hex: "#c9a679" },
      { name: "Parchment", hex: "#ece3d2" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "burgundy-estate",
    name: "Burgundy Estate",
    tagline: "Knihovna a krb za soumraku",
    taglineEn: "Library and fireplace at dusk",
    description:
      "Hluboké burgundy v kombinaci s uhlovou šedí a krémovou — bohatství v tichém, sytém podání.",
    descriptionEn:
      "Deep burgundy paired with charcoal and cream — wealth in a quiet, saturated expression.",
    swatches: [
      { name: "Burgundy", hex: "#5e2129" },
      { name: "Charcoal", hex: "#2a2724" },
      { name: "Cream", hex: "#f5f0e6" },
      { name: "Gold", hex: "#a8884f" },
      { name: "Stone", hex: "#8a8270" },
    ],
  },
  {
    id: "yacht-club-navy",
    name: "Yacht Club Navy",
    tagline: "Přístav, plachty a slaný vzduch",
    taglineEn: "Harbour, sails and salty air",
    description:
      "Klasická námořnická modř a bílá s nádechem zlaté — nadčasová uniforma pobřežní aristokracie.",
    descriptionEn:
      "Classic navy and white with a touch of gold — the timeless uniform of coastal aristocracy.",
    swatches: [
      { name: "Navy", hex: "#1b2a3d" },
      { name: "Navy Light", hex: "#2c4258" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Tan", hex: "#c9a679" },
      { name: "Gold", hex: "#a8884f" },
    ],
  },
  {
    id: "tweed-oak",
    name: "Tweed & Oak",
    tagline: "Studovna, kožené křeslo, dub",
    taglineEn: "Study room, leather armchair, oak",
    description:
      "Zemité odstíny camelu, parchmentu a lesní zeleně — textury tweedu a vyzrálého dřeva.",
    descriptionEn:
      "Earthy tones of camel, parchment and forest green — the textures of tweed and aged wood.",
    swatches: [
      { name: "Camel", hex: "#b08d57" },
      { name: "Parchment", hex: "#ece3d2" },
      { name: "Forest", hex: "#2e3d2f" },
      { name: "Charcoal", hex: "#2a2724" },
      { name: "Stone", hex: "#8a8270" },
    ],
  },
  {
    id: "italian-riviera",
    name: "Italian Riviera",
    tagline: "Terasy nad Ligurským mořem",
    taglineEn: "Terraces above the Ligurian Sea",
    description:
      "Aqua modrá a terracotta pod středomořským sluncem — letní lehkost v italském střihu.",
    descriptionEn:
      "Aqua blue and terracotta under the Mediterranean sun — summer lightness in Italian cut.",
    swatches: [
      { name: "Aqua", hex: "#7ab5c4" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Terracotta", hex: "#c97a5a" },
      { name: "Sand", hex: "#e0c99a" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "monte-carlo",
    name: "Monte Carlo",
    tagline: "Kasino, manžetové knoflíčky a šampaňské",
    taglineEn: "Casino, cufflinks and champagne",
    description:
      "Černá a slonovinová s champagne zlatou — maximální výraz v minimálním rejstříku.",
    descriptionEn:
      "Black and ivory with champagne gold — maximum expression in a minimal register.",
    swatches: [
      { name: "Jet", hex: "#1a1a1a" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Champagne", hex: "#d4b896" },
      { name: "Stone", hex: "#8a8270" },
      { name: "Gold", hex: "#a8884f" },
    ],
  },
  {
    id: "scottish-highlands",
    name: "Scottish Highlands",
    tagline: "Vřesoviště, mlha a tartanová vlna",
    taglineEn: "Moorland, mist and tartan wool",
    description:
      "Vřesová fialová a mlhavá šedá z drsné skotské krajiny — tartanová elegance bez kompromisů.",
    descriptionEn:
      "Heather purple and misty grey from the rugged Scottish landscape — tartan elegance without compromise.",
    swatches: [
      { name: "Heather", hex: "#7d6b8a" },
      { name: "Mist", hex: "#c5bec8" },
      { name: "Bracken", hex: "#5e4a2e" },
      { name: "Cream", hex: "#ece3d2" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "palm-beach",
    name: "Palm Beach",
    tagline: "Palmy, pláž a pastelový západ slunce",
    taglineEn: "Palms, beach and pastel sunset",
    description:
      "Korálová, aqua a písková — uvolněná bohatost Floridy s nádechem bezstarostnosti.",
    descriptionEn:
      "Coral, aqua and sand — the relaxed affluence of Florida with a touch of nonchalance.",
    swatches: [
      { name: "Coral", hex: "#d4816a" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Aqua", hex: "#7ab5c4" },
      { name: "Sand", hex: "#e0c99a" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "vienna-winter",
    name: "Vienna Winter",
    tagline: "Opera, sníh a secesní fasády",
    taglineEn: "Opera, snow and Art Nouveau facades",
    description:
      "Ocelová šedá a tmavé vínové pod vídeňskými lucernami — střídmost, která dýchá historií.",
    descriptionEn:
      "Steel grey and deep wine under Viennese lanterns — restraint that breathes with history.",
    swatches: [
      { name: "Steel", hex: "#4a5568" },
      { name: "Wine", hex: "#6b2737" },
      { name: "Cream", hex: "#f5f0e6" },
      { name: "Silver", hex: "#9aa5b4" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "cote-dazur",
    name: "Côte d'Azur",
    tagline: "Azurové pobřeží, levandule a slunce",
    taglineEn: "Azure coast, lavender and sunshine",
    description:
      "Azurová modrá, levandulová a zlatá — francouzská Riviéra v celé své přímořské eleganci.",
    descriptionEn:
      "Azure blue, lavender and gold — the French Riviera in all its seaside elegance.",
    swatches: [
      { name: "Azure", hex: "#4a8fbd" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Lavender", hex: "#9b8fbd" },
      { name: "Sand", hex: "#e0c99a" },
      { name: "Gold", hex: "#a8884f" },
    ],
  },
  {
    id: "oxbridge",
    name: "Oxbridge",
    tagline: "Kampus, kolej a chladný podzim",
    taglineEn: "Campus, college and crisp autumn",
    description:
      "Oxfordská modrá, maroon a mosazná — tradice britského vzdělání vtělená do přesného střihu.",
    descriptionEn:
      "Oxford blue, maroon and brass — the tradition of British academia embodied in precise tailoring.",
    swatches: [
      { name: "Oxford", hex: "#1e3a5f" },
      { name: "Cream", hex: "#ece3d2" },
      { name: "Maroon", hex: "#7a2535" },
      { name: "Brass", hex: "#b8963e" },
      { name: "Tan", hex: "#c9a679" },
    ],
  },
  {
    id: "tuscan-villa",
    name: "Tuscan Villa",
    tagline: "Vinice, olivy a zlaté odpoledne",
    taglineEn: "Vineyards, olives and golden afternoon",
    description:
      "Terracotta, olivová zeleň a teplá slonovinová — toskánská letní pohoda v každém detailu.",
    descriptionEn:
      "Terracotta, olive green and warm ivory — Tuscan summer ease in every detail.",
    swatches: [
      { name: "Terracotta", hex: "#c97a5a" },
      { name: "Olive", hex: "#6b7c3f" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Russet", hex: "#8b4a2e" },
      { name: "Warm Sand", hex: "#e8d5a0" },
    ],
  },
  {
    id: "connecticut-autumn",
    name: "Connecticut Autumn",
    tagline: "Javorový les, dřevěné sídlo, kouř",
    taglineEn: "Maple forest, wooden estate, smoke",
    description:
      "Rezavá a javorová hnědá se smaragdovou zelení — podzim Nové Anglie v klasickém střihu.",
    descriptionEn:
      "Rust and maple brown with emerald green — New England autumn in classic tailoring.",
    swatches: [
      { name: "Rust", hex: "#b85c2e" },
      { name: "Maple", hex: "#c87941" },
      { name: "Forest", hex: "#2e3d2f" },
      { name: "Tan", hex: "#c9a679" },
      { name: "Cream", hex: "#f5f0e6" },
    ],
  },
  {
    id: "cape-cod-grey",
    name: "Cape Cod Grey",
    tagline: "Pobřežní vila, sůl a mořský vzduch",
    taglineEn: "Coastal estate, salt and sea air",
    description:
      "Břidlicová šedá a plaveň s bílou a námořnickou modří — střídmá elegance atlantického pobřeží.",
    descriptionEn:
      "Slate grey and driftwood with white and navy — the restrained elegance of the Atlantic coast.",
    swatches: [
      { name: "Slate", hex: "#6b7280" },
      { name: "Driftwood", hex: "#a09078" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Navy", hex: "#1b2a3d" },
      { name: "Fog", hex: "#d1d5db" },
    ],
  },

  // ── 20 PREMIUM PALETTES ──────────────────────────────────────────────────
  {
    id: "st-moritz",
    name: "St. Moritz",
    tagline: "Alpský sníh, chalet a šampaňské",
    taglineEn: "Alpine snow, chalet and champagne",
    description:
      "Ledovcová bílá, alpská modrá a zlatá — luxus švýcarského lyžařského střediska v každém detailu.",
    descriptionEn:
      "Glacial white, alpine blue and gold — the luxury of a Swiss ski resort in every detail.",
    swatches: [
      { name: "Alpine", hex: "#2b4a7a" },
      { name: "Snow", hex: "#f7f9fc" },
      { name: "Champagne", hex: "#d4b896" },
      { name: "Caramel", hex: "#b07840" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "portofino",
    name: "Portofino",
    tagline: "Barevné fasády, jachty a pesto",
    taglineEn: "Coloured facades, yachts and pesto",
    description:
      "Žlutá okr, tyrkys a korálová — živost ligurského rybářského přístavu v lehkém italském střihu.",
    descriptionEn:
      "Yellow ochre, turquoise and coral — the vivacity of a Ligurian fishing harbour in light Italian cut.",
    swatches: [
      { name: "Ochre", hex: "#d4a843" },
      { name: "Turquoise", hex: "#3a9f9f" },
      { name: "Coral", hex: "#d4735a" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "london-club",
    name: "London Club",
    tagline: "Pall Mall, kožené křeslo a brandy",
    taglineEn: "Pall Mall, leather armchair and brandy",
    description:
      "Tmavě zelená, mahagon a zlatavá — atmosféra exkluzivního gentlemen's clubu.",
    descriptionEn:
      "Dark green, mahogany and amber — the atmosphere of an exclusive gentlemen's club.",
    swatches: [
      { name: "Club Green", hex: "#1e3d2a" },
      { name: "Mahogany", hex: "#5c2e1a" },
      { name: "Amber", hex: "#c8843a" },
      { name: "Cream", hex: "#f0ead8" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "amalfi-coast",
    name: "Amalfi Coast",
    tagline: "Útesy, citróny a modré moře",
    taglineEn: "Cliffs, lemons and the blue sea",
    description:
      "Citrónová žlutá, azurová a bílá — dramatická krása amalfijského pobřeží v každém dotyku.",
    descriptionEn:
      "Lemon yellow, azure and white — the dramatic beauty of the Amalfi coast in every touch.",
    swatches: [
      { name: "Lemon", hex: "#e8c84a" },
      { name: "Azure", hex: "#3a7abf" },
      { name: "White", hex: "#fefefe" },
      { name: "Terracotta", hex: "#c97a5a" },
      { name: "Olive", hex: "#6b7c3f" },
    ],
  },
  {
    id: "normandy-manor",
    name: "Normandy Manor",
    tagline: "Normandské sídlo, jablečný mošt a mlha",
    taglineEn: "Norman manor, cider and morning mist",
    description:
      "Šedá břidlice, krémová a teplá zelená — utišená elegance francouzského venkova.",
    descriptionEn:
      "Grey slate, cream and warm green — the quieted elegance of the French countryside.",
    swatches: [
      { name: "Slate", hex: "#5a6a7a" },
      { name: "Cream", hex: "#ede8da" },
      { name: "Apple Green", hex: "#5a7a45" },
      { name: "Stone", hex: "#9a8e7c" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "geneva-lake",
    name: "Geneva Lake",
    tagline: "Jezerní Ženeva, hodinky a čistota",
    taglineEn: "Lake Geneva, timepieces and clarity",
    description:
      "Ledová modrá, platinová a bílá — švýcarská přesnost vtělená do nekompromisního střihu.",
    descriptionEn:
      "Ice blue, platinum and white — Swiss precision embodied in uncompromising tailoring.",
    swatches: [
      { name: "Ice", hex: "#b8d4e8" },
      { name: "Platinum", hex: "#c8cfd8" },
      { name: "White", hex: "#fefefe" },
      { name: "Navy", hex: "#1b2a3d" },
      { name: "Camel", hex: "#b08d57" },
    ],
  },
  {
    id: "nantucket-grey",
    name: "Nantucket Grey",
    tagline: "Šindele, hortenzie a atlantický vítr",
    taglineEn: "Shingles, hydrangeas and Atlantic wind",
    description:
      "Zvětralá šedá, modrošedá a bílá — střídmost starých rodin Nové Anglie.",
    descriptionEn:
      "Weathered grey, blue-grey and white — the restraint of old New England families.",
    swatches: [
      { name: "Shingle", hex: "#8a8e92" },
      { name: "Hydrangea", hex: "#7a8fad" },
      { name: "White", hex: "#fefefe" },
      { name: "Driftwood", hex: "#9a8870" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "marrakech-dusk",
    name: "Marrakech Dusk",
    tagline: "Souk, mosaz a soumrak medíny",
    taglineEn: "Souk, brass and medina dusk",
    description:
      "Hřejivá okrová, terakota a zlatá pod severoafrickým soumrakem — exotika s aristokratickým klidem.",
    descriptionEn:
      "Warm ochre, terracotta and gold under a North African dusk — exotic with aristocratic calm.",
    swatches: [
      { name: "Saffron", hex: "#d4882a" },
      { name: "Terracotta", hex: "#b85a3a" },
      { name: "Gold", hex: "#c8963a" },
      { name: "Ivory", hex: "#f5edd8" },
      { name: "Espresso", hex: "#2a1f1a" },
    ],
  },
  {
    id: "biarritz-blue",
    name: "Biarritz Blue",
    tagline: "Baskické pobřeží, surf a Belle Époque",
    taglineEn: "Basque coast, surf and Belle Époque",
    description:
      "Tmavá námořnická, červená a bílá baskické vlajky — elegance v rytmu atlantického příboje.",
    descriptionEn:
      "Deep navy, Basque red and white — elegance in the rhythm of the Atlantic surf.",
    swatches: [
      { name: "Navy", hex: "#1b2a3d" },
      { name: "Basque Red", hex: "#a82832" },
      { name: "White", hex: "#fefefe" },
      { name: "Sand", hex: "#e0c99a" },
      { name: "Camel", hex: "#b08d57" },
    ],
  },
  {
    id: "positano-sunset",
    name: "Positano Sunset",
    tagline: "Růžové útesy, bougainvillea a modrá hlubina",
    taglineEn: "Blush cliffs, bougainvillea and deep blue",
    description:
      "Starorůžová, kobaltová a zlatá v italském podání — západ slunce nad Tyrhénským mořem.",
    descriptionEn:
      "Dusty rose, cobalt and gold in an Italian rendering — sunset over the Tyrrhenian Sea.",
    swatches: [
      { name: "Blush", hex: "#d4927a" },
      { name: "Cobalt", hex: "#2a5aad" },
      { name: "Gold", hex: "#c8a040" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Olive", hex: "#6b7c3f" },
    ],
  },
  {
    id: "newport-prep",
    name: "Newport Prep",
    tagline: "Rhode Island, regaty a seersucker",
    taglineEn: "Rhode Island, regattas and seersucker",
    description:
      "Námořnická modrá, bílá a červená v americkém preppy podání — tradice Ivy League u moře.",
    descriptionEn:
      "Navy, white and red in American preppy fashion — Ivy League tradition by the sea.",
    swatches: [
      { name: "Navy", hex: "#1b2a3d" },
      { name: "White", hex: "#fefefe" },
      { name: "Red", hex: "#a82828" },
      { name: "Khaki", hex: "#c9a679" },
      { name: "Grass", hex: "#3a6e3a" },
    ],
  },
  {
    id: "lake-como",
    name: "Lake Como",
    tagline: "Jezero Como, vily a hedbáví",
    taglineEn: "Lake Como, villas and silk",
    description:
      "Jezerní zelená, azur a slonovinová — italská lehkost letních prázdnin na jezeře Como.",
    descriptionEn:
      "Lake green, azure and ivory — Italian lightness of summer holidays on Lake Como.",
    swatches: [
      { name: "Lake", hex: "#3a7a6e" },
      { name: "Azure", hex: "#4a8fbd" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Caramel", hex: "#b07840" },
      { name: "Blush", hex: "#d4a090" },
    ],
  },
  {
    id: "bermuda-blush",
    name: "Bermuda Blush",
    tagline: "Růžové pláže, pastely a koloniální elegance",
    taglineEn: "Pink sands, pastels and colonial elegance",
    description:
      "Korálová, šalvějová a bílá — ostrovní lehkost bermudského souostroví.",
    descriptionEn:
      "Coral, sage and white — the island lightness of the Bermuda archipelago.",
    swatches: [
      { name: "Coral", hex: "#d4816a" },
      { name: "Sage", hex: "#7a9a7a" },
      { name: "White", hex: "#fefefe" },
      { name: "Blush", hex: "#e0a898" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
  {
    id: "aspen-lodge",
    name: "Aspen Lodge",
    tagline: "Horský chalet, kašmír a borové dřevo",
    taglineEn: "Mountain lodge, cashmere and pine",
    description:
      "Tabáková hnědá, smetanová a hluboká modrá — přepych horského útulku v amerických Skalnatých horách.",
    descriptionEn:
      "Tobacco brown, cream and deep blue — the luxury of a mountain retreat in the American Rockies.",
    swatches: [
      { name: "Tobacco", hex: "#7a4e2a" },
      { name: "Cream", hex: "#f0e8d8" },
      { name: "Pine", hex: "#2e4a30" },
      { name: "Caramel", hex: "#b07840" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "kyoto-autumn",
    name: "Kyoto Autumn",
    tagline: "Javorová zákoutí a chrámové zahrady",
    taglineEn: "Maple alcoves and temple gardens",
    description:
      "Ohnivá červená, zlatá a indigová — japonský podzim přeložený do nadčasového střihu.",
    descriptionEn:
      "Fiery red, gold and indigo — Japanese autumn translated into timeless tailoring.",
    swatches: [
      { name: "Maple", hex: "#c84a28" },
      { name: "Gold", hex: "#c8a040" },
      { name: "Indigo", hex: "#2a3a6a" },
      { name: "Cream", hex: "#f5edd8" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "antibes-garden",
    name: "Antibes Garden",
    tagline: "Zahrada Cap d'Antibes, levandule a cypřiše",
    taglineEn: "Cap d'Antibes garden, lavender and cypress",
    description:
      "Bledě fialová, šalvějová a slonovinová — zahradní ráj mezi levandulí a středomořskými bylinami.",
    descriptionEn:
      "Pale violet, sage and ivory — a garden paradise between lavender and Mediterranean herbs.",
    swatches: [
      { name: "Violet", hex: "#8a7aad" },
      { name: "Sage", hex: "#7a9a7a" },
      { name: "Ivory", hex: "#faf7f0" },
      { name: "Lavender", hex: "#b0a4c8" },
      { name: "Stone", hex: "#9a8e7c" },
    ],
  },
  {
    id: "edinburgh-grey",
    name: "Edinburgh Grey",
    tagline: "Kamenné ulice, whiskys a šedé ráno",
    taglineEn: "Stone streets, whisky and grey mornings",
    description:
      "Tmavě šedá, burgundy a zlatá — skotská metropole v celé své dramatické kráse.",
    descriptionEn:
      "Dark grey, burgundy and gold — the Scottish capital in all its dramatic beauty.",
    swatches: [
      { name: "Granite", hex: "#4a4e58" },
      { name: "Burgundy", hex: "#6a2838" },
      { name: "Amber", hex: "#c89040" },
      { name: "Cream", hex: "#ede8da" },
      { name: "Charcoal", hex: "#2a2724" },
    ],
  },
  {
    id: "rio-golden",
    name: "Rio Golden",
    tagline: "Zlaté písky, karneval a tropická noc",
    taglineEn: "Golden sands, carnival and tropical night",
    description:
      "Teplá zlatá, bronzová a bílá — brazilský přepych v lehkých texturách a elegantním střihu.",
    descriptionEn:
      "Warm gold, bronze and white — Brazilian luxury in light textures and elegant cut.",
    swatches: [
      { name: "Gold", hex: "#d4a030" },
      { name: "Bronze", hex: "#a06830" },
      { name: "White", hex: "#fefefe" },
      { name: "Ivory", hex: "#f5edd8" },
      { name: "Espresso", hex: "#2a1f1a" },
    ],
  },
  {
    id: "black-forest",
    name: "Black Forest",
    tagline: "Temný les, mlha a středoevropský klid",
    taglineEn: "Dark forest, mist and Central European calm",
    description:
      "Téměř černá, mechová zelená a zlatá — mračná atmosféra Schwarzwaldu přeložená do střihu.",
    descriptionEn:
      "Near-black, moss green and gold — the brooding atmosphere of the Schwarzwald rendered in tailoring.",
    swatches: [
      { name: "Midnight", hex: "#1a1f1a" },
      { name: "Moss", hex: "#4a5a3a" },
      { name: "Amber", hex: "#c89040" },
      { name: "Cream", hex: "#ede8da" },
      { name: "Stone", hex: "#7a7a6a" },
    ],
  },
  {
    id: "capri-blue",
    name: "Capri Blue",
    tagline: "Grotta Azzurra, limoncello a klid",
    taglineEn: "Grotta Azzurra, limoncello and stillness",
    description:
      "Kobaltová modrá, citrónová a bílá — ikonický ostrov v Neapolském zálivu v celé své kráse.",
    descriptionEn:
      "Cobalt blue, lemon and white — the iconic island in the Bay of Naples in its full splendour.",
    swatches: [
      { name: "Cobalt", hex: "#1a4aad" },
      { name: "Lemon", hex: "#e8c840" },
      { name: "White", hex: "#fefefe" },
      { name: "Aqua", hex: "#4ab5c0" },
      { name: "Navy", hex: "#1b2a3d" },
    ],
  },
];
