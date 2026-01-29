import React, { useState } from 'react';
import { 
  Download, FileText, Eye, TrendingUp, TrendingDown, 
  Award, BookOpen, Calendar, CheckCircle, Clock,
  ChevronDown, Filter, ShieldCheck, FileCheck, Target,
  Lightbulb, ArrowUpRight
} from 'lucide-react';

const ReportCard = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');

  // Static Data
  const academicGrowth = {
    current: 8.8,
    previous: 8.2,
    trend: 'up',
    percentage: 7.3
  };

  const quickStats = [
    { label: 'Overall GPA', value: '3.8/4.0', icon: <Award className="text-yellow-500" size={20} />, color: 'bg-yellow-50' },
    { label: 'Class Rank', value: 'Top 5%', icon: <TrendingUp className="text-blue-500" size={20} />, color: 'bg-blue-50' },
    { label: 'Attendance', value: '96%', icon: <Clock className="text-green-500" size={20} />, color: 'bg-green-50' },
    { label: 'Total Subjects', value: '8', icon: <BookOpen className="text-purple-500" size={20} />, color: 'bg-purple-50' }
  ];

  const termPerformance = [
    { term: 'Term 1', gpa: 3.6, percentage: 88, subjects: { Math: 85, Sci: 90, Eng: 88, Hist: 82 } },
    { term: 'Term 2', gpa: 3.7, percentage: 90, subjects: { Math: 88, Sci: 92, Eng: 89, Hist: 85 } },
    { term: 'Term 3', gpa: 3.8, percentage: 92, subjects: { Math: 92, Sci: 94, Eng: 90, Hist: 88 } },
    { term: 'Final', gpa: 3.9, percentage: 94, subjects: { Math: 95, Sci: 95, Eng: 92, Hist: 90 } },
  ];

  const cumulativeRecord = [
    { subject: 'Mathematics', t1: 'A', t2: 'A', t3: 'A+', final: 'A+', credits: 4 },
    { subject: 'Science', t1: 'A+', t2: 'A+', t3: 'A+', final: 'A+', credits: 4 },
    { subject: 'English', t1: 'A', t2: 'A', t3: 'A', final: 'A', credits: 3 },
    { subject: 'History', t1: 'B+', t2: 'A-', t3: 'A-', final: 'A-', credits: 3 },
    { subject: 'Computer Sci', t1: 'A', t2: 'A+', t3: 'A+', final: 'A+', credits: 3 },
    { subject: 'Art', t1: 'A-', t2: 'A', t3: 'A', final: 'A', credits: 2 },
  ];

  // Parent-Readable AI Summaries
  const parentSummaries = [
    {
      id: 1,
      category: 'Overall Performance',
      icon: <Award className="text-yellow-500" size={20} />,
      color: 'bg-yellow-50 border-yellow-200',
      summary: 'Your child is performing exceptionally well across all subjects',
      details: 'Alex has shown consistent improvement throughout the academic year, maintaining a GPA of 3.8 which places them in the top 5% of their grade. This demonstrates strong academic abilities and excellent work ethic.',
      highlights: [
        'Excellent overall GPA of 3.8/4.0',
        'Consistent upward trend across all terms',
        'Exceptional performance in Science and Mathematics'
      ]
    },
    {
      id: 2,
      category: 'Strengths',
      icon: <TrendingUp className="text-green-500" size={20} />,
      color: 'bg-green-50 border-green-200',
      summary: 'Strong performance in STEM subjects with room for continued growth',
      details: 'Alex excels particularly in Science (A+) and Mathematics (A+), showing advanced problem-solving skills and analytical thinking. Computer Science performance has also been outstanding.',
      highlights: [
        'Science: Consistently scored A+ in all terms',
        'Mathematics: Improved from A to A+ in final term',
        'Computer Science: Advanced proficiency demonstrated'
      ]
    },
    {
      id: 3,
      category: 'Areas for Growth',
      icon: <Target className="text-blue-500" size={20} />,
      color: 'bg-blue-50 border-blue-200',
      summary: 'History shows good improvement, continuing this momentum would be beneficial',
      details: 'While History started at B+, Alex has shown steady improvement to A- by the final term. Continued focus on analytical writing and historical context interpretation will help maintain this positive trajectory.',
      highlights: [
        'History: Improved from B+ to A- (significant growth)',
        'English: Stable at A grade with strong writing skills',
        'Opportunity to enhance humanities performance further'
      ]
    },
    {
      id: 4,
      category: 'Attendance & Behavior',
      icon: <CheckCircle className="text-purple-500" size={20} />,
      color: 'bg-purple-50 border-purple-200',
      summary: 'Excellent attendance record and positive classroom engagement',
      details: 'Alex maintains a 96% attendance rate, demonstrating reliability and commitment to learning. Teachers report active participation in class discussions and collaborative work.',
      highlights: [
        '96% attendance rate (well above average)',
        'Regularly participates in class activities',
        'Shows good collaboration with peers'
      ]
    }
  ];

  const reportCards = [
    { 
      id: 1, 
      title: "Consolidated Annual Report", 
      term: "Final Term",
      year: "2025-2026",
      date: "Dec 15, 2025", 
      grade: "A+",
      status: "Verified",
      version: "v1.0",
      size: "2.4 MB"
    },
    { 
      id: 2, 
      title: "Term 2 Assessment Report", 
      term: "Term 2",
      year: "2025-2026",
      date: "Oct 10, 2025", 
      grade: "A",
      status: "Verified",
      version: "v1.0",
      size: "1.8 MB"
    },
    { 
      id: 3, 
      title: "Term 1 Assessment Report", 
      term: "Term 1",
      year: "2025-2026", 
      date: "Aug 22, 2025", 
      grade: "A-",
      status: "Verified",
      version: "v1.2",
      size: "1.6 MB"
    }
  ];

  const handleDownload = (title) => {
    console.log(`Downloading: ${title}`);
    alert(`Downloading verified report: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 md:p-6 space-y-6">
      
      {/* Header Section */}
      <div className="relative rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 md:p-8 text-white shadow-2xl overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <FileCheck size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Academic Reports & Progress</h1>
              <p className="text-white/90 text-sm mt-1">Access official report cards and track academic growth</p>
            </div>
          </div>
          
          <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow-sm text-sm font-semibold transition-all">
              2025-2026
            </button>
            <button className="px-4 py-2 text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-all">
              2024-2025
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Growth & Stats (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Growth Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AGI Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                    <TrendingUp size={18} />
                  </span>
                  <h3 className="font-bold text-slate-700">Academic Growth Index</h3>
                </div>
                <div className="flex items-end gap-3 mt-4">
                  <span className="text-5xl font-extrabold text-slate-800 tracking-tight">
                    {academicGrowth.current}
                  </span>
                  <div className="flex flex-col mb-1.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Score</span>
                    <span className="text-green-500 text-xs font-bold flex items-center gap-0.5">
                      <TrendingUp size={12} />
                      +{academicGrowth.percentage}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50 relative z-10">
                <p className="text-xs text-slate-500">
                  Top 5% growth rate among peers. Previous term: <span className="font-semibold text-slate-700">{academicGrowth.previous}</span>
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800">{stat.value}</h4>
                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Performance Chart */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Historical Performance</h3>
                <p className="text-slate-400 text-sm">Term-wise percentage progression</p>
              </div>
              <select className="bg-slate-50 border-none text-sm font-semibold text-slate-600 rounded-xl px-4 py-2 cursor-pointer focus:ring-2 focus:ring-blue-100">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Science</option>
              </select>
            </div>

            {/* Custom CSS Chart */}
            <div className="h-64 w-full flex items-end gap-4 md:gap-8 px-2">
              {termPerformance.map((term, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group h-full justify-end">
                  <div className="relative w-full max-w-[60px] h-full flex items-end justify-center">
                    {/* Background Bar */}
                    <div className="absolute bottom-0 w-full h-full bg-slate-50 rounded-t-xl"></div>
                    
                    {/* Active Bar */}
                    <div 
                      className="relative w-full bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-xl transition-all duration-700 group-hover:from-blue-500 group-hover:to-cyan-500 shadow-lg group-hover:shadow-blue-200"
                      style={{ height: `${term.percentage}%` }}
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {term.percentage}%
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-bold text-slate-700 block">{term.term}</span>
                    <span className="text-[10px] text-slate-400">GPA {term.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cumulative Record Table */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
             <div className="p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-800">Cumulative Academic Record</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-slate-50/50">
                     <th className="p-4 pl-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Term 1</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Term 2</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Term 3</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Final</th>
                     <th className="p-4 pr-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Credits</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                   {cumulativeRecord.map((record, i) => (
                     <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                       <td className="p-4 pl-6 font-semibold text-slate-700">{record.subject}</td>
                       <td className="p-4 text-center text-sm font-medium text-slate-600">{record.t1}</td>
                       <td className="p-4 text-center text-sm font-medium text-slate-600">{record.t2}</td>
                       <td className="p-4 text-center text-sm font-medium text-slate-600">{record.t3}</td>
                       <td className="p-4 text-center">
                         <span className="inline-block w-8 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold">
                           {record.final}
                         </span>
                       </td>
                       <td className="p-4 pr-6 text-center text-sm text-slate-500">{record.credits}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </div>

        {/* Right Column - Downloadable Reports (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2.5 bg-pink-100 text-pink-600 rounded-xl">
                 <Download size={22} />
               </div>
               <div>
                 <h3 className="font-bold text-slate-800">Report Cards</h3>
                 <p className="text-xs text-slate-500">Official digital copies</p>
               </div>
            </div>

            <div className="space-y-4">
              {reportCards.map((card) => (
                <div 
                  key={card.id} 
                  className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck size={16} className="text-blue-500" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-100 group-hover:scale-105 transition-transform">
                      <FileText className="text-slate-400 group-hover:text-blue-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1 line-clamp-1">{card.title}</h4>
                      <p className="text-xs text-slate-500">{card.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
                    <div className="flex items-center gap-1.5">
                       <CheckCircle size={12} className="text-green-500" />
                       {card.status}
                    </div>
                    <span>{card.size}</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownload(card.title)}
                      className="flex-1 py-1.5 bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-300 transition-colors flex flex-col items-center justify-center gap-0.5"
                    >
                      <div className="flex items-center gap-1">
                        <Eye size={12} />
                        Preview
                      </div>
                      <span className="text-[9px] opacity-80 font-normal">get in app</span>
                    </button>
                    <button 
                      onClick={() => handleDownload(card.title)}
                      className="flex-1 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all flex flex-col items-center justify-center gap-0.5"
                    >
                      <div className="flex items-center gap-1">
                        <Download size={12} />
                        Download
                      </div>
                      <span className="text-[9px] opacity-80 font-normal">get in app</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100">
               <div className="flex items-start gap-3">
                 <ShieldCheck className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                 <div>
                   <h4 className="text-xs font-bold text-blue-700 mb-1">Authenticity Verified</h4>
                   <p className="text-[10px] text-blue-600/80 leading-relaxed">
                     All report cards are digitally signed and timestamped for authenticity. Version history is tracked for compliance.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Parent-Readable AI Summaries Section - Enhanced Premium Version - FULL WIDTH */}
      <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-indigo-100/50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        
        {/* Header Section */}
        <div className="relative z-10 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
            <div className="p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Lightbulb className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-1">
                Understanding Your Child's Progress
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium">AI-powered insights translated into clear, actionable guidance</p>
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full"></div>
        </div>

        {/* Insights Grid - Responsive Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          {parentSummaries.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative rounded-2xl backdrop-blur-sm bg-white/80 border-2 ${item.color} p-5 md:p-6 
                hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-indigo-50/0 group-hover:to-indigo-50/50 transition-all duration-500 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wider">
                        {item.category}
                      </h4>
                      <ArrowUpRight 
                        size={16} 
                        className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
                      />
                    </div>
                    <p className="text-slate-700 font-bold text-sm md:text-base leading-snug">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Details Text */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 px-1">
                  {item.details}
                </p>

                {/* Highlights Section */}
                <div className="space-y-2 bg-white/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-slate-100/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">Key Highlights</span>
                  </div>
                  {item.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 group/item hover:bg-green-50/50 rounded-lg p-1.5 transition-colors"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-100/40 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Information Footer */}
        <div className="relative z-10 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-100 shadow-inner">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0">
              <Lightbulb className="text-indigo-600" size={22} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm md:text-base font-bold text-indigo-800 mb-2 flex items-center gap-2">
                What This Means for Your Child
                <span className="text-xs font-normal text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">AI Insight</span>
              </h4>
              <p className="text-xs md:text-sm text-indigo-700/90 leading-relaxed">
                These summaries translate complex academic metrics into actionable insights. They help you understand not just the grades, but what they mean for your child's learning journey and where support might be most beneficial. Our AI analyzes patterns, trends, and contextual factors to provide personalized guidance.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-indigo-700 px-3 py-1.5 rounded-full font-semibold border border-indigo-200 shadow-sm">
                  📊 Data-Driven
                </span>
                <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-purple-700 px-3 py-1.5 rounded-full font-semibold border border-purple-200 shadow-sm">
                  🎯 Personalized
                </span>
                <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-pink-700 px-3 py-1.5 rounded-full font-semibold border border-pink-200 shadow-sm">
                  ✨ Parent-Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ReportCard;
