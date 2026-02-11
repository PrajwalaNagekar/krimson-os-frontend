import React from "react";
import { ChevronRight, UserPlus, Plus } from "lucide-react";

const RosterHeader = ({
  studentsCount,
  groupsCount,
  setShowAddStudentModal,
  createNewGroup,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#EC4899] rounded-[2.5rem] p-8 md:p-10 text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)] relative overflow-hidden transition-all duration-500">
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-16 -mb-16"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-white/70 text-[11px] font-black uppercase tracking-[0.2em] mb-5">
          <span className="hover:text-white cursor-pointer transition-colors">
            Dashboard
          </span>
          <ChevronRight size={12} className="opacity-50" />
          <span className="hover:text-white cursor-pointer transition-colors">
            Teacher
          </span>
          <ChevronRight size={12} className="opacity-50" />
          <span className="text-white">Roster & Groups</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-black mb-4 backdrop-blur-md border border-white/20 shadow-sm uppercase tracking-[0.15em]">
              Strategic Classroom Management
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight drop-shadow-sm">
              Classroom Hub
            </h1>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/20">
                {studentsCount} ENROLLED
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/20 uppercase">
                {groupsCount} STRATEGIC GROUPS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAddStudentModal(true)}
              className="px-7 py-3.5 bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-2xl font-black shadow-2xl hover:bg-white/20 transition-all active:scale-95 text-xs uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <UserPlus size={20} />
                <span>Onboard</span>
              </div>
            </button>
            <button
              onClick={createNewGroup}
              className="px-8 py-3.5 bg-white text-blue-600 rounded-2xl font-black shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:translate-y-[-2px] transition-all active:scale-95 text-xs uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Plus size={22} className="stroke-[3px]" />
                <span>Create Group</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterHeader;
