import React from "react";
import { useOutletContext } from "react-router-dom";
import { PARENT_DATA, classAverages } from "../../../data/parentData";
import Header from "../../../components/dashboard/parent/ChildrenOverview/Header";
import QuickSwitch from "../../../components/dashboard/parent/ChildrenOverview/QuickSwitch";
import ChildProfileCard from "../../../components/dashboard/parent/ChildrenOverview/ChildProfileCard";

/**
 * Children Overview - Screen 2
 * Purpose: For parents with multiple children enrolled
 * Features: Child cards, quick switching, academic comparison graph
 * Future: Replace static data with Multi-Student Mapping API
 */
const ChildrenOverview = () => {
  const { children } = PARENT_DATA;
  const { selectedChildIndex, setSelectedChildIndex } = useOutletContext();
  const activeChild = children[selectedChildIndex];

  // Future API: Fetch children data via parent ID
  const fetchChildrenData = () => {
    console.log("Future API: GET /api/parent/children");
  };

  return (
    <div className="space-y-6">
      {/* Header with Parent Gradient */}
      <Header />

      {/* Quick Switch - Child Selector */}
      <QuickSwitch
        childrenData={children}
        selectedChildIndex={selectedChildIndex}
        setSelectedChildIndex={setSelectedChildIndex}
      />

      {/* Active Child Profile Card */}
      <ChildProfileCard
        activeChild={activeChild}
        classAverages={classAverages}
      />
    </div>
  );
};

export default ChildrenOverview;
