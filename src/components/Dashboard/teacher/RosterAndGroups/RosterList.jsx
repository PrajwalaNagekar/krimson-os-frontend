import React from "react";
import {
  Search,
  Filter,
  Download,
  UserPlus,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";

const RosterList = ({
  searchQuery,
  setSearchQuery,
  filteredStudents,
  setSelectedStudent,
  setStudentToGroup,
  initiateChat,
  config,
}) => {
  // Default config fallback
  const {
    searchPlaceholder = "Search by student name...",
    filterButtonText = "Analytics",
    title = "Student Intelligence Roster",
    exportButtonText = "Export Roster",
    tableHeaders = [
      { label: "Profile", align: "left" },
      { label: "Cluster", align: "center" },
      { label: "Performance", align: "center" },
      { label: "Engagement", align: "center" },
      { label: "Actions", align: "right" },
    ],
  } = config || {};

  return (
    <div className="space-y-6">
      {/* Modern Filter Bar */}
      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-5 items-center">
        <div className="flex-1 relative w-full group">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4.5 bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 focus:bg-white rounded-[1.8rem] text-sm font-bold transition-all focus:outline-none"
          />
        </div>
        <button className="px-8 py-4.5 bg-slate-900 text-white rounded-[1.8rem] text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-100">
          <Filter size={18} />
          {filterButtonText}
        </button>
      </div>

      {/* Premium Student Table */}
      <div className="bg-white rounded-[3rem] border border-[#F1F5F9] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.032)]">
        <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-black text-slate-800 text-lg tracking-tight">
              {title}
            </h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
              Showing {filteredStudents.length} active profiles
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
              <Download size={14} />
              {exportButtonText}
            </button>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-${header.align || "left"}`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="group/row hover:bg-blue-50/20 cursor-pointer transition-all duration-300"
              >
                <td className="px-10 py-5">
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm transition-transform group-hover/row:scale-110 ${
                        student.competency === "Advanced"
                          ? "bg-purple-100 text-purple-600"
                          : student.competency === "Remedial"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-slate-900 tracking-tight">
                        {student.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                        {student.roll}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-5 text-center">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                      student.competency === "Advanced"
                        ? "bg-purple-50 text-purple-600 border-purple-100"
                        : student.competency === "Remedial"
                          ? "bg-orange-50 text-orange-600 border-orange-100"
                          : "bg-blue-50 text-blue-600 border-blue-100"
                    }`}
                  >
                    {student.competency}
                  </span>
                </td>
                <td className="px-10 py-5">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-28 h-2 bg-slate-100 rounded-full overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${student.mastery >= 80 ? "bg-green-500" : student.mastery >= 60 ? "bg-blue-500" : "bg-orange-500"}`}
                        style={{ width: `${student.mastery}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-black text-slate-700 tracking-tight">
                      {student.mastery}% Mastery
                    </span>
                  </div>
                </td>
                <td className="px-10 py-5 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full shadow-sm ${student.status === "Online" ? "bg-green-500" : student.status === "Away" ? "bg-yellow-500" : "bg-slate-300"}`}
                    />
                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                      {student.status}
                    </span>
                  </div>
                </td>
                <td className="px-10 py-5 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover/row:opacity-100 transition-all translate-x-4 group-hover/row:translate-x-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setStudentToGroup(student);
                      }}
                      className="p-2.5 text-green-600 hover:bg-green-100 rounded-2xl transition-all"
                      title="Assign to Group"
                    >
                      <UserPlus size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        initiateChat(student);
                      }}
                      className="p-2.5 text-blue-500 hover:bg-blue-100 rounded-2xl transition-all"
                      title="Message"
                    >
                      <MessageCircle size={20} />
                    </button>
                    <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-2xl transition-all">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RosterList;
