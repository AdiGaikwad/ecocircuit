"use client"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import mapboxgl from "mapbox-gl"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"
import { Loader2 } from "lucide-react"

// Define marker colors for different facility types
const MARKER_COLORS = {
  collection: "#3b82f6", // blue
  recycling: "#10b981", // green
  refurbishment: "#f59e0b", // amber
}

interface MapProps {
  activeFilter: string | null
  facilities: any[]
  searchQuery: string
  onMarkerClick: (facility: any) => void
}

const Map: React.FC<MapProps> = ({ activeFilter, facilities, searchQuery, onMarkerClick }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [loading, setLoading] = useState(true)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)

  // Filter facilities based on activeFilter and searchQuery
  const getFilteredFacilities = () => {
    return facilities.filter((facility) => {
      const matchesFilter = !activeFilter || facility.type === activeFilter
      const matchesSearch =
        !searchQuery ||
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.address.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2VzaGF2Mjk5MDMiLCJhIjoiY2xzYTBsbGtzMDk3ZjJqcnZpNmFzdjJiNyJ9.L-CQ34IUBGFjmeaH6jeZRQ"

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/keshav29903/clsikgc9301iq01qsazd4f5dd",
      center: [73.415414748692072, 18.9183717632871],
      zoom: 8,
      attributionControl: false,
    })

    // Add geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for a location",
      marker: false,
    })

    map.current.addControl(geocoder, "top-left")

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right")

    // Add geolocate control
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })

    map.current.addControl(geolocate, "bottom-right")

    // Add attribution control
    map.current.addControl(new mapboxgl.AttributionControl(), "bottom-left")

    // When map loads
    map.current.on("load", () => {
      setLoading(false)

      // Try to get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords
            setUserLocation([longitude, latitude])
            map.current?.flyTo({
              center: [longitude, latitude],
              zoom: 11,
              essential: true,
            })
          },
          (error) => {
            console.error("Error getting user location:", error)
          },
        )
      }

      // Add facilities to map
      addFacilitiesToMap()
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  // Add facilities to map
  const addFacilitiesToMap = () => {
    if (!map.current) return

    // Clear existing markers
    markers.current.forEach((marker) => marker.remove())
    markers.current = []

    // Get filtered facilities
    const filteredFacilities = getFilteredFacilities()

    // Add markers for each facility
    filteredFacilities.forEach((facility) => {
      // Create custom marker element
      const el = document.createElement("div")
      el.className = "marker"
      el.style.width = "30px"
      el.style.height = "30px"
      el.style.borderRadius = "50%"
      el.style.backgroundColor = MARKER_COLORS[facility.type as keyof typeof MARKER_COLORS]
      el.style.border = "3px solid white"
      el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)"
      el.style.cursor = "pointer"
      el.style.transition = "transform 0.2s ease-in-out"

      // Add hover effect
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)"
      })

      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)"
      })

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        maxWidth: "300px",
      }).setHTML(`
        <div class="facility-popup">
          <div class="facility-popup-header" style="background-color: ${MARKER_COLORS[facility.type as keyof typeof MARKER_COLORS]};">
            <h3>${facility.name}</h3>
            <span class="facility-type">${facility.type}</span>
          </div>
          <div class="facility-popup-content">
            <p class="facility-address">
              <span class="icon">📍</span> ${facility.address}
            </p>
            <p class="facility-hours">
              <span class="icon">🕒</span> ${facility.openHours || "Hours not available"}
            </p>
            ${facility.phone ? `<p class="facility-phone"><span class="icon">📞</span> ${facility.phone}</p>` : ""}
            ${facility.email ? `<p class="facility-email"><span class="icon">✉️</span> ${facility.email}</p>` : ""}
            <p class="facility-description">${facility.description || "No description available"}</p>
            <button class="view-details-btn">View Details</button>
          </div>
        </div>
      `)

      // Add marker to map
      const marker = new mapboxgl.Marker(el)
        .setLngLat(facility.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!)

      // Add click event to marker
      el.addEventListener("click", () => {
        // Close any open popups
        document.querySelectorAll(".mapboxgl-popup").forEach((popup) => {
          popup.remove()
        })

        // Open this popup
        marker.togglePopup()

        // Add click event to the "View Details" button in popup
        setTimeout(() => {
          const viewDetailsBtn = document.querySelector(".view-details-btn")
          if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener("click", (e) => {
              e.preventDefault()
              onMarkerClick(facility)
            })
          }
        }, 100)
      })

      markers.current.push(marker)
    })

    // Fit map to markers if there are any
    if (filteredFacilities.length > 0 && !userLocation) {
      const bounds = new mapboxgl.LngLatBounds()
      filteredFacilities.forEach((facility) => {
        bounds.extend(facility.coordinates as [number, number])
      })
      map.current.fitBounds(bounds, { padding: 50 })
    }
  }

  // Update markers when activeFilter or searchQuery changes
  useEffect(() => {
    if (map.current) {
      addFacilitiesToMap()
    }
  }, [activeFilter, searchQuery, facilities])

  return (
    <div className="relative rounded-lg overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 rounded-lg">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
            <span className="text-sm font-medium">Loading map...</span>
          </div>
        </div>
      )}
      <div id="map" ref={mapContainer} className="w-full h-[70vh] md:h-[80vh] rounded-lg" />
      <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md shadow-md text-xs z-[5]">
        <h4 className="font-semibold mb-2 text-sm">Facility Types</h4>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MARKER_COLORS.collection }}></div>
          <span>Collection Center</span>
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MARKER_COLORS.recycling }}></div>
          <span>Recycling Plant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MARKER_COLORS.refurbishment }}></div>
          <span>Refurbishment Center</span>
        </div>
      </div>
    </div>
  )
}

export default Map
