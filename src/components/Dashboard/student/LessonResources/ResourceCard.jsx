import React from "react";
import {
  Video,
  Beaker,
  FileText,
  Wifi,
  WifiOff,
  Bookmark,
  BookmarkCheck,
  Play,
  Download,
  Eye,
} from "lucide-react";

const ResourceCard = ({
  resource,
  onOpenModal,
  onToggleSaved,
  onToggleRead,
  onDownload,
}) => {
  const getIcon = (type) => {
    switch (type) {
      case "Video":
        return <Video size={24} />;
      case "Experiment":
        return <Beaker size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "Video":
        return "bg-gradient-to-br from-red-100 to-pink-100 text-red-600";
      case "Experiment":
        return "bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600";
      default:
        return "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600";
    }
  };

  return (
    <div className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-blue-200 cursor-pointer overflow-hidden flex flex-col">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header with Icon and Actions */}
        <div className="flex justify-between items-start mb-4">
          <div
            className={`p-4 rounded-2xl ${getIconColor(resource.type)} shadow-md`}
          >
            {getIcon(resource.type)}
          </div>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSaved(resource.id);
              }}
              className={`p-2 rounded-lg transition-all ${
                resource.saved
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-400 hover:bg-blue-50"
              }`}
              title={resource.saved ? "Saved Offline" : "Save for Offline"}
            >
              {resource.saved ? <WifiOff size={18} /> : <Wifi size={18} />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleRead(resource.id);
              }}
              className={`p-2 rounded-lg transition-all ${
                resource.read
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-100 text-slate-400 hover:bg-green-50"
              }`}
              title={resource.read ? "Marked as Read" : "Mark as Read"}
            >
              {resource.read ? (
                <BookmarkCheck size={18} />
              ) : (
                <Bookmark size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
          {resource.subject}
        </p>
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {resource.title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg whitespace-nowrap">
            {resource.chapter}
          </span>
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700 text-xs font-bold rounded-lg whitespace-nowrap">
            {resource.source}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          {resource.type === "Video" ? (
            <>
              <button
                onClick={() => onOpenModal(resource, "video")}
                className="w-full py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Play size={16} fill="currentColor" />
                Play
              </button>
              <button
                onClick={(e) => onDownload(e, resource.title)}
                className="w-full py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} />
                Download
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onOpenModal(resource, "details")}
                className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Eye size={16} />
                View
              </button>
              <button
                onClick={(e) => onDownload(e, resource.title)}
                className="w-full py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} />
                Download
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
