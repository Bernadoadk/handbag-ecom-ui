import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredBags = [
    {
      id: 1,
      name: 'The Classic Tote',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Elegant Crossbody',
      price: 249,
      image:
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=774',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Luxury Shoulder Bag',
      price: 399,
      image:
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
      rating: 4.9,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/564x/45/d3/94/45d3942fd98ef9d833998a41e252405b.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Elegance in Every Detail
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover our exclusive collection of luxury handbags
            </p>
            <Link
              to="/bags"
              className="inline-flex items-center bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition duration-300"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBags.map((bag) => (
            <div key={bag.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {bag.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-rose-600 font-medium">${bag.price}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {bag.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: 'Totes',
                image:
                  'https://images.unsplash.com/photo-1625039940921-cf6f314a992d?auto=format&fit=crop&q=80&w=774', // Sac à main Tote
              },
              {
                name: 'Crossbody',
                image:
                  'https://images.unsplash.com/photo-1612046767234-8910a7a026dc?auto=format&fit=crop&q=80&w=774', // Sac Crossbody
              },
              {
                name: 'Shoulder Bags',
                image:
                  'https://images.unsplash.com/photo-1570280225105-5b8e4a250f94?auto=format&fit=crop&q=80&w=774', // Sac à épaule
              },
              {
                name: 'Clutches',
                image:
                  'https://images.unsplash.com/photo-1617191510709-3b5c7052e63e?auto=format&fit=crop&q=80&w=774', // Pochette (Clutch)
              },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="relative h-48 group overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rose-600 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-rose-100 mb-8">
              Subscribe to receive updates about new collections and exclusive
              offers
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
