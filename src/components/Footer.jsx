import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E8ECFF] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] py-6 px-4 mt-auto">
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        {/* Logo and Brand */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 sm:w-12" />
          <p className="text-[1.5rem] sm:text-[2rem] font-semibold">
            <span className="text-blue-600">&lt;Pass</span>
            <span className="text-red-500">Vault/&gt;</span>
          </p>
        </div>

        {/* Made With Love */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-black font-semibold text-lg sm:text-xl">
          <span>Made with</span>
          <lord-icon
            src="https://cdn.lordicon.com/ajzwsrcs.json"
            trigger="hover"
            colors="primary:#c71f16,secondary:#ebe6ef,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#911710"
            style={{ width: 25, height: 25 }}
          ></lord-icon>
          <span>by Raghav Bhatia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
