import React from "react";

const EventInsightSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <h3 className="text-xl font-bold relative z-10 mb-2">
          Don't Miss Out!
        </h3>
        <p className="text-white/90 text-sm relative z-10 mb-6">
          Register for upcoming workshops and competitions to earn extra credit
          and boost your portfolio.
        </p>
        <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
          Upcoming Deadline
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/20">
          <div className="font-bold">Science Fair Registration</div>
          <div className="text-xs text-white/80 mt-1">Closes in 2 days</div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
        <h4 className="font-bold text-slate-800 mb-4">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Academic",
            "Sports",
            "Arts & Culture",
            "STEM",
            "Career",
            "Personal",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventInsightSidebar;
