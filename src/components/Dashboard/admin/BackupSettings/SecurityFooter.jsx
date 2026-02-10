import React from "react";
import { Shield } from "lucide-react";

const SecurityFooter = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 border border-purple-200 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="p-4 bg-purple-500 text-white rounded-2xl">
          <Shield size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-purple-900 mb-2">
            Security & Encryption Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-purple-700 font-semibold mb-1">
                Encryption Standard
              </p>
              <p className="text-purple-900 font-bold">
                AES-256 (Military Grade)
              </p>
            </div>
            <div>
              <p className="text-purple-700 font-semibold mb-1">
                Storage Location
              </p>
              <p className="text-purple-900 font-bold">
                AWS S3 - Verified Servers
              </p>
            </div>
            <div>
              <p className="text-purple-700 font-semibold mb-1">Compliance</p>
              <p className="text-purple-900 font-bold">
                PDPA & ISO 27001 Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFooter;
