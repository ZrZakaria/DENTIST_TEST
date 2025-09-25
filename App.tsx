
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import EquipePage from './pages/EquipePage';
import AvantApresPage from './pages/AvantApresPage';
import StatistiquesPage from './pages/StatistiquesPage';
import ContactPage from './pages/ContactPage';


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
