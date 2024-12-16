import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export function Layout() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
