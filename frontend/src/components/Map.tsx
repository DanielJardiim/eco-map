import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Circle,
} from "react-leaflet";
import type { Project } from "../services/projects";
import type { LatLngExpression } from "leaflet";

interface MapProps {
  projects: Project[];
}

export default function Map({ projects }: MapProps) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      {projects.map((project) => {
        const { id, name, geometry } = project;

        switch (geometry.type) {
          case "Point": {
            const [lng, lat] = geometry.coordinates as [number, number];
            return (
              <Marker key={id} position={[lat, lng]}>
                <Popup>{name}</Popup>
              </Marker>
            );
          }

          case "Polygon": {
            const coords = geometry.coordinates;

            if (
              Array.isArray(coords) &&
              Array.isArray(coords[0]) &&
              Array.isArray(coords[0][0])
            ) {
              const polygon: LatLngExpression[] = coords[0].map(
                ([lng, lat]: [number, number]) => [lat, lng]
              );

              return (
                <Polygon key={id} positions={polygon}>
                  <Popup>{name}</Popup>
                </Polygon>
              );
            }

            return null;
          }

          case "Circle": {
            const [lng, lat] = geometry.coordinates as [number, number];
            return (
              <Circle key={id} center={[lat, lng]} radius={1000} color="blue">
                <Popup>{name}</Popup>
              </Circle>
            );
          }

          default:
            return null;
        }
      })}
    </MapContainer>
  );
}
