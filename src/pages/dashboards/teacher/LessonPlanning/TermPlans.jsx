import React from 'react';
import { Calendar, Target, ChevronRight, Plus } from 'lucide-react';

const TermPlans = ({ adminPlans, setSelectedPlanType, setShowModal }) => {
    const termPlans = adminPlans.filter(p => p.type === 'Term Plan');

    return (
        <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4 text-left">
                    <div className="p-4 bg-purple-500 text-white rounded-[24px] shadow-lg shadow-purple-200">
                        <Calendar size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Strategic Term Plans</h2>
                        <p className="text-sm font-medium text-slate-500">Medium-term objectives and semester breakdowns</p>
                    </div>
                </div>
                <span className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-black border border-purple-100 uppercase tracking-widest">
                    {termPlans.length} Total
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {termPlans.map((plan) => (
                    <div key={plan.id} className="group relative bg-white rounded-[32px] border-2 border-slate-100 hover:border-purple-200 p-7 flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 overflow-hidden text-left">
                        <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>

                        <div className="flex items-center justify-between">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex flex-col items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                <Calendar size={24} />
                            </div>
                            <div className={`px-2 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border ${plan.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                                }`}>
                                {plan.status}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-md text-[9px] font-black uppercase tracking-tighter border border-purple-200">
                                    {plan.term}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">{plan.subject} • {plan.date}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 line-clamp-2 group-hover:text-purple-600 transition-colors leading-snug">{plan.title}</h4>
                        </div>

                        <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Target size={14} className="text-slate-500" />
                                </div>
                                <span className="text-xs font-bold text-slate-600">{plan.goalsCount || 0} Key Goals</span>
                            </div>
                            <button className="text-xs font-black text-purple-600 hover:text-purple-700 flex items-center gap-1 group/btn uppercase tracking-tight">
                                Full Preview <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => { setSelectedPlanType('Term Plan'); setShowModal(true); }}
                    className="border-2 border-dashed border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center gap-3 hover:bg-purple-50/30 hover:border-purple-200 transition-all group min-h-[260px]"
                >
                    <div className="p-4 bg-purple-50 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        <Plus size={32} />
                    </div>
                    <p className="text-sm font-black text-slate-600 group-hover:text-purple-700">Add New Term Plan</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Semester-wise breakdown</p>
                </button>
            </div>
        </div>
    );
};

export default TermPlans;
