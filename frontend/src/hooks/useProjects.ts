import { useQuery } from "@tanstack/react-query";
import {
  fetchProjects,
  fetchProjectsByName,
  type Project,
} from "../services/projects";

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

export function useProjectsByName(name: string) {
  return useQuery<Project[]>({
    queryKey: ["projects", name],
    queryFn: () => fetchProjectsByName(name),
    enabled: !!name.trim(),
  });
}
