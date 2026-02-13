import React from "react";
import StaffCard from "./StaffCard";
import EmptyStaffState from "./EmptyStaffState";

const StaffGrid = ({ filteredStaff }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">
          Digital Staff Directory
        </h2>
        <span className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {filteredStaff.length} Members
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <StaffCard key={member.id} member={member} />
        ))}
      </div>

      {filteredStaff.length === 0 && <EmptyStaffState />}
    </div>
  );
};

export default StaffGrid;
