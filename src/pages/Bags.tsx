import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const bags = [
  {
    id: 1,
    name: 'The Classic Tote',
    price: 299,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
    rating: 4.9,
    category: 'Tote',
  },
  {
    id: 2,
    name: 'Elegant Crossbody',
    price: 249,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=774',
    rating: 4.8,
    category: 'Crossbody',
  },
  {
    id: 3,
    name: 'Luxury Shoulder Bag',
    price: 399,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    rating: 4.9,
    category: 'Shoulder Bags',
  },
  {
    id: 4,
    name: 'Evening Clutch',
    price: 199,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=871',
    rating: 4.7,
    category: 'Clutches',
  },
  {
    id: 5,
    name: 'Mini Crossbody',
    price: 179,
    image: 'https://images.unsplash.com/photo-1590739225287-bd31519780c5?auto=format&fit=crop&q=80&w=774',
    rating: 4.6,
    category: 'Crossbody',
  },
  {
    id: 6,
    name: 'Work Tote',
    price: 329,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    rating: 4.8,
    category: 'Tote',
  },
];

export default function Bags() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="pt-16">
      <PageHeader
        title="Our Bags"
        description="Discover our curated collection of luxury handbags"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
          <div className="flex items-center space-x-4">
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              {['All', 'Tote', 'Crossbody', 'Shoulder Bags', 'Clutches'].map((category) => (
                <label key={category} className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="rounded text-rose-600 focus:ring-rose-500" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bags.map((bag) => (
            <ProductCard key={bag.id} {...bag} />
          ))}
        </div>
      </div>
    </div>
  );
}