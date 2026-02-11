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
  X,
  ThumbsUp,
  Share2,
  MessageSquare,
} from "lucide-react";

const ResourceDetailModal = ({ resource, onClose }) => {
  if (!resource) return null;

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

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {(() => {
                const formatInfo = getFormatIcon(resource.format);
                return (
                  <div
                    className={`p-3 ${formatInfo.bg} rounded-xl ${formatInfo.color}`}
                  >
                    {formatInfo.icon}
                  </div>
                );
              })()}
              <div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold uppercase">
                  {resource.format}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {resource.title}
            </h2>
            <p className="text-slate-600">{resource.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Resource Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-slate-800 mb-4">
              Resource Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subject</span>
                <span className="font-bold text-slate-800">
                  {resource.subject}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Topic</span>
                <span className="font-bold text-slate-800">
                  {resource.topic}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Grade Level</span>
                <span className="font-bold text-slate-800">
                  {resource.grade}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">File Size</span>
                <span className="font-bold text-slate-800">
                  {resource.size}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Uploaded By</span>
                <span className="font-bold text-slate-800">
                  {resource.uploadedBy}
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <h3 className="font-bold text-slate-800 mb-4">
              Peer Reviews & Ratings
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Average Rating</span>
                <div className="flex items-center gap-2">
                  {renderStars(resource.rating)}
                  <span className="font-bold text-slate-800">
                    {resource.rating}/5
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Total Reviews</span>
                <span className="font-bold text-slate-800">
                  {resource.reviews}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Downloads</span>
                <span className="font-bold text-slate-800">
                  {resource.downloads}
                </span>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-purple-500 text-white rounded-xl text-xs font-bold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2">
                <ThumbsUp size={14} />
                <div>
                  <div>Rate & Review</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="font-bold text-slate-800 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center justify-center gap-2">
            <Download size={18} />
            <div className="text-left">
              <div>Download</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
            <Share2 size={18} />
            <div className="text-left">
              <div>Share</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-xl font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
            <MessageSquare size={18} />
            <div className="text-left">
              <div>Comment</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailModal;
