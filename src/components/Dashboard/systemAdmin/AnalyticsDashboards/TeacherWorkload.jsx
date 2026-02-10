import React from "react";
import { Users, BookOpen, AlertCircle, Award } from "lucide-react";

const TeacherWorkload = ({ data }) => {
  const getSeverityColor = (severity) => {
    if (severity === "High") return "bg-red-100 text-red-700";
    if (severity === "Medium") return "bg-orange-100 text-orange-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="text-blue-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Avg Class Size
            </span>
          </div>
          <p className="text-5xl font-bold text-blue-600">
            {data.averageClassSize}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <BookOpen className="text-purple-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Teaching Hours/Week
            </span>
          </div>
          <p className="text-5xl font-bold text-purple-600">
            {data.teachingHoursAvg}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Award className="text-green-500" size={28} />
            <span className="text-sm font-medium text-slate-600">
              Workload Balance
            </span>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {data.workloadBalance}
          </p>
        </div>
      </div>

      {/* Department Workload */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Department Workload
        </h3>
        <div className="space-y-4">
          {data.teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-slate-800">
                  {teacher.name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">Satisfaction:</span>
                  <span className="text-xl font-bold text-purple-600">
                    {teacher.satisfaction}/5
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Avg Classes</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {teacher.avgClasses}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Avg Students</p>
                  <p className="text-2xl font-bold text-cyan-600">
                    {teacher.avgStudents}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Satisfaction</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {teacher.satisfaction}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workload Concerns */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Workload Concerns
        </h3>
        <div className="space-y-4">
          {data.workloadConcerns.map((concern, idx) => (
            <div
              key={idx}
              className="p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="text-orange-500" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-slate-800">
                    {concern.teacher}
                  </h4>
                  <p className="text-base text-slate-600">{concern.issue}</p>
                </div>
              </div>
              <span
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${getSeverityColor(concern.severity)}`}
              >
                {concern.severity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Development */}
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Professional Development
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl text-center">
            <p className="text-sm text-slate-600 mb-2">Completed</p>
            <p className="text-4xl font-bold text-green-600">
              {data.professionalDevelopment.completed}
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl text-center">
            <p className="text-sm text-slate-600 mb-2">Scheduled</p>
            <p className="text-4xl font-bold text-blue-600">
              {data.professionalDevelopment.scheduled}
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl text-center">
            <p className="text-sm text-slate-600 mb-2">Participation Rate</p>
            <p className="text-4xl font-bold text-purple-600">
              {data.professionalDevelopment.participationRate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherWorkload;
