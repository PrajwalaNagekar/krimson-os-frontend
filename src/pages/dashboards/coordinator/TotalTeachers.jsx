import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Search, Mail, Award } from "lucide-react";
import { TEACHER_ASSIGNMENT_DATA } from "../../../data/coordinatorData";

/**
 * Page: Total Teachers
 * Purpose: Display comprehensive list of all teachers
 * Features:
 * - View all teacher details
 * - Search and filter teachers
 * - Premium card-based UI
 */

const TotalTeachers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeachers = TEACHER_ASSIGNMENT_DATA.teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.specialization.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/coordinator/teacher-assignment")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                All Teachers
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Comprehensive list of all teaching staff
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-lg text-white">
              <Users className="h-5 w-5" />
              <span className="font-semibold">
                {TEACHER_ASSIGNMENT_DATA.teachers.length} Teachers
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Teacher Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {teacher.specialization}
                  </p>
                </div>
              </div>

              {/* Teacher Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-cyan-600" />
                  <span className="text-gray-700">{teacher.qualification}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{teacher.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-pink-600" />
                  <span className="text-gray-700">{teacher.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No teachers found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalTeachers;
