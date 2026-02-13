/**
 * @component SystemSettings
 * @description Screen 14: Settings & System Configuration - Control global system parameters
 */
import { useState } from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import SystemSettingsHeader from "../../../components/dashboard/admin/SystemSettings/SystemSettingsHeader";
import SystemStatsCards from "../../../components/dashboard/admin/SystemSettings/SystemStatsCards";
import AcademicYearConfig from "../../../components/dashboard/admin/SystemSettings/AcademicYearConfig";
import RegionalConfig from "../../../components/dashboard/admin/SystemSettings/RegionalConfig";
import BrandingConfig from "../../../components/dashboard/admin/SystemSettings/BrandingConfig";
import AccessControlConfig from "../../../components/dashboard/admin/SystemSettings/AccessControlConfig";
import SecurityPoliciesConfig from "../../../components/dashboard/admin/SystemSettings/SecurityPoliciesConfig";
import SystemHealthCard from "../../../components/dashboard/admin/SystemSettings/SystemHealthCard";

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const systemData = ADMIN_DATA.systemSettings;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* ========================================
          HEADER SECTION - Admin Gradient Theme
          ======================================== */}
      <SystemSettingsHeader />

      {/* ========================================
          SUMMARY STATISTICS CARDS - With Hover Effect
          ======================================== */}
      <SystemStatsCards stats={systemData.stats} />

      {/* ========================================
          CONFIGURATION SECTIONS
          ======================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT COLUMN - Main Settings */}
        <div className="xl:col-span-2 space-y-6">
          {/* Academic Year Setup */}
          <AcademicYearConfig academicYear={systemData.academicYear} />

          {/* Time Zone and Currency Configuration */}
          <RegionalConfig regionalization={systemData.regionalization} />

          {/* School Branding */}
          <BrandingConfig branding={systemData.branding} />
        </div>

        {/* RIGHT COLUMN - Permissions & Security */}
        <div className="space-y-6">
          {/* Default Permissions & Access Control */}
          <AccessControlConfig permissions={systemData.permissions} />

          {/* Security Policies */}
          <SecurityPoliciesConfig
            policies={systemData.permissions.securityPolicies}
          />

          {/* System Status */}
          <SystemHealthCard />
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
