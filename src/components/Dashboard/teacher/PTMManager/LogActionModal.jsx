import React from "react";

const LogActionModal = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-indigo-900/60 backdrop-blur-xl z-[100] flex items-center justify-center p-4 animate-in fade-in duration-500">
      <div className="bg-white rounded-[3.5rem] w-full max-w-lg shadow-[0_32px_128px_-16px_rgba(79,70,229,0.4)] border-2 border-indigo-100 p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-indigo-900 tracking-tight leading-none mb-1">
            Log Action Item
          </h2>
          <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-10">
            Execution Framework
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                Student Context
              </label>
              <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                <option>Arjun Mehta</option>
                <option>Sanya Iyer</option>
                <option>Kabir Singh</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                Action Description
              </label>
              <textarea
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-800 focus:border-indigo-500 outline-none transition-all resize-none h-24 placeholder:text-slate-300"
                placeholder="e.g. Daily reading practice for 15 mins..."
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                  Owner
                </label>
                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none appearance-none transition-all cursor-pointer">
                  <option>Parent</option>
                  <option>Teacher</option>
                  <option>Student</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-700 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs hover:bg-slate-200 transition-all uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg hover:bg-indigo-700 transition-all uppercase tracking-wider"
            >
              Confirm Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogActionModal;
