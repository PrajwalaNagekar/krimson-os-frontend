import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-2xl -ml-20 -mb-20"></div>

      <div className="relative z-10 max-w-3xl">
        <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block mb-3">
          My Children
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Children Overview
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Overview of enrolled students linked to your account via SSO.
        </p>
      </div>
    </div>
  );
};

export default Header;
