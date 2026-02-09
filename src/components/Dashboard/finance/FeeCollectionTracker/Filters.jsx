import React from "react";

const Filters = ({
  sortBy,
  setSortBy,
  selectedGrade,
  setSelectedGrade,
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="amount">Amount (High to Low)</option>
            <option value="student">Student Name (A-Z)</option>
            <option value="class">Class/Grade</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Grade Filter
          </label>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Grades</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            Follow-up Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="all">All Status</option>
            <option value="Sent">Sent</option>
            <option value="Replied">Replied</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
