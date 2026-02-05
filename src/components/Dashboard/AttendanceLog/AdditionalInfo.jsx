import React from 'react';
import { FileText, CheckCircle, TrendingUp } from 'lucide-react';

const AdditionalInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <FileText className="text-blue-500" size={20} />
                    Attendance Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Mark attendance within first 15 minutes of class</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Add reasons for all absent students</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Parents are auto-notified upon submission</span>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl border border-pink-100">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="text-pink-500" size={20} />
                    Class Performance
                </h3>
                <div className="space-y-3">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-600">Weekly Average</span>
                            <span className="text-sm font-bold text-slate-800">94%</span>
                        </div>
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '94%' }} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-600">Monthly Average</span>
                            <span className="text-sm font-bold text-slate-800">92%</span>
                        </div>
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" style={{ width: '92%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
