import React from 'react';
import { XCircle } from 'lucide-react';

/**
 * AttendanceWarning Component
 * 
 * Layout: LF — Analytics
 * Data Control: Mixed
 * AI: AI3 Monitor
 * Purpose: Conditional warning banner for low attendance that triggers alerts
 */
const AttendanceWarning = ({ percentage, threshold = 90 }) => {
  // Only render if attendance is below threshold
  if (percentage >= threshold) {
    return null;
  }

  return (
    <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex gap-4">
      <div className="p-3 bg-orange-200 text-orange-700 rounded-full">
        <XCircle />
      </div>
      <div>
        <h4 className="font-bold text-orange-800 text-lg">
          Attendance Warning
        </h4>
        {/* AI3 Monitor: Low attendance alert trigger */}
        <p className="text-sm text-orange-700 mt-1">
          Your attendance is below {threshold}%. Please attend upcoming
          classes to avoid disciplinary action.
        </p>
      </div>
    </div>
  );
};

export default AttendanceWarning;
