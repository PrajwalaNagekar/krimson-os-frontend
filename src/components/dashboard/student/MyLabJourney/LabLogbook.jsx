import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Search, Filter, Beaker, Award, Lightbulb } from 'lucide-react';

const LabLogbook = ({ data }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const subjects = ['All', ...new Set(data.map(entry => entry.subject))];
  const statuses = ['All', 'completed', 'in-progress'];

  const filteredData = data.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'All' || entry.subject === filterSubject;
    const matchesStatus = filterStatus === 'All' || entry.status === filterStatus;
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const getGradeColor = (grade) => {
    if (!grade) return 'bg-gray-100 text-gray-600 border-gray-300';
    if (grade === 'A+' || grade === 'A') return 'bg-green-100 text-green-700 border-green-300';
    if (grade === 'B+' || grade === 'B') return 'bg-blue-100 text-blue-700 border-blue-300';
    return 'bg-yellow-100 text-yellow-700 border-yellow-300';
  };

  const getStatusBadge = (status) => {
    if (status === 'completed') {
      return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-300">Completed</span>;
    }
    return <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold border border-orange-300">In Progress</span>;
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="text-blue-500" size={28} />
              Laboratory Logbook
            </h3>
            <p className="text-sm text-gray-600 mt-1">Record and track your experiment results</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700">Total Entries:</span>
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold">{data.length}</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search experiments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
            />
          </div>
          
          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 font-semibold text-gray-700"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 font-semibold text-gray-700"
          >
            <option value="All">All Status</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
      </div>

      {/* Logbook Entries */}
      <div className="space-y-4">
        {filteredData.map(entry => (
          <div
            key={entry.id}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Entry Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-4 flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Beaker size={20} className="text-white" />
                  <h4 className="font-bold text-white text-lg">{entry.title}</h4>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
                  <span className="flex items-center gap-1">
                    📚 {entry.subject}
                  </span>
                  <span>•</span>
                  <span>📅 {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>🔬 {entry.labRoom}</span>
                  <span>•</span>
                  <span>👨‍🏫 {entry.teacher}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {getStatusBadge(entry.status)}
                {entry.grade && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getGradeColor(entry.grade)}`}>
                    Grade: {entry.grade}
                  </span>
                )}
              </div>
            </div>

            {/* Entry Content */}
            <div className="p-6 space-y-4">
              {/* Hypothesis */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                <h5 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
                  💡 Hypothesis
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">{entry.hypothesis}</p>
              </div>

              {/* Expandable Details Button */}
              <button
                onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-cyan-50 hover:to-blue-50 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 hover:text-cyan-600 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Filter size={16} />
                  {expandedId === entry.id ? 'Hide' : 'View'} Full Details
                </span>
                {expandedId === entry.id ? <ChevronUp size={18} className="group-hover:text-cyan-600" /> : <ChevronDown size={18} className="group-hover:text-cyan-600" />}
              </button>

              {/* Expanded Content */}
              {expandedId === entry.id && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Procedure */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                    <h5 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
                      📋 Procedure
                    </h5>
                    <ol className="space-y-2">
                      {entry.procedure.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-700">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs">
                            {idx + 1}
                          </span>
                          <span className="flex-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Observations */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <h5 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
                      👁️ Observations
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{entry.observations}</p>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                    <h5 className="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
                      ✅ Conclusion
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{entry.conclusion}</p>
                  </div>

                  {/* AI Suggestion */}
                  {entry.aiSuggestion && (
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-300">
                      <h5 className="font-bold text-indigo-700 text-sm mb-2 flex items-center gap-2">
                        <Lightbulb size={16} className="text-indigo-500" />
                        AI Suggestion
                      </h5>
                      <p className="text-gray-700 text-sm leading-relaxed italic">{entry.aiSuggestion}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
          <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Entries Found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default LabLogbook;
