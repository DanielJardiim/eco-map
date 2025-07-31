import { api } from "./api";

export interface Geometry {
  type: "Point" | "Polygon" | "Circle";
  coordinates: number[];
}

export interface Project {
  id: string;
  name: string;
  status: string;
  responsibleResearcher: string;
  geometry: Geometry;
  createdAt: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");
  return response.data;
};

export const fetchProjectsByName = async (name: string): Promise<Project[]> => {
  const response = await api.get("/projects/search", {
    params: { name },
  });
  return response.data;
};
