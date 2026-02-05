import React, { useState } from 'react';
import {
    FileText, Database, Plus, Sparkles,
    Search, Filter, LayoutGrid, List,
    ArrowRight, Download, Share2, Info
} from 'lucide-react';
import WorksheetGenerator from './WorksheetGenerator';
import QuestionBank from './QuestionBank';

const AssessmentToolsDashboard = () => {
    const [activeTab, setActiveTab] = useState('worksheet'); // 'worksheet' or 'bank'

    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
            {/* Dynamic Header */}
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 opacity-10 rounded-full blur-3xl -ml-10 -mb-10 animate-pulse"></div>

                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] md:text-xs font-bold mb-4 backdrop-blur-md shadow-sm border border-white/30 uppercase tracking-widest">
                        {activeTab === 'worksheet' ? 'Screen 199 / Worksheet Generator' : 'Screen 200-201 / Question Bank'}
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h1 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
                                {activeTab === 'worksheet' ? 'AI-Powered Worksheet Builder' : 'Unified Question Bank'}
                            </h1>
                            <p className="opacity-90 font-medium text-sm md:text-lg leading-relaxed">
                                {activeTab === 'worksheet'
                                    ? 'Generate high-quality practice sheets and homework in seconds using AI assistance.'
                                    : 'Create, manage, and reuse a centralized library of assessment items across your classes.'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex p-1.5 bg-slate-100 rounded-3xl w-full max-w-md shadow-inner">
                <button
                    onClick={() => setActiveTab('worksheet')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === 'worksheet'
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    <FileText size={18} />
                    Worksheet Generator
                </button>
                <button
                    onClick={() => setActiveTab('bank')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 ${activeTab === 'bank'
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    <Database size={18} />
                    Question Bank
                </button>
            </div>

            {/* Main Content Area */}
            <div className="min-h-[60vh]">
                {activeTab === 'worksheet' ? (
                    <WorksheetGenerator />
                ) : (
                    <QuestionBank />
                )}
            </div>

            {/* AI Notification Footer */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-4 md:p-6 border border-blue-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl shadow-md text-indigo-600 ring-4 ring-indigo-50 flex-shrink-0">
                        <Sparkles size={24} className="animate-pulse" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1 flex items-center gap-2">
                            AI2 Assistant Ready
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-[10px]">active</span>
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 font-medium">
                            You can now draft questions and suggest difficulty variations using the "AI Drafting" feature in either tool.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-200 hover:scale-105 transition-all active:scale-95">
                        Learn More
                        <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssessmentToolsDashboard;
