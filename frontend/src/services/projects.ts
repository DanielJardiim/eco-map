import { api } from "./api";

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Project {
  id: string;
  name: string;
  status: string;
  responsibleResearcher: string;
  geometry: Geometry;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");
  return response.data;
};
