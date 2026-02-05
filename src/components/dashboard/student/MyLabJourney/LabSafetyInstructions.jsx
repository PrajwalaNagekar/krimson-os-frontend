import React, { useState } from 'react';
import { Shield, AlertTriangle, Info } from 'lucide-react';

const LabSafetyInstructions = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'border-red-300 bg-red-50';
    if (priority === 'medium') return 'border-yellow-300 bg-yellow-50';
    return 'border-blue-300 bg-blue-50';
  };

  const categories = [
    { id: 'all', name: 'All Instructions', count: data.generalRules.length + data.equipmentHandling.length + data.emergencyProcedures.length },
    { id: 'general', name: 'General Rules', count: data.generalRules.length },
    { id: 'equipment', name: 'Equipment Handling', count: data.equipmentHandling.length },
    { id: 'emergency', name: 'Emergency Procedures', count: data.emergencyProcedures.length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-red-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-red-500 rounded-xl shadow-lg">
            <Shield size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Laboratory Safety Guidelines</h2>
            <p className="text-gray-700 font-medium">
              ⚠️ Your safety is our top priority. Please read and follow all safety instructions carefully before and during lab work.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* General Rules */}
      {(selectedCategory === 'all' || selectedCategory === 'general') && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Info size={20} className="text-blue-500" />
            General Laboratory Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.generalRules.map(rule => (
              <div
                key={rule.id}
                className={`rounded-2xl p-6 border-2 ${getPriorityColor(rule.priority)} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{rule.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {rule.title}
                      {rule.priority === 'high' && (
                        <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full font-bold">REQUIRED</span>
                      )}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Equipment Handling */}
      {(selectedCategory === 'all' || selectedCategory === 'equipment') && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <AlertTriangle size={20} className="text-orange-500" />
            Equipment Handling Procedures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.equipmentHandling.map(equipment => (
              <div
                key={equipment.id}
                className="rounded-2xl p-6 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{equipment.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{equipment.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{equipment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Emergency Procedures */}
      {(selectedCategory === 'all' || selectedCategory === 'emergency') && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Shield size={20} className="text-red-500" />
            Emergency Procedures
          </h3>
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-2xl p-6 border-2 border-red-300 mb-4">
            <p className="text-sm font-bold text-red-700 flex items-center gap-2">
              <AlertTriangle size={18} />
              IN CASE OF EMERGENCY: Stay calm, alert your teacher immediately, and follow these procedures
            </p>
          </div>
          <div className="space-y-4">
            {data.emergencyProcedures.map(emergency => (
              <div
                key={emergency.id}
                className="rounded-2xl p-6 border-2 border-red-300 bg-gradient-to-r from-red-50 to-pink-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{emergency.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{emergency.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{emergency.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LabSafetyInstructions;
