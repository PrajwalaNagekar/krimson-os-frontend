import React from "react";
import { COUNSELOR_DATA } from "../../../data/counselorData";

import DisciplinePolicyHeader from "../../../components/dashboard/counselor/DisciplinePolicy/DisciplinePolicyHeader";
import PolicyStats from "../../../components/dashboard/counselor/DisciplinePolicy/PolicyStats";
import PolicyRulesSection from "../../../components/dashboard/counselor/DisciplinePolicy/PolicyRulesSection";
import ConsequencesMatrix from "../../../components/dashboard/counselor/DisciplinePolicy/ConsequencesMatrix";
import EscalationFlowChart from "../../../components/dashboard/counselor/DisciplinePolicy/EscalationFlowChart";
import RecentViolations from "../../../components/dashboard/counselor/DisciplinePolicy/RecentViolations";

/**
 * Discipline Policy Setup Page
 * Purpose: Manage school discipline policies, rules, consequences, and violation tracking
 * Features: Policy management, Consequences matrix, Escalation workflow, Violation tracking
 */
const DisciplinePolicy = () => {
  const {
    policyStats,
    policyRules,
    severityLevels,
    consequencesMatrix,
    escalationFlow,
    recentViolations,
  } = COUNSELOR_DATA.disciplinePolicy;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <DisciplinePolicyHeader />

      {/* Policy Statistics */}
      <PolicyStats stats={policyStats} />

      {/* Policy Rules Section */}
      <PolicyRulesSection rules={policyRules} severityLevels={severityLevels} />

      {/* Consequences Matrix */}
      <ConsequencesMatrix
        matrix={consequencesMatrix}
        severityLevels={severityLevels}
      />

      {/* Escalation Flow Chart */}
      <EscalationFlowChart flow={escalationFlow} />

      {/* Recent Violations */}
      <RecentViolations
        violations={recentViolations}
        severityLevels={severityLevels}
      />
    </div>
  );
};

export default DisciplinePolicy;
