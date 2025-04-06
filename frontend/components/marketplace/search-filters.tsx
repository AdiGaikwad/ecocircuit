"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal } from "lucide-react"

interface SearchFiltersProps {
  onSearch: (filters: any) => void
  isMobile?: boolean
}

export function SearchFilters({ onSearch, isMobile = false }: SearchFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [category, setCategory] = useState("")
  const [condition, setCondition] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const materials = [
    { id: "plastic", label: "Plastic" },
    { id: "metal", label: "Metal" },
    { id: "circuit", label: "Circuit Boards" },
    { id: "glass", label: "Glass" },
    { id: "copper", label: "Copper" },
    { id: "aluminum", label: "Aluminum" },
  ]

  const brands = [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "dell", label: "Dell" },
    { id: "hp", label: "HP" },
    { id: "lenovo", label: "Lenovo" },
    { id: "sony", label: "Sony" },
  ]

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleSearch = () => {
    onSearch({
      searchTerm,
      priceRange,
      category,
      condition,
      sortBy,
      materials: selectedMaterials,
      brands: selectedBrands,
    })
    if (isSheetOpen) setIsSheetOpen(false)
  }

  const handleReset = () => {
    setSearchTerm("")
    setPriceRange([0, 50000])
    setCategory("")
    setCondition("")
    setSortBy("relevance")
    setSelectedMaterials([])
    setSelectedBrands([])
  }

  const FiltersContent = () => (
    <>
      <div className="space-y-6">
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="mt-1.5">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="art">Art Pieces</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="gadgets">Gadgets</SelectItem>
              <SelectItem value="components">Components</SelectItem>
              <SelectItem value="raw-materials">Raw Materials</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger id="condition" className="mt-1.5">
              <SelectValue placeholder="Any Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Condition</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
              <SelectItem value="salvage">Salvage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <Label>Price Range</Label>
            <div className="text-sm text-gray-500">
              ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </div>
          </div>
          <Slider
            defaultValue={[0, 50000]}
            min={0}
            max={50000}
            step={500}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-4"
          />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="materials">
            <AccordionTrigger>Materials</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 mt-2">
                {materials.map((material) => (
                  <div key={material.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`material-${material.id}`}
                      checked={selectedMaterials.includes(material.id)}
                      onCheckedChange={() => handleMaterialChange(material.id)}
                    />
                    <label
                      htmlFor={`material-${material.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {material.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brands">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 mt-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand.id}`}
                      checked={selectedBrands.includes(brand.id)}
                      onCheckedChange={() => handleBrandChange(brand.id)}
                    />
                    <label
                      htmlFor={`brand-${brand.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex gap-2 mt-6">
        <Button variant="outline" className="flex-1" onClick={handleReset}>
          Reset
        </Button>
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white" onClick={handleSearch}>
          Apply Filters
        </Button>
      </div>
    </>
  )

  // Mobile view with sheet
  if (isMobile) {
    return (
      <div className="flex w-full gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search for products..."
            className="pl-10 pr-4 border-gray-300 focus:border-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Refine your search with these filters</SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <FiltersContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  // Desktop view
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-9 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search for products..."
          className="pl-10 pr-4 border-gray-300 focus:border-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div className="col-span-3">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-3 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-lg mb-4">Filters</h3>
          <FiltersContent />
        </div>
      </div>
      <div className="col-span-9">
        {/* This is where the product grid will be rendered */}
        {/* The parent component will handle this */}
      </div>
    </div>
  )
}

