import React from "react";
import { Award, Plus, Edit, Eye, CheckCircle } from "lucide-react";

const Scholarships = ({ scholarships }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Scholarships & Concessions
            </h2>
            <p className="text-sm text-gray-600">
              Manage discounts and financial aid programs
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Scholarship</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {scholarship.name}
                </h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                  {scholarship.type}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  {scholarship.discountPercentage}%
                </span>
                <span className="text-xs text-gray-500">OFF</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Eligibility:</span>
                <span className="font-semibold text-gray-800">
                  {scholarship.eligibility}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Students Applied:</span>
                <span className="font-semibold text-blue-600">
                  {scholarship.studentsApplied}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${scholarship.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                >
                  {scholarship.status === "Active" && (
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                  )}
                  {scholarship.status}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Applicable to:</p>
              <div className="flex flex-wrap gap-2">
                {scholarship.applicableTo.map((grade, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                <span>View</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
