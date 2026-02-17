import React, { useState, useEffect } from "react";
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

  // Default child preference (stored in localStorage)
  const [defaultChildId, setDefaultChildId] = useState(() => {
    return localStorage.getItem("defaultChildId") || null;
  });

  // Initialize selected child to default on mount
  useEffect(() => {
    if (defaultChildId && children.length > 0) {
      const defaultIndex = children.findIndex(
        (child) => child.id === defaultChildId,
      );
      if (defaultIndex !== -1 && defaultIndex !== selectedChildIndex) {
        setSelectedChildIndex(defaultIndex);
      }
    }
  }, []);

  // Future API: Fetch children data via parent ID
  const fetchChildrenData = () => {
    console.log("Future API: GET /api/parent/children");
  };

  // Handler to set default child
  const handleSetDefault = (childId) => {
    setDefaultChildId(childId);
    localStorage.setItem("defaultChildId", childId);
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
        onSetDefault={handleSetDefault}
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
