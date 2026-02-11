import React from "react";
import TestCard from "./TestCard";

const TestGrid = ({ tests, setSelectedTest }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} setSelectedTest={setSelectedTest} />
      ))}
    </div>
  );
};

export default TestGrid;
