import React from "react";
import InventoryCard from "./InventoryCard";

const InventoryGrid = ({
  items,
  categories,
  getCategoryColor,
  getStatusColor,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <InventoryCard
          key={item.id}
          item={item}
          categories={categories}
          getCategoryColor={getCategoryColor}
          getStatusColor={getStatusColor}
        />
      ))}
    </div>
  );
};

export default InventoryGrid;
