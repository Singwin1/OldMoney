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
];
