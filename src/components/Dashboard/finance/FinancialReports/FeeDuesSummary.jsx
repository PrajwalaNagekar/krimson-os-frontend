import React from "react";
import { Download, DollarSign } from "lucide-react";

const FeeDuesSummary = ({ feeDuesData }) => {
  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Fee Dues by Grade
            </h2>
            <p className="text-xs text-gray-600">Outstanding balances</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Excel</span>
        </button>
      </div>

      <div className="space-y-3">
        {feeDuesData.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-gray-800">{data.grade}</span>
              <span className="text-lg font-bold text-red-600">
                {formatCurrency(data.amount)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {data.due} students with dues
              </span>
              <span className="text-green-600">
                {data.paid}/{data.totalStudents} paid
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeDuesSummary;
