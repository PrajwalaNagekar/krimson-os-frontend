import React from "react";
import { Target, TrendingUp, TrendingDown } from "lucide-react";

const BenchmarkComparison = ({ benchmark }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-200 shadow-lg">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-xl">
          <Target size={24} className="text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Benchmark Comparison
          </h3>
          <p className="text-slate-600">
            Your classes vs school-wide and department averages
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* School Average */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-500 mb-2">School Average</p>
          <h4 className="text-3xl font-bold text-slate-800 mb-3">
            {benchmark.schoolAverage}%
          </h4>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-500 rounded-full"
              style={{ width: `${benchmark.schoolAverage}%` }}
            ></div>
          </div>
        </div>

        {/* Department Average */}
        <div className="p-5 bg-white rounded-2xl border border-blue-200">
          <p className="text-sm text-slate-500 mb-2">Department Average</p>
          <h4 className="text-3xl font-bold text-blue-600 mb-3">
            {benchmark.departmentAverage}%
          </h4>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${benchmark.departmentAverage}%` }}
            ></div>
          </div>
        </div>

        {/* My Classes Average */}
        <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-md">
          <p className="text-sm text-white/80 mb-2">My Classes Average</p>
          <h4 className="text-3xl font-bold mb-3">{benchmark.myAverage}%</h4>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${benchmark.myAverage}%` }}
            ></div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {benchmark.myAverage > benchmark.departmentAverage ? (
              <>
                <TrendingUp size={16} />
                <span className="text-xs font-bold">
                  +
                  {(benchmark.myAverage - benchmark.departmentAverage).toFixed(
                    1,
                  )}
                  % above department
                </span>
              </>
            ) : (
              <>
                <TrendingDown size={16} />
                <span className="text-xs font-bold">
                  {(benchmark.myAverage - benchmark.departmentAverage).toFixed(
                    1,
                  )}
                  % below department
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkComparison;
