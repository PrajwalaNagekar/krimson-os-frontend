import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Building2 } from "lucide-react";

const OrganisationHeader = ({ activeYear }) => {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                LJ Layout
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                <Calendar size={12} /> {activeYear}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              Organisation Structure
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
              Define your school's foundational hierarchy and naming
              conventions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/dashboard/admin/classes/edit")}
              className="px-6 py-2 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Edit Structure
            </button>
            <button
              onClick={() => navigate("/dashboard/admin/classes/naming")}
              className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold hover:bg-white/30 transition-all"
            >
              Configure Naming Pattern
            </button>
            <button
              onClick={() => navigate("/dashboard/admin/classes/activation")}
              className="px-6 py-2 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              View Academic Activation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationHeader;
