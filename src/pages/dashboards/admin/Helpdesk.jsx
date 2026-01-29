/**
 * @component Helpdesk
 * @description Internal helpdesk & ticket resolution system
 * @features Ticket categorization, SLA tracking, escalation management, comprehensive dashboard
 */
import React, { useState, useMemo } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  LifeBuoy, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Search,
  Filter,
  TrendingUp,
  Layers,
  Timer,
  AlertTriangle,
  Eye,
  UserPlus,
  Edit,
  CheckSquare,
  Download,
  Plus,
  X,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Helpdesk = () => {
  const { tickets } = ADMIN_DATA;
  const [activeTab, setActiveTab] = useState('all'); // all, open, closed
  const [categoryFilter, setCategoryFilter] = useState('All'); // All, Technical, Academic, HR, Finance
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ==================================================
  // COMPUTED STATISTICS
  // ==================================================
  const stats = useMemo(() => {
    const openTickets = tickets.filter(t => t.status !== 'Resolved');
    const closedTickets = tickets.filter(t => t.status === 'Resolved');
    const criticalOpen = openTickets.filter(t => t.priority === 'Critical').length;
    const highOpen = openTickets.filter(t => t.priority === 'High').length;
    const mediumOpen = openTickets.filter(t => t.priority === 'Medium').length;
    const lowOpen = openTickets.filter(t => t.priority === 'Low').length;

    // Average resolution time
    const resolvedWithTime = closedTickets.filter(t => t.resolutionTime);
    const avgResolution = resolvedWithTime.length > 0
      ? (resolvedWithTime.reduce((sum, t) => sum + t.resolutionTime, 0) / resolvedWithTime.length).toFixed(1)
      : 0;

    // SLA compliance (tickets resolved within 48 hours)
    const slaCompliant = closedTickets.filter(t => t.resolutionTime && t.resolutionTime <= 48).length;
    const slaRate = closedTickets.length > 0 ? Math.round((slaCompliant / closedTickets.length) * 100) : 0;

    // Category counts
    const technical = tickets.filter(t => t.category === 'Technical').length;
    const academic = tickets.filter(t => t.category === 'Academic').length;
    const hr = tickets.filter(t => t.category === 'HR').length;
    const finance = tickets.filter(t => t.category === 'Finance').length;

    return {
      total: tickets.length,
      open: openTickets.length,
      closed: closedTickets.length,
      criticalOpen,
      highOpen,
      mediumOpen,
      lowOpen,
      avgResolution,
      slaRate,
      technical,
      academic,
      hr,
      finance
    };
  }, [tickets]);

  // ==================================================
  // FILTERED TICKETS
  // ==================================================
  const filteredTickets = useMemo(() => {
    let filtered = tickets;

    // Filter by tab
    if (activeTab === 'open') {
      filtered = filtered.filter(t => t.status !== 'Resolved');
    } else if (activeTab === 'closed') {
      filtered = filtered.filter(t => t.status === 'Resolved');
    }

    // Filter by category
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(t => t.category === categoryFilter);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t =>
        t.id.toLowerCase().includes(query) ||
        t.subject.toLowerCase().includes(query) ||
        t.from.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [tickets, activeTab, categoryFilter, searchQuery]);

  // ==================================================
  // PAGINATION
  // ==================================================
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTickets.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTickets, currentPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [activeTab, categoryFilter, searchQuery]);

  // ==================================================
  // SLA COLOR HELPER
  // ==================================================
  const getSLAColor = (hoursElapsed) => {
    if (hoursElapsed < 24) return 'text-green-600 bg-green-50 border-green-200';
    if (hoursElapsed < 48) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getSLAIcon = (hoursElapsed) => {
    if (hoursElapsed < 24) return <CheckCircle size={14} />;
    if (hoursElapsed < 48) return <Clock size={14} />;
    return <AlertTriangle size={14} />;
  };

  // ==================================================
  // CATEGORY COLORS
  // ==================================================
  const getCategoryColor = (category) => {
    const colors = {
      Technical: 'bg-blue-50 text-blue-600 border-blue-200',
      Academic: 'bg-green-50 text-green-600 border-green-200',
      HR: 'bg-purple-50 text-purple-600 border-purple-200',
      Finance: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[category] || 'bg-slate-50 text-slate-600 border-slate-200';
  };

  // ==================================================
  // PRIORITY COLORS
  // ==================================================
  const getPriorityColor = (priority) => {
    const colors = {
      Critical: 'bg-red-50 text-red-700 border-red-200',
      High: 'bg-orange-50 text-orange-700 border-orange-200',
      Medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      Low: 'bg-slate-50 text-slate-600 border-slate-200'
    };
    return colors[priority] || 'bg-slate-50 text-slate-600 border-slate-200';
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Screen 15: Support & Operations
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <LifeBuoy size={12} className="text-yellow-300" />
                   24/7 Active
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Helpdesk & Ticket Resolution
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Comprehensive internal support system with SLA tracking, escalation management, and multi-category ticket resolution.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl flex items-center gap-4">
               <div>
                  <h3 className="text-4xl font-extrabold text-white text-center drop-shadow-md">
                     {stats.open}
                  </h3>
                  <p className="text-xs font-bold uppercase text-white/80 tracking-wide text-center">Open Tickets</p>
               </div>
               <div className="w-px h-10 bg-white/20"></div>
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                     <span className="w-2 h-2 rounded-full bg-red-400"></span> {stats.criticalOpen} Critical
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                     <span className="w-2 h-2 rounded-full bg-orange-400"></span> {stats.highOpen} High
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          STATISTICS CARDS
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Tickets */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20">
              <Layers className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">All Time</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.total}</h3>
          <p className="text-sm font-semibold text-slate-500">Total Tickets</p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-green-600 font-bold">{stats.closed} Resolved</span>
            <span className="text-orange-600 font-bold">{stats.open} Open</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* Average Resolution Time */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20">
              <Timer className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Avg Time</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.avgResolution}h</h3>
          <p className="text-sm font-semibold text-slate-500">Resolution Time</p>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-xs font-medium text-slate-400">Target: &lt; 24 hours</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* SLA Compliance */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">SLA Rate</span>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{stats.slaRate}%</h3>
          <p className="text-sm font-semibold text-slate-500">Compliance Rate</p>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full" style={{width: `${stats.slaRate}%`}}></div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20">
              <MessageSquare className="text-white" size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">By Category</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Technical</span>
              <span className="font-bold text-blue-600">{stats.technical}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Academic</span>
              <span className="font-bold text-green-600">{stats.academic}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">HR</span>
              <span className="font-bold text-purple-600">{stats.hr}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Finance</span>
              <span className="font-bold text-orange-600">{stats.finance}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <p className="text-xs text-center text-slate-400 font-medium">get in app</p>
          </div>
        </div>
      </div>

      {/* ========================================
          CATEGORY FILTER TABS
          ======================================== */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex flex-wrap gap-2">
          {['All', 'Technical', 'Academic', 'HR', 'Finance'].map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                categoryFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                  {category === 'Technical' && stats.technical}
                  {category === 'Academic' && stats.academic}
                  {category === 'HR' && stats.hr}
                  {category === 'Finance' && stats.finance}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================
          TOOLBAR & STATUS TABS
          ======================================== */}
      <div className="space-y-4">
        {/* Status Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Tickets
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'all' ? 'bg-white/20' : 'bg-slate-100'}`}>
              {stats.total}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('open')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'open'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Open Tickets
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'open' ? 'bg-white/20' : 'bg-slate-100'}`}>
              {stats.open}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('closed')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'closed'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Closed Tickets
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'closed' ? 'bg-white/20' : 'bg-slate-100'}`}>
              {stats.closed}
            </span>
          </button>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                 type="text" 
                 placeholder="Search by ticket ID, subject, or submitter..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
              />
           </div>
           <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30">
                 <div className="flex items-center gap-2">
                   <Plus size={18} />
                   <span>Create Ticket</span>
                 </div>
                 <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
              </button>
              <button className="flex-1 md:flex-none flex flex-col items-center justify-center gap-0.5 px-6 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200">
                 <div className="flex items-center gap-2">
                   <Download size={18} />
                   <span className="hidden md:inline">Export Report</span>
                 </div>
                 <span className="text-[10px] opacity-75 font-normal leading-none">get in app</span>
              </button>
           </div>
        </div>
      </div>

      {/* ========================================
          TICKETS TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Ticket Details</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Category</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Submitted By</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Priority</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">SLA Status</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {paginatedTickets.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="p-12 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-4 rounded-full bg-slate-100">
                            <AlertCircle className="text-slate-400" size={32} />
                          </div>
                          <p className="text-lg font-bold text-slate-400">No tickets found</p>
                          <p className="text-sm text-slate-400">Try adjusting your filters or search query</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedTickets.map(ticket => (
                      <tr key={ticket.id} className="hover:bg-blue-50/20 transition-colors group">
                         <td className="p-5">
                            <div className="flex flex-col">
                               <span className="font-bold text-slate-800 text-base mb-1">{ticket.subject}</span>
                               <div className="flex items-center gap-2">
                                 <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                                    #{ticket.id}
                                 </span>
                                 {ticket.escalated && (
                                   <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                                     <AlertTriangle size={12} />
                                     Escalated {ticket.escalationLevel}
                                   </span>
                                 )}
                               </div>
                            </div>
                         </td>
                         <td className="p-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getCategoryColor(ticket.category)}`}>
                               <Layers size={14} />
                               {ticket.category}
                            </span>
                         </td>
                         <td className="p-5">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                  {ticket.from.charAt(0)}
                               </div>
                               <div>
                                  <p className="text-sm font-bold text-slate-700">{ticket.from}</p>
                                  <p className="text-xs text-slate-400">{ticket.fromRole}</p>
                               </div>
                            </div>
                         </td>
                         <td className="p-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getPriorityColor(ticket.priority)}`}>
                               <AlertCircle size={14} />
                               {ticket.priority}
                            </span>
                         </td>
                         <td className="p-5">
                            {ticket.status === 'Resolved' ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border bg-green-50 text-green-600 border-green-200">
                                <CheckCircle size={14} />
                                Resolved in {ticket.resolutionTime}h
                              </span>
                            ) : (
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getSLAColor(ticket.hoursElapsed)}`}>
                                {getSLAIcon(ticket.hoursElapsed)}
                                {ticket.hoursElapsed}h elapsed
                              </span>
                            )}
                         </td>
                         <td className="p-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                               ticket.status === 'Open' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                               'bg-green-50 text-green-600 border-green-100'
                            }`}>
                               {ticket.status === 'Open' ? <Clock size={14}/> : <CheckCircle size={14}/>}
                               {ticket.status}
                            </span>
                         </td>
                         <td className="p-5">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                 onClick={() => setSelectedTicket(ticket)}
                                 className="flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 text-sm"
                               >
                                 <Eye size={16} />
                                 <span>View</span>
                               </button>
                               {ticket.status !== 'Resolved' && (
                                 <button className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-green-500/20 text-sm">
                                   <CheckSquare size={16} />
                                   <span>Resolve</span>
                                 </button>
                               )}
                            </div>
                         </td>
                      </tr>
                    ))
                  )}
               </tbody>
            </table>
         </div>
      </div>

      {/* ========================================
          PAGINATION CONTROLS
          ======================================== */}
      {filteredTickets.length > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-600">
            Showing <span className="font-bold text-slate-800">{((currentPage - 1) * itemsPerPage) + 1}</span> to <span className="font-bold text-slate-800">{Math.min(currentPage * itemsPerPage, filteredTickets.length)}</span> of <span className="font-bold text-slate-800">{filteredTickets.length}</span> tickets
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                currentPage === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                currentPage === totalPages
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================
          TICKET DETAILS MODAL
          ======================================== */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 p-6 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Ticket Details</h2>
                <p className="text-white/80 text-sm font-mono">#{selectedTicket.id}</p>
              </div>
              <button 
                onClick={() => setSelectedTicket(null)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Subject */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Subject</h3>
                <p className="text-lg font-bold text-slate-800">{selectedTicket.subject}</p>
              </div>

              {/* Meta Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Category</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${getCategoryColor(selectedTicket.category)}`}>
                    {selectedTicket.category}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Priority</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${getPriorityColor(selectedTicket.priority)}`}>
                    {selectedTicket.priority}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Status</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${
                    selectedTicket.status === 'Resolved' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                  }`}>
                    {selectedTicket.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Assigned To</p>
                  <p className="text-sm font-bold text-slate-700">{selectedTicket.assignedTo}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Description</h3>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedTicket.description}
                </p>
              </div>

              {/* Submitter Info */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Submitted By</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {selectedTicket.from.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{selectedTicket.from}</p>
                    <p className="text-sm text-slate-500">{selectedTicket.fromRole} • {selectedTicket.fromContact}</p>
                  </div>
                </div>
              </div>

              {/* Comments Thread */}
              {selectedTicket.comments && selectedTicket.comments.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Comments & Activity</h3>
                  <div className="space-y-3">
                    {selectedTicket.comments.map((comment, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-slate-700 text-sm">{comment.user}</span>
                          <span className="text-xs text-slate-400">{new Date(comment.time).toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-slate-600">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                  <div className="flex items-center gap-2">
                    <UserPlus size={18} />
                    <span>Assign Ticket</span>
                  </div>
                  <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                  <div className="flex items-center gap-2">
                    <Edit size={18} />
                    <span>Add Comment</span>
                  </div>
                  <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                </button>
                {selectedTicket.status !== 'Resolved' && !selectedTicket.escalated && (
                  <button className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition-all shadow-lg flex flex-col items-center justify-center gap-0.5">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={18} />
                      <span>Escalate</span>
                    </div>
                    <span className="text-[10px] opacity-80 font-normal leading-none">get in app</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Helpdesk;
