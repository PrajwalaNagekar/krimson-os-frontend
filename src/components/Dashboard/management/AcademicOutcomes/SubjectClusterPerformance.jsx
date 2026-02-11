import React from "react";
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";

const SubjectClusterPerformance = ({ clusters }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Performance by Subject Cluster
            </h2>
            <p className="text-sm text-gray-600">
              Comparative analysis across academic domains
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {clusters.map((cluster, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                {cluster.name}
              </h3>
              <div className="flex items-center gap-2">
                {cluster.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <p
                  className={`text-4xl font-bold bg-gradient-to-r ${cluster.color} bg-clip-text text-transparent`}
                >
                  {cluster.currentTerm}%
                </p>
                <span className="text-sm text-gray-500">avg</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Previous: {cluster.previousTerm}%</span>
                <span
                  className={`font-semibold ${cluster.currentTerm > cluster.previousTerm ? "text-green-600" : "text-red-600"}`}
                >
                  ({cluster.currentTerm > cluster.previousTerm ? "+" : ""}
                  {(cluster.currentTerm - cluster.previousTerm).toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${cluster.color} transition-all`}
                style={{
                  width: `${(cluster.currentTerm / cluster.target) * 100}%`,
                }}
              ></div>
            </div>

            <div className="space-y-2 mb-4">
              {cluster.subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="text-xs text-gray-600 flex items-center gap-2"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${cluster.color}`}
                  ></div>
                  <span>{subject}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Students</p>
                <p className="font-bold text-gray-800">{cluster.students}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Top Score</p>
                <p className="font-bold text-gray-800">{cluster.topScore}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectClusterPerformance;
