import React, { useState } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import PageHeader from "../../../components/dashboard/systemAdmin/shared/PageHeader";

// AI Policy Components
import PolicyStats from "../../../components/dashboard/systemAdmin/AiPolicy/PolicyStats";
import PolicyCard from "../../../components/dashboard/systemAdmin/AiPolicy/PolicyCard";
import GuardrailsGrid from "../../../components/dashboard/systemAdmin/AiPolicy/GuardrailsGrid";

// Prompt Library Components
import PromptStats from "../../../components/dashboard/systemAdmin/PromptLibrary/PromptStats";
import PromptCategoryGrid from "../../../components/dashboard/systemAdmin/PromptLibrary/PromptCategoryGrid";
import PromptCard from "../../../components/dashboard/systemAdmin/PromptLibrary/PromptCard";

// AI Audit Components
import AuditStats from "../../../components/dashboard/systemAdmin/AiAudit/AuditStats";
import AuditLogTable from "../../../components/dashboard/systemAdmin/AiAudit/AuditLogTable";
import ExplainabilityPanel from "../../../components/dashboard/systemAdmin/AiAudit/ExplainabilityPanel";

const AiGovernance = () => {
  const { aiPolicyGuardrails, aiPromptLibrary, aiAuditLogs } =
    SYSTEM_ADMIN_DATA.aiGovernance;

  const [activeSection, setActiveSection] = useState("policy");
  const [selectedPromptCategory, setSelectedPromptCategory] = useState("all");

  // Filter prompt data
  const filteredPrompts = aiPromptLibrary.prompts.filter((prompt) => {
    if (selectedPromptCategory === "all") return true;
    return prompt.category === selectedPromptCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <PageHeader
          title="AI Governance"
          description="AI trust & compliance management"
        />

        {/* Main Section Tabs */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveSection("policy")}
            className={`px-8 py-4 rounded-xl text-base font-semibold transition-all ${
              activeSection === "policy"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
            }`}
          >
            🛡️ AI Policy & Guardrails
          </button>
          <button
            onClick={() => setActiveSection("prompts")}
            className={`px-8 py-4 rounded-xl text-base font-semibold transition-all ${
              activeSection === "prompts"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
            }`}
          >
            📝 AI Prompt Library
          </button>
          <button
            onClick={() => setActiveSection("audit")}
            className={`px-8 py-4 rounded-xl text-base font-semibold transition-all ${
              activeSection === "audit"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
            }`}
          >
            🔍 AI Audit & Explainability
          </button>
        </div>

        {/* AI Policy & Guardrails Section */}
        {activeSection === "policy" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-cyan-200">
              <p className="text-base text-slate-700">
                <strong>Keep AI trust & compliance together</strong> - Manage
                policies, guardrails, and safety measures
              </p>
            </div>

            <PolicyStats stats={aiPolicyGuardrails.stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiPolicyGuardrails.policies.map((policy) => (
                <PolicyCard key={policy.id} policy={policy} />
              ))}
            </div>

            <GuardrailsGrid
              guardrails={aiPolicyGuardrails.guardrails}
              complianceMetrics={aiPolicyGuardrails.complianceMetrics}
            />
          </div>
        )}

        {/* Prompt Library Section */}
        {activeSection === "prompts" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-cyan-200">
              <p className="text-base text-slate-700">
                <strong>AI Prompt Library</strong> - Centralized repository of
                validated AI prompts
              </p>
            </div>

            <PromptStats stats={aiPromptLibrary.stats} />
            <PromptCategoryGrid categories={aiPromptLibrary.categories} />

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setSelectedPromptCategory("all")}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  selectedPromptCategory === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                All Prompts
              </button>
              {aiPromptLibrary.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedPromptCategory(category.name)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    selectedPromptCategory === category.name
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Prompts ({filteredPrompts.length})
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Audit & Explainability Section */}
        {activeSection === "audit" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-cyan-200">
              <p className="text-base text-slate-700">
                <strong>AI Audit & Explainability</strong> - Track AI decisions
                and provide transparency
              </p>
            </div>

            <AuditStats stats={aiAuditLogs.stats} />
            <AuditLogTable logs={aiAuditLogs.recentLogs} />
            <ExplainabilityPanel
              reports={aiAuditLogs.explainabilityReports}
              riskAssessment={aiAuditLogs.riskAssessment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AiGovernance;
