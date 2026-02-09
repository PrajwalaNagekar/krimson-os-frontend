import React, { useState } from "react";
import {
  Clock,
  ChevronUp,
  ChevronDown,
  BookOpen,
  Calendar,
  CheckCircle,
} from "lucide-react";

const BorrowingHistory = ({ history }) => {
  const [showHistory, setShowHistory] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="w-full flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
            <Clock className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            Borrowing History
          </h2>
          <div className="px-3 py-1 bg-purple-50 rounded-lg border border-purple-200">
            <span className="text-xs font-bold text-purple-700">
              {history.length} Records
            </span>
          </div>
        </div>
        <div className="p-3 hover:bg-slate-100 rounded-2xl transition-all duration-200 group-hover:scale-110">
          {showHistory ? (
            <ChevronUp className="text-slate-600" size={24} />
          ) : (
            <ChevronDown className="text-slate-600" size={24} />
          )}
        </div>
      </button>

      {showHistory && (
        <div className="space-y-3 mt-6">
          {history.map((record, index) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border border-slate-200 hover:shadow-md group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                  <BookOpen size={18} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 mb-1 group-hover:text-purple-700 transition-colors">
                    {record.bookTitle}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      Issued: {formatDate(record.issueDate)}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle size={12} />
                      Returned: {formatDate(record.returnDate)}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`px-4 py-2 rounded-xl text-xs font-bold shadow-md ${
                  record.status === "returnedOnTime"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : "bg-gradient-to-r from-orange-500 to-amber-600 text-white"
                }`}
              >
                {record.status === "returnedOnTime" ? "✓ On Time" : "⚠ Late"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowingHistory;
