/**
 * @component StepProgressBar
 * @description Visual step indicator for the Academic Year creation wizard.
 */
import React from "react";
import { Check } from "lucide-react";

const WIZARD_STEPS = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Term Structure" },
  { id: 3, label: "Week Breakup" },
  { id: 4, label: "Assessment Windows" },
  { id: 5, label: "Holidays" },
  { id: 6, label: "Review" },
];

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {WIZARD_STEPS.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;
        return (
          <React.Fragment key={step.id}>
            {/* Step bubble */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                  isCompleted
                    ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
                    : isActive
                      ? "bg-white border-2 border-blue-500 text-blue-600 scale-110 shadow-lg shadow-blue-200"
                      : "bg-white border-2 border-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : step.id}
              </div>
              <span
                className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : isCompleted
                      ? "text-cyan-600"
                      : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < WIZARD_STEPS.length - 1 && (
              <div className="flex-1 mx-2 mb-5">
                <div
                  className={`h-0.5 rounded transition-all duration-500 ${
                    isCompleted
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                      : "bg-gray-200"
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepProgressBar;
