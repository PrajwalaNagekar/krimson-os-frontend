import React from "react";
import { Users, Calendar } from "lucide-react";

const PeerCollaborationList = ({ collaborations }) => {
  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
      <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
        <Users size={20} className="text-cyan-500" />
        Peer Collaboration
      </h3>

      <div className="space-y-3">
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="p-4 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                <Users size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1 line-clamp-1">
                  {collab.activity}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />{" "}
                    {new Date(collab.date).toLocaleDateString("en-SG")}
                  </span>
                  <span>•</span>
                  <span>{collab.teamSize} members</span>
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  collab.rating === "Excellent"
                    ? "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700"
                    : collab.rating === "Very Good"
                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700"
                      : "bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700"
                }`}
              >
                {collab.rating}
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-700 mb-3 leading-relaxed">
              {collab.insights}
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              {collab.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[10px] md:text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerCollaborationList;
