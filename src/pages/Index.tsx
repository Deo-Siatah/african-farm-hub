
import { useState, useEffect } from 'react';
import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Hero/HeroSection';
import MarketPricesSection from '@/components/MarketPrices/MarketPricesSection';
import MarketplaceSection from '@/components/Marketplace/MarketplaceSection';
import FeaturesSection from '@/components/Features/FeaturesSection';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <MarketPricesSection />
        <MarketplaceSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
