/**
 * @page EditAcademicYear
 * @description Pre-fills the wizard with existing year data for editing.
 * Step 1: Basic Info → Step 2: Term Structure → Step 3: Week Breakup
 * → Step 4: Assessment Windows → Step 5: Holidays → Step 6: Review & Save
 */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import StepProgressBar from "../../../../components/dashboard/coordinator/AcademicYear/StepProgressBar";
import BasicInfoStep from "../../../../components/dashboard/coordinator/AcademicYear/BasicInfoStep";
import TermStructureStep from "../../../../components/dashboard/coordinator/AcademicYear/TermStructureStep";
import InstructionalWeeksStep from "../../../../components/dashboard/coordinator/AcademicYear/InstructionalWeeksStep";
import AssessmentWindowsStep from "../../../../components/dashboard/coordinator/AcademicYear/AssessmentWindowsStep";
import HolidaysStep from "../../../../components/dashboard/coordinator/AcademicYear/HolidaysStep";
import ReviewStep from "../../../../components/dashboard/coordinator/AcademicYear/ReviewStep";
import { ACADEMIC_YEARS_LIST } from "../../../../data/coordinatorData";

const makeAssessmentEntry = () => ({
  diagnostic: [],
  formative: [],
  summative: [],
  project: [],
});

const EditAcademicYear = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: Replace with API call — const { data: year } = useGetAcademicYearQuery(id);
  const year = ACADEMIC_YEARS_LIST.find((y) => y.id === id);

  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Basic Info — no description field
  const [basicInfo, setBasicInfo] = useState({
    name: year?.name || "",
    startDate: year?.startDate || "",
    endDate: year?.endDate || "",
  });

  // Step 2: Terms — pre-filled from existing data
  const [terms, setTerms] = useState(year?.terms || []);

  // Step 4: Assessment data — one entry per term, pre-filled
  const [assessmentData, setAssessmentData] = useState(
    (year?.terms || []).map(
      (term) => term.assessmentWindows || makeAssessmentEntry(),
    ),
  );

  // Step 5: Holidays — pre-filled
  const [holidays, setHolidays] = useState(
    year?.holidays || { school: [], public: [], training: [], events: [] },
  );

  // Keep assessmentData in sync when terms added/removed
  const handleTermsChange = (newTerms) => {
    setTerms(newTerms);
    setAssessmentData((prev) =>
      newTerms.map((_, i) => prev[i] || makeAssessmentEntry()),
    );
  };

  // Basic info field updates + advance to step 2 on __next__
  const handleBasicInfoChange = (field, value) => {
    if (field === "__next__") {
      setCurrentStep(2);
      return;
    }
    setBasicInfo((prev) => ({ ...prev, [field]: value }));
  };

  const goToStep = (step) => setCurrentStep(step);
  const goNext = () => setCurrentStep((s) => s + 1);
  const goBack = () => setCurrentStep((s) => s - 1);

  const handleSave = (status) => {
    const payload = { id, basicInfo, terms, assessmentData, holidays, status };
    // TODO: Replace with API call — await updateAcademicYear(payload);
    console.log("[EditAcademicYear] Saving:", payload);
    navigate("/dashboard/coordinator/academic-year");
  };

  // Year not found guard
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

  const reviewFormData = { basicInfo, terms, assessmentData, holidays };
  const BACK_PATH = "/dashboard/coordinator/academic-year";

  return (
    <div className="w-full min-h-screen pb-12">
      {/* Header banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="relative z-10 p-8 text-white">
          <button
            onClick={() => navigate(BACK_PATH)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Back to Academic Years</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm mb-1">
            Edit — {year.name}
          </h1>
          <p className="text-white/80 text-sm font-medium">
            Update the configuration for this academic year.
          </p>
        </div>
      </div>

      {/* Progress bar — shown from step 2 onwards */}
      {currentStep > 1 && (
        <div className="bg-white rounded-2xl shadow-lg px-6 py-5 mb-6 border border-slate-100">
          <StepProgressBar currentStep={currentStep} />
        </div>
      )}

      {/* Step content card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100">
        {/* Step 1 — Basic Info */}
        {currentStep === 1 && (
          <BasicInfoStep
            data={basicInfo}
            onChange={handleBasicInfoChange}
            onCancel={() => navigate(BACK_PATH)}
          />
        )}

        {/* Step 2 — Term Structure */}
        {currentStep === 2 && (
          <TermStructureStep
            terms={terms}
            onChangeTerms={handleTermsChange}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {/* Step 3 — Week Breakup */}
        {currentStep === 3 && (
          <InstructionalWeeksStep
            terms={terms}
            onChangeTerms={setTerms}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {/* Step 4 — Assessment Windows */}
        {currentStep === 4 && (
          <AssessmentWindowsStep
            terms={terms}
            assessmentData={assessmentData}
            onChangeAssessment={setAssessmentData}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {/* Step 5 — Holidays */}
        {currentStep === 5 && (
          <HolidaysStep
            holidays={holidays}
            onChangeHolidays={setHolidays}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {/* Step 6 — Review & Save */}
        {currentStep === 6 && (
          <ReviewStep
            formData={reviewFormData}
            onEditStep={goToStep}
            onBack={goBack}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default EditAcademicYear;
