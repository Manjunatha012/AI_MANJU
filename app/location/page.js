'use client'

import React, { useState } from 'react'
import {
  GoogleMap,
  Autocomplete,
  LoadScript,
  Marker,
} from '@react-google-maps/api'

// Google Maps API key
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const defaultCenter = {
  lat: 40.7128, // Default latitude (New York)
  lng: -74.006, // Default longitude (New York)
}

function LocationSelector() {
  const [map, setMap] = useState(null)
  const [selectedPosition, setSelectedPosition] = useState(defaultCenter)
  const [address, setAddress] = useState('')
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance)
  }

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace()
      const location = place.geometry.location

      setSelectedPosition({
        lat: location.lat(),
        lng: location.lng(),
      })
      setAddress(place.formatted_address)
    }
  }

  const onMapClick = (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    setSelectedPosition({ lat, lng })
    setAddress('') // Reset address when manually selecting a location
  }

  return (
    <div>
      <LoadScript googleMapsApiKey={API_KEY} libraries={['places']}>
        <div>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type='text'
              placeholder='Search for an address'
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </Autocomplete>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selectedPosition}
          zoom={12}
          onClick={onMapClick}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={selectedPosition} />
        </GoogleMap>
      </LoadScript>

      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Selected Address:</strong> {address || 'No address selected'}
        </p>
        <p>
          <strong>Latitude:</strong> {selectedPosition.lat}
        </p>
        <p>
          <strong>Longitude:</strong> {selectedPosition.lng}
        </p>
      </div>
    </div>
  )
}

export default LocationSelector
