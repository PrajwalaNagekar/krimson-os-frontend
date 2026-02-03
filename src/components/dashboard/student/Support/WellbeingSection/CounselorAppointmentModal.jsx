import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

/**
 * CounselorAppointmentSection Component
 *
 * FUTURE BACKEND INTEGRATION READY:
 * - Props accept dynamic data from API
 * - Commented API call structure included
 * - AI recommendation system ready
 * - Configurable for all data sources
 *
 * @param {Function} onClose - Close handler
 * @param {Array} availableCounselors - List of counselors from backend (optional)
 * @param {Object} aiRecommendation - AI-powered scheduling recommendation (optional)
 * @param {Function} onSubmitAppointment - Custom submit handler for API calls (optional)
 */
const CounselorAppointmentSection = ({
  onClose,
  availableCounselors = null, // Will come from backend
  aiRecommendation = null, // AI-powered recommendations
  onSubmitAppointment = null, // Custom API submit handler
}) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    reason: "",
    urgency: "Normal",
    preferredCounselor: "Dr. Emily Stone",
    additionalNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ==================== BACKEND INTEGRATION POINTS ====================

  /**
   * FUTURE: Fetch available time slots when date is selected
   * Replace static slots with dynamic API call
   */
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  /**
   * FUTURE API CALL: Fetch available time slots for selected date
   * This will replace the static slots array
   */
  const fetchAvailableSlots = async (date) => {
    setLoading(true);

    // TODO: Uncomment when backend is ready
    /*
    try {
      const response = await fetch(`/api/counselor/available-slots`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: date.toISOString(),
          counselorId: appointmentDetails.preferredCounselor
        })
      });
      
      const data = await response.json();
      setAvailableSlots(data.slots); // Expected format: ['09:00 AM', '10:00 AM', ...]
    } catch (error) {
      console.error('Failed to fetch slots:', error);
      // Fallback to static slots
      setAvailableSlots(getStaticTimeSlots());
    } finally {
      setLoading(false);
    }
    */

    // TEMPORARY: Static slots (remove when backend is ready)
    setTimeout(() => {
      setAvailableSlots(getStaticTimeSlots());
      setLoading(false);
    }, 300);
  };

  /**
   * Static time slots (temporary - will be removed when backend is ready)
   */
  const getStaticTimeSlots = () => [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
  ];

  /**
   * FUTURE API CALL: Get counselor list from backend
   * Currently using static list
   */
  const counselorList = availableCounselors || [
    { id: 1, name: "Dr. Emily Stone", specialization: "Academic Counseling" },
    { id: 2, name: "Dr. Michael Chen", specialization: "Career Guidance" },
    { id: 3, name: "Dr. Sarah Johnson", specialization: "Mental Health" },
    { id: 4, name: "Any Available", specialization: "General" },
  ];

  /**
   * AI Recommendation Banner
   * Uses prop data if provided, otherwise shows default recommendation
   */
  const AIRecommendationBanner = () => {
    const recommendation = aiRecommendation || {
      message:
        "Based on your schedule, Tuesday or Wednesday mornings are optimal for focused conversations.",
      suggestedDays: ["Tuesday", "Wednesday"],
      suggestedTimes: ["09:00 AM", "10:00 AM"],
    };

    return (
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <Sparkles className="text-purple-600" size={20} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-purple-900 mb-1">AI Recommendation</h4>
          <p className="text-sm text-purple-700">{recommendation.message}</p>
        </div>
      </div>
    );
  };

  // ==================== CALENDAR GENERATION ====================

  const generateCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isPast =
        date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      // FUTURE: Check availability from backend
      // const isAvailable = checkDateAvailability(date);
      const isAvailable = !isPast && !isWeekend; // Temporary logic

      days.push({ day: i, date, isPast, isWeekend, isAvailable });
    }
    return days;
  };

  // ==================== FORM SUBMISSION ====================

  /**
   * FUTURE API CALL: Submit appointment to backend
   * Uses custom handler if provided, otherwise default API call
   */
  const handleSubmit = async () => {
    setLoading(true);

    const appointmentData = {
      date: selectedDate.toISOString(),
      time: selectedTime,
      counselor: appointmentDetails.preferredCounselor,
      reason: appointmentDetails.reason,
      urgency: appointmentDetails.urgency,
      notes: appointmentDetails.additionalNotes,
      studentId: "STUDENT_ID_FROM_AUTH", // TODO: Get from auth context
    };

    // Custom submit handler (if provided by parent component)
    if (onSubmitAppointment) {
      try {
        await onSubmitAppointment(appointmentData);
        setSubmitted(true);
        handlePostSubmit();
      } catch (error) {
        console.error("Appointment submission failed:", error);
        // TODO: Show error message to user
      } finally {
        setLoading(false);
      }
      return;
    }

    // TODO: Uncomment when backend is ready
    /*
    try {
      const response = await fetch('/api/counselor/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        handlePostSubmit();
      } else {
        throw new Error(data.message || 'Failed to book appointment');
      }
    } catch (error) {
      console.error('Appointment submission failed:', error);
      // TODO: Show error toast/notification
    } finally {
      setLoading(false);
    }
    */

    // TEMPORARY: Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      handlePostSubmit();
    }, 1000);
  };

  const handlePostSubmit = () => {
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
        setAppointmentDetails({
          reason: "",
          urgency: "Normal",
          preferredCounselor: "Dr. Emily Stone",
          additionalNotes: "",
        });
        setSubmitted(false);
      }, 500);
    }, 3000);
  };

  // ==================== RENDER ====================

  const calendarDays = generateCalendarDays();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white rounded-3xl shadow-xl border-2 border-pink-200 overflow-hidden animate-slideDown">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Calendar size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Book Counselor Appointment</h3>
            <p className="text-pink-100 text-sm">
              Complete mental health support
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-xl transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* Progress Steps */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[
            { num: 1, label: "Date & Time" },
            { num: 2, label: "Details" },
            { num: 3, label: "Confirm" },
          ].map((s, idx) => (
            <React.Fragment key={s.num}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s.num
                      ? "bg-pink-500 text-white shadow-lg shadow-pink-200"
                      : "bg-white text-slate-400 border-2 border-slate-200"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`text-xs font-semibold ${step >= s.num ? "text-pink-600" : "text-slate-400"}`}
                >
                  {s.label}
                </span>
              </div>
              {idx < 2 && (
                <div
                  className={`flex-1 h-1 rounded mx-2 transition-all ${
                    step > s.num ? "bg-pink-500" : "bg-slate-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {submitted ? (
          <div className="py-12 text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Appointment Requested!
            </h3>
            <p className="text-green-700 mb-1">
              Your counseling appointment has been submitted.
            </p>
            <p className="text-sm text-slate-500">
              You'll receive a confirmation email shortly.
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 inline-block">
              <p className="text-sm font-bold text-green-800">
                📅{" "}
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm font-bold text-green-800">
                ⏰ {selectedTime}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Step 1: Date & Time Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <AIRecommendationBanner />

                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800">
                      Select Date
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <ChevronLeft size={20} />
                      </button>
                      <span>
                        {currentMonth} {currentYear}
                      </span>
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-bold text-slate-500 py-2"
                        >
                          {day}
                        </div>
                      ),
                    )}
                    {calendarDays.map((dayObj, idx) => {
                      if (!dayObj) {
                        return <div key={`empty-${idx}`} />;
                      }
                      const isSelected = selectedDate?.getDate() === dayObj.day;
                      const isDisabled = !dayObj.isAvailable;

                      return (
                        <button
                          key={dayObj.day}
                          onClick={() =>
                            !isDisabled && setSelectedDate(dayObj.date)
                          }
                          disabled={isDisabled}
                          className={`aspect-square rounded-xl font-semibold transition-all ${
                            isSelected
                              ? "bg-pink-500 text-white shadow-lg shadow-pink-200"
                              : isDisabled
                                ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                                : "bg-white border-2 border-slate-200 hover:border-pink-300 text-slate-700"
                          }`}
                        >
                          {dayObj.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="animate-slideDown">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Clock size={20} className="text-pink-600" />
                      Available Time Slots
                      {loading && (
                        <span className="text-sm text-slate-500">
                          (Loading...)
                        </span>
                      )}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {availableSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                              isSelected
                                ? "bg-pink-500 text-white shadow-lg shadow-pink-200"
                                : "bg-slate-50 border-2 border-slate-200 hover:border-pink-300 text-slate-700"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Appointment Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Preferred Counselor
                  </label>
                  <select
                    value={appointmentDetails.preferredCounselor}
                    onChange={(e) =>
                      setAppointmentDetails({
                        ...appointmentDetails,
                        preferredCounselor: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-semibold text-slate-700"
                  >
                    {counselorList.map((counselor, idx) => (
                      <option key={idx} value={counselor.name}>
                        {counselor.name}{" "}
                        {counselor.specialization &&
                          `- ${counselor.specialization}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Reason for Appointment
                  </label>
                  <select
                    value={appointmentDetails.reason}
                    onChange={(e) =>
                      setAppointmentDetails({
                        ...appointmentDetails,
                        reason: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-semibold text-slate-700"
                  >
                    <option value="">Select a reason...</option>
                    <option>Academic Stress</option>
                    <option>Personal Issues</option>
                    <option>Exam Anxiety</option>
                    <option>Social Concerns</option>
                    <option>Career Guidance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Low", "Normal", "High"].map((level) => {
                      const isSelected = appointmentDetails.urgency === level;
                      return (
                        <button
                          key={level}
                          onClick={() =>
                            setAppointmentDetails({
                              ...appointmentDetails,
                              urgency: level,
                            })
                          }
                          className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                            isSelected
                              ? level === "High"
                                ? "bg-red-500 text-white shadow-lg"
                                : level === "Normal"
                                  ? "bg-yellow-500 text-white shadow-lg"
                                  : "bg-green-500 text-white shadow-lg"
                              : "bg-slate-50 border-2 border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {level}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    rows="4"
                    value={appointmentDetails.additionalNotes}
                    onChange={(e) =>
                      setAppointmentDetails({
                        ...appointmentDetails,
                        additionalNotes: e.target.value,
                      })
                    }
                    placeholder="Any specific topics or concerns you'd like to discuss..."
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-semibold text-slate-700 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                  <h3 className="text-lg font-bold text-pink-900 mb-4">
                    Review Your Appointment
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-pink-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Date
                        </p>
                        <p className="font-bold text-slate-800">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-pink-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Time
                        </p>
                        <p className="font-bold text-slate-800">
                          {selectedTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <User className="text-pink-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Counselor
                        </p>
                        <p className="font-bold text-slate-800">
                          {appointmentDetails.preferredCounselor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageSquare className="text-pink-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Reason
                        </p>
                        <p className="font-bold text-slate-800">
                          {appointmentDetails.reason || "Not specified"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`w-3 h-3 rounded-full mt-2 ${
                          appointmentDetails.urgency === "High"
                            ? "bg-red-500"
                            : appointmentDetails.urgency === "Normal"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          Urgency
                        </p>
                        <p className="font-bold text-slate-800">
                          {appointmentDetails.urgency}
                        </p>
                      </div>
                    </div>

                    {appointmentDetails.additionalNotes && (
                      <div className="pt-3 border-t border-pink-200">
                        <p className="text-sm font-semibold text-slate-600 mb-1">
                          Notes
                        </p>
                        <p className="text-sm text-slate-700">
                          {appointmentDetails.additionalNotes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <p className="text-sm text-blue-800">
                    <span className="font-bold">Note:</span> You will receive a
                    confirmation email and SMS once the counselor confirms your
                    appointment.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={loading}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all disabled:opacity-50"
                >
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!selectedDate || !selectedTime)) || loading
                  }
                  className={`ml-auto px-8 py-3 rounded-xl font-bold transition-all ${
                    (step === 1 && (!selectedDate || !selectedTime)) || loading
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-pink-500 text-white shadow-lg hover:bg-pink-600"
                  }`}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!appointmentDetails.reason || loading}
                  className={`ml-auto px-8 py-3 rounded-xl font-bold transition-all ${
                    !appointmentDetails.reason || loading
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-pink-500 text-white shadow-lg hover:bg-pink-600 transform active:scale-95"
                  }`}
                >
                  {loading ? "Submitting..." : "Confirm Appointment"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CounselorAppointmentSection;
