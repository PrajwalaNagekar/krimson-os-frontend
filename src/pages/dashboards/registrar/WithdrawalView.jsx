import React, { useState } from "react";
import { WITHDRAWAL_DATA } from "../../../data/registrarData";
import WithdrawalHeader from "../../../components/dashboard/registrar/WithdrawalView/WithdrawalHeader";
import WithdrawalKPICards from "../../../components/dashboard/registrar/WithdrawalView/WithdrawalKPICards";
import WithdrawalModeToggle from "../../../components/dashboard/registrar/WithdrawalView/WithdrawalModeToggle";
import WithdrawalSearchFilter from "../../../components/dashboard/registrar/WithdrawalView/WithdrawalSearchFilter";
import WithdrawalRequestList from "../../../components/dashboard/registrar/WithdrawalView/WithdrawalRequestList";

const WithdrawalView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [viewMode, setViewMode] = useState("active"); // 'active' or 'archived'

  // Filter requests based on search, status, and view mode
  const filteredRequests = WITHDRAWAL_DATA.withdrawalRequests.filter((req) => {
    const matchesSearch =
      req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || req.status === selectedStatus;
    const matchesViewMode =
      viewMode === "active" ? !req.archived : req.archived;

    return matchesSearch && matchesStatus && matchesViewMode;
  });

  const totalActiveRequests = WITHDRAWAL_DATA.withdrawalRequests.filter(
    (r) => !r.archived,
  ).length;
  const currentViewTotal = WITHDRAWAL_DATA.withdrawalRequests.filter((r) =>
    viewMode === "active" ? !r.archived : r.archived,
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/20 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <WithdrawalHeader activeExitsCount={totalActiveRequests} />

        <WithdrawalKPICards stats={WITHDRAWAL_DATA.stats} />

        <WithdrawalModeToggle viewMode={viewMode} setViewMode={setViewMode} />

        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <WithdrawalSearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            viewMode={viewMode}
            filteredCount={filteredRequests.length}
            totalCount={currentViewTotal}
          />

          <WithdrawalRequestList
            filteredRequests={filteredRequests}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        </div>
      </div>
    </div>
  );
};

export default WithdrawalView;
