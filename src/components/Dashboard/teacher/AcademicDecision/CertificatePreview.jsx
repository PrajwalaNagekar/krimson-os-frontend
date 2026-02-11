import React from "react";
import { Search, Printer, Download, GraduationCap, QrCode } from "lucide-react";

const CertificatePreview = ({ previewData }) => {
  return (
    <div className="bg-slate-200 border border-slate-300 rounded-[2.5rem] p-4 md:p-10 shadow-inner flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-8 px-4">
        <div className="flex bg-white/50 backdrop-blur-md p-1 rounded-xl border border-white shadow-sm">
          <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all">
            <Search size={16} />
          </button>
          <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all">
            <Printer size={16} />
          </button>
          <button className="p-2 text-slate-600 hover:bg-white rounded-lg transition-all">
            <Download size={16} />
          </button>
        </div>
        <div className="flex items-center gap-4 text-slate-500 font-bold text-xs uppercase tracking-widest">
          <span>Zoom: 100%</span>
          <span className="opacity-30">|</span>
          <span>Format: A4 Landscape</span>
        </div>
      </div>

      {/* The Actual Certificate Mockup */}
      <div className="aspect-[1.414/1] bg-white shadow-2xl rounded-sm mx-auto w-full max-w-4xl border-[16px] border-slate-50 p-12 flex flex-col items-center justify-between text-center font-serif relative overflow-hidden">
        <div className="absolute inset-0 border-[1px] border-slate-200 m-4"></div>
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-slate-200 m-8"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-slate-200 m-8"></div>

        <div className="space-y-2 relative z-10 pt-10">
          <div className="w-16 h-16 bg-slate-900 mx-auto rounded-full flex items-center justify-center mb-6">
            <GraduationCap className="text-white" size={32} />
          </div>
          <h2 className="text-3xl tracking-[0.2em] font-light text-slate-800 uppercase italic">
            {previewData.title}
          </h2>
          <p className="text-xs tracking-widest font-sans font-bold text-slate-400 uppercase">
            {previewData.subtitle}
          </p>
        </div>

        <div className="space-y-4 relative z-10 w-full px-10">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter border-b-2 border-slate-900 pb-4 w-fit mx-auto">
            {previewData.studentName}
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            {previewData.description}{" "}
            <span className="font-bold text-slate-900 underline decoration-slate-300 decoration-4 underline-offset-8 uppercase tracking-widest">
              {previewData.highlight}
            </span>
          </p>
        </div>

        <div className="w-full flex items-end justify-between px-10 pb-8 font-sans relative z-10">
          <div className="text-left">
            <div className="w-32 h-0.5 bg-slate-200 mb-2"></div>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
              Registrar Official
            </p>
            <p className="text-[10px] text-slate-400 font-bold">
              {previewData.date}
            </p>
          </div>
          <div className="w-24 h-24 border border-slate-100 p-2 flex items-center justify-center overflow-hidden grayscale">
            <QrCode size={64} className="text-slate-200" />
          </div>
          <div className="text-right">
            <div className="w-32 h-0.5 bg-slate-200 mb-2"></div>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
              Department Head
            </p>
            <p className="text-[10px] text-slate-400 font-bold">
              {previewData.authId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
