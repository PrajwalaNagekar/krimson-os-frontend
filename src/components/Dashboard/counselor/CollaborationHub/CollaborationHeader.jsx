import React from "react";

const CollaborationHeader = ({ onSchedule }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          Parent & Teacher Collaboration
        </h2>
        <p className="text-slate-500 text-sm">
          Coordinate support strategies securely.
        </p>
      </div>
      <button
        onClick={onSchedule}
        className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-900 transition-colors"
      >
        Schedule Joint Meeting
      </button>
    </div>
  );
};

export default CollaborationHeader;
