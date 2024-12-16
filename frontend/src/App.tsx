import { Layout } from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="results/:pdbCode" element={<ResultsPage />} />
          <Route path="results" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}