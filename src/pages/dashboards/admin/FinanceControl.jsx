/**
 * @component FinanceControl
 * @description Finance Control Center - Comprehensive Fee & Payment Management
 */
import React from "react";
import { RefreshCcw } from "lucide-react";
import { ADMIN_DATA } from "../../../data/adminData";
import FinanceStats from "../../../components/dashboard/admin/FinanceControl/FinanceStats";
import ActionButtons from "../../../components/dashboard/admin/FinanceControl/ActionButtons";
import FeeStructureSetup from "../../../components/dashboard/admin/FinanceControl/FeeStructureSetup";
import LiveCollectionDashboard from "../../../components/dashboard/admin/FinanceControl/LiveCollectionDashboard";
import RefundsLog from "../../../components/dashboard/admin/FinanceControl/RefundsLog";

const FinanceControl = () => {
  // Destructure finance data
  const { finance } = ADMIN_DATA;
  const { stats, feeCategories, liveReceipts, refundsLog } = finance;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Finance Control Center
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <RefreshCcw size={12} /> Live Sync
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Fee & Payment Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage fee categories, monitor collections, process refunds, and
                export to accounting systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <FinanceStats stats={stats} />

      {/* ========================================
          ACTION BUTTONS
          ======================================== */}
      <ActionButtons />

      {/* ========================================
          FEE STRUCTURE SETUP
          ======================================== */}
      <FeeStructureSetup feeCategories={feeCategories} />

      {/* ========================================
          COLLECTION DASHBOARD (LIVE RECEIPTS)
          ======================================== */}
      <LiveCollectionDashboard
        liveReceipts={liveReceipts}
        feeCategories={feeCategories}
      />

      {/* ========================================
          REFUNDS & ADJUSTMENTS LOG
          ======================================== */}
      <RefundsLog refundsLog={refundsLog} />
    </div>
  );
};

export default FinanceControl;
