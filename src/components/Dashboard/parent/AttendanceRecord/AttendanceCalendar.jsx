import React from "react";
import UnifiedCalendar from "../../../common/UnifiedCalendar";

const AttendanceCalendar = ({ calendarData }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-[#2ECC71] hover:bg-[#27AE60] text-white";
      case "absent":
        return "bg-[#E74C3C] hover:bg-[#C0392B] text-white";
      case "absentWithReason":
        return "bg-[#F39C12] hover:bg-[#D35400] text-white";
      case "holiday":
        return "bg-[#3498DB] hover:bg-[#2980B9] text-white";
      case "weekend":
        return "bg-[#B0BEC5] hover:bg-[#90A4AE] text-white";
      default:
        return "bg-transparent";
    }
  };

  const getCellProps = (day, month, year) => {
    // 1. Determine if it's a weekend dynamically
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 = Sun, 6 = Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // 2. Find data in mock array
    const dayData = calendarData.find((d) => d.day === day);

    // 3. Determine Final Status
    let status = null;

    if (isWeekend) {
      status = "weekend";
    } else if (dayData && dayData.status) {
      status = dayData.status;
    } else if (dayData && !dayData.status) {
      status = "present";
    } else {
      status = "present";
    }

    // 4. Return Props
    return {
      className: getStatusColor(status),
      title: `${day} - ${status}`,
    };
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl border border-white/60 overflow-hidden">
      <UnifiedCalendar
        events={[]}
        hideSidebar={true}
        getCellProps={getCellProps}
        className="p-0"
      />
      {/* Legend */}
      <div className="px-6 pb-6 pt-0 flex flex-wrap items-center gap-3 md:gap-4 text-xs font-medium">
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#2ECC71]"></div>
          Present
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#E74C3C]"></div>
          Absent
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#F39C12]"></div>
          Absent (Leave)
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#3498DB]"></div>
          Holiday
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#B0BEC5]"></div>
          Weekend
        </span>
      </div>
    </div>
  );
};

export default AttendanceCalendar;
