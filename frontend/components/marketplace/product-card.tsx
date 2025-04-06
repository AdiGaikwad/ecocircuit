import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  isVerified: boolean;
  hasPassport: boolean;
  tokenRewards: number;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  category,
  rating,
  seller,
  isVerified,
  hasPassport,
  tokenRewards,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
console.log(seller)
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0 relative">
        <Link href={`/marketplace/product/${id}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || `/placeholder.svg?height=192&width=384`}
              alt={title || " Product "}
              fill
              
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Heart
            size={18}
            className={`${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`}
          />
        </button>
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {hasPassport && (
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              Digital Passport
            </Badge>
          )}
          {isVerified && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Verified
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <Badge variant="outline" className="bg-purple-50">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-amber-500">
            {'★'.repeat(Math.round(rating))}
            {'☆'.repeat(5 - Math.round(rating))}
          </div>
        </div>
        <Link href={`/marketplace/product/${id}`} className="group-hover:text-purple-600">
          <h3 className="line-clamp-2 font-medium">{title}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <Link href={`/marketplace/seller/${seller.id}`} className="text-sm text-gray-600 hover:text-purple-600">
            by {seller.name}
          </Link>
          {tokenRewards > 0 && (
            <Badge variant="outline" className="bg-purple-50 text-purple-700">
              +{tokenRewards} Tokens
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="text-lg font-bold text-purple-700"> ₹ {price.toFixed(2)}</div>
        <Button size="sm" className="gap-1">
          <ShoppingCart size={16} /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
