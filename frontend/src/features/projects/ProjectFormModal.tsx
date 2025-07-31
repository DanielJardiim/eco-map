import React, { useState } from "react";
import { createProject } from "../../services/projects";
import styles from "./ProjectFormModal.module.css";

interface Props {
  onClose: () => void;
  onCreated: () => void;
}

export const ProjectFormModal: React.FC<Props> = ({ onClose, onCreated }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Ativo" | "Em Análise" | "Finalizado">(
    "Ativo"
  );
  const [responsible, setResponsible] = useState("");
  const [geometryType, setGeometryType] = useState<
    "Point" | "Polygon" | "Circle"
  >("Point");
  const [coordinates, setCoordinates] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsedCoordinates = JSON.parse(coordinates); // Espera string tipo: [[-46.6, -23.5]]

    await createProject({
      name,
      status,
      responsibleResearcher: responsible,
      geometry: {
        type: geometryType,
        coordinates: parsedCoordinates,
      },
    });

    onCreated();
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Novo Projeto</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.inputForm}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />
          <input
            className={styles.inputForm}
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
            placeholder="Responsável"
            required
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
          >
            <option value="Ativo">Ativo</option>
            <option value="Em Análise">Em Análise</option>
            <option value="Finalizado">Finalizado</option>
          </select>

          <select
            value={geometryType}
            onChange={(e) => setGeometryType(e.target.value as any)}
          >
            <option value="Point">Point</option>
            <option value="Polygon">Polygon</option>
            <option value="Circle">Circle</option>
          </select>

          <textarea
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            placeholder="Coordenadas JSON. Ex: [[-46.6, -23.5]]"
            required
          />

          <div className={styles.actions}>
            <button type="submit">Criar</button>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
