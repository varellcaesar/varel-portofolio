"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Toaster } from "react-hot-toast";
import Sidebar from "../sidebar";
import CustomCursor from "../custom-cursor";

type Props = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-50 text-[#1F2937] flex flex-col md:flex-row overflow-hidden">
      <header
        className="
            md:hidden
            sticky top-0 z-50
            flex items-center justify-between
            px-4 py-4
            bg-white
            shadow-[0_1px_2px_rgba(0,0,0,0.06)] 
            transition-shadow duration-200
        "
      >
        <span className="text-lg font-bold uppercase tracking-wide text-[#1F2937]">
          Varel
          <span className="text-xs mt-2">©</span>
        </span>
        <button onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-gray-800" />
        </button>
      </header>

      <CustomCursor />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main
        data-scroll-container="true"
        className="flex-1 min-h-0 overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {children}
      </main>

      <Toaster position="top-right" />
    </div>
  );
};

export default ClientLayout;
