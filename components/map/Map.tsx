'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap, } from "react-leaflet";
import L from 'leaflet';
import { IPData } from "@/types/ip";
import { useEffect } from "react";

const customIcon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
}); 

type MapProps = {
  data: IPData | null;
} 

type RecenterMapProps = {
  lat: number;
  lng: number;
}

function RecenterMap({ lat, lng }: RecenterMapProps) {
  const map = useMap();

  useEffect(() => {
  map.setView([lat, lng], map.getZoom(), { animate: true });
  }, [lat, lng, map]);
  return null;
}

export default function Map({data}: MapProps) {
  const lat = data?.location?.lat ?? 51.505;
  const lng = data?.location?.lng ?? -0.09;

  return (
    <MapContainer
      key="map"
      center={[lat, lng]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[650px] w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RecenterMap lat={lat} lng={lng} />

      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          {data?.ip ?? 'Derfault Location'}
        </Popup>
      </Marker>
    </MapContainer>
  );
}