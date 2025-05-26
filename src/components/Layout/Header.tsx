
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDark, toggleDarkMode }: HeaderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b border-agri-green-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 agri-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold agri-text-gradient">AgriConnect</h1>
              <p className="text-xs text-agri-brown-600 dark:text-gray-400">Farmer's Marketplace</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#market" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 dark:hover:text-agri-green-400 transition-colors">
              Market Prices
            </a>
            <a href="#marketplace" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 dark:hover:text-agri-green-400 transition-colors">
              Marketplace
            </a>
            <a href="#connect" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 dark:hover:text-agri-green-400 transition-colors">
              Connect
            </a>
            <a href="#about" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 dark:hover:text-agri-green-400 transition-colors">
              About
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className="flex items-center space-x-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark Mode Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleDarkMode}
              className="p-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden sm:flex space-x-2">
              <Button variant="outline" size="sm" className="border-agri-green-600 text-agri-green-600 hover:bg-agri-green-50">
                Sign In
              </Button>
              <Button size="sm" className="agri-gradient text-white hover:opacity-90">
                Join Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-in">
            <nav className="flex flex-col space-y-3">
              <a href="#market" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 py-2">
                Market Prices
              </a>
              <a href="#marketplace" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 py-2">
                Marketplace
              </a>
              <a href="#connect" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 py-2">
                Connect
              </a>
              <a href="#about" className="text-gray-700 hover:text-agri-green-600 dark:text-gray-300 py-2">
                About
              </a>
              <div className="flex space-x-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Button variant="outline" size="sm" className="flex-1 border-agri-green-600 text-agri-green-600">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 agri-gradient text-white">
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
