import React from "react";
import { Shield, CheckCircle, MessageSquare, Archive } from "lucide-react";

const ComplianceNotice = ({ isViewingArchive, onToggleArchive }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-3xl border-2 border-blue-100">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Shield size={24} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            PDPA Compliance & Data Security
          </h3>
          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>
                All message logs are automatically archived for audit purposes
              </span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>Communication data is encrypted and stored securely</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>
                Messages are retained according to institutional policies
              </span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle
                size={16}
                className="text-green-500 flex-shrink-0 mt-0.5"
              />
              <span>
                Firebase Notifications integrated for real-time delivery
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={onToggleArchive}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          {isViewingArchive ? (
            <MessageSquare size={14} />
          ) : (
            <Archive size={14} />
          )}
          {isViewingArchive ? "Return to Inbox" : "View Archive"}
        </button>
      </div>
    </div>
  );
};

export default ComplianceNotice;
