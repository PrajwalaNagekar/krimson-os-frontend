import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const SubjectGradesTable = ({ grades }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-slate-800">Subject Performance</h3>
        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">Term 2 Finals</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                  <th className="p-5 text-xs font-extra bold text-slate-500 uppercase tracking-wider">Subject</th>
                  <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-center">Term 1</th>
                  <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-center">Term 2</th>
                  <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Performance Trend</th>
                  <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {grades.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-5">
                      <div className="font-bold text-slate-700">{item.subject}</div>
                      <div className="text-[10px] text-slate-400">{item.teacher || "Class Teacher"}</div>
                    </td>
                    <td className="p-5 text-center font-medium text-slate-500">{item.term1}%</td>
                    <td className="p-5 text-center">
                        <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                          item.term2 >= 85 ? 'bg-green-100 text-green-700' :
                          item.term2 >= 70 ? 'bg-blue-100 text-blue-700' :
                          item.term2 >= 50 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {item.term2}%
                        </span>
                    </td>
                    <td className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden max-w-[100px]">
                              <div className={`h-full rounded-full ${item.trend === 'up' ? 'bg-green-500' : item.trend === 'down' ? 'bg-red-400' : 'bg-slate-400'}`} style={{ width: `${Math.abs(item.term2 - item.term1) * 5}%`, minWidth: '20%' }}></div>
                          </div>
                          {item.trend === 'up' && <span className="flex items-center gap-1 text-green-500 font-bold text-xs"><TrendingUp size={14}/> +{item.term2 - item.term1}%</span>}
                          {item.trend === 'down' && <span className="flex items-center gap-1 text-red-500 font-bold text-xs"><TrendingDown size={14}/> {item.term2 - item.term1}%</span>}
                          {item.trend === 'flat' && <span className="flex items-center gap-1 text-slate-400 font-bold text-xs"><Minus size={14}/> No Change</span>}
                        </div>
                    </td>
                    <td className="p-5 font-bold text-slate-800">
                      {item.term2 >= 90 ? 'A+' : item.term2 >= 80 ? 'A' : item.term2 >= 70 ? 'B' : item.term2 >= 60 ? 'C' : item.term2 >= 50 ? 'D' : 'F'}
                    </td>
                  </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectGradesTable;
