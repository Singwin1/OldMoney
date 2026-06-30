import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBuilder from "./components/QuickBuilder";
import PaletteGallery from "./components/PaletteGallery";
import OutfitStyler from "./components/OutfitStyler";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import { palettes } from "./data/palettes";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <Hero />
        <QuickBuilder />
        <PaletteGallery
          activePaletteId={activePaletteId}
          onSelect={setActivePaletteId}
        />
        <OutfitStyler
          activePaletteId={activePaletteId}
          onSelectPalette={setActivePaletteId}
        />
        <Membership />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
