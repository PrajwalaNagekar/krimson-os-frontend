import React, { useState } from "react";
import { LIBRARIAN_DATA } from "../../../data/librarianData";
import { Clock, CheckCircle } from "lucide-react";
import ReservationHeader from "../../../components/dashboard/librarian/ReservationRequestCenter/ReservationHeader";
import ReservationStats from "../../../components/dashboard/librarian/ReservationRequestCenter/ReservationStats";
import ReservationQueue from "../../../components/dashboard/librarian/ReservationRequestCenter/ReservationQueue";
import ApprovedReservations from "../../../components/dashboard/librarian/ReservationRequestCenter/ApprovedReservations";
import MostRequestedTitles from "../../../components/dashboard/librarian/ReservationRequestCenter/MostRequestedTitles";

/**
 * Screen 3: Reservation & Request Center
 * Purpose: Manage book reservations and resource requests
 * Features:
 * - Reservation queue by student ID
 * - Request approval workflow
 * - Notification to student when item available
 * - Summary of most-requested titles
 * Integration: Notification API + Library Database
 */

const ReservationRequestCenter = () => {
  const [selectedTab, setSelectedTab] = useState("pending"); // pending, approved, notified

  // Use fallback in case data is missing
  const reservationData = LIBRARIAN_DATA.reservationCenter || {};

  if (!reservationData.stats) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <ReservationHeader />

        {/* Stats Overview */}
        <ReservationStats stats={reservationData.stats} />

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
          <button
            onClick={() => setSelectedTab("pending")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "pending" ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                Pending Queue ({reservationData.reservationQueue.length})
              </span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab("approved")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${selectedTab === "approved" ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>
                Ready for Pickup ({reservationData.approvedReservations.length})
              </span>
            </div>
          </button>
        </div>

        {/* Pending Reservation Queue */}
        {selectedTab === "pending" && (
          <ReservationQueue queue={reservationData.reservationQueue} />
        )}

        {/* Approved Reservations (Ready for Pickup) */}
        {selectedTab === "approved" && (
          <ApprovedReservations
            reservations={reservationData.approvedReservations}
          />
        )}

        {/* Most Requested Titles */}
        <MostRequestedTitles titles={reservationData.mostRequestedTitles} />
      </div>
    </div>
  );
};

export default ReservationRequestCenter;
