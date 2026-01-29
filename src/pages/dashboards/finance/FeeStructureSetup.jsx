import React, { useState } from 'react';
import { 
  DollarSign, Upload, Download, Plus, Edit, Trash2,
  Calendar, BookOpen, Bus, Beaker, Trophy, Settings,
  Award, Filter, Eye, Save, Copy, CheckCircle
} from 'lucide-react';

/**
 * Screen 2: Fee Structure & Category Setup
 * Purpose: Configure and manage multiple fee types for each academic term
 * Features:
 * - Fee Heads (Tuition, CCA, Lab, Transport, Miscellaneous)
 * - Assign class-specific fee schedules and due dates
 * - Apply concessions or scholarships
 * - Bulk import/export via Excel
 * Integration: Fee Configuration API + Admissions Module
 * Outcome: Ensures consistent billing across grades and academic years
 */

import Pagination from '../../../components/common/Pagination';

const FeeStructureSetup = () => {
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState('term1');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Showing just 3 usually fits well in grid

  // Static data - ready for API integration
  const stats = [
    { label: 'Fee Categories', value: '5', icon: Settings, gradient: 'from-cyan-400 to-blue-500', change: 'Active' },
    { label: 'Grade Structures', value: '4', icon: BookOpen, gradient: 'from-green-400 to-emerald-500', change: '9-12' },
    { label: 'Scholarships', value: '12', icon: Award, gradient: 'from-purple-400 to-pink-500', change: 'Applied' },
    { label: 'Total Annual Fee', value: '₹42,000', icon: DollarSign, gradient: 'from-orange-400 to-yellow-500', change: 'Avg/Student' },
  ];

  // Fee Heads
  const feeHeads = [
    { 
      id: 1,
      name: 'Tuition Fee',
      icon: BookOpen,
      color: 'from-cyan-400 to-blue-500',
      description: 'Core academic instruction fees',
      mandatory: true,
      refundable: false,
    },
    { 
      id: 2,
      name: 'CCA Fee',
      icon: Trophy,
      color: 'from-green-400 to-emerald-500',
      description: 'Co-curricular activities and sports',
      mandatory: true,
      refundable: false,
    },
    { 
      id: 3,
      name: 'Lab Fee',
      icon: Beaker,
      color: 'from-purple-400 to-pink-500',
      description: 'Science lab equipment and materials',
      mandatory: false,
      refundable: true,
    },
    { 
      id: 4,
      name: 'Transport Fee',
      icon: Bus,
      color: 'from-orange-400 to-yellow-500',
      description: 'School bus and transportation',
      mandatory: false,
      refundable: true,
    },
    { 
      id: 5,
      name: 'Miscellaneous',
      icon: Settings,
      color: 'from-pink-400 to-red-500',
      description: 'Books, uniforms, and other charges',
      mandatory: false,
      refundable: false,
    },
  ];

  // Class-specific fee schedules
  const feeSchedules = [
    {
      grade: 'Grade 9',
      termFees: {
        term1: { tuition: 12000, cca: 2000, lab: 1500, transport: 3000, misc: 1500, total: 20000 },
        term2: { tuition: 12000, cca: 2000, lab: 1500, transport: 3000, misc: 1500, total: 20000 },
      },
      annualTotal: 40000,
      dueDates: {
        term1: '2024-04-15',
        term2: '2024-09-15',
      },
      studentsEnrolled: 120,
    },
    {
      grade: 'Grade 10',
      termFees: {
        term1: { tuition: 13000, cca: 2500, lab: 2000, transport: 3000, misc: 1500, total: 22000 },
        term2: { tuition: 13000, cca: 2500, lab: 2000, transport: 3000, misc: 1500, total: 22000 },
      },
      annualTotal: 44000,
      dueDates: {
        term1: '2024-04-15',
        term2: '2024-09-15',
      },
      studentsEnrolled: 115,
    },
    {
      grade: 'Grade 11',
      termFees: {
        term1: { tuition: 14000, cca: 2500, lab: 2500, transport: 3000, misc: 2000, total: 24000 },
        term2: { tuition: 14000, cca: 2500, lab: 2500, transport: 3000, misc: 2000, total: 24000 },
      },
      annualTotal: 48000,
      dueDates: {
        term1: '2024-04-15',
        term2: '2024-09-15',
      },
      studentsEnrolled: 108,
    },
    {
      grade: 'Grade 12',
      termFees: {
        term1: { tuition: 15000, cca: 3000, lab: 2500, transport: 3000, misc: 2000, total: 25500 },
        term2: { tuition: 15000, cca: 3000, lab: 2500, transport: 3000, misc: 2000, total: 25500 },
      },
      annualTotal: 51000,
      dueDates: {
        term1: '2024-04-15',
        term2: '2024-09-15',
      },
      studentsEnrolled: 102,
    },
  ];

  // Scholarships & Concessions
  const scholarships = [
    {
      id: 1,
      name: 'Merit Scholarship',
      type: 'Academic',
      discountPercentage: 50,
      applicableTo: ['Grade 10', 'Grade 11', 'Grade 12'],
      eligibility: 'Top 10% academically',
      studentsApplied: 45,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sports Scholarship',
      type: 'Sports',
      discountPercentage: 30,
      applicableTo: ['All Grades'],
      eligibility: 'State/National level athletes',
      studentsApplied: 12,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Sibling Discount',
      type: 'Family',
      discountPercentage: 20,
      applicableTo: ['All Grades'],
      eligibility: '2+ siblings in school',
      studentsApplied: 67,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Financial Aid',
      type: 'Need-based',
      discountPercentage: 75,
      applicableTo: ['All Grades'],
      eligibility: 'Family income < ₹5L/year',
      studentsApplied: 23,
      status: 'Active',
    },
  ];

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
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
                Fee Structure & Category Setup
              </h1>
              <p className="text-gray-600">Configure and manage multiple fee types for each academic term.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Import Excel</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Export Excel</span>
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
                <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-600 bg-blue-50">
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

        {/* Fee Heads */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Fee Categories</h2>
                <p className="text-sm text-gray-600">Manage fee heads and types</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feeHeads.map((head) => (
              <div key={head.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${head.color}`}>
                    <head.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4 text-blue-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{head.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{head.description}</p>

                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${head.mandatory ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {head.mandatory ? 'Mandatory' : 'Optional'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${head.refundable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {head.refundable ? 'Refundable' : 'Non-refundable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class-Specific Fee Schedules */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Fee Schedules by Grade</h2>
                <p className="text-sm text-gray-600">Class-specific fee structures and due dates</p>
              </div>
            </div>

            <div className="flex gap-3">
              <select 
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option value="term1">Term 1</option>
                <option value="term2">Term 2</option>
              </select>

              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </div>
                <div className="text-[10px] opacity-70">get in app</div>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {feeSchedules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((schedule, index) => {
              const termData = schedule.termFees[selectedTerm];
              
              return (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{schedule.grade}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          Due: {formatDate(schedule.dueDates[selectedTerm])}
                        </span>
                        <span>•</span>
                        <span>{schedule.studentsEnrolled} students</span>
                        <span>•</span>
                        <span className="font-semibold text-purple-600">
                          Annual: {formatCurrency(schedule.annualTotal)}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </button>
                      <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-100">
                      <p className="text-xs text-gray-600 mb-1">Tuition</p>
                      <p className="text-lg font-bold text-cyan-700">{formatCurrency(termData.tuition)}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-xs text-gray-600 mb-1">CCA</p>
                      <p className="text-lg font-bold text-green-700">{formatCurrency(termData.cca)}</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <p className="text-xs text-gray-600 mb-1">Lab</p>
                      <p className="text-lg font-bold text-purple-700">{formatCurrency(termData.lab)}</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <p className="text-xs text-gray-600 mb-1">Transport</p>
                      <p className="text-lg font-bold text-orange-700">{formatCurrency(termData.transport)}</p>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <p className="text-xs text-gray-600 mb-1">Misc</p>
                      <p className="text-lg font-bold text-pink-700">{formatCurrency(termData.misc)}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                      <p className="text-xs text-white/80 mb-1">Total</p>
                      <p className="text-lg font-bold text-white">{formatCurrency(termData.total)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(feeSchedules.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={feeSchedules.length}
          />
        </div>

        {/* Scholarships & Concessions */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Scholarships & Concessions</h2>
                <p className="text-sm text-gray-600">Manage discounts and financial aid programs</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Add Scholarship</span>
              </div>
              <div className="text-[10px] opacity-70">get in app</div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{scholarship.name}</h3>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      {scholarship.type}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                      {scholarship.discountPercentage}%
                    </span>
                    <span className="text-xs text-gray-500">OFF</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Eligibility:</span>
                    <span className="font-semibold text-gray-800">{scholarship.eligibility}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Students Applied:</span>
                    <span className="font-semibold text-blue-600">{scholarship.studentsApplied}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${scholarship.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {scholarship.status === 'Active' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                      {scholarship.status}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Applicable to:</p>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.applicableTo.map((grade, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="flex-1 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeeStructureSetup;
