import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  AlertTriangle,
  Bell,
} from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/managementData";

const ComplianceChecklist = () => {
  const { checklist } = COMPLIANCE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case "compliant":
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
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Compliance Checklist
          </h2>
          <p className="text-sm text-gray-600">
            PEI, SSG, and MOE regulatory status
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {checklist.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {section.category}
            </h3>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(item.status)}`}
                        >
                          {item.status === "compliant" && (
                            <CheckCircle className="w-3 h-3 inline mr-1" />
                          )}
                          {item.status === "warning" && (
                            <Clock className="w-3 h-3 inline mr-1" />
                          )}
                          {item.status === "critical" && (
                            <AlertTriangle className="w-3 h-3 inline mr-1" />
                          )}
                          {item.status.toUpperCase()}
                        </span>
                        <span className="font-semibold text-gray-800">
                          {item.item}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {item.expiryDate && (
                          <span>
                            Expires: {formatDate(item.expiryDate)} (
                            {item.daysToExpiry} days)
                          </span>
                        )}
                        <span>Updated: {formatDate(item.lastUpdated)}</span>
                      </div>
                    </div>
                    {item.daysToExpiry !== null && item.daysToExpiry < 60 && (
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4" />
                          <span>Renew</span>
                        </div>
                        <div className="text-[10px] opacity-70">get in app</div>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceChecklist;
