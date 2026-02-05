import React from "react";
import { Star, Calendar, Tag } from "lucide-react";

/**
 * House Points Log Component
 * Displays a student-friendly log of House point contributions.
 * Focuses on positive recognition and values.
 */
const HousePointsLog = ({ pointsLog }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
          <Star className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">My Contributions</h2>
          <p className="text-sm text-slate-500">
            Points earned for positive behavior and achievements
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        {pointsLog && pointsLog.length > 0 ? (
          <div className="flex flex-col gap-4">
            {pointsLog.map((log) => (
              <div
                key={log.id}
                className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
              >
                {/* Points Badge */}
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex-shrink-0 flex flex-col items-center justify-center border border-amber-200">
                  <span className="text-lg font-bold text-amber-700">
                    +{log.points}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-800 text-lg">
                      {log.category}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {log.date}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {log.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-3">
              <Star className="w-6 h-6" />
            </div>
            <p className="text-slate-500 font-medium">
              No points awarded yet. Keep up the good work!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HousePointsLog;
