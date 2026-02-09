import React from "react";
import { Activity, FileText, TrendingUp } from "lucide-react";

const ReadingFrequency = ({ frequencyData }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Student Reading Frequency Index
            </h2>
            <p className="text-sm text-gray-600">
              Reading engagement by grade level
            </p>
          </div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Full Report</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {frequencyData.map((data, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">{data.grade}</h3>
              <span className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Reading Rate</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {data.readingRate}%
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                    style={{ width: `${data.readingRate}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">Active</p>
                  <p className="font-bold text-gray-800">
                    {data.activeReaders}/{data.totalStudents}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Avg Books</p>
                  <p className="font-bold text-gray-800">
                    {data.avgBooksPerStudent}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Top Category</p>
                <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                  {data.topCategory}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingFrequency;
