import React from "react";
import { Zap, Sparkles, CheckCircle, Target } from "lucide-react";

const AIRecommendation = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 md:p-8 rounded-3xl text-white shadow-2xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 opacity-10">
        <Target size={200} className="text-white" />
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
            <Zap size={24} className="text-purple-900" />
          </div>
          <div>
            <h3 className="font-bold text-xl">AI Recommendation</h3>
            <p className="text-purple-200 text-xs">
              Powered by Analytics Engine
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
          <div className="flex items-start gap-3 mb-3">
            <Sparkles
              className="text-yellow-300 flex-shrink-0 mt-1"
              size={20}
            />
            <div>
              <p className="text-sm font-semibold mb-2">Focus Area Alert</p>
              <p className="text-purple-100 text-sm leading-relaxed">
                Based on current academic trends, focusing resources on{" "}
                <strong className="text-white">Grade 8 English</strong>{" "}
                intervention classes will yield the highest impact on overall
                school ranking this term.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-xs text-purple-200">
              <span className="flex items-center gap-1">
                <CheckCircle size={14} />
                Confidence: 94%
              </span>
              <span>Impact: High</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
          <span>View Action Plan</span>
          <span className="text-xs opacity-70">(get in app)</span>
        </button>
      </div>
    </div>
  );
};

export default AIRecommendation;
