import React, { useState } from "react";
import { Sparkles, ChevronDown, Copy } from "lucide-react";

const TemplatesBanner = ({ templates, onUseTemplate }) => {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
          <Sparkles size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">Quick Message Templates</h3>
            <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
              {templates.length} TEMPLATES
            </span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Save time with pre-written templates for recurring messages like
            homework reminders, attendance alerts, and parent meetings.
          </p>
        </div>
        <button
          onClick={() => setShowTemplates(!showTemplates)}
          className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <ChevronDown
            size={18}
            className={`transition-transform ${showTemplates ? "rotate-180" : ""}`}
          />
          <span>{showTemplates ? "Hide" : "Show"} Templates</span>
        </button>
      </div>

      {/* Templates Grid */}
      {showTemplates && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-white mb-1">{template.name}</h4>
                  <span className="text-xs text-white/80 px-2 py-1 bg-white/20 rounded-lg">
                    {template.category}
                  </span>
                </div>
                <Copy
                  size={16}
                  className="text-white/60 cursor-pointer hover:text-white"
                />
              </div>
              <p className="text-xs text-white/80 line-clamp-3">
                {template.content}
              </p>
              <button
                onClick={() => {
                  onUseTemplate(template);
                  setShowTemplates(false);
                }}
                className="w-full mt-3 px-3 py-2 bg-white/30 text-white rounded-lg text-xs font-bold hover:bg-white/40 transition-colors"
              >
                Use Template
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplatesBanner;
