import React from "react";
import { LogOut } from "lucide-react";
import WithdrawalRequestItem from "./WithdrawalRequestItem";

const WithdrawalRequestList = ({
  filteredRequests,
  selectedStudent,
  setSelectedStudent,
}) => {
  if (filteredRequests.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-slate-400">
        <LogOut className="w-16 h-16 mb-4 opacity-50 mx-auto" />
        <p className="text-lg font-semibold">No withdrawal requests found</p>
        <p className="text-sm">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100">
      {filteredRequests.map((request, index) => (
        <WithdrawalRequestItem
          key={index}
          request={request}
          isExpanded={selectedStudent === request.id}
          onToggle={() =>
            setSelectedStudent(
              selectedStudent === request.id ? null : request.id,
            )
          }
        />
      ))}
    </div>
  );
};

export default WithdrawalRequestList;
