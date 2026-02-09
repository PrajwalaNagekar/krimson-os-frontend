import React from "react";
import {
  X,
  Smile,
  Frown,
  TrendingUp,
  Clock,
  Calendar,
  User,
  Download,
} from "lucide-react";

const StudentHistoryModal = ({
  selectedStudent,
  onClose,
  historyLogs,
  categories,
}) => {
  const getCategoryStyles = (catName) => {
    const cat = categories.find((c) => c.name === catName) || categories[0];
    return cat;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold border-2 border-white/40">
              {selectedStudent.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{selectedStudent}</h2>
              <p className="text-white/90 text-sm">
                Behavior History & Timeline
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <Smile size={20} className="text-green-600" />
                <span className="text-xs font-bold text-green-600 uppercase">
                  Positive
                </span>
              </div>
              <div className="text-2xl font-bold text-green-700">
                {historyLogs.filter((l) => l.type === "Positive").length}
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <Frown size={20} className="text-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase">
                  Incidents
                </span>
              </div>
              <div className="text-2xl font-bold text-red-700">
                {historyLogs.filter((l) => l.type === "Negative").length}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={20} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase">
                  Total Records
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {historyLogs.length}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock size={20} className="text-purple-500" />
              Behavior Timeline
            </h3>
            <div className="space-y-4">
              {historyLogs.map((record, index) => {
                const styles = getCategoryStyles(record.category);
                const Icon = styles.IconComponent;
                return (
                  <div
                    key={record.id}
                    className="relative pl-8 pb-4 border-l-2 border-slate-200 last:border-l-0"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${styles.color} border-2 border-white shadow-md`}
                    ></div>

                    {/* Content */}
                    <div className="bg-slate-50 rounded-2xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${styles.bg} ${styles.text}`}
                          >
                            {Icon && <Icon size={12} />}
                            {record.category}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              record.type === "Positive"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {record.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Calendar size={12} />
                          {record.date}
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 mb-2">
                        {record.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <User size={12} />
                        Recorded by:{" "}
                        <span className="font-bold">{record.recordedBy}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              <Download size={18} />
              Export Student Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHistoryModal;
