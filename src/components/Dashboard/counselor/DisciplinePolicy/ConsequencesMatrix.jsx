import React from "react";

const ConsequencesMatrix = ({ matrix, severityLevels }) => {
  const violationTypes = Object.keys(matrix);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Consequences Matrix
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          View consequences by violation type and severity level
        </p>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-50 border border-gray-200 font-semibold text-gray-700">
                Violation Type
              </th>
              {severityLevels.map((level) => (
                <th
                  key={level.level}
                  className={`text-left py-3 px-4 border border-gray-200 font-semibold ${level.bg} ${level.text}`}
                >
                  {level.level}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {violationTypes.map((violationType) => (
              <tr key={violationType} className="hover:bg-gray-50">
                <td className="py-3 px-4 border border-gray-200 font-semibold text-gray-800">
                  {violationType}
                </td>
                {severityLevels.map((level) => {
                  const consequence = matrix[violationType][level.level];
                  return (
                    <td
                      key={level.level}
                      className={`py-3 px-4 border border-gray-200 text-sm ${level.bg}/30`}
                    >
                      {consequence}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4">
        {violationTypes.map((violationType) => (
          <div
            key={violationType}
            className="border border-gray-200 rounded-xl p-4"
          >
            <h3 className="font-bold text-gray-800 mb-3">{violationType}</h3>
            <div className="space-y-2">
              {severityLevels.map((level) => {
                const consequence = matrix[violationType][level.level];
                return (
                  <div
                    key={level.level}
                    className={`p-3 rounded-lg ${level.bg}`}
                  >
                    <p className={`text-xs font-semibold mb-1 ${level.text}`}>
                      {level.level}
                    </p>
                    <p className="text-sm text-gray-700">{consequence}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsequencesMatrix;
