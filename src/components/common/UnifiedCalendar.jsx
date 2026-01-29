import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

/**
 * Common Screen 6: Events & Calendar Planner
 * Roles: All Roles
 * 
 * Used in:
 * - src/pages/dashboards/teacher/AcademicCalendar.jsx
 * - src/routes/CommonRoutes (potentially)
 * 
 * Logic:
 * - Displays monthly calendar grid.
 * - Lists upcoming events.
 * - Supports event filtering by type (Exam, Holiday, etc. - Mocked).
 */

const UnifiedCalendar = ({ events, role, onCreateEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isAdminOrPrincipal = role === 'admin' || role === 'principal';

  return (
    <div className="space-y-8 h-full">
      <div className="flex flex-col lg:flex-row gap-8 h-full">
         
         {/* Calendar Section */}
         <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <CalendarIcon className="text-indigo-500" /> {monthNames[month]} {year}
               </h3>
               <div className="flex gap-2">
                  <button onClick={prevMonth} className="p-2 hover:bg-slate-50 rounded-full text-slate-500"><ChevronLeft size={20}/></button>
                  <button onClick={nextMonth} className="p-2 hover:bg-slate-50 rounded-full text-slate-500"><ChevronRight size={20}/></button>
                  {isAdminOrPrincipal && (
                      <button onClick={onCreateEvent} className="ml-4 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-xl flex items-center gap-1 hover:bg-indigo-700">
                          <Plus size={14}/> Add Event
                      </button>
                  )}
               </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-4 mb-4 text-center">
               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-xs font-bold text-slate-400 uppercase">{d}</div>
               ))}
            </div>
            
            <div className="grid grid-cols-7 gap-4 flex-1 content-start">
               {/* Empty slots for days before start of month */}
               {[...Array(startDay)].map((_, i) => <div key={`empty-${i}`}></div>)}

               {/* Days */}
               {[...Array(totalDays)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
                  
                  // Mock Event Check
                  const dayEvents = events?.filter(e => {
                      const d = new Date(e.date);
                      return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
                  });

                  return (
                     <div key={day} className={`min-h-[80px] border border-slate-50 rounded-xl p-2 hover:bg-slate-50 transition-colors relative cursor-pointer group ${isToday ? 'bg-indigo-50 border-indigo-200' : ''}`}>
                        <span className={`text-xs font-bold ${isToday ? 'text-indigo-600': 'text-slate-600'}`}>{day}</span>
                        
                        <div className="mt-1 space-y-1">
                            {dayEvents?.map((evt, idx) => (
                                <div key={idx} className={`text-[8px] px-1 py-0.5 rounded font-bold truncate ${evt.type === 'exam' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {evt.title}
                                </div>
                            ))}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Side Panel: Plan Ahead & Upcoming */}
         <div className="w-full lg:w-80 space-y-6">
            
            {/* Quick Stats / Plan Ahead */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg">
               <h3 className="font-bold text-lg mb-4">Focus Focus</h3>
               <div className="mb-6">
                  <div className="flex justify-between text-xs mb-1 opacity-90">
                     <span>Term Progress</span>
                     <span>45%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                     <div className="bg-white h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
               </div>
               <p className="text-sm opacity-90">Next major holiday is Winter Break <br/>(Starts Dec 24).</p>
            </div>

            {/* Upcoming List */}
            <div className="bg-white rounded-3xl p-6 shadow-sm flex-1">
               <h3 className="font-bold text-slate-800 mb-4">Upcoming Events</h3>
               <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {events?.length > 0 ? events.map((evt, idx) => (
                     <div key={evt.id || idx} className="flex gap-4 items-start p-2 hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="flex flex-col items-center bg-slate-100 px-3 py-2 rounded-xl min-w-[60px]">
                           <span className="text-xs font-bold text-slate-400">{new Date(evt.date).toLocaleString('default', { month: 'short' })}</span>
                           <span className="text-lg font-bold text-slate-800">{new Date(evt.date).getDate()}</span>
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-700 text-sm mb-1">{evt.title}</h4>
                           <div className="flex flex-wrap gap-2">
                               <span className="text-[10px] text-slate-400 flex items-center gap-1"><Clock size={10}/> {evt.time || "All Day"}</span>
                               {evt.location && <span className="text-[10px] text-slate-400 flex items-center gap-1"><MapPin size={10}/> {evt.location}</span>}
                           </div>
                        </div>
                     </div>
                  )) : (
                      <p className="text-xs text-slate-400 text-center py-4">No upcoming events.</p>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default UnifiedCalendar;
