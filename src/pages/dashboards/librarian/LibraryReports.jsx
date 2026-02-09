import React, { useState } from "react";
import { LIBRARIAN_DATA } from "../../../data/librarianData";
import ReportsHeader from "../../../components/dashboard/librarian/LibraryReports/ReportsHeader";
import ReportsStats from "../../../components/dashboard/librarian/LibraryReports/ReportsStats";
import ReportsFilter from "../../../components/dashboard/librarian/LibraryReports/ReportsFilter";
import TopBorrowedBooks from "../../../components/dashboard/librarian/LibraryReports/TopBorrowedBooks";
import OverdueTrends from "../../../components/dashboard/librarian/LibraryReports/OverdueTrends";
import CategoryDistribution from "../../../components/dashboard/librarian/LibraryReports/CategoryDistribution";
import ReadingFrequency from "../../../components/dashboard/librarian/LibraryReports/ReadingFrequency";

/**
 * Screen 4: Library Reports & Analytics
 * Purpose: Generate usage and resource reports
 * Reports:
 * - Top Borrowed Books
 * - Overdue Trends
 * - Student Reading Frequency Index
 * Integration: Analytics Engine + Library Database
 */

const LibraryReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month"); // week, month, quarter, year
  const [selectedGrade, setSelectedGrade] = useState("all");
  const {
    stats,
    topBorrowedBooks,
    overdueTrends,
    categoryDistribution,
    readingFrequency,
  } = LIBRARIAN_DATA.reportsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <ReportsHeader />

        {/* Stats Overview */}
        <ReportsStats stats={stats} />

        {/* Period & Grade Filters */}
        <ReportsFilter
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          selectedGrade={selectedGrade}
          setSelectedGrade={setSelectedGrade}
        />

        {/* Top Borrowed Books */}
        <TopBorrowedBooks books={topBorrowedBooks} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Overdue Trends */}
          <OverdueTrends trends={overdueTrends} />

          {/* Category Distribution */}
          <CategoryDistribution distribution={categoryDistribution} />
        </div>

        {/* Student Reading Frequency Index */}
        <ReadingFrequency frequencyData={readingFrequency} />
      </div>
    </div>
  );
};

export default LibraryReports;
