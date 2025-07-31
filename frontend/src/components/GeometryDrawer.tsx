import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

interface GeometryDrawerProps {
  onDraw: (geometryType: string, coordinates: any) => void;
}

export const GeometryDrawer: React.FC<GeometryDrawerProps> = ({ onDraw }) => {
  return (
    <MapContainer
      center={[-15, -47]}
      zoom={4}
      style={{ height: "300px", marginTop: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FeatureGroup>
        <EditControl
          position="topright"
          draw={{
            rectangle: false,
            circlemarker: false,
          }}
          onCreated={(e) => {
            const geojson = e.layer.toGeoJSON();
            const { type, coordinates } = geojson.geometry;
            onDraw(type, coordinates);
          }}
          onDeleted={() => {
            onDraw("", "");
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
};
