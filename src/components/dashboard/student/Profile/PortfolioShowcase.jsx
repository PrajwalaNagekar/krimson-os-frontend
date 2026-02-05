import React from 'react';
import { X, Share2, Download, Printer } from 'lucide-react';
import { PortfolioCard } from './PortfolioComponents';

const PortfolioShowcase = ({ isOpen, onClose, user, portfolioItems }) => {
  if (!isOpen) return null;

  // Filter only showcased items
  const showcasedItems = portfolioItems.filter(item => item.showcase);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-auto animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                <X size={24} />
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <h2 className="font-bold text-lg text-slate-800">Portfolio Showcase</h2>
        </div>
        
        <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                <Printer size={18} /> Print
             </button>
             <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                <Download size={18} /> PDF
             </button>
             <button className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-black hover:bg-gray-800 shadow-md transition-all">
                <Share2 size={18} /> Share Public Link
             </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
            <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-pink-500 mb-6">
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover border-4 border-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">{user.name}</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{user.about}</p>
            
            <div className="flex justify-center flex-wrap gap-2 mt-8">
                 {user.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-sm">
                        {skill}
                    </span>
                 ))}
            </div>
      </div>

      {/* Profile Details Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-sm font-bold text-blue-700 mb-4 flex items-center gap-2">
              📧 Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-sm font-bold text-slate-800">{user.email}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Phone</p>
                <p className="text-sm font-bold text-slate-800">{user.phone}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Student ID</p>
                <p className="text-sm font-bold text-slate-800">{user.id}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Section</p>
                <p className="text-sm font-bold text-slate-800">{user.section} • {user.house}</p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
            <h3 className="text-sm font-bold text-pink-700 mb-4 flex items-center gap-2">
              ❤️ My Interests
            </h3>
            <ul className="space-y-2">
              {user.interests && user.interests.map((interest, idx) => (
                <li key={idx} className="text-xs font-medium text-slate-600 flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-sm font-bold text-purple-700 mb-4 flex items-center gap-2">
              🎯 My Goals
            </h3>
            <ul className="space-y-2">
              {user.goals && user.goals.map((goal, idx) => (
                <li key={idx} className="text-xs font-medium text-slate-600 flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">✓</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clubs & Groups Section */}
        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-100">
          <h3 className="text-lg font-bold text-cyan-800 mb-4 flex items-center gap-2">
            👥 Clubs & Groups
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Clubs */}
            <div>
              <h4 className="text-sm font-bold text-cyan-700 mb-3">My Clubs</h4>
              {user.joinedClubs && user.joinedClubs.length > 0 ? (
                <div className="space-y-2">
                  {user.joinedClubs.map((club, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-cyan-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {club.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800">{club.name}</p>
                        <p className="text-xs text-cyan-600">{club.category} • {club.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">No clubs joined</p>
              )}
            </div>

            {/* Groups */}
            <div>
              <h4 className="text-sm font-bold text-teal-700 mb-3">My Groups</h4>
              {user.joinedGroups && user.joinedGroups.length > 0 ? (
                <div className="space-y-2">
                  {user.joinedGroups.map((group, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-teal-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        {group.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800">{group.name}</p>
                        <p className="text-xs text-teal-600">{group.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">No groups assigned</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Showcased Items Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
          {showcasedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showcasedItems.map(item => (
                    <div key={item.id} className="cursor-default pointer-events-none">
                        {/* We use the same card but disable interaction for the polish view, or render a specialized view */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold mb-2">
                                            {item.type}
                                        </span>
                                        <h3 className="text-white font-bold text-xl leading-tight">{item.title}</h3>
                                        <p className="text-white/70 text-sm mt-1">{item.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-lg">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 font-medium">No items added to showcase yet.</p>
                <p className="text-slate-300 text-sm mt-2">Star items in your portfolio to see them here.</p>
            </div>
          )}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border-t border-slate-200 py-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
               <div className="w-6 h-6 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg"></div>
               <span className="font-bold text-slate-700">Krimson OS</span>
            </div>
            <p className="text-slate-400 text-sm">© 2026 Student Portfolio System. All rights reserved.</p>
      </div>

    </div>
  );
};

export default PortfolioShowcase;
