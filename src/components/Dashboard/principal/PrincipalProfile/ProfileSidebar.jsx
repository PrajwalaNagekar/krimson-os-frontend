import React from "react";
import { User, Camera, Lock, Bell, Shield, FileText } from "lucide-react";

const ProfileSidebar = ({ user, activeTab, setActiveTab, theme }) => {
  const tabs = [
    { id: "overview", label: "Profile Overview", icon: <User size={18} /> },
    { id: "security", label: "Security & Login", icon: <Lock size={18} /> },
    { id: "preferences", label: "Preferences", icon: <Bell size={18} /> },
    { id: "permissions", label: "Permissions", icon: <Shield size={18} /> },
    { id: "activity", label: "Activity Log", icon: <FileText size={18} /> },
  ];

  return (
    <div className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden sticky top-8">
        {/* Dynamic Gradient Header */}
        <div
          className={`h-32 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 -left-8 w-24 h-24 bg-pink-300 opacity-30 rounded-full blur-xl"></div>
        </div>
        <div className="px-6 pb-6 -mt-16 flex flex-col items-center text-center relative z-10">
          <div className="relative group cursor-pointer mb-3">
            <div className="w-28 h-28 rounded-3xl bg-white p-1.5 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={40} />
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={24} className="text-white" />
            </div>
          </div>
          <h3 className="font-bold text-slate-800 text-xl">{user.name}</h3>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full mt-2 ${theme.bg} ${theme.text} uppercase tracking-wider`}
          >
            Principal
          </span>
        </div>

        <nav className="p-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-slate-50 to-white text-blue-600 shadow-md border border-slate-100 font-bold"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ProfileSidebar;
