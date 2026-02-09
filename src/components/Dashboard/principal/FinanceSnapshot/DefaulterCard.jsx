import React from "react";
import { Phone, Eye } from "lucide-react";

const DefaulterCard = ({
  studentName,
  grade,
  rollNumber,
  amount,
  daysOverdue,
  category,
}) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">
          Grade {grade} • Roll #{rollNumber}
        </p>
      </div>
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
          category === "Tuition"
            ? "bg-red-100 text-red-700"
            : category === "Transport"
              ? "bg-orange-100 text-orange-700"
              : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {category}
      </span>
    </div>
    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs text-slate-500">Outstanding Amount</p>
        <p className="text-xl font-bold text-red-600">
          ${amount.toLocaleString()}
        </p>
      </div>
      <div className="text-right">
        <p className="text-xs text-slate-500">Overdue</p>
        <p className="text-sm font-bold text-orange-600">{daysOverdue} days</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Phone className="w-3 h-3" />
        Contact
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Eye className="w-3 h-3" />
        History
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
    </div>
  </div>
);

export default DefaulterCard;
