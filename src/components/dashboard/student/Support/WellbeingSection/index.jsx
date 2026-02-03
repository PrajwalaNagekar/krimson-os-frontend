import React, { useState, useRef, useEffect } from "react";
import { User, Clock } from "lucide-react";
import WellnessArticleCard from "./WellnessArticleCard";
import CounselorAppointmentSection from "./CounselorAppointmentModal";
import { STUDENT_DATA } from "../../../../../data/studentData";

const WellbeingSection = ({ wellnessArticles }) => {
  const [showAppointmentSection, setShowAppointmentSection] = useState(false);
  const appointmentSectionRef = useRef(null);
  const { counselorAvailability } = STUDENT_DATA.supportData;

  // Auto-scroll to appointment section when it opens
  useEffect(() => {
    if (showAppointmentSection && appointmentSectionRef.current) {
      setTimeout(() => {
        appointmentSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Small delay to allow section to render
    }
  }, [showAppointmentSection]);

  return (
    <div className="animate-slideDown space-y-8">
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Your Mental Health Matters
            </h2>
            <p className="text-pink-100 text-lg mb-6 leading-relaxed">
              School can be stressful, but you don't have to go through it
              alone. Our counselors are here to listen, support, and guide you.
            </p>
            <button
              onClick={() => setShowAppointmentSection(!showAppointmentSection)}
              className={`px-8 py-3 rounded-xl font-bold shadow-lg transition-all transform active:scale-95 flex items-center gap-2 ${
                showAppointmentSection
                  ? "bg-white/20 border-2 border-white text-white"
                  : "bg-white text-pink-600 hover:bg-pink-50"
              }`}
            >
              <User size={20} />
              {showAppointmentSection
                ? "Hide Booking Form"
                : "Book Counselor Appointment"}
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock size={20} /> Counselor Availability
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="opacity-80">{counselorAvailability.days}</span>
                <span className="font-bold">{counselorAvailability.hours}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">
                  {counselorAvailability.walkInLabel}
                </span>
                <span className="font-bold">
                  {counselorAvailability.walkInHours}
                </span>
              </div>
              <div className="pt-2 border-t border-white/20 mt-2">
                <p className="text-xs opacity-75">
                  {counselorAvailability.counselorName} (
                  {counselorAvailability.location})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Appointment Booking Section */}
      {showAppointmentSection && (
        <div ref={appointmentSectionRef}>
          <CounselorAppointmentSection
            onClose={() => setShowAppointmentSection(false)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wellnessArticles.map((article, idx) => (
          <WellnessArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
};

export default WellbeingSection;
