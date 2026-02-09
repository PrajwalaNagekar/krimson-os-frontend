import React from "react";
import { UserCheck } from "lucide-react";

// Counselor Referral Card
const CounselorReferralCard = ({
  studentName,
  grade,
  issue,
  counselor,
  status,
  daysOpen,
}) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">
          Grade {grade} • {issue}
        </p>
      </div>
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
          status === "Resolved"
            ? "bg-green-100 text-green-700"
            : status === "In Progress"
              ? "bg-blue-100 text-blue-700"
              : "bg-orange-100 text-orange-700"
        }`}
      >
        {status}
      </span>
    </div>
    <p className="text-sm text-slate-700 mb-2">
      <span className="font-semibold">Counselor:</span> {counselor}
    </p>
    <p className="text-xs text-slate-500">
      {status === "Resolved" ? "Resolved" : `${daysOpen} days open`}
    </p>
  </div>
);

const CounselorReferrals = ({ referrals }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
          <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
          <span className="text-sm sm:text-base">Counselor Referrals</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          75% resolution rate this term
        </p>
      </div>

      <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
        {referrals.map((referral, idx) => (
          <CounselorReferralCard key={idx} {...referral} />
        ))}
      </div>
    </div>
  );
};

export default CounselorReferrals;
