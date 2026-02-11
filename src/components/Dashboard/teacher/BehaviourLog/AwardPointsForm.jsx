import React from "react";
import { Award } from "lucide-react";

const AwardPointsForm = ({
  students,
  awardForm,
  setAwardForm,
  handleAwardPoints,
}) => {
  return (
    <div className="bg-slate-50/50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 text-center relative overflow-hidden group">
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-100 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>

      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-amber-500 mx-auto mb-8 shadow-xl shadow-amber-100/50 border border-amber-50 relative z-10">
        <Award size={48} />
      </div>

      <h2 className="text-4xl font-bold text-slate-900 mb-4 relative z-10 tracking-tight">
        Recognize Excellence
      </h2>
      <p className="text-slate-500 font-medium mb-12 max-w-lg mx-auto relative z-10 text-lg">
        Award points to students for positive contributions. These are instantly
        reflected on the school leaderboard.
      </p>

      <form
        onSubmit={handleAwardPoints}
        className="max-w-xl mx-auto space-y-8 relative z-10 text-left"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Student
            </label>
            <select
              required
              value={awardForm.studentId}
              onChange={(e) =>
                setAwardForm({ ...awardForm, studentId: e.target.value })
              }
              className="w-full p-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all shadow-sm cursor-pointer"
            >
              <option value="">Select Student...</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              House
            </label>
            <div className="w-full p-4 bg-slate-100 rounded-2xl text-sm font-bold text-slate-500 border-2 border-transparent">
              {awardForm.studentId
                ? `${students.find((s) => s.id === parseInt(awardForm.studentId))?.house} House`
                : "Select Student"}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
            Category
          </label>
          <select
            value={awardForm.reason}
            onChange={(e) =>
              setAwardForm({ ...awardForm, reason: e.target.value })
            }
            className="w-full p-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all shadow-sm cursor-pointer"
          >
            <option>Academic Excellence</option>
            <option>Helpers & Volunteers</option>
            <option>Sportsmanship</option>
            <option>Leadership</option>
            <option>Creativity</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
            Value
          </label>
          <div className="grid grid-cols-4 gap-3">
            {[10, 20, 50, 100].map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setAwardForm({ ...awardForm, points: p })}
                className={`py-4 rounded-xl text-lg font-bold transition-all border-2 ${
                  awardForm.points === p
                    ? "bg-amber-400 text-white border-amber-400 shadow-xl shadow-amber-200 transform scale-105"
                    : "bg-white text-slate-500 border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                }`}
              >
                +{p}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300"
        >
          Confirm Award
        </button>
      </form>
    </div>
  );
};

export default AwardPointsForm;
