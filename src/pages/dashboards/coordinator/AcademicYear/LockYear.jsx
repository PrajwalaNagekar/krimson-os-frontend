/**
 * @component LockYear
 * @description Warning screen for locking an academic year
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lock,
  AlertTriangle,
  Loader2,
  FileText,
} from "lucide-react";
import { ACADEMIC_YEAR_DATA } from "../../../../data/coordinatorData";

const LockYear = () => {
  const navigate = useNavigate();
  const [justification, setJustification] = useState("");
  const [showFinalConfirm, setShowFinalConfirm] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInitialConfirm = () => {
    if (justification.trim().length < 10) {
      alert("Please provide a detailed justification (minimum 10 characters)");
      return;
    }
    setShowFinalConfirm(true);
  };

  const handleFinalLock = async () => {
    setIsLocking(true);
    // TODO: API integration
    setTimeout(() => {
      setIsLocking(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/dashboard/coordinator/academic-year");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="min-h-screen pb-10 animate-fadeIn">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-500" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 p-8 text-white">
            <button
              onClick={() => navigate("/dashboard/coordinator/academic-year")}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-medium">Back to Academic Year</span>
            </button>
            <div className="flex items-center gap-3 mb-2">
              <Lock size={32} />
              <h1 className="text-4xl font-bold">Lock Academic Year</h1>
            </div>
            <p className="text-white/90 max-w-2xl">
              Freeze all academic data for {ACADEMIC_YEAR_DATA.activeYear.name}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {!showSuccess ? (
              <>
                {/* Academic Year Details */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mb-4 animate-pulse">
                    <AlertTriangle size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Academic Year {ACADEMIC_YEAR_DATA.activeYear.name}
                  </h2>
                  <p className="text-gray-600">
                    {ACADEMIC_YEAR_DATA.activeYear.startDate} to{" "}
                    {ACADEMIC_YEAR_DATA.activeYear.endDate}
                  </p>
                </div>

                {/* Warning Message */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                  <div className="flex gap-3">
                    <AlertTriangle
                      className="text-red-600 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-gray-800 text-lg mb-3">
                        ⚠️ Warning: Locking will:
                      </p>
                      <ul className="space-y-3">
                        {ACADEMIC_YEAR_DATA.systemImpact.locking.map(
                          (impact, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 flex-shrink-0">
                                <Lock size={14} className="text-white" />
                              </div>
                              <span className="font-medium">{impact}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Post-Lock Requirements */}
                <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Post-Lock Edit Requirements
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    After locking, any edits will require:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-600">•</span> Written
                      justification
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-600">•</span> HOD / Principal
                      approval
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-600">•</span> Audit trail
                      documentation
                    </li>
                  </ul>
                </div>

                {/* Justification Field */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Justification for Locking{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-4 text-gray-400"
                      size={20}
                    />
                    <textarea
                      rows="5"
                      value={justification}
                      onChange={(e) => setJustification(e.target.value)}
                      placeholder="Provide a detailed justification for locking this academic year. This will be recorded in the audit trail..."
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all outline-none resize-none"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Minimum 10 characters required
                  </p>
                </div>

                {/* Action Buttons */}
                {!showFinalConfirm ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() =>
                        navigate("/dashboard/coordinator/academic-year")
                      }
                      className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleInitialConfirm}
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <Lock size={20} />
                      Proceed to Lock
                    </button>
                  </div>
                ) : (
                  /* Final Confirmation */
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 animate-fadeIn">
                    <h3 className="font-bold text-red-800 mb-3 text-center text-lg">
                      Final Confirmation Required
                    </h3>
                    <p className="text-sm text-red-700 text-center mb-6">
                      This action is irreversible. Are you absolutely sure you
                      want to lock this academic year?
                    </p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowFinalConfirm(false)}
                        className="flex-1 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all"
                      >
                        Go Back
                      </button>
                      <button
                        onClick={handleFinalLock}
                        disabled={isLocking}
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLocking ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Locking...
                          </>
                        ) : (
                          <>
                            <Lock size={20} />
                            Confirm Lock
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Governance Reference */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Based on: Data Locking & Submission Policy | Term-End
                    Academic Closure Flow
                  </p>
                </div>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8 animate-fadeIn">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-6">
                  <Lock size={48} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Academic Year Locked
                </h2>
                <p className="text-gray-600 mb-4">
                  {ACADEMIC_YEAR_DATA.activeYear.name} is now read-only
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Loader2 size={16} className="animate-spin" />
                  Redirecting to dashboard...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockYear;
