import React from "react";
import { Sparkles, X, AlertTriangle, CheckCircle } from "lucide-react";

const AttendanceInsights = ({ insights, showInsights, setShowInsights }) => {
  if (!showInsights) return null;

  const getInsightColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-50 border-red-200 text-red-800";
      case "medium":
        return "bg-orange-50 border-orange-200 text-orange-800";
      case "low":
        return "bg-green-50 border-green-200 text-green-800";
      default:
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="text-red-600" size={20} />;
      case "warning":
        return <AlertTriangle className="text-orange-600" size={20} />;
      case "positive":
        return <CheckCircle className="text-green-600" size={20} />;
      default:
        return <Sparkles className="text-blue-600" size={20} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 rounded-xl">
            <Sparkles size={24} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Automated Insights
            </h3>
            <p className="text-slate-600">
              AI-powered attendance analysis and recommendations
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowInsights(false)}
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border-2 ${getInsightColor(insight.severity)}`}
          >
            <div className="flex items-start gap-3">
              {getInsightIcon(insight.type)}
              <div className="flex-1">
                <p className="font-bold mb-2">{insight.message}</p>
                <p className="text-sm opacity-80">
                  <span className="font-bold">Recommended Action:</span>{" "}
                  {insight.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceInsights;
