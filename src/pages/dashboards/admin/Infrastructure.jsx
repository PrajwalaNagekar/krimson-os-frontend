import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import InfrastructureHeader from "../../../components/dashboard/admin/Infrastructure/InfrastructureHeader";
import InfrastructureStats from "../../../components/dashboard/admin/Infrastructure/InfrastructureStats";
import InfrastructureAlerts from "../../../components/dashboard/admin/Infrastructure/InfrastructureAlerts";
import InventoryCategories from "../../../components/dashboard/admin/Infrastructure/InventoryCategories";
import InfrastructureToolbar from "../../../components/dashboard/admin/Infrastructure/InfrastructureToolbar";
import InventoryGrid from "../../../components/dashboard/admin/Infrastructure/InventoryGrid";
import InventoryList from "../../../components/dashboard/admin/Infrastructure/InventoryList";
import ResourceReservations from "../../../components/dashboard/admin/Infrastructure/ResourceReservations";
import MaintenanceLog from "../../../components/dashboard/admin/Infrastructure/MaintenanceLog";

const Infrastructure = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Get data from centralized source
  const categories = ADMIN_DATA.infrastructure?.categories || [];
  const inventoryItems = ADMIN_DATA.infrastructure?.inventoryItems || [];
  const reservations = ADMIN_DATA.infrastructure?.reservations || [];
  const maintenanceLog = ADMIN_DATA.infrastructure?.maintenanceLog || [];

  // Statistics
  const stats = {
    totalAssets: inventoryItems.reduce((sum, item) => sum + item.quantity, 0),
    totalValue: "₹7.58 Cr",
    lowStockItems: inventoryItems.filter((i) => i.quantity <= i.minQuantity)
      .length,
    maintenanceDue: maintenanceLog.filter(
      (m) => m.status === "Scheduled" || m.status === "Overdue",
    ).length,
    activeReservations: reservations.filter((r) => r.status === "Confirmed")
      .length,
    monthlyMaintenanceCost: "₹95,500",
  };

  // Alerts
  const alerts = [
    ...inventoryItems
      .filter((i) => i.quantity < i.minQuantity)
      .map((i) => ({
        type: "shortage",
        severity: i.quantity / i.minQuantity < 0.5 ? "critical" : "warning",
        message: `${i.name} is running low (${i.quantity}/${i.minQuantity})`,
        item: i.name,
      })),
    ...maintenanceLog
      .filter((m) => m.status === "Overdue")
      .map((m) => ({
        type: "maintenance",
        severity: "critical",
        message: `Overdue maintenance for ${m.item}`,
        item: m.item,
      })),
  ];

  const getCategoryColor = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category)
      return {
        bg: "bg-slate-50",
        text: "text-slate-700",
        border: "border-slate-200",
        icon: "bg-slate-100",
      };

    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        icon: "bg-blue-100",
        textColor: "text-blue-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        icon: "bg-purple-100",
        textColor: "text-purple-600",
      },
      cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-700",
        border: "border-cyan-200",
        icon: "bg-cyan-100",
        textColor: "text-cyan-600",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        icon: "bg-amber-100",
        textColor: "text-amber-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: "bg-green-100",
        textColor: "text-green-600",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        border: "border-pink-200",
        icon: "bg-pink-100",
        textColor: "text-pink-600",
      },
    };
    return colorMap[category.color] || colorMap.blue;
  };

  const getStatusColor = (status) => {
    const statusMap = {
      Available: "bg-green-100 text-green-700 border-green-200",
      "In Use": "bg-blue-100 text-blue-700 border-blue-200",
      "Low Stock": "bg-amber-100 text-amber-700 border-amber-200",
      "Critical - Low Stock": "bg-red-100 text-red-700 border-red-200",
      "Under Maintenance": "bg-purple-100 text-purple-700 border-purple-200",
      Confirmed: "bg-green-100 text-green-700 border-green-200",
      "Pending Approval": "bg-amber-100 text-amber-700 border-amber-200",
      Completed: "bg-green-100 text-green-700 border-green-200",
      Scheduled: "bg-blue-100 text-blue-700 border-blue-200",
      Overdue: "bg-red-100 text-red-700 border-red-200",
    };
    return statusMap[status] || "bg-slate-100 text-slate-700 border-slate-200";
  };

  const filteredInventory = inventoryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <InfrastructureHeader />

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <InfrastructureStats stats={stats} />

      {/* ========================================
          ALERTS SECTION
          ======================================== */}
      <InfrastructureAlerts alerts={alerts} />

      {/* ========================================
          INVENTORY CATEGORIES
          ======================================== */}
      <InventoryCategories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalItems={inventoryItems.length}
      />

      {/* ========================================
          TOOLBAR & SEARCH
          ======================================== */}
      <InfrastructureToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* ========================================
          INVENTORY TRACKER
          ======================================== */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Inventory Tracker
            </h2>
            <p className="text-sm text-slate-500">
              {filteredInventory.length} items displayed
            </p>
          </div>
        </div>

        {viewMode === "grid" ? (
          <InventoryGrid
            items={filteredInventory}
            categories={categories}
            getCategoryColor={getCategoryColor}
            getStatusColor={getStatusColor}
          />
        ) : (
          <InventoryList
            items={filteredInventory}
            categories={categories}
            getCategoryColor={getCategoryColor}
            getStatusColor={getStatusColor}
          />
        )}
      </div>

      {/* ========================================
          RESOURCE RESERVATIONS
          ======================================== */}
      <ResourceReservations
        reservations={reservations}
        getStatusColor={getStatusColor}
      />

      {/* ========================================
          MAINTENANCE LOG
          ======================================== */}
      <MaintenanceLog
        maintenanceLog={maintenanceLog}
        monthlyCost={stats.monthlyMaintenanceCost}
        getStatusColor={getStatusColor}
      />
    </div>
  );
};

export default Infrastructure;
