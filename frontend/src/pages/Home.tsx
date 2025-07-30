import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
import Map from "../components/Map";

export function Home() {
  const { data: projects, isLoading, error } = useProjects();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-8 gap-8 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Bem-vindo ao EcoMap
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mt-4">
          Um sistema moderno para monitoramento ambiental com mapa interativo e
          gestão de projetos.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          Ver Projetos
        </Link>
      </div>

      <div className="w-full max-w-6xl h-[600px] shadow-md border border-gray-300 rounded-xl overflow-hidden">
        {isLoading && (
          <p className="text-gray-500 text-center mt-4">Carregando mapa...</p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-4">
            Erro ao carregar os projetos
          </p>
        )}
        {projects && <Map projects={projects} />}
      </div>
    </div>
  );
}
