import React from "react";
import { FINANCE_DATA } from "../../../data/financeData";
import FeeStructureHeader from "../../../components/dashboard/finance/FeeStructureSetup/FeeStructureHeader";
import FeeStats from "../../../components/dashboard/finance/FeeStructureSetup/FeeStats";
import FeeHeads from "../../../components/dashboard/finance/FeeStructureSetup/FeeHeads";
import FeeSchedules from "../../../components/dashboard/finance/FeeStructureSetup/FeeSchedules";
import Scholarships from "../../../components/dashboard/finance/FeeStructureSetup/Scholarships";

/**
 * Screen 2: Fee Structure & Category Setup
 * Purpose: Configure and manage multiple fee types for each academic term
 * Features:
 * - Fee Heads (Tuition, CCA, Lab, Transport, Miscellaneous)
 * - Assign class-specific fee schedules and due dates
 * - Apply concessions or scholarships
 * - Bulk import/export via Excel
 * Integration: Fee Configuration API + Admissions Module
 * Outcome: Ensures consistent billing across grades and academic years
 */

const FeeStructureSetup = () => {
  const { stats, feeHeads, feeSchedules, scholarships } =
    FINANCE_DATA.feeStructureSetup;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <FeeStructureHeader />

        {/* Stats Overview */}
        <FeeStats stats={stats} />

        {/* Fee Heads */}
        <FeeHeads feeHeads={feeHeads} />

        {/* Class-Specific Fee Schedules */}
        <FeeSchedules feeSchedules={feeSchedules} />

        {/* Scholarships & Concessions */}
        <Scholarships scholarships={scholarships} />
      </div>
    </div>
  );
};

export default FeeStructureSetup;
