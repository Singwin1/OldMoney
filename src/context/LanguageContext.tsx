import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Lang = "cs" | "en";

type LanguageCtx = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageCtx>({
  lang: "cs",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs");
  const toggle = () => setLang((l) => (l === "cs" ? "en" : "cs"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
