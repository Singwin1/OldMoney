import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBuilder from "./components/QuickBuilder";
import PaletteGallery from "./components/PaletteGallery";
import OutfitStyler from "./components/OutfitStyler";
import Membership from "./components/Membership";
import ConciergeSection from "./components/ConciergeSection";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import PaymentPage from "./pages/PaymentPage";
import AdminPage from "./pages/AdminPage";
import { palettes } from "./data/palettes";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

function MainPage() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);

  return (
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
  );
}

function PaymentWrapper() {
  return (
    <div>
      <AuthModal />
      <PaymentPage />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/platba" element={<PaymentWrapper />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}
