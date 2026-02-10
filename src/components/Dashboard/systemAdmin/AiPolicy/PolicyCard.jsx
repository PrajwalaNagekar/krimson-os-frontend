import React from "react";
import { Shield, AlertCircle } from "lucide-react";

const PolicyCard = ({ policy }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending Review":
        return "bg-orange-100 text-orange-700";
      case "Inactive":
        return "bg-slate-100 text-slate-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getEnforcementColor = (level) => {
    switch (level) {
      case "Critical":
        return "from-red-500 to-pink-500";
      case "Strict":
      case "High":
        return "from-orange-500 to-red-500";
      case "Medium":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Shield className="text-cyan-500" size={24} />
          <div>
            <h3 className="text-lg font-bold text-slate-800">{policy.name}</h3>
            <p className="text-sm text-slate-500">{policy.id}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1.5 text-sm rounded-lg font-medium ${getStatusColor(policy.status)}`}
        >
          {policy.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-base text-slate-600 mb-4 leading-relaxed">
        {policy.description}
      </p>

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-slate-500 mb-1">Scope</p>
          <p className="text-base font-semibold text-slate-700">
            {policy.scope}
          </p>
        </div>
        <div>
          <p className="text-sm text-slate-500 mb-1">Category</p>
          <p className="text-base font-semibold text-slate-700">
            {policy.category}
          </p>
        </div>
      </div>

      {/* Enforcement Level */}
      <div className="mb-4">
        <p className="text-sm text-slate-500 mb-2">Enforcement Level</p>
        <div
          className={`px-4 py-2 bg-gradient-to-r ${getEnforcementColor(policy.enforcementLevel)} text-white text-sm rounded-lg inline-block font-semibold`}
        >
          {policy.enforcementLevel}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          <p>Updated: {new Date(policy.lastUpdated).toLocaleDateString()}</p>
        </div>
        {policy.violations > 0 && (
          <div className="flex items-center gap-1 text-red-600">
            <AlertCircle size={16} />
            <span className="text-sm font-semibold">
              {policy.violations} violations
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyCard;
