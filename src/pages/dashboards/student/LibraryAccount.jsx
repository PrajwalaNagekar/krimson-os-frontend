import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import { AlertTriangle, Bell, Info } from "lucide-react";
import LibraryHeader from "../../../components/dashboard/student/LibraryAccount/LibraryHeader";
import LibraryAlerts from "../../../components/dashboard/student/LibraryAccount/LibraryAlerts";
import AccountSummary from "../../../components/dashboard/student/LibraryAccount/AccountSummary";
import CurrentLoans from "../../../components/dashboard/student/LibraryAccount/CurrentLoans";
import BorrowingHistory from "../../../components/dashboard/student/LibraryAccount/BorrowingHistory";
import LibraryInfo from "../../../components/dashboard/student/LibraryAccount/LibraryInfo";

const LibraryAccount = () => {
  const [selectedTerm, setSelectedTerm] = useState("2025-2026");
  const [hoveredCard, setHoveredCard] = useState(null);

  const { libraryData, user } = STUDENT_DATA;
  const { currentLoans: issuedBooks, borrowingHistory } = libraryData;

  // Calculate overdue summary
  const overdueInfo = {
    count: issuedBooks.filter((book) => book.status === "overdue").length,
    totalDaysOverdue: issuedBooks
      .filter((book) => book.status === "overdue")
      .reduce((sum, book) => sum + (book.daysOverdue || 0), 0),
    fineAmount: issuedBooks
      .filter((book) => book.status === "overdue")
      .reduce((sum, book) => sum + (book.daysOverdue || 0) * 5, 0), // ₹5 per day
    clearanceStatus:
      issuedBooks.filter((book) => book.status === "overdue").length === 0
        ? "cleared"
        : "pending",
  };

  // Get alerts
  const alerts = [];

  if (overdueInfo.count > 0) {
    alerts.push({
      type: "error",
      message: `You have ${overdueInfo.count} overdue book${overdueInfo.count > 1 ? "s" : ""} - please return immediately`,
      icon: <AlertTriangle size={18} />,
    });
  }

  const dueSoonCount = issuedBooks.filter(
    (book) => book.status === "dueSoon",
  ).length;
  if (dueSoonCount > 0) {
    alerts.push({
      type: "warning",
      message: `${dueSoonCount} book${dueSoonCount > 1 ? "s" : ""} due within 3 days`,
      icon: <Bell size={18} />,
    });
  }

  if (overdueInfo.clearanceStatus === "pending") {
    alerts.push({
      type: "warning",
      message: "Library clearance pending - may affect report card access",
      icon: <Info size={18} />,
    });
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header Section */}
      <LibraryHeader
        user={user}
        selectedTerm={selectedTerm}
        onTermChange={setSelectedTerm}
      />

      {/* Alerts Section */}
      <LibraryAlerts alerts={alerts} />

      {/* Account Summary Panel */}
      <AccountSummary
        issuedBooks={issuedBooks}
        overdueInfo={overdueInfo}
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
      />

      {/* Currently Issued Books Section */}
      <CurrentLoans books={issuedBooks} />

      {/* Borrowing History Section */}
      <BorrowingHistory history={borrowingHistory} />

      {/* Informational Note */}
      <LibraryInfo />
    </div>
  );
};

export default LibraryAccount;
