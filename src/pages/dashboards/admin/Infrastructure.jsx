/**
 * @component Infrastructure
 * @description Infrastructure & Resource Management - Asset tracking and facility management
 */
import React, { useState } from 'react';
import { 
  Package, Calendar, Wrench, AlertTriangle, Download, Plus, Edit,
  Trash2, Eye, CheckCircle, XCircle, Clock, TrendingUp, BarChart3,
  Book, Monitor, FlaskConical, Bus, Building, Users, DollarSign,
  Filter, Search, RefreshCcw, Settings, Award, Shield, Activity,
  FileText, Camera, Printer, Coffee, Laptop, Smartphone, Tablet,
  Grid, List, Bell, AlertCircle, PlayCircle, PauseCircle, User
} from 'lucide-react';

const Infrastructure = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Inventory Categories
  const categories = [
    { id: 'lab', name: 'Lab Equipment', icon: <FlaskConical size={20} />, count: 156, color: 'blue' },
    { id: 'books', name: 'Library Books', icon: <Book size={20} />, count: 8945, color: 'purple' },
    { id: 'devices', name: 'Digital Devices', icon: <Monitor size={20} />, count: 234, color: 'cyan' },
    { id: 'furniture', name: 'Furniture', icon: <Building size={20} />, count: 567, color: 'amber' },
    { id: 'sports', name: 'Sports Equipment', icon: <Award size={20} />, count: 289, color: 'green' },
    { id: 'transport', name: 'Transportation', icon: <Bus size={20} />, count: 8, color: 'pink' }
  ];

  // Inventory Items
  const inventoryItems = [
    {
      id: 'INV001',
      name: 'Chemistry Lab Microscope',
      category: 'lab',
      quantity: 25,
      minQuantity: 20,
      condition: 'Good',
      location: 'Science Lab A',
      lastMaintenance: '2025-12-15',
      nextMaintenance: '2026-06-15',
      cost: '₹85,000',
      acquiredDate: '2023-08-20',
      status: 'Available',
      assignedTo: null
    },
    {
      id: 'INV002',
      name: 'Class 10 Physics Textbooks',
      category: 'books',
      quantity: 185,
      minQuantity: 150,
      condition: 'Good',
      location: 'Library - Section D',
      lastMaintenance: null,
      nextMaintenance: null,
      cost: '₹92,500',
      acquiredDate: '2025-06-01',
      status: 'Available',
      assignedTo: null
    },
    {
      id: 'INV003',
      name: 'Dell Latitude Laptops',
      category: 'devices',
      quantity: 45,
      minQuantity: 40,
      condition: 'Excellent',
      location: 'IT Lab',
      lastMaintenance: '2026-01-05',
      nextMaintenance: '2026-07-05',
      cost: '₹22,50,000',
      acquiredDate: '2024-09-15',
      status: 'Available',
      assignedTo: null
    },
    {
      id: 'INV004',
      name: 'Digital Projectors',
      category: 'devices',
      quantity: 12,
      minQuantity: 15,
      condition: 'Good',
      location: 'Multi-Purpose Hall',
      lastMaintenance: '2025-11-20',
      nextMaintenance: '2026-05-20',
      cost: '₹6,00,000',
      acquiredDate: '2022-03-10',
      status: 'Low Stock',
      assignedTo: null
    },
    {
      id: 'INV005',
      name: 'Student Desks & Chairs',
      category: 'furniture',
      quantity: 450,
      minQuantity: 400,
      condition: 'Good',
      location: 'Multiple Classrooms',
      lastMaintenance: '2025-07-10',
      nextMaintenance: null,
      cost: '₹18,00,000',
      acquiredDate: '2023-04-01',
      status: 'Available',
      assignedTo: null
    },
    {
      id: 'INV006',
      name: 'Basketball Courts Equipment',
      category: 'sports',
      quantity: 35,
      minQuantity: 30,
      condition: 'Good',
      location: 'Sports Complex',
      lastMaintenance: '2025-12-01',
      nextMaintenance: '2026-06-01',
      cost: '₹1,25,000',
      acquiredDate: '2024-01-15',
      status: 'Available',
      assignedTo: null
    },
    {
      id: 'INV007',
      name: 'School Bus - KA 01 AB 1234',
      category: 'transport',
      quantity: 1,
      minQuantity: 1,
      condition: 'Excellent',
      location: 'School Parking',
      lastMaintenance: '2026-01-10',
      nextMaintenance: '2026-04-10',
      cost: '₹25,00,000',
      acquiredDate: '2024-05-20',
      status: 'In Use',
      assignedTo: 'Route 3 - Indiranagar'
    },
    {
      id: 'INV008',
      name: 'Chemistry Lab Beakers Set',
      category: 'lab',
      quantity: 8,
      minQuantity: 15,
      condition: 'Fair',
      location: 'Science Lab B',
      lastMaintenance: '2025-09-15',
      nextMaintenance: '2026-03-15',
      cost: '₹45,000',
      acquiredDate: '2022-11-10',
      status: 'Critical - Low Stock',
      assignedTo: null
    }
  ];

  // Resource Reservations
  const reservations = [
    {
      id: 'RES001',
      resource: 'Science Lab A',
      type: 'Facility',
      bookedBy: 'Dr. Sarah Johnson',
      department: 'Science',
      purpose: 'Grade 10 Chemistry Practical',
      date: '2026-01-22',
      timeSlot: '10:00 AM - 12:00 PM',
      status: 'Confirmed',
      students: 45
    },
    {
      id: 'RES002',
      resource: 'Auditorium',
      type: 'Facility',
      bookedBy: 'Michael Chen',
      department: 'Arts',
      purpose: 'Annual Day Rehearsal',
      date: '2026-01-23',
      timeSlot: '02:00 PM - 05:00 PM',
      status: 'Confirmed',
      students: 120
    },
    {
      id: 'RES003',
      resource: 'School Bus - Route 3',
      type: 'Transport',
      bookedBy: 'Emily Rodriguez',
      department: 'Administration',
      purpose: 'Field Trip - Science Museum',
      date: '2026-01-25',
      timeSlot: '08:00 AM - 04:00 PM',
      status: 'Pending Approval',
      students: 50
    },
    {
      id: 'RES004',
      resource: 'IT Lab',
      type: 'Facility',
      bookedBy: 'David Park',
      department: 'Computer Science',
      purpose: 'Coding Competition Practice',
      date: '2026-01-21',
      timeSlot: '03:00 PM - 05:00 PM',
      status: 'Confirmed',
      students: 30
    }
  ];

  // Maintenance Log
  const maintenanceLog = [
    {
      id: 'MAINT001',
      item: 'Dell Latitude Laptops',
      type: 'Preventive',
      description: 'Software updates and hardware check',
      scheduledDate: '2026-01-05',
      completedDate: '2026-01-05',
      technician: 'IT Support Team',
      cost: '₹12,000',
      status: 'Completed',
      priority: 'Medium'
    },
    {
      id: 'MAINT002',
      item: 'School Bus - KA 01 AB 1234',
      type: 'Preventive',
      description: 'Quarterly service and oil change',
      scheduledDate: '2026-01-10',
      completedDate: '2026-01-10',
      technician: 'Metro Motors',
      cost: '₹8,500',
      status: 'Completed',
      priority: 'High'
    },
    {
      id: 'MAINT003',
      item: 'Digital Projectors',
      type: 'Repair',
      description: 'Bulb replacement and lens cleaning',
      scheduledDate: '2026-01-20',
      completedDate: null,
      technician: 'TechFix Solutions',
      cost: '₹15,000',
      status: 'Scheduled',
      priority: 'High'
    },
    {
      id: 'MAINT004',
      item: 'Chemistry Lab Equipment',
      type: 'Preventive',
      description: 'Calibration and safety check',
      scheduledDate: '2026-02-05',
      completedDate: null,
      technician: 'LabCare Services',
      cost: '₹25,000',
      status: 'Scheduled',
      priority: 'Critical'
    },
    {
      id: 'MAINT005',
      item: 'Auditorium AC System',
      type: 'Repair',
      description: 'Cooling issue - compressor check',
      scheduledDate: '2026-01-18',
      completedDate: null,
      technician: 'CoolAir Services',
      cost: '₹35,000',
      status: 'Overdue',
      priority: 'Critical'
    }
  ];

  // Statistics
  const stats = {
    totalAssets: inventoryItems.reduce((sum, item) => sum + item.quantity, 0),
    totalValue: '₹7.58 Cr',
    lowStockItems: inventoryItems.filter(i => i.quantity <= i.minQuantity).length,
    maintenanceDue: maintenanceLog.filter(m => m.status === 'Scheduled' || m.status === 'Overdue').length,
    activeReservations: reservations.filter(r => r.status === 'Confirmed').length,
    monthlyMaintenanceCost: '₹95,500'
  };

  // Alerts
  const alerts = [
    ...inventoryItems.filter(i => i.quantity < i.minQuantity).map(i => ({
      type: 'shortage',
      severity: i.quantity / i.minQuantity < 0.5 ? 'critical' : 'warning',
      message: `${i.name} is running low (${i.quantity}/${i.minQuantity})`,
      item: i.name
    })),
    ...maintenanceLog.filter(m => m.status === 'Overdue').map(m => ({
      type: 'maintenance',
      severity: 'critical',
      message: `Overdue maintenance for ${m.item}`,
      item: m.item
    }))
  ];

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: 'bg-slate-100' };
    
    const colorMap = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'bg-blue-100', textColor: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: 'bg-purple-100', textColor: 'text-purple-600' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: 'bg-cyan-100', textColor: 'text-cyan-600' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: 'bg-amber-100', textColor: 'text-amber-600' },
      green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'bg-green-100', textColor: 'text-green-600' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: 'bg-pink-100', textColor: 'text-pink-600' }
    };
    return colorMap[category.color] || colorMap.blue;
  };

  const getStatusColor = (status) => {
    const statusMap = {
      'Available': 'bg-green-100 text-green-700 border-green-200',
      'In Use': 'bg-blue-100 text-blue-700 border-blue-200',
      'Low Stock': 'bg-amber-100 text-amber-700 border-amber-200',
      'Critical - Low Stock': 'bg-red-100 text-red-700 border-red-200',
      'Under Maintenance': 'bg-purple-100 text-purple-700 border-purple-200',
      'Confirmed': 'bg-green-100 text-green-700 border-green-200',
      'Pending Approval': 'bg-amber-100 text-amber-700 border-amber-200',
      'Completed': 'bg-green-100 text-green-700 border-green-200',
      'Scheduled': 'bg-blue-100 text-blue-700 border-blue-200',
      'Overdue': 'bg-red-100 text-red-700 border-red-200'
    };
    return statusMap[status] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const filteredInventory = inventoryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Asset Management
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Activity size={12} className="text-green-300 animate-pulse" />
                  System Active
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Infrastructure & Resource Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Track, allocate, and maintain all physical and digital school assets with real-time monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          SUMMARY STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Package size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalAssets}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Assets</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><DollarSign size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.totalValue}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Value</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform"><AlertTriangle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.lowStockItems}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Low Stock</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform"><Wrench size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.maintenanceDue}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Maintenance Due</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform"><Calendar size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{stats.activeReservations}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Reservations</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><TrendingUp size={16} /></div>
          </div>
          <p className="text-lg font-bold text-green-800">{stats.monthlyMaintenanceCost}</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Monthly Cost</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          ALERTS SECTION
          ======================================== */}
      {alerts.length > 0 && (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 border border-red-200 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-900">Active Alerts</h3>
              <p className="text-sm text-red-700">{alerts.length} items require attention</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {alerts.slice(0, 6).map((alert, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${
                alert.severity === 'critical' 
                  ? 'bg-red-100 border-red-200' 
                  : 'bg-amber-100 border-amber-200'
              }`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className={alert.severity === 'critical' ? 'text-red-600' : 'text-amber-600'} />
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${alert.severity === 'critical' ? 'text-red-800' : 'text-amber-800'}`}>
                      {alert.message}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">{alert.type === 'shortage' ? 'Inventory Alert' : 'Maintenance Alert'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================
          INVENTORY CATEGORIES
          ======================================== */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Package className="text-blue-500" size={24} />
          Inventory Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <Grid size={24} />
              <p className="font-bold text-sm">All Items</p>
              <p className="text-xs">{inventoryItems.length} items</p>
            </div>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {category.icon}
                <p className="font-bold text-sm text-center">{category.name}</p>
                <p className="text-xs">{category.count} items</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================
          TOOLBAR & SEARCH
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-blue-500/20">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              Add Item
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
          <button className="bg-gradient-to-br from-green-500 to-emerald-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex flex-col items-center gap-0.5 text-sm shadow-md shadow-green-500/20">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Utilization Report
            </div>
            <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
          </button>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inventory..."
              className="w-full md:w-64 pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-100 text-blue-600 border border-blue-200'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-100 text-blue-600 border border-blue-200'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          INVENTORY TRACKER
          ======================================== */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Inventory Tracker</h2>
            <p className="text-sm text-slate-500">{filteredInventory.length} items displayed</p>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInventory.map((item) => {
              const colors = getCategoryColor(item.category);
              return (
                <div key={item.id} className={`p-6 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all group bg-gradient-to-br from-white to-slate-50`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colors.icon} rounded-2xl`}>
                      {categories.find(c => c.id === item.category)?.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{item.location}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-500 mb-1">Quantity</p>
                      <p className={`text-lg font-bold ${
                        item.quantity <= item.minQuantity ? 'text-red-600' : 'text-green-600'
                      }`}>{item.quantity}</p>
                      <p className="text-[10px] text-slate-400">Min: {item.minQuantity}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-500 mb-1">Condition</p>
                      <p className="text-sm font-bold text-slate-700">{item.condition}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-slate-500">Cost</p>
                        <p className="font-bold text-slate-700">{item.cost}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Acquired</p>
                        <p className="font-bold text-slate-700">{item.acquiredDate}</p>
                      </div>
                    </div>
                  </div>

                  {item.nextMaintenance && (
                    <div className="bg-blue-50 p-2 rounded-lg mb-4 text-xs border border-blue-100">
                      <div className="flex items-center gap-2">
                        <Wrench size={12} className="text-blue-500" />
                        <p className="font-semibold text-blue-700">Next Maintenance: {item.nextMaintenance}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-all border border-blue-200 flex flex-col items-center">
                      <Eye size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                    <button className="py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-all border border-green-200 flex flex-col items-center">
                      <Edit size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                    <button className="py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                      <Trash2 size={14} />
                      <span className="text-[9px] text-slate-400 font-normal mt-0.5">(get in app)</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredInventory.map((item) => (
              <div key={item.id} className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 ${getCategoryColor(item.category).icon} rounded-lg`}>
                    {categories.find(c => c.id === item.category)?.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                        <p className="text-xs text-slate-500">{item.location}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500">Category</p>
                        <p className={`font-bold ${getCategoryColor(item.category).textColor}`}>{item.category.toUpperCase()}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Quantity</p>
                        <p className={`font-bold ${item.quantity <= item.minQuantity ? 'text-red-600' : 'text-green-600'}`}>
                          {item.quantity}/{item.minQuantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Condition</p>
                        <p className="font-bold text-slate-700">{item.condition}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Cost</p>
                        <p className="font-bold text-slate-700">{item.cost}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Acquired</p>
                        <p className="font-bold text-slate-700">{item.acquiredDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Next Maintenance</p>
                        <p className="font-bold text-blue-600">{item.nextMaintenance || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========================================
          RESOURCE RESERVATIONS
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Calendar className="text-purple-500" size={24} />
                Resource Reservations
              </h2>
              <p className="text-sm text-slate-500">Upcoming facility and transport bookings</p>
            </div>
            <button className="px-5 py-2.5 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Plus size={18} />
                New Booking
              </div>
              <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
            </button>
          </div>
        </div>

        <div className="p-8 space-y-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all bg-gradient-to-br from-white to-purple-50/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-800">{reservation.resource}</h3>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(reservation.status)}`}>
                      {reservation.status}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-200">
                      {reservation.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{reservation.purpose}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Booked By</p>
                      <div className="flex items-center gap-1">
                        <User size={12} className="text-purple-500" />
                        <p className="font-bold text-purple-600">{reservation.bookedBy}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Department</p>
                      <p className="font-bold text-slate-700">{reservation.department}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Date & Time</p>
                      <p className="font-bold text-slate-700">{reservation.date}</p>
                      <p className="text-[10px] text-slate-500">{reservation.timeSlot}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Students</p>
                      <div className="flex items-center gap-1">
                        <Users size={12} className="text-blue-500" />
                        <p className="font-bold text-blue-600">{reservation.students}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                    <Edit size={14} />
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================
          MAINTENANCE LOG
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-amber-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Wrench className="text-amber-500" size={24} />
                Maintenance Log & Cost Summary
              </h2>
              <p className="text-sm text-slate-500">Scheduled and completed maintenance activities</p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-white rounded-xl border border-amber-200 text-center">
                <p className="text-xs text-slate-500">This Month</p>
                <p className="text-lg font-bold text-amber-700">{stats.monthlyMaintenanceCost}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4">
          {maintenanceLog.map((log) => (
            <div key={log.id} className={`p-6 rounded-2xl border hover:shadow-lg transition-all ${
              log.status === 'Overdue' ? 'bg-red-50 border-red-200' :
              log.status === 'Scheduled' ? 'bg-blue-50 border-blue-200' :
              'bg-green-50 border-green-200'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-800">{log.item}</h3>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                      log.priority === 'Critical' ? 'bg-red-100 text-red-700 border-red-200' :
                      log.priority === 'High' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                      'bg-blue-100 text-blue-700 border-blue-200'
                    }`}>
                      {log.priority}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{log.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Type</p>
                      <p className="font-bold text-slate-700">{log.type}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Scheduled Date</p>
                      <p className="font-bold text-slate-700">{log.scheduledDate}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Completed Date</p>
                      <p className="font-bold text-slate-700">{log.completedDate || 'Pending'}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Technician</p>
                      <p className="font-bold text-blue-600">{log.technician}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-medium mb-1">Cost</p>
                      <p className="text-lg font-bold text-green-600">{log.cost}</p>
                    </div>
                  </div>
                </div>

                <button className="px-3 py-2 bg-white text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all border border-slate-200 flex flex-col items-center">
                  <Eye size={14} />
                  <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Infrastructure;
