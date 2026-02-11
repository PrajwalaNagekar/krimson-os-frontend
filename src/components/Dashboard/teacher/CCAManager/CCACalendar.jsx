import React from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

const CCACalendar = ({
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
  sessions,
  openCreateSession,
}) => {
  const getEventsForDay = (day) => {
    if (!day) return [];
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    const dateStr = `${year}-${month}-${dayStr}`;
    return sessions.filter((s) => s.date === dateStr);
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Previous month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: "", isCurrentMonth: false });
    }
    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    return days;
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            {monthNames[currentDate.getMonth()]}{" "}
            <span className="text-slate-300 font-normal">/</span>{" "}
            {currentDate.getFullYear()}
          </h3>
        </div>
        <div className="flex gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
          <button
            onClick={prevMonth}
            className="p-3 rounded-xl hover:bg-white text-slate-500 hover:text-indigo-600 transition-all hover:shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-6 py-2 rounded-xl bg-white text-indigo-600 text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-100"
          >
            Today
          </button>
          <button
            onClick={nextMonth}
            className="p-3 rounded-xl hover:bg-white text-slate-500 hover:text-indigo-600 transition-all hover:shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Big Grid Header */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {dayNames.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider py-2"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Big Grid Body */}
      <div className="grid grid-cols-7 gap-4 mb-8">
        {getDaysInMonth().map((dayObj, i) => {
          const dayEvents = dayObj.isCurrentMonth
            ? getEventsForDay(dayObj.day)
            : [];
          const today = isToday(dayObj.day);
          const isSelected = selectedDate === dayObj.day;

          return (
            <div
              key={i}
              onClick={() =>
                dayObj.isCurrentMonth && setSelectedDate(dayObj.day)
              }
              className={`min-h-[140px] rounded-[1.5rem] p-3 border transition-all cursor-pointer flex flex-col group relative ${
                !dayObj.isCurrentMonth
                  ? "bg-slate-50/30 border-transparent"
                  : today
                    ? "bg-indigo-50 border-indigo-200 shadow-md ring-2 ring-indigo-100"
                    : isSelected
                      ? "bg-white border-indigo-500 shadow-xl scale-105 z-10 ring-4 ring-indigo-50"
                      : "bg-white border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {dayObj.isCurrentMonth && (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-lg font-bold ${today ? "text-indigo-600" : isSelected ? "text-indigo-700" : "text-slate-400 group-hover:text-slate-600"}`}
                    >
                      {dayObj.day}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-[10px] font-bold">
                        {dayEvents.length}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 overflow-hidden">
                    {dayEvents.slice(0, 3).map((ev) => (
                      <div
                        key={ev.id}
                        className="w-full p-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-900 truncate flex items-center gap-1"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                        {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-[10px] font-bold text-slate-400 pl-1">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Session List - Always Visible */}
      <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <span className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
              <Calendar size={20} className="text-indigo-500" />
            </span>
            {selectedDate
              ? `Schedule for ${monthNames[currentDate.getMonth()]} ${selectedDate}`
              : "All Sessions"}
          </h3>
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3 py-1 bg-slate-100 rounded-lg transition-colors"
            >
              Clear Filter
            </button>
          )}
          <button
            onClick={() => {
              const year = currentDate.getFullYear();
              const month = String(currentDate.getMonth() + 1).padStart(2, "0");
              const day = selectedDate
                ? String(selectedDate).padStart(2, "0")
                : "";
              openCreateSession(selectedDate ? `${year}-${month}-${day}` : "");
            }}
            className="text-xs font-bold text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors bg-white border border-indigo-100 shadow-sm"
          >
            + Add Session
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(selectedDate
            ? getEventsForDay(selectedDate)
            : sessions.sort((a, b) => new Date(a.date) - new Date(b.date))
          ).length > 0 ? (
            (selectedDate ? getEventsForDay(selectedDate) : sessions).map(
              (session) => (
                <div
                  key={session.id}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col gap-3 group relative overflow-hidden"
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${session.status === "Completed" ? "bg-emerald-400" : "bg-indigo-400"}`}
                  ></div>
                  <div className="flex justify-between items-start pl-2">
                    <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">
                      {session.club}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-lg ${session.status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-indigo-50 text-indigo-500"}`}
                    >
                      {session.status === "Completed"
                        ? "Completed"
                        : session.time}
                    </span>
                  </div>
                  <div className="pl-2">
                    <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-700 transition-colors mb-1">
                      {session.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {session.formattedDate || session.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mt-auto pt-3 border-t border-slate-50 pl-2">
                    <MapPin size={12} /> {session.location}
                  </div>
                </div>
              ),
            )
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-400 font-medium mb-4">
                No sessions found.
              </p>
              <button
                onClick={() => openCreateSession()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg"
              >
                Create First Session
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CCACalendar;
