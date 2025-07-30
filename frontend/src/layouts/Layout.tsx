import { Link } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-green-700 text-white p-4 shadow">
        <nav className="max-w-6xl mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">
            EcoMap
          </Link>
          <Link to="/projects" className="hover:underline">
            Projetos
          </Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
