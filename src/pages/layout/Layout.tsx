import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import Sidebar from "../../components/layout/Sidebar";

export default function Layout(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-white flex">
      {/* Sidebar / Header ici */}
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}