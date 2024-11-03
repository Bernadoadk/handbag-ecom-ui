import PageHeader from '../components/PageHeader';
import { Award, Heart, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentic Products',
    description: 'Every bag in our collection is 100% authentic and verified.',
  },
  {
    icon: Heart,
    title: 'Crafted with Care',
    description: 'Handcrafted by skilled artisans using premium materials.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality control to ensure lasting excellence.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'We deliver our luxury bags worldwide with care.',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      <PageHeader
        title="About LUXEBAGS"
        description="Crafting luxury experiences since 1970"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1970, LUXEBAGS has been at the forefront of luxury handbag design and craftsmanship. Our commitment to quality and innovation has made us a trusted name in the fashion industry.
            </p>
            <p className="text-gray-600 mb-4">
              Each bag in our collection tells a story of dedication, skill, and passion. We work with the finest materials and most talented artisans to create pieces that are not just accessories, but works of art.
            </p>
            <p className="text-gray-600">
              Our mission is to provide our customers with timeless pieces that combine classic elegance with contemporary design, ensuring that each LUXEBAGS creation becomes a cherished part of their wardrobe.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80&w=1974"
              alt="Craftsmanship"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-lg bg-gray-50">
              <feature.icon className="h-8 w-8 text-rose-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}