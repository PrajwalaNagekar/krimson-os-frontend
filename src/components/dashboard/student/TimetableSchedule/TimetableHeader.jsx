import React from "react";

const TimetableHeader = ({ view, setView, action }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 rounded-3xl shadow-lg border-0">
      <h2 className="text-2xl font-bold text-white">Class Timetable</h2>
      {action ? (
        <div className="flex items-center">{action}</div>
      ) : (
        <div className="flex bg-white/20 p-1.5 rounded-xl backdrop-blur-md border border-white/10">
          {["Daily", "Weekly"].map((v) => (
            <button
              key={v}
              onClick={() => setView && setView(v)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                view === v
                  ? "bg-white text-blue-600 shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimetableHeader;
