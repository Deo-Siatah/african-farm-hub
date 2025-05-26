
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 agri-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriConnect</h3>
                <p className="text-sm text-gray-400">Farmer's Marketplace</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering African farmers with real-time market access, connecting them to verified buyers and securing better prices for their produce.
            </p>
            <div className="flex space-x-4 text-2xl">
              <span title="Kenya">🇰🇪</span>
              <span title="Nigeria">🇳🇬</span>
              <span title="Ghana">🇬🇭</span>
              <span title="Tanzania">🇹🇿</span>
              <span title="Uganda">🇺🇬</span>
              <span title="Ethiopia">🇪🇹</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#market" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Market Prices</a></li>
              <li><a href="#marketplace" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Marketplace</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Features</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* For Farmers */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">For Farmers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Create Listing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Price Alerts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Farming Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Mobile App</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agri-green-400 transition-colors text-sm">FAQ</a></li>
              <li>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-300">📞</span>
                  <span className="text-gray-300">+254 700 123 456</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-agri-green-800 to-agri-green-700 rounded-xl p-6 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated with Market Trends</h3>
              <p className="text-agri-green-100">Get weekly market insights and price alerts delivered to your phone.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:min-w-96">
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-agri-yellow-400"
              />
              <Button className="bg-agri-yellow-500 text-gray-900 hover:bg-agri-yellow-400 font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} AgriConnect. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-agri-green-400">🌱 Supporting African Agriculture</span>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-agri-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs">Live Market Data</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
