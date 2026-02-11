import React from "react";
import { Building, BookOpen, Laptop } from "lucide-react";
import { OPERATIONAL_EFFICIENCY_DATA } from "../../../../data/managementData";

const ResourceUtilization = () => {
  const { resourceUtilization } = OPERATIONAL_EFFICIENCY_DATA;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <Building className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Resource Utilization
          </h2>
          <p className="text-sm text-gray-600">
            Labs, Rooms, and Equipment efficiency
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Labs */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-600" />
            Laboratory Utilization
          </h3>
          <div className="space-y-3">
            {resourceUtilization.labs.map((lab, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800 text-sm">
                    {lab.name}
                  </span>
                  <span
                    className={`text-lg font-bold ${lab.utilization >= 85 ? "text-green-600" : lab.utilization >= 70 ? "text-yellow-600" : "text-orange-600"}`}
                  >
                    {lab.utilization}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div
                    className={`h-full rounded-full transition-all ${lab.utilization >= 85 ? "bg-gradient-to-r from-green-400 to-emerald-500" : lab.utilization >= 70 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-orange-400 to-red-500"}`}
                    style={{ width: `${lab.utilization}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>
                    Avg: {lab.avgUsage}/{lab.capacity}
                  </span>
                  <span>{lab.sessionsPerWeek} sessions/wk</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-purple-600" />
            Room Utilization
          </h3>
          <div className="space-y-3">
            {resourceUtilization.rooms.map((room, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-800">
                    {room.type}
                  </span>
                  <span
                    className={`text-2xl font-bold ${room.utilization >= 90 ? "text-green-600" : room.utilization >= 70 ? "text-yellow-600" : "text-orange-600"}`}
                  >
                    {room.utilization}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                  <div
                    className={`h-full rounded-full transition-all ${room.utilization >= 90 ? "bg-gradient-to-r from-green-400 to-emerald-500" : room.utilization >= 70 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-orange-400 to-red-500"}`}
                    style={{ width: `${room.utilization}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {room.utilized}/{room.total} in use
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Laptop className="w-5 h-5 text-blue-600" />
            Equipment Status
          </h3>
          <div className="space-y-3">
            {resourceUtilization.equipment.map((equip, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800 text-sm">
                    {equip.item}
                  </span>
                  <span
                    className={`text-lg font-bold ${equip.utilization >= 90 ? "text-green-600" : equip.utilization >= 80 ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {equip.utilization}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div
                    className={`h-full rounded-full transition-all ${equip.utilization >= 90 ? "bg-gradient-to-r from-green-400 to-emerald-500" : equip.utilization >= 80 ? "bg-gradient-to-r from-yellow-400 to-orange-500" : "bg-gradient-to-r from-red-400 to-pink-500"}`}
                    style={{ width: `${equip.utilization}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="text-green-600">
                    {equip.working} working
                  </span>
                  <span className="text-red-600">
                    {equip.maintenance} maintenance
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUtilization;
