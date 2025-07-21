"use client";
import { useState } from "react";
// import Map from "../Map"
import Map from "./Map";
import {
  Info,
  Recycle,
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  X,
  Zap,
  Trash2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-mobile";

// Sample data for e-waste facilities
const EWASTE_FACILITIES = [
  {
    id: 1,
    name: "EcoTech Recycling Center",
    address: "123 Green St, Pune, Maharashtra",
    coordinates: [73.8567, 18.5204],
    type: "recycling",
    distance: 3.2,
    openHours: "9:00 AM - 5:00 PM",
    phone: "+91 98765 43210",
    email: "contact@ecotech.com",
    website: "https://ecotech-recycling.com",
    description:
      "Full-service recycling facility for all types of electronic waste. We specialize in environmentally responsible recycling of computers, monitors, phones, and other electronic devices.",
    acceptedItems: [
      "Computers",
      "Laptops",
      "Mobile Phones",
      "Tablets",
      "Printers",
      "Batteries",
    ],
    rating: 4.7,
    reviews: 128,
    images: ["/recycling-center.png"],
  },
  {
    id: 2,
    name: "Digital Waste Collection Point",
    address: "456 Tech Ave, Pune, Maharashtra",
    coordinates: [73.9014, 18.5308],
    type: "collection",
    distance: 5.7,
    openHours: "8:00 AM - 6:00 PM",
    phone: "+91 87654 32109",
    email: "info@digitalwaste.org",
    description:
      "Community drop-off point for small electronics and batteries. We ensure all collected items are properly sorted and sent to certified recycling facilities.",
    acceptedItems: ["Small Electronics", "Batteries", "Cables", "Chargers"],
    rating: 4.2,
    reviews: 56,
    images: ["/ewaste-collection.png"],
  },
  {
    id: 3,
    name: "GreenBytes Refurbishment",
    address: "789 Circuit Rd, Pune, Maharashtra",
    coordinates: [73.8223, 18.4929],
    type: "refurbishment",
    distance: 7.1,
    openHours: "10:00 AM - 4:00 PM",
    phone: "+91 76543 21098",
    email: "support@greenbytes.in",
    website: "https://greenbytes.in",
    description:
      "Specializes in refurbishing computers and mobile devices for reuse. We repair and upgrade old electronics to extend their lifecycle and reduce e-waste.",
    acceptedItems: ["Computers", "Laptops", "Mobile Phones", "Tablets"],
    rating: 4.9,
    reviews: 203,
    images: ["/ewaste-collection.png"],
  },
  {
    id: 4,
    name: "E-Cycle Collection Hub",
    address: "234 Processor Lane, Pune, Maharashtra",
    coordinates: [73.7898, 18.5912],
    type: "collection",
    distance: 8.4,
    openHours: "9:00 AM - 7:00 PM",
    phone: "+91 65432 10987",
    description:
      "Community collection center for all electronic devices. We provide a convenient drop-off location for residents and small businesses.",
    acceptedItems: ["All Electronic Devices", "Batteries", "Appliances"],
    rating: 4.3,
    reviews: 87,
    images: ["/ewaste-collection-hub.png"],
  },
  {
    id: 5,
    name: "TechRenew Processing Plant",
    address: "567 Motherboard St, Pune, Maharashtra",
    coordinates: [73.9287, 18.4567],
    type: "recycling",
    distance: 10.2,
    openHours: "24 hours",
    phone: "+91 54321 09876",
    email: "operations@techrenew.co.in",
    website: "https://techrenew.co.in",
    description:
      "Industrial-scale e-waste processing and material recovery. Our state-of-the-art facility handles large volumes of electronic waste and recovers valuable materials.",
    acceptedItems: [
      "All Electronic Waste",
      "Industrial Equipment",
      "Commercial Electronics",
    ],
    rating: 4.5,
    reviews: 142,
    images: ["/ewaste-collection-hub.png"],
  },
  {
    id: 6,
    name: "CircuitBreak Recyclers",
    address: "890 Silicon Valley, Pune, Maharashtra",
    coordinates: [73.8823, 18.5512],
    type: "recycling",
    distance: 6.8,
    openHours: "8:30 AM - 5:30 PM",
    phone: "+91 43210 98765",
    email: "hello@circuitbreak.in",
    description:
      "Specialized in recycling circuit boards and electronic components. We extract precious metals and ensure hazardous materials are properly handled.",
    acceptedItems: [
      "Circuit Boards",
      "Computer Parts",
      "Electronic Components",
    ],
    rating: 4.6,
    reviews: 98,
    images: ["/recycling-center.png"],
  },
  {
    id: 7,
    name: "GadgetGive Donation Center",
    address: "123 Charity Lane, Pune, Maharashtra",
    coordinates: [73.8102, 18.5723],
    type: "refurbishment",
    distance: 4.5,
    openHours: "10:00 AM - 6:00 PM",
    phone: "+91 32109 87654",
    email: "donate@gadgetgive.org",
    website: "https://gadgetgive.org",
    description:
      "We accept working electronics for donation to schools and underprivileged communities. All donated items are tested, cleaned, and refurbished if needed.",
    acceptedItems: [
      "Working Computers",
      "Laptops",
      "Tablets",
      "Smartphones",
      "Educational Electronics",
    ],
    rating: 4.8,
    reviews: 176,
    images: ["/ewaste-collection-hub.png"],
  },
  {
    id: 8,
    name: "BatteryBin Collection Point",
    address: "456 Power Street, Pune, Maharashtra",
    coordinates: [73.9345, 18.4876],
    type: "collection",
    distance: 9.3,
    openHours: "9:00 AM - 8:00 PM",
    phone: "+91 21098 76543",
    description:
      "Specialized in collecting and safely disposing of all types of batteries. We ensure hazardous battery materials don't end up in landfills.",
    acceptedItems: [
      "All Battery Types",
      "Phone Batteries",
      "Laptop Batteries",
      "Car Batteries",
    ],
    rating: 4.4,
    reviews: 63,
    images: ["/ewaste-collection-hub.png"],
  },
];

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFacility, setSelectedFacility] = useState<any>(null);
  const [sortOption, setSortOption] = useState("distance");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleMarkerClick = (facility: any) => {
    setSelectedFacility(facility);
    setIsDetailOpen(true);
  };

  // Filter and sort facilities
  const filteredFacilities = EWASTE_FACILITIES.filter((facility) => {
    const matchesFilter = !activeFilter || facility.type === activeFilter;
    const matchesSearch =
      !searchQuery ||
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    if (sortOption === "distance") {
      return a.distance - b.distance;
    } else if (sortOption === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Facility Detail Component
  const FacilityDetail = () => (
    <>
      {selectedFacility && (
        <div className="space-y-6">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img
              src={
                selectedFacility.images?.[0] ||
                "/placeholder.svg?height=200&width=400&query=recycling%20facility"
              }
              alt={selectedFacility.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent"></div>
            <Badge
              className="absolute top-4 right-4"
              style={{
                backgroundColor:
                  selectedFacility.type === "recycling"
                    ? "#10b981"
                    : selectedFacility.type === "collection"
                    ? "#3b82f6"
                    : "#f59e0b",
              }}
            >
              {selectedFacility.type}
            </Badge>
          </div>

          <div className="px-4">
            <h2 className="text-2xl font-bold">{selectedFacility.name}</h2>
            <div className="flex items-center mt-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{selectedFacility.address}</span>
            </div>

            {selectedFacility.rating && (
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(selectedFacility.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">
                  {selectedFacility.rating} ({selectedFacility.reviews} reviews)
                </span>
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Hours</h3>
                  <p className="text-sm">{selectedFacility.openHours}</p>
                </div>
              </div>

              {selectedFacility.phone && (
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Phone</h3>
                    <p className="text-sm">{selectedFacility.phone}</p>
                  </div>
                </div>
              )}

              {selectedFacility.email && (
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Email</h3>
                    <p className="text-sm">{selectedFacility.email}</p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <h3 className="font-medium mb-2">About</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedFacility.description}
                </p>
              </div>

              {selectedFacility.acceptedItems && (
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Accepted Items</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFacility.acceptedItems.map(
                      (item: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {item}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-8 mb-4">
              <Button className="flex-1">
                Get Directions
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              {selectedFacility.website && (
                <Button variant="outline" className="flex-1" asChild>
                  <a
                    href={selectedFacility.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="py-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <Recycle className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            E-Waste Facility Locator
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Find the nearest e-waste collection, recycling, and refurbishment
            centers to responsibly dispose of your electronic waste.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for facilities by name or location..."
              className="pl-10 pr-10 py-6 rounded-full border-green-200 focus:border-green-400 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Filter Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeFilter === "collection" ? "default" : "outline"}
                className="cursor-pointer transition-colors hover:bg-primary/90"
                onClick={() => handleFilterChange("collection")}
              >
                Collection Centers
              </Badge>
              <Badge
                variant={activeFilter === "recycling" ? "default" : "outline"}
                className="cursor-pointer transition-colors hover:bg-primary/90"
                onClick={() => handleFilterChange("recycling")}
              >
                Recycling Plants
              </Badge>
              <Badge
                variant={
                  activeFilter === "refurbishment" ? "default" : "outline"
                }
                className="cursor-pointer transition-colors hover:bg-primary/90"
                onClick={() => handleFilterChange("refurbishment")}
              >
                Refurbishment Centers
              </Badge>
              {activeFilter && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs"
                  onClick={() => setActiveFilter(null)}
                >
                  Clear Filter
                </Button>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">
                Sort by:
              </span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[140px] h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs for Map and List View */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="map"
                  className="data-[state=active]:bg-green-50"
                >
                  Map View
                </TabsTrigger>
                <TabsTrigger
                  value="list"
                  className="data-[state=active]:bg-green-50"
                >
                  List View
                </TabsTrigger>
              </TabsList>

              {/* Map View */}
              <TabsContent value="map" className="p-0">
                <Map
                  activeFilter={activeFilter}
                  facilities={EWASTE_FACILITIES}
                  searchQuery={searchQuery}
                  onMarkerClick={handleMarkerClick}
                />
              </TabsContent>

              {/* List View */}
              <TabsContent value="list">
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">
                      {filteredFacilities.length}{" "}
                      {filteredFacilities.length === 1
                        ? "Facility"
                        : "Facilities"}{" "}
                      Found
                    </h2>
                  </div>

                  {filteredFacilities.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center p-3 bg-muted rounded-full mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">
                        No facilities found
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or filters
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveFilter(null);
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredFacilities.map((facility) => (
                        <Card
                          key={facility.id}
                          className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleMarkerClick(facility)}
                        >
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-1/3 h-24 sm:h-auto">
                              <img
                                src={
                                  facility.images?.[0] ||
                                  "/placeholder.svg?height=150&width=150&query=recycling%20facility"
                                }
                                alt={facility.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="sm:w-2/3 p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium line-clamp-1">
                                    {facility.name}
                                  </h3>
                                  <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                                    {facility.address}
                                  </p>
                                  <Badge
                                    variant="outline"
                                    className="mt-2"
                                    style={{
                                      color:
                                        facility.type === "recycling"
                                          ? "#10b981"
                                          : facility.type === "collection"
                                          ? "#3b82f6"
                                          : "#f59e0b",
                                      borderColor:
                                        facility.type === "recycling"
                                          ? "#10b981"
                                          : facility.type === "collection"
                                          ? "#3b82f6"
                                          : "#f59e0b",
                                    }}
                                  >
                                    {facility.type}
                                  </Badge>
                                </div>
                                <div className="text-right">
                                  <span className="font-medium text-sm">
                                    {facility.distance} km
                                  </span>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {facility.openHours}
                                  </p>
                                </div>
                              </div>

                              {facility.acceptedItems && (
                                <div className="mt-3">
                                  <p className="text-xs text-muted-foreground mb-1">
                                    Accepts:
                                  </p>
                                  <p className="text-xs line-clamp-1">
                                    {facility.acceptedItems
                                      .slice(0, 3)
                                      .join(", ")}
                                    {facility.acceptedItems.length > 3 &&
                                      ` +${
                                        facility.acceptedItems.length - 3
                                      } more`}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Trash2 className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Why Recycle E-Waste?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Electronic waste contains toxic materials like lead, mercury,
                  and cadmium that can harm the environment and human health if
                  not disposed of properly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Recycling Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  E-waste recycling involves collection, sorting, dismantling,
                  and processing to recover valuable materials like gold,
                  silver, copper, and rare earth elements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proper e-waste recycling reduces landfill waste, conserves
                  natural resources, prevents pollution, and reduces greenhouse
                  gas emissions from manufacturing new products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-muted-foreground border-t">
          <div className="max-w-md mx-auto">
            <p>
              Help keep our environment clean by properly recycling your
              electronic waste.
            </p>
            <p className="mt-1">Data last updated: May 2024</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </footer>
      </div>

      {/* Facility Detail Modal/Drawer */}
      {isMobile ? (
        <Drawer open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DrawerContent>
            <DrawerHeader className="p-0">
              <DrawerTitle className="sr-only">Facility Details</DrawerTitle>
            </DrawerHeader>
            <FacilityDetail />
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
            <DialogHeader className="sr-only">
              <DialogTitle>Facility Details</DialogTitle>
            </DialogHeader>
            <FacilityDetail />
          </DialogContent>
        </Dialog>
      )}

      {/* Info Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-10 bg-white"
          >
            <Info className="h-5 w-5" />
            <span className="sr-only">Information</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>About E-Waste Recycling</SheetTitle>
            <SheetDescription>
              E-waste or electronic waste refers to discarded electronic devices
              and equipment.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <h3 className="font-medium">Why Recycle E-Waste?</h3>
            <p className="text-sm text-muted-foreground">
              Electronic waste contains toxic materials that can harm the
              environment and human health if not disposed of properly.
              Recycling e-waste helps recover valuable materials and reduces the
              need for mining raw materials.
            </p>
            <h3 className="font-medium">Types of Facilities</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <span className="font-medium">Collection Centers:</span>{" "}
                Drop-off points for e-waste
              </li>
              <li>
                <span className="font-medium">Recycling Plants:</span> Process
                e-waste for material recovery
              </li>
              <li>
                <span className="font-medium">Refurbishment Centers:</span>{" "}
                Repair and refurbish electronics for reuse
              </li>
            </ul>
            <h3 className="font-medium">What Can Be Recycled?</h3>
            <p className="text-sm text-muted-foreground">
              Almost all electronic devices can be recycled, including
              computers, laptops, mobile phones, tablets, TVs, printers,
              batteries, and household appliances.
            </p>
          </div>
          <SheetFooter className="mt-6">
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Page;
