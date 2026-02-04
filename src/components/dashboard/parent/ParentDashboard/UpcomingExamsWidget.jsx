import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const UpcomingExamsWidget = ({ exams }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-1">
            Upcoming Exams
          </h3>
          <p className="text-xs text-slate-500">Next 7 days</p>
        </div>
        <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
          <Calendar size={22} />
        </div>
      </div>

      <div className="space-y-3">
        {exams.slice(0, 2).map((exam, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl border border-purple-100"
          >
            <div className="bg-white p-2.5 rounded-lg shadow-sm text-center min-w-[56px] border border-purple-100">
              <span className="block text-[10px] text-purple-600 font-bold uppercase">
                {exam.date.split("-")[1]}
              </span>
              <span className="block text-xl font-extrabold text-slate-800">
                {exam.date.split("-")[2]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-800 text-sm truncate">
                {exam.subject}
              </h4>
              <p className="text-xs text-slate-500">{exam.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link
          to="/dashboard/parent/exams"
          className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1.5"
        >
          View All Exams
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingExamsWidget;
