import React from "react";
import { Settings, Calendar, Clock, Mail, CheckCircle } from "lucide-react";

const ScheduledReports = ({ reports }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Scheduled Reports
            </h2>
            <p className="text-sm text-gray-600">Auto-email configuration</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span>Configure</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-800">{report.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${report.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  >
                    {report.active ? (
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                    ) : null}
                    {report.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{report.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span>{report.recipients}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledReports;
