/**
 * @component ClassConfig
 * @description Admin Screen - Organisation Structure (Professional View)
 */
import React from "react";
import { ADMIN_DATA } from "../../../data/adminData";
import OrganisationHeader from "../../../components/dashboard/admin/ClassConfig/OrganisationHeader";
import OrganisationOverview from "../../../components/dashboard/admin/ClassConfig/OrganisationOverview";

const ClassConfig = () => {
  const activeAcademicYear =
    ADMIN_DATA.academicYears?.find((y) => y.isActive)?.label || "2025-2026";

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      <OrganisationHeader activeYear={activeAcademicYear} />
      <OrganisationOverview data={ADMIN_DATA.organisationStructure} />
    </div>
  );
};

export default ClassConfig;
