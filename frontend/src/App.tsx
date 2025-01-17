import Home from "./pages/Home";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";
import { MolstarProvider } from "./contexts/MolstarContext";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="results"
            element={
              <MolstarProvider>
                <Outlet />
              </MolstarProvider>
            }
          >
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":code" element={<Results />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
