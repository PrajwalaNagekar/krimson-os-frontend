import React from "react";
import { Users, BookOpen, TrendingUp, CheckCircle } from "lucide-react";

const ClassStats = ({ classes, avgScore }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-3xl border border-cyan-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-cyan-400 rounded-lg">
            <Users className="text-white" size={18} />
          </div>
          <p className="text-xs font-bold text-slate-600">Total Students</p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          {classes.reduce((sum, c) => sum + c.students, 0)}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-3xl border border-blue-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-400 rounded-lg">
            <BookOpen className="text-white" size={18} />
          </div>
          <p className="text-xs font-bold text-slate-600">Active Classes</p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
          {classes.length}
        </h3>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-400 rounded-lg">
            <TrendingUp className="text-white" size={18} />
          </div>
          <p className="text-xs font-bold text-slate-600">Avg Performance</p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {avgScore}%
        </h3>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-3xl border border-pink-100 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-pink-400 rounded-lg">
            <CheckCircle className="text-white" size={18} />
          </div>
          <p className="text-xs font-bold text-slate-600">Completion Rate</p>
        </div>
        <p className="text-2xl font-bold text-slate-800">92%</p>
      </div>
    </div>
  );
};

export default ClassStats;
