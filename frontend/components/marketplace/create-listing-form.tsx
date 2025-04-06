"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Upload, X, Plus, Info } from "lucide-react"

export function CreateListingForm() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [condition, setCondition] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [images, setImages] = useState<string[]>([])
  const [materials, setMaterials] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [deviceId, setDeviceId] = useState("")
  const [showDeviceInfo, setShowDeviceInfo] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleMaterialToggle = (material: string) => {
    setMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")

    // Validate form
    if (!title || !description || !category || !condition || !price || !quantity) {
      setFormError("Please fill in all required fields")
      return
    }

    if (images.length === 0) {
      setFormError("Please upload at least one image")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to the new listing
      router.push("/marketplace/product/new-listing-id")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {formError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p>{formError}</p>
        </div>
      )}

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="details">Details & Specs</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="title">
              Product Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product in detail"
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">
                Category <span className="text-red-500">*</span>
              </Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="art">Art Pieces</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="gadgets">Gadgets</SelectItem>
                  <SelectItem value="components">Components</SelectItem>
                  <SelectItem value="raw-materials">Raw Materials</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">
                Condition <span className="text-red-500">*</span>
              </Label>
              <Select value={condition} onValueChange={setCondition} required>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="like-new">Like New</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="salvage">Salvage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">
                Price (₹) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">
                Quantity <span className="text-red-500">*</span>
              </Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>
              Product Images <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-md overflow-hidden border border-gray-200">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white/80 backdrop-blur-sm rounded-full p-1 hover:bg-white"
                  >
                    <X className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              ))}
              <label className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Upload Image</span>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
            <p className="text-xs text-gray-500">
              You can upload up to 8 images. First image will be used as the main product image.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label>Materials Used</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Plastic", "Metal", "Circuit Boards", "Glass", "Copper", "Aluminum", "Silicon", "Gold", "Silver"].map(
                (material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox
                      id={`material-${material}`}
                      checked={materials.includes(material)}
                      onCheckedChange={() => handleMaterialToggle(material)}
                    />
                    <label
                      htmlFor={`material-${material}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {material}
                    </label>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dimensions">Dimensions (cm)</Label>
            <div className="grid grid-cols-3 gap-4">
              <Input id="length" placeholder="Length" />
              <Input id="width" placeholder="Width" />
              <Input id="height" placeholder="Height" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight (g)</Label>
            <Input id="weight" type="number" min="0" placeholder="Enter weight" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">Brand/Manufacturer</Label>
            <Input id="brand" placeholder="Enter brand or manufacturer" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input id="tags" placeholder="e.g., eco-friendly, handmade, vintage" />
            <p className="text-xs text-gray-500">Add relevant tags to help buyers find your product</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="shipping">Shipping Information</Label>
            <Textarea
              id="shipping"
              placeholder="Provide shipping details, handling time, etc."
              className="min-h-[100px]"
            />
          </div>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-6 pt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Blockchain Verification</h4>
                <p className="text-sm text-blue-700">
                  Link your product to a registered device on our blockchain to verify its origin and lifecycle. This
                  increases trust and transparency for buyers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="deviceId">Device ID</Label>
              <Button
                type="button"
                variant="link"
                size="sm"
                className="text-purple-600 h-auto p-0"
                onClick={() => setShowDeviceInfo(!showDeviceInfo)}
              >
                {showDeviceInfo ? "Hide" : "Show"} my registered devices
              </Button>
            </div>
            <Input
              id="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              placeholder="Enter blockchain device ID"
            />
            <p className="text-xs text-gray-500">Enter the ID of a device you've registered on our blockchain</p>
          </div>

          {showDeviceInfo && (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h4 className="font-medium">Your Registered Devices</h4>
              </div>
              <div className="p-4 space-y-3">
                {[
                  {
                    id: "0x7a69c0d72eb53c9f8c9a6d6e6b6d6e6b6d6e6b6d",
                    name: "iPhone 13 Pro",
                    date: "May 15, 2023",
                  },
                  {
                    id: "0x8b7ac1e83fc64d0d9b7bd7f7c7bd7f7c7bd7f7c7b",
                    name: "Dell XPS 15",
                    date: "June 10, 2023",
                  },
                ].map((device) => (
                  <div
                    key={device.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => setDeviceId(device.id)}
                  >
                    <div>
                      <p className="font-medium">{device.name}</p>
                      <p className="text-xs text-gray-500">Registered on {device.date}</p>
                      <p className="text-xs font-mono text-gray-500 truncate max-w-xs">{device.id}</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-purple-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        setDeviceId(device.id)
                      }}
                    >
                      Select
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-purple-600 border-purple-200 hover:bg-purple-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Register a New Device
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="verifyOrigin" />
              <label
                htmlFor="verifyOrigin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Verify product origin and components
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="verifyRecycled" />
              <label
                htmlFor="verifyRecycled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Certify as recycled/upcycled product
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="showLifecycle" />
              <label
                htmlFor="showLifecycle"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Display full product lifecycle to buyers
              </label>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Creating Listing...
            </>
          ) : (
            "Create Listing"
          )}
        </Button>
      </div>
    </form>
  )
}

