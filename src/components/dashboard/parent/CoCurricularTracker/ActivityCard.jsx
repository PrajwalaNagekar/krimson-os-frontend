import React from "react";
import {
  Trophy,
  Palette,
  BookOpen,
  Crown,
  Music as MusicIcon,
  Users,
  Zap,
  CheckCircle,
  Image as ImageIcon,
  Download,
  Award,
} from "lucide-react";

const ActivityCard = ({
  activity,
  handleViewPhoto,
  handleDownloadCertificate,
}) => {
  // Helper to determine color and icon based on category or specific activity logic
  const getCategoryStyles = (category) => {
    switch (category) {
      case "Sports":
        return { color: "from-green-500 to-emerald-500", Icon: Trophy };
      case "Arts":
        return { color: "from-orange-500 to-amber-500", Icon: Palette };
      case "Academics":
        return { color: "from-blue-500 to-cyan-500", Icon: BookOpen };
      case "Leadership":
        return { color: "from-purple-500 to-pink-500", Icon: Crown };
      default:
        return { color: "from-slate-500 to-gray-500", Icon: Trophy };
    }
  };

  const { color, Icon } = getCategoryStyles(activity.category);
  // Optional: Override icon if title implies specific activity (e.g., Music)
  // For now, consistent category icons are used.

  const ActivityIcon = Icon;

  return (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
      {/* Date Column (Desktop) */}
      <div className="hidden md:flex flex-col items-end w-32 flex-shrink-0 pt-1">
        <span className="text-2xl font-bold text-slate-800">
          {new Date(activity.date).getDate()}
        </span>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {new Date(activity.date).toLocaleString("default", { month: "long" })}
        </span>
        <span className="text-[10px] text-slate-400">
          {new Date(activity.date).getFullYear()}
        </span>
      </div>

      {/* Timeline Node */}
      <div
        className={`absolute left-5 md:left-[9rem] -translate-x-1/2 mt-1.5 w-5 h-5 rounded-full border-3 border-white shadow-lg z-10 transition-transform group-hover:scale-125 bg-gradient-to-br ${color}`}
      ></div>

      {/* Content Card */}
      <div className="flex-1 ml-10 md:ml-0">
        {/* Mobile Date */}
        <div className="md:hidden flex items-center gap-2 mb-2">
          <span className="text-sm font-bold text-slate-800">
            {new Date(activity.date).getDate()}{" "}
            {new Date(activity.date).toLocaleString("default", {
              month: "short",
            })}
          </span>
          <span className="text-xs text-slate-400">
            {new Date(activity.date).getFullYear()}
          </span>
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-white/60 hover:shadow-2xl hover:border-cyan-100 transition-all duration-300 group-hover:-translate-y-1">
          {/* Header with Icon */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-3 md:p-4 bg-gradient-to-br ${color} rounded-xl md:rounded-2xl shadow-lg flex-shrink-0`}
            >
              <ActivityIcon size={24} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight group-hover:text-cyan-600 transition-colors">
                  {activity.title}
                </h3>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${color} text-white shadow-md flex items-center gap-1`}
                  >
                    <Zap size={12} />+{activity.points} pts
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                  {activity.category}
                </span>
                {activity.achievement && (
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${color} text-white flex items-center gap-1`}
                  >
                    <CheckCircle size={12} />
                    {activity.achievement}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
            {activity.description}
          </p>

          {/* Photos */}
          {activity.photos && activity.photos.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <ImageIcon size={14} />
                Photos ({activity.photos.length})
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {activity.photos.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => handleViewPhoto(photo.id)}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all flex items-center justify-center group/photo relative overflow-hidden"
                  >
                    <ImageIcon
                      size={24}
                      className="text-slate-400 group-hover/photo:text-cyan-500 transition-colors"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-white text-[10px] font-bold truncate w-full">
                        {photo.name}
                      </span>
                    </div>
                    <div className="absolute top-1 right-1">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        <span className="text-[8px] font-bold text-slate-600">
                          View
                        </span>
                        <span className="text-[7px] text-slate-400 block">
                          get in app
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              {activity.certificate && (
                <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold">
                  <Award size={14} />
                  Certificate Available
                </span>
              )}
            </div>

            {activity.certificate && (
              <button
                onClick={() => handleDownloadCertificate(activity.id)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Download size={16} />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-bold">Download</span>
                  <span className="text-[8px] opacity-80">get in app</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ActivityCard;
