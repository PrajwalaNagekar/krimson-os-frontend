import React from "react";
import { Sparkles } from "lucide-react";

const PageHeader = ({ title, description, aiFeature = null }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h1>
        {aiFeature && (
          <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <Sparkles size={12} />
            {aiFeature}
          </div>
        )}
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default PageHeader;
