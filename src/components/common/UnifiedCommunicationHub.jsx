import React, { useState } from 'react';
import { Search, Bell, Send, User, FileText, Paperclip, Mic } from 'lucide-react';

/**
 * Common Screen 7: Communication Hub / Messaging
 * Roles: Student, Teacher, Parent, Admin
 * 
 * Logic:
 * - Student/Parent: View Notices, One-on-one Chat (Teacher/Admin).
 * - Teacher: One-on-one Chat (Parents/Students), Broadcast (if perms allow).
 * - Admin: Broadcast Messaging, Escalated Chats.
 */

const UnifiedCommunicationHub = ({ role, data }) => {
  const [activeTab, setActiveTab] = useState(role === 'student' ? 'Notices' : 'Messages'); 
  const [activeChat, setActiveChat] = useState(null);

   // Mock Data fallback if not provided
   const messages = data?.messages || [];

  const isStudentOrParent = role === 'student' || role === 'parent';
  const isTeacher = role === 'teacher';
  const isAdmin = role === 'admin';

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row gap-6">
       {/* Sidebar */}
       <div className="w-full md:w-80 bg-white rounded-3xl p-4 shadow-sm flex flex-col gap-4">
          
          {/* Tab Switcher (Visible for Students/Parents) */}
          {isStudentOrParent && (
            <div className="bg-slate-50 p-1 rounded-2xl flex">
               {['Notices', 'Messages'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === t ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                     {t}
                  </button>
               ))}
            </div>
          )}

          {/* Search (Visible for Teacher/Admin or if in Messages tab) */}
          {(isTeacher || isAdmin || activeTab === 'Messages') && (
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                 <input type="text" placeholder="Search..." className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-100" />
              </div>
          )}

          {/* List Content */}
          <div className="flex-1 overflow-y-auto space-y-2">
             {activeTab === 'Messages' ? (
                 messages.length > 0 ? messages.map((msg, idx) => (
                    <div 
                        key={msg.id || idx} 
                        onClick={() => setActiveChat(msg)}
                        className={`p-4 rounded-xl cursor-pointer transition-colors border border-transparent ${msg.unread ? 'bg-indigo-50 border-indigo-100' : 'hover:bg-slate-50'} ${activeChat?.id === msg.id ? 'bg-slate-50 ring-1 ring-slate-200' : ''}`}
                    >
                       <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-sm truncate w-32 ${msg.unread ? 'font-bold text-indigo-700' : 'font-bold text-slate-700'}`}>{msg.from || msg.sender}</h4>
                          <span className="text-[10px] text-slate-400">{msg.time}</span>
                       </div>
                       <p className={`text-xs line-clamp-1 ${msg.unread ? 'text-indigo-600 font-medium' : 'text-slate-500'}`}>{msg.content}</p>
                    </div>
                 )) : (
                    <div className="text-center text-slate-400 mt-10 text-xs">No messages yet</div>
                 )
             ) : (
                 // Notices List (Mock)
                 [1, 2, 3].map((i) => (
                    <div key={i} className="bg-amber-50 p-4 rounded-xl border border-amber-100 cursor-pointer hover:bg-amber-100/50 transition-colors">
                       <div className="flex items-center gap-2 mb-2">
                          <Bell size={14} className="text-amber-600"/>
                          <span className="text-xs font-bold text-amber-800">School Admin</span>
                       </div>
                       <h4 className="font-bold text-slate-800 text-sm mb-1">Winter Break Update</h4>
                       <p className="text-xs text-slate-600 line-clamp-2">The school will remain closed from Dec 24th...</p>
                    </div>
                 ))
             )}
          </div>
       </div>

       {/* Main Content Area */}
       <div className="flex-1 bg-white rounded-3xl shadow-sm flex flex-col overflow-hidden relative">
          {activeTab === 'Messages' ? (
             activeChat || isTeacher ? ( // Teachers might default to empty state or last chat
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                           {activeChat ? <User size={20}/> : <User size={20}/>}
                        </div>
                        <div>
                           <h3 className="font-bold text-slate-800">{activeChat?.from || "Select a chat"}</h3>
                           <p className="text-xs text-green-500 font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                           </p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#f8fafc]">
                     <div className="flex justify-start">
                        <div className="bg-white border border-slate-100 text-slate-700 p-4 rounded-2xl rounded-tl-none max-w-md shadow-sm text-sm">
                           Hello! How can I help you today?
                        </div>
                     </div>
                     <div className="flex justify-end">
                        <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-md shadow-sm text-sm">
                           I had a question about the recent assignment.
                        </div>
                     </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-4 bg-white border-t border-slate-100">
                     <div className="flex gap-2 items-center bg-slate-50 p-2 rounded-2xl border border-slate-200">
                        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl transition-colors"><Paperclip size={20}/></button>
                        <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent px-2 outline-none text-sm text-slate-700" />
                        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl transition-colors"><Mic size={20}/></button>
                        <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md transition-transform active:scale-95"><Send size={18}/></button>
                     </div>
                  </div>
                </>
             ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                   <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                      <Send size={24} className="opacity-20"/>
                   </div>
                   <p className="font-medium">Select a conversation to start messaging</p>
                </div>
             )
          ) : (
             // Notice Detail View
             <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                   <FileText size={24} className="opacity-20"/>
                </div>
                <p className="font-medium">Select a notice to view full details</p>
             </div>
          )}
       </div>
    </div>
  );
};

export default UnifiedCommunicationHub;
