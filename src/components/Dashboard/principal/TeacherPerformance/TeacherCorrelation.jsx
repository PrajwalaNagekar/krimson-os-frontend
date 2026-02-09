import React from "react";
import { BarChart2 } from "lucide-react";

const CorrelationCard = ({ grade, attendance, performance, correlation }) => (
  <div className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all">
    <div className="flex items-center justify-between mb-3">
      <div>
        <h4 className="font-bold text-slate-800">Grade {grade}</h4>
        <p className="text-xs text-slate-500">Correlation Analysis</p>
      </div>
      <div
        className={`px-3 py-1 rounded-full text-xs font-bold ${
          correlation >= 0.8
            ? "bg-green-100 text-green-700"
            : correlation >= 0.5
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {(correlation * 100).toFixed(0)}%
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="text-center p-3 bg-white rounded-lg">
        <p className="text-xs text-slate-500 mb-1">Attendance</p>
        <p className="text-lg font-bold text-slate-800">{attendance}%</p>
      </div>
      <div className="text-center p-3 bg-white rounded-lg">
        <p className="text-xs text-slate-500 mb-1">Performance</p>
        <p className="text-lg font-bold text-slate-800">{performance}%</p>
      </div>
    </div>
  </div>
);

const TeacherCorrelation = ({ correlationData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-blue-500" />
              Attendance vs Performance Correlation
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              By grade level • Higher correlation indicates better teaching
              engagement
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {correlationData.map((data, idx) => (
          <CorrelationCard key={idx} {...data} />
        ))}
      </div>
    </div>
  );
};

export default TeacherCorrelation;
