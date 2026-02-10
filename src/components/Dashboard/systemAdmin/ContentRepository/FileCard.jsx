import React from "react";
import { Download, Share2, Sparkles } from "lucide-react";

const FileCard = ({ file }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "Image":
        return "from-purple-500 to-pink-500";
      case "Document":
        return "from-blue-500 to-cyan-500";
      case "Video":
        return "from-red-500 to-orange-500";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-lg transition-all cursor-pointer">
      {/* File Thumbnail */}
      <div className="mb-4 rounded-lg overflow-hidden bg-slate-100 h-32 flex items-center justify-center">
        <img
          src={file.thumbnail}
          alt={file.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* File Info */}
      <div className="mb-3">
        <h3 className="font-bold text-slate-800 mb-1 truncate">{file.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`px-2 py-1 bg-gradient-to-r ${getTypeColor(
              file.type,
            )} text-white text-xs rounded-md font-semibold`}
          >
            {file.format}
          </span>
          <span className="text-xs text-slate-600">{file.size}</span>
        </div>
      </div>

      {/* AI Tags */}
      {file.aiTags && (
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-2">
            <Sparkles className="text-cyan-500" size={12} />
            <p className="text-xs text-slate-500">AI Tags:</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {file.aiTags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-cyan-50 text-cyan-700 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* AI Description */}
      {file.aiDescription && (
        <div className="mb-3 p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
          <p className="text-xs text-slate-600 line-clamp-2">
            {file.aiDescription}
          </p>
        </div>
      )}

      {/* File Stats */}
      <div className="grid grid-cols-2 gap-3 mb-3 p-3 bg-slate-50 rounded-lg">
        <div>
          <p className="text-xs text-slate-500">Downloads</p>
          <p className="text-sm font-bold text-slate-700">{file.downloads}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Used in</p>
          <p className="text-sm font-bold text-blue-600">
            {file.usedInBroadcasts} broadcasts
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
        <div className="text-xs text-slate-500">
          <p className="truncate">By {file.uploadedBy}</p>
          <p>{new Date(file.uploadedAt).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-2">
          {file.isShared && (
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Share2 size={14} className="text-green-500" />
            </button>
          )}
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Download size={14} className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
