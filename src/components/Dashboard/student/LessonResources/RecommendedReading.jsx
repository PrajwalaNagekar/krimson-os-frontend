import React from "react";
import { BookOpen } from "lucide-react";

const RecommendedReading = ({ recommendedResources }) => {
  if (!recommendedResources || recommendedResources.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 rounded-3xl border-2 border-pink-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-md">
          <BookOpen className="text-white" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-xl">
            Recommended Reading
          </h3>
          <p className="text-sm text-slate-600">
            Curated for you based on your subjects
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendedResources.map((rec, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{rec.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-bold text-pink-600 uppercase">
                  {rec.subject}
                </p>
                <h4 className="font-bold text-slate-800 text-sm group-hover:text-pink-600 transition-colors">
                  {rec.title}
                </h4>
              </div>
            </div>
            <button className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:gap-2 transition-all">
              Read Now <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedReading;
