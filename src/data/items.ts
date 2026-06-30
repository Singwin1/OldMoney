export type ItemId =
  | "tricko"
  | "kratasy"
  | "kalhoty"
  | "boty"
  | "nahrdelnik"
  | "prsten";

export type MainItem = {
  id: ItemId;
  label: string;
  labelEn: string;
};

export const mainItems: MainItem[] = [
  { id: "tricko", label: "Tričko", labelEn: "T-Shirt" },
  { id: "kratasy", label: "Kraťasy", labelEn: "Shorts" },
  { id: "kalhoty", label: "Kalhoty", labelEn: "Trousers" },
  { id: "boty", label: "Boty", labelEn: "Shoes" },
  { id: "nahrdelnik", label: "Náhrdelník", labelEn: "Necklace" },
  { id: "prsten", label: "Prsten", labelEn: "Ring" },
];
