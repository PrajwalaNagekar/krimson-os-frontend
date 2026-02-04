import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  MessageSquare,
  CreditCard,
  ChevronRight,
} from "lucide-react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link
        to="/dashboard/parent/reports"
        className="group bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-5 rounded-2xl border-2 border-blue-100 hover:border-blue-200 transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500 rounded-xl text-white">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                View Report Card
              </h3>
              <p className="text-xs text-slate-500">Latest grades & feedback</p>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="text-slate-400 group-hover:text-blue-500 transition-colors"
          />
        </div>
      </Link>

      <Link
        to="/dashboard/parent/communication"
        className="group bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-5 rounded-2xl border-2 border-green-100 hover:border-green-200 transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-500 rounded-xl text-white">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Message Teacher
              </h3>
              <p className="text-xs text-slate-500">Quick communication</p>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="text-slate-400 group-hover:text-green-500 transition-colors"
          />
        </div>
      </Link>

      <Link
        to="/dashboard/parent/fees"
        className="group bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 p-5 rounded-2xl border-2 border-purple-100 hover:border-purple-200 transition-all hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-500 rounded-xl text-white">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">Pay Fees</h3>
              <p className="text-xs text-slate-500">Secure payment portal</p>
            </div>
          </div>
          <ChevronRight
            size={18}
            className="text-slate-400 group-hover:text-purple-500 transition-colors"
          />
        </div>
      </Link>
    </div>
  );
};

export default QuickActions;
