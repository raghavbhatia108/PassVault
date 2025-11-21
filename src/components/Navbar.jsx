import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center bg-[#F0F3FF] h-auto sm:h-24 shadow-md sticky top-0 z-50 px-6 py-4 sm:px-12">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-12 sm:w-16" />
        <p className="text-[1.5rem] sm:text-[2rem] text-red-500 font-semibold">
          <span className="text-blue-600">&lt;Pass</span>Vault/&gt;
        </p>
      </div>

      {/* GitHub Section */}
      <a
        href="https://github.com" // optional: replace with your actual GitHub repo link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300 mt-3 sm:mt-0"
      >
        <img src="/github.png" alt="GitHub" className="w-10 sm:w-14" />
        <p className="text-lg sm:text-xl text-blue-600 font-bold">GitHub</p>
      </a>
    </nav>
  );
};

export default Navbar;
