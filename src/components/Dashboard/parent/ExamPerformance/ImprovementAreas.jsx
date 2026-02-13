import React from "react";
import { Target, CheckCircle } from "lucide-react";

const ImprovementAreas = ({ subjects }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Target className="text-orange-500" size={20} />
        Areas for Improvement
      </h3>
      {subjects.length > 0 ? (
        <div className="space-y-3">
          {subjects.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-sm group">
              <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
              <div className="flex-1">
                <p className="text-slate-700 font-semibold">{item.subject}</p>
                <p className="text-xs text-slate-500">
                  Current: {item.score}% • Target: 85%+
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4">
          <CheckCircle className="mx-auto mb-2 text-green-500" size={32} />
          <p className="text-sm text-slate-600 font-semibold">
            All subjects performing well!
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Keep up the excellent work
          </p>
        </div>
      )}
    </div>
  );
};

export default ImprovementAreas;
