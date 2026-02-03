import React, { useState } from 'react';
import { X, User, BookOpen, Users, Mail, Phone, Camera } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, user, availableClubs = [], availableGroups = [], onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    about: user.about || '',
    skills: user.skills ? user.skills.join(', ') : '',
    goals: user.goals ? user.goals.join('\n') : '',
    interests: user.interests ? user.interests.join('\n') : '',
    joinedClubs: user.joinedClubs || [],
    joinedGroups: user.joinedGroups || [],
    email: user.email || '',
    phone: user.phone || '',
    avatar: user.avatar || ''
  });

  const [activeSection, setActiveSection] = useState('profile'); // 'profile', 'details', 'contact'

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(Boolean);
    const goalsArray = formData.goals.split('\n').map(s => s.trim()).filter(Boolean);
    const interestsArray = formData.interests.split('\n').map(s => s.trim()).filter(Boolean);
    
    onSave({
      about: formData.about,
      skills: skillsArray,
      goals: goalsArray,
      interests: interestsArray,
      joinedClubs: formData.joinedClubs,
      joinedGroups: formData.joinedGroups,
      email: formData.email,
      phone: formData.phone,
      avatar: formData.avatar
    });
    onClose();
  };

  const handleAvatarChange = () => {
    // Simulate avatar upload
    alert('Avatar upload coming soon! For now, the avatar is managed through your account settings.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-slate-100 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800">Edit Profile</h3>
              <p className="text-slate-500 text-sm">Update your complete profile</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="sticky top-[89px] bg-white z-10 border-b border-slate-100 px-6 flex gap-2">
          {[
            { id: 'profile', label: 'Profile & About', icon: <BookOpen size={16} /> },
            { id: 'contact', label: 'Contact & Avatar', icon: <Mail size={16} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-bold text-sm transition-all border-b-2 ${
                activeSection === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* SECTION 1: Profile & About */}
          {activeSection === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
                  <BookOpen size={18} className="text-blue-500" />
                  About My Learning
                </label>
                <textarea
                  rows={8}
                  placeholder="Tell us about your learning journey, interests, and goals..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 resize-none"
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                />
                <p className="text-xs text-slate-400 mt-2">
                  {formData.about.length} characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Skills & Interests Tags
                </label>
                <input
                  type="text"
                  placeholder="e.g. Physics, Coding, Debate, Robotics"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                />
                <p className="text-xs text-slate-400 mt-2">Separate with commas</p>
              </div>

              {formData.skills && (
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2">Skills Preview</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.split(',').map((skill, i) => {
                      const trimmed = skill.trim();
                      if (!trimmed) return null;
                      return (
                        <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm">
                          #{trimmed}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}


          {/* SECTION 2: Contact & Avatar */}
          {activeSection === 'contact' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Avatar Upload */}
              <div className="text-center">
                <label className="block text-sm font-bold text-slate-700 mb-4">Profile Picture</label>
                <div className="relative inline-block">
                  <img
                    src={formData.avatar || user.avatar}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full object-cover border-4 border-slate-100 shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={handleAvatarChange}
                    className="absolute bottom-0 right-0 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:scale-110 transition-transform"
                  >
                    <Camera size={20} />
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-3">Click camera icon to upload new photo</p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
                  <Mail size={18} className="text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="student@school.edu"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
                  <Phone size={18} className="text-green-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-semibold text-slate-700"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800 font-medium">
                  ℹ️ Your contact information is visible only to teachers and administrators.
                </p>
              </div>
            </div>
          )}

          {/* Sticky Actions Bar */}
          <div className="sticky bottom-0 bg-white border-t border-slate-100 flex items-center justify-between gap-3 pt-6 -mx-8 px-8 -mb-8 pb-8">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              Save All Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
