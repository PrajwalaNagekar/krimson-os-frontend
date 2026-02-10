import React from "react";
import { FileCode, Star, Tag, Cpu } from "lucide-react";

const PromptCard = ({ prompt }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <FileCode className="text-purple-500" size={24} />
          <div>
            <h3 className="text-lg font-bold text-slate-800">{prompt.name}</h3>
            <p className="text-sm text-slate-500">{prompt.id}</p>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-lg font-medium">
          {prompt.status}
        </span>
      </div>

      {/* Category & Description */}
      <div className="mb-4">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg font-medium">
          {prompt.category}
        </span>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          {prompt.description}
        </p>
      </div>

      {/* Prompt Template */}
      <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm font-mono text-slate-700 line-clamp-3">
          {prompt.prompt}
        </p>
      </div>

      {/* Parameters */}
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-600 mb-2">Parameters:</p>
        <div className="flex flex-wrap gap-2">
          {prompt.parameters.map((param, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm rounded-lg font-mono"
            >
              {param}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-slate-500 mb-1">Usage Count</p>
          <p className="text-xl font-bold text-blue-600">{prompt.usageCount}</p>
        </div>
        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" size={18} fill="currentColor" />
          <div>
            <p className="text-sm text-slate-500">Rating</p>
            <p className="text-xl font-bold text-slate-700">
              {prompt.avgRating}
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {prompt.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg flex items-center gap-1"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          <p className="font-medium">By {prompt.createdBy}</p>
          <p>v{prompt.version}</p>
        </div>
        <div className="flex items-center gap-1 text-sm text-slate-600">
          <Cpu size={16} className="text-purple-500" />
          <span className="font-medium">{prompt.aiModel}</span>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
