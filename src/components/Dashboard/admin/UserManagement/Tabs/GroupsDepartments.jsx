import React from "react";
import { Building, Shield, Plus, Check, X } from "lucide-react";

const GroupsDepartments = ({
  departments,
  roleGroups,
  showCreateForm,
  setShowCreateForm,
}) => {
  return (
    <div className="p-6">
      {/* Group Creation Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() =>
            setShowCreateForm(
              showCreateForm === "department" ? null : "department",
            )
          }
          className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            showCreateForm === "department"
              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg"
              : "bg-white border-2 border-cyan-200 text-cyan-600 hover:border-cyan-300 hover:shadow-md"
          }`}
        >
          <Plus size={16} />
          Create Department
        </button>
        <button
          onClick={() =>
            setShowCreateForm(showCreateForm === "grade" ? null : "grade")
          }
          className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            showCreateForm === "grade"
              ? "bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg"
              : "bg-white border-2 border-purple-200 text-purple-600 hover:border-purple-300 hover:shadow-md"
          }`}
        >
          <Plus size={16} />
          Create Grade
        </button>
        <button
          onClick={() =>
            setShowCreateForm(showCreateForm === "role" ? null : "role")
          }
          className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
            showCreateForm === "role"
              ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg"
              : "bg-white border-2 border-pink-200 text-pink-600 hover:border-pink-300 hover:shadow-md"
          }`}
        >
          <Plus size={16} />
          Create Role
        </button>
      </div>

      {/* Collapsible Creation Forms */}
      {showCreateForm && (
        <div className="mb-6 bg-white border border-cyan-100 rounded-2xl shadow-lg overflow-hidden animate-slideDown">
          <div className="p-6">
            {/* Department Form */}
            {showCreateForm === "department" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                    <Building size={18} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">
                    Create New Department
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Department Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Science Department"
                      className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Department Head
                    </label>
                    <select className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all">
                      <option>Select User</option>
                      <option>Dr. Sarah Johnson</option>
                      <option>Prof. Michael Chen</option>
                      <option>Ms. Emily Williams</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Department description..."
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Check size={16} />
                    Create Department
                  </button>
                  <button
                    onClick={() => setShowCreateForm(null)}
                    className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Role Form */}
            {showCreateForm === "role" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-md">
                    <Shield size={18} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">
                    Create New Role
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Role Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Grade Coordinator"
                      className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Permission Level
                    </label>
                    <select className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all">
                      <option>Select Level</option>
                      <option>Admin - Full Access</option>
                      <option>Manager - Limited Admin</option>
                      <option>Staff - Standard Access</option>
                      <option>View Only</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Permissions
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "View Users",
                      "Edit Users",
                      "Delete Users",
                      "Manage Roles",
                    ].map((perm, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-800 bg-slate-50 px-3 py-2 rounded-lg"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-400"
                        />
                        {perm}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Check size={16} />
                    Create Role
                  </button>
                  <button
                    onClick={() => setShowCreateForm(null)}
                    className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Departments */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Building size={20} className="text-cyan-600" />
            Departments
          </h3>
          {departments &&
            departments.map((dept, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-lg transition-all group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl shadow-md`}
                    >
                      {dept.icon || "🏢"}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {dept.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {dept.members || dept.memberCount} Members
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Role Groups */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Shield size={20} className="text-cyan-600" />
            Role Groups
          </h3>
          {roleGroups &&
            roleGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">
                      {group.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold">
                      {group.count} Users
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white text-xs font-bold shadow-sm`}
                  >
                    {group.roles.length} Roles
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.roles.map((role, roleIdx) => (
                    <span
                      key={roleIdx}
                      className="px-2 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsDepartments;
