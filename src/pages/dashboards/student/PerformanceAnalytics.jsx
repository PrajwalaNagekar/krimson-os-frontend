import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { TrendingUp, Target, Award, Lightbulb } from 'lucide-react';

const PerformanceAnalytics = () => {
  const { analytics, analyticsFocusArea } = STUDENT_DATA;

  // --- SVG Radar Chart Helpers ---
  const radarRadius = 100;
  const radarCenter = 120;
  const angleSlice = (Math.PI * 2) / analytics.subjectStrengths.length;

  const getCoordinates = (value, index) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radarRadius;
    return {
      x: radarCenter + r * Math.cos(angle),
      y: radarCenter + r * Math.sin(angle),
    };
  };

  const radarPoints = analytics.subjectStrengths
    .map((s, i) => {
      const { x, y } = getCoordinates(s.score, i);
      return `${x},${y}`;
    })
    .join(' ');

  const bgRadarPoints = analytics.subjectStrengths
    .map((s, i) => {
      const { x, y } = getCoordinates(100, i); // Full scale for background
      return `${x},${y}`;
    })
    .join(' ');


  // --- SVG Line Chart Helpers ---
  const chartHeight = 200;
  const chartWidth = 500;
  const chartPadding = 40;
  
  // Scales
  const getX = (index) => chartPadding + (index / (analytics.academicGrowth.length - 1)) * (chartWidth - 2 * chartPadding);
  const getY = (value) => chartHeight - chartPadding - (value / 100) * (chartHeight - 2 * chartPadding);

  const createPath = (key) => {
      return analytics.academicGrowth.map((d, i) => {
          return `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d[key])}`;
      }).join(' ');
  };


  return (
    <div className="space-y-8">
      {/* 1. Academic Growth & Rank Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class Rank Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center">
             <div className="relative mb-4">
                 <div className="w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center">
                     <div className="text-4xl font-extrabold text-indigo-600">{analytics.grade}</div>
                 </div>
                 <div className="absolute -bottom-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                     {analytics.percentile}
                 </div>
             </div>
             <p className="text-slate-500 font-bold">Overall Grade</p>
             <p className="text-xs text-slate-400 mt-1">GPA: {analytics.gpa}</p>
          </div>

          {/* Academic Growth Line Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm overflow-hidden">
             <div className="flex justify-between items-center mb-6">
                 <div>
                    <h3 className="text-lg font-bold text-slate-800">Academic Growth</h3>
                    <p className="text-xs text-slate-500">Subject-wise performance over terms</p>
                 </div>
                 <div className="flex gap-4 text-xs font-bold">
                     <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Math</div>
                     <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Science</div>
                     <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> English</div>
                 </div>
             </div>
             
             <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full min-w-[500px]">
                    {/* Grid Lines */}
                    {[20, 40, 60, 80, 100].map(val => (
                        <line key={val} x1={chartPadding} y1={getY(val)} x2={chartWidth - chartPadding} y2={getY(val)} stroke="#e2e8f0" strokeDasharray="4"/>
                    ))}
                    
                    {/* Lines */}
                    <path d={createPath('math')} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                    <path d={createPath('science')} fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                    <path d={createPath('english')} fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />

                    {/* Dots */}
                    {analytics.academicGrowth.map((d, i) => (
                        <g key={i}>
                            <circle cx={getX(i)} cy={getY(d.math)} r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx={getX(i)} cy={getY(d.science)} r="4" fill="white" stroke="#22c55e" strokeWidth="2" />
                            <circle cx={getX(i)} cy={getY(d.english)} r="4" fill="white" stroke="#a855f7" strokeWidth="2" />
                            {/* X-Axis Labels */}
                            <text x={getX(i)} y={chartHeight - 10} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="bold">{d.term}</text>
                        </g>
                    ))}
                </svg>
             </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* 2. Strength & Weakness Radar Chart */}
         <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-slate-800 mb-2 self-start">Subject Strength Radar</h3>
            <div className="relative w-64 h-64 my-4">
               <svg viewBox="0 0 240 240" className="w-full h-full">
                  {/* Background Polygon */}
                  <polygon points={bgRadarPoints} fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  {/* Grid Levels */}
                  {[0.25, 0.5, 0.75].map(scale => (
                      <polygon 
                        key={scale}
                        points={analytics.subjectStrengths.map((s, i) => { const {x,y} = getCoordinates(100*scale, i); return `${x},${y}`; }).join(' ')} 
                        fill="none" 
                        stroke="#cbd5e1" 
                        strokeWidth="0.5" 
                        strokeDasharray="4"
                      />
                  ))}
                  
                  {/* Data Polygon */}
                  <polygon points={radarPoints} fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />
                  
                  {/* Labels */}
                  {analytics.subjectStrengths.map((s, i) => {
                      const { x, y } = getCoordinates(115, i);
                      return (
                          <text 
                            key={s.subject} 
                            x={x} 
                            y={y} 
                            textAnchor="middle" 
                            alignmentBaseline="middle" 
                            fontSize="10" 
                            fontWeight="bold" 
                            fill="#64748b"
                          >
                            {s.subject}
                          </text>
                      );
                  })}
               </svg>
            </div>
            <p className="text-xs text-slate-500 text-center italic">Visualization of performance across core disciplines.</p>
         </div>

         {/* 3. AI Study Tips */}
         <div className="space-y-6">
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-3xl p-6 text-white shadow-xl">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"><Lightbulb size={24}/></div>
                  <div>
                      <h3 className="font-bold text-lg">AI Study Companion</h3>
                      <p className="text-xs opacity-80">Personalized insights based on your gaps</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                   {analytics.aiStudyTips.map(tip => (
                       <div key={tip.id} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                           <div className="flex justify-between items-start mb-1">
                               <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg bg-white/20 text-white`}>
                                   {tip.subject} • {tip.topic}
                               </span>
                           </div>
                           <p className="text-sm font-medium mb-3 leading-relaxed">"{tip.tip}"</p>
                           <button className="w-full py-2 bg-white text-violet-600 font-bold rounded-lg text-xs hover:bg-slate-50 transition-colors shadow-sm">
                               {tip.action} →
                           </button>
                       </div>
                   ))}
               </div>
            </div>

            <div className={`bg-${analyticsFocusArea.color}-50 border border-${analyticsFocusArea.color}-100 p-6 rounded-3xl`}>
                <h4 className={`font-bold text-${analyticsFocusArea.color}-800 mb-2`}>Focus Area</h4>
                <p className={`text-sm text-${analyticsFocusArea.color}-700`}>
                    {analyticsFocusArea.message}
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
