import React from "react";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";

/**
 * @component TabNavigation
 * @description Premium tab navigation for PTM Manager
 */
const TabNavigation = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: "scheduler", label: "Scheduler", icon: Calendar },
        { id: "agenda", label: "Agenda", icon: FileText },
        { id: "tracker", label: "Tracker", icon: CheckCircle2 },
    ];

    return (
        <div className="flex justify-center py-4">
            <div className="inline-flex bg-white/80 backdrop-blur-xl rounded-[2rem] p-2 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.1)] border border-indigo-50/50 ring-1 ring-white/50">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`group flex items-center gap-3 px-8 py-4 rounded-[1.5rem] font-bold transition-all duration-500 relative overflow-hidden ${isActive
                                    ? "text-white"
                                    : "text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50"
                                }`}
                        >
                            {/* Active Background Pill */}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-700 shadow-lg animate-in fade-in zoom-in-95 duration-500"></div>
                            )}

                            <div className="relative z-10 flex items-center gap-2">
                                <Icon
                                    size={18}
                                    className={`transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:rotate-12"}`}
                                />
                                <span className="text-xs uppercase tracking-widest">{tab.label}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TabNavigation;

