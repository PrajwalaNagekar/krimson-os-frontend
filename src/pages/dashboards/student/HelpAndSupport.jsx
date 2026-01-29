import React from 'react';
import { HelpCircle, MessageCircle, Phone, Search } from 'lucide-react';

const HelpAndSupport = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
         <h2 className="text-3xl font-bold text-slate-800">How can we help you?</h2>
         <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="text" placeholder="Search for answers..." className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-100" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <HelpCircle size={24}/>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Browse FAQs</h3>
            <p className="text-sm text-slate-500 mt-2">Find answers to common questions about exams, fees, and login issues.</p>
         </div>

         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-purple-200 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
               <MessageCircle size={24}/>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Raise a Ticket</h3>
            <p className="text-sm text-slate-500 mt-2">Report a technical problem or academic concern to the administration.</p>
         </div>
      </div>

      <div className="bg-green-50 rounded-3xl p-8 flex items-center gap-6 border border-green-100">
         <div className="p-4 bg-white rounded-full text-green-600 shadow-sm">
            <Phone size={32} />
         </div>
         <div>
            <h3 className="font-bold text-green-800 text-xl">Wellness Helpline</h3>
            <p className="text-sm text-green-700 mt-1 mb-3">Feeling stressed or anxious? Talk to our counselors confidentially.</p>
            <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-xl text-sm hover:bg-green-700">Chat with Counselor</button>
         </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
