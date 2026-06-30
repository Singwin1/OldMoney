import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBuilder from "./components/QuickBuilder";
import PaletteGallery from "./components/PaletteGallery";
import OutfitStyler from "./components/OutfitStyler";
import Membership from "./components/Membership";
import ConciergeSection from "./components/ConciergeSection";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { palettes } from "./data/palettes";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);

  return (
    <LanguageProvider>
      <AuthProvider>
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
          <ConciergeSection />
          <Footer />
          <AuthModal />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
