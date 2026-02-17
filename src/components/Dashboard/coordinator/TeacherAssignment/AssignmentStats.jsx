import React from "react";
import { useNavigate } from "react-router-dom";
import { TEACHER_ASSIGNMENT_DATA } from "../../../../data/coordinatorData";

const AssignmentStats = () => {
  const navigate = useNavigate();

  const statRoutes = {
    "Total Teachers": "/coordinator/teacher-assignment/total-teachers",
    "Total Assignments": "/coordinator/teacher-assignment/total-assignments",
    "Unassigned Classes": "/coordinator/teacher-assignment/unassigned-classes",
    "Grades Covered": "/coordinator/teacher-assignment/grades-covered",
  };

  const handleStatClick = (label) => {
    const route = statRoutes[label];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {TEACHER_ASSIGNMENT_DATA.stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            onClick={() => handleStatClick(stat.label)}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                {stat.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                )}
              </div>
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} shadow-lg`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AssignmentStats;
