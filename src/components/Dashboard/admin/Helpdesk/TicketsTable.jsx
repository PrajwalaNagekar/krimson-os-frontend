import React from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  CheckSquare,
  Layers,
} from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const TicketsTable = ({ tickets, setSelectedTicket }) => {
  const { categoryColors, priorityColors, slaColors } =
    ADMIN_DATA.helpdeskConfig;

  // Helper functions
  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors.Default;
  };

  const getPriorityColor = (priority) => {
    return priorityColors[priority] || priorityColors.Default;
  };

  const getSLAColor = (hoursElapsed) => {
    if (hoursElapsed < 24) return slaColors.safe;
    if (hoursElapsed < 48) return slaColors.warning;
    return slaColors.danger;
  };

  const getSLAIcon = (hoursElapsed) => {
    if (hoursElapsed < 24) return <CheckCircle size={14} />;
    if (hoursElapsed < 48) return <Clock size={14} />;
    return <AlertTriangle size={14} />;
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Ticket Details
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Category
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Submitted By
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                SLA Status
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tickets.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-slate-100">
                      <AlertCircle className="text-slate-400" size={32} />
                    </div>
                    <p className="text-lg font-bold text-slate-400">
                      No tickets found
                    </p>
                    <p className="text-sm text-slate-400">
                      Try adjusting your filters or search query
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-blue-50/20 transition-colors group"
                >
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800 text-base mb-1">
                        {ticket.subject}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                          #{ticket.id}
                        </span>
                        {ticket.escalated && (
                          <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                            <AlertTriangle size={12} />
                            Escalated {ticket.escalationLevel}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getCategoryColor(ticket.category)}`}
                    >
                      <Layers size={14} />
                      {ticket.category}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {ticket.from.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">
                          {ticket.from}
                        </p>
                        <p className="text-xs text-slate-400">
                          {ticket.fromRole}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getPriorityColor(ticket.priority)}`}
                    >
                      <AlertCircle size={14} />
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="p-5">
                    {ticket.status === "Resolved" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border bg-green-50 text-green-600 border-green-200">
                        <CheckCircle size={14} />
                        Resolved in {ticket.resolutionTime}h
                      </span>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getSLAColor(ticket.hoursElapsed)}`}
                      >
                        {getSLAIcon(ticket.hoursElapsed)}
                        {ticket.hoursElapsed}h elapsed
                      </span>
                    )}
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                        ticket.status === "Open"
                          ? "bg-blue-50 text-blue-600 border-blue-100"
                          : "bg-green-50 text-green-600 border-green-100"
                      }`}
                    >
                      {ticket.status === "Open" ? (
                        <Clock size={14} />
                      ) : (
                        <CheckCircle size={14} />
                      )}
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedTicket(ticket)}
                        className="flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm"
                      >
                        <Eye size={16} />
                        <span>View</span>
                      </button>
                      {ticket.status !== "Resolved" && (
                        <button className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-green-500/20 text-sm">
                          <CheckSquare size={16} />
                          <span>Resolve</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsTable;
