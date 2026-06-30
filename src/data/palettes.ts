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
    tagline: "Přístav, plachty a slané vzduch",
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
];
