import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { ASSESSMENT_TRACKER_DATA } from "../../../../data/registrarData";

const UploadAlerts = () => {
  const { uploadAlerts } = ASSESSMENT_TRACKER_DATA;

  if (uploadAlerts.length === 0) return null;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "from-red-500 to-orange-500";
      case "medium":
        return "from-orange-500 to-yellow-500";
      case "low":
        return "from-yellow-500 to-green-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Missing & Delayed Uploads
            </h2>
            <p className="text-sm text-gray-600">
              Assessment results pending submission
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {uploadAlerts.map((alert) => (
          <div
            key={alert.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${getSeverityColor(alert.severity)} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {alert.daysOverdue}d
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      {alert.assessment}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {alert.teacher} • {alert.grade}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-orange-600 ml-13">
                  Due:{" "}
                  {new Date(alert.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  {alert.daysOverdue > 0 &&
                    ` - ${alert.daysOverdue} day(s) overdue`}
                </p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Send Reminder</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadAlerts;
