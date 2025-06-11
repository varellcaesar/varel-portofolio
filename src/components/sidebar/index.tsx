import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import PAGE_NAME from "@varel-web/constants/page_name";

const Sidebar = () => {
  return (
    <aside className="flex min-h-screen w-full max-w-[400px] bg-white flex-col px-20 pb-10 pt-40">
      <span className="flex mb-20">
        <Link
          href="/"
          className="text-3xl font-bold leading-none uppercase tracking-[2px] text-[#1F2937]"
        >
          Varel
        </Link>
        <span className="text-base mt-2 text">©</span>
      </span>

      <nav className="flex flex-col gap-2 text-base text-[#767676] font-medium">
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
            className="transition-colors hover:text-[#1F2937]"
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center overflow-hidden mt-24 border-b-1 border-[#767676] h-[50px]">
        <input
          placeholder="varel@example.com"
          className="text-base text-[#1F2937] placeholder-[#767676] focus:outline-none pr-8"
        />
        <EnvelopeIcon className="h-6 w-6 shrink-0" color="#767676" />
      </div>
      <p className="text-sm leading-relaxed text-[#767676] mt-20">
        © 2025 <strong>Varelandito Caesar Wahyu</strong>. All rights reserved.
      </p>
    </aside>
  );
};

export default Sidebar;
