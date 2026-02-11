import React from "react";
import { TrendingUp, Users, BookOpen, DollarSign } from "lucide-react";
import { STRATEGIC_PLANNING_DATA } from "../../../../data/managementData";

const TrendProjection = () => {
  const { trendProjection } = STRATEGIC_PLANNING_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            3-Year Trend Projection
          </h2>
          <p className="text-sm text-gray-600">
            Historical performance and future forecasts
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Enrollment Projection */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-600" />
            Enrollment Growth
          </h3>
          <div className="space-y-3">
            {trendProjection.enrollment.map((year, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">{year.year}</span>
                  <div className="text-right">
                    {year.actual ? (
                      <p className="text-lg font-bold text-green-600">
                        {year.actual}
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-blue-600">
                        {year.projected}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      Target: {year.target}
                    </p>
                  </div>
                </div>
                {!year.actual && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Projected
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Results Projection */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Academic Results (%)
          </h3>
          <div className="space-y-3">
            {trendProjection.academicResults.map((year, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">{year.year}</span>
                  <div className="text-right">
                    {year.actual ? (
                      <p className="text-lg font-bold text-green-600">
                        {year.actual}%
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-blue-600">
                        {year.projected}%
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      Target: {year.target}%
                    </p>
                  </div>
                </div>
                {!year.actual && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Projected
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Projection */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Revenue (₹ Cr)
          </h3>
          <div className="space-y-3">
            {trendProjection.revenue.map((year, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">{year.year}</span>
                  <div className="text-right">
                    {year.actual ? (
                      <p className="text-lg font-bold text-green-600">
                        ₹{year.actual}Cr
                      </p>
                    ) : (
                      <p className="text-lg font-bold text-blue-600">
                        ₹{year.projected}Cr
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      Target: ₹{year.target}Cr
                    </p>
                  </div>
                </div>
                {!year.actual && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Projected
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendProjection;
