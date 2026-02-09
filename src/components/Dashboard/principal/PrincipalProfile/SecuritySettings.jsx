import React from "react";
import { FileSignature, CheckCircle, Settings } from "lucide-react";

const SecuritySettings = ({ theme, signatureData }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Standard Password Change */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
        ></div>
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Security & Password
        </h2>
        <div className="max-w-lg space-y-4">
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <button
            className={`px-6 py-3 text-white rounded-xl font-bold text-sm shadow-md transition-all bg-gradient-to-r ${theme.gradient}`}
          >
            Update Password
          </button>
        </div>
      </div>

      {/* Digital Signature Management */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-3xl border-2 border-blue-200 shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <FileSignature className="text-white" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg md:text-xl">
              Digital Signature Management
            </h3>
            <p className="text-slate-600">
              For official document approvals and certifications
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">
                Status
              </p>
              <div className="flex items-center gap-2 mt-1">
                <CheckCircle className="text-green-600" size={18} />
                <p className="font-bold text-green-600">Active & Verified</p>
              </div>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-xs text-slate-500 font-bold uppercase">
                Issued On
              </p>
              <p className="font-bold text-slate-800 mt-1">
                {signatureData.issuedOn}
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-xs text-slate-500 font-bold uppercase">
                Valid Until
              </p>
              <p className="font-bold text-slate-800 mt-1">
                {signatureData.validUntil}
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow-sm">
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">
              Certificate ID
            </p>
            <p className="font-mono font-bold text-slate-800">
              {signatureData.certificateId}
            </p>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
          <Settings size={18} />
          <span>Manage Signature Configuration</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white">
            (get in app)
          </span>
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
