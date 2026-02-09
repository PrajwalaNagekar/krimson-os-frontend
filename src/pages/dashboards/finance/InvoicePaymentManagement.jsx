import React, { useState } from "react";
import { FINANCE_DATA } from "../../../data/financeData";
import Header from "../../../components/dashboard/finance/InvoicePaymentManagement/Header";
import StatsOverview from "../../../components/dashboard/finance/InvoicePaymentManagement/StatsOverview";
import PaymentModeDistribution from "../../../components/dashboard/finance/InvoicePaymentManagement/PaymentModeDistribution";
import InvoiceFilters from "../../../components/dashboard/finance/InvoicePaymentManagement/InvoiceFilters";
import InvoiceTable from "../../../components/dashboard/finance/InvoicePaymentManagement/InvoiceTable";

/**
 * Screen 3: Invoice & Payment Management
 * Purpose: Manage all invoices and payments from creation to reconciliation
 * Functions:
 * - Auto-generate invoices upon admission confirmation
 * - Record manual payments and bank transfers
 * - Integrate with online payment gateways (Stripe/Razorpay)
 * - Track payment mode (Cash/Card/Online/Cheque)
 * - Download and email receipts instantly
 * Integration: Payment Gateway API + Student Finance Ledger
 * Design: Table view with filters — Date | Grade | Payment Mode | Status
 */

const InvoicePaymentManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGrade, setFilterGrade] = useState("all");
  const [filterPaymentMode, setFilterPaymentMode] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { stats, paymentModeStats, invoicePayments } =
    FINANCE_DATA.invoicePaymentManagement;

  // Filter invoices based on selected filters
  const filteredInvoices = invoicePayments.filter((invoice) => {
    const matchesGrade = filterGrade === "all" || invoice.grade === filterGrade;
    const matchesPaymentMode =
      filterPaymentMode === "all" || invoice.paymentMode === filterPaymentMode;
    const matchesStatus =
      filterStatus === "all" || invoice.status === filterStatus;
    const matchesSearch =
      searchQuery === "" ||
      invoice.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.studentId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesGrade && matchesPaymentMode && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Payment Mode Distribution */}
        <PaymentModeDistribution paymentModeStats={paymentModeStats} />

        {/* Filters */}
        <InvoiceFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterGrade={filterGrade}
          setFilterGrade={setFilterGrade}
          filterPaymentMode={filterPaymentMode}
          setFilterPaymentMode={setFilterPaymentMode}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        {/* Invoice & Payment Table */}
        <InvoiceTable
          filteredInvoices={filteredInvoices}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default InvoicePaymentManagement;
