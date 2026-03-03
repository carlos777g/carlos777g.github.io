import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
// import { ProjectPage } from "@/pages/project"; // Ejemplo de otra página

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/project/:id" element={<ProjectPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};