import { useState, Component, type ReactNode, type ErrorInfo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBuilder from "./components/QuickBuilder";
import PaletteGallery from "./components/PaletteGallery";
import OutfitStyler from "./components/OutfitStyler";
import LookbookSection from "./components/LookbookSection";
import Membership from "./components/Membership";
import ConciergeSection from "./components/ConciergeSection";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import PaymentPage from "./pages/PaymentPage";
import AdminPage from "./pages/AdminPage";
import { palettes } from "./data/palettes";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[OldMoney] Uncaught error:", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ivory px-6 text-center">
          <p className="font-serif-display text-3xl text-navy">Chyba načítání</p>
          <p className="max-w-sm text-sm text-charcoal/55">
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-full border border-navy/30 px-6 py-2.5 text-xs tracking-[0.14em] text-navy hover:bg-navy hover:text-ivory transition-colors"
          >
            OBNOVIT STRÁNKU
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainPage() {
  const [activePaletteId, setActivePaletteId] = useState(palettes[0].id);
  const { openAuth } = useAuth();

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
      <LookbookSection
        activePaletteId={activePaletteId}
        onUnlock={openAuth}
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
