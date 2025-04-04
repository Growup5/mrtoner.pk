import React from 'react';
import { TrendingUp, Check } from 'lucide-react';

const FEATURES = [
  {
    id: 'feat-1',
    name: 'Enterprise Performance',
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
    description: 'Industrial-grade printing with 99.9% uptime guarantee...',
    stats: 'Up to 120ppm print speed',
    highlights: [
      'Military-grade durability',
      '24/7 operation capable',
      'Automated maintenance'
    ]
  },
  // ... other features
];

const FeatureCard = ({ feature }) => (
  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
    {/* Your card implementation */}
  </div>
);

const ProductComponent = () => {
  return (
    <div>
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default ProductComponent;