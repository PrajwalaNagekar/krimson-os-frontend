import React from "react";
import { Globe, Users, MapPin } from "lucide-react";

const Demographics = ({ nationalityData, genderData, regionData }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Nationality */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Nationality</h3>
            <p className="text-xs text-gray-600">Distribution</p>
          </div>
        </div>

        <div className="space-y-3">
          {nationalityData.map((demo, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800 text-sm">
                  {demo.nationality}
                </span>
                <span className="text-sm font-bold text-gray-700">
                  {demo.count}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-gray-600">
                  {demo.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Gender</h3>
            <p className="text-xs text-gray-600">Distribution</p>
          </div>
        </div>

        <div className="space-y-4">
          {genderData.map((demo, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-800">{demo.gender}</h4>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                  {demo.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 mb-2">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                  style={{ width: `${demo.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{demo.count} students</p>
            </div>
          ))}
        </div>
      </div>

      {/* Region */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Region</h3>
            <p className="text-xs text-gray-600">Distribution</p>
          </div>
        </div>

        <div className="space-y-3">
          {regionData.map((demo, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800 text-sm">
                  {demo.region}
                </span>
                <span className="text-sm font-bold text-gray-700">
                  {demo.count}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-gray-600">
                  {demo.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demographics;
