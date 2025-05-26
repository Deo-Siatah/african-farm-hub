
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Shield, Globe, Smartphone, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Market Prices',
      description: 'Get live pricing data from major markets across Africa. Make informed decisions with accurate, up-to-the-minute market intelligence.',
      color: 'agri-green'
    },
    {
      icon: Users,
      title: 'Verified Buyer Network',
      description: 'Connect with a network of verified buyers including wholesalers, processors, and exporters. Build lasting business relationships.',
      color: 'agri-brown'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Trade with confidence using our secure transaction system. Your payments and data are protected with bank-level security.',
      color: 'agri-yellow'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Access the platform in your preferred language including English, Kiswahili, Hausa, Amharic, and French.',
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices with offline capabilities. Access market data and connect with buyers even with limited internet.',
      color: 'agri-green'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track your sales performance, understand market trends, and get personalized recommendations to maximize your profits.',
      color: 'agri-brown'
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'agri-green':
        return 'text-agri-green-600';
      case 'agri-brown':
        return 'text-agri-brown-600';
      case 'agri-yellow':
        return 'text-agri-yellow-600';
      case 'blue':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'agri-green':
        return 'bg-agri-green-100 dark:bg-agri-green-900/20';
      case 'agri-brown':
        return 'bg-agri-brown-100 dark:bg-agri-brown-900/20';
      case 'agri-yellow':
        return 'bg-agri-yellow-100 dark:bg-agri-yellow-900/20';
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-900/20';
      default:
        return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="agri-text-gradient">AgriConnect</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools designed specifically for African farmers to maximize profits, reduce waste, and build sustainable agricultural businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-md group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${getBgColor(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${getIconColor(feature.color)}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-agri-green-600 to-agri-green-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-agri-green-100">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-agri-green-100">Verified Buyers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.5M+</div>
              <div className="text-agri-green-100">Trade Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-agri-green-100">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
