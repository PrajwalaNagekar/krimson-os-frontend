import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Calendar, Clock, FileText, TrendingUp, AlertTriangle, Download, BarChart3, TrendingDown, Award, ExternalLink } from 'lucide-react';

const ExamDashboard = () => {
  const { exams, examPerformance } = STUDENT_DATA;

  // Mock performance data


  return (
    <div className="space-y-8">
      {/* Premium Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-xl mb-4">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Calendar size={32} />
            <h2 className="text-3xl font-bold">Exam & Assessment Dashboard</h2>
          </div>
          <p className="text-white/90 text-sm">Track your exams, view performance, and download important documents.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Exams Calendar */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Upcoming Exams</h3>
          
          {exams.map((exam, index) => (
            <div key={exam.id} className="group relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
              
              {/* Decorative Blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6 flex-1">
                  {/* Date Badge - Premium Gradient */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 text-cyan-700 px-5 py-4 rounded-2xl text-center min-w-[80px] shadow-lg border-2 border-white">
                      <span className="block text-xs font-bold uppercase tracking-wider">{new Date(exam.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="block text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{new Date(exam.date).getDate()}</span>
                    </div>
                  </div>
                  
                  {/* Exam Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">{exam.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl text-slate-600 text-xs font-bold shadow-sm">
                        <Clock size={14} className="text-blue-500"/> {exam.time}
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl text-xs font-bold shadow-sm">
                        <FileText size={14}/> {exam.syllabus}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Download Buttons - Enhanced */}
                <div className="flex flex-col gap-3">
                  <button className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 group/btn">
                    <Download size={16} className="group-hover/btn:animate-bounce" />
                    Download Hall Ticket
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2 group/btn shadow-lg">
                    <Download size={16} className="group-hover/btn:animate-bounce" />
                    Download Syllabus
                  </button>
                  <a href="#" className="flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group/link">
                    <span>View in app</span>
                    <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Performance & Stats */}
        <div className="space-y-6">
          {/* Performance Overview */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                <TrendingUp className="text-blue-600" size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Performance Overview</h3>
            </div>
            
            <div className="space-y-5">
              {/* Average Score */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Average Score</span>
                  <span className="text-blue-600">{examPerformance.average}%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all shadow-md" style={{ width: `${examPerformance.average}%` }}></div>
                </div>
              </div>
              
              {/* Strongest Subject */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-3">
                  <Award className="text-green-600" size={24} />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-green-700 uppercase">Strongest Subject</p>
                    <p className="text-base font-bold text-slate-800">{examPerformance.strongest.subject}</p>
                    <p className="text-sm font-bold text-green-600">{examPerformance.strongest.score}%</p>
                  </div>
                </div>
              </div>
              
              {/* Weakest Subject */}
              <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-200">
                <div className="flex items-center gap-3">
                  <TrendingDown className="text-red-600" size={24} />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-red-700 uppercase">Needs Improvement</p>
                    <p className="text-base font-bold text-slate-800">{examPerformance.weakest.subject}</p>
                    <p className="text-sm font-bold text-red-600">{examPerformance.weakest.score}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Performance Graph */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                <BarChart3 className="text-purple-600" size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Term Comparison</h3>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Term 1</span>
                  <span className="text-purple-600">{examPerformance.term1Avg}%</span>
                </div>
                <div className="w-full bg-slate-100 h-8 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold" style={{ width: `${examPerformance.term1Avg}%` }}>
                    {examPerformance.term1Avg}%
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Term 2</span>
                  <span className="text-cyan-600">{examPerformance.term2Avg}%</span>
                </div>
                <div className="w-full bg-slate-100 h-8 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full flex items-center justify-end pr-3 text-white text-xs font-bold" style={{ width: `${examPerformance.term2Avg}%` }}>
                    {examPerformance.term2Avg}%
                  </div>
                </div>
              </div>
              
              {/* Improvement Indicator */}
              <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <TrendingUp className="text-green-600" size={16} />
                <span className="text-xs font-bold text-green-700">
                  +{examPerformance.term2Avg - examPerformance.term1Avg}% Improvement
                </span>
              </div>
            </div>
          </div>

          {/* Exam Rules Alert */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-3xl border-2 border-yellow-300 shadow-lg">
            <div className="flex gap-3">
              <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">Exam Rules</h4>
                <p className="text-xs text-yellow-700">Please bring your Hall Ticket and ID Card. Electronic gadgets are strictly prohibited inside the hall.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
