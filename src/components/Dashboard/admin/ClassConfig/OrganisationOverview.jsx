import React from "react";
import {
  Building2,
  Hash,
  GraduationCap,
  LayoutGrid,
  Edit,
  Settings,
} from "lucide-react";

const OrganisationOverview = ({ data }) => {
  const {
    schoolProfile,
    structuralRules,
    namingConfiguration,
    academicUsageOverview,
  } = data;

  const Card = ({ title, icon: Icon, children, gradient }) => (
    <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200 flex flex-col h-full">
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3`}
      />
      <div className="p-6 flex-1 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
          >
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );

  const InfoRow = ({ label, value }) => (
    <div className="flex items-start justify-between group">
      <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
        {label}
      </span>
      <span className="text-sm font-bold text-slate-800 text-right">
        {value}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1: School Profile */}
      <Card
        title="School Profile"
        icon={Building2}
        gradient="from-cyan-500 to-blue-500"
      >
        <InfoRow label="School Name" value={schoolProfile?.name} />
        <InfoRow label="Branch Code" value={schoolProfile?.code} />
        <InfoRow label="Affiliation" value={schoolProfile?.affiliation} />
        <InfoRow label="Address" value={schoolProfile?.address} />
        <InfoRow label="Established" value={schoolProfile?.established} />
        <div className="pt-2 border-t border-slate-100 mt-2">
          <InfoRow
            label="Email"
            value={schoolProfile?.contactConfig?.primaryEmail}
          />
          <InfoRow
            label="Support"
            value={schoolProfile?.contactConfig?.supportPhone}
          />
        </div>
      </Card>

      {/* Card 2: Structural Rules */}
      <Card
        title="Structural Rules"
        icon={GraduationCap}
        gradient="from-blue-500 to-indigo-500"
      >
        <InfoRow
          label="Education Levels"
          value={structuralRules?.educationLevels?.join(", ")}
        />
        <InfoRow label="Grade Range" value={structuralRules?.gradeRange} />
        <InfoRow
          label="Max Capacity/Section"
          value={structuralRules?.maxCapacityPerSection}
        />
        <InfoRow
          label="Promotion Policy"
          value={structuralRules?.promotionPolicy}
        />
        <InfoRow
          label="Academic Year Cycle"
          value={structuralRules?.academicYearCycle}
        />
      </Card>

      {/* Card 3: Naming Configuration */}
      <Card
        title="Naming Configuration"
        icon={LayoutGrid}
        gradient="from-indigo-500 to-purple-500"
      >
        <InfoRow
          label="Section Pattern"
          value={namingConfiguration?.sectionPattern}
        />
        <InfoRow
          label="Grade Prefix"
          value={namingConfiguration?.gradePrefix}
        />
        <InfoRow
          label="Exam Code Format"
          value={namingConfiguration?.examCodeFormat}
        />
        <InfoRow
          label="Student ID Format"
          value={namingConfiguration?.studentIdFormat}
        />
      </Card>

      {/* Card 4: Academic Usage Overview */}
      <Card
        title="Academic Usage Overview"
        icon={Hash}
        gradient="from-purple-500 to-pink-500"
      >
        <InfoRow
          label="Total Active Grades"
          value={academicUsageOverview?.totalActiveGrades}
        />
        <InfoRow
          label="Total Sections"
          value={academicUsageOverview?.totalSections}
        />
        <InfoRow
          label="Students Enrolled"
          value={academicUsageOverview?.totalStudentsEnrolled}
        />
        <InfoRow
          label="Utilization Rate"
          value={academicUsageOverview?.utilizationRate}
        />
        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
          <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
            Last Structure Update
          </span>
          <div className="text-sm font-bold text-slate-800">
            {academicUsageOverview?.lastStructureUpdate}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrganisationOverview;
