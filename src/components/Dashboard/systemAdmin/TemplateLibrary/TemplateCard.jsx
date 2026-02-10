import React from "react";
import { FileText, Mail, MessageSquare, Bell, Eye } from "lucide-react";

const TemplateCard = ({ template }) => {
  const getStatusColor = (status) => {
    return status === "Active"
      ? "text-green-600 bg-green-50 border-green-200"
      : "text-slate-600 bg-slate-50 border-slate-200";
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 mb-1">{template.name}</h3>
          <p className="text-xs text-slate-500">{template.id}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
            template.status,
          )}`}
        >
          {template.status}
        </span>
      </div>

      <div className="mb-3">
        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium">
          {template.category}
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-3">{template.description}</p>

      <div className="bg-slate-50 p-3 rounded-lg mb-3">
        <p className="text-xs text-slate-500 mb-1">Subject:</p>
        <p className="text-sm font-mono text-slate-700">{template.subject}</p>
      </div>

      <div className="bg-slate-50 p-3 rounded-lg mb-3">
        <p className="text-xs text-slate-500 mb-1">Body Preview:</p>
        <p className="text-sm text-slate-700 line-clamp-2">
          {template.bodyPreview}
        </p>
      </div>

      <div className="mb-3">
        <p className="text-xs text-slate-500 mb-2">Variables:</p>
        <div className="flex flex-wrap gap-1">
          {template.variables.map((variable, idx) => (
            <code
              key={idx}
              className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded font-mono"
            >
              {`{{${variable}}}`}
            </code>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs text-slate-500 mb-2">Channels:</p>
        <div className="flex gap-2">
          {template.channels.map((channel, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md flex items-center gap-1"
            >
              {channel === "Email" && <Mail size={12} />}
              {channel === "SMS" && <MessageSquare size={12} />}
              {channel === "In-App" && <Bell size={12} />}
              {channel}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {template.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
        <div className="text-xs text-slate-500">
          <p>By {template.createdBy}</p>
          <p>Used {template.usageCount} times</p>
        </div>
        <button className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-lg hover:shadow-md transition-shadow flex items-center gap-1">
          <Eye size={12} />
          Preview
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
