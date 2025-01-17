import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container mt-3 p-3">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
