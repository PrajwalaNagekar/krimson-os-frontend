import React from "react";
import { BookOpen, User, Hash } from "lucide-react";

const LibraryHeader = ({ user, selectedTerm, onTermChange }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 -left-10 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                <BookOpen size={32} className="drop-shadow-lg" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                My Library Account
              </h1>
            </div>
            <p className="text-white/90 text-sm md:text-base ml-1">
              Track your issued books and borrowing history
            </p>
          </div>

          {/* Student Info - Enhanced card */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 space-y-2 border border-white/30 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <User size={16} />
              </div>
              <span className="text-sm font-semibold">{user.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <Hash size={16} />
              </div>
              <span className="text-sm font-medium">
                {user.rollNo || "STU2024001"}
              </span>
            </div>
          </div>
        </div>

        {/* Academic Year Selector - Enhanced */}
        <div className="mt-6">
          <label className="text-sm text-white/80 mb-2 block font-medium">
            Academic Year / Term
          </label>
          <select
            value={selectedTerm}
            onChange={(e) => onTermChange(e.target.value)}
            className="bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition-all hover:bg-white/30 cursor-pointer shadow-lg"
          >
            <option value="2025-2026" className="text-slate-800">
              2025-2026
            </option>
            <option value="2024-2025" className="text-slate-800">
              2024-2025
            </option>
            <option value="2023-2024" className="text-slate-800">
              2023-2024
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeader;
