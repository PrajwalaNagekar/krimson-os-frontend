import React from "react";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Users,
  Target,
  Clock,
  Trophy,
} from "lucide-react";

const CCAManagementTab = ({
  clubs,
  filterStatus,
  setFilterStatus,
  onOpenCreateClub,
}) => {
  const getPillarColor = (pillar) => {
    switch (pillar) {
      case "Innovation":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Leadership":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Service":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Arts":
        return "bg-pink-100 text-pink-700 border-pink-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const filteredClubs = clubs.filter((c) => c.status === filterStatus);

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-[1.5rem] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:min-w-[300px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search clubs, mentors..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl font-bold text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 border border-transparent focus:border-indigo-200"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            {["Active", "Archived"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${filterStatus === status ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                {status}
              </button>
            ))}
          </div>
          <button className="p-3 bg-white border border-slate-200 text-slate-500 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter size={20} />
          </button>
          <button
            onClick={onOpenCreateClub}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2"
          >
            <Plus size={16} />{" "}
            <span className="hidden md:inline">New Club</span>
          </button>
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 ${getPillarColor(club.pillar).replace("bg-", "bg-").split(" ")[0]}`}
            ></div>

            <div className="flex justify-between items-start mb-6">
              <span
                className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${getPillarColor(club.pillar)}`}
              >
                {club.pillar}
              </span>
              <button className="text-slate-300 hover:text-slate-500 transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                {club.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 flex items-center gap-1">
                Mentor: <span className="text-slate-700">{club.mentor}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Users size={14} />{" "}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Members
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-700">
                  {club.members}{" "}
                  <span className="text-slate-400 text-xs">
                    / {club.capacity}
                  </span>
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Target size={14} />{" "}
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Sessions
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-700">
                  12{" "}
                  <span className="text-slate-400 text-xs text-[10px]">
                    completed
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-600 transition-colors">
                Manage
              </button>
              <button className="px-4 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCAManagementTab;
