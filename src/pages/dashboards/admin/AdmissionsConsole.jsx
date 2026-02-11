/**
 * @component AdmissionsConsole
 * @description Screen 2: Admissions Management Console - Digitize and monitor entire admissions workflow
 * @features Lead capture, status tracker (Applied→Verified→Enrolled), document verification, auto-ID, enrollment confirmation
 */
import React, { useState, useMemo } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import AdmissionsHeader from "../../../components/dashboard/admin/AdmissionsConsole/AdmissionsHeader";
import AdmissionStats from "../../../components/dashboard/admin/AdmissionsConsole/AdmissionStats";
import AdmissionTabs from "../../../components/dashboard/admin/AdmissionsConsole/AdmissionTabs";
import AdmissionToolbar from "../../../components/dashboard/admin/AdmissionsConsole/AdmissionToolbar";
import ApplicationsTable from "../../../components/dashboard/admin/AdmissionsConsole/ApplicationsTable";
import AdmissionPagination from "../../../components/dashboard/admin/AdmissionsConsole/AdmissionPagination";
import ApplicationModal from "../../../components/dashboard/admin/AdmissionsConsole/ApplicationModal";

const AdmissionsConsole = () => {
  const { admissions } = ADMIN_DATA;
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all"); // all, applied, verified, enrolled
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Compute statistics
  const stats = useMemo(() => {
    const applied = admissions.filter((a) => a.stage === "Applied").length;
    const verified = admissions.filter((a) => a.stage === "Verified").length;
    const enrolled = admissions.filter((a) => a.stage === "Enrolled").length;
    const webFormLeads = admissions.filter(
      (a) => a.leadSource === "Web Form",
    ).length;
    const referralLeads = admissions.filter(
      (a) => a.leadSource === "Referral",
    ).length;
    const walkInLeads = admissions.filter(
      (a) => a.leadSource === "Walk-in",
    ).length;
    const documentsVerified = admissions.filter((a) => {
      const docs = a.documents;
      return Object.values(docs).every((doc) => doc.verified);
    }).length;
    const conversionRate =
      admissions.length > 0
        ? Math.round((enrolled / admissions.length) * 100)
        : 0;

    return {
      total: admissions.length,
      applied,
      verified,
      enrolled,
      webFormLeads,
      referralLeads,
      walkInLeads,
      documentsVerified,
      conversionRate,
    };
  }, [admissions]);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filters, setFilters] = useState({
    grade: "all",
    leadSource: "all",
  });

  // Unique values for filters
  const grades = useMemo(
    () => [...new Set(admissions.map((a) => a.grade))].sort((a, b) => a - b),
    [admissions],
  );
  const sources = useMemo(
    () => [...new Set(admissions.map((a) => a.leadSource))],
    [admissions],
  );

  // Filter applications
  const filteredApplications = useMemo(() => {
    let result = admissions;

    // Status Filter
    if (filterStatus !== "all") {
      result = result.filter(
        (a) => a.stage.toLowerCase() === filterStatus.toLowerCase(),
      );
    }

    // Dropdown Filters
    if (filters.grade !== "all") {
      result = result.filter(
        (a) => a.grade.toString() === filters.grade.toString(),
      );
    }
    if (filters.leadSource !== "all") {
      result = result.filter((a) => a.leadSource === filters.leadSource);
    }

    return result;
  }, [admissions, filterStatus, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredApplications.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredApplications, currentPage]);

  useMemo(() => {
    setCurrentPage(1);
  }, [filterStatus, filters]);

  const resetFilters = () => {
    setFilters({ grade: "all", leadSource: "all" });
    setFilterStatus("all");
    setShowFilterMenu(false);
  };

  return (
    <div
      className="space-y-8 animate-fadeIn pb-10"
      onClick={() => setShowFilterMenu(false)}
    >
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <AdmissionsHeader />

      {/* ========================================
          STATISTICS CARDS
          ======================================== */}
      <AdmissionStats stats={stats} />

      {/* ========================================
          STATUS FILTER TABS
          ======================================== */}
      <AdmissionTabs
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        stats={stats}
      />

      {/* ========================================
          SEARCH & ACTIONS BAR
          ======================================== */}
      <AdmissionToolbar
        filters={filters}
        setFilters={setFilters}
        showFilterMenu={showFilterMenu}
        setShowFilterMenu={setShowFilterMenu}
        resetFilters={resetFilters}
        grades={grades}
        sources={sources}
      />

      {/* ========================================
          APPLICATIONS TABLE
          ======================================== */}
      <ApplicationsTable
        applications={paginatedApplications}
        setSelectedApplication={setSelectedApplication}
      />

      {/* ========================================
          PAGINATION CONTROLS
          ======================================== */}
      <AdmissionPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalItems={filteredApplications.length}
        itemsPerPage={itemsPerPage}
      />

      {/* ========================================
          APPLICATION DETAILS MODAL
          ======================================== */}
      <ApplicationModal
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
};

export default AdmissionsConsole;
