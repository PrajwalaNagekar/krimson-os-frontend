import React, { useState } from "react";
import { ADMISSIONS_DATA } from "../../../data/registrarData";
import AdmissionsHeader from "../../../components/dashboard/registrar/AdmissionsView/AdmissionsHeader";
import AdmissionsStats from "../../../components/dashboard/registrar/AdmissionsView/AdmissionsStats";
import AdmissionsFunnel from "../../../components/dashboard/registrar/AdmissionsView/AdmissionsFunnel";
import AdmissionsFilters from "../../../components/dashboard/registrar/AdmissionsView/AdmissionsFilters";
import AdmissionsTable from "../../../components/dashboard/registrar/AdmissionsView/AdmissionsTable";

const AdmissionsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedNationality, setSelectedNationality] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter applicants based on search and filters
  const filteredApplicants = ADMISSIONS_DATA.applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade =
      selectedGrade === "all" || applicant.grade === selectedGrade;
    const matchesNationality =
      selectedNationality === "all" ||
      applicant.nationality === selectedNationality;
    const matchesStatus =
      selectedStatus === "all" || applicant.status === selectedStatus;

    return matchesSearch && matchesGrade && matchesNationality && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <AdmissionsHeader />

        <AdmissionsStats stats={ADMISSIONS_DATA.stats} />

        <AdmissionsFunnel funnel={ADMISSIONS_DATA.funnel} />

        {/* Search, Filter & Applicants Table */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <AdmissionsFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedNationality={selectedNationality}
            setSelectedNationality={setSelectedNationality}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            filteredCount={filteredApplicants.length}
            totalCount={ADMISSIONS_DATA.applicants.length}
          />

          <AdmissionsTable applicants={filteredApplicants} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsView;
