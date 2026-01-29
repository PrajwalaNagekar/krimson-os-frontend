import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';

const TimetableSchedule = () => {
  const [view, setView] = useState('Daily'); // Daily or Weekly
  const { timetable } = STUDENT_DATA;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Class Timetable</h2>
         <div className="flex bg-slate-100 p-1.5 rounded-xl">
             {['Daily', 'Weekly'].map(v => (
                <button 
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === v ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                   {v}
                </button>
             ))}
         </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
         {(view === 'Daily' ? ['Monday'] : days).map(day => (
            <div key={day} className="bg-white p-8 rounded-3xl shadow-sm">
               <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20}/> {day}
               </h3>
               
               <div className="space-y-4">
                  {timetable[day.toLowerCase()] ? timetable[day.toLowerCase()].map((slot, idx) => {
                     // Determine border and accent color based on status
                     let borderColor = 'border-slate-100';
                     let accentColor = 'bg-slate-200';
                     let typeColor = 'bg-slate-100 text-slate-700';

                     if (slot.status === 'active') {
                        borderColor = 'border-yellow-200 bg-yellow-50/50';
                        accentColor = 'bg-yellow-500';
                     } else if (slot.status === 'completed') {
                        borderColor = 'border-blue-100 bg-blue-50/30';
                        accentColor = 'bg-blue-500';
                     }
                     
                     // Type badge color override
                     if (slot.type === 'Lab') typeColor = 'bg-pink-100 text-pink-700';
                     else if (slot.type === 'Lecture') typeColor = 'bg-cyan-100 text-cyan-700';

                     return (
                        <div key={idx} className={`flex gap-4 p-4 border rounded-2xl transition-all group cursor-pointer relative overflow-visible ${borderColor} hover:shadow-md`}>
                           <div className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-lg ${accentColor}`}></div>
                           
                           <div className="flex flex-col items-center justify-center min-w-[80px] bg-white rounded-xl p-2 shadow-sm z-10">
                              <span className="text-xs font-bold text-slate-500">Period {slot.period}</span>
                              <Clock size={16} className="text-slate-400 mt-2 mb-1"/>
                           </div>
                           
                           <div className="flex-1 ml-2">
                              <div className="flex justify-between items-start">
                                 <div className="flex flex-col">
                                     <h4 className="text-lg font-bold text-slate-800">{slot.subject}</h4>
                                     <p className="text-sm font-medium text-slate-500">{slot.time}</p>
                                 </div>
                                 <div className="flex flex-col items-end gap-1">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${typeColor}`}>
                                       {slot.type}
                                    </span>
                                    {slot.isSubstitute && (
                                       <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 text-red-600 border border-red-200">
                                          Substitute
                                       </span>
                                    )}
                                 </div>
                              </div>
                              
                              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100/50">
                                 <div className="flex items-center gap-2">
                                    {slot.teacherImage ? (
                                        <img src={slot.teacherImage} alt={slot.teacher} className="w-6 h-6 rounded-full object-cover border border-slate-200" />
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-slate-200 grid place-items-center"><User size={14} className="text-slate-500"/></div>
                                    )}
                                    <span className="text-xs font-bold text-slate-600">{slot.teacher}</span>
                                 </div>
                                 <div className="w-px h-4 bg-slate-200"></div>
                                 <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                                    <MapPin size={12} className="text-slate-400"/> {slot.room}
                                 </span>
                              </div>
                           </div>
   
                           <div className="hidden group-hover:flex items-center justify-center pl-2">
                              <button className="p-2 bg-white text-blue-600 rounded-full shadow-sm hover:bg-blue-50 transition-colors"><ChevronRight size={18} /></button>
                           </div>
                        </div>
                     );
                  }) : (
                     <p className="text-slate-400 italic text-sm">No classes scheduled.</p>
                  )}
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default TimetableSchedule;
