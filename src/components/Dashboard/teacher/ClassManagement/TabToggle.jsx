import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CalendarCheck, LayoutGrid, UserX } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";

const ICON_MAP = {
  CalendarCheck,
  LayoutGrid,
  UserX,
};

const TabToggle = ({ activeTab, setActiveTab }) => {
  const tabs = TEACHER_DATA.classManagement.config.tabs;
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (id) => {
    if (id === "absence") {
      navigate("/dashboard/teacher/classes/absence");
    } else {
      if (location.pathname.includes("/absence")) {
        navigate("/dashboard/teacher/classes");
      }
      if (setActiveTab) setActiveTab(id);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm w-fit">
      {tabs.map(({ id, label, shortLabel, icon }) => {
        const Icon = ICON_MAP[icon];
        const isCurrentlyActive = location.pathname.includes("/absence")
          ? id === "absence"
          : activeTab === id;

        return (
          <button
            key={id}
            id={`tab-${id}`}
            onClick={() => handleTabClick(id)}
            className={`flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex-1 sm:flex-none justify-center ${
              isCurrentlyActive
                ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white shadow-lg scale-[1.02]"
                : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Icon size={13} className="shrink-0" />
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabToggle;
