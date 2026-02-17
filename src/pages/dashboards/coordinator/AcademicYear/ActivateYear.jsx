/**
 * @component ActivateYear
 * @description Confirmation screen for activating an academic year
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { ACADEMIC_YEAR_DATA } from "../../../../data/coordinatorData";

const ActivateYear = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isActivating, setIsActivating] = useState(false);

  const handleActivate = async () => {
    setIsActivating(true);
    // TODO: API integration
    setTimeout(() => {
      setIsActivating(false);
      setShowConfirmation(true);
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
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
              <CheckCircle size={32} />
              <h1 className="text-4xl font-bold">Activate Academic Year</h1>
            </div>
            <p className="text-white/90 max-w-2xl">
              Enable teaching operations for{" "}
              {ACADEMIC_YEAR_DATA.activeYear.name}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {!showConfirmation ? (
              <>
                {/* Academic Year Details */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 mb-4 animate-bounce">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Academic Year {ACADEMIC_YEAR_DATA.activeYear.name}
                  </h2>
                  <p className="text-gray-600">
                    {ACADEMIC_YEAR_DATA.activeYear.startDate} to{" "}
                    {ACADEMIC_YEAR_DATA.activeYear.endDate}
                  </p>
                </div>

                {/* Activation Info */}
                <div className="bg-gradient-to-r from-green-50 to-cyan-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
                  <div className="flex gap-3">
                    <AlertCircle
                      className="text-green-600 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-bold text-gray-800 text-lg mb-3">
                        This will enable:
                      </p>
                      <ul className="space-y-3">
                        {ACADEMIC_YEAR_DATA.systemImpact.activation.map(
                          (feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 flex-shrink-0">
                                <CheckCircle size={14} className="text-white" />
                              </div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* System Impact Details */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Governance Flow
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Activation enables official teaching operations. Teachers
                    will be able to log lessons, mark attendance, enter
                    assessments, and capture portfolio evidence. This action is
                    based on the LMS governance flow and lesson log
                    requirements.
                  </p>
                </div>

                {/* Action Buttons */}
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
                    onClick={handleActivate}
                    disabled={isActivating}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isActivating ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Activating...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={20} />
                        Confirm Activation
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8 animate-fadeIn">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 mb-6 animate-bounce">
                  <CheckCircle size={48} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  Academic Year Activated!
                </h2>
                <p className="text-gray-600 mb-4">
                  Teaching operations are now enabled for{" "}
                  {ACADEMIC_YEAR_DATA.activeYear.name}
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

export default ActivateYear;
