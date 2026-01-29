import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { 
  Users, Link2, CheckCircle, AlertCircle, Mail, MessageSquare,
  Calendar, Clock, Eye, EyeOff, Bell, Award, CreditCard,
  CalendarCheck, TrendingUp, ExternalLink, User, MapPin
} from 'lucide-react';

/**
 * Parent Link Dashboard - Screen 13
 * Purpose: Synchronization between student and parent accounts
 * Future: Replace static data with Parent Module + Communication Sync API
 */
const ParentLinkDashboard = () => {
  const { parentLinkData } = STUDENT_DATA;
  const [acknowledgedItems, setAcknowledgedItems] = useState(new Set());

  // Future API: Acknowledge message or activity
  const handleAcknowledge = (itemId, type) => {
    console.log(`Future API: POST /api/student/parentlink/acknowledge`, { itemId, type });
    setAcknowledgedItems(prev => new Set([...prev, itemId]));
  };

  // Future API: Mark message as read
  const markAsRead = (messageId) => {
    console.log(`Future API: PUT /api/student/parentlink/messages/${messageId}/read`);
  };

  // Count unread items
  const unreadMessages = parentLinkData.parentalMessages.filter(m => !m.read).length;
  const unreadComments = parentLinkData.teacherComments.filter(c => !c.read).length;

  return (
    <div className="space-y-6">
      {/* Header - Parent Sync Status */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Users size={32} />
                Parent Link Dashboard
              </h1>
              <p className="text-white/90 text-sm md:text-base">View what your parent sees and receive parental messages</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold">Synced</span>
            </div>
          </div>

          {/* Alert Badge */}
          {(unreadMessages > 0 || unreadComments > 0) && (
            <div className="inline-flex bg-orange-500/80 backdrop-blur-sm px-4 py-2 rounded-xl items-center gap-2">
              <Bell size={18} />
              <span className="text-sm font-bold">
                {unreadMessages + unreadComments} New {unreadMessages + unreadComments === 1 ? 'Alert' : 'Alerts'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Parent Info Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <User className="text-blue-500" size={24} />
          Linked Parent Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
            <div className="p-2 bg-blue-200 rounded-xl">
              <User size={20} className="text-blue-700" />
            </div>
            <div>
              <div className="text-sm text-blue-600 font-medium">Parent Name</div>
              <div className="font-bold text-blue-900">{parentLinkData.parentInfo.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
            <div className="p-2 bg-green-200 rounded-xl">
              <Mail size={20} className="text-green-700" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm text-green-600 font-medium">Email</div>
              <div className="font-bold text-green-900 truncate">{parentLinkData.parentInfo.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-2xl">
            <div className="p-2 bg-purple-200 rounded-xl">
              <Link2 size={20} className="text-purple-700" />
            </div>
            <div>
              <div className="text-sm text-purple-600 font-medium">Linked Since</div>
              <div className="font-bold text-purple-900">{parentLinkData.parentInfo.linkedDate}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-2xl">
            <div className="p-2 bg-pink-200 rounded-xl">
              <TrendingUp size={20} className="text-pink-700" />
            </div>
            <div>
              <div className="text-sm text-pink-600 font-medium">Sync Status</div>
              <div className="font-bold text-pink-900">{parentLinkData.parentInfo.syncEnabled ? 'Active' : 'Paused'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Mirror Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Eye className="text-purple-500" size={24} />
            What Your Parent Sees
          </h2>
          <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-lg">
            Read-Only Mirror
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Attendance Mirror */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-200 rounded-xl">
                <CalendarCheck className="text-blue-700" size={24} />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">Attendance</span>
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-1">
              {parentLinkData.mirrorData.attendance.percentage}%
            </div>
            <div className="text-sm text-blue-600 mb-3">Overall Attendance</div>
            <div className="flex gap-4 text-xs text-blue-700">
              <div>
                <span className="font-bold">{parentLinkData.mirrorData.attendance.present}</span> Present
              </div>
              <div>
                <span className="font-bold">{parentLinkData.mirrorData.attendance.absent}</span> Absent
              </div>
            </div>
          </div>

          {/* Results Mirror */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-200 rounded-xl">
                <Award className="text-green-700" size={24} />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">Results</span>
            </div>
            <div className="text-3xl font-bold text-green-900 mb-1">
              {parentLinkData.mirrorData.latestResults.overall}
            </div>
            <div className="text-sm text-green-600 mb-3">{parentLinkData.mirrorData.latestResults.term}</div>
            <div className="text-xs text-green-700">
              <span className="font-bold">{parentLinkData.mirrorData.latestResults.overallPercentage}%</span> Average
            </div>
          </div>

          {/* Fee Status Mirror */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border-2 border-orange-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-200 rounded-xl">
                <CreditCard className="text-orange-700" size={24} />
              </div>
              <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">Fees</span>
            </div>
            <div className="text-3xl font-bold text-orange-900 mb-1">
              ${parentLinkData.mirrorData.feeStatus.pending}
            </div>
            <div className="text-sm text-orange-600 mb-3">{parentLinkData.mirrorData.feeStatus.status}</div>
            <div className="text-xs text-orange-700">
              Due: <span className="font-bold">{parentLinkData.mirrorData.feeStatus.dueDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Parental Messages */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Mail className="text-orange-500" size={24} />
            Parental Messages
            {unreadMessages > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadMessages}
              </span>
            )}
          </h2>
        </div>

        <div className="space-y-4">
          {parentLinkData.parentalMessages.map((message) => {
            const isAcknowledged = acknowledgedItems.has(message.id) || message.acknowledged;
            return (
              <div key={message.id}
                   className={`rounded-2xl p-5 border-2 transition-all ${
                     message.read 
                       ? 'bg-slate-50 border-slate-100' 
                       : 'bg-orange-50 border-orange-200'
                   }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${message.read ? 'bg-slate-200' : 'bg-orange-200'}`}>
                      <User size={18} className={message.read ? 'text-slate-600' : 'text-orange-700'} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{message.subject}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>{message.from}</span>
                        <span>•</span>
                        <span>{message.date} at {message.time}</span>
                      </div>
                    </div>
                  </div>
                  {!message.read && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
                </div>

                <p className="text-sm text-slate-700 mb-3 leading-relaxed">{message.message}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  {message.requiresAck && !isAcknowledged && (
                    <button
                      onClick={() => handleAcknowledge(message.id, 'message')}
                      className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105">
                      <CheckCircle size={14} />
                      Acknowledge
                    </button>
                  )}
                  {isAcknowledged && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                      <CheckCircle size={14} />
                      Acknowledged
                    </div>
                  )}
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 italic opacity-70 ml-auto">
                    Go to App <ExternalLink size={10} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Teacher Comments */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <MessageSquare className="text-blue-500" size={24} />
            Teacher Comments (Shared with Parent)
            {unreadComments > 0 && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadComments}
              </span>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parentLinkData.teacherComments.map((comment) => (
            <div key={comment.id}
                 className={`rounded-2xl p-5 border-2 ${
                   comment.read 
                     ? 'bg-slate-50 border-slate-100' 
                     : 'bg-blue-50 border-blue-200'
                 }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl ${comment.read ? 'bg-slate-200' : 'bg-blue-200'}`}>
                    <User size={16} className={comment.read ? 'text-slate-600' : 'text-blue-700'} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{comment.teacher}</div>
                    <div className="text-xs text-slate-500">{comment.subject}</div>
                  </div>
                </div>
                {!comment.read && (
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                )}
              </div>
              <p className="text-sm text-slate-700 mb-2 leading-relaxed">{comment.comment}</p>
              <div className="text-xs text-slate-500">{comment.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Joint Activities */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-purple-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="text-purple-500" size={24} />
            Joint Activities (Dual Acknowledgment)
          </h2>
        </div>

        <div className="space-y-4">
          {parentLinkData.jointActivities.map((activity) => {
            const studentAcked = acknowledgedItems.has(activity.id) || activity.studentAck;
            return (
              <div key={activity.id}
                   className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-purple-900 text-lg">{activity.title}</h3>
                    <div className="flex flex-wrap gap-2 items-center mt-2 text-xs text-purple-700">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {activity.date}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {activity.time}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {activity.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-purple-800 mb-4">{activity.description}</p>

                {/* Acknowledgment Status */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className={`p-3 rounded-xl border-2 ${
                    studentAcked 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={14} className={studentAcked ? 'text-green-600' : 'text-yellow-600'} />
                      <span className="text-xs font-bold text-slate-700">Student</span>
                    </div>
                    <span className={`text-xs font-semibold ${
                      studentAcked ? 'text-green-700' : 'text-yellow-700'
                    }`}>
                      {studentAcked ? 'Acknowledged' : 'Pending'}
                    </span>
                  </div>
                  <div className={`p-3 rounded-xl border-2 ${
                    activity.parentAck 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={14} className={activity.parentAck ? 'text-green-600' : 'text-yellow-600'} />
                      <span className="text-xs font-bold text-slate-700">Parent</span>
                    </div>
                    <span className={`text-xs font-semibold ${
                      activity.parentAck ? 'text-green-700' : 'text-yellow-700'
                    }`}>
                      {activity.parentAck ? 'Acknowledged' : 'Pending'}
                    </span>
                  </div>
                </div>

                {!studentAcked && (
                  <button
                    onClick={() => handleAcknowledge(activity.id, 'activity')}
                    className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                    <CheckCircle size={16} />
                    Acknowledge Activity
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ParentLinkDashboard;
