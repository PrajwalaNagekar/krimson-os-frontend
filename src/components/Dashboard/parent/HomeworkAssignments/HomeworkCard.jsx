import React from "react";
import {
  BookOpen,
  Clock,
  CheckCircle,
  CheckCheck,
  AlertCircle,
  Calendar,
  Eye,
  Download,
  MessageSquare,
} from "lucide-react";

const HomeworkCard = ({
  assignment,
  isAcknowledged,
  onToggleAcknowledgment,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "from-orange-400 to-red-400";
      case "Submitted":
        return "from-blue-400 to-cyan-400";
      case "Graded":
        return "from-green-400 to-emerald-400";
      default:
        return "from-gray-400 to-slate-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock size={16} />;
      case "Submitted":
        return <CheckCircle size={16} />;
      case "Graded":
        return <CheckCheck size={16} />;
      default:
        return <AlertCircle size={16} />;
    }
  };

  const handleDownload = (documentUrl, title) => {
    // In future, this will trigger actual download
    console.log(`Downloading: ${documentUrl}`);
    alert(`Downloading: ${title}`);
  };

  const handlePreview = (documentUrl, title) => {
    // In future, this will open document viewer
    console.log(`Previewing: ${documentUrl}`);
    alert(`Opening preview: ${title}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Assignment Header */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          {/* Left Section: Subject and Title */}
          <div className="flex items-start gap-4 flex-1">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${getStatusColor(assignment.status)} bg-opacity-10 flex-shrink-0`}
            >
              <BookOpen className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs font-bold rounded-full">
                  {assignment.subject}
                </span>
                <span
                  className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md`}
                >
                  {getStatusIcon(assignment.status)}
                  {assignment.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {assignment.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                {assignment.description}
              </p>

              {/* Dates */}
              <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>
                    Assigned:{" "}
                    {new Date(assignment.assignedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span
                    className={
                      assignment.status === "Pending"
                        ? "text-orange-600 font-semibold"
                        : ""
                    }
                  >
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
                {assignment.submittedDate && (
                  <div className="flex items-center gap-1 text-blue-600">
                    <CheckCircle size={14} />
                    <span>
                      Submitted:{" "}
                      {new Date(assignment.submittedDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {assignment.gradedDate && (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCheck size={14} />
                    <span>
                      Graded:{" "}
                      {new Date(assignment.gradedDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-2 text-xs text-slate-500">
                <span className="font-semibold">Teacher:</span>{" "}
                {assignment.teacherName}
              </div>
            </div>
          </div>

          {/* Right Section: Grade and Actions */}
          <div className="flex flex-col gap-3 items-end">
            {assignment.grade && (
              <div className="bg-gradient-to-br from-green-400 to-emerald-400 text-white px-6 py-3 rounded-2xl text-center shadow-lg">
                <div className="text-3xl font-bold">{assignment.grade}</div>
              </div>
            )}

            <div className="flex gap-2">
              {assignment.hasDocument && (
                <>
                  <button
                    onClick={() =>
                      handlePreview(assignment.documentUrl, assignment.title)
                    }
                    className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex flex-col items-center gap-0.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <Eye size={16} />
                      <span>Preview</span>
                    </div>
                  </button>
                  <button
                    onClick={() =>
                      handleDownload(assignment.documentUrl, assignment.title)
                    }
                    className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex flex-col items-center gap-0.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <Download size={16} />
                      <span>Download</span>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Teacher Feedback Section */}
        {assignment.feedback && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400">
            <div className="flex items-start gap-2">
              <MessageSquare
                className="text-blue-500 mt-1 flex-shrink-0"
                size={18}
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-slate-700 mb-1">
                  Teacher Feedback
                </h4>
                <p className="text-sm text-slate-600">{assignment.feedback}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Parent Acknowledgment Toggle */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`ack-${assignment.id}`}
              checked={isAcknowledged || assignment.acknowledged}
              onChange={() => onToggleAcknowledgment(assignment.id)}
              className="w-5 h-5 rounded accent-blue-500 cursor-pointer"
            />
            <label
              htmlFor={`ack-${assignment.id}`}
              className="text-sm font-semibold text-slate-700 cursor-pointer"
            >
              I acknowledge home supervision for this assignment
            </label>
          </div>
          {(isAcknowledged || assignment.acknowledged) && (
            <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
              <CheckCircle size={14} />
              Acknowledged
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeworkCard;
