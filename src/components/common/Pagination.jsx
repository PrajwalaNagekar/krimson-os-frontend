import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage, 
  totalItems,
  showSummary = true 
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
      {showSummary && (
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{startItem}-{endItem}</span> of <span className="font-semibold text-gray-900">{totalItems}</span>
        </div>
      )}
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-xl border transition-all ${
            currentPage === 1
              ? 'border-gray-100 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:shadow-md bg-white'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-10 h-10 rounded-xl font-semibold text-sm transition-all ${
                  currentPage === pageNum
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-xl border transition-all ${
            currentPage === totalPages
              ? 'border-gray-100 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:shadow-md bg-white'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
