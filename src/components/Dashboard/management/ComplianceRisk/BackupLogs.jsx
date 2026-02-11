import React from "react";
import { Database } from "lucide-react";
import { COMPLIANCE_DATA } from "../../../../data/managementData";

const BackupLogs = () => {
  const { backupLogs } = COMPLIANCE_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
          <Database className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Data Backup Logs</h2>
          <p className="text-sm text-gray-600">Automated backup status</p>
        </div>
      </div>

      <div className="space-y-3">
        {backupLogs.map((log, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800">{log.date}</span>
                <span className="text-sm text-gray-600">{log.time}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {log.type}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${log.status === "Success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {log.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Size: {log.size}</span>
              <span>Duration: {log.duration}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{log.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackupLogs;
