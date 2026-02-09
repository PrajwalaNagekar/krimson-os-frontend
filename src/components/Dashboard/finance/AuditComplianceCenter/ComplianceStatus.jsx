import React from "react";
import { ShieldCheck, CheckCircle } from "lucide-react";

const ComplianceStatus = ({ status }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Compliance Status</h2>
              <p className="text-sm text-white/80">Audit readiness overview</p>
            </div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
            <p className="text-sm text-white/80 mb-1">Overall Score</p>
            <p className="text-4xl font-bold">{status.overallScore}%</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Last Audit</p>
            <p className="font-bold text-lg">{formatDate(status.lastAudit)}</p>
            <p className="text-xs text-white/70 mt-1">{status.auditor}</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Next Audit</p>
            <p className="font-bold text-lg">{formatDate(status.nextAudit)}</p>
            <p className="text-xs text-white/70 mt-1">Scheduled in 5 months</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Certificate Status</p>
            <p className="font-bold text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {status.status}
            </p>
            <p className="text-xs text-white/70 mt-1">
              Valid until {formatDate(status.certificateExpiry)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceStatus;
