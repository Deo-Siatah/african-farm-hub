
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

interface Listing {
  id: string;
  farmer: {
    name: string;
    avatar: string;
    rating: number;
    location: string;
    verified: boolean;
  };
  crop: string;
  quantity: number;
  unit: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  harvestDate: string;
  quality: 'Premium' | 'Grade A' | 'Standard';
  organic: boolean;
}

const MarketplaceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const listings: Listing[] = [
    {
      id: '1',
      farmer: {
        name: 'John Kariuki',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.8,
        location: 'Nakuru, Kenya',
        verified: true
      },
      crop: 'Organic Tomatoes',
      quantity: 500,
      unit: 'kg',
      price: 120,
      currency: 'KES',
      description: 'Fresh organic tomatoes, pesticide-free. Perfect for both local and export markets.',
      images: ['https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-15',
      quality: 'Premium',
      organic: true
    },
    {
      id: '2',
      farmer: {
        name: 'Fatima Hassan',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b887?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.9,
        location: 'Kano, Nigeria',
        verified: true
      },
      crop: 'Yellow Maize',
      quantity: 2000,
      unit: 'kg',
      price: 450,
      currency: 'NGN',
      description: 'High-quality yellow maize suitable for animal feed and processing. Moisture content below 14%.',
      images: ['https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-10',
      quality: 'Grade A',
      organic: false
    },
    {
      id: '3',
      farmer: {
        name: 'Samuel Addai',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.7,
        location: 'Kumasi, Ghana',
        verified: true
      },
      crop: 'Premium Cocoa Beans',
      quantity: 1000,
      unit: 'kg',
      price: 18,
      currency: 'GHS',
      description: 'Fine flavor cocoa beans from our family farm. Fermented and dried to perfection.',
      images: ['https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-08',
      quality: 'Premium',
      organic: true
    },
    {
      id: '4',
      farmer: {
        name: 'Grace Mukasa',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.6,
        location: 'Mbarara, Uganda',
        verified: false
      },
      crop: 'Irish Potatoes',
      quantity: 800,
      unit: 'kg',
      price: 3200,
      currency: 'UGX',
      description: 'Fresh Irish potatoes, perfect size for chips and cooking. Clean and sorted.',
      images: ['https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-12',
      quality: 'Standard',
      organic: false
    },
    {
      id: '5',
      farmer: {
        name: 'Ahmed Mohammed',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.8,
        location: 'Bahir Dar, Ethiopia',
        verified: true
      },
      crop: 'Arabica Coffee',
      quantity: 300,
      unit: 'kg',
      price: 850,
      currency: 'ETB',
      description: 'Single-origin Arabica coffee beans from high-altitude farms. Washed process.',
      images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-05',
      quality: 'Premium',
      organic: true
    },
    {
      id: '6',
      farmer: {
        name: 'Mary Mwangi',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        rating: 4.5,
        location: 'Arusha, Tanzania',
        verified: true
      },
      crop: 'Basmati Rice',
      quantity: 1200,
      unit: 'kg',
      price: 2800,
      currency: 'TZS',
      description: 'Long-grain Basmati rice, aromatic and perfect for premium markets.',
      images: ['https://images.unsplash.com/photo-1573160813959-df05c1b67996?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'],
      harvestDate: '2024-01-14',
      quality: 'Grade A',
      organic: false
    }
  ];

  const categories = ['all', 'grains', 'vegetables', 'cash crops', 'tubers'];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Premium':
        return 'bg-agri-green-100 text-agri-green-800 dark:bg-agri-green-900/30 dark:text-agri-green-300';
      case 'Grade A':
        return 'bg-agri-yellow-100 text-agri-yellow-800 dark:bg-agri-yellow-900/30 dark:text-agri-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const toggleFavorite = (listingId: string) => {
    setFavorites(prev => 
      prev.includes(listingId) 
        ? prev.filter(id => id !== listingId)
        : [...prev, listingId]
    );
  };

  return (
    <section id="marketplace" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Farmer <span className="agri-text-gradient">Marketplace</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect directly with verified farmers across Africa. Find quality produce, build relationships, and support local agriculture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`capitalize ${
                selectedCategory === category 
                  ? 'agri-gradient text-white' 
                  : 'border-agri-green-600 text-agri-green-600 hover:bg-agri-green-50 dark:hover:bg-agri-green-900/20'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </Button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <div className="relative">
                <img 
                  src={listing.images[0]} 
                  alt={listing.crop}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(listing.id)}
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      favorites.includes(listing.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </Button>
                
                {/* Quality Badge */}
                <Badge className={`absolute top-3 left-3 ${getQualityColor(listing.quality)}`}>
                  {listing.quality}
                </Badge>
                
                {/* Organic Badge */}
                {listing.organic && (
                  <Badge className="absolute top-10 left-3 bg-agri-green-500 text-white">
                    🌱 Organic
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {listing.crop}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {listing.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Farmer Info */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={listing.farmer.avatar} alt={listing.farmer.name} />
                    <AvatarFallback>{listing.farmer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {listing.farmer.name}
                      </p>
                      {listing.farmer.verified && (
                        <Badge variant="secondary" className="text-xs px-1 py-0">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-agri-yellow-400 text-agri-yellow-400 mr-1" />
                        {listing.farmer.rating}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {listing.farmer.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quantity and Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {listing.quantity.toLocaleString()} {listing.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price per {listing.unit}</p>
                    <p className="text-xl font-bold agri-text-gradient">
                      {listing.price} {listing.currency}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-agri-green-600 text-agri-green-600 hover:bg-agri-green-50">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" className="flex-1 agri-gradient text-white">
                    <Phone className="w-4 h-4 mr-1" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-agri-green-50 to-agri-yellow-50 dark:from-agri-green-900/20 dark:to-agri-yellow-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Selling?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of farmers who are already earning better prices for their produce. List your products in minutes.
            </p>
            <Button className="agri-gradient text-white px-8 py-3 text-lg font-semibold">
              Create Your Listing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
