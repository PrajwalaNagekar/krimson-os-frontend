import React from "react";
import CommunicationTabs from "./CommunicationTabs";
import CommunicationSearch from "./CommunicationSearch";
import CommunicationList from "./CommunicationList";

const CommunicationSidebar = ({
  showMobileList,
  activeTab,
  setActiveTab,
  resetSelection,
  searchQuery,
  setSearchQuery,
  filteredData,
  selectedThread,
  onSelectThread,
}) => {
  return (
    <div
      className={`${showMobileList ? "flex" : "hidden lg:flex"} w-full lg:w-[400px] xl:w-[420px] flex-col gap-3 md:gap-4 lg:gap-5 transition-all duration-300`}
    >
      {/* Tabs */}
      <CommunicationTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resetSelection={resetSelection}
      />

      {/* Search & Filter */}
      <CommunicationSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <CommunicationList
          data={filteredData}
          activeTab={activeTab}
          selectedThread={selectedThread}
          onSelectThread={onSelectThread}
        />
      </div>
    </div>
  );
};

export default CommunicationSidebar;
