import React from "react";
import {
  X,
  Play,
  Download,
  Bookmark,
  FileText,
  Eye,
  Video,
  Beaker,
} from "lucide-react";

const ResourceModal = ({
  isOpen,
  onClose,
  resource,
  type, // 'details' or 'video'
  onDownload,
}) => {
  if (!isOpen || !resource) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getIconColor(resource.type)}`}>
              {getIcon(resource.type)}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">
                {resource.title}
              </h3>
              <p className="text-xs font-bold text-slate-500 uppercase">
                {resource.subject} • {resource.topic}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
          {type === "video" ? (
            <div className="space-y-4">
              {/* Video Player Placeholder */}
              <div className="aspect-video w-full bg-slate-900 rounded-2xl flex items-center justify-center relative group cursor-pointer shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Play
                      size={32}
                      className="text-slate-900 fill-slate-900 ml-1"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="font-bold text-lg">{resource.title}</h3>
                  <p className="text-sm opacity-80">
                    00:00 / 15:30 • {resource.source}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Resume Playing
                </button>
                <button
                  onClick={(e) => onDownload(e, resource.title)}
                  className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2"
                >
                  <Download size={18} /> Download Video
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Details View */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sidebar Details */}
                <div className="space-y-4 md:col-span-1">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Bookmark size={16} className="text-blue-500" />
                      Resource Info
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                          Subject
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          {resource.subject}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                          Chapter
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          {resource.chapter}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                          Week
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          {resource.week}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                          Source
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          {resource.source}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => onDownload(e, resource.title)}
                    className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download size={18} /> Download PDF
                  </button>
                </div>

                {/* Content Preview */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden min-h-[400px] flex flex-col items-center justify-center relative group">
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center opacity-50 patterned-bg">
                      {/* Pattern or placeholder bg */}
                    </div>
                    <div className="z-10 text-center p-8">
                      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                        <FileText size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        Preview Not Available
                      </h3>
                      <p className="text-slate-500 max-w-xs mx-auto mb-6">
                        This document is protected. Please open it in the viewer
                        to read the full content.
                      </p>
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200 flex items-center gap-2 mx-auto">
                        <Eye size={18} /> Open in Viewer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceModal;
