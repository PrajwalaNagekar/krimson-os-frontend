import React from 'react';
import { BookOpen, CheckCircle, Clock, Award } from 'lucide-react';

const StatsSection = ({ totalLessons, countByStatus }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-cyan-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Lessons</p>
                    <BookOpen className="text-cyan-400 opacity-60" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{totalLessons}</h3>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Taught</p>
                    <CheckCircle className="text-green-400 opacity-60" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-600">{countByStatus('Taught')}</h3>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-orange-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending</p>
                    <Clock className="text-orange-400 opacity-60" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{countByStatus('Pending')}</h3>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border-l-4 border-purple-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completion</p>
                    <Award className="text-purple-400 opacity-60" size={20} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
                    {totalLessons > 0 ? Math.round((countByStatus('Taught') / totalLessons) * 100) : 0}%
                </h3>
            </div>
        </div>
    );
};

export default StatsSection;
