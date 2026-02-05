import React, { useState } from "react";
import { Heart, Activity, Calendar } from "lucide-react";
import CheckInModal from "./CheckInModal";

/**
 * Emotional Check-in Component
 * Layout: LD — Content Studio
 * Data Control: Mixed
 * AI: AI3 Monitor
 * Purpose: Gentle wellbeing support.
 */
const EmotionalCheckIn = ({ emotionalCheckIns }) => {
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);

  if (!emotionalCheckIns) return null;

  return (
    <>
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2.5 rounded-xl">
              <Heart className="text-purple-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Emotional Check-in
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Gentle wellbeing support • Non-diagnostic
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
            <Activity size={14} className="text-slate-500" />
            <span className="text-xs font-bold text-slate-600">
              AI3 Monitor
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Check-in Action Card */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-purple-200">
            <div>
              <h3 className="font-bold text-lg mb-1">How are you feeling?</h3>
              <p className="text-purple-100 text-sm opacity-90">
                Take a moment to reflect on your day.
              </p>
            </div>
            <button
              onClick={() => setIsCheckInModalOpen(true)}
              className="mt-4 bg-white text-purple-600 font-bold py-2.5 px-4 rounded-xl text-sm hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
            >
              <Heart size={16} fill="currentColor" />
              Check-in Now
            </button>
          </div>

          {/* Recent Check-ins List */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              Recent Check-ins
            </h3>

            <div className="space-y-3">
              {emotionalCheckIns.slice(0, 2).map((checkIn) => (
                <div
                  key={checkIn.id}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-colors"
                >
                  <div className="text-2xl bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                    {checkIn.moodEmoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-700">
                        {checkIn.moodText}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        • {checkIn.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {checkIn.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 justify-center">
          <span>
            🔒 Responses are summarized for wellbeing support. Raw text is never
            shared with parents.
          </span>
        </div>
      </div>

      <CheckInModal
        isOpen={isCheckInModalOpen}
        onClose={() => setIsCheckInModalOpen(false)}
      />
    </>
  );
};

export default EmotionalCheckIn;
