import React from "react";
import { X, CheckCircle, Clock } from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const TicketDetailsModal = ({ selectedTicket, setSelectedTicket }) => {
  const { categoryColors, priorityColors } = ADMIN_DATA.helpdeskConfig;

  // Helper functions
  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors.Default;
  };

  const getPriorityColor = (priority) => {
    return priorityColors[priority] || priorityColors.Default;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              Ticket Details
            </h2>
            <p className="text-white/80 text-sm font-mono">
              #{selectedTicket.id}
            </p>
          </div>
          <button
            onClick={() => setSelectedTicket(null)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Subject */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Subject
            </h3>
            <p className="text-lg font-bold text-slate-800">
              {selectedTicket.subject}
            </p>
          </div>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                Category
              </p>
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${getCategoryColor(selectedTicket.category)}`}
              >
                {selectedTicket.category}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                Priority
              </p>
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${getPriorityColor(selectedTicket.priority)}`}
              >
                {selectedTicket.priority}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                Status
              </p>
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${
                  selectedTicket.status === "Resolved"
                    ? "bg-green-50 text-green-600 border-green-200"
                    : "bg-blue-50 text-blue-600 border-blue-200"
                }`}
              >
                {selectedTicket.status}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                Assigned To
              </p>
              <p className="text-sm font-bold text-slate-700">
                {selectedTicket.assignedTo}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Description
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {selectedTicket.description}
            </p>
          </div>

          {/* Submitter Info */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
              Submitted By
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                {selectedTicket.from.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-800">
                  {selectedTicket.from}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-medium">
                    {selectedTicket.fromRole}
                  </span>
                  <span>{selectedTicket.fromContact}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comments / Activity */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
              Activity Log & Comments
            </h3>
            <div className="space-y-4">
              {selectedTicket.statusHistory?.map((history, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-slate-300 my-1"></div>
                    {index !== selectedTicket.statusHistory.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs text-slate-500 mb-0.5">
                      {new Date(history.time).toLocaleString()}
                    </p>
                    <p className="text-sm font-medium text-slate-700">
                      Status changed to{" "}
                      <span className="font-bold">{history.status}</span> by{" "}
                      {history.user}
                    </p>
                  </div>
                </div>
              ))}

              {selectedTicket.comments?.map((comment, index) => (
                <div key={`comment-${index}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs ring-2 ring-white shadow-sm">
                      {comment.user.charAt(0)}
                    </div>
                  </div>
                  <div className="bg-blue-50/50 p-3 rounded-xl rounded-tl-none border border-blue-100 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-700">
                        {comment.user}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {new Date(comment.time).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
          <button
            onClick={() => setSelectedTicket(null)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          {selectedTicket.status !== "Resolved" && (
            <button className="px-4 py-2 bg-green-600 text-white font-bold rounded-xl text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2">
              <CheckCircle size={16} />
              Resolve Ticket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
