import React from "react";
import { X, BookOpen, Clock, MapPin, AlertCircle } from "lucide-react";

const ClassDetailsModal = ({
  isModalOpen,
  selectedClass,
  setIsModalOpen,
  classDetails,
}) => {
  if (!isModalOpen || !selectedClass) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <BookOpen size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{selectedClass.subject}</h2>
              <div className="flex items-center gap-3 mt-2 text-white/90">
                <span className="flex items-center gap-1 text-sm font-semibold">
                  <Clock size={14} />
                  {selectedClass.time}
                </span>
                <span className="text-white/60">•</span>
                <span className="text-sm font-semibold">
                  Period {selectedClass.period}
                </span>
                <span className="text-white/60">•</span>
                <span className="flex items-center gap-1 text-sm font-semibold">
                  <MapPin size={14} />
                  {selectedClass.room}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {(() => {
            const details = classDetails[selectedClass.classKey];

            if (!details) {
              return (
                <div className="text-center py-12">
                  <div className="p-4 bg-slate-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <AlertCircle className="text-slate-400" size={32} />
                  </div>
                  <p className="text-slate-500 font-medium">
                    No class details available for this period.
                  </p>
                </div>
              );
            }

            return (
              <div className="space-y-6">
                {/* Current Topic */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-2">
                    Current Topic
                  </h3>
                  <p className="text-lg font-bold text-slate-800">
                    {details.currentTopic}
                  </p>
                </div>

                {/* Latest Teacher Post */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    Latest Update
                  </h3>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex gap-4">
                      {selectedClass.teacherImage ? (
                        <img
                          src={selectedClass.teacherImage}
                          alt={selectedClass.teacher}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-200 grid place-items-center">
                          <Clock size={20} className="text-slate-500" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-800">
                            {selectedClass.teacher}
                          </span>
                          <span className="text-xs text-slate-400">
                            {details.latestPost.time}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {details.latestPost.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Work */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    Upcoming Work
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.upcomingWork.map((work, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-slate-200 hover:border-pink-200 hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-bold uppercase text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {work.type}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                              work.priority === "high"
                                ? "bg-red-100 text-red-600"
                                : work.priority === "urgent"
                                  ? "bg-red-500 text-white shadow-red-200"
                                  : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {work.priority}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-800 mb-1 group-hover:text-pink-600 transition-colors">
                          {work.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-medium">
                          Due: {work.dueDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Resources */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Key Resources
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {details.resources.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-purple-50 hover:border-purple-200 transition-all cursor-pointer text-center group"
                      >
                        <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform">
                          {res.icon || (res.type === "pdf" ? "📄" : "🔗")}
                        </div>
                        <p className="text-xs font-bold text-slate-700 line-clamp-2">
                          {res.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ClassDetailsModal;
