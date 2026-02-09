import React, { useState } from "react";
import { principalProfileData } from "../../../data/principalData.jsx";

// Components
import ProfileSidebar from "../../../components/dashboard/principal/PrincipalProfile/ProfileSidebar";
import ProfileOverview from "../../../components/dashboard/principal/PrincipalProfile/ProfileOverview";
import SecuritySettings from "../../../components/dashboard/principal/PrincipalProfile/SecuritySettings";
import SystemPreferences from "../../../components/dashboard/principal/PrincipalProfile/SystemPreferences";
import PermissionsManage from "../../../components/dashboard/principal/PrincipalProfile/PermissionsManage";
import ActivityLog from "../../../components/dashboard/principal/PrincipalProfile/ActivityLog";

const PrincipalProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Theme configuration
  const theme = {
    gradient: "from-cyan-400 via-blue-400 to-pink-400",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  };

  const {
    userProfile,
    achievements,
    professionalHistory,
    signatureData,
    proxyData,
    activityLog,
  } = principalProfileData;

  const [user, setUser] = useState(userProfile);
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: "grid",
  });

  const handleSave = () => {
    // Mock save
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4 md:p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Account Settings
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            Manage your personal information, security, and institutional
            credentials.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Navigation */}
        <ProfileSidebar
          user={user}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
        />

        {/* Right Content Area */}
        <div className="flex-1 space-y-6">
          {/* PROFILE OVERVIEW TAB */}
          {activeTab === "overview" && (
            <ProfileOverview
              user={user}
              setUser={setUser}
              handleSave={handleSave}
              theme={theme}
              professionalHistory={professionalHistory}
              achievements={achievements}
            />
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && (
            <SecuritySettings theme={theme} signatureData={signatureData} />
          )}

          {/* PREFERENCES TAB */}
          {activeTab === "preferences" && (
            <SystemPreferences
              theme={theme}
              preferences={preferences}
              setPreferences={setPreferences}
            />
          )}

          {/* PERMISSIONS TAB */}
          {activeTab === "permissions" && (
            <PermissionsManage proxyData={proxyData} />
          )}

          {/* ACTIVITY LOG TAB */}
          {activeTab === "activity" && (
            <ActivityLog theme={theme} activityLog={activityLog} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipalProfile;
