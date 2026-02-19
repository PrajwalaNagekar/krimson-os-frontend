import React from "react";
import { Users, Calendar, Clock, AlertCircle } from "lucide-react";

/**
 * @component PTMStats
 * @description High-fidelity stats overview card for PTM Management
 */
const PTMStats = ({ stats }) => {
    const statCards = [
        {
            id: "total",
            label: "Total Slots",
            value: stats.total,
            sub: "Configured Today",
            icon: Calendar,
            color: "blue",
        },
        {
            id: "booked",
            label: "Booked Slots",
            value: stats.booked,
            sub: `${((stats.booked / stats.total) * 100).toFixed(0)}% Fill Rate`,
            icon: Users,
            color: "emerald",
        },
        {
            id: "pending",
            label: "Pending",
            value: stats.total - stats.booked,
            sub: "To be allocated",
            icon: Clock,
            color: "orange",
        },
        {
            id: "actions",
            label: "Open Actions",
            value: stats.openActions,
            sub: "Requires Follow-up",
            icon: AlertCircle,
            color: "pink",
        },
    ];

    const colorMap = {
        blue: "from-blue-500 to-indigo-600 bg-blue-50 text-blue-600",
        emerald: "from-emerald-500 to-teal-600 bg-emerald-50 text-emerald-600",
        orange: "from-orange-400 to-amber-600 bg-orange-50 text-orange-600",
        pink: "from-pink-500 to-rose-600 bg-pink-50 text-pink-600",
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {statCards.map((stat) => {
                const Icon = stat.icon;
                const [gradient, bg, text] = colorMap[stat.color].split(" ");

                return (
                    <div
                        key={stat.id}
                        className="group relative bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500 overflow-hidden cursor-pointer"
                    >
                        {/* Background Glow */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-full blur-2xl -mr-12 -mt-12 transition-opacity duration-700`}></div>

                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <div className={`p-3 ${bg} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                                <Icon size={24} className={text} />
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-slate-800 tabular-nums">
                                    {stat.value}
                                </span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-sm font-bold text-slate-700 mb-1 group-hover:text-indigo-600 transition-colors">
                                {stat.label}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {stat.sub}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PTMStats;
