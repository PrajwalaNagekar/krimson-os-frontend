import React from "react";
import { Download, Mail } from "lucide-react";

const FeaturesInfo = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-purple-100">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 sm:p-3 bg-purple-500 rounded-lg sm:rounded-xl">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-purple-900 mb-1">
              Export Formats
            </h4>
            <p className="text-xs sm:text-sm text-purple-800">
              All reports available in PDF and Excel formats
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <span>PDF with digital signatures</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <span>Excel with raw data</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-700">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <span>Charts and visualizations</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-100">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 sm:p-3 bg-blue-500 rounded-lg sm:rounded-xl">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-blue-900 mb-1">
              Email Automation
            </h4>
            <p className="text-xs sm:text-sm text-blue-800">
              Schedule weekly/monthly dispatches
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span>Customizable recipients</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span>Flexible scheduling</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-700">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span>Delivery confirmations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesInfo;
