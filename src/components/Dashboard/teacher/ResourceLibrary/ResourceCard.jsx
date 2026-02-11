import React from "react";
import {
  FileText,
  Video,
  FileSpreadsheet,
  File,
  FileImage,
  Star,
  Download,
  Calendar,
  Eye,
} from "lucide-react";

const ResourceCard = ({ resource, onClick }) => {
  // Get format icon and color
  const getFormatIcon = (format) => {
    switch (format) {
      case "pdf":
        return {
          icon: <FileText size={20} />,
          color: "text-red-600",
          bg: "bg-red-100",
        };
      case "video":
        return {
          icon: <Video size={20} />,
          color: "text-purple-600",
          bg: "bg-purple-100",
        };
      case "ppt":
        return {
          icon: <FileSpreadsheet size={20} />,
          color: "text-orange-600",
          bg: "bg-orange-100",
        };
      case "worksheet":
        return {
          icon: <File size={20} />,
          color: "text-blue-600",
          bg: "bg-blue-100",
        };
      case "image":
        return {
          icon: <FileImage size={20} />,
          color: "text-green-600",
          bg: "bg-green-100",
        };
      default:
        return {
          icon: <File size={20} />,
          color: "text-slate-600",
          bg: "bg-slate-100",
        };
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= Math.round(rating)
                ? "text-yellow-500 fill-yellow-500"
                : "text-slate-300"
            }
          />
        ))}
      </div>
    );
  };

  const formatInfo = getFormatIcon(resource.format);

  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Resource Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 ${formatInfo.bg} rounded-xl ${formatInfo.color}`}>
          {formatInfo.icon}
        </div>
        <div className="flex items-center gap-1">
          {renderStars(resource.rating)}
          <span className="text-xs font-bold text-slate-600 ml-1">
            ({resource.reviews})
          </span>
        </div>
      </div>

      {/* Resource Title */}
      <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
        {resource.title}
      </h3>
      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
        {resource.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Resource Info */}
      <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-slate-50 rounded-xl text-xs">
        <div>
          <p className="text-slate-500 mb-1">Subject</p>
          <p className="font-bold text-slate-700">{resource.subject}</p>
        </div>
        <div>
          <p className="text-slate-500 mb-1">Grade</p>
          <p className="font-bold text-slate-700">{resource.grade}</p>
        </div>
        <div>
          <p className="text-slate-500 mb-1">Format</p>
          <p className="font-bold text-slate-700 uppercase">
            {resource.format}
          </p>
        </div>
        <div>
          <p className="text-slate-500 mb-1">Size</p>
          <p className="font-bold text-slate-700">{resource.size}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1">
          <Download size={12} />
          {resource.downloads} downloads
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(resource.uploadDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-1">
          <Eye size={14} />
          Preview
        </button>
        <button className="px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-xl text-xs font-bold hover:bg-green-100 transition-colors flex items-center justify-center gap-1">
          <Download size={14} />
          <div className="text-left">
            <div>Download</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
