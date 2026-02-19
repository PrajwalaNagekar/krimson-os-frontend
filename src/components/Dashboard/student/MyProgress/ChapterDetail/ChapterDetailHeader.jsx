import React from "react";

const ChapterDetailHeader = ({ chapter, onBack }) => {
  const getMasteryColor = (mastery) => {
    switch (mastery) {
      case "mastered":
        return "from-yellow-400 to-orange-500";
      case "advanced":
        return "from-purple-400 to-pink-500";
      case "intermediate":
        return "from-blue-400 to-cyan-500";
      default:
        return "from-slate-400 to-slate-500";
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-2xl shadow-inner">
              {chapter.chapterNumber}
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight">
                {chapter.title}
              </h1>
              <p className="text-white/90 text-sm mt-1">{chapter.subject}</p>
            </div>
          </div>
        </div>
        <span
          className={`px-4 py-1.5 bg-gradient-to-r ${getMasteryColor(chapter.mastery)} rounded-full text-sm font-bold uppercase tracking-wide shadow-md`}
        >
          {chapter.mastery}
        </span>
      </div>
    </div>
  );
};

export default ChapterDetailHeader;
