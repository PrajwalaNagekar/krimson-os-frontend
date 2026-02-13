import React, { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import NotificationHeader from "../../../components/dashboard/admin/NotificationCenter/NotificationHeader";
import NotificationStats from "../../../components/dashboard/admin/NotificationCenter/NotificationStats";
import GatewayStatus from "../../../components/dashboard/admin/NotificationCenter/GatewayStatus";
import TemplateLibrary from "../../../components/dashboard/admin/NotificationCenter/TemplateLibrary";
import RecentBroadcasts from "../../../components/dashboard/admin/NotificationCenter/RecentBroadcasts";

const NotificationCenter = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState("compose");

  // Get data from centralized source
  // Use optional chaining and default empty objects/arrays to prevent crashes if data is missing
  const templates = ADMIN_DATA.notificationCenter?.templates || [];
  const recentNotifications =
    ADMIN_DATA.notificationCenter?.recentNotifications || [];
  const gatewayStatus = ADMIN_DATA.notificationCenter?.gatewayStatus || {
    sms: {},
    email: {},
    firebase: {},
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Failed":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      General: "bg-blue-50 text-blue-700 border-blue-200",
      Academic: "bg-purple-50 text-purple-700 border-purple-200",
      Finance: "bg-green-50 text-green-700 border-green-200",
      Urgent: "bg-red-50 text-red-700 border-red-200",
    };
    return colors[category] || "bg-slate-50 text-slate-700 border-slate-200";
  };

  const stats = {
    sentToday: recentNotifications.length,
    templateCount: templates.length,
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <NotificationHeader />

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <NotificationStats stats={stats} />

      {/* ========================================
          GATEWAY STATUS CARDS
          ======================================== */}
      <GatewayStatus gatewayStatus={gatewayStatus} />

      {/* ========================================
          TEMPLATE LIBRARY
          ======================================== */}
      <TemplateLibrary
        templates={templates}
        getCategoryColor={getCategoryColor}
      />

      {/* ========================================
          RECENT NOTIFICATIONS WITH TRACKING
          ======================================== */}
      <RecentBroadcasts
        recentNotifications={recentNotifications}
        getStatusColor={getStatusColor}
      />
    </div>
  );
};

export default NotificationCenter;
