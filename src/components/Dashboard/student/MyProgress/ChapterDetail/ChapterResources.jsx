import React from "react";
import { BookOpen, Video, FileText, Beaker, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TYPE_CONFIG = {
  Video: { icon: Video, color: "text-red-500" },
  Document: { icon: FileText, color: "text-blue-500" },
  Experiment: { icon: Beaker, color: "text-purple-500" },
};

const ChapterResources = ({ resources }) => {
  const navigate = useNavigate();

  const groupedResources = ["Video", "Document", "Experiment"].reduce(
    (acc, type) => {
      const filtered = resources.filter((r) => r.type === type);
      if (filtered.length > 0) acc[type] = filtered;
      return acc;
    },
    {},
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
        <BookOpen size={20} className="text-indigo-500" />
        Reference Materials
      </h2>

      {Object.keys(groupedResources).length === 0 ? (
        <div className="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-sm">
            No specific reference materials linked to this chapter yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(groupedResources).map(([type, items]) => {
            const { icon: Icon, color } = TYPE_CONFIG[type] || {};
            return (
              <div
                key={type}
                className="bg-slate-50 rounded-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  {Icon && <Icon size={16} className={color} />}
                  <h4 className="font-bold text-slate-700 text-sm">
                    {type}s{" "}
                    <span className="text-slate-400 font-medium text-xs ml-1">
                      ({items.length})
                    </span>
                  </h4>
                </div>
                <div className="space-y-2">
                  {items.map((res) => (
                    <div
                      key={res.id}
                      onClick={() => navigate("/dashboard/student/resources")}
                      className="group flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    >
                      <p className="text-xs font-medium text-slate-600 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {res.title}
                      </p>
                      <ChevronRight
                        size={12}
                        className="text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChapterResources;
