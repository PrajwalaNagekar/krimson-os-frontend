import React, { Activity, useState } from 'react';
import {
    Bus, MapPin, Clock, Users, Plus, Search, Filter,
    ChevronRight, Edit2, GripVertical, Trash2, Calendar,
    MoreVertical, CheckCircle2, AlertCircle, X, ArrowRight,
    UserCheck, Settings, Shield, UserPlus, Info, Navigation,
    Save, AlertTriangle, ArrowLeft, MoreHorizontal, Layout,
    Layers, Map, Timer, Route,
    Zap,
    Lightbulb,
    TrendingUp
} from 'lucide-react';

/**
 * Transport Management Module - Professional Edition
 * Design: Minimal, Operational, Fleet-Management Toned
 * Features:
 * - Route Setup (Search, Cards, Status)
 * - Create Route Modal (Step-based)
 * - Route Detail Side Panel (Configuration, Enhanced Stops list)
 * - Transport Roster (Assignments, Exceptions, Student Lists)
 */

const TransportManagement = () => {
    const [activeTab, setActiveTab] = useState('routes'); // 'routes' or 'roster'
    const [showRouteDetail, setShowRouteDetail] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Page Header - Strategic Style */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-2xl shadow-lg group-hover:rotate-6 transition-transform">
                                    <Bus size={24} />
                                </div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                                    Transport Intelligence
                                </h1>
                            </div>
                            <p className="text-slate-500 font-medium ml-1">Spatial logistics and fleet manifest management.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Tab Switcher - Segmented Control Style */}
                            <div className="flex bg-slate-200/50 p-1 rounded-xl border border-slate-300/50">
                                <button
                                    onClick={() => setActiveTab('routes')}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'routes'
                                        ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    <Route size={16} />
                                    <span>Routes</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('roster')}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === 'roster'
                                        ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    <Calendar size={16} />
                                    <span>Roster</span>
                                </button>
                            </div>

                            {activeTab === 'routes' && (
                                <button
                                    onClick={() => setShowCreateModal(true)}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold shadow-sm hover:bg-slate-800 transition-all border border-slate-900"
                                >
                                    <Plus size={18} />
                                    <span>Create Route</span>
                                </button>
                            )}
                        </div>
                    </div>

                </div>

                {/* Content Area */}
                <div className="animate-fadeIn">
                    {activeTab === 'routes' ? (
                        <RoutesSetupView
                            onRouteSelect={(route) => {
                                setSelectedRoute(route);
                                setShowRouteDetail(true);
                            }}
                        />
                    ) : (
                        <RosterView />
                    )}
                </div>

                {/* Create Route Modal */}
                {showCreateModal && (
                    <CreateRouteModal onClose={() => setShowCreateModal(false)} />
                )}

                {/* Route Detail Panel */}
                {showRouteDetail && (
                    <RouteDetailPanel
                        route={selectedRoute}
                        onClose={() => setShowRouteDetail(false)}
                    />
                )}
            </div>
        </div>
    );
};

// --- SUB-COMPONENTS ---

/**
 * Screen 314: Transport Routes Overview
 */
const RoutesSetupView = ({ onRouteSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const routes = [
        { id: 'R-101', name: 'Downtown Express', type: 'Bus', vehicle: 'MH-12-AB-1234', stops: 12, duration: '45 mins', status: 'Active', distance: '12.4 km' },
        { id: 'R-102', name: 'Westside Loop', type: 'Van', vehicle: 'MH-12-XY-5678', stops: 8, duration: '30 mins', status: 'Active', distance: '8.2 km' },
        { id: 'R-103', name: 'East Boundary', type: 'Bus', vehicle: 'MH-12-BT-9012', stops: 15, duration: '60 mins', status: 'Inactive', distance: '18.7 km' },
        { id: 'R-104', name: 'North Connector', type: 'Bus', vehicle: 'MH-12-CC-3456', stops: 10, duration: '40 mins', status: 'Active', distance: '10.5 km' },
    ];

    return (
        <div className="space-y-6">
            {/* Filtering Header - Glass Style */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-xl">
                <div className="relative flex-1 w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search route name, ID, or vehicle..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/50 border border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <select className="bg-white/50 backdrop-blur-sm border border-slate-200 px-4 py-2.5 rounded-2xl text-sm font-medium text-slate-600 outline-none hover:border-slate-300">
                        <option>All Types</option>
                        <option>Bus</option>
                        <option>Van</option>
                    </select>
                </div>
            </div>

            {/* Routes Grid - Card Based Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {routes.map((route) => (
                    <div
                        key={route.id}
                        onClick={() => onRouteSelect(route)}
                        className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer group transition-all duration-300 flex flex-col overflow-hidden"
                    >
                        {/* Card Body */}
                        <div className="p-6 flex-1 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${route.status === 'Active' ? 'from-cyan-400 to-blue-500' : 'from-slate-400 to-slate-500'} text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                                    <Bus size={24} />
                                </div>
                                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border-2 ${route.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-slate-100 text-slate-700 border-slate-200'
                                    }`}>
                                    {route.status}
                                </div>
                            </div>

                            <div>
                                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{route.id}</span>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">{route.name}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                                        <MapPin size={16} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{route.stops} Stops</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-colors">
                                        <Timer size={16} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{route.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="px-6 py-4 bg-slate-50/50 border-t border-white/20 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                            <span className="text-[11px] font-bold text-slate-400 group-hover:text-white/80 transition-colors">Vehicle: {route.vehicle}</span>
                            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 group-hover:text-white transition-colors">
                                <span>Manage</span>
                                <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * Route Detail Panel - Enhanced Professional Sidebar
 */
const RouteDetailPanel = ({ route, onClose }) => {
    const [stops] = useState([
        { id: 1, name: 'Main Campus East Gate', pickup: '07:00 AM', drop: '04:30 PM', students: 12 },
        { id: 2, name: 'Blue Ridge Executive Heights', pickup: '07:15 AM', drop: '04:15 PM', students: 5 },
        { id: 3, name: 'Royal Garden Residences', pickup: '07:30 AM', drop: '04:00 PM', students: 8 },
        { id: 4, name: 'Global School Metro North', pickup: '07:45 AM', drop: '03:45 PM', students: 15 },
    ]);

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

            {/* Panel */}
            <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl h-full shadow-2xl flex flex-col animate-slideInRight border-l border-white/20">
                {/* Modern Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/20 bg-white/50 backdrop-blur-xl sticky top-0 z-20">
                    <div className="flex items-center gap-5">
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{route.id}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-[10px] font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-widest">Active Fleet Configuration</span>
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">{route.name}</h2>
                        </div>
                    </div>

                    <button
                        className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95"
                    >
                        <Save size={16} />
                        <span>Update Route</span>
                    </button>
                </div>

                {/* Panel Content - Scrollable */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">

                    {/* Section: Core Logistics */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                                <Layout size={16} />
                            </div>
                            <h3 className="font-bold text-slate-900 tracking-tight">Core Logistics</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                            <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assigned Vehicle</label>
                                <div className="relative group">
                                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                        <Bus size={14} />
                                    </div>
                                    <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all appearance-none cursor-pointer">
                                        <option>{route.vehicle}</option>
                                        <option>MH-12-XX-0000</option>
                                    </select>
                                    <ChevronRight size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Transport Fleet</label>
                                <div className="relative group">
                                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                                        <Layers size={14} />
                                    </div>
                                    <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all appearance-none">
                                        <option>{route.type}</option>
                                    </select>
                                    <ChevronRight size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-1.5 col-span-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Route Path Origin & Terminal</label>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 relative">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-500">
                                            <MapPin size={14} />
                                        </div>
                                        <input type="text" defaultValue="Central Station" className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all" />
                                    </div>
                                    <ArrowRight size={16} className="text-slate-300 shrink-0" />
                                    <div className="flex-1 relative">
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-500">
                                            <MapPin size={14} />
                                        </div>
                                        <input type="text" defaultValue="Main Campus" className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-800 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 outline-none transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Fleet Journey Plan (Stops) */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                                    <Map size={16} />
                                </div>
                                <h3 className="font-bold text-slate-900 tracking-tight">Fleet Journey Plan</h3>
                            </div>
                            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-100 text-slate-900 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-slate-200 transition-colors">
                                <Plus size={14} />
                                <span>Add Checkpoint</span>
                            </button>
                        </div>

                        <div className="space-y-0 relative">
                            {/* Vertical Connector Line */}
                            <div className="absolute left-[21px] top-6 bottom-6 w-0.5 bg-slate-100 pointer-events-none" />

                            {stops.map((stop, index) => (
                                <div key={stop.id} className="relative pl-14 pb-10 last:pb-0 group">
                                    {/* Stop Marker */}
                                    <div className="absolute left-0 top-1.5 w-11 h-11 flex items-center justify-center z-10">
                                        <div className={`w-3.5 h-3.5 rounded-full border-4 border-white shadow-md z-10 transition-transform group-hover:scale-125 ${index === 0 ? 'bg-emerald-500 ring-8 ring-emerald-50' :
                                            index === stops.length - 1 ? 'bg-rose-500 ring-8 ring-rose-50' :
                                                'bg-slate-800 ring-8 ring-slate-50'
                                            }`} />
                                    </div>

                                    {/* Stop Card */}
                                    <div className="bg-white rounded-2xl border border-slate-100 p-5 pr-12 shadow-sm relative group-hover:border-slate-300 group-hover:shadow-md transition-all">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-200 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                            <Trash2 size={16} />
                                        </button>

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Checkpoint {index + 1}</span>
                                                    <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded uppercase tracking-tighter">{stop.students} students</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    defaultValue={stop.name}
                                                    className="w-full bg-transparent font-bold text-slate-800 outline-none border-b border-transparent focus:border-slate-900 pb-0.5"
                                                />
                                            </div>

                                            <div className="flex gap-4 shrink-0">
                                                <div className="space-y-1">
                                                    <label className="text-[9px] uppercase font-bold text-slate-400 tracking-widest pl-1">Arrival</label>
                                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200/50">
                                                        <Clock size={12} className="text-slate-400" />
                                                        <input type="text" defaultValue={stop.pickup} className="w-16 text-xs font-bold text-slate-700 bg-transparent outline-none" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[9px] uppercase font-bold text-slate-400 tracking-widest pl-1">Departure</label>
                                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200/50">
                                                        <Clock size={12} className="text-slate-400" />
                                                        <input type="text" defaultValue={stop.drop} className="w-16 text-xs font-bold text-slate-700 bg-transparent outline-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Legend / Tip */}
                        <div className="mt-8 p-5 bg-slate-900 rounded-2xl flex gap-4 text-white shadow-xl shadow-slate-900/10">
                            <div className="shrink-0 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                <AlertTriangle size={18} className="text-amber-400" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm tracking-tight text-white/95 uppercase">Optimization Insight</h4>
                                <p className="text-[11px] text-white/60 leading-relaxed font-medium">
                                    Rerouting or reordering checkpoints will recalculate the entire journey duration. Ensure that arrival times allow for a 5-minute buffer per stop during peak traffic hours (07:00 AM - 08:30 AM).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * Screen 315: Transport Roster - Professional Log
 */
const RosterView = () => {
    const [selectedDate, setSelectedDate] = useState('2026-02-09');
    const [shift, setShift] = useState('Morning');
    const [expandedRoute, setExpandedRoute] = useState('R-101');

    const rosters = [
        {
            id: 'R-101',
            name: 'Downtown Express',
            vehicle: 'MH-12-AB-1234',
            driver: 'Rajesh Kumar',
            students: 24,
            status: 'Ready',
            attendant: 'Sunita Sharma',
            lastModified: '10 mins ago'
        },
        { id: 'R-102', name: 'Westside Loop', vehicle: 'MH-12-XY-5678', driver: 'Amit Singh', students: 15, status: 'Modified', lastModified: '2 hrs ago' },
        { id: 'R-104', name: 'North Connector', vehicle: 'MH-12-CC-3456', driver: 'Sanjay Patil', students: 32, status: 'Ready', lastModified: 'Just now' },
    ];

    return (
        <div className="space-y-6">
            {/* Roster Header/Controls - Glass Style */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-xl">
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                        <Calendar size={16} className="text-slate-400" />
                        <input
                            type="date"
                            className="bg-transparent text-sm font-bold text-slate-800 outline-none"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
                    <div className="flex bg-slate-200/50 p-1 rounded-xl">
                        {['Morning', 'Afternoon', 'Full Day'].map((s) => (
                            <button
                                key={s}
                                onClick={() => setShift(s)}
                                className={`px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all uppercase tracking-wider ${shift === s
                                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all flex items-center gap-2">
                        <Shield size={16} className="text-slate-400" />
                        <span>Lock Daily Manifest</span>
                    </button>
                </div>
            </div>

            {/* Roster Logs list */}
            <div className="space-y-4">
                {rosters.map((roster) => (
                    <div
                        key={roster.id}
                        className={`bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-300 ${expandedRoute === roster.id ? 'border-white/40 ring-4 ring-blue-500/10 shadow-2xl scale-[1.01]' : 'border-white/20 shadow-lg hover:shadow-xl hover:border-white/40'
                            }`}
                    >
                        {/* Log Summary */}
                        <div
                            className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                            onClick={() => setExpandedRoute(expandedRoute === roster.id ? null : roster.id)}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${expandedRoute === roster.id ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white border-transparent rotate-6 shadow-lg' : 'bg-slate-50 text-slate-400 border-slate-200'
                                    }`}>
                                    <Bus size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-none mb-2">{roster.name}</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 grayscale opacity-70">
                                            <Layers size={12} />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{roster.vehicle}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 grayscale opacity-70">
                                            <Users size={12} />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{roster.students} students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="hidden lg:block text-right">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1.5 italic">Manifest Status</p>
                                    <div className="flex items-center justify-end gap-2">
                                        <span className="text-[10px] text-slate-400 font-medium">Modified {roster.lastModified}</span>
                                        <span className={`w-2 h-2 rounded-full ${roster.status === 'Ready' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${roster.status === 'Ready' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-orange-100 text-orange-700 border-orange-200'
                                        }`}>
                                        {roster.status}
                                    </div>
                                    <div className={`p-2 rounded-xl transition-all ${expandedRoute === roster.id ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Operational Detail */}
                        {expandedRoute === roster.id && (
                            <div className="border-t border-slate-100 bg-slate-50/50 p-8 space-y-10 animate-fadeIn">

                                {/* 1. Fleet & Staff Detail (Compressed Layout) */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assigned Vehicle</label>
                                        <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                                            <option>{roster.vehicle}</option>
                                            <option>MH-12-XX-0000 (Standby)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Primary Operator</label>
                                        <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                                            <option>{roster.driver}</option>
                                            <option>Suresh Raina</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Medical/Safety Attendant</label>
                                        <select className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 outline-none focus:border-slate-900 transition-all appearance-none cursor-pointer">
                                            <option>{roster.attendant || 'Deploy Attendant'}</option>
                                            <option>Meera Bai</option>
                                        </select>
                                    </div>
                                </div>

                                {/* 2. Student Cargo Section - Manifest Table */}
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30 flex items-center justify-between">
                                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                            Manifest Allocation
                                        </h4>
                                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-[10px] uppercase tracking-wider hover:bg-slate-50 transition-all">
                                            <UserPlus size={14} />
                                            <span>Append Seat</span>
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-slate-50 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                                    <th className="px-6 py-4 font-bold">Passenger Name</th>
                                                    <th className="px-6 py-4 font-bold">Origin Checkpoint</th>
                                                    <th className="px-6 py-4 font-bold">Terminal Checkpoint</th>
                                                    <th className="px-6 py-4 font-bold text-center">Status</th>
                                                    <th className="px-6 py-4"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {[1, 2, 3].map((i) => (
                                                    <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                                                        <td className="px-6 py-4">
                                                            <span className="text-xs font-bold text-slate-800 block">Student Name {i}</span>
                                                            <span className="text-[9px] font-bold text-slate-400 uppercase">Grade 4-B | Male</span>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                                <span className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">Camp East Gate</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                                                <span className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">Blue Ridge Heights</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex justify-center">
                                                                <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest ${i === 3 ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                                                    }`}>
                                                                    {i === 3 ? 'De-allocated' : 'Boarded'}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <button className="p-2 text-slate-200 hover:text-rose-500 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                                        <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Inspect Entire Manifest (24 Students)</button>
                                    </div>
                                </div>

                                {/* 3. Operational Exception Block */}
                                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-5 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                                            <Shield size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Operational Protocol</h4>
                                            <p className="text-[10px] text-slate-400 font-medium">Log route anomalies or staff substitutes</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                                        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-white transition-all group">
                                            <div className="w-6 h-6 rounded flex items-center justify-center border-2 border-slate-300 group-hover:border-slate-900 transition-colors">
                                                <CheckCircle2 size={14} className="text-white bg-slate-900 rounded-px opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">Assign Substitute Fleet/Operator</span>
                                        </div>
                                        <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Incident Report Root Cause</label>
                                            <input type="text" placeholder="e.g. Engine service, Operator sick leave..." className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:bg-white focus:border-slate-900 outline-none transition-all placeholder:text-slate-300" />
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Manifest Control */}
                                <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-100">
                                    <button className="flex-1 py-3.5 px-6 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                        <AlertCircle size={16} className="text-rose-500" />
                                        Void Roster
                                    </button>
                                    <button className="flex-1 py-3.5 px-6 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/20 hover:translate-y-[-2px] hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                        <UserCheck size={18} />
                                        Commit Roster
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * Enhanced Step-based Create Route Modal
 */
const CreateRouteModal = ({ onClose }) => {
    const [step, setStep] = useState(1);
    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-xl bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-2xl overflow-hidden animate-scaleIn border border-white/20">

                {/* Step Progress Line */}
                <div className="h-2 w-full bg-slate-100/50 flex">
                    <div className={`h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-700 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
                </div>

                <div className="p-8 md:p-10 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Institutional Fleet Gateway</span>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight">
                                {step === 1 ? 'Logistics Definition' : step === 2 ? 'Journey Checkpoints' : 'Fleet Finalization'}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form Area based on Step */}
                    <div className="space-y-6">
                        {step === 1 && (
                            <div className="animate-fadeIn space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Internal Reference Name</label>
                                    <input type="text" placeholder="e.g. South Campus A-Block Express" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold focus:bg-white focus:border-slate-900 outline-none transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Fleet Category</label>
                                        <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-slate-900 transition-all">
                                            <option>Large Class-A Bus</option>
                                            <option>Mini-Bus</option>
                                            <option>Utility Van</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Daily Frequency</label>
                                        <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-slate-900 transition-all">
                                            <option>Morning only</option>
                                            <option>Drop only</option>
                                            <option>Reciprocal (Round-trip)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-fadeIn space-y-6">
                                <div className="p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center text-slate-400">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                                        <Map size={24} />
                                    </div>
                                    <p className="font-bold text-slate-500 text-sm">Design Journey Map</p>
                                    <p className="text-[10px] mt-1">Checkpoints will be configured in the next view</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-100">
                        {step > 1 && (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="flex-1 py-4 px-6 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                            >
                                Previous Step
                            </button>
                        )}
                        <button
                            onClick={() => step < 3 ? setStep(step + 1) : onClose()}
                            className="flex-[2] py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                        >
                            <span>{step === 3 ? 'Finalize Fleet Profile' : 'Proceed to Spatial Mapping'}</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportManagement;
