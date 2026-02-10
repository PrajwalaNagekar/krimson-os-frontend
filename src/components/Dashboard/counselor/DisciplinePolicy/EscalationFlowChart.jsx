import React from "react";
import {
  AlertCircle,
  FileWarning,
  ShieldAlert,
  Ban,
  ArrowRight,
} from "lucide-react";

const EscalationFlowChart = ({ flow }) => {
  const iconMap = {
    AlertCircle,
    FileWarning,
    ShieldAlert,
    BanIcon: Ban,
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Escalation Procedure
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Step-by-step discipline escalation workflow
        </p>
      </div>

      {/* Desktop View - Horizontal Flow */}
      <div className="hidden md:flex items-center justify-between gap-4">
        {flow.map((step, index) => {
          const IconComponent = iconMap[step.icon];
          return (
            <React.Fragment key={step.step}>
              <div className="flex-1">
                <div
                  className={`bg-gradient-to-br ${step.color} text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-sm text-white/90">{step.description}</p>
                </div>
              </div>
              {index < flow.length - 1 && (
                <div className="flex-shrink-0">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile View - Vertical Flow */}
      <div className="md:hidden space-y-4">
        {flow.map((step, index) => {
          const IconComponent = iconMap[step.icon];
          return (
            <React.Fragment key={step.step}>
              <div
                className={`bg-gradient-to-br ${step.color} text-white rounded-2xl p-5 shadow-md`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-bold">{step.title}</h3>
                </div>
                <p className="text-sm text-white/90">{step.description}</p>
              </div>
              {index < flow.length - 1 && (
                <div className="flex justify-center">
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default EscalationFlowChart;
