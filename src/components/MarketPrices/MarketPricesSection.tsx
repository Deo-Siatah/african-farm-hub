
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, MapPin, Clock } from 'lucide-react';

interface MarketPrice {
  id: string;
  crop: string;
  price: number;
  currency: string;
  location: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  lastUpdated: string;
  image: string;
}

const MarketPricesSection = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const marketPrices: MarketPrice[] = [
    {
      id: '1',
      crop: 'Maize',
      price: 25000,
      currency: 'UGX',
      location: 'Kampala, Uganda',
      trend: 'up',
      change: 5.2,
      lastUpdated: '2 mins ago',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '2',
      crop: 'Tomatoes',
      price: 1200,
      currency: 'KES',
      location: 'Nairobi, Kenya',
      trend: 'down',
      change: -2.1,
      lastUpdated: '5 mins ago',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '3',
      crop: 'Coffee Beans',
      price: 8500,
      currency: 'ETB',
      location: 'Addis Ababa, Ethiopia',
      trend: 'up',
      change: 12.3,
      lastUpdated: '1 min ago',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '4',
      crop: 'Cassava',
      price: 850,
      currency: 'NGN',
      location: 'Lagos, Nigeria',
      trend: 'stable',
      change: 0.5,
      lastUpdated: '3 mins ago',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '5',
      crop: 'Cocoa',
      price: 15,
      currency: 'GHS',
      location: 'Accra, Ghana',
      trend: 'up',
      change: 8.7,
      lastUpdated: '4 mins ago',
      image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '6',
      crop: 'Rice',
      price: 2200,
      currency: 'TZS',
      location: 'Dar es Salaam, Tanzania',
      trend: 'down',
      change: -1.8,
      lastUpdated: '6 mins ago',
      image: 'https://images.unsplash.com/photo-1573160813959-df05c1b67996?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const locations = ['all', 'Uganda', 'Kenya', 'Ethiopia', 'Nigeria', 'Ghana', 'Tanzania'];

  const filteredPrices = selectedLocation === 'all' 
    ? marketPrices 
    : marketPrices.filter(price => price.location.includes(selectedLocation));

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-agri-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-400"></div>;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-agri-green-600';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section id="market" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Market <span className="agri-text-gradient">Prices</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time pricing data from major markets across Africa. Make informed decisions with up-to-the-minute market intelligence.
          </p>
        </div>

        {/* Location Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {locations.map((location) => (
            <Button
              key={location}
              variant={selectedLocation === location ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLocation(location)}
              className={`capitalize ${
                selectedLocation === location 
                  ? 'agri-gradient text-white' 
                  : 'border-agri-green-600 text-agri-green-600 hover:bg-agri-green-50 dark:hover:bg-agri-green-900/20'
              }`}
            >
              {location === 'all' ? 'All Markets' : location}
            </Button>
          ))}
        </div>

        {/* Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrices.map((price) => (
            <Card key={price.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-agri-green-500 bg-white dark:bg-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={price.image} 
                      alt={price.crop}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        {price.crop}
                      </CardTitle>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {price.location}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getTrendColor(price.trend)} font-medium`}
                  >
                    {getTrendIcon(price.trend)}
                    {price.change > 0 ? '+' : ''}{price.change}%
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {price.price.toLocaleString()} {price.currency}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">per bag</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {price.lastUpdated}
                    </div>
                    <Button size="sm" variant="ghost" className="text-agri-green-600 hover:text-agri-green-700 p-0 h-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-agri-green-50 dark:bg-agri-green-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want Price Alerts?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get notified when prices for your crops reach your target levels. Never miss a profitable opportunity again.
            </p>
            <Button className="agri-gradient text-white px-8 py-3 text-lg font-semibold">
              Set Up Price Alerts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPricesSection;
