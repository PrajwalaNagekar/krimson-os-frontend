import React, { useState } from "react";
import {
  CAFETERIA_DATA,
  INITIAL_MENU_DATA,
} from "../../../data/managementData";
import MenuItemModal from "../../../components/dashboard/management/CafeteriaManagement/MenuItemModal";
import CafeteriaHeader from "../../../components/dashboard/management/CafeteriaManagement/CafeteriaHeader";
import CafeteriaConfig from "../../../components/dashboard/management/CafeteriaManagement/CafeteriaConfig";
import CafeteriaStats from "../../../components/dashboard/management/CafeteriaManagement/CafeteriaStats";
import CafeteriaDayNav from "../../../components/dashboard/management/CafeteriaManagement/CafeteriaDayNav";
import MenuBuilder from "../../../components/dashboard/management/CafeteriaManagement/MenuBuilder";

/**
 * Screen 316: Cafeteria Menu Administration
 * Purpose: Allow school staff to create, manage, and publish cafeteria menus.
 */
const CafeteriaManagement = () => {
  const [menuPeriod, setMenuPeriod] = useState("Weekly"); // Weekly, Monthly, Custom
  const [status, setStatus] = useState("Draft"); // Draft, Published, Archived

  const handlePublish = () => {
    if (status === "Archived") return;
    setStatus("Published");
    // In a real app, this would hit an API to update visibility for students/parents
  };

  const handleArchive = () => {
    setStatus("Archived");
  };

  const [selectedGrades, setSelectedGrades] = useState([
    "Grade 1-5",
    "Grade 6-10",
  ]);
  const [activeDay, setActiveDay] = useState("Monday");

  const [menuData, setMenuData] = useState(INITIAL_MENU_DATA);

  const [showItemModal, setShowItemModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ meal: "", day: "" });

  const handleAddItemRequest = (meal) => {
    setModalConfig({ day: activeDay, meal });
    setShowItemModal(true);
  };

  const handleSaveItem = (newItem) => {
    const id = Date.now();
    const { day, meal } = modalConfig;

    setMenuData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: [...(prev[day][meal] || []), { ...newItem, id }],
      },
    }));
    setShowItemModal(false);
  };

  const handleDeleteItem = (day, meal, id) => {
    setMenuData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: prev[day][meal].filter((item) => item.id !== id),
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <MenuItemModal
        isOpen={showItemModal}
        config={modalConfig}
        onClose={() => setShowItemModal(false)}
        onSave={handleSaveItem}
      />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <CafeteriaHeader
          status={status}
          setStatus={setStatus}
          handlePublish={handlePublish}
          handleArchive={handleArchive}
        />

        {/* Configuration Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Period & Visibility Card */}
          <CafeteriaConfig
            menuPeriod={menuPeriod}
            setMenuPeriod={setMenuPeriod}
            selectedGrades={selectedGrades}
            setSelectedGrades={setSelectedGrades}
          />

          {/* Stats/Audit Card */}
          <CafeteriaStats />
        </div>

        {/* Day Navigation */}
        <CafeteriaDayNav activeDay={activeDay} setActiveDay={setActiveDay} />

        {/* Menu Builder Area */}
        <MenuBuilder
          activeDay={activeDay}
          menuData={menuData}
          onAddItemRequest={handleAddItemRequest}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default CafeteriaManagement;
