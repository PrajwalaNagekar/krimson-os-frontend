import React from "react";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

const IntegrityLog = ({ logs }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-cyan-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Shield className="text-green-500" size={28} />
              Data Integrity Verification Log
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Checksum validation history
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-green-50 to-cyan-50 text-slate-600 text-xs uppercase font-bold">
              <tr>
                <th className="p-4 rounded-tl-xl">Timestamp</th>
                <th className="p-4">Backup File</th>
                <th className="p-4">Checksum</th>
                <th className="p-4">Message</th>
                <th className="p-4 rounded-tr-xl text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4">
                    <p className="text-sm text-slate-700 font-medium font-mono">
                      {log.timestamp}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-slate-800 font-bold">
                      {log.file}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="text-xs text-slate-500 font-mono">
                      {log.checksum}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-slate-600">{log.message}</p>
                  </td>
                  <td className="p-4 text-center">
                    {log.status === "Passed" ? (
                      <div className="flex justify-center">
                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center gap-1">
                          <CheckCircle size={14} />
                          Passed
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold flex items-center gap-1">
                          <AlertCircle size={14} />
                          Failed
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntegrityLog;
