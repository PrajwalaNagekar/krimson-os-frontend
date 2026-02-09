import React, { useState, useEffect } from "react";
import { SYSTEM_ADMIN_DATA } from "../../../data/systemAdminData";
import SystemOverviewCards from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/SystemOverviewCards";
import ResourceUsageCharts from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/ResourceUsageCharts";
import ApiResponseHeatmap from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/ApiResponseHeatmap";
import SystemAlerts from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/SystemAlerts";
import DatabaseHealth from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/DatabaseHealth";
import CloudServiceLogs from "../../../components/dashboard/systemAdmin/SystemHealthMonitoring/CloudServiceLogs";

const SystemHealthMonitoring = () => {
  // Use centralized data for initial state
  const { initialMetrics, alerts, cloudLogs, databaseMetrics } =
    SYSTEM_ADMIN_DATA.systemHealth;

  const [systemData, setSystemData] = useState(initialMetrics);
  const [cpuHistory, setCpuHistory] = useState([]);
  const [memoryHistory, setMemoryHistory] = useState([]);
  const [apiHeatmap, setApiHeatmap] = useState([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemData((prev) => ({
        ...prev,
        cpuUsage: Math.max(
          20,
          Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 10),
        ),
        memoryUsage: Math.max(
          50,
          Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 5),
        ),
        activeSessions: Math.max(
          100,
          Math.min(
            500,
            prev.activeSessions + Math.floor((Math.random() - 0.5) * 20),
          ),
        ),
        apiResponseTime: Math.max(
          50,
          Math.min(300, prev.apiResponseTime + (Math.random() - 0.5) * 30),
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Generate CPU history
  useEffect(() => {
    const history = Array.from({ length: 20 }, (_, i) => ({
      value: 30 + Math.random() * 40,
      index: i,
    }));
    setCpuHistory(history);
  }, []);

  // Update CPU history with current value
  useEffect(() => {
    setCpuHistory((prev) => {
      const updated = [
        ...prev.slice(1),
        { value: systemData.cpuUsage, index: prev.length },
      ];
      return updated;
    });
  }, [systemData.cpuUsage]);

  // Generate Memory history
  useEffect(() => {
    const history = Array.from({ length: 20 }, (_, i) => ({
      value: 50 + Math.random() * 30,
      index: i,
    }));
    setMemoryHistory(history);
  }, []);

  // Update Memory history with current value
  useEffect(() => {
    setMemoryHistory((prev) => {
      const updated = [
        ...prev.slice(1),
        { value: systemData.memoryUsage, index: prev.length },
      ];
      return updated;
    });
  }, [systemData.memoryUsage]);

  // Generate API Response Time Heatmap
  useEffect(() => {
    const heatmap = Array.from({ length: 42 }, (_, i) => ({
      latency: 50 + Math.random() * 200,
      index: i,
    }));
    setApiHeatmap(heatmap);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            System Health & Monitoring Dashboard
          </h1>
          <p className="text-slate-600">
            Real-time view of server uptime, database status, and API health
          </p>
        </div>

        {/* Top Metrics - Key Stats */}
        <SystemOverviewCards data={systemData} />

        {/* CPU & Memory Usage Graphs */}
        <ResourceUsageCharts
          cpuUsage={systemData.cpuUsage}
          memoryUsage={systemData.memoryUsage}
          cpuHistory={cpuHistory}
          memoryHistory={memoryHistory}
        />

        {/* API Response Time Heatmap & Error Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* API Response Time Heatmap */}
          <ApiResponseHeatmap
            apiResponseTime={systemData.apiResponseTime}
            heatmapData={apiHeatmap}
          />

          {/* Error & Downtime Alerts */}
          <SystemAlerts alerts={alerts} />
        </div>

        {/* Database & Cloud Service Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Database Status */}
          <DatabaseHealth
            diskUsage={systemData.diskUsage}
            staticMetrics={databaseMetrics}
          />

          {/* Cloud Service Logs */}
          <CloudServiceLogs logs={cloudLogs} />
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default SystemHealthMonitoring;
