import React from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";

const PrivacyNotice = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-2 border-purple-200">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-100 rounded-xl">
          <Shield size={24} className="text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Lock size={18} className="text-purple-600" />
            Data Privacy & Security
          </h3>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>Sensitive notes are end-to-end encrypted</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>Access restricted to authorized personnel only</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>All behavioral data tagged and audit-logged</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;
