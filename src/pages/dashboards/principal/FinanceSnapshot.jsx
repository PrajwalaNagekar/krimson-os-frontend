import React, { useState } from 'react';
import { 
  DollarSign, 
  PieChart, 
  Download, 
  AlertOctagon,
  TrendingUp,
  TrendingDown,
  Phone,
  Mail,
  Eye,
  BarChart2,
  Calendar,
  CreditCard
} from 'lucide-react';

// Collection Month Card
const CollectionMonthCard = ({ month, actual, target, percentComplete }) => {
  const isOverTarget = actual >= target;
  const barWidth = Math.min((actual / target) * 100, 100);
  
  return (
    <div className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-slate-700">{month}</span>
        <span className={`text-xs font-bold ${isOverTarget ? 'text-green-600' : 'text-orange-600'}`}>
          {percentComplete}%
        </span>
      </div>
      <div className="flex gap-2 text-xs mb-2">
        <div className="flex-1">
          <p className="text-slate-500">Target</p>
          <p className="font-bold text-slate-800">${target.toLocaleString()}</p>
        </div>
        <div className="flex-1">
          <p className="text-slate-500">Actual</p>
          <p className={`font-bold ${isOverTarget ? 'text-green-600' : 'text-orange-600'}`}>
            ${actual.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${isOverTarget ? 'bg-green-500' : 'bg-orange-500'}`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

// Outstanding Payment by Class Card
const OutstandingByClassCard = ({ grade, amount, studentCount, percentage }) => (
  <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div className="w-20 font-bold text-sm text-slate-700">Grade {grade}</div>
    <div className="flex-1">
      <div className="w-full bg-slate-200 rounded-full h-3 mb-1">
        <div 
          className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-500">{studentCount} students</p>
    </div>
    <div className="text-right">
      <p className="font-bold text-red-600">${amount.toLocaleString()}</p>
    </div>
  </div>
);

// Defaulter Card
const DefaulterCard = ({ studentName, grade, rollNumber, amount, daysOverdue, category }) => (
  <div className="p-4 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-white">
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <h4 className="font-bold text-slate-800">{studentName}</h4>
        <p className="text-xs text-slate-500">Grade {grade} • Roll #{rollNumber}</p>
      </div>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
        category === 'Tuition' ? 'bg-red-100 text-red-700' :
        category === 'Transport' ? 'bg-orange-100 text-orange-700' :
        'bg-yellow-100 text-yellow-700'
      }`}>
        {category}
      </span>
    </div>
    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-xs text-slate-500">Outstanding Amount</p>
        <p className="text-xl font-bold text-red-600">${amount.toLocaleString()}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-slate-500">Overdue</p>
        <p className="text-sm font-bold text-orange-600">{daysOverdue} days</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Phone className="w-3 h-3" />
        Contact
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
      <button className="flex-1 px-3 py-2 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1">
        <Eye className="w-3 h-3" />
        History
        <span className="text-[8px] opacity-70">(get in app)</span>
      </button>
    </div>
  </div>
);

// Budget Tracker Card
const BudgetTrackerCard = ({ department, allocated, spent, remaining }) => {
  const spentPercentage = (spent / allocated) * 100;
  const isOverBudget = spent > allocated;
  
  return (
    <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-slate-800 text-sm">{department}</h4>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
          isOverBudget ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {isOverBudget ? 'Over Budget' : 'On Track'}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <div>
          <p className="text-slate-500">Allocated</p>
          <p className="font-bold text-slate-800">${allocated.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-slate-500">Spent</p>
          <p className={`font-bold ${isOverBudget ? 'text-red-600' : 'text-blue-600'}`}>
            ${spent.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-slate-500">Remaining</p>
          <p className={`font-bold ${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
            ${remaining.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${isOverBudget ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${Math.min(spentPercentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

const FinanceSnapshot = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Static data - to be replaced with API calls
  const monthlyCollections = [
    { month: 'Jan', actual: 125000, target: 120000, percentComplete: 104 },
    { month: 'Feb', actual: 118000, target: 120000, percentComplete: 98 },
    { month: 'Mar', actual: 132000, target: 125000, percentComplete: 106 },
    { month: 'Apr', actual: 115000, target: 120000, percentComplete: 96 },
    { month: 'May', actual: 128000, target: 120000, percentComplete: 107 },
    { month: 'Jun', actual: 110000, target: 120000, percentComplete: 92 },
  ];

  const outstandingByClass = [
    { grade: '10', amount: 12500, studentCount: 12, percentage: 60 },
    { grade: '9', amount: 8500, studentCount: 8, percentage: 40 },
    { grade: '11', amount: 7200, studentCount: 6, percentage: 35 },
    { grade: '12', amount: 6800, studentCount: 7, percentage: 32 },
    { grade: '8', amount: 4500, studentCount: 5, percentage: 22 },
    { grade: '7', amount: 3000, studentCount: 7, percentage: 15 },
  ];

  const topDefaulters = [
    { studentName: 'Alex Johnson', grade: '10-B', rollNumber: '2145', amount: 2400, daysOverdue: 45, category: 'Tuition' },
    { studentName: 'Maria Garcia', grade: '12-A', rollNumber: '3421', amount: 1850, daysOverdue: 32, category: 'Tuition' },
    { studentName: 'Chris Lee', grade: '9-C', rollNumber: '1823', amount: 1600, daysOverdue: 28, category: 'Transport' },
    { studentName: 'Sarah Miller', grade: '11-B', rollNumber: '2756', amount: 1450, daysOverdue: 25, category: 'Library' },
    { studentName: 'David Chen', grade: '10-A', rollNumber: '2134', amount: 1200, daysOverdue: 21, category: 'Tuition' },
  ];

  const budgetTrackers = [
    { department: 'Science Department', allocated: 50000, spent: 42000, remaining: 8000 },
    { department: 'Sports & Athletics', allocated: 35000, spent: 31000, remaining: 4000 },
    { department: 'Library & Resources', allocated: 25000, spent: 27000, remaining: -2000 },
    { department: 'Infrastructure', allocated: 80000, spent: 65000, remaining: 15000 },
  ];

  const totalCollected = monthlyCollections.reduce((sum, m) => sum + m.actual, 0);
  const totalTarget = monthlyCollections.reduce((sum, m) => sum + m.target, 0);
  const totalOutstanding = outstandingByClass.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-500/30 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                Fee & Finance Snapshot
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium">
                Financial health monitoring • Collection tracking
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl font-bold text-sm transition-all hover:scale-105 border border-white/30">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Total Collected</p>
              <h3 className="text-2xl md:text-3xl font-bold text-green-600">${(totalCollected / 1000).toFixed(0)}k</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +5% vs last year
          </p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Outstanding</p>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">${(totalOutstanding / 1000).toFixed(1)}k</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <AlertOctagon className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Across {outstandingByClass.reduce((s, c) => s + c.studentCount, 0)} students</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Collection Rate</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{Math.round((totalCollected/totalTarget)*100)}%</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">vs ${(totalTarget / 1000).toFixed(0)}k target</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Cash on Hand</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">$128k</h3>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-slate-600">Available funds</p>
          <p className="text-[9px] text-slate-400 mt-1">(get in app)</p>
        </div>
      </div>

      {/* Monthly Collection Graph */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Monthly Collection vs Target
              </h3>
              <p className="text-sm text-slate-500 mt-1">6-month performance overview</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
              +5% vs last year
            </span>
          </div>
        </div>
        
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyCollections.map((data, idx) => (
              <CollectionMonthCard key={idx} {...data} />
            ))}
          </div>
        </div>
      </div>

      {/* Outstanding Payments & Defaulters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Outstanding by Class */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-red-50 to-orange-50">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-red-500" />
              Outstanding Fees by Grade
            </h3>
            <p className="text-sm text-slate-600 mt-1">Class-wise breakdown</p>
          </div>
          
          <div className="p-5 space-y-3">
            {outstandingByClass.map((data, idx) => (
              <OutstandingByClassCard key={idx} {...data} />
            ))}
          </div>
        </div>

        {/* Top Defaulters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <AlertOctagon className="w-5 h-5 text-red-500" />
                  Top Defaulters
                </h3>
                <p className="text-sm text-slate-600 mt-1">Requiring immediate attention</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                {topDefaulters.length} Active
              </span>
            </div>
          </div>
          
          <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
            {topDefaulters.slice(0, 3).map((defaulter, idx) => (
              <DefaulterCard key={idx} {...defaulter} />
            ))}
            <button className="w-full px-4 py-2 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-bold transition-colors">
              View All Defaulters ({topDefaulters.length})
              <span className="text-[9px] opacity-70 ml-1">(get in app)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Departmental Budget Tracker */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-5 md:p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-800 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-purple-500" />
                Departmental Budget Tracker
              </h3>
              <p className="text-sm text-slate-600 mt-1">Optional future integration with Finance API</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-colors">
              View Full Budget
              <span className="text-[9px] opacity-80 ml-1">(get in app)</span>
            </button>
          </div>
        </div>
        
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {budgetTrackers.map((budget, idx) => (
              <BudgetTrackerCard key={idx} {...budget} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default FinanceSnapshot;
