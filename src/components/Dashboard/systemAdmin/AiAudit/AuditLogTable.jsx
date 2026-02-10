import React from "react";
import {
  Clock,
  User,
  Cpu,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const AuditLogTable = ({ logs }) => {
  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-orange-100 text-orange-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Reviewed":
      case "Accepted":
      case "Action Taken":
        return <CheckCircle2 className="text-green-500" size={16} />;
      case "Pending Review":
        return <AlertCircle className="text-orange-500" size={16} />;
      default:
        return <XCircle className="text-slate-400" size={16} />;
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-4">
        Recent Audit Logs
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Timestamp
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Action
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                AI Model
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Decision
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Confidence
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Risk
              </th>
              <th className="text-left text-xs font-semibold text-slate-600 pb-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-3">
                  <div className="flex items-center gap-1 text-xs text-slate-600">
                    <Clock size={12} />
                    {new Date(log.timestamp).toLocaleString()}
                  </div>
                </td>
                <td className="py-3">
                  <p className="text-sm font-medium text-slate-800">
                    {log.action}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <User size={10} />
                    {log.user}
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <Cpu size={12} className="text-purple-500" />
                    <span className="text-xs text-slate-700">
                      {log.aiModel}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <p className="text-sm text-slate-700">{log.decision}</p>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${log.confidence * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {(log.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-md font-medium ${getRiskColor(log.riskLevel)}`}
                  >
                    {log.riskLevel}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    {getStatusIcon(log.status)}
                    <span className="text-xs text-slate-600">{log.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogTable;
