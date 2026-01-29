import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle, XCircle, Clock,
  Download, Filter, FileText, Shield, Database, Calendar,
  Award, Activity, Eye, RefreshCw, Bell, Lock
} from 'lucide-react';

/**
 * Screen 6: Compliance & Risk Dashboard
 * Purpose: Ensure regulatory compliance and identify risk exposures
 * Features:
 * - Compliance Checklist (PEI, SSG, MOE status)
 * - Document Expiry Alerts (teacher certifications)
 * - Security & Data Backup Logs
 * - Risk Index: Red (Critical), Amber (Moderate), Green (Safe)
 * - Downloadable Compliance Summary Report
 * Integration: Compliance Database + Backup System API
 * Output: "Audit Readiness Index" report generated quarterly
 */

const ComplianceRisk = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('all');

  // Static data - ready for API integration
  const stats = [
    { label: 'Compliance Score', value: '96%', icon: ShieldCheck, gradient: 'from-green-400 to-emerald-500', change: 'Excellent' },
    { label: 'Critical Risks', value: '2', icon: AlertTriangle, gradient: 'from-red-400 to-pink-500', change: 'Immediate action' },
    { label: 'Expiring Soon', value: '8', icon: Clock, gradient: 'from-orange-400 to-yellow-500', change: 'Within 30 days' },
    { label: 'Audit Readiness', value: '94%', icon: Award, gradient: 'from-cyan-400 to-blue-500', change: 'Quarterly index' },
  ];

  // Compliance Checklist (PEI, SSG, MOE)
  const complianceChecklist = [
    {
      category: 'PEI (Private Education Institution)',
      items: [
        { item: 'PEI Registration Certificate', status: 'compliant', expiryDate: '2025-12-31', daysToExpiry: 345, lastUpdated: '2024-01-05' },
        { item: 'Teacher Employment Records', status: 'compliant', expiryDate: null, daysToExpiry: null, lastUpdated: '2024-01-15' },
        { item: 'Student Enrollment Records', status: 'compliant', expiryDate: null, daysToExpiry: null, lastUpdated: '2024-01-20' },
        { item: 'Fee Protection Scheme (FPS)', status: 'compliant', expiryDate: '2024-06-30', daysToExpiry: 161, lastUpdated: '2024-01-10' },
      ],
    },
    {
      category: 'SSG (SkillsFuture Singapore)',
      items: [
        { item: 'SSG Course Approval', status: 'compliant', expiryDate: '2024-08-31', daysToExpiry: 223, lastUpdated: '2023-12-20' },
        { item: 'Trainer Qualifications', status: 'warning', expiryDate: '2024-02-15', daysToExpiry: 26, lastUpdated: '2024-01-18' },
        { item: 'Quality Assurance Framework', status: 'compliant', expiryDate: '2025-03-31', daysToExpiry: 435, lastUpdated: '2024-01-12' },
      ],
    },
    {
      category: 'MOE (Ministry of Education)',
      items: [
        { item: 'School Registration', status: 'compliant', expiryDate: '2026-12-31', daysToExpiry: 710, lastUpdated: '2024-01-01' },
        { item: 'Curriculum Approval', status: 'compliant', expiryDate: null, daysToExpiry: null, lastUpdated: '2024-01-15' },
        { item: 'Safety & Infrastructure Audit', status: 'critical', expiryDate: '2024-01-31', daysToExpiry: 11, lastUpdated: '2023-11-30' },
        { item: 'Teacher Certification Compliance', status: 'warning', expiryDate: '2024-02-28', daysToExpiry: 39, lastUpdated: '2024-01-10' },
      ],
    },
  ];

  // Document Expiry Alerts
  const documentAlerts = [
    { document: 'Fire Safety Certificate', holder: 'Institution', expiryDate: '2024-01-31', daysToExpiry: 11, severity: 'critical', category: 'Safety' },
    { document: 'Teaching License - Ms. Sarah Chen', holder: 'Sarah Chen', expiryDate: '2024-02-15', daysToExpiry: 26, severity: 'critical', category: 'Teacher Certification' },
    { document: 'Teaching License - Mr. David Kumar', holder: 'David Kumar', expiryDate: '2024-02-20', daysToExpiry: 31, severity: 'warning', category: 'Teacher Certification' },
    { document: 'First Aid Certification - School Nurse', holder: 'Medical Staff', expiryDate: '2024-03-10', daysToExpiry: 49, severity: 'warning', category: 'Medical' },
    { document: 'Food Hygiene License', holder: 'Canteen', expiryDate: '2024-03-25', daysToExpiry: 64, severity: 'warning', category: 'Food Safety' },
    { document: 'Building Insurance Policy', holder: 'Institution', expiryDate: '2024-04-15', daysToExpiry: 85, severity: 'safe', category: 'Insurance' },
  ];

  // Security & Data Backup Logs
  const backupLogs = [
    { date: '2024-01-20', time: '02:00 AM', type: 'Full Backup', size: '125 GB', status: 'Success', duration: '2h 15m', location: 'Cloud Storage (AWS S3)' },
    { date: '2024-01-19', time: '02:00 AM', type: 'Incremental', size: '8.5 GB', status: 'Success', duration: '25m', location: 'Cloud Storage (AWS S3)' },
    { date: '2024-01-18', time: '02:00 AM', type: 'Incremental', size: '7.2 GB', status: 'Success', duration: '22m', location: 'Cloud Storage (AWS S3)' },
    { date: '2024-01-17', time: '02:00 AM', type: 'Incremental', size: '9.1 GB', status: 'Success', duration: '28m', location: 'Cloud Storage (AWS S3)' },
    { date: '2024-01-16', time: '02:00 AM', type: 'Incremental', size: '6.8 GB', status: 'Failed', duration: '5m', location: 'Cloud Storage (AWS S3)' },
  ];

  const securityLogs = [
    { date: '2024-01-20', event: 'Password Policy Update', severity: 'info', user: 'System Admin', details: 'Enforced 12-character minimum' },
    { date: '2024-01-19', event: 'Failed Login Attempts', severity: 'warning', user: 'Multiple Users', details: '15 failed attempts detected' },
    { date: '2024-01-18', event: 'Firewall Rule Updated', severity: 'info', user: 'IT Admin', details: 'Added new IP whitelist' },
    { date: '2024-01-17', event: 'Data Encryption Verified', severity: 'info', user: 'System', details: 'All databases encrypted at rest' },
  ];

  // Risk Index Assessment
  const riskAssessment = {
    overallRiskLevel: 'moderate', // safe, moderate, critical
    criticalRisks: 2,
    moderateRisks: 5,
    safeItems: 38,
    riskBreakdown: [
      { category: 'Regulatory Compliance', level: 'moderate', count: 3, details: '2 expiring certifications, 1 pending renewal' },
      { category: 'Data Security', level: 'safe', count: 0, details: 'All encryption and backup protocols active' },
      { category: 'Financial Risk', level: 'safe', count: 0, details: 'Healthy surplus, no outstanding liabilities' },
      { category: 'Operational Risk', level: 'moderate', count: 2, details: '2 staff certifications expiring soon' },
      { category: 'Reputational Risk', level: 'safe', count: 0, details: 'No pending complaints or legal issues' },
      { category: 'Infrastructure Risk', level: 'critical', count: 2, details: 'Fire safety cert expiring, 1 lab equipment overdue maintenance' },
    ],
  };

  // Audit Readiness Index
  const auditReadiness = {
    overallScore: 94,
    lastQuarterly: '2023-Q4',
    nextQuarterly: '2024-Q1',
    categories: [
      { name: 'Documentation', score: 98, status: 'excellent' },
      { name: 'Compliance Records', score: 96, status: 'excellent' },
      { name: 'Financial Transparency', score: 95, status: 'excellent' },
      { name: 'Infrastructure Safety', score: 82, status: 'good' },
      { name: 'Data Security', score: 99, status: 'excellent' },
      { name: 'Staff Credentials', score: 88, status: 'good' },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant':
      case 'safe':
      case 'excellent': return 'bg-green-100 text-green-700 border-green-200';
      case 'warning':
      case 'moderate':
      case 'good': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'safe': return 'from-green-400 to-emerald-500';
      case 'moderate': return 'from-yellow-400 to-orange-500';
      case 'critical': return 'from-red-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Compliance & Risk Dashboard
              </h1>
              <p className="text-gray-600">Regulatory compliance tracking and risk exposure monitoring.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Audit Report</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Summary</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-white/20 group hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-gray-600 bg-gray-50">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Risk Index Overview */}
        <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Risk Index Assessment</h2>
                  <p className="text-sm text-white/80">Current risk exposure analysis</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30">
                <p className="text-sm text-white/80 mb-1">Overall Risk Level</p>
                <p className="text-2xl font-bold capitalize">{riskAssessment.overallRiskLevel}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <p className="text-sm text-white/80">Critical Risks</p>
                </div>
                <p className="text-3xl font-bold">{riskAssessment.criticalRisks}</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <p className="text-sm text-white/80">Moderate Risks</p>
                </div>
                <p className="text-3xl font-bold">{riskAssessment.moderateRisks}</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="text-sm text-white/80">Safe Items</p>
                </div>
                <p className="text-3xl font-bold">{riskAssessment.safeItems}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {riskAssessment.riskBreakdown.map((risk, index) => (
                <div key={index} className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{risk.category}</span>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(risk.level)}`}>
                      <div className={`w-2 h-2 rounded-full ${risk.level === 'safe' ? 'bg-green-500' : risk.level === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      <span className="capitalize">{risk.level}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">{risk.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Checklist */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Compliance Checklist</h2>
              <p className="text-sm text-gray-600">PEI, SSG, and MOE regulatory status</p>
            </div>
          </div>

          <div className="space-y-6">
            {complianceChecklist.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{section.category}</h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(item.status)}`}>
                              {item.status === 'compliant' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                              {item.status === 'warning' && <Clock className="w-3 h-3 inline mr-1" />}
                              {item.status === 'critical' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                              {item.status.toUpperCase()}
                            </span>
                            <span className="font-semibold text-gray-800">{item.item}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            {item.expiryDate && (
                              <span>Expires: {formatDate(item.expiryDate)} ({item.daysToExpiry} days)</span>
                            )}
                            <span>Updated: {formatDate(item.lastUpdated)}</span>
                          </div>
                        </div>
                        {item.daysToExpiry !== null && item.daysToExpiry < 60 && (
                          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2">
                              <Bell className="w-4 h-4" />
                              <span>Renew</span>
                            </div>
                            <div className="text-[10px] opacity-70">get in app</div>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Expiry Alerts */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Document Expiry Alerts</h2>
              <p className="text-sm text-gray-600">Certifications and licenses requiring attention</p>
            </div>
          </div>

          <div className="space-y-3">
            {documentAlerts.map((alert, index) => (
              <div key={index} className={`p-5 rounded-2xl border-2 hover:shadow-lg transition-all ${alert.severity === 'critical' ? 'bg-red-50 border-red-200' : alert.severity === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(alert.severity)}`}>
                        {alert.severity === 'critical' ? <XCircle className="w-3 h-3 inline mr-1" /> : alert.severity === 'warning' ? <Clock className="w-3 h-3 inline mr-1" /> : <CheckCircle className="w-3 h-3 inline mr-1" />}
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {alert.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{alert.document}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Holder: {alert.holder}</span>
                      <span>Expires: {formatDate(alert.expiryDate)}</span>
                      <span className={`font-semibold ${alert.daysToExpiry <= 15 ? 'text-red-600' : alert.daysToExpiry <= 30 ? 'text-orange-600' : 'text-green-600'}`}>
                        {alert.daysToExpiry} days remaining
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>Renew Now</span>
                    </div>
                    <div className="text-[10px] opacity-70">get in app</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Security & Data Backup Logs */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Data Backup Logs</h2>
                <p className="text-sm text-gray-600">Automated backup status</p>
              </div>
            </div>

            <div className="space-y-3">
              {backupLogs.map((log, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-800">{log.date}</span>
                      <span className="text-sm text-gray-600">{log.time}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {log.type}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${log.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {log.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Size: {log.size}</span>
                    <span>Duration: {log.duration}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{log.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Readiness Index */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Audit Readiness Index</h2>
                <p className="text-sm text-gray-600">Quarterly assessment report</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {auditReadiness.overallScore}%
              </p>
              <p className="text-sm text-gray-600">Last: {auditReadiness.lastQuarterly} • Next: {auditReadiness.nextQuarterly}</p>
            </div>

            <div className="space-y-3">
              {auditReadiness.categories.map((cat, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{cat.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${cat.score >= 95 ? 'text-green-600' : cat.score >= 85 ? 'text-blue-600' : 'text-yellow-600'}`}>
                        {cat.score}%
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(cat.status)}`}>
                        {cat.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all ${cat.score >= 95 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : cat.score >= 85 ? 'bg-gradient-to-r from-blue-400 to-cyan-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
                      style={{ width: `${cat.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComplianceRisk;
