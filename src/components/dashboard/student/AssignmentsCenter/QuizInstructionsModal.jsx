import React, { useState } from "react";
import {
  X,
  Shield,
  AlertTriangle,
  Eye,
  Monitor,
  CheckCircle,
} from "lucide-react";

const QuizInstructionsModal = ({ quiz, onStart, onCancel }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const securityRules = [
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Full Screen Mode Required",
      description:
        "Quiz will start in full-screen mode and must remain so throughout",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "No Tab Switching",
      description: "Switching tabs or windows will trigger a warning",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Two-Strike Policy",
      description: "First violation: Warning | Second violation: Auto-submit",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Auto-Save Enabled",
      description: "Your answers are automatically saved every 10 seconds",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                📋 Quiz Instructions
              </h2>
              <p className="text-white/90 text-sm font-medium">{quiz.title}</p>
              <p className="text-white/80 text-xs mt-1">
                {quiz.subject} • {quiz.chapter}
              </p>
            </div>
            <button
              onClick={onCancel}
              className="text-white/90 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quiz Info */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-600 font-bold mb-1">
                  Questions
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {quiz.totalQuestions}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 font-bold mb-1">
                  Duration
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.floor(quiz.duration / 60)} min
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 font-bold mb-1">
                  Attempts
                </p>
                <p className="text-2xl font-bold text-pink-600">
                  {quiz.attemptsAllowed - quiz.attemptsUsed}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 font-bold mb-1">Points</p>
                <p className="text-2xl font-bold text-indigo-600">100</p>
              </div>
            </div>
          </div>

          {/* Security Rules */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              Security & Anti-Cheating Measures
            </h3>
            <div className="space-y-3">
              {securityRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {rule.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 mb-1">
                      {rule.title}
                    </p>
                    <p className="text-sm text-slate-600">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-orange-800 mb-2">
                  Important Notes:
                </p>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>
                    • Exiting full screen will trigger a violation warning
                  </li>
                  <li>• Camera/microphone access is NOT required</li>
                  <li>• Timer countdown will be visible at all times</li>
                  <li>
                    • You can navigate between questions before submitting
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Terms Acceptance */}
          <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0 pt-1">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 rounded-md border-2 border-slate-400 bg-white peer-checked:bg-gradient-to-br peer-checked:from-indigo-500 peer-checked:to-purple-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                  {termsAccepted && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                  I understand and accept the quiz rules
                </p>
                <p className="text-sm text-slate-600">
                  I acknowledge that violations of the security rules will
                  result in warnings and possible auto-submission of my quiz.
                </p>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={onStart}
              disabled={!termsAccepted}
              className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                termsAccepted
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white hover:shadow-xl"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {termsAccepted ? "Start Quiz →" : "Accept Terms to Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructionsModal;
