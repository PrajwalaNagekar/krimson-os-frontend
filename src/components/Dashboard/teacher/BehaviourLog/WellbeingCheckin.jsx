import React from "react";
import { Activity, AlertCircle, Heart } from "lucide-react";

const WellbeingCheckin = ({
  students,
  checkinForm,
  setCheckinForm,
  handleSendCheckin,
  recentCheckins,
}) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-indigo-50 relative overflow-hidden">
        <h3 className="text-xl font-bold text-slate-800 mb-1">
          Check-in Prompt
        </h3>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Teacher Initiated
        </p>

        <form onSubmit={handleSendCheckin} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Student
            </label>
            <select
              value={checkinForm.studentId}
              onChange={(e) =>
                setCheckinForm({ ...checkinForm, studentId: e.target.value })
              }
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
            >
              <option value="">Select Student...</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.class})
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Context
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Academic Pressure",
                "Behaviour Shift",
                "Absence",
                "Routine Check",
              ].map((reason) => (
                <button
                  key={reason}
                  type="button"
                  onClick={() =>
                    setCheckinForm({ ...checkinForm, concern: reason })
                  }
                  className={`py-2 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    checkinForm.concern === reason
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                      : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
            Send Private Check-in
          </button>
        </form>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100">
        <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Activity size={18} className="text-emerald-500" /> Pulse Live
        </h4>
        <div className="space-y-4">
          {recentCheckins.map((c) => (
            <div
              key={c.id}
              className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4"
            >
              <div
                className={`p-2 rounded-xl text-white ${c.mood === "worried" ? "bg-orange-400" : "bg-emerald-400"}`}
              >
                {c.mood === "worried" ? (
                  <AlertCircle size={16} />
                ) : (
                  <Heart size={16} />
                )}
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm">
                  {c.student}
                </h5>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  "{c.note}"
                </p>
                <span className="text-[10px] font-bold text-slate-400 mt-2 block upppercase tracking-wider">
                  {c.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellbeingCheckin;
