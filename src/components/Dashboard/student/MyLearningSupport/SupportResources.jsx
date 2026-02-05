import React from "react";

const SupportResources = ({ resources }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        Support Resources
      </h3>
      <ul className="space-y-3">
        {resources.map((resource) => (
          <li
            key={resource.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all cursor-pointer group border border-transparent hover:border-blue-100"
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                resource.type === "PDF"
                  ? "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
                  : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
              }`}
            >
              <span className="font-bold text-xs">{resource.type}</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-700">
                {resource.title}
              </div>
              <div className="text-xs text-slate-400">{resource.category}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportResources;
