import React from "react";
import { Users, Plus } from "lucide-react";

const StudentGroupSelector = ({
  studentToGroup,
  setStudentToGroup,
  groups,
  toggleStudentInGroup,
}) => {
  if (!studentToGroup) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-all duration-500"
        onClick={() => setStudentToGroup(null)}
      />
      <div className="bg-white w-full max-w-md rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative overflow-hidden animate-scaleIn border-[10px] border-white p-10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Deploy to Cluster
          </h3>
          <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">
            {studentToGroup.name}
          </p>
        </div>

        <div className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-3 mb-8">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => {
                toggleStudentInGroup(group.id, studentToGroup.id);
                setStudentToGroup(null);
              }}
              className="w-full flex items-center justify-between p-5 bg-[#F8FAFC] hover:bg-blue-600 hover:text-white hover:translate-y-[-2px] hover:shadow-xl hover:shadow-blue-200/50 rounded-[1.8rem] transition-all group/btn border border-[#F1F5F9]"
            >
              <span className="text-sm font-black tracking-tight">
                {group.name}
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm opacity-0 group-hover/btn:opacity-100 transition-all scale-75 group-hover/btn:scale-100">
                <Plus size={16} className="stroke-[3px]" />
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setStudentToGroup(null)}
          className="w-full py-5 bg-slate-100 text-slate-500 rounded-[1.8rem] font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 transition-all active:scale-95"
        >
          Dismiss Configuration
        </button>
      </div>
    </div>
  );
};

export default StudentGroupSelector;
