import React from "react";
import { Layout } from "lucide-react";

const TemplateSelector = ({ templates }) => {
  const SectionHeader = ({ title, icon: Icon, description }) => (
    <div className="flex items-center gap-4 mb-6 text-slate-800">
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
        <Icon size={24} className="text-slate-600" />
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        {description && (
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-0.5">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
      <SectionHeader
        title="Select Template"
        icon={Layout}
        description="Institutional Formats"
      />
      <div className="grid grid-cols-1 gap-4">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-500 cursor-pointer transition-all group"
          >
            <div className="aspect-[1.414/1] bg-white border border-slate-200 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-all flex flex-col items-center justify-center p-4">
              <div className="w-full h-full border-4 border-slate-100 rounded flex flex-col items-center justify-center gap-1 opacity-40">
                <div className="w-1/2 h-0.5 bg-slate-300"></div>
                <div className="w-2/3 h-0.5 bg-slate-300"></div>
                <span className="text-[6px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">
                  Institute Of Excelence
                </span>
              </div>
            </div>
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              {tpl.name}
            </h5>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              {tpl.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
