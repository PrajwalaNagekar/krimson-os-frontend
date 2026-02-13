import React, { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";

const CountdownTimer = ({ nextExam }) => {
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    if (!nextExam) return;

    const calculateCountdown = () => {
      const examDateTime = new Date(nextExam.date + " " + nextExam.time);
      const now = new Date();
      const difference = examDateTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );

        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [nextExam]);

  return (
    <div className="relative bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 text-white shadow-2xl overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Clock size={20} />
          Next Exam Countdown
        </h3>

        {/* Countdown Display */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-3xl font-extrabold">
                {countdown.days || 0}
              </div>
              <div className="text-xs opacity-80 uppercase tracking-wider mt-1">
                Days
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">
                {countdown.hours || 0}
              </div>
              <div className="text-xs opacity-80 uppercase tracking-wider mt-1">
                Hours
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">
                {countdown.minutes || 0}
              </div>
              <div className="text-xs opacity-80 uppercase tracking-wider mt-1">
                Mins
              </div>
            </div>
          </div>
        </div>

        {/* Next Exam Details */}
        {nextExam && (
          <div className="bg-white/25 backdrop-blur-sm p-4 rounded-xl">
            <p className="font-bold text-lg mb-1">{nextExam.subject}</p>
            <p className="text-sm opacity-90 mb-2">{nextExam.topic}</p>
            <div className="flex items-center gap-2 text-xs opacity-80">
              <Calendar size={14} />
              <span>
                {new Date(nextExam.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-2 text-xs opacity-80">
                <Clock size={14} />
                <span>
                  {nextExam.time} • {nextExam.duration}
                </span>
              </div>
              <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full opacity-80">
                get in app
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
