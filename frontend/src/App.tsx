import { Layout } from "./layout/Layout";
import HomePage from "./pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="results/:pdbCode" element={<>TODO</>} />
          {/* When missing parameter */}
          <Route path="results" element={<Navigate to="/" replace />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </Router>
  );
}
