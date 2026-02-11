import React, { useState } from "react";
import { X, Map, ArrowRight } from "lucide-react";

const CreateRouteModal = ({ onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-2xl overflow-hidden animate-scaleIn border border-white/20">
        {/* Step Progress Line */}
        <div className="h-2 w-full bg-slate-100/50 flex">
          <div
            className={`h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700 ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`}
          />
        </div>

        <div className="p-8 md:p-10 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
                Institutional Fleet Gateway
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                {step === 1
                  ? "Logistics Definition"
                  : step === 2
                    ? "Journey Checkpoints"
                    : "Fleet Finalization"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Area based on Step */}
          <div className="space-y-6">
            {step === 1 && (
              <div className="animate-fadeIn space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Internal Reference Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. South Campus A-Block Express"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold focus:bg-white focus:border-slate-900 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Fleet Category
                    </label>
                    <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-slate-900 transition-all">
                      <option>Large Class-A Bus</option>
                      <option>Mini-Bus</option>
                      <option>Utility Van</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Daily Frequency
                    </label>
                    <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-slate-900 transition-all">
                      <option>Morning only</option>
                      <option>Drop only</option>
                      <option>Reciprocal (Round-trip)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fadeIn space-y-6">
                <div className="p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center text-slate-400">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                    <Map size={24} />
                  </div>
                  <p className="font-bold text-slate-500 text-sm">
                    Design Journey Map
                  </p>
                  <p className="text-[10px] mt-1">
                    Checkpoints will be configured in the next view
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-100">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 px-6 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                Previous Step
              </button>
            )}
            <button
              onClick={() => (step < 3 ? setStep(step + 1) : onClose())}
              className="flex-[2] py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
            >
              <span>
                {step === 3
                  ? "Finalize Fleet Profile"
                  : "Proceed to Spatial Mapping"}
              </span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRouteModal;
