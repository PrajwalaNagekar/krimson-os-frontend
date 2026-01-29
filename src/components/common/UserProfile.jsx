import React from 'react';
import { Mail, MapPin, Briefcase, Edit2, Share2, Award, Heart, Target } from 'lucide-react';

/**
 * Common Screen 10: Profile & Access Management
 * Roles: All Roles (Student, Teacher, Admin, Parent, etc.)
 * 
 * Used in:
 * - src/pages/dashboards/teacher/TeacherProfile.jsx
 * - src/pages/dashboards/student/ProfileAndGoals.jsx
 * 
 * Logic:
 * - Displays user profile header with avatar and role info.
 * - Renders specific sections based on role (Professional vs Academic).
 */

const UserProfile = ({ role, user, detailedInfo }) => {
  const isStudent = role === 'student';
  const isTeacher = role === 'teacher';

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Common Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
         {/* Background Decoration */}
         <div className={`absolute inset-0 bg-gradient-to-r ${isStudent ? 'from-cyan-400 via-blue-400 to-pink-400' : 'from-indigo-500 to-purple-500'}`}>
            {isStudent && (
               <>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-[-20px] -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
                  <div className="absolute top-10 left-1/3 w-20 h-20 bg-blue-300 opacity-20 rounded-full blur-xl"></div>
               </>
            )}
         </div>
         
         {/* Avatar */}
         <div className="relative z-10 mt-12">
            <img src={user.avatar || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white object-cover" />
         </div>
         
         {/* Info */}
         <div className="flex-1 mt-16 text-center md:text-left relative z-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div>
                  <h1 className={`text-3xl font-bold ${isStudent ? 'text-white' : 'text-slate-800'}`}>{user.name}</h1>
                  <p className={`${isStudent ? 'text-blue-100' : 'text-indigo-600'} font-bold uppercase text-sm tracking-wide mt-1`}>{user.role} {user.section && `• ${user.section}`}</p>
               </div>
               <button onClick={detailedInfo?.onEditProfile} className={`mt-4 md:mt-0 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 backdrop-blur-sm transition-colors ${isStudent ? 'bg-white/20 border border-white/30 text-white hover:bg-white/30' : 'border border-slate-200 text-slate-600 hover:bg-slate-50 bg-white/80'}`}>
                  <Edit2 size={16} /> Edit Profile
               </button>
            </div>
            
            {/* Badges / Stats */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
               {user.house && (
                   <span className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${isStudent ? 'bg-white/20 text-white border-white/30' : 'bg-red-50 text-red-600 border-red-100'}`}>
                      House: {user.house}
                   </span>
               )}
               {user.email && (
                   <span className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg ${isStudent ? 'bg-white/20 text-white' : 'text-slate-500 bg-slate-50'}`}>
                      <Mail size={14}/> {user.email}
                   </span>
               )}
               {user.experience && (
                   <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <Briefcase size={14}/> {user.experience} Exp.
                   </span>
               )}
               {user.location && (
                   <span className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg ${isStudent ? 'bg-white/20 text-white' : 'text-slate-500 bg-slate-50'}`}>
                      <MapPin size={14}/> {user.location}
                   </span>
               )}
            </div>
         </div>
      </div>

      {/* Achievements & Leaderboard Section (Student Only) */}
      {isStudent && (
         <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                   <Award className="text-yellow-500" size={20} />
                   <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Achievements & Leaderboard</span>
                </h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Leaderboard Stats */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-100">
                   <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-slate-500 uppercase">Overall Grade</h4>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{detailedInfo?.leaderboard?.percentile}</span>
                   </div>
                   <div className="flex items-end gap-2 mb-2">
                      <span className="text-4xl font-bold text-slate-800">{detailedInfo?.overallGrade || 'A'}</span>
                      <span className="text-sm font-bold text-slate-400 mb-2">Average</span>
                   </div>
                   <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" style={{ width: '90%' }}></div>
                   </div>
                   <div className="mt-4 flex justify-between text-xs font-bold text-slate-500">
                      <span>Total Points: {detailedInfo?.leaderboard?.points}</span>
                      <span>{detailedInfo?.leaderboard?.weeklyChange} this week</span>
                   </div>
                </div>

                {/* Recent Badges */}
                <div>
                   <h4 className="text-sm font-bold text-slate-500 uppercase mb-4">Recent Badges</h4>
                   <div className="space-y-3">
                      {detailedInfo?.achievements?.map(badge => (
                         <div key={badge.id} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${badge.color}-100 text-${badge.color}-600`}>
                               <span className="material-icons-outlined text-xl">★</span> {/* Using a generic star as icon placeholder since we don't have the icon library for strings */ }
                            </div>
                            <div>
                               <h5 className="text-sm font-bold text-slate-700">{badge.title}</h5>
                               <p className="text-xs text-slate-400">{badge.date}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
         </div>
      )}

      {/* Role Specific Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
         {/* Left Column */}
         <div className={`rounded-3xl p-8 shadow-lg space-y-6 relative overflow-hidden ${isStudent ? 'bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30' : 'bg-white'}`}>
            {isStudent && (
               <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 opacity-20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200 opacity-20 rounded-full blur-2xl"></div>
               </>
            )}
            <div className="relative z-10 flex justify-between items-center">
               <h3 className={`font-bold text-lg pb-4 mb-4 flex-1 flex items-center gap-2 ${isStudent ? 'border-b-2 border-gradient-to-r from-cyan-300 to-pink-300' : 'border-b border-slate-100'}`}>
                  {isTeacher ? (
                     <span className="text-slate-800">Professional Details</span>
                  ) : (
                     <>
                        <Target className="text-blue-500" size={20} />
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Academic Goals</span>
                     </>
                  )}
               </h3>
               {isStudent && (
                   <button onClick={detailedInfo?.onEditGoals} className="p-2 bg-white/50 hover:bg-white rounded-full text-slate-500 hover:text-blue-500 transition-all">
                       <Edit2 size={16} />
                   </button>
               )}
            </div>
            
            {isTeacher && (
                <>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Subjects Taught</h4>
                        <div className="flex flex-wrap gap-2">
                           {user.subjects?.map(s => (
                              <span key={s} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">{s}</span>
                           ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 pt-4">Qualifications</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                           {user.qualifications?.map(q => <li key={q}>{q}</li>)}
                        </ul>
                    </div>
                </>
            )}

            {isStudent && (
                <ul className="space-y-3 relative z-10">
                   {detailedInfo?.goals?.map((g, i) => (
                      <li key={i} className="group relative">
                         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="relative flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                               <Target size={20} className="text-white" />
                            </div>
                            <span className="text-sm text-slate-700 font-semibold">{g}</span>
                         </div>
                      </li>
                   ))}
                </ul>
            )}
         </div>

         {/* Right Column */}
         <div className={`rounded-3xl p-8 shadow-lg space-y-6 relative overflow-hidden ${isStudent ? 'bg-gradient-to-br from-white via-pink-50/30 to-blue-50/30' : 'bg-white'}`}>
            {isStudent && (
               <>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-300 opacity-20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-200 opacity-20 rounded-full blur-2xl"></div>
               </>
            )}
            <div className="relative z-10 flex justify-between items-center">
               <h3 className={`font-bold text-lg pb-4 mb-4 flex-1 flex items-center gap-2 ${isStudent ? 'border-b-2 border-gradient-to-r from-pink-300 to-cyan-300' : 'border-b border-slate-100'}`}>
                  {isTeacher ? (
                     <>
                        <Award className="text-yellow-500"/>
                        <span className="text-slate-800">Portfolio Highlights</span>
                     </>
                  ) : (
                     <>
                        <Heart className="text-pink-500"/>
                        <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Interests & Clubs</span>
                     </>
                  )}
               </h3>
               {isStudent && (
                   <button onClick={detailedInfo?.onEditInterests} className="p-2 bg-white/50 hover:bg-white rounded-full text-slate-500 hover:text-pink-500 transition-all">
                       <Edit2 size={16} />
                   </button>
               )}
            </div>

            {isTeacher && (
                <div className="space-y-4">
                    <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50">
                        <h4 className="font-bold text-slate-700 text-sm mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                            {detailedInfo?.certifications?.map(c => (
                                <span key={c} className="px-2 py-1 bg-white text-slate-600 text-[10px] font-bold rounded border border-slate-200 shadow-sm">{c}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            {detailedInfo?.workshops?.map(w => (
                                <li key={w} className="text-xs text-slate-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {isStudent && (
                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {detailedInfo?.interests?.map((int, idx) => (
                            <span 
                               key={int} 
                               className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 text-xs font-bold rounded-xl border-2 border-pink-200 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer"
                               style={{
                                  animationDelay: `${idx * 0.1}s`
                               }}
                            >
                               {int}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
                            <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                            Active Clubs
                        </h4>
                       <button onClick={detailedInfo?.onEditClubs} className="p-1 bg-white/50 hover:bg-white rounded-full text-slate-400 hover:text-blue-500 transition-all">
                           <Edit2 size={12} />
                       </button>
                    </div>
                    <div className="space-y-2">
                        {detailedInfo?.clubs?.map(club => (
                            <div key={club} className="group flex items-center gap-3 text-sm font-bold text-slate-700 p-3 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                                   <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <span className="group-hover:text-blue-600 transition-colors">{club}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
         </div>

      </div>
    </div>
  );
};

export default UserProfile;
