import React from "react";
import {
  RefreshCw,
  Plus,
  CheckCircle,
  XCircle,
  Edit,
  User,
} from "lucide-react";

const SubstituteManagement = ({ substituteRequests }) => {
  const getSubstituteStatusColor = (status) => {
    switch (status) {
      case "assigned":
        return "bg-blue-100 text-blue-700";
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-xl">
            <RefreshCw className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Substitute Management
            </h2>
            <p className="text-sm text-gray-600">
              Manage teacher absences and substitute assignments
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Add Absence</span>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
      </div>

      <div className="space-y-3">
        {substituteRequests.map((request) => (
          <div
            key={request.id}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getSubstituteStatusColor(request.status)}`}
                  >
                    {request.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    {request.date} • {request.period}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Absent Teacher</p>
                    <p className="font-bold text-gray-800">
                      {request.absentTeacher}
                    </p>
                    <p className="text-sm text-gray-600">
                      {request.subject} • {request.class}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      Reason: {request.reason}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Substitute Teacher
                    </p>
                    {request.substitute ? (
                      <>
                        <p className="font-bold text-green-700 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {request.substitute}
                        </p>
                        <p className="text-sm text-gray-600">
                          Coverage confirmed
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-bold text-red-700 flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          Not assigned
                        </p>
                        <p className="text-sm text-gray-600">
                          Awaiting assignment
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!request.substitute && (
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex items-center gap-2 whitespace-nowrap">
                    <User className="w-4 h-4" />
                    <span>Assign Sub</span>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                )}
                <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                  <div className="text-[10px] opacity-70">get in app</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubstituteManagement;
