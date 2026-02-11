import React from "react";
import { X, Lock } from "lucide-react";

const BehaviorLogModal = ({
  show,
  onClose,
  newLog,
  setNewLog,
  handleAddLog,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl animate-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">
            New Behavioral Entry
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Log Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["commendation", "warning", "mentorship"].map((type) => (
                <button
                  key={type}
                  onClick={() => setNewLog({ ...newLog, type })}
                  className={`p-2 rounded-xl border-2 font-bold text-[10px] uppercase tracking-wider transition-all ${newLog.type === type ? "border-orange-500 bg-orange-50 text-orange-600" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              Observation Note
            </label>
            <textarea
              placeholder="Document specific behaviors or incidents..."
              value={newLog.note}
              onChange={(e) => setNewLog({ ...newLog, note: e.target.value })}
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-orange-400 focus:outline-none min-h-[120px]"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Lock size={18} />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-800 underline decoration-purple-200">
                  End-to-End Encryption
                </h4>
                <p className="text-[10px] text-slate-500">
                  Only authorized personnel can view
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setNewLog({ ...newLog, encrypted: !newLog.encrypted })
              }
              className={`w-10 h-5 rounded-full p-1 transition-colors ${newLog.encrypted ? "bg-purple-500" : "bg-slate-300"}`}
            >
              <div
                className={`w-3 h-3 bg-white rounded-full transition-transform ${newLog.encrypted ? "translate-x-5" : ""}`}
              />
            </button>
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all font-outfit"
            >
              Discard
            </button>
            <button
              onClick={handleAddLog}
              disabled={!newLog.note}
              className="flex-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 font-outfit"
            >
              Save Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorLogModal;
