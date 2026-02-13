import React from "react";
import { FileText, Plus, Copy, Edit } from "lucide-react";

const TemplateLibrary = ({ templates, getCategoryColor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="text-purple-500" size={24} />
              Template Library
            </h2>
            <p className="text-sm text-slate-500">
              Recurring announcements and pre-formatted messages
            </p>
          </div>
          <button className="px-5 py-2.5 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              New Template
            </div>
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="p-6 rounded-2xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all group bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                      {template.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getCategoryColor(template.category)}`}
                    >
                      {template.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">
                    {template.id}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-bold text-slate-600 mb-2">
                  Subject:
                </p>
                <p className="text-sm text-slate-700 bg-blue-50 p-2 rounded-lg border border-blue-100">
                  {template.subject}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-bold text-slate-600 mb-2">
                  Content Preview:
                </p>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 line-clamp-3">
                  {template.content}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                  <p className="text-lg font-bold text-purple-600">
                    {template.usageCount}
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">
                    Times Used
                  </p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                  <p className="text-xs font-bold text-slate-700">
                    {template.lastUsed}
                  </p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">
                    Last Used
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold hover:bg-purple-100 transition-all border border-purple-200 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Copy size={14} />
                    Use Template
                  </div>
                </button>
                <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <Edit size={14} />
                    Edit
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateLibrary;
