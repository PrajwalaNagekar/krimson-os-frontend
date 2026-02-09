import React from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  IdCard,
  BookOpen,
  Calendar,
  Eye,
  Upload,
  Download,
  Edit,
  History,
  User,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "complete":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: CheckCircle,
      };
    case "incomplete":
      return {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-300",
        icon: AlertTriangle,
      };
    case "missing":
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
        icon: XCircle,
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-700",
        border: "border-gray-300",
        icon: FileText,
      };
  }
};

const getDocumentStatusColor = (status) => {
  switch (status) {
    case "verified":
      return { bg: "bg-green-50", text: "text-green-600", icon: CheckCircle };
    case "pending":
      return { bg: "bg-yellow-50", text: "text-yellow-600", icon: Clock };
    case "missing":
      return { bg: "bg-red-50", text: "text-red-600", icon: XCircle };
    default:
      return { bg: "bg-gray-50", text: "text-gray-600", icon: FileText };
  }
};

const StudentRow = ({ student, isExpanded, toggleExpand }) => {
  const statusColors = getStatusColor(student.status);
  const StatusIcon = statusColors.icon;

  return (
    <div className="hover:bg-gradient-to-r hover:from-cyan-50/30 hover:to-pink-50/30 transition-colors">
      {/* Student Row */}
      <div className="p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Student Info */}
          <div className="flex items-center gap-4 flex-1">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
              {student.name.charAt(0)}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="font-bold text-slate-800 text-base lg:text-lg">
                  {student.name}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${statusColors.bg} ${statusColors.text} border ${statusColors.border} text-xs font-bold`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  {student.status}
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <IdCard className="w-4 h-4 text-slate-400" />
                  {student.id}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  {student.class}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Enrolled: {student.enrollmentDate}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={toggleExpand}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all text-sm font-semibold"
            >
              <Eye className="w-4 h-4" />
              {isExpanded ? "Hide" : "View"} Details
            </button>

            <button
              className="relative group/upload p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all hover:scale-110"
              title="Upload Document"
            >
              <Upload className="w-4 h-4" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/upload:opacity-100 transition-opacity pointer-events-none">
                get in app
              </span>
            </button>

            <button
              className="relative group/export p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all hover:scale-110"
              title="Export PDF"
            >
              <Download className="w-4 h-4" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/export:opacity-100 transition-opacity pointer-events-none">
                get in app
              </span>
            </button>

            <button
              className="relative group/edit p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all hover:scale-110"
              title="Edit Record"
            >
              <Edit className="w-4 h-4" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
                get in app
              </span>
            </button>

            <button
              className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all hover:scale-110"
              title="History"
            >
              <History className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-slate-200 animate-in slide-in-from-top-2 fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Guardian Information */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Guardian Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">
                        Name
                      </p>
                      <p className="text-sm text-slate-700 font-bold">
                        {student.guardian.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">
                        Relation
                      </p>
                      <p className="text-sm text-slate-700 font-bold">
                        {student.guardian.relation}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">
                        Phone
                      </p>
                      <p className="text-sm text-slate-700 font-bold">
                        {student.guardian.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-slate-400 mt-1" />
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">
                        Email
                      </p>
                      <p className="text-sm text-slate-700 font-bold">
                        {student.guardian.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-pink-600" />
                  Documents ({student.documents.length})
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                  {student.documents.map((doc, docIndex) => {
                    const docColors = getDocumentStatusColor(doc.status);
                    const DocIcon = docColors.icon;
                    return (
                      <div
                        key={docIndex}
                        className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg ${docColors.bg}`}>
                            <FileText className={`w-4 h-4 ${docColors.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-700 truncate">
                              {doc.name}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              {doc.uploadDate && (
                                <>
                                  <span>{doc.uploadDate}</span>
                                  <span>•</span>
                                  <span>by {doc.uploadedBy}</span>
                                </>
                              )}
                              {!doc.uploadDate && (
                                <span className="text-red-600 font-semibold">
                                  Not uploaded
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${docColors.bg} ${docColors.text} text-xs font-bold shrink-0`}
                        >
                          <DocIcon className="w-3 h-3" />
                          {doc.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Version Control Info */}
            <div className="mt-4 bg-slate-100 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Last Updated
                  </p>
                  <p className="text-sm text-slate-700 font-bold">
                    {student.lastUpdated} by {student.lastUpdatedBy}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-slate-600 hover:bg-slate-200 transition-all text-sm font-semibold">
                <History className="w-4 h-4" />
                View History
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRow;
