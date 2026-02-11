import React from "react";
import { Download, Share2, AlertCircle } from "lucide-react";
import { EDUCATIONAL_TRIPS_DATA } from "../../../../data/teacherData";

const ConsentManagement = () => {
  const { consentForm, consentTracking } = EDUCATIONAL_TRIPS_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Consent Form Preview */}
      <div className="lg:col-span-12">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
          Consent Pack Preview
        </h3>
      </div>

      <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500">
            Document Style Preview
          </span>
          <div className="flex gap-2">
            <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors">
              <Download size={16} />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors">
              <Share2 size={16} />
            </button>
          </div>
        </div>
        <div className="p-8 space-y-8 bg-slate-50/20 max-h-[600px] overflow-y-auto custom-scrollbar">
          <div className="text-center space-y-2 border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-serif text-slate-800 italic">
              {consentForm.title}
            </h2>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
              {consentForm.institution}
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p
              dangerouslySetInnerHTML={{
                __html: consentForm.sections[0]
                  .replace(
                    "National Science Centre",
                    "<strong>National Science Centre</strong>",
                  )
                  .replace("Feb 24, 2026", "<strong>Feb 24, 2026</strong>"),
              }}
            ></p>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-slate-300 rounded"></div>
                <span>{consentForm.sections[1]}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-slate-300 rounded"></div>
                <span>{consentForm.sections[2]}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-4">
                <p className="font-bold border-b border-slate-200 pb-2">
                  Emergency Contact
                </p>
                <div className="space-y-2 text-xs">
                  <p className="text-slate-400 uppercase font-black tracking-tighter">
                    Primary Name
                  </p>
                  <p className="h-4 bg-slate-100 rounded w-full"></p>
                  <p className="text-slate-400 uppercase font-black tracking-tighter mt-4">
                    Contact Phone
                  </p>
                  <p className="h-4 bg-slate-100 rounded w-2/3"></p>
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-end">
                <div className="border-t border-slate-300 pt-2 text-center text-[10px] text-slate-400">
                  Signature of Parent / Guardian
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consent Tracking Section */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col justify-center h-full">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                Overall Consent
              </p>
              <h4 className="text-4xl font-bold text-slate-800">
                {consentTracking.stats.overall}
                <span className="text-lg text-slate-300">
                  /{consentTracking.stats.target}
                </span>
              </h4>
            </div>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 mb-1">
              {consentTracking.stats.overall}% Completed
            </span>
          </div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000"
              style={{ width: `${consentTracking.stats.overall}%` }}
            ></div>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            <h5 className="text-[10px] font-black text-slate-400 uppercase mb-2">
              Student List
            </h5>
            {consentTracking.students.map((student, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">
                      {student.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-tighter ${student.status === "Received" ? "text-emerald-500" : "text-amber-500"}`}
                      >
                        {student.status}
                      </span>
                      {student.alert && (
                        <AlertCircle
                          size={10}
                          className="text-red-500"
                          title="Medical Alert"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {student.status === "Pending" && (
                  <button className="text-[10px] font-black text-blue-600 uppercase border border-blue-100 px-2 py-1 rounded bg-white hover:bg-blue-600 hover:text-white transition-all">
                    Remind
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentManagement;
