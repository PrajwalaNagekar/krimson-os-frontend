import React from "react";
import HouseIdentity from "./HouseIdentity";
import HousePointsLog from "./HousePointsLog";

/**
 * House System Dashboard
 * Screen 21: House System Dashboard & Screen 22: House Points
 * Container component for the House System view.
 */
const HouseSystemDashboard = ({ houseSystemData }) => {
  if (!houseSystemData) return null;

  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-1 shadow-sm">
        <div className="bg-white rounded-[20px] p-1">
          {/* House Identity Section */}
          <HouseIdentity
            houseInfo={houseSystemData.info}
            stats={houseSystemData.stats}
          />
        </div>
      </div>

      {/* House Points Log Section */}
      <HousePointsLog pointsLog={houseSystemData.pointsLog} />
    </div>
  );
};

export default HouseSystemDashboard;
