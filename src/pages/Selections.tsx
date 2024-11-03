import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';

const selections = [
  {
    id: 7,
    name: 'Limited Edition Tote',
    price: 599,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
    rating: 5.0,
    category: 'Limited Edition',
  },
  {
    id: 8,
    name: 'Designer Clutch',
    price: 449,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=871',
    rating: 4.9,
    category: 'Designer Collection',
  },
  {
    id: 9,
    name: 'Signature Shoulder Bag',
    price: 699,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    rating: 5.0,
    category: 'Signature Series',
  },
];

export default function Selections() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Curated Selections"
        description="Exclusive pieces chosen for their exceptional quality and design"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {selections.map((bag) => (
            <ProductCard key={bag.id} {...bag} />
          ))}
        </div>
      </div>
    </div>
  );
}