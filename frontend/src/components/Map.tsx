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
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />

      {projects.map((project) => {
        const { geometry } = project;

        if (!geometry || !geometry.type || !geometry.coordinates) {
          return null; // segurança extra
        }

        if (geometry.type === "Point") {
          const [lng, lat] = geometry.coordinates as [number, number];
          return (
            <Marker key={project.id} position={[lat, lng]}>
              <Popup>{project.name}</Popup>
            </Marker>
          );
        }

        if (geometry.type === "Polygon") {
          const rawCoords = geometry.coordinates as any;

          const polygonCoords = Array.isArray(rawCoords[0])
            ? rawCoords[0].map(
                ([lng, lat]: [number, number]) => [lat, lng] as LatLngExpression
              )
            : [];

          return (
            <Polygon key={project.id} positions={polygonCoords}>
              <Popup>{project.name}</Popup>
            </Polygon>
          );
        }

        if (geometry.type === "Circle") {
          const [lng, lat] = geometry.coordinates as [number, number];
          return (
            <Circle
              key={project.id}
              center={[lat, lng]}
              radius={1000}
              color="blue"
            >
              <Popup>{project.name}</Popup>
            </Circle>
          );
        }

        return null;
      })}
    </MapContainer>
  );
}
