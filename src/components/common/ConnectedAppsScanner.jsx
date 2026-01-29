import React from 'react';
import { SOURCE_APPS } from '../../data/connectedApps';

const ConnectedAppsScanner = ({ variant = 'grid' }) => {
    // VARIANT: 'grid' (for Coordinator/Teacher) or 'row' (for Registrar/Student)
    
    // Shared Card Component
    const AppCard = ({ app }) => (
        <a 
            href={app.url} 
            className={`flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-blue-200 transition-all group ${
                variant === 'row' ? 'min-w-[100px]' : ''
            }`}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.bg} ${app.color} font-bold text-lg group-hover:scale-110 transition-transform`}>
                {app.name[0]}
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center truncate w-full">{app.name}</span>
        </a>
    );

    if (variant === 'row') {
        return (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {Object.values(SOURCE_APPS).map((app, idx) => (
                    <AppCard key={idx} app={app} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {Object.values(SOURCE_APPS).map((app, idx) => (
                <AppCard key={idx} app={app} />
            ))}
        </div>
    );
};

export default ConnectedAppsScanner;
