import React from 'react';

// AssignmentsHeader: Displays the title, description, and filters for the assignments page
const AssignmentsHeader = ({ 
  selectedSubject, 
  setSelectedSubject, 
  uniqueSubjects, 
  tab, 
  setTab 
}) => {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 rounded-3xl shadow-lg border-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Homework & Assignments</h2>
          <p className="text-sm text-white/90 font-semibold mt-2">✨ AI-powered mastery tracking • Adaptive learning paths • Personalized feedback</p>
        </div>
        
        {/* Subject Filter Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-white/90 uppercase">Filter by Subject:</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 bg-white/10 border-2 border-white/30 rounded-xl text-sm font-bold text-white hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer backdrop-blur-md [&>option]:text-slate-700"
          >
            {uniqueSubjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Tab Selector Buttons */}
      <div className="flex bg-white/20 p-1.5 rounded-xl w-full md:w-auto backdrop-blur-md border border-white/10">
        {['Pending', 'Submitted', 'Graded'].map(t => (
          <button 
            key={t} 
            onClick={() => setTab(t)}
            className={`flex-1 md:flex-none px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${tab === t ? 'bg-white text-blue-600 shadow-lg scale-105' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsHeader;
