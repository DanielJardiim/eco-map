import { useQuery } from "@tanstack/react-query";
import { fetchProjects, type Project } from "../services/projects";

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}
