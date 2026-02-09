import React, { useState } from "react";
import { LIBRARIAN_DATA } from "../../../data/librarianData";
import LibraryHeader from "../../../components/dashboard/librarian/LibraryDashboard/LibraryHeader";
import LibraryStats from "../../../components/dashboard/librarian/LibraryDashboard/LibraryStats";
import PopularCategories from "../../../components/dashboard/librarian/LibraryDashboard/PopularCategories";
import CatalogManager from "../../../components/dashboard/librarian/LibraryDashboard/CatalogManager";

/**
 * Screen 1: Library Dashboard & Catalog Overview
 * Purpose: Manage books, digital resources, and inventory summaries
 * Features:
 * - Total Books | Issued | Reserved | Overdue
 * - Search by Title, Author, ISBN, or Category
 * - Add/Edit/Remove titles with stock updates
 * Integration: Library Database + Inventory API
 */

const LibraryDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { stats, catalog, categories } = LIBRARIAN_DATA.dashboardData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <LibraryHeader />

        {/* Stats Overview */}
        <LibraryStats stats={stats} />

        {/* Categories Overview */}
        <PopularCategories categories={categories} />

        {/* Search and Catalog Management */}
        <CatalogManager
          catalog={catalog}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default LibraryDashboard;
