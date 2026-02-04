import React, { useState } from 'react';
import RemedialSessionPlanner from './RemedialSessionPlanner';
import EnrichmentPlanner from './EnrichmentPlanner';
import { CalendarCheck, Rocket, Zap, BookOpen } from 'lucide-react';

const AcademicSupport = () => {
    const [activeMode, setActiveMode] = useState('remedial'); // 'remedial' or 'enrichment'

    return (
        <div className="space-y-6">
            {/* Mode Switcher - Segmented Control */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 italic inline-flex items-center gap-1 mx-auto w-full md:w-auto">
                <button
                    onClick={() => setActiveMode('remedial')}
                    className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeMode === 'remedial'
                        ? 'bg-blue-100 text-blue-700 shadow-sm'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                >
                    <CalendarCheck size={18} className={activeMode === 'remedial' ? 'text-blue-600' : 'opacity-50'} />
                    Intervention & Support
                </button>
                <button
                    onClick={() => setActiveMode('enrichment')}
                    className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeMode === 'enrichment'
                        ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                >
                    <Rocket size={18} className={activeMode === 'enrichment' ? 'text-indigo-600' : 'opacity-50'} />
                    Enrichment & Challenge
                </button>
            </div>

            {/* Render Active Component */}
            <div className="animate-fadeIn">
                {activeMode === 'remedial' ? (
                    <RemedialSessionPlanner />
                ) : (
                    <EnrichmentPlanner />
                )}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default AcademicSupport;
