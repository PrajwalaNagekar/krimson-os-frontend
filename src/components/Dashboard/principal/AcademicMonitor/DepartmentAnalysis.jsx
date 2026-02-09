import React, { useState } from "react";
import { Search } from "lucide-react";
import DepartmentRow from "./DepartmentRow";

const DepartmentAnalysis = ({ departments }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800">
              Detailed Department Analysis
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Click department for drill-down to class and teacher level
            </p>
          </div>
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Head</th>
              <th className="px-4 py-3 text-left">Avg Score</th>
              <th className="px-4 py-3 text-left">Pass Rate</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments
              .filter((dept) =>
                dept.subject.toLowerCase().includes(searchTerm.toLowerCase()),
              )
              .map((dept, idx) => (
                <DepartmentRow
                  key={idx}
                  {...dept}
                  onClick={() => console.log("Drill down to:", dept.subject)}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentAnalysis;
