"use client";

import Link from "next/link";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/16/solid";
import PAGE_NAME from "@varel-web/constants/page_name";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <aside
        className={`
          fixed z-50 inset-y-0 left-0
          w-[280px] bg-white
          flex flex-col px-10 pb-10 pt-24
          transform transition-transform duration-300 ease-out
          md:static md:translate-x-0 md:w-[320px] md:min-h-screen md:pt-40 md:px-20
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button onClick={onClose} className="absolute top-6 right-6 md:hidden">
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>

        <span className="flex mb-16">
          <Link
            href="/"
            onClick={onClose}
            className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-[#1F2937]"
          >
            Varel
          </Link>
          <span className="text-base mt-2">©</span>
        </span>

        <nav className="flex flex-col gap-3 text-base text-[#767676] font-medium">
          {[
            { href: PAGE_NAME.home, label: "Home" },
            { href: PAGE_NAME.experience, label: "Experience" },
            { href: PAGE_NAME.project, label: "Project" },
            { href: PAGE_NAME.contact, label: "Contact" },
            { href: PAGE_NAME.about, label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="transition-colors hover:text-[#1F2937]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center mt-20 border-b border-[#767676] h-[44px]">
          <input
            placeholder="varel@example.com"
            className="text-base text-[#1F2937] placeholder-[#767676] focus:outline-none pr-4 w-full"
          />
          <EnvelopeIcon className="h-5 w-5 shrink-0" color="#767676" />
        </div>

        <p className="text-sm leading-relaxed text-[#767676] mt-16">
          © 2025 <strong>Varelandito Caesar Wahyu</strong>. All rights reserved.
        </p>
      </aside>
    </>
  );
};

export default Sidebar;
