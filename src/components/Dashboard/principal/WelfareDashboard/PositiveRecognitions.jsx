import React from "react";
import { Star, Trophy } from "lucide-react";

// Positive Recognition Card
const RecognitionCard = ({
  studentName,
  grade,
  achievement,
  category,
  date,
}) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-yellow-200 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="flex items-start gap-3 mb-3">
      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl">
        <Trophy className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">Grade {grade}</p>
      </div>
    </div>
    <div className="mb-2">
      <span
        className={`px-2 py-1 rounded-full text-xs font-bold ${
          category === "Academic"
            ? "bg-blue-100 text-blue-700"
            : category === "Sports"
              ? "bg-green-100 text-green-700"
              : category === "Arts"
                ? "bg-purple-100 text-purple-700"
                : "bg-orange-100 text-orange-700"
        }`}
      >
        {category}
      </span>
    </div>
    <p className="text-sm text-slate-700 font-medium mb-1">{achievement}</p>
    <p className="text-xs text-slate-500">{date}</p>
  </div>
);

const PositiveRecognitions = ({ recognitions }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-sm border border-yellow-200 overflow-hidden">
      <div className="p-4 sm:p-5 md:p-6 border-b border-yellow-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-yellow-900 flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
              <span className="text-sm sm:text-base md:text-lg">
                Positive Recognition
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-yellow-800 mt-1">
              Celebrating achievements and awards this month
            </p>
          </div>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap">
            View All Awards
            <span className="text-[8px] sm:text-[9px] opacity-80 ml-1">
              (get in app)
            </span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {recognitions.map((recognition, idx) => (
            <RecognitionCard key={idx} {...recognition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositiveRecognitions;
