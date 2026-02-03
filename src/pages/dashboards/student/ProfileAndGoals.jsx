import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { authService } from '../../../services/authService';
import { User, Lock, Bell, Shield, FileText, Plus, Eye, BookOpen, Award, Zap, Briefcase, Grid } from 'lucide-react';

// New Components
import ProfileHeader from '../../../components/dashboard/student/Profile/ProfileHeader';
import { PortfolioSection } from '../../../components/dashboard/student/Profile/PortfolioComponents';
import UploadEvidenceModal from '../../../components/dashboard/student/Profile/UploadEvidenceModal';
import PortfolioShowcase from '../../../components/dashboard/student/Profile/PortfolioShowcase';
import EditProfileModal from '../../../components/dashboard/student/Profile/EditProfileModal';
import AchievementsSection from '../../../components/dashboard/student/Profile/AchievementsSection';
import ClubsAndGroupsSection from '../../../components/dashboard/student/Profile/ClubsAndGroupsSection';
import SkillBadgesSection from '../../../components/dashboard/student/Profile/SkillBadgesSection';
import HealthNotesSection from '../../../components/dashboard/student/Profile/HealthNotesSection';
import { SecurityTab, PreferencesTab, PermissionsTab, ActivityTab } from '../../../components/dashboard/student/Profile/ProfileSettingsTabs';

const ProfileAndGoals = () => {
  const { user, profileActivityLog, portfolio } = STUDENT_DATA;
  const [userData, setUserData] = useState(authService.getCurrentUser() || user);
  
  // Tab State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'security', 'preferences', 'permissions', 'activity'

  // Portfolio State
  const [portfolioItems, setPortfolioItems] = useState([
    ...(portfolio?.projects || []),
    ...(portfolio?.labs || []),
    ...(portfolio?.assessments || []),
    ...(portfolio?.cca || [])
  ]);

  // Modal States
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Settings State 
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: 'grid',
    theme: 'light'
  });

  const activityLog = profileActivityLog?.recentActivity || [];

  // Handlers
  const handleToggleShowcase = (id) => {
    setPortfolioItems(prev => prev.map(item => 
        item.id === id ? { ...item, showcase: !item.showcase } : item
    ));
  };

  const handleAddEvidence = (newItem) => {
      setPortfolioItems(prev => [{ id: Date.now(), ...newItem }, ...prev]);
  };

  const handleEditProfile = () => {
      setIsEditProfileOpen(true);
  };

  const handleSaveProfile = (updatedData) => {
      setUserData(prev => ({
          ...prev,
          about: updatedData.about,
          skills: updatedData.skills,
          goals: updatedData.goals,
          interests: updatedData.interests,
          joinedClubs: updatedData.joinedClubs,
          joinedGroups: updatedData.joinedGroups,
          email: updatedData.email,
          phone: updatedData.phone,
          avatar: updatedData.avatar
      }));
      setIsEditProfileOpen(false);
  };

  const handleEditItem = (item) => {
      setEditingItem(item);
      alert(`Edit functionality for "${item.title}" coming soon!`);
  };

  const handleEditClubGroup = (type, item) => {
      // Open edit modal or inline edit for club/group role
      const newRole = prompt(`Edit your role in ${item.name}:`, item.role);
      if (newRole && newRole.trim()) {
          setUserData(prev => {
              const key = type === 'club' ? 'joinedClubs' : 'joinedGroups';
              return {
                  ...prev,
                  [key]: prev[key].map(i => 
                      i.id === item.id ? { ...i, role: newRole.trim() } : i
                  )
              };
          });
      }
  };

  const handleDeleteClubGroup = (type, id) => {
      const confirmMsg = type === 'club' ? 'Are you sure you want to leave this club?' : 'Are you sure you want to leave this group?';
      if (confirm(confirmMsg)) {
          setUserData(prev => {
              const key = type === 'club' ? 'joinedClubs' : 'joinedGroups';
              return {
                  ...prev,
                  [key]: prev[key].filter(i => i.id !== id)
              };
          });
      }
  };

  const handleUpdateClubs = (updatedClubs) => {
      setUserData(prev => ({
          ...prev,
          joinedClubs: updatedClubs
      }));
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      
      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 flex overflow-x-auto scrollbar-hide">
        {[
            { id: 'overview', label: 'Profile & Portfolio', icon: <User size={18} /> },
            { id: 'security', label: 'Security & Login', icon: <Lock size={18} /> },
            { id: 'preferences', label: 'Preferences', icon: <Bell size={18} /> },
            { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
            { id: 'activity', label: 'Activity Log', icon: <FileText size={18} /> },
        ].map(tab => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
            >
                {tab.icon}
                {tab.label}
            </button>
        ))}
      </div>

      {/* Main Content Area */}
      
      {/* 1. PROFILE & PORTFOLIO TAB */}
      {activeTab === 'overview' && (
          <div className="animate-fade-in space-y-8">
              {/* Profile Header */}
              <ProfileHeader 
                user={userData} 
                profile={STUDENT_DATA.profile} 
                onEdit={handleEditProfile}
                onEditClub={handleEditClubGroup}
                onDeleteClub={handleDeleteClubGroup}
              />

              {/* Achievements Section */}
              <AchievementsSection user={userData} />

              {/* Clubs & Groups Section */}
              <ClubsAndGroupsSection 
                user={userData} 
                availableClubs={STUDENT_DATA.user.availableClubs || []}
                onUpdateClubs={handleUpdateClubs}
              />

              {/* Skill Badges Section */}
              <SkillBadgesSection user={userData} />

              {/* Health Notes Section */}
              <HealthNotesSection healthNotes={userData.healthNotes} />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <Grid className="text-blue-500 fill-current opacity-20" /> My Portfolio
                  </h2>
                  <div className="flex gap-3">
                      <button 
                        onClick={() => setIsShowcaseOpen(true)}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:text-blue-600 transition-all flex items-center gap-2"
                      >
                          <Eye size={18} /> Preview Showcase
                      </button>
                      <button 
                        onClick={() => setIsUploadModalOpen(true)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                      >
                          <Plus size={18} /> Add Evidence
                      </button>
                  </div>
              </div>

              {/* Portfolio Sections */}
              <div className="space-y-2">
                 {/* Projects */}
                 <PortfolioSection 
                    title="Projects" 
                    items={portfolioItems.filter(i => i.type === 'Project')} 
                    icon={Briefcase}
                    colorClass="bg-blue-500"
                    onToggleShowcase={handleToggleShowcase}
                    onEdit={handleEditItem}
                 />

                 {/* Labs */}
                 <PortfolioSection 
                    title="Labs & Experiments" 
                    items={portfolioItems.filter(i => i.type === 'Lab')} 
                    icon={Zap}
                    colorClass="bg-cyan-500"
                    onToggleShowcase={handleToggleShowcase}
                    onEdit={handleEditItem}
                 />

                 {/* Assessments */}
                 <PortfolioSection 
                    title="Assessments" 
                    items={portfolioItems.filter(i => i.type === 'Assessment')} 
                    icon={BookOpen}
                    colorClass="bg-purple-500"
                    onToggleShowcase={handleToggleShowcase}
                    onEdit={handleEditItem}
                 />

                 {/* CCA */}
                 <PortfolioSection 
                    title="Co-Curricular & Achievements" 
                    items={portfolioItems.filter(i => i.type === 'Achievement')} 
                    icon={Award}
                    colorClass="bg-pink-500"
                    onToggleShowcase={handleToggleShowcase}
                    onEdit={handleEditItem}
                 />
              </div>
          </div>
      )}

      {/* 2. SECURITY TAB */}
      {activeTab === 'security' && <SecurityTab />}

      {/* 3. PREFERENCES TAB */}
      {activeTab === 'preferences' && <PreferencesTab preferences={preferences} setPreferences={setPreferences} />}

      {/* 4. PERMISSIONS TAB */}
      {activeTab === 'permissions' && <PermissionsTab />}

      {/* 5. ACTIVITY LOG TAB */}
      {activeTab === 'activity' && <ActivityTab activityLog={activityLog} />}


      {/* Modals */}
      <UploadEvidenceModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        onSave={handleAddEvidence} 
      />

      <PortfolioShowcase 
        isOpen={isShowcaseOpen} 
        onClose={() => setIsShowcaseOpen(false)}
        user={userData}
        portfolioItems={portfolioItems}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        user={userData}
        availableClubs={STUDENT_DATA.user.availableClubs || []}
        availableGroups={STUDENT_DATA.user.availableGroups || []}
        onSave={handleSaveProfile}
      />

    </div>
  );
};

export default ProfileAndGoals;
