import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
