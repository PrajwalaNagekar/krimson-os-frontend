import React, { useState } from 'react';
import { CheckSquare, Bell, Clock, AlertCircle, Plus, Filter } from 'lucide-react';

/**
 * Common Screen 9: Notifications & To-Do Center
 * Roles: All Roles
 * 
 * Used in:
 * - src/routes/ (To be linked)
 * 
 * Logic:
 * - Consolidated view of Tasks (To-Do) and Notifications.
 * - Tasks can be manual or automated (system triggers).
 * - Notifications are effectively a history of alerts.
 */

const TasksAndNotifications = ({ tasks = [], notifications = [] }) => {
  const [activeTab, setActiveTab] = useState('Tasks'); // Tasks | Notifications
  
  // Mock fallback
  const allTasks = tasks.length > 0 ? tasks : [
      { id: 1, title: "Submit Monthly Report", due: "Today", priority: "High", status: "Pending", type: "System" },
      { id: 2, title: "Parent Meeting - Grade 5", due: "Tomorrow", priority: "Normal", status: "Pending", type: "Manual" },
      { id: 3, title: "Update Attendance Records", due: "Fri, 12th", priority: "Low", status: "Done", type: "System" },
  ];

  const allNotifs = notifications.length > 0 ? notifications : [
      { id: 1, title: "System Maintenance Alert", time: "2 hrs ago", type: "System", read: false },
      { id: 2, title: "New Leave Application", time: "5 hrs ago", type: "HR", read: true },
      { id: 3, title: "Fee Submission Deadline Error", time: "Yesterday", type: "Finance", read: true },
  ];

  return (
    <div className="h-full space-y-6">
       
       <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">My Priorities</h1>
            <p className="text-slate-500">Stay on top of your tasks and alerts</p>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm">
             {['Tasks', 'Notifications'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === t ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                   {t}
                </button>
             ))}
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100%-100px)]">
          
          {/* Main List */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                   {activeTab === 'Tasks' ? <CheckSquare className="text-indigo-500" /> : <Bell className="text-orange-500" />} {activeTab}
                </h3>
                <div className="flex gap-2">
                   <button className="p-2 text-slate-400 hover:text-slate-600"><Filter size={20}/></button>
                   {activeTab === 'Tasks' && (
                       <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-100">
                          <Plus size={16}/> New Task
                       </button>
                   )}
                </div>
             </div>

             <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {activeTab === 'Tasks' ? (
                   allTasks.map(task => (
                      <div key={task.id} className="group flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-indigo-100 transition-all cursor-pointer">
                         <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.status === 'Done' ? 'bg-green-500 border-green-500' : 'border-slate-300 group-hover:border-indigo-400'}`}>
                            {task.status === 'Done' && <CheckSquare size={14} className="text-white"/>}
                         </div>
                         <div className="flex-1">
                            <h4 className={`font-bold text-slate-800 ${task.status === 'Done' ? 'line-through text-slate-400' : ''}`}>{task.title}</h4>
                            <div className="flex gap-2 mt-1">
                               <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10}/> Due {task.due}</span>
                               <span className={`text-[10px] px-2 rounded-full font-bold ${task.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>{task.priority}</span>
                               {task.type === 'System' && <span className="text-[10px] px-2 rounded-full bg-blue-50 text-blue-600 font-bold">Auto</span>}
                            </div>
                         </div>
                         <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-opacity">
                             Delete
                         </button>
                      </div>
                   ))
                ) : (
                   allNotifs.map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors ${!notif.read ? 'bg-orange-50/50' : ''}`}>
                         <div className="flex justify-between items-start mb-1">
                            <h4 className={`text-sm ${!notif.read ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>{notif.title}</h4>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{notif.time}</span>
                         </div>
                         <div className="flex items-center gap-2 mt-1">
                             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">{notif.type}</span>
                         </div>
                      </div>
                   ))
                )}
             </div>
          </div>

          {/* Side Panel: Summary */}
          <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                 <h3 className="font-bold text-slate-800 mb-4">You are doing great!</h3>
                 <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 rounded-full border-4 border-indigo-100 flex items-center justify-center">
                         <span className="text-xl font-bold text-indigo-600">85%</span>
                     </div>
                     <p className="text-xs text-slate-500">Tasks completed this week</p>
                 </div>
                 <div className="space-y-2">
                     <div className="flex justify-between text-xs font-bold text-slate-600">
                         <span>High Priority Pending</span>
                         <span className="text-red-500">2</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold text-slate-600">
                         <span>Unread Alerts</span>
                         <span className="text-orange-500">3</span>
                     </div>
                 </div>
              </div>

              {/* Suggestions */}
              <div className="bg-indigo-600 text-white rounded-3xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                      <AlertCircle className="shrink-0" size={20}/>
                      <div>
                          <h4 className="font-bold text-sm mb-1">Suggestion</h4>
                          <p className="text-xs opacity-90 leading-relaxed">You have 3 pending invoices to approve. Clear them now to avoid delays.</p>
                          <button className="mt-3 bg-white text-indigo-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-50">Review Now</button>
                      </div>
                  </div>
              </div>
          </div>

       </div>
    </div>
  );
};

export default TasksAndNotifications;
