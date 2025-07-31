import React, { useState } from "react";
import { useProjects, useProjectsByName } from "../hooks/useProjects";
import { ProjectsList } from "../features/projects/ProjectsList";
import Map from "../components/Map";
import styles from "./Home.module.css";
import { Navbar } from "../components/Navbar";
import { ProjectFormModal } from "../features/projects/ProjectFormModal";

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { data: allProjects, refetch } = useProjects();
  const { data: filteredProjects } = useProjectsByName(search);

  const projects = search.trim() ? filteredProjects : allProjects;

  return (
    <>
      <Navbar onAddProject={() => setShowModal(true)} />
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
      {showModal && (
        <ProjectFormModal
          onClose={() => setShowModal(false)}
          onCreated={refetch}
        />
      )}
    </>
  );
};
