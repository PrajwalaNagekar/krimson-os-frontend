/**
 * @page ViewAcademicYear
 * @description Read-only review of a closed/archived academic year (Screen G, readOnly mode).
 */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Eye } from "lucide-react";

import ReviewStep from "../../../../components/dashboard/coordinator/AcademicYear/ReviewStep";
import { ACADEMIC_YEARS_LIST } from "../../../../data/coordinatorData";

const ViewAcademicYear = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: Replace with API call — const { data: year } = useGetAcademicYearQuery(id);
  const year = ACADEMIC_YEARS_LIST.find((y) => y.id === id);

  if (!year) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-slate-400">
        <p className="text-lg font-semibold">Academic year not found.</p>
        <button
          onClick={() => navigate("/dashboard/coordinator/academic-year")}
          className="mt-4 text-blue-600 underline text-sm"
        >
          Back to list
        </button>
      </div>
    );
  }

  const assessmentData = (year.terms || []).map(
    (t) =>
      t.assessmentWindows || {
        diagnostic: [],
        formative: [],
        summative: [],
        project: [],
      },
  );

  const reviewFormData = {
    basicInfo: {
      name: year.name,
      startDate: year.startDate,
      endDate: year.endDate,
      description: year.description,
    },
    terms: year.terms || [],
    assessmentData,
    holidays: year.holidays || { school: [], public: [], training: [] },
    status: year.status,
  };

  return (
    <div className="w-full min-h-screen pb-12 animate-fadeIn">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-600 to-blue-600" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10 p-8 text-white">
          <button
            onClick={() => navigate("/dashboard/coordinator/academic-year")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Back to Academic Years</span>
          </button>
          <div className="flex items-center gap-3 mb-1">
            <Eye size={28} />
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
              {year.name} — View Only
            </h1>
          </div>
          <p className="text-white/80 text-sm font-medium capitalize">
            Status: {year.status} · Read-only
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100">
        <ReviewStep
          formData={reviewFormData}
          onEditStep={() => {}}
          onBack={() => navigate("/dashboard/coordinator/academic-year")}
          onSave={() => {}}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default ViewAcademicYear;
