import React from "react";
import { Mail, CheckCircle } from "lucide-react";

const TrusteeReportCard = ({ schedule }) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">
                Automated Trustee Reports
              </h2>
              <p className="text-sm text-white/80">
                Monthly financial snapshots delivered automatically
              </p>
            </div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
            <p className="text-sm text-white/80 mb-1">Next Report</p>
            <p className="text-xl font-bold">{schedule.nextScheduled}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Last Sent</p>
            <p className="font-bold text-lg">{schedule.lastSent}</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Frequency</p>
            <p className="font-bold text-lg">{schedule.frequency}</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-sm text-white/80 mb-2">Status</p>
            <p className="font-bold text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {schedule.autoSend ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrusteeReportCard;
