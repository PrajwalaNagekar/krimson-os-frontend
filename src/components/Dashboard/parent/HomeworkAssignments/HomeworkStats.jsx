import React from "react";
import { FileText, Clock, CheckCircle, CheckCheck } from "lucide-react";

const HomeworkStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">
              Total Assignments
            </p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              {stats.total}
            </h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl">
            <FileText className="text-cyan-600" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Pending</p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {stats.pending}
            </h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
            <Clock className="text-orange-600" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Submitted</p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {stats.submitted}
            </h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
            <CheckCircle className="text-blue-600" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Graded</p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              {stats.graded}
            </h3>
          </div>
          <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
            <CheckCheck className="text-green-600" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkStats;
