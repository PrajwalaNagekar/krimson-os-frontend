import React from "react";
import { FileText, MessageSquare, Clock } from "lucide-react";
import { getTypeColor, getActionColor, formatTimestamp } from "./utils";

const ApprovalLog = ({ approvalLog }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Approval Log</h2>
          <p className="text-sm text-gray-600">
            Timestamped history of all approval actions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {approvalLog.map((log) => (
          <div
            key={log.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(log.type)}`}
                  >
                    {log.type}
                  </span>
                  <span className={`font-bold ${getActionColor(log.action)}`}>
                    {log.action}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {log.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {log.subject} • {log.teacher}
                </p>

                {log.comments && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-xs font-semibold text-blue-700 mb-1 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      Coordinator Comments:
                    </p>
                    <p className="text-sm text-gray-700">{log.comments}</p>
                  </div>
                )}
              </div>

              <div className="text-right md:text-left md:min-w-[180px]">
                <p className="text-xs text-gray-500 mb-1">Reviewed by</p>
                <p className="font-semibold text-gray-800 mb-2">
                  {log.approver}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1 md:justify-end">
                  <Clock className="w-3 h-3" />
                  {formatTimestamp(log.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
          <span>Load More</span>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>
    </div>
  );
};

export default ApprovalLog;
