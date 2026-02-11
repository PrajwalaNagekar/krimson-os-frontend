import React from "react";
import { Plus, User, CheckCircle2 } from "lucide-react";

const LogEntryForm = ({ students, newLog, setNewLog, handleAddLog }) => {
  return (
    <div className="bg-slate-50/50 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>
      <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
        <Plus size={20} className="text-indigo-600" /> Log Entry
      </h3>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
        New Observation
      </p>

      <form onSubmit={handleAddLog} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
            Student
          </label>
          <div className="relative">
            <select
              required
              value={newLog.studentId}
              onChange={(e) =>
                setNewLog({ ...newLog, studentId: e.target.value })
              }
              className="w-full p-4 pl-12 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all appearance-none cursor-pointer"
            >
              <option value="">Select Student...</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.class})
                </option>
              ))}
            </select>
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Type
            </label>
            <select
              value={newLog.type}
              onChange={(e) => setNewLog({ ...newLog, type: e.target.value })}
              className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
            >
              <option>Positive</option>
              <option>Neutral</option>
              <option>Concern</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
              Severity
            </label>
            <select
              value={newLog.severity}
              onChange={(e) =>
                setNewLog({ ...newLog, severity: e.target.value })
              }
              className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all cursor-pointer"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
            Context
          </label>
          <input
            type="text"
            value={newLog.context}
            onChange={(e) => setNewLog({ ...newLog, context: e.target.value })}
            placeholder="e.g. Science Lab"
            className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
            Details
          </label>
          <textarea
            required
            value={newLog.description}
            onChange={(e) =>
              setNewLog({ ...newLog, description: e.target.value })
            }
            placeholder="Factual description..."
            className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500 transition-all h-28 resize-none"
          ></textarea>
        </div>

        <div
          onClick={() => setNewLog({ ...newLog, followup: !newLog.followup })}
          className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${newLog.followup ? "bg-red-50 border-red-200" : "bg-white border-slate-200 hover:border-indigo-300"}`}
        >
          <div
            className={`w-5 h-5 rounded flex items-center justify-center transition-all ${newLog.followup ? "bg-red-500 text-white" : "bg-slate-200 text-transparent"}`}
          >
            <CheckCircle2 size={14} />
          </div>
          <span
            className={`text-xs font-bold ${newLog.followup ? "text-red-600" : "text-slate-500"}`}
          >
            Requires Admin Follow-up
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-1 transition-all"
        >
          Record Entry
        </button>
      </form>
    </div>
  );
};

export default LogEntryForm;
