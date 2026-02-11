import React from "react";
import { Clock, AlertTriangle } from "lucide-react";

const ExpiryAlerts = ({ expiringDocs, expiredDocs }) => {
  if (expiringDocs.length === 0 && expiredDocs.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Expiring Soon */}
      {expiringDocs.length > 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-200 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-900">
                Documents Expiring Soon
              </h3>
              <p className="text-sm text-amber-700">
                {expiringDocs.length} documents expiring within 60 days
              </p>
            </div>
          </div>

          <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar-hidden">
            {expiringDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-3 rounded-xl border border-amber-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-sm">
                      {doc.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {doc.category.toUpperCase()}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-bold border border-amber-200">
                    {doc.daysUntilExpiry} days
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expired */}
      {expiredDocs.length > 0 && (
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-6 border border-red-200 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-900">
                Expired Documents - Action Required
              </h3>
              <p className="text-sm text-red-700">
                {expiredDocs.length} documents require renewal
              </p>
            </div>
          </div>

          <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar-hidden">
            {expiredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-3 rounded-xl border border-red-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 text-sm">
                      {doc.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {doc.category.toUpperCase()}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold border border-red-200">
                    Expired
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpiryAlerts;
