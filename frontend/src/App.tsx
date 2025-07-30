import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsList } from "./features/projects/ProjectsList";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/projects" element={<ProjectsList />} />
      </Routes>
    </BrowserRouter>
  );
}
