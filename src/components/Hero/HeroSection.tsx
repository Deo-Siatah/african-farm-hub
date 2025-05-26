
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-agri-green-50 via-white to-agri-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234CAF50%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-agri-green-100 dark:bg-agri-green-900/30 rounded-full text-agri-green-700 dark:text-agri-green-300 text-sm font-medium">
                🌍 Empowering African Farmers
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="agri-text-gradient">Connect.</span>
                <br />
                <span className="text-gray-900 dark:text-white">Sell.</span>
                <br />
                <span className="text-agri-yellow-600">Prosper.</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Get real-time market prices, connect with verified buyers, and secure better deals for your agricultural produce across Africa.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-agri-green-700 dark:text-agri-green-300">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Live Prices</span>
              </div>
              <div className="flex items-center space-x-2 text-agri-brown-700 dark:text-agri-brown-300">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Verified Buyers</span>
              </div>
              <div className="flex items-center space-x-2 text-agri-yellow-700 dark:text-agri-yellow-300">
                <Search className="w-5 h-5" />
                <span className="text-sm font-medium">Easy Search</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="agri-gradient text-white px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity">
                Start Selling Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-agri-green-600 text-agri-green-600 hover:bg-agri-green-50 dark:hover:bg-agri-green-900/20 px-8 py-3 text-lg font-semibold"
              >
                View Market Prices
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by farmers across:</p>
              <div className="flex items-center space-x-6 text-2xl">
                <span title="Kenya">🇰🇪</span>
                <span title="Nigeria">🇳🇬</span>
                <span title="Ghana">🇬🇭</span>
                <span title="Tanzania">🇹🇿</span>
                <span title="Uganda">🇺🇬</span>
                <span title="Ethiopia">🇪🇹</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="African farmers working in the field"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-agri-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Market Data</span>
                </div>
                <p className="text-lg font-bold text-agri-green-600 mt-1">5,000+ Prices</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-agri-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Farmers</span>
                </div>
                <p className="text-lg font-bold text-agri-yellow-600 mt-1">50,000+</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 agri-gradient rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
