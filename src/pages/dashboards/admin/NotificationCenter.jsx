/**
 * @component NotificationCenter
 * @description Communication & Notifications Center - Comprehensive messaging hub
 */
import React, { useState } from 'react';
import { 
  Send, Bell, Smartphone, Mail, Target, Calendar, CheckCircle, Clock,
  Radio, Users, Eye, FileText, TrendingUp, BarChart3, Download, Plus,
  Copy, Edit, Trash2, Settings, MessageSquare, AlertCircle, Check, X,
  Zap, Shield, Globe, Filter, Search, RefreshCcw
} from 'lucide-react';

const NotificationCenter = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState('compose');

  // Notification Templates Library
  const templates = [
    {
      id: 'TEMP001',
      name: 'Holiday Announcement',
      category: 'General',
      subject: 'School Holiday Notice',
      content: 'Dear Parents & Students, This is to inform you that the school will remain closed on [DATE] on account of [REASON]. Regular classes will resume on [NEXT DATE].',
      usageCount: 45,
      lastUsed: '2026-01-15'
    },
    {
      id: 'TEMP002',
      name: 'Exam Schedule Release',
      category: 'Academic',
      subject: 'Important: Examination Schedule Released',
      content: 'Dear Students & Parents, The examination schedule for [EXAM NAME] has been published. Please check the academic portal for detailed timings and subjects.',
      usageCount: 28,
      lastUsed: '2026-01-10'
    },
    {
      id: 'TEMP003',
      name: 'Fee Payment Reminder',
      category: 'Finance',
      subject: 'Fee Payment Due',
      content: 'Dear Parents, This is a friendly reminder that the fee payment for [TERM] is due on [DATE]. Please ensure timely payment to avoid late fees.',
      usageCount: 156,
      lastUsed: '2026-01-18'
    },
    {
      id: 'TEMP004',
      name: 'Emergency Alert',
      category: 'Urgent',
      subject: 'URGENT: Emergency Notice',
      content: 'IMPORTANT NOTICE: [EMERGENCY DETAILS]. Please follow the instructions provided and stay safe.',
      usageCount: 3,
      lastUsed: '2025-12-20'
    }
  ];

  // Recent Notifications with Tracking Data
  const recentNotifications = [
    {
      id: 'NOT001',
      title: 'Annual Sports Day - 2026',
      content: 'Invitation to Annual Sports Day on 25th January',
      targetGroup: ['Parents', 'Students (Grades 6-12)'],
      channels: ['SMS', 'Email', 'App'],
      sentDate: '2026-01-18 10:30 AM',
      status: 'Delivered',
      totalRecipients: 550,
      delivered: 548,
      opened: 425,
      deliveryRate: '99.6%',
      openRate: '77.5%',
      smsCount: 550,
      emailCount: 550,
      appNotifications: 550
    },
    {
      id: 'NOT002',
      title: 'Mid-Term Exam Schedule Released',
      content: 'Examination timetable now available on portal',
      targetGroup: ['Students', 'Parents', 'Teachers'],
      channels: ['Email', 'App'],
      sentDate: '2026-01-17 02:15 PM',
      status: 'Delivered',
      totalRecipients: 892,
      delivered: 890,
      opened: 712,
      deliveryRate: '99.8%',
      openRate: '80.0%',
      smsCount: 0,
      emailCount: 892,
      appNotifications: 892
    },
    {
      id: 'NOT003',
      title: 'Fee Payment Deadline Reminder',
      content: 'Q3 fees payment due on 20th January',
      targetGroup: ['Parents'],
      channels: ['SMS', 'Email'],
      sentDate: '2026-01-16 09:00 AM',
      status: 'Delivered',
      totalRecipients: 485,
      delivered: 485,
      opened: 398,
      deliveryRate: '100%',
      openRate: '82.1%',
      smsCount: 485,
      emailCount: 485,
      appNotifications: 0
    },
    {
      id: 'NOT004',
      title: 'Parent-Teacher Meeting Invitation',
      content: 'Scheduled for 22nd January, 4:00 PM onwards',
      targetGroup: ['Parents'],
      channels: ['Email', 'App'],
      sentDate: '2026-01-15 11:45 AM',
      status: 'Delivered',
      totalRecipients: 485,
      delivered: 483,
      opened: 415,
      deliveryRate: '99.6%',
      openRate: '85.9%',
      smsCount: 0,
      emailCount: 485,
      appNotifications: 485
    }
  ];

  // Gateway Integration Status
  const gatewayStatus = {
    sms: {
      provider: 'Twilio',
      status: 'Active',
      lastSync: '2 mins ago',
      monthlySent: 12458,
      monthlyLimit: 50000,
      balance: '₹45,250'
    },
    email: {
      provider: 'SendGrid',
      status: 'Active',
      lastSync: '1 min ago',
      monthlySent: 28945,
      monthlyLimit: 100000,
      balance: 'Unlimited'
    },
    firebase: {
      provider: 'Firebase Cloud Messaging',
      status: 'Active',
      lastSync: 'Just now',
      monthlySent: 45678,
      monthlyLimit: 'Unlimited',
      balance: 'Active'
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Failed':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'General': 'bg-blue-50 text-blue-700 border-blue-200',
      'Academic': 'bg-purple-50 text-purple-700 border-purple-200',
      'Finance': 'bg-green-50 text-green-700 border-green-200',
      'Urgent': 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[category] || 'bg-slate-50 text-slate-700 border-slate-200';
  };

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
                  Communication Hub
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                  <Radio size={12} className="text-green-300 animate-pulse" />
                  All Systems Online
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Communication & Notifications Center
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Coordinate internal and external communications with SMS, Email, and App notifications.
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
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Send size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{recentNotifications.length}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Sent Today</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><CheckCircle size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">99.7%</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Delivery Rate</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform"><Eye size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">81.4%</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Open Rate</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-cyan-100 text-cyan-600 rounded-lg group-hover:scale-110 transition-transform"><FileText size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">{templates.length}</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Templates</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-100 text-amber-600 rounded-lg group-hover:scale-110 transition-transform"><Users size={16} /></div>
          </div>
          <p className="text-xl font-bold text-slate-800">1,927</p>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Recipients</p>
          <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 text-white rounded-lg group-hover:scale-110 transition-transform"><Zap size={16} /></div>
          </div>
          <p className="text-xl font-bold text-green-800">3/3</p>
          <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Gateways Active</p>
          <p className="text-[10px] text-green-500 mt-1">(get in app)</p>
        </div>
      </div>

      {/* ========================================
          GATEWAY STATUS CARDS
          ======================================== */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Shield className="text-blue-500" size={24} />
          Gateway Integration Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SMS Gateway */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Smartphone size={24} />
              </div>
              <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                {gatewayStatus.sms.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">SMS Gateway</h3>
            <p className="text-sm text-slate-500 mb-4">{gatewayStatus.sms.provider}</p>

            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Monthly Usage</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold text-slate-800">{gatewayStatus.sms.monthlySent.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">/ {gatewayStatus.sms.monthlyLimit.toLocaleString()}</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                    style={{ width: `${(gatewayStatus.sms.monthlySent / gatewayStatus.sms.monthlyLimit) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Balance:</span>
                <span className="font-bold text-green-600">{gatewayStatus.sms.balance}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Last Sync:</span>
                <span className="font-bold text-slate-700">{gatewayStatus.sms.lastSync}</span>
              </div>
            </div>
          </div>

          {/* Email Gateway */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                <Mail size={24} />
              </div>
              <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                {gatewayStatus.email.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Email Gateway</h3>
            <p className="text-sm text-slate-500 mb-4">{gatewayStatus.email.provider}</p>

            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Monthly Usage</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold text-slate-800">{gatewayStatus.email.monthlySent.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">/ {gatewayStatus.email.monthlyLimit.toLocaleString()}</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                    style={{ width: `${(gatewayStatus.email.monthlySent / gatewayStatus.email.monthlyLimit) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Balance:</span>
                <span className="font-bold text-green-600">{gatewayStatus.email.balance}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Last Sync:</span>
                <span className="font-bold text-slate-700">{gatewayStatus.email.lastSync}</span>
              </div>
            </div>
          </div>

          {/* Firebase/App Notifications */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
                <Bell size={24} />
              </div>
              <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                {gatewayStatus.firebase.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">App Notifications</h3>
            <p className="text-sm text-slate-500 mb-4">{gatewayStatus.firebase.provider}</p>

            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Monthly Sent</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-bold text-slate-800">{gatewayStatus.firebase.monthlySent.toLocaleString()}</p>
                  <p className="text-xs text-green-600 font-bold">{gatewayStatus.firebase.monthlyLimit}</p>
                </div>
                <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-green-600">{gatewayStatus.firebase.balance}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Last Sync:</span>
                <span className="font-bold text-slate-700">{gatewayStatus.firebase.lastSync}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          TEMPLATE LIBRARY
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <FileText className="text-purple-500" size={24} />
                Template Library
              </h2>
              <p className="text-sm text-slate-500">Recurring announcements and pre-formatted messages</p>
            </div>
            <button className="px-5 py-2.5 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Plus size={18} />
                New Template
              </div>
              <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="p-6 rounded-2xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all group bg-gradient-to-br from-white to-slate-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-700 transition-colors">{template.name}</h3>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getCategoryColor(template.category)}`}>
                        {template.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">{template.id}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-600 mb-2">Subject:</p>
                  <p className="text-sm text-slate-700 bg-blue-50 p-2 rounded-lg border border-blue-100">{template.subject}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-600 mb-2">Content Preview:</p>
                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 line-clamp-3">{template.content}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-lg font-bold text-purple-600">{template.usageCount}</p>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase">Times Used</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                    <p className="text-xs font-bold text-slate-700">{template.lastUsed}</p>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase">Last Used</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold hover:bg-purple-100 transition-all border border-purple-200 flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <Copy size={14} />
                      Use Template
                    </div>
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                  <button className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <Edit size={14} />
                      Edit
                    </div>
                    <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          RECENT NOTIFICATIONS WITH TRACKING
          ======================================== */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <BarChart3 className="text-blue-500" size={24} />
                Recent Broadcasts & Analytics
              </h2>
              <p className="text-sm text-slate-500">Delivery and engagement tracking</p>
            </div>
            <button className="px-5 py-2.5 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-md flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Download size={18} />
                Export Report
              </div>
              <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
            </button>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {recentNotifications.map((notification) => (
            <div key={notification.id} className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-blue-50/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-800">{notification.title}</h3>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(notification.status)}`}>
                      {notification.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{notification.content}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock size={14} className="text-slate-400" />
                    <span className="text-slate-500">{notification.sentDate}</span>
                    <span className="text-slate-300">•</span>
                    <Target size={14} className="text-slate-400" />
                    <span className="text-slate-600 font-semibold">{notification.targetGroup.join(', ')}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {notification.channels.map((channel, idx) => (
                    <div key={idx} className="p-2 bg-white rounded-lg border border-slate-200">
                      {channel === 'SMS' && <Smartphone size={16} className="text-blue-500" />}
                      {channel === 'Email' && <Mail size={16} className="text-purple-500" />}
                      {channel === 'App' && <Bell size={16} className="text-green-500" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery & Engagement Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users size={14} className="text-blue-500" />
                  </div>
                  <p className="text-lg font-bold text-slate-800">{notification.totalRecipients}</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Total Recipients</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-green-200 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle size={14} className="text-green-500" />
                  </div>
                  <p className="text-lg font-bold text-green-600">{notification.delivered}</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Delivered</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-purple-200 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Eye size={14} className="text-purple-500" />
                  </div>
                  <p className="text-lg font-bold text-purple-600">{notification.opened}</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase">Opened</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp size={14} className="text-green-600" />
                  </div>
                  <p className="text-lg font-bold text-green-700">{notification.deliveryRate}</p>
                  <p className="text-[10px] text-green-600 font-semibold uppercase">Delivery Rate</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-200 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <BarChart3 size={14} className="text-purple-600" />
                  </div>
                  <p className="text-lg font-bold text-purple-700">{notification.openRate}</p>
                  <p className="text-[10px] text-purple-600 font-semibold uppercase">Open Rate</p>
                </div>
              </div>

              {/* Channel Breakdown */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-600 mb-3">Channel Breakdown:</p>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Smartphone size={14} className="text-blue-500" />
                    <span className="text-slate-600">SMS:</span>
                    <span className="font-bold text-slate-800">{notification.smsCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-purple-500" />
                    <span className="text-slate-600">Email:</span>
                    <span className="font-bold text-slate-800">{notification.emailCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell size={14} className="text-green-500" />
                    <span className="text-slate-600">App:</span>
                    <span className="font-bold text-slate-800">{notification.appNotifications}</span>
                  </div>
                </div>
              </div>

              {/* Auto-Duplicate Notice */}
              <div className="mt-4 p-3 bg-cyan-50 rounded-xl border border-cyan-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-cyan-600" />
                  <p className="text-xs font-semibold text-cyan-700">Auto-duplicated to Parent & Teacher apps simultaneously</p>
                </div>
                <span className="text-xs font-bold text-cyan-600 bg-white px-2 py-1 rounded-md border border-cyan-200">
                  ✓ Synced
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default NotificationCenter;
