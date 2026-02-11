import React from "react";
import { Filter, Search, Download, Shield } from "lucide-react";

const AuditFilters = ({
  selectedFilter,
  setSelectedFilter,
  selectedUser,
  setSelectedUser,
  selectedDepartment,
  setSelectedDepartment,
  searchQuery,
  setSearchQuery,
  departments,
  users,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Filter className="text-blue-500" size={20} />
        Filter Activity Logs
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Action Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-2">
            Action Type
          </label>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
          >
            <option value="all">All Actions</option>
            <option value="CREATE">Create</option>
            <option value="EDIT">Edit</option>
            <option value="DELETE">Delete</option>
          </select>
        </div>

        {/* User Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-2">
            User
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
          >
            <option value="all">All Users</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        {/* Department Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-2">
            Department
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-semibold"
          >
            <option value="all">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-2">
            Search
          </label>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search logs..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button className="px-5 py-2.5 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center text-sm shadow-md shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <Download size={18} />
            Weekly Summary
          </div>
        </button>
        <button className="px-5 py-2.5 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center text-sm shadow-md shadow-purple-500/20">
          <div className="flex items-center gap-2">
            <Shield size={18} />
            PDPA Report
          </div>
        </button>
      </div>
    </div>
  );
};

export default AuditFilters;
