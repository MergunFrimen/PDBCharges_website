import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export function Layout() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col gap-y-10">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
