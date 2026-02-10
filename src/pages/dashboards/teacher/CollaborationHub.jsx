import React, { useState } from 'react';
import { Users2, FileEdit, Eye } from 'lucide-react';
import DiscussionHub from '../../../components/dashboard/teacher/collaboration/DiscussionHub';
import CoPlanningWorkspace from '../../../components/dashboard/teacher/collaboration/CoPlanningWorkspace';
import PeerObservation from '../../../components/dashboard/teacher/collaboration/PeerObservation';
import ProfessionalGrowthHub from '../../../components/dashboard/teacher/collaboration/ProfessionalGrowthHub';
import { Target } from 'lucide-react';

const CollaborationHub = () => {
    const [activeTab, setActiveTab] = useState('discussions');

    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${activeTab === id
                ? 'bg-white text-blue-600 shadow-xl scale-105 ring-1 ring-black/5'
                : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
        >
            <Icon size={16} />
            <span className="hidden md:inline">{label}</span>
        </button>
    );

    return (
        <div className="space-y-8">
            {/* HEADER SECTION */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:scale-125 transition-transform duration-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>

                <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                    <div>
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
                            Professional Development
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                            Teacher Collaboration Space
                        </h1>
                        <p className="text-sm md:text-base text-white/90 font-medium max-w-2xl">
                            Share ideas, co-plan lessons, and provide professional feedback
                        </p>
                    </div>

                    {/* Glass Ribbon Tabs */}
                    <div className="inline-flex p-1.5 bg-black/10 backdrop-blur-xl rounded-[1.5rem] border border-white/10 shadow-lg relative z-20 overflow-x-auto">
                        <TabButton id="discussions" label="Discussions" icon={Users2} />
                        <TabButton id="co-planning" label="Co-Planning" icon={FileEdit} />
                        <TabButton id="observations" label="Observations" icon={Eye} />
                        <TabButton id="growth" label="Growth" icon={Target} />
                    </div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="min-h-[600px]">
                {activeTab === 'discussions' && <DiscussionHub />}
                {activeTab === 'co-planning' && <CoPlanningWorkspace />}
                {activeTab === 'observations' && <PeerObservation />}
                {activeTab === 'growth' && <ProfessionalGrowthHub />}
            </div>
        </div>
    );
};

export default CollaborationHub;
