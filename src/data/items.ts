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
};

export const mainItems: MainItem[] = [
  { id: "tricko", label: "Tričko" },
  { id: "kratasy", label: "Kraťasy" },
  { id: "kalhoty", label: "Kalhoty" },
  { id: "boty", label: "Boty" },
  { id: "nahrdelnik", label: "Náhrdelník" },
  { id: "prsten", label: "Prsten" },
];
