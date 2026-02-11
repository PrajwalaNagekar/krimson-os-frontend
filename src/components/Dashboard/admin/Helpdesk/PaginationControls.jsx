import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationControls = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <div className="text-sm text-slate-600">
        Showing{" "}
        <span className="font-bold text-slate-800">
          {(currentPage - 1) * itemsPerPage + 1}
        </span>{" "}
        to{" "}
        <span className="font-bold text-slate-800">
          {Math.min(currentPage * itemsPerPage, totalItems)}
        </span>{" "}
        of <span className="font-bold text-slate-800">{totalItems}</span>{" "}
        tickets
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            currentPage === 1
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20"
          }`}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                currentPage === page
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            currentPage === totalPages
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20"
          }`}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
