export interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: 'Men' | 'Women' | 'Luxury';
  hasCase: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    brand: 'Ray-Ban',
    model: 'Classic Aviator',
    price: 10000,
    description: 'The world\'s most iconic eyewear for a timeless look.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    hasCase: true
  },
  {
    id: '2',
    brand: 'Gucci',
    model: 'Luxury Black Edition',
    price: 45000,
    description: 'Sophisticated design with high-quality acetate frames.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511499767350-a1590fdb28bf?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury',
    hasCase: true
  },
  {
    id: '3',
    brand: 'Prada',
    model: 'Premium Silver Frame',
    price: 65000,
    description: 'Modern elegance with a sleek metallic finish.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800',
    category: 'Women',
    hasCase: true
  },
  {
    id: '4',
    brand: 'Cartier',
    model: 'Diamond Collection',
    price: 150000,
    description: 'Exquisite craftsmanship with genuine diamond accents.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1508296696981-99934a1ac20d?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury',
    hasCase: true
  },
  {
    id: '5',
    brand: 'Louis Vuitton',
    model: 'Cannes Midnight',
    price: 85000,
    description: 'A bold statement of style and luxury craftsmanship.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury',
    hasCase: true
  },
  {
    id: '6',
    brand: 'Versace',
    model: 'Medusa Gold Tribute',
    price: 55000,
    description: 'Ornate gold details reflecting the spirit of Versace.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1509100104048-ae1290216b1f?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    hasCase: true
  },
  {
    id: '7',
    brand: 'Oakley',
    model: 'Holbrook Prizm',
    price: 25000,
    description: 'High-performance eyewear for the active lifestyle.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c24ad?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    hasCase: true
  },
  {
    id: '8',
    brand: 'Dior',
    model: 'Stellaire One',
    price: 75000,
    description: 'Refined femininity with oversized square frames.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800',
    category: 'Women',
    hasCase: true
  },
  {
    id: '9',
    brand: 'Tom Ford',
    model: 'Snowdon Classic',
    price: 40000,
    description: 'Vintage-inspired silhouette with modern sophistication.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b252109?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    hasCase: true
  },
  {
    id: '10',
    brand: 'Armani',
    model: 'Geometric Black',
    price: 35000,
    description: 'Understated luxury with clean geometric lines.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1625591339762-41dd952e47c0?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    hasCase: true
  }
];
