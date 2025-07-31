import React from "react";
import type { Project } from "../../services/projects";
import styles from "./ProjectsList.module.css";

interface ProjectsListProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>Projetos</h2>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectItem}>
          <div className={styles.projectName}>{project.name}</div>
          <div className={styles.projectInfo}>Status: {project.status}</div>
          <div className={styles.projectInfo}>
            Responsável: {project.responsibleResearcher}
          </div>
        </div>
      ))}
    </div>
  );
};
