import React from "react";
import { Users } from "lucide-react";

const OutstandingBalanceByGrade = ({ data }) => {
  return (
    <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Outstanding Balance by Grade
          </h2>
          <p className="text-sm text-gray-600">
            Fee collection status across grades
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {item.grade}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.totalStudents} students total
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Outstanding</p>
                <p className="text-xl font-bold text-red-600">{item.amount}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Paid</p>
                <p className="text-lg font-bold text-green-600">{item.paid}</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Due</p>
                <p className="text-lg font-bold text-red-600">
                  {item.outstanding}
                </p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Collection %</p>
                <p className="text-lg font-bold text-blue-600">
                  {item.percentage}%
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutstandingBalanceByGrade;
