import React, { useState } from "react";
import TransportHeader from "../../../components/dashboard/management/TransportManagement/TransportHeader";
import RoutesSetupView from "../../../components/dashboard/management/TransportManagement/RoutesSetupView";
import RosterView from "../../../components/dashboard/management/TransportManagement/RosterView";
import CreateRouteModal from "../../../components/dashboard/management/TransportManagement/CreateRouteModal";
import RouteDetailPanel from "../../../components/dashboard/management/TransportManagement/RouteDetailPanel";

/**
 * Transport Management Module - Professional Edition
 * Design: Minimal, Operational, Fleet-Management Toned
 * Features:
 * - Route Setup (Search, Cards, Status)
 * - Create Route Modal (Step-based)
 * - Route Detail Side Panel (Configuration, Enhanced Stops list)
 * - Transport Roster (Assignments, Exceptions, Student Lists)
 */

const TransportManagement = () => {
  const [activeTab, setActiveTab] = useState("routes"); // 'routes' or 'roster'
  const [showRouteDetail, setShowRouteDetail] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Page Header - Strategic Style */}
        <TransportHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setShowCreateModal={setShowCreateModal}
        />

        {/* Content Area */}
        <div className="animate-fadeIn">
          {activeTab === "routes" ? (
            <RoutesSetupView
              onRouteSelect={(route) => {
                setSelectedRoute(route);
                setShowRouteDetail(true);
              }}
            />
          ) : (
            <RosterView />
          )}
        </div>

        {/* Create Route Modal */}
        {showCreateModal && (
          <CreateRouteModal onClose={() => setShowCreateModal(false)} />
        )}

        {/* Route Detail Panel */}
        {showRouteDetail && (
          <RouteDetailPanel
            route={selectedRoute}
            onClose={() => setShowRouteDetail(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TransportManagement;
