
import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import EquipePage from './pages/EquipePage.tsx';
import AvantApresPage from './pages/AvantApresPage.tsx';
import StatistiquesPage from './pages/StatistiquesPage.tsx';
import ContactPage from './pages/ContactPage.tsx';


// --- Main App Component ---

export default function App() {
  const [page, setPage] = useState('Accueil');

  const handleNavigate = (pageName: string) => {
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'Accueil':
        return <HomePage onNavigate={handleNavigate} />;
      case 'Services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'Équipe':
        return <EquipePage onNavigate={handleNavigate} />;
      case 'Avant/Après':
        return <AvantApresPage />;
      case 'Statistiques':
        return <StatistiquesPage />;
      case 'Contact':
        return <ContactPage />;
      // Default to home for other links for now
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-white font-sans">
      <Header currentPage={page} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}