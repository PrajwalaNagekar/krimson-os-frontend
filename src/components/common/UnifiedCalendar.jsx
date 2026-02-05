import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Plus,
  Sparkles,
} from "lucide-react";

const UnifiedCalendar = ({
  events = [],
  role,
  onCreateEvent,
  getCellProps,
  hideSidebar = false,
  className = "",
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

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

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const handleDateClick = (day) => setSelectedDate(new Date(year, month, day));

  const isAdminOrPrincipal = role === "admin" || role === "principal";

  return (
    <div
      className={`p-4 lg:p-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 min-h-screen ${className}`}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Calendar Section */}
        <div className="flex-[3] bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_60px_rgba(0,150,200,0.15)] border border-white/60 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

          {/* Premium Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-cyan-200">
                  Academic Schedule
                </span>
              </div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                {monthNames[month]}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent opacity-60">
                  {year}
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-cyan-100/50 shadow-lg shadow-cyan-100/50">
              <div className="flex items-center gap-1">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white rounded-xl transition-all text-slate-400 shadow-sm"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white rounded-xl transition-all text-slate-400 shadow-sm"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {isAdminOrPrincipal && (
                <button
                  onClick={onCreateEvent}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-300/50 transition-all active:scale-95"
                >
                  <Plus size={18} /> New Event
                </button>
              )}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-4 mb-4 relative z-10">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div
                key={d}
                className="text-[11px] font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-[0.2em] text-center pb-4"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-3 md:gap-5 relative z-10">
            {[...Array(startDay)].map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square opacity-0"></div>
            ))}

            {[...Array(totalDays)].map((_, i) => {
              const day = i + 1;
              const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();
              const isSelected =
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month;

              const dayEvents = events?.filter((e) => {
                const d = new Date(e.date);
                return d.getDate() === day && d.getMonth() === month;
              });

              // Get event type colors
              const getEventColor = (eventType) => {
                switch (eventType?.toLowerCase()) {
                  case "exam":
                    return "bg-gradient-to-r from-pink-500 to-rose-500";
                  case "assignment":
                    return "bg-gradient-to-r from-orange-500 to-amber-500";
                  case "class":
                    return "bg-gradient-to-r from-blue-500 to-cyan-500";
                  case "event":
                    return "bg-gradient-to-r from-green-500 to-emerald-500";
                  default:
                    return "bg-gradient-to-r from-purple-500 to-indigo-500";
                }
              };

              // Get custom props from parent
              const cellProps = getCellProps
                ? getCellProps(day, month, year)
                : {};
              const { className: customClass = "", ...otherCustomProps } =
                cellProps;

              const hasCustomBg = customClass.includes("bg-");

              return (
                <div
                  key={day}
                  onClick={() => handleDateClick(day)}
                  {...otherCustomProps}
                  className={`
                    group relative aspect-[4/5] md:aspect-square p-3 rounded-[1.5rem] transition-all duration-500 cursor-pointer border
                    ${
                      hasCustomBg
                        ? `${customClass} border-transparent shadow-sm hover:transform hover:-translate-y-1 ${isToday ? "ring-4 ring-cyan-400/50 scale-105 z-10 shadow-xl" : ""}`
                        : isToday
                          ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 shadow-2xl shadow-cyan-300/50 border-cyan-400 scale-105 z-10"
                          : "bg-white/60 backdrop-blur-sm border-cyan-100/50 hover:border-blue-300/50 hover:shadow-[0_20px_40px_rgba(0,150,200,0.15)] hover:-translate-y-1 hover:bg-white/80"
                    }
                    ${isSelected && !isToday && !hasCustomBg ? "ring-2 ring-pink-500 ring-offset-2 bg-gradient-to-br from-cyan-50 to-pink-50" : ""}
                    ${!hasCustomBg ? customClass : ""} 
                  `}
                >
                  <span
                    className={`text-lg font-black ${isToday ? "text-white drop-shadow-md" : hasCustomBg ? "text-white" : "text-slate-700"}`}
                  >
                    {day}
                  </span>

                  {/* Event Indicators */}
                  <div className="mt-2 flex flex-col gap-1">
                    {dayEvents?.slice(0, 2).map((evt, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-full rounded-full shadow-sm ${isToday ? "bg-white/50 backdrop-blur-sm" : getEventColor(evt.type)}`}
                      />
                    ))}
                    {dayEvents?.length > 2 && (
                      <span
                        className={`text-[8px] font-bold ${isToday ? "text-white/80" : "text-blue-600"}`}
                      >
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Premium Hover Detail */}
                  {!isToday && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/0 via-blue-100/0 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium Sidebar */}
        {!hideSidebar && (
          <div className="w-full lg:w-[400px] flex flex-col gap-8">
            {/* Glass Card with Gradient */}
            <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-cyan-300/30">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>

              <Sparkles
                className="text-white drop-shadow-lg relative z-10 mb-4"
                size={28}
              />
              <h4 className="text-xl font-bold mb-2 relative z-10 drop-shadow-md">
                Month Insight
              </h4>
              <p className="text-white/90 text-sm leading-relaxed mb-6 relative z-10">
                You have{" "}
                <span className="text-white font-bold drop-shadow-md">
                  {events.length} events
                </span>{" "}
                scheduled for this month. Stay ahead of your tasks!
              </p>
              <div className="p-4 bg-white/20 rounded-2xl border border-white/30 backdrop-blur-md relative z-10 shadow-lg">
                <div className="flex justify-between items-center mb-2 text-xs font-black tracking-widest text-white/90">
                  <span>MONTHLY PROGRESS</span>
                  <span>62%</span>
                </div>
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full shadow-lg"
                    style={{ width: "62%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Event List */}
            <div className="flex-1 bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-lg shadow-cyan-200/30 border border-cyan-100/50">
              <h3 className="text-xl font-black bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-6 flex items-center justify-between">
                Schedule
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-pink-100 flex items-center justify-center text-xs text-blue-600 font-black border border-cyan-200 shadow-sm">
                  {events.length}
                </span>
              </h3>

              <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {events.length > 0 ? (
                  events.map((evt, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-4 p-4 rounded-3xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all border border-transparent hover:border-cyan-200/50 hover:shadow-md"
                    >
                      <div className="flex flex-col items-center justify-center min-w-[56px] h-[56px] bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300 shadow-sm">
                        <span className="text-[10px] font-black uppercase opacity-70">
                          {new Date(evt.date).toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <span className="text-lg font-black leading-none">
                          {new Date(evt.date).getDate()}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="font-bold text-slate-800 text-sm group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
                          {evt.title}
                        </h5>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Clock size={12} /> {evt.time || "09:00 AM"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-10 text-center text-slate-400">
                    <CalendarIcon
                      className="mx-auto mb-3 opacity-20"
                      size={40}
                    />
                    <p className="text-sm font-medium">
                      No events for this month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default UnifiedCalendar;
