import React from 'react';
import { Quote } from 'lucide-react';

const TeacherRemarks = ({ teacherInsights }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
      <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
        <Quote className="text-orange-500" size={20} />
        Teacher Insights & Remarks
      </h3>

      <div className="space-y-4 flex-1">
        <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 relative">
          <Quote className="absolute top-4 left-4 text-orange-200" size={40} />
          <p className="relative z-10 text-slate-700 text-sm italic leading-relaxed pt-2 pl-4">
            {teacherInsights.remarks?.split(/(\*\*.*?\*\*)/).map((part, i) => 
                part.startsWith('**') ? <span key={`remark-${i}`} className="font-bold text-orange-700">{part.slice(2, -2)}</span> : <span key={`remark-${i}`}>{part}</span>
            )}
          </p>
          <div className="mt-4 flex items-center gap-3 relative z-10 pl-4">
            <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">{teacherInsights.teacherInitials}</div>
            <div>
              <p className="text-xs font-bold text-slate-800">{teacherInsights.teacherName}</p>
              <p className="text-[10px] text-slate-400">{teacherInsights.teacherRole}</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-blue-800 text-sm mb-2">Areas of Strength</h4>
          <div className="flex flex-wrap gap-2">
             {teacherInsights.strengths?.map((strength, idx) => (
                <span key={`strength-${idx}`} className="px-3 py-1 bg-white border border-blue-100 rounded-full text-xs font-medium text-blue-600 shadow-sm">{strength}</span>
             ))}
          </div>
        </div>

         <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100">
          <h4 className="font-bold text-red-800 text-sm mb-2">Areas for Improvement</h4>
           <div className="flex flex-wrap gap-2">
             {teacherInsights.improvements?.map((improvement, idx) => (
                <span key={`improvement-${idx}`} className="px-3 py-1 bg-white border border-red-100 rounded-full text-xs font-medium text-red-600 shadow-sm">{improvement}</span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRemarks;
