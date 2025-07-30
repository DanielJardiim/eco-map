import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-700">
        Bem-vindo ao EcoMap
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        Um sistema moderno para monitoramento ambiental com mapa interativo e
        gestão de projetos.
      </p>

      <Link
        to="/projects"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
      >
        Ver Projetos
      </Link>
    </div>
  );
}
