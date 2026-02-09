import React from "react";
import { Eye, CalendarCheck, Award, CreditCard } from "lucide-react";

const DataMirrorSection = ({ mirrorData }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Eye className="text-purple-500" size={24} />
          What Your Parent Sees
        </h2>
        <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-lg">
          Read-Only Mirror
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Attendance Mirror */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-200 rounded-xl">
              <CalendarCheck className="text-blue-700" size={24} />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
              Attendance
            </span>
          </div>
          <div className="text-3xl font-bold text-blue-900 mb-1">
            {mirrorData.attendance.percentage}%
          </div>
          <div className="text-sm text-blue-600 mb-3">Overall Attendance</div>
          <div className="flex gap-4 text-xs text-blue-700">
            <div>
              <span className="font-bold">{mirrorData.attendance.present}</span>{" "}
              Present
            </div>
            <div>
              <span className="font-bold">{mirrorData.attendance.absent}</span>{" "}
              Absent
            </div>
          </div>
        </div>

        {/* Results Mirror */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-200 rounded-xl">
              <Award className="text-green-700" size={24} />
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
              Results
            </span>
          </div>
          <div className="text-3xl font-bold text-green-900 mb-1">
            {mirrorData.latestResults.overall}
          </div>
          <div className="text-sm text-green-600 mb-3">
            {mirrorData.latestResults.term}
          </div>
          <div className="text-xs text-green-700">
            <span className="font-bold">
              {mirrorData.latestResults.overallPercentage}%
            </span>{" "}
            Average
          </div>
        </div>

        {/* Fee Status Mirror */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border-2 border-orange-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-200 rounded-xl">
              <CreditCard className="text-orange-700" size={24} />
            </div>
            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
              Fees
            </span>
          </div>
          <div className="text-3xl font-bold text-orange-900 mb-1">
            ${mirrorData.feeStatus.pending}
          </div>
          <div className="text-sm text-orange-600 mb-3">
            {mirrorData.feeStatus.status}
          </div>
          <div className="text-xs text-orange-700">
            Due:{" "}
            <span className="font-bold">{mirrorData.feeStatus.dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMirrorSection;
