import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Download, TrendingUp, TrendingDown, Minus, Quote, BookOpen, Calculator, Award } from 'lucide-react';

const GradesReport = () => {
  const { grades } = STUDENT_DATA;
  const user = STUDENT_DATA.user;

  // Function to handle printing/downloading PDF
  const handleDownload = () => {
    window.print();
  };

  // Calculate Overall Averages
  const term1Avg = Math.round(grades.reduce((acc, curr) => acc + curr.term1, 0) / grades.length);
  const term2Avg = Math.round(grades.reduce((acc, curr) => acc + curr.term2, 0) / grades.length);

  return (
    <div className="space-y-8 print:space-y-6 animate-fade-in-up">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-area, .print-area * {
              visibility: visible;
            }
            .print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 print-area">
         <div>
            <h2 className="text-2xl font-bold text-slate-800">Academic Performance Report</h2>
            <p className="text-slate-500 text-sm mt-1">
              Student: <span className="font-bold text-slate-700">{user.name}</span> | Grade: <span className="font-bold text-slate-700">{user.grade}</span> | Section: <span className="font-bold text-slate-700">{user.section}</span>
            </p>
         </div>
         <button 
            onClick={handleDownload}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg transition-transform active:scale-95 hover:shadow-indigo-200 no-print"
         >
            <Download size={18} /> Download Report
         </button>
      </div>

      <div className="print-area space-y-8">
        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Calculator size={20} />
              </div>
              <h3 className="font-bold text-lg opacity-90">Term 2 Average</h3>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">{term2Avg}%</span>
              <span className={`text-sm font-bold mb-1 px-2 py-0.5 rounded-full ${term2Avg >= term1Avg ? 'bg-green-400 text-green-900' : 'bg-red-400 text-red-900'}`}>
                {term2Avg >= term1Avg ? '+' : ''}{term2Avg - term1Avg}%
              </span>
            </div>
            <p className="text-xs opacity-70 mt-2">Compared to Term 1 ({term1Avg}%)</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-1">
                <BookOpen className="text-slate-400" size={18} />
                <h3 className="font-bold text-slate-500 text-sm uppercase tracking-wide">Best Subject</h3>
             </div>
             <p className="text-2xl font-bold text-slate-800">Mathematics</p>
             <p className="text-xs text-green-500 font-bold mt-1">92% Score (Top 5% in Class)</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-1">
                <Award className="text-slate-400" size={18} />
                <h3 className="font-bold text-slate-500 text-sm uppercase tracking-wide">Class Rank</h3>
             </div>
             <p className="text-2xl font-bold text-slate-800">5th <span className="text-base font-normal text-slate-400">/ 35</span></p>
             <p className="text-xs text-blue-500 font-bold mt-1">Top 15% Percentile</p>
          </div>
        </div>

        {/* Detailed Grade Table */}
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

        {/* Graphical Comparison (Term 1 vs Term 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 break-inside-avoid">
          {/* Bar Chart Section */}
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

          {/* Teacher Comments & Insights */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
              <Quote className="text-orange-500" size={20} />
              Teacher Insights & Remarks
            </h3>

            <div className="space-y-4 flex-1">
              <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 relative">
                <Quote className="absolute top-4 left-4 text-orange-200" size={40} />
                <p className="relative z-10 text-slate-700 text-sm italic leading-relaxed pt-2 pl-4">
                  "Jude has shown remarkable improvement in <span className="font-bold text-orange-700">Mathematics</span> and Physics this term. His problem-solving skills have advanced significantly. However, he needs to focus more on <span className="font-bold text-slate-800">History</span> essays to improve his overall grade."
                </p>
                <div className="mt-4 flex items-center gap-3 relative z-10 pl-4">
                  <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">SA</div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Sarah Anderson</p>
                    <p className="text-[10px] text-slate-400">Class Teacher</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 text-sm mb-2">Areas of Strength</h4>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs font-medium text-blue-600 shadow-sm">Critical Thinking</span>
                   <span className="px-3 py-1 bg-white border-blue-100 border rounded-full text-xs font-medium text-blue-600 shadow-sm">Mathematical Logic</span>
                   <span className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs font-medium text-blue-600 shadow-sm">Peer Collaboration</span>
                </div>
              </div>

               <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-800 text-sm mb-2">Areas for Improvement</h4>
                 <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white border border-red-100 rounded-full text-xs font-medium text-red-600 shadow-sm">Time Management</span>
                   <span className="px-3 py-1 bg-white border border-red-100 rounded-full text-xs font-medium text-red-600 shadow-sm">Essay Structure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 text-center text-blue-700 text-xs font-bold print:hidden">
         Note: This is a provisional report. The final signed report card will be distributed on Jan 30th.
      </div>
    </div>
  );
};

export default GradesReport;
