import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, Map } from "lucide-react";
import { TEACHER_DATA } from "../../../../data/teacherData";
import WeeklyTimetable from "../../../../components/dashboard/teacher/ClassManagement/ClassDetail/WeeklyTimetable";
import AnnualTimetable from "../../../../components/dashboard/teacher/ClassManagement/ClassDetail/AnnualTimetable";

const ClassDetail = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("weekly");

  // Mock checking DB for the detailed class
  const classObj = TEACHER_DATA.classManagement.myClasses.find(
    (c) => c.id === classId,
  );

  if (!classObj) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-slate-500">
        <p className="mb-4">Class not found.</p>
        <button
          onClick={() => navigate("/dashboard/teacher/classes")}
          className="text-blue-500 font-bold hover:underline"
        >
          Return to Class Management
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ── Breadcrumb and Header Banner ── */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl px-7 py-5 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-8 -mb-8 pointer-events-none" />

        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-white/70 mb-3 flex-wrap">
          <button
            onClick={() => navigate("/dashboard/teacher/classes")}
            className="hover:text-white transition-colors"
          >
            Class Management
          </button>
          <ChevronRight size={12} />
          <button
            onClick={() => navigate("/dashboard/teacher/classes")}
            className="hover:text-white transition-colors"
          >
            My Classes
          </button>
          <ChevronRight size={12} />
          <span className="text-white font-black">{classObj.grade}</span>
        </div>

        {/* Title Row */}
        <div className="relative z-10 flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard/teacher/classes")}
            className="flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/30 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft size={17} />
          </button>
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1 px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.18em] ring-1 ring-white/20">
              {classObj.subject}
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none">
              {classObj.grade} — {classObj.section || classObj.subject}
            </h1>
          </div>
        </div>
      </div>

      {/* ── 3 Tab Toggle Buttons ── */}
      <div className="flex flex-wrap gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-sm md:w-fit">
        <button
          onClick={() => setActiveTab("weekly")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[12px] font-black uppercase tracking-wider transition-all duration-300 ${
            activeTab === "weekly"
              ? "bg-blue-50 text-blue-600 shadow-sm border border-blue-100"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          }`}
        >
          <Calendar size={14} /> Weekly Timetable
        </button>
        <button
          onClick={() => setActiveTab("annual")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[12px] font-black uppercase tracking-wider transition-all duration-300 ${
            activeTab === "annual"
              ? "bg-cyan-50 text-cyan-600 shadow-sm border border-cyan-100"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          }`}
        >
          <Map size={14} /> Annual Plan
        </button>
      </div>

      {/* ── Tab Content ── */}
      <div className="bg-transparent rounded-2xl">
        {activeTab === "weekly" && <WeeklyTimetable classInfo={classObj} />}
        {activeTab === "annual" && <AnnualTimetable classInfo={classObj} />}
      </div>
    </div>
  );
};

export default ClassDetail;
