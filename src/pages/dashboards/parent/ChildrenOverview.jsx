import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { PARENT_DATA } from '../../../data/parentData';
import { User, TrendingUp, Award, ArrowRight, BookOpen, Target, ExternalLink } from 'lucide-react';

/**
 * Children Overview - Screen 2
 * Purpose: For parents with multiple children enrolled
 * Features: Child cards, quick switching, academic comparison graph
 * Future: Replace static data with Multi-Student Mapping API
 */
const ChildrenOverview = () => {
  const { children } = PARENT_DATA;
  const { selectedChildIndex, setSelectedChildIndex } = useOutletContext();
  const activeChild = children[selectedChildIndex];

  // Future API: Fetch children data via parent ID
  const fetchChildrenData = () => {
    console.log('Future API: GET /api/parent/children');
  };

  // Mock class average data (Future: from API)
  const classAverages = {
    'Grade 5-A': 75,
    'Grade 3-B': 80
  };

  return (
    <div className="space-y-6">
      {/* Header with Parent Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-2xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-3xl">
          <span className="bg-white/20 border border-white/30 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block mb-3">
            My Children
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Children Overview
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Overview of enrolled students linked to your account via SSO.
          </p>
        </div>
      </div>

      {/* Quick Switch - Child Selector */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Switch</h2>
        <div className="flex flex-wrap gap-3">
          {children.map((child, index) => (
            <button
              key={index}
              onClick={() => setSelectedChildIndex(index)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all ${
                selectedChildIndex === index
                  ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-blue-400 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <img 
                src={child.photo} 
                alt={child.name} 
                className="w-10 h-10 rounded-xl object-cover shadow-sm" 
              />
              <div className="text-left">
                <p className={`text-sm font-bold ${
                  selectedChildIndex === index ? 'text-blue-700' : 'text-slate-800'
                }`}>
                  {child.name}
                </p>
                <p className="text-xs text-slate-500">{child.class}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Child Profile Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
        {/* Decorative gradient accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-pink-50 rounded-bl-[100px] -mr-16 -mt-16 opacity-50"></div>
        
        <div className="relative z-10">
          {/* Child Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-100">
            <div className="relative group">
              <img 
                src={activeChild.photo} 
                alt={activeChild.name} 
                className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-white" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
                {activeChild.name}
              </h2>
              <p className="text-slate-600 font-semibold mb-3">{activeChild.class}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active Student
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg">
                  <Award size={12} />
                  ID: {activeChild.id}
                </span>
              </div>
            </div>
          </div>

          {/* Performance Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <TrendingUp size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Academic Growth</span>
                </div>
                <span className="text-4xl font-extrabold text-slate-800">{activeChild.academicGrowth}%</span>
                <p className="text-xs text-slate-500 mt-2">This semester</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-purple-600 mb-3">
                  <User size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Attendance</span>
                </div>
                <span className="text-4xl font-extrabold text-slate-800">{activeChild.attendance}%</span>
                <p className="text-xs text-slate-500 mt-2">This month</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 opacity-20 rounded-full blur-xl -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <Target size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Overall Grade</span>
                </div>
                <span className="text-4xl font-extrabold text-slate-800">{activeChild.academicGrowth}%</span>
                <p className="text-xs text-slate-500 mt-2">Class average: {classAverages[activeChild.class]}%</p>
              </div>
            </div>
          </div>

          {/* Academic Comparison Graph */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <BookOpen size={20} className="text-blue-600" />
                  Academic Comparison
                </h3>
                <p className="text-xs text-slate-500 mt-1">Performance vs Class Average</p>
              </div>
            </div>

            {/* Comparison Bars */}
            <div className="space-y-6">
              {/* Child's Performance */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-700">{activeChild.name}'s Grade</span>
                  <span className="text-2xl font-extrabold text-blue-600">{activeChild.academicGrowth}%</span>
                </div>
                <div className="w-full bg-slate-200 h-6 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                    style={{ width: `${activeChild.academicGrowth}%` }}
                  >
                    <span className="text-white text-xs font-bold">{activeChild.academicGrowth}%</span>
                  </div>
                </div>
              </div>

              {/* Class Average */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-slate-700">Class Average</span>
                  <span className="text-2xl font-extrabold text-slate-600">{classAverages[activeChild.class]}%</span>
                </div>
                <div className="w-full bg-slate-200 h-6 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-slate-400 to-slate-500 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                    style={{ width: `${classAverages[activeChild.class]}%` }}
                  >
                    <span className="text-white text-xs font-bold">{classAverages[activeChild.class]}%</span>
                  </div>
                </div>
              </div>

              {/* Difference Indicator */}
              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-600">Performance Difference</span>
                  <span className={`text-xl font-extrabold ${
                    activeChild.academicGrowth > classAverages[activeChild.class] 
                      ? 'text-green-600' 
                      : activeChild.academicGrowth < classAverages[activeChild.class]
                      ? 'text-orange-600'
                      : 'text-slate-600'
                  }`}>
                    {activeChild.academicGrowth > classAverages[activeChild.class] ? '+' : ''}
                    {activeChild.academicGrowth - classAverages[activeChild.class]}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {activeChild.academicGrowth > classAverages[activeChild.class]
                    ? '🎉 Performing above class average'
                    : activeChild.academicGrowth < classAverages[activeChild.class]
                    ? '📈 Room for improvement'
                    : '✓ On par with class average'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              View Full Profile
              <ArrowRight size={18} />
            </button>
            <button className="py-3 px-6 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-center gap-2">
              <BookOpen size={18} />
              Academic Reports
            </button>
          </div>

          {/* Go to App Footer */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 italic">
              <span>Go to App</span>
              <ExternalLink size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenOverview;
