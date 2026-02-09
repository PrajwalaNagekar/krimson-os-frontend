import React from "react";
import { Calendar } from "lucide-react";
import CollectionMonthCard from "./CollectionMonthCard";

const CollectionOverview = ({ monthlyCollections }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Monthly Collection vs Target
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              6-month performance overview
            </p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
            +5% vs last year
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monthlyCollections.map((data, idx) => (
            <CollectionMonthCard key={idx} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionOverview;
