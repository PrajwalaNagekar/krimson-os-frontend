import React from 'react';
import { TrendingUp } from 'lucide-react';

const TermComparisonChart = ({ grades }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
        <TrendingUp className="text-blue-500" size={20} />
        Term 1 vs Term 2 Comparison
      </h3>
      
      <div className="space-y-5">
        {grades.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-600 w-24 truncate">{item.subject}</span>
              <div className="flex gap-4 text-[10px] font-medium text-slate-400">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-300"></div> T1: {item.term1}%</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> T2: {item.term2}%</span>
              </div>
            </div>
            <div className="h-4 flex gap-1 items-center">
              {/* Term 1 Bar */}
              <div 
                className="h-2 bg-slate-300 rounded-sm transition-all duration-500 hover:bg-slate-400"
                style={{ width: `${item.term1}%` }}
              ></div>
            </div>
            <div className="h-4 flex gap-1 items-center mt-0.5">
              {/* Term 2 Bar */}
               <div 
                className="h-2 bg-indigo-500 rounded-sm transition-all duration-500 shadow-sm group-hover:bg-indigo-600"
                style={{ width: `${item.term2}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermComparisonChart;
