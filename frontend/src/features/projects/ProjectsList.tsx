import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../services/projects";
import type { Project } from "../../services/projects";

export const ProjectsList: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects</p>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data?.map((project: Project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> - {project.status} -{" "}
            {project.responsibleResearcher}
          </li>
        ))}
      </ul>
    </div>
  );
};
