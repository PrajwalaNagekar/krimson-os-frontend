import React from "react";

const DataBindingSection = ({ fields }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
        Data Binding
      </h4>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.label} className="space-y-1.5">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {field.label}
            </label>
            <div
              className={`w-full px-4 py-3 rounded-xl text-xs font-bold ${field.locked ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200" : "bg-slate-50 text-slate-700 border border-slate-200"}`}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataBindingSection;
