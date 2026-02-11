import React from "react";
import {
  AlertTriangle,
  XCircle,
  Clock,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/managementData";

const DocumentExpiryAlerts = () => {
  const { documentAlerts } = COMPLIANCE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "safe":
        return "bg-green-100 text-green-700 border-green-200";
      case "warning":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Document Expiry Alerts
          </h2>
          <p className="text-sm text-gray-600">
            Certifications and licenses requiring attention
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {documentAlerts.map((alert, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl border-2 hover:shadow-lg transition-all ${alert.severity === "critical" ? "bg-red-50 border-red-200" : alert.severity === "warning" ? "bg-yellow-50 border-yellow-200" : "bg-green-50 border-green-200"}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(alert.severity)}`}
                  >
                    {alert.severity === "critical" ? (
                      <XCircle className="w-3 h-3 inline mr-1" />
                    ) : alert.severity === "warning" ? (
                      <Clock className="w-3 h-3 inline mr-1" />
                    ) : (
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                    )}
                    {alert.severity.toUpperCase()}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {alert.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {alert.document}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Holder: {alert.holder}</span>
                  <span>Expires: {formatDate(alert.expiryDate)}</span>
                  <span
                    className={`font-semibold ${alert.daysToExpiry <= 15 ? "text-red-600" : alert.daysToExpiry <= 30 ? "text-orange-600" : "text-green-600"}`}
                  >
                    {alert.daysToExpiry} days remaining
                  </span>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Renew Now</span>
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

export default DocumentExpiryAlerts;
