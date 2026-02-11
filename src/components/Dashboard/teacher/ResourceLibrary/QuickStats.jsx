import React from "react";
import { BookOpen, Download, Star, Users } from "lucide-react";

const QuickStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Resources
          </p>
          <BookOpen className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
          {stats.total}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Downloads
          </p>
          <Download className="text-green-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          {stats.totalDownloads}
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-yellow-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Rating
          </p>
          <Star className="text-yellow-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-600">
          {stats.avgRating}/5.0
        </h3>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Contributors
          </p>
          <Users className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">12</h3>
      </div>
    </div>
  );
};

export default QuickStats;
