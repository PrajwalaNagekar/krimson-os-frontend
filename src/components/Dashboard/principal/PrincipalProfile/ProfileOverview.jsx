import React from "react";
import { Save, Briefcase, Award, CheckCircle, Edit3 } from "lucide-react";

const ProfileOverview = ({
  user,
  setUser,
  handleSave,
  theme,
  professionalHistory,
  achievements,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Personal Information */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
        ></div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Personal Information
          </h2>
          <button
            onClick={handleSave}
            className={`px-5 py-2.5 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 bg-gradient-to-r ${theme.gradient}`}
          >
            <Save size={18} /> Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Full Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Professional Title
            </label>
            <input
              type="text"
              value={user.title}
              onChange={(e) => setUser({ ...user, title: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Email Address
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl opacity-70 cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Phone Number
            </label>
            <input
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
            />
          </div>
          <div className="col-span-1 md:col-span-2 space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Bio / About
            </label>
            <textarea
              rows="4"
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      {/* Professional History Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Briefcase className="text-indigo-500" size={24} />
            Professional History
          </h2>
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            <Edit3 size={16} /> Edit
          </button>
        </div>

        <div className="space-y-4">
          {professionalHistory.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={20} />
                </div>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-lg">{item.role}</p>
                <p className="text-slate-600 font-medium">{item.institution}</p>
                <p className="text-sm text-indigo-500 font-bold mt-1 bg-indigo-50 inline-block px-3 py-1 rounded-lg">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
          <Award className="text-amber-500" size={24} />
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100"
            >
              <CheckCircle
                className="text-amber-600 flex-shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-slate-800 font-medium">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
