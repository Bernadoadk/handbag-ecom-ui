import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export default function ProductCard({ id, name, price, image, rating, category }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
            <Link to={`/bags/${id}`}>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-rose-600">{name}</h3>
            </Link>
            <p className="text-sm text-gray-600 mb-2">{category}</p>
            <div className="flex justify-between items-center">
              <p className="text-rose-600 font-medium">${price}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}