"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/16/solid";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigationItems = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#project", label: "Project", id: "project" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container="true"]'
    );

    if (!(scrollContainer instanceof HTMLElement)) {
      return;
    }

    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const syncWithHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    syncWithHash();

    const updateActiveSection = () => {
      if (sections.length === 0) {
        return;
      }

      const containerTop = scrollContainer.getBoundingClientRect().top;
      const focusLine = containerTop + scrollContainer.clientHeight * 0.35;

      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        const distance = Math.abs(top - focusLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection((currentSection) => {
        if (currentSection === closestSection.id) {
          return currentSection;
        }

        return closestSection.id;
      });
    };

    updateActiveSection();

    window.addEventListener("hashchange", syncWithHash);
    scrollContainer.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", syncWithHash);
      scrollContainer.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [setActiveSection]);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const nextHash = `#${activeSection}`;
    if (window.location.hash === nextHash) {
      return;
    }

    window.history.replaceState(null, "", `/${nextHash}`);
  }, [activeSection]);

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
          md:static md:h-screen md:translate-x-0 md:w-[320px] md:pt-40 md:px-20 md:shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button onClick={onClose} className="absolute top-6 right-6 md:hidden">
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>

        <span className="flex mb-16">
          <Link
            href="/#home"
            onClick={onClose}
            className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-[#1F2937]"
          >
            Varel
          </Link>
          <span className="text-base mt-2">©</span>
        </span>

        <nav className="flex flex-col gap-3 text-base text-[#767676] font-medium">
          {navigationItems.map(({ href, label, id }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className={`relative w-fit pr-4 transition-all duration-300 hover:text-[#1F2937] ${
                activeSection === id
                  ? "text-[#1F2937]"
                  : "text-[#767676]"
              }`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              <span
                className={`absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#fb923c] transition-all duration-300 ${
                  activeSection === id
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />
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
