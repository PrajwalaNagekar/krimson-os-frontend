import React from "react";

const WelcomeBanner = ({ userName, studentName }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-2xl -ml-20 -mb-20"></div>

      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block">
            Parent Dashboard
          </span>
          <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block">
            Singapore Campus
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-2">
          Welcome Back, {userName}
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Here's your daily summary for{" "}
          <span className="font-bold text-white">{studentName}</span>—track
          progress, stay informed, and engage.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
