import React from "react";
import {
  Calendar,
  Clock,
  Edit,
  Eye,
  Zap,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const TestCard = ({ test, setSelectedTest }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "live":
        return "bg-green-100 text-green-700 border-green-200";
      case "completed":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "grading":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "scheduled":
        return <Calendar size={14} />;
      case "live":
        return <Zap size={14} />;
      case "completed":
        return <CheckCircle size={14} />;
      case "grading":
        return <Edit size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-700";
      case "test":
        return "bg-purple-100 text-purple-700";
      case "quiz":
        return "bg-cyan-100 text-cyan-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300">
      {/* Test Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-2 py-1 rounded-lg text-xs font-bold uppercase ${getTypeColor(test.type)}`}
            >
              {test.type}
            </span>
            <span
              className={`px-2 py-1 rounded-lg text-xs font-bold border ${getStatusColor(test.status)} flex items-center gap-1`}
            >
              {getStatusIcon(test.status)}
              {test.status}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            {test.title}
          </h3>
          <p className="text-sm text-slate-500">{test.class}</p>
        </div>
      </div>

      {/* Test Details */}
      <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-slate-50 rounded-xl">
        <div>
          <p className="text-xs text-slate-500 mb-1">Date & Time</p>
          <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
            <Calendar size={14} />
            {new Date(test.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-slate-600">{test.time}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Duration</p>
          <p className="text-sm font-bold text-slate-700 flex items-center gap-1">
            <Clock size={14} />
            {test.duration} mins
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Questions</p>
          <p className="text-sm font-bold text-slate-700">
            {test.questionsTotal}
          </p>
          <p className="text-xs text-slate-600">
            {test.questionsObjective} obj • {test.questionsSubjective} subj
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Total Marks</p>
          <p className="text-sm font-bold text-slate-700">{test.totalMarks}</p>
        </div>
      </div>

      {/* Progress Bar (for completed/grading tests) */}
      {(test.status === "completed" ||
        test.status === "grading" ||
        test.status === "live") && (
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-600">
              Submissions:{" "}
              <span className="font-bold">
                {test.submitted}/{test.students}
              </span>
            </span>
            <span className="text-slate-600">
              Auto-graded:{" "}
              <span className="font-bold">
                {test.autoGraded}/{test.submitted}
              </span>
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
              style={{
                width: `${(test.submitted / test.students) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Manual Grading Alert */}
      {test.status === "grading" && test.questionsSubjective > 0 && (
        <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-2">
          <AlertCircle
            size={16}
            className="text-orange-600 flex-shrink-0 mt-0.5"
          />
          <div className="flex-1">
            <p className="text-xs font-bold text-orange-800">
              Manual Grading Required
            </p>
            <p className="text-xs text-orange-600">
              {test.questionsSubjective} subjective questions •{" "}
              {test.submitted - test.manualGraded} pending
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {test.status === "scheduled" && (
          <>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-1">
              <Edit size={14} />
              <div className="text-left">
                <div>Edit</div>
              </div>
            </button>
            <button className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
              <Eye size={14} />
              Preview
            </button>
          </>
        )}
        {test.status === "live" && (
          <button
            onClick={() => setSelectedTest(test)}
            className="col-span-2 px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-xl text-xs font-bold hover:bg-green-100 transition-colors flex items-center justify-center gap-1"
          >
            <Zap size={14} />
            Monitor Live
          </button>
        )}
        {(test.status === "completed" || test.status === "grading") && (
          <>
            <button
              onClick={() => setSelectedTest(test)}
              className="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-200 rounded-xl text-xs font-bold hover:bg-orange-100 transition-colors flex items-center justify-center gap-1"
            >
              <Edit size={14} />
              <div className="text-left">
                <div>Grade</div>
              </div>
            </button>
            <button className="px-4 py-2 bg-purple-50 text-purple-600 border border-purple-200 rounded-xl text-xs font-bold hover:bg-purple-100 transition-colors flex items-center justify-center gap-1">
              <Send size={14} />
              <div className="text-left">
                <div>Publish</div>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestCard;
