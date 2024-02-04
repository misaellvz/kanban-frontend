import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));

const ProjectRoutes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default ProjectRoutes;
