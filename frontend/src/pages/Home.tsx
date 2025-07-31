import React, { useState } from "react";
import { useProjects, useProjectsByName } from "../hooks/useProjects";
import { ProjectsList } from "../features/projects/ProjectsList";
import Map from "../components/Map";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data: allProjects } = useProjects();
  const { data: filteredProjects } = useProjectsByName(search);

  const projects = search.trim() ? filteredProjects : allProjects;

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        {projects && <Map projects={projects} />}
      </div>
      <div className={styles.listContainer}>
        <input
          type="text"
          placeholder="Buscar projeto por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        {projects && <ProjectsList projects={projects} />}
      </div>
    </div>
  );
};
