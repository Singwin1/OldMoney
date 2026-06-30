import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PaletteGallery from "./components/PaletteGallery";
import OutfitStyler from "./components/OutfitStyler";
import Footer from "./components/Footer";
import { palettes } from "./data/palettes";

function App() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <PaletteGallery
        activePaletteId={activePaletteId}
        onSelect={setActivePaletteId}
      />
      <OutfitStyler
        activePaletteId={activePaletteId}
        onSelectPalette={setActivePaletteId}
      />
      <Footer />
    </div>
  );
}

export default App;
