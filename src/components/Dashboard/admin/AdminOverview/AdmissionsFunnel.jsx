import React from "react";
import { TrendingUp, CheckCircle } from "lucide-react";
import { ADMIN_DATA } from "../../../../data/adminData";

const AdmissionsFunnel = () => {
  const { admissions } = ADMIN_DATA.ADMIN_OVERVIEW_DATA;
  // Calculate admission funnel percentages
  const totalInquiries = admissions.inquiry;
  const calculatePercentage = (value) =>
    Math.round((value / totalInquiries) * 100);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Admissions Pipeline
          </h2>
          <p className="text-sm text-slate-500">Funnel conversion overview</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-bold border border-green-100">
          <TrendingUp size={16} />
          {Math.round((admissions.enrolled / admissions.inquiry) * 100)}% Conv.
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            label: "Inquiry",
            value: admissions.inquiry,
            color: "bg-blue-500",
            bg: "bg-blue-50",
            text: "text-blue-600",
            icon: "1",
          },
          {
            label: "Applied",
            value: admissions.applied,
            color: "bg-cyan-500",
            bg: "bg-cyan-50",
            text: "text-cyan-600",
            icon: "2",
          },
          {
            label: "Verified",
            value: admissions.verified,
            color: "bg-purple-500",
            bg: "bg-purple-50",
            text: "text-purple-600",
            icon: "3",
          },
          {
            label: "Enrolled",
            value: admissions.enrolled,
            color: "bg-green-500",
            bg: "bg-green-50",
            text: "text-green-600",
            icon: <CheckCircle size={14} />,
          },
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-bold text-slate-700 flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${step.bg} ${step.text}`}
                >
                  {step.icon}
                </div>
                {step.label}
              </span>
              <span className={`font-bold ${step.text}`}>{step.value}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-full rounded-full ${step.color} transition-all duration-1000 ease-out`}
                style={{ width: `${calculatePercentage(step.value)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionsFunnel;
