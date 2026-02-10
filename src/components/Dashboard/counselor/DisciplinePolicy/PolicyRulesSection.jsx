import React, { useState } from "react";
import { Search, Filter, Eye, Edit, XCircle } from "lucide-react";

const PolicyRulesSection = ({ rules, severityLevels }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(rules.map((rule) => rule.category))];

  // Filter rules
  const filteredRules = rules.filter((rule) => {
    const matchesCategory =
      selectedCategory === "All" || rule.category === selectedCategory;
    const matchesSearch =
      rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get severity styling
  const getSeverityStyle = (severity) => {
    const level = severityLevels.find((s) => s.level === severity);
    return level || severityLevels[0];
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Policy Rules
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {filteredRules.length} active policies
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search policies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rules Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Policy ID
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Severity
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Effective Date
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRules.map((rule) => {
              const severityStyle = getSeverityStyle(rule.severity);
              return (
                <tr
                  key={rule.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="font-mono text-sm text-gray-600">
                      {rule.id}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">{rule.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {rule.description}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-700">
                      {rule.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${severityStyle.badge} ${severityStyle.text}`}
                    >
                      {rule.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">
                      {rule.effectiveDate}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg text-green-600 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors">
                        <XCircle size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredRules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No policies found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default PolicyRulesSection;
