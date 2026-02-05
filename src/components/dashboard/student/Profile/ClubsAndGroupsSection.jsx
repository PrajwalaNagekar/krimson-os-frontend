import React, { useState } from 'react';
import { Users, Plus, X, Search, Sparkles, TrendingUp, Calendar, Award } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const ClubsAndGroupsSection = ({ user, availableClubs = [], onUpdateClubs }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('catalogue'); // catalogue, manage, dashboard
  const [selectedClub, setSelectedClub] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [joinFormData, setJoinFormData] = useState({
    motivation: '',
    preferredRole: 'Member'
  });

  // Get unique categories
  const categories = ['all', ...new Set(availableClubs.map(club => club.category))];

  // Filter clubs
  const filteredClubs = availableClubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    const notJoined = !(user.joinedClubs || []).find(c => c.id === club.id);
    return matchesSearch && matchesCategory && notJoined;
  });

  // AI Recommended clubs (mock logic based on user interests)
  const recommendedClubs = availableClubs.filter(club => {
    const userInterests = user.interests?.map(i => i.toLowerCase()) || [];
    const clubDesc = (club.description || '').toLowerCase();
    return userInterests.some(interest => clubDesc.includes(interest));
  }).map(club => club.id);

  const handleJoinClub = (club) => {
    setSelectedClub(club);
    setShowJoinForm(true);
    setActiveTab('manage'); // Auto-navigate to Join/Leave tab
  };

  const confirmJoinClub = () => {
    if (selectedClub && onUpdateClubs) {
      const updatedClubs = [
        ...(user.joinedClubs || []),
        {
          ...selectedClub,
          role: joinFormData.preferredRole,
          joinedDate: new Date().toISOString(),
          motivation: joinFormData.motivation
        }
      ];
      onUpdateClubs(updatedClubs);
      setShowJoinForm(false);
      setSelectedClub(null);
      setJoinFormData({ motivation: '', preferredRole: 'Member' });
      setActiveTab('dashboard');
    }
  };

  const handleLeaveClub = (clubId) => {
    if (confirm('Are you sure you want to leave this club?')) {
      if (onUpdateClubs) {
        const updatedClubs = (user.joinedClubs || []).filter(c => c.id !== clubId);
        onUpdateClubs(updatedClubs);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Users className="text-cyan-500" size={24} />
          Clubs & Groups
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('catalogue')}
          className={`px-4 py-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'catalogue'
              ? 'border-cyan-500 text-cyan-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Search size={16} className="inline mr-2" />
          Clubs Catalogue
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'manage'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Plus size={16} className="inline mr-2" />
          Join / Leave
        </button>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 font-bold text-sm transition-all border-b-2 ${
            activeTab === 'dashboard'
              ? 'border-teal-500 text-teal-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <TrendingUp size={16} className="inline mr-2" />
          My Clubs
        </button>
      </div>

      {/* TAB 1: Clubs Catalogue */}
      {activeTab === 'catalogue' && (
        <div className="space-y-4">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Clubs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClubs.map(club => (
              <div
                key={club.id}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedClub(selectedClub?.id === club.id ? null : club)}
              >
                {/* AI Recommendation Badge */}
                {recommendedClubs.includes(club.id) && (
                  <div className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full mb-2 w-fit">
                    <Sparkles size={12} />
                    Recommended
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {club.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{club.name}</h3>
                    <p className="text-xs text-cyan-600">{club.category}</p>
                  </div>
                </div>

                {selectedClub?.id === club.id && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-xs text-slate-600 mb-3">{club.description || 'No description available.'}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span>👥 {club.members || 0} members</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJoinClub(club);
                      }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm rounded-lg hover:shadow-lg transition-all"
                    >
                      Join Club
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredClubs.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <Search size={48} className="mx-auto mb-3 opacity-50" />
              <p>No clubs found matching your criteria</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Join/Leave Management */}
      {activeTab === 'manage' && (
        <div className="space-y-6">
          {showJoinForm && selectedClub ? (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Join {selectedClub.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Preferred Role
                  </label>
                  <select
                    value={joinFormData.preferredRole}
                    onChange={(e) => setJoinFormData({ ...joinFormData, preferredRole: e.target.value })}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="Member">Member</option>
                    <option value="Active Member">Active Member</option>
                    <option value="Volunteer">Volunteer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Why do you want to join? (Optional)
                  </label>
                  <textarea
                    value={joinFormData.motivation}
                    onChange={(e) => setJoinFormData({ ...joinFormData, motivation: e.target.value })}
                    rows={3}
                    placeholder="Share your motivation..."
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={confirmJoinClub}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm rounded-lg hover:shadow-lg transition-all"
                  >
                    Confirm Join
                  </button>
                  <button
                    onClick={() => {
                      setShowJoinForm(false);
                      setSelectedClub(null);
                    }}
                    className="flex-1 py-3 bg-red-50 text-red-600 font-bold text-sm rounded-lg hover:bg-red-100 transition-all border border-red-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Plus size={48} className="mx-auto mb-3 text-slate-300" />
              <p className="text-slate-500 mb-4">Select a club from the Catalogue to join</p>
              <button
                onClick={() => setActiveTab('catalogue')}
                className="px-6 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all"
              >
                Browse Clubs
              </button>
            </div>
          )}

          {/* Quick Leave Section */}
          {user.joinedClubs && user.joinedClubs.length > 0 && !showJoinForm && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-slate-700 mb-3">Quick Leave</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {user.joinedClubs.map(club => (
                  <div
                    key={club.id}
                    className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                        {club.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{club.name}</span>
                    </div>
                    <button
                      onClick={() => handleLeaveClub(club.id)}
                      className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: My Clubs Dashboard */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 text-center">
              <div className="text-2xl font-bold text-cyan-600">{user.joinedClubs?.length || 0}</div>
              <div className="text-xs text-slate-600">Total Clubs</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200 text-center">
              <div className="text-2xl font-bold text-teal-600">
                {user.joinedClubs?.filter(c => c.role !== 'Member').length || 0}
              </div>
              <div className="text-xs text-slate-600">Active Roles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {recommendedClubs.length}
              </div>
              <div className="text-xs text-slate-600">Recommendations</div>
            </div>
          </div>

          {/* Joined Clubs */}
          {user.joinedClubs && user.joinedClubs.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-700">My Clubs</h3>
              {user.joinedClubs.map(club => (
                <div
                  key={club.id}
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {club.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{club.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Award size={12} className="text-cyan-500" />
                          <span>{club.role}</span>
                          {club.joinedDate && (
                            <>
                              <span>•</span>
                              <Calendar size={12} className="text-slate-400" />
                              <span>Joined {new Date(club.joinedDate).toLocaleDateString()}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate('/dashboard/student/communication')}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                        >
                          Club Home
                        </button>
                        <button
                          onClick={() => handleLeaveClub(club.id)}
                          className="px-3 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded-lg hover:bg-red-100 transition-colors border border-red-100"
                        >
                          Leave
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl">
              <Users size={48} className="mx-auto mb-3 text-slate-300" />
              <p className="text-slate-500 mb-4">You haven't joined any clubs yet</p>
              <button
                onClick={() => setActiveTab('catalogue')}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Explore Clubs
              </button>
            </div>
          )}

          {/* Groups Section (Read-only from backend) */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-teal-700">My Groups</h3>
              <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">From Backend</span>
            </div>
            {user.joinedGroups && user.joinedGroups.length > 0 ? (
              <div className="space-y-2">
                {user.joinedGroups.map(group => (
                  <div
                    key={group.id}
                    className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                        {group.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{group.name}</h4>
                        <p className="text-xs text-teal-600">{group.role || 'Member'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-slate-50 rounded-xl">
                <p className="text-sm text-slate-400">No groups assigned</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubsAndGroupsSection;
