import React, { useState } from "react";
import Header from "../../../components/dashboard/finance/FeeCollectionTracker/Header";
import StatsOverview from "../../../components/dashboard/finance/FeeCollectionTracker/StatsOverview";
import TermWiseCollectionChart from "../../../components/dashboard/finance/FeeCollectionTracker/TermWiseCollectionChart";
import Filters from "../../../components/dashboard/finance/FeeCollectionTracker/Filters";
import DefaultersList from "../../../components/dashboard/finance/FeeCollectionTracker/DefaultersList";
import { FINANCE_DATA } from "../../../data/financeData";

/**
 * Screen 4: Fee Collection & Defaulter Tracker
 * Purpose: Monitor fee collection trends and overdue accounts
 * Widgets:
 * - Term-wise collection bar chart
 * - Fee Due List (sortable by student, class, or amount)
 * - Automatic reminders to parents for pending dues
 * - "Follow-up Status" tracker (Sent/Replied/Paid)
 * Integration: Finance Module + Notification API + Parent App Sync
 * Output: Generates actionable defaulter reports for each class teacher and admin
 */

const FeeCollectionTracker = () => {
  const [sortBy, setSortBy] = useState("amount"); // student, class, amount
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { stats, termWiseCollection, defaulters } =
    FINANCE_DATA.feeCollectionTracker;

  // Filter defaulters
  const filteredDefaulters = defaulters.filter((defaulter) => {
    if (selectedGrade !== "all" && defaulter.grade !== selectedGrade)
      return false;
    if (selectedStatus !== "all" && defaulter.followUpStatus !== selectedStatus)
      return false;
    return true;
  });

  // Sort defaulters
  const sortedDefaulters = [...filteredDefaulters].sort((a, b) => {
    switch (sortBy) {
      case "student":
        return a.studentName.localeCompare(b.studentName);
      case "class":
        return a.grade.localeCompare(b.grade);
      case "amount":
        return b.totalDue - a.totalDue;
      default:
        return 0;
    }
  });

  // Calculate pagination data for current page
  const currentData = sortedDefaulters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Term-wise Collection Bar Chart */}
        <TermWiseCollectionChart termWiseCollection={termWiseCollection} />

        {/* Sort & Filter Options */}
        <Filters
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        {/* Fee Defaulters List */}
        <DefaultersList
          defaulters={currentData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          totalItems={sortedDefaulters.length}
        />
      </div>
    </div>
  );
};

export default FeeCollectionTracker;
