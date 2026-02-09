import React from "react";
import { Download } from "lucide-react";

const AdmissionsFunnel = ({ funnel }) => {
  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 p-6 lg:p-8 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">
              Admission Funnel
            </h2>
            <p className="text-sm text-slate-500">
              Track progression: Inquiry → Application → Verification → Enrolled
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg transition-all hover:scale-105">
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Export</span>
          </button>
        </div>

        {/* Funnel Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          {funnel.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Arrow (hidden on mobile, last item) */}
              {index < funnel.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0"></div>
              )}

              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-slate-300 transition-all hover:shadow-lg">
                {/* Progress Bar */}
                <div className="w-full h-3 bg-slate-100 rounded-full mb-4 overflow-hidden">
                  <div
                    className={`h-full ${step.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${step.percentage}%` }}
                  ></div>
                </div>

                {/* Count */}
                <div className="text-center mb-2">
                  <p
                    className={`text-4xl lg:text-5xl font-bold ${step.textColor} mb-1`}
                  >
                    {step.count}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold">
                    {step.percentage}% of total
                  </p>
                </div>

                {/* Step Name */}
                <div
                  className={`text-center py-2 px-4 ${step.color} bg-opacity-10 rounded-xl`}
                >
                  <p
                    className={`text-sm font-bold ${step.textColor} uppercase tracking-wide`}
                  >
                    {step.step}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFunnel;
