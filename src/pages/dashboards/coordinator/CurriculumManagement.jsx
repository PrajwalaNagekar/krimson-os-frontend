import React, { useState } from "react";
import CurriculumHeader from "../../../components/dashboard/coordinator/CurriculumManagement/CurriculumHeader";
import HierarchyBuilder from "../../../components/dashboard/coordinator/CurriculumManagement/HierarchyBuilder";
import OutcomeMappingPanel from "../../../components/dashboard/coordinator/CurriculumManagement/OutcomeMappingPanel";
import VersionControl from "../../../components/dashboard/coordinator/CurriculumManagement/VersionControl";
import DocumentUpload from "../../../components/dashboard/coordinator/CurriculumManagement/DocumentUpload";

/**
 * Screen 2: Curriculum Management
 * Purpose: Combined curriculum builder, versioning, and outcomes mapping
 * Features:
 * - Curriculum planner with framework selection
 * - Term/Unit/Topic/Sub-topic hierarchy builder
 * - Learning outcome mapping
 * - Bloom taxonomy tagging
 * - Version control and comparison
 * - Lock/unlock curriculum
 * Integration: Curriculum Module + Analytics Engine
 */

const CurriculumManagement = () => {
  const [selectedFramework, setSelectedFramework] = useState("cbse");
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedGrade, setSelectedGrade] = useState("grade-10");
  const [activeTab, setActiveTab] = useState("hierarchy");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <CurriculumHeader />

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20">
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("hierarchy")}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === "hierarchy"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Curriculum Builder
            </button>
            <button
              onClick={() => setActiveTab("outcomes")}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === "outcomes"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Learning Outcomes
            </button>
            <button
              onClick={() => setActiveTab("versions")}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === "versions"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Version Control
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === "documents"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Documents
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "hierarchy" && <HierarchyBuilder />}
        {activeTab === "outcomes" && <OutcomeMappingPanel />}
        {activeTab === "versions" && <VersionControl />}
        {activeTab === "documents" && <DocumentUpload />}
      </div>
    </div>
  );
};

export default CurriculumManagement;
