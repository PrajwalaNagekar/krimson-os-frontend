import React from "react";
import { Calendar, Clock, User, MapPin, ChevronRight } from "lucide-react";

const PeriodSchedule = ({ timetable, setSelectedClass, setIsModalOpen }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Calendar className="text-blue-500" size={20} /> Monday - Period
        Schedule
      </h3>

      <div className="space-y-4">
        {timetable["monday"] ? (
          timetable["monday"].map((slot, idx) => {
            // Determine border and accent color based on status
            let borderColor = "border-slate-100";
            let accentColor = "bg-slate-200";
            let typeColor = "bg-slate-100 text-slate-700";

            if (slot.status === "active") {
              borderColor = "border-yellow-200 bg-yellow-50/50";
              accentColor = "bg-yellow-500";
            } else if (slot.status === "completed") {
              borderColor = "border-blue-100 bg-blue-50/30";
              accentColor = "bg-blue-500";
            }

            // Type badge color override - Lab indicator
            if (slot.type === "Lab") typeColor = "bg-pink-100 text-pink-700";
            else if (slot.type === "Lecture")
              typeColor = "bg-cyan-100 text-cyan-700";

            return (
              <div
                key={idx}
                onClick={() => {
                  const classKey = `${slot.subject}-${slot.period}-Monday`;
                  setSelectedClass({ ...slot, day: "Monday", classKey });
                  setIsModalOpen(true);
                }}
                className={`flex gap-4 p-4 border rounded-2xl transition-all group cursor-pointer relative overflow-visible ${borderColor} hover:shadow-md`}
              >
                <div
                  className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-lg ${accentColor}`}
                ></div>

                <div className="flex flex-col items-center justify-center min-w-[80px] bg-white rounded-xl p-2 shadow-sm z-10">
                  <span className="text-xs font-bold text-slate-500">
                    Period {slot.period}
                  </span>
                  <Clock size={16} className="text-slate-400 mt-2 mb-1" />
                </div>

                <div className="flex-1 ml-2">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-slate-800">
                        {slot.subject}
                      </h4>
                      <p className="text-sm font-medium text-slate-500">
                        {slot.time}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${typeColor}`}
                      >
                        {slot.type}
                      </span>
                      {slot.isSubstitute && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-600 border border-red-200">
                          Substitute
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100/50">
                    <div className="flex items-center gap-2">
                      {slot.teacherImage ? (
                        <img
                          src={slot.teacherImage}
                          alt={slot.teacher}
                          className="w-6 h-6 rounded-full object-cover border border-slate-200"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 grid place-items-center">
                          <User size={14} className="text-slate-500" />
                        </div>
                      )}
                      <span className="text-xs font-bold text-slate-600">
                        {slot.teacher}
                      </span>
                    </div>
                    <div className="w-px h-4 bg-slate-200"></div>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                      <MapPin size={12} className="text-slate-400" />{" "}
                      {slot.room}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center pl-4">
                  <button className="px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl shadow-sm hover:bg-blue-50 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95">
                    View Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-slate-400 italic text-sm">No classes scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default PeriodSchedule;
