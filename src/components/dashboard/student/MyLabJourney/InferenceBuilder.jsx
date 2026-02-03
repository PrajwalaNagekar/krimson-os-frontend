import React, { useState } from 'react';
import { Lightbulb, Brain, Target, TrendingUp, Award, ChevronRight } from 'lucide-react';

const InferenceBuilder = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0]?.id || null);

  const selectedInference = data.find(inf => inf.id === selectedId);

  const getStrengthColor = (strength) => {
    if (strength === 'strong') return 'bg-green-100 text-green-700 border-green-300';
    if (strength === 'partial') return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    return 'bg-red-100 text-red-700 border-red-300';
  };

  const getMasteryColor = (level) => {
    if (level === 'Advanced') return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
    if (level === 'Proficient') return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
    return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-lg">
            <Lightbulb size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Inference Builder</h2>
            <p className="text-gray-700 font-medium">
              🧠 Develop critical thinking by building inferences from observations with AI coaching
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inference List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Your Inferences</h3>
          {data.map(inf => (
            <button
              key={inf.id}
              onClick={() => setSelectedId(inf.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedId === inf.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-purple-500 shadow-lg scale-[1.02]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              <div className="font-bold text-sm mb-1">{inf.title}</div>
              <div className={`text-xs ${selectedId === inf.id ? 'text-white/90' : 'text-gray-500'}`}>
                {inf.subject} • {inf.experiment}
              </div>
              <div className="mt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  selectedId === inf.id ? 'bg-white/20' : getMasteryColor(inf.masteryLevel)
                }`}>
                  {inf.masteryLevel}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Inference Details */}
        <div className="lg:col-span-2 space-y-6">
          {selectedInference && (
            <>
              {/* Inference Header */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedInference.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {selectedInference.subject} • {selectedInference.experiment} • {new Date(selectedInference.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-xl font-bold text-sm shadow-lg ${getMasteryColor(selectedInference.masteryLevel)}`}>
                    {selectedInference.masteryLevel}
                  </span>
                </div>
              </div>

              {/* Initial Observation */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Target size={20} className="text-cyan-500" />
                  Initial Observation
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedInference.observation}</p>
              </div>

              {/* Reasoning Steps with AI Coaching */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Brain size={20} className="text-purple-500" />
                  Guided Reasoning Process
                </h4>

                {selectedInference.reasoning.map((step, idx) => (
                  <div
                    key={step.step}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all"
                  >
                    {/* Step Number and Question */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-800 text-base mb-3">{step.question}</h5>
                        
                        {/* Student Answer */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 mb-3">
                          <p className="text-sm text-gray-600 font-semibold mb-1">Your Answer:</p>
                          <p className="text-gray-700 leading-relaxed">{step.studentAnswer}</p>
                        </div>

                        {/* AI Coaching */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 mb-3">
                          <div className="flex items-start gap-2">
                            <Brain size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-sm text-purple-700 font-semibold mb-1">AI Coach Feedback:</p>
                              <p className="text-gray-700 leading-relaxed text-sm italic">{step.aiCoaching}</p>
                            </div>
                          </div>
                        </div>

                        {/* Strength Badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600 font-semibold">Reasoning Strength:</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStrengthColor(step.strength)}`}>
                            {step.strength.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Arrow */}
                    {idx < selectedInference.reasoning.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ChevronRight size={24} className="text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final Inference */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg border-2 border-green-300">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Award size={20} className="text-green-500" />
                  Final Inference
                </h4>
                <p className="text-gray-700 leading-relaxed font-medium bg-white/50 rounded-xl p-4 border border-green-200">
                  {selectedInference.finalInference}
                </p>
              </div>

              {/* Mastery Achievement */}
              <div className={`rounded-2xl p-6 shadow-lg ${getMasteryColor(selectedInference.masteryLevel)}`}>
                <div className="flex items-center gap-3">
                  <TrendingUp size={24} />
                  <div>
                    <p className="font-bold text-lg">Mastery Achievement</p>
                    <p className="opacity-90 text-sm">You've reached {selectedInference.masteryLevel} level in this concept!</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InferenceBuilder;
