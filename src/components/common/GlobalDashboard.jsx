import React, { useState } from "react";
import GridLayout from "react-grid-layout";
const { Responsive, WidthProvider } = GridLayout;
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Import Widgets
import StatWidget from "../../components/dashboard/global/StatWidget";
import AttendanceWidget from "../../components/dashboard/global/AttendanceWidget";
import FinanceWidget from "../../components/dashboard/global/FinanceWidget";
import AcademicWidget from "../../components/dashboard/global/AcademicWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

/**
 * Common Screen 3: Global Dashboard Overview
 * Roles: Admin, Principal, Management, Finance, System Admin
 * 
 * Used in:
 * - src/pages/dashboards/GlobalDashboard.jsx (Original location, now moved here)
 * - src/routes/AdminRoutes.jsx (Route /dashboard/global or similar)
 * 
 * Logic:
 * - Central visual summary with role-filtered widgets.
 * - Draggable and Resizable layout.
 */
const GlobalDashboard = () => {
  // Default Layouts
  const defaultLayouts = {
    lg: [
      { i: "stat-students", x: 0, y: 0, w: 3, h: 4 },
      { i: "stat-teachers", x: 3, y: 0, w: 3, h: 4 },
      { i: "stat-classes", x: 6, y: 0, w: 3, h: 4 },
      { i: "attendance", x: 9, y: 0, w: 3, h: 8 },
      { i: "finance", x: 0, y: 4, w: 5, h: 7 },
      { i: "academic", x: 5, y: 4, w: 4, h: 7 },
    ],
    md: [
      { i: "stat-students", x: 0, y: 0, w: 2, h: 4 },
      { i: "stat-teachers", x: 2, y: 0, w: 2, h: 4 },
      { i: "stat-classes", x: 4, y: 0, w: 2, h: 4 },
      { i: "attendance", x: 6, y: 0, w: 2, h: 8 },
      { i: "finance", x: 0, y: 4, w: 4, h: 7 },
      { i: "academic", x: 4, y: 4, w: 4, h: 7 },
    ],
    sm: [
      { i: "stat-students", x: 0, y: 0, w: 6, h: 3 },
      { i: "stat-teachers", x: 0, y: 3, w: 6, h: 3 },
      { i: "stat-classes", x: 0, y: 6, w: 6, h: 3 },
      { i: "attendance", x: 0, y: 9, w: 6, h: 6 },
      { i: "finance", x: 0, y: 15, w: 6, h: 6 },
      { i: "academic", x: 0, y: 21, w: 6, h: 6 },
    ],
  };

  const [layouts, setLayouts] = useState(defaultLayouts);

  const onLayoutChange = (currentLayout, allLayouts) => {
    setLayouts(allLayouts);
    // Note: In a real app, you would save 'allLayouts' to local storage or DB here
    console.log("Layout saved:", allLayouts);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      {/* Premium Gradient Header */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        
        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Global View
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Global Overview
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Real-time insights across the institution with customizable widgets
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        margin={[20, 20]}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={onLayoutChange}
        draggableHandle=".cursor-grab" // Only drag from specific handle areas if needed, or remove to drag entire widget
      >
        {/* Stats Row */}
        <div key="stat-students">
          <StatWidget title="Total Students" count="2,543" type="student" />
        </div>
        <div key="stat-teachers">
          <StatWidget title="Total Teachers" count="184" type="teacher" />
        </div>
        <div key="stat-classes">
          <StatWidget title="Active Classes" count="42" type="class" />
        </div>

        {/* Right Column Widget (Tall) */}
        <div key="attendance">
          <AttendanceWidget />
        </div>

        {/* Bottom Row Widgets */}
        <div key="finance">
          <FinanceWidget />
        </div>
        <div key="academic">
          <AcademicWidget />
        </div>
      </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default GlobalDashboard;
