import React from "react";
import {
  Database,
  Clock,
  Plus,
  Edit,
  Trash2,
  Activity,
  Lock,
  User,
  Eye,
  ChevronLeft,
} from "lucide-react";

const getActionColor = (action) => {
  switch (action) {
    case "CREATE":
      return "bg-green-100 text-green-700 border-green-200";
    case "EDIT":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "DELETE":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const getSeverityColor = (severity) => {
  switch (severity) {
    case "CRITICAL":
      return "bg-red-100 text-red-700 border-red-200";
    case "WARNING":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "INFO":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const getActionIcon = (action) => {
  switch (action) {
    case "CREATE":
      return <Plus size={16} className="text-green-600" />;
    case "EDIT":
      return <Edit size={16} className="text-blue-600" />;
    case "DELETE":
      return <Trash2 size={16} className="text-red-600" />;
    default:
      return <Activity size={16} className="text-slate-600" />;
  }
};

const AuditLogTable = ({
  logs,
  indexOfFirstItem,
  indexOfLastItem,
  totalEvents,
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Database className="text-blue-500" size={24} />
              Activity Log
            </h2>
            <p className="text-sm text-slate-500">
              Showing {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, totalEvents)} of {totalEvents} events
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Clock size={14} className="text-green-500" />
            <span className="font-bold text-green-600">
              Live Monitoring Active
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group bg-gradient-to-br from-white to-slate-50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {getActionIcon(log.action)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getActionColor(
                        log.action,
                      )}`}
                    >
                      {log.action}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getSeverityColor(
                        log.severity,
                      )}`}
                    >
                      {log.severity}
                    </span>
                    {log.pdpaRelevant && (
                      <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold border border-purple-200 flex items-center gap-1">
                        <Lock size={12} />
                        PDPA
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">
                    {log.description}
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">{log.details}</p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                    <div>
                      <p className="text-slate-500 font-medium mb-1">User</p>
                      <div className="flex items-center gap-1">
                        <User size={12} className="text-blue-500" />
                        <p className="font-bold text-blue-600">{log.user}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">
                        Department
                      </p>
                      <p className="font-bold text-slate-700">
                        {log.department}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Module</p>
                      <p className="font-bold text-slate-700">{log.module}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">
                        Timestamp
                      </p>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-slate-400" />
                        <p className="font-bold text-slate-700">
                          {log.timestamp}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">
                        IP Address
                      </p>
                      <p className="font-mono text-xs font-bold text-slate-700">
                        {log.ipAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  Details
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalEvents > 0 && (
        <div className="px-8 py-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            Page <span className="font-bold text-slate-700">{currentPage}</span>{" "}
            of <span className="font-bold text-slate-700">{totalPages}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-xl border transition-all ${
                currentPage === 1
                  ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl border font-bold text-sm transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-xl border transition-all ${
                currentPage === totalPages
                  ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              <ChevronLeft size={18} className="rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditLogTable;
