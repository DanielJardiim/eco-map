import { useProjects } from "../../hooks/useProjects";

export const ProjectsList: React.FC = () => {
  const { data, error, isLoading } = useProjects();

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects</p>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data?.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> - {project.status} -{" "}
            {project.responsibleResearcher}
          </li>
        ))}
      </ul>
    </div>
  );
};
