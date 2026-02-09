import React from "react";

const LibraryAlerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
            alert.type === "error"
              ? "bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200"
              : "bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200"
          }`}
        >
          <div
            className={`p-2 rounded-xl ${
              alert.type === "error"
                ? "bg-red-100 text-red-600"
                : "bg-orange-100 text-orange-600"
            }`}
          >
            {alert.icon}
          </div>
          <p
            className={`text-sm font-semibold flex-1 ${
              alert.type === "error" ? "text-red-900" : "text-orange-900"
            }`}
          >
            {alert.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LibraryAlerts;
