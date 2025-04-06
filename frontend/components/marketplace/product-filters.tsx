import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

const CATEGORIES = [
  'Art & Decor',
  'Jewelry',
  'Electronics',
  'Components',
  'Raw Materials',
  'Furniture',
  'Fashion',
  'Gadgets',
];

const MATERIALS = [
  'Circuit Boards',
  'Metals',
  'Plastics',
  'Glass',
  'Wires',
  'Batteries',
  'Displays',
  'Mixed',
];

export interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  materials: string[];
  hasPassport: boolean;
  isVerified: boolean;
  sortBy: string;
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
  totalProducts: number;
}

export function ProductFilters({
  onFilterChange,
  initialFilters,
  totalProducts,
}: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: initialFilters?.search || '',
    category: initialFilters?.category || '',
    priceRange: initialFilters?.priceRange || [0, 1000],
    materials: initialFilters?.materials || [],
    hasPassport: initialFilters?.hasPassport || false,
    isVerified: initialFilters?.isVerified || false,
    sortBy: initialFilters?.sortBy || 'newest',
  });

  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
    
    // Count active filters
    let count = 0;
    if (updatedFilters.search) count++;
    if (updatedFilters.category) count++;
    if (updatedFilters.priceRange[0] > 0 || updatedFilters.priceRange[1] < 1000) count++;
    if (updatedFilters.materials.length > 0) count++;
    if (updatedFilters.hasPassport) count++;
    if (updatedFilters.isVerified) count++;
    if (updatedFilters.sortBy !== 'newest') count++;
    setActiveFiltersCount(count);
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      category: '',
      priceRange: [0, 1000],
      materials: [],
      hasPassport: false,
      isVerified: false,
      sortBy: 'newest',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
    setActiveFiltersCount(0);
  };

  const toggleMaterial = (material: string) => {
    const updatedMaterials = filters.materials.includes(material)
      ? filters.materials.filter(m => m !== material)
      : [...filters.materials, material];
    
    handleFilterChange({ materials: updatedMaterials });
  };

  // Desktop filters
  const DesktopFilters = () => (
    <div className="hidden space-y-6 lg:block">
      <div>
        <h3 className="mb-2 font-medium">Categories</h3>
        <div className="space-y-1">
          {CATEGORIES.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={filters.category === category}
                onCheckedChange={() => 
                  handleFilterChange({ 
                    category: filters.category === category ? '' : category 
                  })
                }
              />
              <Label
                htmlFor={`category-${category}`}
                className="ml-2 cursor-pointer text-sm"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={filters.priceRange}
            min={0}
            max={1000}
            step={10}
            onValueChange={(value) => 
              handleFilterChange({ priceRange: value as [number, number] })
            }
          />
          <div className="mt-2 flex items-center justify-between text-sm">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Materials</h3>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.map((material) => (
            <Badge
              key={material}
              variant={filters.materials.includes(material) ? "default" : "outline"}
              className={`cursor-pointer ${
                filters.materials.includes(material)
                  ? "bg-purple-100 text-purple-800 hover:bg-purple-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => toggleMaterial(material)}
            >
              {material}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Verification</h3>
        <div className="flex items-center">
          <Checkbox
            id="has-passport"
            checked={filters.hasPassport}
            onCheckedChange={(checked) => 
              handleFilterChange({ hasPassport: checked as boolean })
            }
          />
          <Label htmlFor="has-passport" className="ml-2 cursor-pointer text-sm">
            Has Digital Passport
          </Label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="is-verified"
            checked={filters.isVerified}
            onCheckedChange={(checked) => 
              handleFilterChange({ isVerified: checked as boolean })
            }
          />
          <Label htmlFor="is-verified" className="ml-2 cursor-pointer text-sm">
            Verified Seller
          </Label>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          className="w-full"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="mb-8">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="pl-10"
          />
        </div>
        
        <Select
          value={filters.sortBy}
          onValueChange={(value) => handleFilterChange({ sortBy: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="rewards">Most Rewards</SelectItem>
          </SelectContent>
        </Select>

        {/* Mobile filters */}
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2 lg:hidden">
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Categories</h3>
                <div className="grid grid-cols-2 gap-1">
                  {CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`mobile-category-${category}`}
                        checked={filters.category === category}
                        onCheckedChange={() => 
                          handleFilterChange({ 
                            category: filters.category === category ? '' : category 
                          })
                        }
                      />
                      <Label
                        htmlFor={`mobile-category-${category}`}
                        className="ml-2 cursor-pointer text-sm"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={filters.priceRange}
                    min={0}
                    max={1000}
                    step={10}
                    onValueChange={(value) => 
                      handleFilterChange({ priceRange: value as [number, number] })
                    }
                  />
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {MATERIALS.map((material) => (
                    <Badge
                      key={material}
                      variant={filters.materials.includes(material) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        filters.materials.includes(material)
                          ? "bg-purple-100 text-purple-800 hover:bg-purple-200"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => toggleMaterial(material)}
                    >
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Verification</h3>
                <div className="flex items-center">
                  <Checkbox
                    id="mobile-has-passport"
                    checked={filters.hasPassport}
                    onCheckedChange={(checked) => 
                      handleFilterChange({ hasPassport: checked as boolean })
                    }
                  />
                  <Label htmlFor="mobile-has-passport" className="ml-2 cursor-pointer text-sm">
                    Has Digital Passport
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="mobile-is-verified"
                    checked={filters.isVerified}
                    onCheckedChange={(checked) => 
                      handleFilterChange({ isVerified: checked as boolean })
                    }
                  />
                  <Label htmlFor="mobile-is-verified" className="ml-2 cursor-pointer text-sm">
                    Verified Seller
                  </Label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </Button>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                  >
                    <X size={16} />
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-8">
        <div className="w-64 shrink-0">
          <DesktopFilters />
        </div>
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{totalProducts}</span> products
            </p>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            )}
          </div>
          {/* Product grid will be rendered here by the parent component */}
        </div>
      </div>
    </div>
  );
}
