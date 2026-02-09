import React, { useState } from "react";
import { LIBRARIAN_DATA } from "../../../data/librarianData";
import IssueReturnHeader from "../../../components/dashboard/librarian/IssueReturnManager/IssueReturnHeader";
import StatsOverview from "../../../components/dashboard/librarian/IssueReturnManager/StatsOverview";
import ActionTabs from "../../../components/dashboard/librarian/IssueReturnManager/ActionTabs";
import IssueBookForm from "../../../components/dashboard/librarian/IssueReturnManager/IssueBookForm";
import ReturnBookForm from "../../../components/dashboard/librarian/IssueReturnManager/ReturnBookForm";
import IssuedBooksList from "../../../components/dashboard/librarian/IssueReturnManager/IssuedBooksList";
import TransactionHistory from "../../../components/dashboard/librarian/IssueReturnManager/TransactionHistory";

/**
 * Screen 2: Issue & Return Manager
 * Purpose: Streamline daily book issue and return processes
 * Features:
 * - Barcode scan entry
 * - Student/Staff member lookup
 * - Due date and overdue fine calculator
 * - Return confirmation and auto-update of stock count
 * Integration: Library API + Student Database
 */

const IssueReturnManager = () => {
  const [activeTab, setActiveTab] = useState("issue"); // issue or return
  const [barcodeInput, setBarcodeInput] = useState("");
  const [memberSearch, setMemberSearch] = useState("");
  const { stats, recentTransactions, issuedBooks } =
    LIBRARIAN_DATA.issueReturnData;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <IssueReturnHeader />

        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Tab Navigation */}
        <ActionTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Issue/Return Form */}
        {activeTab === "issue" ? (
          <IssueBookForm
            barcodeInput={barcodeInput}
            setBarcodeInput={setBarcodeInput}
            memberSearch={memberSearch}
            setMemberSearch={setMemberSearch}
          />
        ) : (
          <ReturnBookForm
            barcodeInput={barcodeInput}
            setBarcodeInput={setBarcodeInput}
            memberSearch={memberSearch}
            setMemberSearch={setMemberSearch}
          />
        )}

        {/* Currently Issued Books (for return tab) */}
        {activeTab === "return" && (
          <IssuedBooksList issuedBooks={issuedBooks} formatDate={formatDate} />
        )}

        {/* Recent Transactions */}
        <TransactionHistory
          transactions={recentTransactions}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};

export default IssueReturnManager;
