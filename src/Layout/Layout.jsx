import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    // min-h-screen ensures the footer stays at the bottom on short pages
    <div className="flex flex-col min-h-screen px-1 md:px-3 lg:px-5">
      <Header />

      {/* Main content area constrained to your max-width */}
      <main className="flex-1 container mx-auto max-w-screen-xl px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
