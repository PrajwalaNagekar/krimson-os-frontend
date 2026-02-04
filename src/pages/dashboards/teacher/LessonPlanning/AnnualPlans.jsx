import React from 'react';
import { Target, Sparkles, Eye, Plus } from 'lucide-react';

const AnnualPlans = ({ adminPlans, setSelectedPlanType, setShowModal }) => {
    const annualPlans = adminPlans.filter(p => p.type === 'Annual Plan');

    return (
        <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-emerald-500 text-white rounded-[24px] shadow-lg shadow-emerald-200">
                        <Target size={28} />
                    </div>
                    <div className="text-left">
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Annual Academic Roadmaps</h2>
                        <p className="text-sm font-medium text-slate-500">Long-term curriculum goals and yearly milestones</p>
                    </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black border border-emerald-100 uppercase tracking-widest">
                    {annualPlans.length} Total
                </span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {annualPlans.map((plan) => (
                    <div key={plan.id} className="group relative bg-white rounded-[32px] border-2 border-slate-100 hover:border-emerald-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -mr-16 -mt-16 group-hover:bg-emerald-100 transition-all duration-500"></div>

                        <div className="relative z-10 text-left">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-white text-emerald-600 rounded-2xl shadow-sm border border-emerald-50">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Annual Roadmap</span>
                                        <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{plan.title}</h4>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 rounded-xl text-xs font-bold border-2 ${plan.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-orange-50 text-orange-600 border-orange-200'
                                    }`}>
                                    {plan.status}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Grade</p>
                                    <p className="text-xs font-bold text-slate-700">{plan.gradeLevel || 'N/A'}</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Subject</p>
                                    <p className="text-xs font-bold text-slate-700">{plan.subject}</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Milestones</p>
                                    <p className="text-xs font-bold text-slate-700">{plan.milestones || 0} Key Points</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Updated</p>
                                    <p className="text-xs font-bold text-slate-700">{plan.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="text-amber-500" size={16} />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interactive Curriculum Map Available</span>
                                </div>
                                <button className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-2xl text-xs font-black hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 border border-emerald-100">
                                    View Roadmap <Eye size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => { setSelectedPlanType('Annual Plan'); setShowModal(true); }}
                    className="border-2 border-dashed border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center gap-3 hover:bg-emerald-50/30 hover:border-emerald-200 transition-all group min-h-[220px]"
                >
                    <div className="p-4 bg-emerald-50 rounded-full text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 group-hover:rotate-90">
                        <Plus size={32} />
                    </div>
                    <p className="text-sm font-black text-slate-600 group-hover:text-emerald-700">Add New Annual Roadmap</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Strategic Multi-Grade Planning</p>
                </button>
            </div>
        </div>
    );
};

export default AnnualPlans;
