import React from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { MessageCircle, Calendar, Shield, ArrowRight, User } from 'lucide-react';

const CollaborationHub = () => {
  const { collaboration } = COUNSELOR_DATA;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <div className="flex justify-between items-center mb-6">
           <div>
             <h2 className="text-xl font-bold text-slate-800">Parent & Teacher Collaboration</h2>
             <p className="text-slate-500 text-sm">Coordinate support strategies securely.</p>
           </div>
           <button className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-slate-900 transition-colors">
             Schedule Joint Meeting
           </button>
         </div>

         {/* Meeting Logs */}
         <div className="space-y-4">
            {collaboration.map((item) => (
              <div key={item.id} className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                 <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${item.type === 'Meeting' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                       {item.type === 'Meeting' ? <Calendar size={20} /> : <MessageCircle size={20} />}
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-700 text-sm">{item.type} with {item.with}</h4>
                       <p className="text-xs text-slate-400">{item.date} • {item.time || item.status}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    {item.status === 'Scheduled' && (
                       <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">Upcoming</span>
                    )}
                    <button className="text-slate-400 hover:text-blue-600"><ArrowRight size={18} /></button>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Escalation Workflow */}
         <div className="bg-white rounded-3xl p-8 shadow-sm border-l-4 border-red-500">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
               <Shield size={20} className="text-red-500"/> Escalation Protocol
            </h3>
            <p className="text-xs text-slate-500 mb-6">Use this channel for critical safeguarding concerns requiring Principal intervention.</p>
            
            <form className="space-y-4">
               <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Case Reference</label>
                  <input type="text" placeholder="Enter Case ID" className="w-full mt-1 bg-slate-50 p-3 rounded-xl text-sm outline-none" />
               </div>
               <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Reason for Escalation</label>
                  <select className="w-full mt-1 bg-slate-50 p-3 rounded-xl text-sm outline-none text-slate-600">
                     <option>Immediate Safety Risk</option>
                     <option>Severe Disciplinary Issue</option>
                     <option>External Agency Involvement</option>
                  </select>
               </div>
               <button className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors">
                  Escalate to Principal
               </button>
            </form>
         </div>

         {/* Teacher Quick Connect */}
         <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4">Teacher Quick Connect</h3>
            <p className="text-blue-100 text-sm mb-6">Send a secure note to a class teacher regarding a student's emotional state.</p>
            <div className="flex gap-2 items-center bg-white/20 p-2 rounded-xl backdrop-blur-sm mb-4">
               <User size={18} className="ml-2"/>
               <input type="text" placeholder="Search Teacher..." className="bg-transparent placeholder-blue-100 text-white outline-none w-full text-sm" />
            </div>
            <textarea placeholder="Type confidential note..." className="w-full h-24 bg-white/10 rounded-xl p-3 text-sm text-white placeholder-blue-200 outline-none resize-none"></textarea>
            <button className="w-full mt-4 py-2 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
               Send Secure Note
            </button>
         </div>
      </div>
    </div>
  );
};

export default CollaborationHub;
