import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  Cpu, 
  Wifi, 
  AlertTriangle, 
  CheckCircle, 
  Database,
  Zap,
  TrendingUp,
  Clock,
  HardDrive,
  Users
} from 'lucide-react';

const SystemHealthMonitoring = () => {
  // Mock real-time data with state
  const [systemData, setSystemData] = useState({
    uptime: '99.9%',
    cpuUsage: 45,
    memoryUsage: 67,
    activeSessions: 234,
    apiResponseTime: 145,
    databaseStatus: 'Healthy',
    serverStatus: 'Online',
    diskUsage: 58
  });

  const [cpuHistory, setCpuHistory] = useState([]);
  const [memoryHistory, setMemoryHistory] = useState([]);
  const [apiHeatmap, setApiHeatmap] = useState([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemData(prev => ({
        ...prev,
        cpuUsage: Math.max(20, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(50, Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        activeSessions: Math.max(100, Math.min(500, prev.activeSessions + Math.floor((Math.random() - 0.5) * 20))),
        apiResponseTime: Math.max(50, Math.min(300, prev.apiResponseTime + (Math.random() - 0.5) * 30))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Generate CPU history
  useEffect(() => {
    const history = Array.from({ length: 20 }, (_, i) => ({
      value: 30 + Math.random() * 40,
      index: i
    }));
    setCpuHistory(history);
  }, []);

  // Update CPU history with current value
  useEffect(() => {
    setCpuHistory(prev => {
      const updated = [...prev.slice(1), { value: systemData.cpuUsage, index: prev.length }];
      return updated;
    });
  }, [systemData.cpuUsage]);

  // Generate Memory history
  useEffect(() => {
    const history = Array.from({ length: 20 }, (_, i) => ({
      value: 50 + Math.random() * 30,
      index: i
    }));
    setMemoryHistory(history);
  }, []);

  // Update Memory history with current value
  useEffect(() => {
    setMemoryHistory(prev => {
      const updated = [...prev.slice(1), { value: systemData.memoryUsage, index: prev.length }];
      return updated;
    });
  }, [systemData.memoryUsage]);

  // Generate API Response Time Heatmap
  useEffect(() => {
    const heatmap = Array.from({ length: 42 }, (_, i) => ({
      latency: 50 + Math.random() * 200,
      index: i
    }));
    setApiHeatmap(heatmap);
  }, []);

  const alerts = [
    { id: 1, type: 'warning', msg: 'High memory usage detected on Server 3', time: '5 mins ago', severity: 'medium' },
    { id: 2, type: 'error', msg: 'API endpoint /auth/login experiencing slow response', time: '12 mins ago', severity: 'high' },
    { id: 3, type: 'warning', msg: 'Database connection pool nearing limit', time: '1 hour ago', severity: 'medium' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">
            System Health & Monitoring Dashboard
          </h1>
          <p className="text-slate-600">Real-time view of server uptime, database status, and API health</p>
        </div>

        {/* Top Metrics - Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Server Uptime */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg">
                  <Server className="text-white" size={24} />
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                  Online
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Server Uptime</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {systemData.uptime}
              </p>
              <p className="text-xs text-slate-400 mt-2">Last 30 days</p>
            </div>
          </div>

          {/* CPU Usage */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  systemData.cpuUsage > 80 ? 'bg-red-100 text-red-700' : 
                  systemData.cpuUsage > 60 ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-green-100 text-green-700'
                }`}>
                  {systemData.cpuUsage > 80 ? 'High' : systemData.cpuUsage > 60 ? 'Medium' : 'Normal'}
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">CPU Usage</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(systemData.cpuUsage)}%
              </p>
              <p className="text-xs text-slate-400 mt-2">8 Cores Active</p>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-lg">
                  <HardDrive className="text-white" size={24} />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  systemData.memoryUsage > 85 ? 'bg-red-100 text-red-700' : 
                  systemData.memoryUsage > 70 ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-green-100 text-green-700'
                }`}>
                  {systemData.memoryUsage > 85 ? 'Critical' : systemData.memoryUsage > 70 ? 'Warning' : 'Good'}
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Memory Usage</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(systemData.memoryUsage)}%
              </p>
              <p className="text-xs text-slate-400 mt-2">16GB / 24GB Used</p>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl shadow-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                  <TrendingUp size={12} className="inline mr-1" />
                  Active
                </div>
              </div>
              <h3 className="text-slate-500 text-sm font-semibold mb-1">Active Sessions</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {systemData.activeSessions}
              </p>
              <p className="text-xs text-slate-400 mt-2">Concurrent Users</p>
            </div>
          </div>
        </div>

        {/* CPU & Memory Usage Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CPU Usage Graph */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Cpu className="text-blue-500" size={24} />
                    CPU Usage
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Real-time performance monitoring</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.round(systemData.cpuUsage)}%
                  </p>
                  <p className="text-xs text-slate-400">Current</p>
                </div>
              </div>

              {/* Graph */}
              <div className="h-48 flex items-end justify-between gap-1">
                {cpuHistory.map((point, i) => {
                  const height = (point.value / 100) * 100;
                  const isLast = i === cpuHistory.length - 1;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end group/bar">
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          isLast ? 'bg-gradient-to-t from-blue-500 to-purple-500 shadow-lg' : 
                          point.value > 80 ? 'bg-gradient-to-t from-red-400 to-red-500' :
                          point.value > 60 ? 'bg-gradient-to-t from-yellow-400 to-yellow-500' :
                          'bg-gradient-to-t from-blue-400 to-blue-500'
                        } opacity-70 group-hover/bar:opacity-100`}
                        style={{ height: `${height}%` }}
                        title={`${Math.round(point.value)}%`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-400 to-blue-500"></div>
                  <span className="text-slate-600">Normal (&lt;60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                  <span className="text-slate-600">Medium (60-80%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-red-400 to-red-500"></div>
                  <span className="text-slate-600">High (&gt;80%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Memory Usage Graph */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <HardDrive className="text-pink-500" size={24} />
                    Memory Usage
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">RAM allocation tracking</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.round(systemData.memoryUsage)}%
                  </p>
                  <p className="text-xs text-slate-400">Current</p>
                </div>
              </div>

              {/* Graph */}
              <div className="h-48 flex items-end justify-between gap-1">
                {memoryHistory.map((point, i) => {
                  const height = (point.value / 100) * 100;
                  const isLast = i === memoryHistory.length - 1;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end group/bar">
                      <div 
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          isLast ? 'bg-gradient-to-t from-pink-500 to-purple-500 shadow-lg' : 
                          point.value > 85 ? 'bg-gradient-to-t from-red-400 to-red-500' :
                          point.value > 70 ? 'bg-gradient-to-t from-yellow-400 to-yellow-500' :
                          'bg-gradient-to-t from-pink-400 to-pink-500'
                        } opacity-70 group-hover/bar:opacity-100`}
                        style={{ height: `${height}%` }}
                        title={`${Math.round(point.value)}%`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-pink-400 to-pink-500"></div>
                  <span className="text-slate-600">Good (&lt;70%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                  <span className="text-slate-600">Warning (70-85%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-red-400 to-red-500"></div>
                  <span className="text-slate-600">Critical (&gt;85%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Response Time Heatmap & Error Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* API Response Time Heatmap */}
          <div className="lg:col-span-1 group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Zap className="text-cyan-500" size={24} />
                  API Response Time
                </h3>
                <p className="text-sm text-slate-500 mt-1">Performance heatmap</p>
              </div>

              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-1">Average Latency</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {Math.round(systemData.apiResponseTime)}ms
                </p>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {apiHeatmap.map((cell, i) => {
                  let bgClass = 'bg-green-400';
                  if (cell.latency > 150) bgClass = 'bg-yellow-400';
                  if (cell.latency > 220) bgClass = 'bg-red-400';
                  
                  return (
                    <div 
                      key={i} 
                      className={`h-8 rounded-lg ${bgClass} opacity-70 hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-110`}
                      title={`Latency: ${Math.round(cell.latency)}ms`}
                    ></div>
                  );
                })}
              </div>

              {/* Heatmap Legend */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span className="text-slate-600">Fast</span>
                  </div>
                  <span className="text-slate-400">&lt;150ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                    <span className="text-slate-600">Medium</span>
                  </div>
                  <span className="text-slate-400">150-220ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded"></div>
                    <span className="text-slate-600">Slow</span>
                  </div>
                  <span className="text-slate-400">&gt;220ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Error & Downtime Alerts */}
          <div className="lg:col-span-2 group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-400 to-pink-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <AlertTriangle className="text-red-500" size={24} />
                    Error & Downtime Alerts
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Real-time system notifications</p>
                </div>
                <div className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-bold">
                  {alerts.length} Active
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                {alerts.length > 0 ? (
                  alerts.map((alert) => (
                    <div 
                      key={alert.id} 
                      className={`p-4 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-md ${
                        alert.type === 'error' 
                          ? 'bg-red-50/50 border-red-500' 
                          : 'bg-yellow-50/50 border-yellow-500'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-lg mt-1 ${
                            alert.type === 'error' ? 'bg-red-100' : 'bg-yellow-100'
                          }`}>
                            <AlertTriangle 
                              size={18} 
                              className={alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'}
                            />
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold text-sm mb-1 ${
                              alert.type === 'error' ? 'text-red-800' : 'text-yellow-800'
                            }`}>
                              {alert.msg}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {alert.time}
                              </span>
                              <span className={`px-2 py-1 rounded-full font-bold ${
                                alert.severity === 'high' 
                                  ? 'bg-red-200 text-red-700' 
                                  : 'bg-yellow-200 text-yellow-700'
                              }`}>
                                {alert.severity.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-xs font-bold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-not-allowed opacity-75 flex flex-col items-center leading-tight">
                          <span>Resolve</span>
                          <span className="text-[9px] opacity-60 font-normal">get in app</span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <CheckCircle className="mx-auto mb-3 text-green-500" size={48} />
                    <p className="font-bold text-slate-700 mb-1">All Systems Operational</p>
                    <p className="text-sm text-slate-500">No active alerts or errors detected</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Database & Cloud Service Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Database Status */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-400 to-cyan-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Database className="text-green-500" size={24} />
                    Database Status
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Connection health monitoring</p>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Healthy
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Connections</p>
                  <p className="text-2xl font-bold text-slate-800">124/200</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Query Time</p>
                  <p className="text-2xl font-bold text-slate-800">45ms</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Cache Hit Rate</p>
                  <p className="text-2xl font-bold text-slate-800">98.5%</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Disk Usage</p>
                  <p className="text-2xl font-bold text-slate-800">{systemData.diskUsage}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Service Logs */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <Activity className="text-blue-500" size={24} />
                    Cloud Service Logs
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Recent activity stream</p>
                </div>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {[
                  { time: '18:05:43', event: 'Backup completed successfully', status: 'success' },
                  { time: '18:03:21', event: 'API endpoint health check passed', status: 'success' },
                  { time: '17:58:15', event: 'New user authentication', status: 'info' },
                  { time: '17:55:02', event: 'Cache cleared for optimization', status: 'info' },
                  { time: '17:50:33', event: 'Database maintenance completed', status: 'success' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${
                      log.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-700 font-medium">{log.event}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
