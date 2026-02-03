import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { getCategoryColor, getCategoryIcon } from './utils';

/**
 * TimelineSection Component
 * Displays achievement timeline organized by month with pagination
 * 
 * @param {Array<Object>} timeline - Array of timeline month objects
 * @param {number} itemsPerPage - Number of months to display per page (default: 6)
 */
const TimelineSection = ({ timeline, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(timeline.length / itemsPerPage);
  const displayedTimeline = timeline.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Clock className="text-purple-500" size={24} />
          Achievement Timeline
        </h2>
      </div>

      <div className="space-y-4">
        {displayedTimeline.map((month, index) => (
          <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-xl font-bold text-sm">
                {month.month} {month.year}
              </div>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-6">
              {month.achievements.map((ach, achIndex) => {
                const Icon = getCategoryIcon(ach.category);
                const gradientColor = getCategoryColor(ach.category);
                return (
                  <div key={achIndex}
                       className={`bg-gradient-to-br ${gradientColor} text-white rounded-xl p-4 shadow-md`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} />
                      <span className="text-xs font-semibold opacity-90">{ach.category}</span>
                    </div>
                    <div className="font-bold text-sm mb-1">{ach.name}</div>
                    <div className="text-xs opacity-90">+{ach.points} points</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8 pt-4 border-t border-slate-100">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              currentPage === 1 
                ? 'text-slate-300 cursor-not-allowed' 
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            Previous
          </button>
          <span className="text-sm font-bold text-slate-500">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              currentPage === totalPages 
                ? 'text-slate-300 cursor-not-allowed' 
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TimelineSection;
