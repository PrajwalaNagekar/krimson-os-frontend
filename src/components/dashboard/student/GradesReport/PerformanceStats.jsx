import React from 'react';
import { Calculator, BookOpen, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const PerformanceStats = ({ grades, term1Avg, term2Avg }) => {
  
  // Find Best Subject
  const bestSubject = grades.reduce((max, grade) => grade.term2 > max.term2 ? grade : max, grades[0] || { subject: 'N/A', term2: 0 });

  // Calculate Trend Stats
  const improvedSubjects = grades.filter(g => g.term2 > g.term1).length;
  const declinedSubjects = grades.filter(g => g.term2 < g.term1).length;
  const sameSubjects = grades.length - improvedSubjects - declinedSubjects;

  // Determine overall trend label
  let trendLabel = "Stable";
  let trendColor = "text-slate-500";
  if (improvedSubjects > declinedSubjects) {
      trendLabel = "Improving";
      trendColor = "text-green-500";
  } else if (declinedSubjects > improvedSubjects) {
      trendLabel = "Needs Attention";
      trendColor = "text-red-500";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Average Card */}
      <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-lg">
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

      {/* Best Subject Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
         <div className="flex items-center gap-3 mb-1">
            <BookOpen className="text-slate-400" size={18} />
            <h3 className="font-bold text-slate-500 text-sm uppercase tracking-wide">Best Subject</h3>
         </div>
         <p className="text-2xl font-bold text-slate-800">{bestSubject.subject}</p>
         <p className="text-xs text-green-500 font-bold mt-1">{bestSubject.term2}% Score</p>
      </div>

      {/* Performance Trends Card (Replaces Rank) */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
         <div className="flex items-center gap-3 mb-1">
            <TrendingUp className="text-slate-400" size={18} />
            <h3 className="font-bold text-slate-500 text-sm uppercase tracking-wide">Performance Trend</h3>
         </div>
         <p className="text-2xl font-bold text-slate-800">{improvedSubjects} / {grades.length} <span className="text-base font-normal text-slate-400">Subjects Up</span></p>
         <p className={`text-xs font-bold mt-1 ${trendColor}`}>
            Overall: {trendLabel}
         </p>
      </div>
    </div>
  );
};

export default PerformanceStats;
