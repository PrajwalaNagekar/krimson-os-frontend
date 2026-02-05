import React, { useState, useEffect } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import OverallStats from "../../../components/dashboard/student/BehaviorLog/OverallStats";
import AchievementsLog from "../../../components/dashboard/student/BehaviorLog/AchievementsLog";
import ParticipationPoints from "../../../components/dashboard/student/BehaviorLog/ParticipationPoints";
import BehaviorWarnings from "../../../components/dashboard/student/BehaviorLog/BehaviorWarnings";
import AttendanceTrends from "../../../components/dashboard/student/AttendanceTracker/AttendanceTrends";
import PunctualityStats from "../../../components/dashboard/student/AttendanceTracker/PunctualityStats";
import EmotionalCheckIn from "../../../components/dashboard/student/BehaviorLog/EmotionalCheckIn";
import HouseSystemDashboard from "../../../components/dashboard/student/HouseSystem/HouseSystemDashboard";
import PeerAppreciationWall from "../../../components/dashboard/student/PeerAppreciation/PeerAppreciationWall";
import { LayoutDashboard, Shield, Heart } from "lucide-react";

/**
 * Student Behavior Log - Screen 11
 * Purpose: Feedback on punctuality, conduct, participation, and achievements
 * Future: Replace static data with Admin + Student Affairs APIs
 */
const BehaviorLog = () => {
  const [activeTab, setActiveTab] = useState("behavior"); // 'behavior' | 'house' | 'appreciation'
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ behavior: null, houseSystem: null });

  useEffect(() => {
    // Simulate API Call
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate delay

        // In a real API, these might be separate endpoints
        // Mapped to match the component's expected structure
        setData({
          behavior: STUDENT_DATA.behavior || {},
          // Correctly accessing houseSystem from dashboard object
          houseSystem: STUDENT_DATA.dashboard?.houseSystem || null,
        });
      } catch (error) {
        console.error("Failed to fetch behavior log data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  const { behavior, houseSystem } = data;

  // Use optional chaining or defaults to prevent errors if data is missing
  const attendanceTrends = behavior?.attendanceTrends || [];
  const punctuality = behavior?.punctuality || {
    onTime: 0,
    late: 0,
    percentage: 0,
  };
  const achievements = behavior?.achievements || [];
  const participation = behavior?.participationPoints || [];
  const warnings = behavior?.warnings || [];
  const emotionalCheckIns = behavior?.emotionalCheckIns || [];
  const peerAppreciation = behavior?.peerAppreciation || [];

  const formattedTrends = attendanceTrends.map((t) => ({
    percentage: t.attendance || t.percentage || 0,
    month: t.week || t.month || "",
  }));

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-xl w-full md:w-fit overflow-x-auto">
        <button
          onClick={() => setActiveTab("behavior")}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === "behavior"
              ? "bg-white text-slate-800 shadow-sm"
              : "text-slate-500 hover:text-slate-600"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          Behavior Log
        </button>
        <button
          onClick={() => setActiveTab("house")}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === "house"
              ? "bg-white text-slate-800 shadow-sm border border-slate-200"
              : "text-slate-500 hover:text-slate-600"
          }`}
        >
          <Shield className="w-4 h-4" />
          House System
        </button>
        <button
          onClick={() => setActiveTab("appreciation")}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            activeTab === "appreciation"
              ? "bg-white text-pink-600 shadow-sm border border-pink-100"
              : "text-slate-500 hover:text-pink-600"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${activeTab === "appreciation" ? "fill-pink-600" : ""}`}
          />
          Peer Appreciation
        </button>
      </div>

      {activeTab === "behavior" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Header - Overall Stats */}
          <OverallStats
            totalPoints={behavior?.totalPoints || 0}
            rank={behavior?.rank || 0}
            percentile={behavior?.percentile || 0}
          />

          {/* Positive Behavior Log - Achievements & Participation */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <AchievementsLog achievements={achievements} />

            <ParticipationPoints participationPoints={participation} />
          </div>

          {/* Warnings Section - Only show if warnings exist */}
          {warnings && warnings.length > 0 && (
            <BehaviorWarnings warnings={warnings} />
          )}

          {/* Emotional Check-in Section */}
          <EmotionalCheckIn emotionalCheckIns={emotionalCheckIns} />
        </div>
      )}

      {activeTab === "house" && (
        <HouseSystemDashboard houseSystemData={houseSystem} />
      )}

      {activeTab === "appreciation" && (
        <PeerAppreciationWall messages={peerAppreciation} />
      )}
    </div>
  );
};

export default BehaviorLog;
