import React from "react";
import { Award, Video, Image, ClipboardList } from "lucide-react";

const AssessmentView = ({
  students,
  selectedStudent,
  setSelectedStudent,
  handleGradeUpdate,
  showNotification,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Reports List */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl min-h-[600px]">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Award size={20} className="text-slate-400" /> Student Lab Reports
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className={`p-6 rounded-[2rem] border transition-all cursor-pointer hover:shadow-lg ${
                  selectedStudent?.id === student.id
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl transform scale-[1.02]"
                    : "bg-white border-slate-100 hover:border-emerald-200"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200/20 backdrop-blur-sm flex items-center justify-center font-bold">
                    {student.name.charAt(0)}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      selectedStudent?.id === student.id
                        ? "bg-white/20 text-white"
                        : student.status === "Submitted"
                          ? "bg-blue-100 text-blue-600"
                          : student.status === "Graded"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </div>
                <h4
                  className={`font-bold text-lg mb-1 ${selectedStudent?.id === student.id ? "text-white" : "text-slate-800"}`}
                >
                  {student.name}
                </h4>
                <p
                  className={`text-xs font-medium ${selectedStudent?.id === student.id ? "text-slate-400" : "text-slate-500"}`}
                >
                  {student.lab}
                </p>

                {student.evidence.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    {student.evidence.map((ev, i) => (
                      <div
                        key={i}
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 ${
                          selectedStudent?.id === student.id
                            ? "bg-white/10 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {ev.includes("mp4") ? (
                          <Video size={10} />
                        ) : (
                          <Image size={10} />
                        )}{" "}
                        Evidence
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grading Panel */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl h-full">
          {selectedStudent ? (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <ClipboardList size={20} className="text-emerald-500" /> Grading
                Rubric
              </h3>

              <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Grading for
                </p>
                <p className="font-bold text-slate-800 text-lg">
                  {selectedStudent.name}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { cat: "Procedure", max: 10, current: 8 },
                  {
                    cat: "Data Analysis",
                    max: 10,
                    current: selectedStudent.score
                      ? Math.round(selectedStudent.score * 0.4)
                      : null,
                  },
                  {
                    cat: "Conclusion",
                    max: 10,
                    current: selectedStudent.score
                      ? Math.round(selectedStudent.score * 0.2)
                      : null,
                  },
                ].map((criteria, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {criteria.cat}
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        {criteria.current !== null ? criteria.current : "-"}/
                        {criteria.max}
                      </span>
                    </div>
                    <div
                      className="h-3 w-full bg-slate-100 rounded-full overflow-hidden relative cursor-pointer hover:bg-slate-200 transition-colors"
                      onClick={() =>
                        handleGradeUpdate(
                          criteria.cat,
                          Math.floor(Math.random() * 10) + 1,
                        )
                      }
                    >
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{
                          width: criteria.current
                            ? `${(criteria.current / criteria.max) * 100}%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-slate-500">
                    Total Score
                  </span>
                  <span className="text-3xl font-bold text-slate-800">
                    {selectedStudent.score || 0}
                    <span className="text-lg text-slate-400 font-bold">
                      /30
                    </span>
                  </span>
                </div>
                <button
                  onClick={() =>
                    showNotification(
                      "Scores Published",
                      `Grades for ${selectedStudent.name} have been released.`,
                    )
                  }
                  className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-95"
                >
                  Finalize & Release
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 opacity-60">
              <Award size={48} className="mb-4" />
              <p className="font-bold">
                Select a student submission to begin grading
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentView;
