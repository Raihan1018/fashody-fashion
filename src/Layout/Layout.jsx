import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    // min-h-screen ensures the footer stays at the bottom on short pages
    <div className="flex flex-col min-h-screen  bg-gradient-to-br from-slate-100 via-white to-green-100 rounded-[2rem] md:rounded-[3rem]  my-4 ">
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
