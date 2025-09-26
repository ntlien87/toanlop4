import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Nơi các Route con được render */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
