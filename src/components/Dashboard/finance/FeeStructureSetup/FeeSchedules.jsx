import React, { useState } from "react";
import { BookOpen, Calendar, Save, Copy, Edit } from "lucide-react";
import Pagination from "../../../../components/common/Pagination";

const FeeSchedules = ({ feeSchedules }) => {
  const [selectedTerm, setSelectedTerm] = useState("term1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Fee Schedules by Grade
            </h2>
            <p className="text-sm text-gray-600">
              Class-specific fee structures and due dates
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
          >
            <option value="term1">Term 1</option>
            <option value="term2">Term 2</option>
          </select>

          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </div>
            <div className="text-[10px] opacity-70">get in app</div>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {feeSchedules
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((schedule, index) => {
            const termData = schedule.termFees[selectedTerm];

            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {schedule.grade}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        Due: {formatDate(schedule.dueDates[selectedTerm])}
                      </span>
                      <span>•</span>
                      <span>{schedule.studentsEnrolled} students</span>
                      <span>•</span>
                      <span className="font-semibold text-purple-600">
                        Annual: {formatCurrency(schedule.annualTotal)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </button>
                    <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                    <p className="text-xs text-gray-600 mb-1">Tuition</p>
                    <p className="text-lg font-bold text-cyan-700">
                      {formatCurrency(termData.tuition)}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <p className="text-xs text-gray-600 mb-1">CCA</p>
                    <p className="text-lg font-bold text-green-700">
                      {formatCurrency(termData.cca)}
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <p className="text-xs text-gray-600 mb-1">Lab</p>
                    <p className="text-lg font-bold text-purple-700">
                      {formatCurrency(termData.lab)}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="text-xs text-gray-600 mb-1">Transport</p>
                    <p className="text-lg font-bold text-orange-700">
                      {formatCurrency(termData.transport)}
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                    <p className="text-xs text-gray-600 mb-1">Misc</p>
                    <p className="text-lg font-bold text-pink-700">
                      {formatCurrency(termData.misc)}
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <p className="text-xs text-white/80 mb-1">Total</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrency(termData.total)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(feeSchedules.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={feeSchedules.length}
      />
    </div>
  );
};

export default FeeSchedules;
