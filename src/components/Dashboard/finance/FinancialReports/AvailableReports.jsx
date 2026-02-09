import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { Calendar, Clock, Mail, Download, Eye, FileText } from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const AvailableReports = ({ reports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReports = reports.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(reports.length / itemsPerPage);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Available Reports
          </h2>
          <p className="text-sm text-gray-600">
            Generate and download reports in multiple formats
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {currentReports.map((report) => {
          const Icon = LucideIcons[report.icon];
          return (
            <div
              key={report.id}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${report.color}`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                {report.comingSoon && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {report.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>

              <div className="space-y-2 mb-4">
                {report.lastGenerated && (
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>Last generated: {report.lastGenerated}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar className="w-3 h-3" />
                  <span>Frequency: {report.frequency}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Mail className="w-3 h-3" />
                  <span>Recipients: {report.recipients.join(", ")}</span>
                </div>
              </div>

              {!report.comingSoon && (
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <Download className="w-3 h-3" />
                      <span>Export PDF</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                  <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center justify-center gap-2">
                    <Eye className="w-3 h-3" />
                    <span>Preview</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={reports.length}
      />
    </div>
  );
};

export default AvailableReports;
