import React, { useState } from "react";
import {
  GitBranch,
  Lock,
  Unlock,
  Plus,
  Eye,
  Edit2,
  Copy,
  FilePlus,
  X,
} from "lucide-react";
import { CURRICULUM_MANAGEMENT_DATA } from "../../../../data/coordinatorData";

const VersionControl = () => {
  const { versionHistory, curriculumLockStatus } = CURRICULUM_MANAGEMENT_DATA;
  const [selectedVersions, setSelectedVersions] = useState([]);
  const [showNewModal, setShowNewModal] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-50 text-green-700 border-green-200";
      case "draft":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "archived":
        return "bg-gray-50 text-gray-700 border-gray-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const toggleVersionSelection = (versionId) => {
    setSelectedVersions((prev) =>
      prev.includes(versionId)
        ? prev.filter((id) => id !== versionId)
        : prev.length < 2
          ? [...prev, versionId]
          : prev,
    );
  };

  const handleEditVersion = (version) => {
    console.log("Edit existing version:", version);
    // TODO: Navigate to curriculum builder with this version loaded for editing
    // This will modify the same version without creating a new one
    alert(
      `Editing ${version.name} - Modifying existing data in version ${version.version}`,
    );
  };

  const handleCreateFromExisting = () => {
    console.log("Create version from existing curriculum");
    // TODO: Copy the current active curriculum and create version 2
    // Old version remains unchanged, new version is created
    setShowNewModal(false);
    alert(
      "Creating new version from existing curriculum - Version 2 will be created",
    );
  };

  const handleCreateFresh = () => {
    console.log("Create fresh curriculum");
    // TODO: Create completely new curriculum entry
    setShowNewModal(false);
    alert("Creating fresh curriculum - New entry with empty structure");
  };

  return (
    <div className="space-y-6">
      {/* New Version Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowNewModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Create New Curriculum Version
              </h2>
              <p className="text-gray-600">
                Choose how you want to create the new version
              </p>
            </div>

            {/* Options */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Option A: Copy from Existing */}
              <button
                onClick={handleCreateFromExisting}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-cyan-400 hover:bg-cyan-50 transition-all group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Copy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      From Existing Curriculum
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Create Version 2
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1 text-left">
                      <li>✓ Copy previous curriculum</li>
                      <li>✓ Old version remains unchanged</li>
                      <li>✓ Edit freely in new version</li>
                    </ul>
                  </div>
                </div>
              </button>

              {/* Option B: Create Fresh */}
              <button
                onClick={handleCreateFresh}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-pink-400 hover:bg-pink-50 transition-all group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FilePlus className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Fresh Curriculum
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Start from scratch
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1 text-left">
                      <li>✓ Completely new entry</li>
                      <li>✓ Empty structure</li>
                      <li>✓ Full customization</li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>

            {/* Cancel Button */}
            <button
              onClick={() => setShowNewModal(false)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Lock Status */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                curriculumLockStatus.isLocked
                  ? "bg-gradient-to-br from-orange-400 to-red-500"
                  : "bg-gradient-to-br from-green-400 to-cyan-500"
              }`}
            >
              {curriculumLockStatus.isLocked ? (
                <Lock className="w-6 h-6 text-white" />
              ) : (
                <Unlock className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Curriculum Lock Status
              </h3>
              <p className="text-sm text-gray-600">
                {curriculumLockStatus.isLocked
                  ? `Locked by ${curriculumLockStatus.lockedBy} on ${new Date(
                      curriculumLockStatus.lockedAt,
                    ).toLocaleDateString()}`
                  : "Curriculum is currently unlocked and editable"}
              </p>
            </div>
          </div>
          <button
            disabled={
              curriculumLockStatus.isLocked && !curriculumLockStatus.canUnlock
            }
            className={`px-4 py-2 rounded-xl font-medium shadow-md transition-all flex items-center gap-2 ${
              curriculumLockStatus.isLocked && !curriculumLockStatus.canUnlock
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-lg"
            }`}
          >
            {curriculumLockStatus.isLocked ? (
              <>
                <Unlock className="w-4 h-4" />
                Unlock
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Lock
              </>
            )}
          </button>
        </div>

        {curriculumLockStatus.isLocked && (
          <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
            <p className="text-sm text-orange-800">
              <strong>Reason:</strong> {curriculumLockStatus.reason}
            </p>
            {curriculumLockStatus.requiresApproval && (
              <p className="text-xs text-orange-700 mt-2">
                <strong>Approvers required:</strong>{" "}
                {curriculumLockStatus.approvers.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Version History */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Version History
              </h2>
              <p className="text-sm text-gray-600">
                Track and manage curriculum versions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {selectedVersions.length === 2 && (
              <button className="px-4 py-2 bg-purple-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Compare
              </button>
            )}
            <button
              onClick={() => setShowNewModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-600 mb-4">
          {selectedVersions.length === 0
            ? "Select up to 2 versions to compare"
            : selectedVersions.length === 1
              ? "Select one more version to compare"
              : "Click 'Compare' to view differences"}
        </div>

        <div className="space-y-3">
          {versionHistory.map((version) => (
            <div
              key={version.id}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedVersions.includes(version.id)
                  ? "border-cyan-400 bg-cyan-50"
                  : "border-gray-200 bg-gradient-to-r from-slate-50 to-blue-50 hover:border-cyan-300"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedVersions.includes(version.id)}
                    onChange={() => toggleVersionSelection(version.id)}
                    className="w-4 h-4 accent-cyan-500"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800">
                        v{version.version} - {version.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(
                          version.status,
                        )}`}
                      >
                        {version.status}
                      </span>
                      {version.locked && (
                        <Lock className="w-4 h-4 text-orange-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Created by {version.createdBy} on{" "}
                      {new Date(version.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditVersion(version)}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-all flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>
                  <button className="px-3 py-1 text-cyan-600 border border-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-50 transition-all">
                    View
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{version.changes}</p>
              {version.approvedBy && (
                <p className="text-xs text-green-700 font-semibold">
                  ✓ Approved by {version.approvedBy}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VersionControl;
