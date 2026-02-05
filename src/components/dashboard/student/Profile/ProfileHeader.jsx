import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Edit2,
  IdCard,
} from "lucide-react";

const ProfileHeader = ({
  user,
  profile,
  onEdit,
  onEditClub,
  onDeleteClub,
  onViewID,
}) => {
  // Handlers for club/group actions
  const handleEdit = (type, item) => {
    if (onEditClub) onEditClub(type, item);
  };

  const handleDelete = (type, id) => {
    if (onDeleteClub) onDeleteClub(type, id);
  };

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-8 group hover:shadow-md transition-all duration-300">
      {/* Decorative Gradient Background */}
      <div className="h-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 opacity-90 group-hover:opacity-100 transition-opacity"></div>

      <div className="px-8 pb-8">
        <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-12 mb-6 gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg overflow-hidden bg-white">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left mb-2 md:mb-0">
            <h1 className="text-3xl font-bold text-slate-800 mb-1">
              {user.name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-slate-500 font-medium text-sm">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <Award size={14} className="text-blue-500" /> {user.role}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <BookOpen size={14} className="text-pink-500" /> {user.section}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <MapPin size={14} className="text-cyan-500" /> {user.house}
              </span>
            </div>
          </div>

          {/* Contact / Quick Stats (Optional) */}
          <div className="flex gap-3">
            <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-colors">
              <Mail size={20} />
            </button>
            <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-green-500 hover:bg-green-50 transition-colors">
              <Phone size={20} />
            </button>
            <button
              onClick={onViewID}
              title="Digital Student ID"
              className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-purple-500 hover:bg-purple-50 transition-colors"
            >
              <IdCard size={20} />
            </button>
            <button
              onClick={onEdit}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Edit2 size={18} /> Edit Profile
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/60 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            About My Learning
          </h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            {user.about || "No about text available."}
          </p>

          {/* Skills Tags */}
          {user.skills && user.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm"
                >
                  #{skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Goals, Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* My Goals */}
          {user.goals && user.goals.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
              <h4 className="text-sm font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span> My Goals
              </h4>
              <ul className="space-y-2">
                {user.goals.map((goal, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-medium text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* My Interests */}
          {user.interests && user.interests.length > 0 && (
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100">
              <h4 className="text-sm font-bold text-pink-700 mb-3 flex items-center gap-2">
                <span className="text-lg">❤️</span> My Interests
              </h4>
              <ul className="space-y-2">
                {user.interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-medium text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-pink-500 mt-0.5">•</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
