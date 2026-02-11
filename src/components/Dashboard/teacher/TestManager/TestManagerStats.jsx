import React from "react";
import { Calendar, Zap, Edit, FileText } from "lucide-react";

const TestManagerStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Scheduled
          </p>
          <Calendar className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
          {stats.scheduled}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:border-green-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Live Now
          </p>
          <Zap className="text-green-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          {stats.live}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-orange-200 bg-white hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Pending Grading
          </p>
          <Edit className="text-orange-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
          {stats.grading}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:border-purple-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Tests
          </p>
          <FileText className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {stats.total}
        </h3>
      </div>
    </div>
  );
};

export default TestManagerStats;
