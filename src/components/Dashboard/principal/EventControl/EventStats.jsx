import React from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const EventStats = ({ upcomingCount, pendingCount, milestoneCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Total Events
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {upcomingCount}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <CalendarIcon className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">This month</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Pending
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
              {pendingCount}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">Require approval</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Milestones
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
              {milestoneCount}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">This term</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>

      <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Sync Status
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              Live
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-xs text-slate-600">All roles synced</p>
        <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
      </div>
    </div>
  );
};

export default EventStats;
