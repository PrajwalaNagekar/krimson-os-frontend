import React from "react";
import {
  Activity,
  Filter,
  Target,
  Zap,
  TrendingUp,
  MoreVertical,
} from "lucide-react";

const StudentProgressTable = ({ students }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-md overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Activity size={20} className="text-blue-500" /> Student Progress
          Dashboard
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400 group">
            <Filter size={18} className="group-hover:text-blue-500" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Student
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Concept Gap
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                Sessions
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Progress
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {students.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs ring-4 ring-blue-50">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{student.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        {student.subject}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                      <Target size={14} />
                    </span>
                    <span className="text-sm font-semibold text-slate-600">
                      {student.area}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-sm font-bold text-slate-700">
                      {student.attendance} / {student.sessionsTotal}
                    </span>
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden border border-slate-200">
                      <div
                        className="h-full bg-orange-400"
                        style={{
                          width: `${
                            (student.attendance / student.sessionsTotal) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-1 w-32">
                    <div className="flex justify-between text-[10px] font-bold uppercase">
                      <span className="text-slate-400">Improvement</span>
                      <span className="text-emerald-500">
                        +{student.current - student.baseline}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                      <div
                        className="h-full bg-slate-300"
                        style={{ width: `${student.baseline}%` }}
                      ></div>
                      <div
                        className="h-full bg-emerald-500"
                        style={{
                          width: `${student.current - student.baseline}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-slate-400">
                      <span>Start: {student.baseline}%</span>
                      <span>Now: {student.current}%</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 ${
                      student.status === "Ready to Exit"
                        ? "bg-purple-100 text-purple-700"
                        : student.status === "Improving"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {student.status === "Ready to Exit" ? (
                      <Zap size={10} className="fill-purple-700" />
                    ) : (
                      <TrendingUp size={10} />
                    )}
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="p-2 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-all active:scale-95">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProgressTable;
