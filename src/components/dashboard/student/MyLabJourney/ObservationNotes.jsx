import React, { useState } from 'react';
import { Eye, TrendingUp, Table, List, Lightbulb } from 'lucide-react';

const ObservationNotes = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0]?.id || null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'list'

  const selectedObservation = data.find(obs => obs.id === selectedId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
            <Eye size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Observation Notes</h2>
            <p className="text-gray-700 font-medium">
              📊 Record and analyze experimental data with precision
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'table' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              title="Table View"
            >
              <Table size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              title="List View"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Experiment List Sidebar */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Select Experiment</h3>
          {data.map(obs => (
            <button
              key={obs.id}
              onClick={() => setSelectedId(obs.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedId === obs.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-500 shadow-lg scale-[1.02]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:shadow-md'
              }`}
            >
              <div className="font-bold text-sm mb-1">{obs.experimentTitle}</div>
              <div className={`text-xs ${selectedId === obs.id ? 'text-white/90' : 'text-gray-500'}`}>
                {obs.subject} • {new Date(obs.date).toLocaleDateString()}
              </div>
            </button>
          ))}
        </div>

        {/* Observation Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedObservation && (
            <>
              {/* Experiment Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedObservation.experimentTitle}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedObservation.subject} • {new Date(selectedObservation.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  <TrendingUp size={24} className="text-emerald-500" />
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Table size={20} className="text-emerald-500" />
                  Quantitative Data
                </h4>
                
                {viewMode === 'table' ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-emerald-100 to-teal-100 border-b-2 border-emerald-300">
                          {Object.keys(selectedObservation.dataTable[0] || {}).map(key => (
                            <th key={key} className="px-4 py-3 text-left text-sm font-bold text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedObservation.dataTable.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`border-b border-gray-100 hover:bg-emerald-50 transition-colors ${
                              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                          >
                            {Object.values(row).map((value, colIdx) => (
                              <td key={colIdx} className="px-4 py-3 text-sm text-gray-700 font-medium">
                                {typeof value === 'number' ? value.toFixed(2) : value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedObservation.dataTable.map((row, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
                        <div className="font-bold text-gray-800 mb-2">Measurement Set {idx + 1}</div>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(row).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                              <span className="font-bold text-gray-800 ml-2">
                                {typeof value === 'number' ? value.toFixed(2) : value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Qualitative Observations */}
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Eye size={20} className="text-blue-500" />
                  Qualitative Observations
                </h4>
                <ul className="space-y-3">
                  {selectedObservation.qualitativeObservations.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">{obs}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Suggestion */}
              {selectedObservation.aiSuggestion && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-300">
                  <h4 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <Lightbulb size={20} className="text-purple-500" />
                    AI Suggestion for Improvement
                  </h4>
                  <p className="text-gray-700 leading-relaxed italic">{selectedObservation.aiSuggestion}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObservationNotes;
