/**
 * @component AuditTrail
 * @description Audit Trail & Activity Log - Complete system activity tracking
 */
import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import AuditHeader from "../../../components/dashboard/admin/AuditTrail/AuditHeader";
import AuditStats from "../../../components/dashboard/admin/AuditTrail/AuditStats";
import AuditWeeklySummary from "../../../components/dashboard/admin/AuditTrail/AuditWeeklySummary";
import AuditFilters from "../../../components/dashboard/admin/AuditTrail/AuditFilters";
import AuditLogTable from "../../../components/dashboard/admin/AuditTrail/AuditLogTable";

const AuditTrail = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const [searchQuery, setSearchQuery] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { activityLogs, weeklySummary, departments, users } =
    ADMIN_DATA.auditTrail;

  const filteredLogs = activityLogs.filter((log) => {
    const matchesFilter =
      selectedFilter === "all" || log.action === selectedFilter;
    const matchesUser = selectedUser === "all" || log.user === selectedUser;
    const matchesDepartment =
      selectedDepartment === "all" || log.department === selectedDepartment;
    const matchesSearch =
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesUser && matchesDepartment && matchesSearch;
  });

  // Pagination Logic
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, selectedUser, selectedDepartment, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <AuditHeader />

      <AuditStats weeklySummary={weeklySummary} />

      <AuditWeeklySummary weeklySummary={weeklySummary} />

      <AuditFilters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        departments={departments}
        users={users}
      />

      <AuditLogTable
        logs={currentItems}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        totalEvents={filteredLogs.length}
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default AuditTrail;
