import React from "react";
import { BookOpen, Lock, Save } from "lucide-react";
import { CURRICULUM_MANAGEMENT_DATA } from "../../../../data/coordinatorData";

const CurriculumHeader = () => {
  const { curriculumLockStatus } = CURRICULUM_MANAGEMENT_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center shadow-lg">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              📚 Curriculum Management
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Design and manage academic curriculum structure
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {curriculumLockStatus.isLocked && (
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-xl">
              <Lock className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">
                Locked
              </span>
            </div>
          )}
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumHeader;
