/**
 * @component SupportHelpCenter
 * @description Centralized support hub with knowledge base and ticketing system
 * @roles Admin, Teacher, Student
 */
import React, { useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  PlayCircle, 
  FileText, 
  Plus, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  HelpCircle,
  Video,
  ChevronRight
} from 'lucide-react';

const SupportHelpCenter = ({ userTickets = [], role = 'user' }) => {
  const [activeTab, setActiveTab] = useState('Knowledge Base'); // Knowledge Base | My Tickets | Contact Support
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Knowledge Base Data
  const faqs = [
    { id: 1, question: "How do I reset my password?", category: "Account", answer: "Go to Profile > Settings > Security to update your password." },
    { id: 2, question: "Where can I view my attendance?", category: "Academic", answer: "Attendance reports are available in the 'Reports' section of your dashboard." },
    { id: 3, question: "How to upload an assignment?", category: "Academic", answer: "Navigate to the Assignment Manager, select the assignment, and click 'Upload Submission'." },
    { id: 4, question: "System requirements for exams?", category: "Technical", answer: "A stable internet connection and Chrome browser version 90+ are required." },
  ];

  const tutorials = [
    { id: 1, title: "Dashboard Tour", duration: "2:30", thumbColor: "bg-blue-100", iconColor: "text-blue-500" },
    { id: 2, title: "Submitting Grades", duration: "4:15", thumbColor: "bg-pink-100", iconColor: "text-pink-500" },
    { id: 3, title: "Managing Profile", duration: "1:45", thumbColor: "bg-cyan-100", iconColor: "text-cyan-500" },
  ];

  // Mock Tickets if none provided
  const tickets = userTickets.length > 0 ? userTickets : [
      { id: 'TKT-1001', subject: "Login Issue on Mobile", category: "Technical", status: "Open", date: "2024-01-05", priority: "High" },
      { id: 'TKT-0998', subject: "Incorrect Grade Display", category: "Academic", status: "Resolved", date: "2023-12-28", priority: "Medium" },
  ];

  const getPriorityColor = (p) => {
      switch(p) {
          case 'High': return 'text-red-600 bg-red-50 border-red-100';
          case 'Medium': return 'text-orange-600 bg-orange-50 border-orange-100';
          default: return 'text-blue-600 bg-blue-50 border-blue-100';
      }
  };

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase()));

  // Define gradient based on role (Optional: currently keeping uniform premium style)
  const headerGradient = "from-cyan-500 via-blue-500 to-pink-500";

  return (
    <div className="h-full space-y-8 animate-fadeIn pb-10">
       
       {/* ========================================
           HEADER SECTION
           ======================================== */}
       <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-r ${headerGradient}`} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 p-8 md:p-10 text-white">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                         Help Center
                      </span>
                   </div>
                   <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                      How can we help?
                   </h1>
                   <p className="text-white/90 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                      Find answers, watch tutorials, or contact our support team.
                   </p>
                   
                   {/* Search Bar Embedded in Header */}
                   <div className="mt-8 relative max-w-lg">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                         type="text" 
                         placeholder="Search for answers, articles, or error codes..." 
                         className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-800 bg-white shadow-lg outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium placeholder:text-slate-400"
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                      />
                   </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-col gap-2 min-w-[200px]">
                   {['Knowledge Base', 'My Tickets', 'Contact Support'].map(t => (
                      <button 
                         key={t}
                         onClick={() => setActiveTab(t)}
                         className={`
                            px-5 py-3 rounded-xl text-sm font-bold transition-all text-left flex items-center justify-between group
                            ${activeTab === t 
                               ? 'bg-white text-blue-600 shadow-md' 
                               : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10'}
                         `}
                      >
                         {t}
                         {activeTab === t && <ChevronRight size={16} />}
                      </button>
                   ))}
                </div>
             </div>
          </div>
       </div>

       {activeTab === 'Knowledge Base' && (
           <div className="space-y-8 animate-slideDown">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* FAQs */}
                   <div className="lg:col-span-2 space-y-6">
                       <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2">
                          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                             <FileText size={20} />
                          </div>
                          Common Questions
                       </h3>
                       <div className="space-y-4">
                           {filteredFaqs.map(faq => (
                               <div key={faq.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group">
                                   <div className="flex justify-between items-start mb-3">
                                       <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{faq.question}</h4>
                                       <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md uppercase tracking-wider">{faq.category}</span>
                                   </div>
                                   <p className="text-slate-500 leading-relaxed font-medium">{faq.answer}</p>
                               </div>
                           ))}
                           {filteredFaqs.length === 0 && (
                              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl">
                                 <p className="text-slate-400 font-bold">No results found for "{searchQuery}"</p>
                              </div>
                           )}
                       </div>
                   </div>

                   {/* Tutorials */}
                   <div>
                       <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2 mb-6">
                          <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
                             <Video size={20} />
                          </div>
                          Video Tutorials
                       </h3>
                       <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                           {tutorials.map(vid => (
                               <div key={vid.id} className="flex gap-4 items-center group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                                   <div className={`w-20 h-14 rounded-xl ${vid.thumbColor} flex items-center justify-center text-slate-600 group-hover:scale-105 transition-transform shadow-inner`}>
                                       <PlayCircle size={24} className={`${vid.iconColor} opacity-80 group-hover:opacity-100`}/>
                                   </div>
                                   <div>
                                       <h4 className="font-bold text-sm text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">{vid.title}</h4>
                                       <p className="text-xs text-slate-400 font-bold mt-1 flex items-center gap-1">
                                          <Clock size={10} /> {vid.duration}
                                       </p>
                                   </div>
                               </div>
                           ))}
                           <button className="w-full mt-2 py-3 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
                              View All Videos <ChevronRight size={14} />
                           </button>
                       </div>
                       
                       {/* Quick Help Card */}
                       <div className="mt-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                          <HelpCircle size={32} className="mb-4 text-purple-200" />
                          <h4 className="font-bold text-lg mb-1">Need quick help?</h4>
                          <p className="text-sm text-purple-100 mb-4 font-medium">Chat with our AI assistant for instant answers.</p>
                          <button className="w-full py-2 bg-white text-indigo-600 text-xs font-bold rounded-xl hover:bg-purple-50 transition-colors">
                             Start Chat
                          </button>
                       </div>
                   </div>
               </div>
           </div>
       )}

       {activeTab === 'My Tickets' && (
           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 animate-slideDown">
               <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                         <MessageSquare size={20} />
                      </div>
                      My Support Tickets
                   </h3>
                   <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform active:scale-95">
                       <Plus size={18}/> Create New Ticket
                   </button>
               </div>
               
               <div className="space-y-4">
                   {tickets.map(ticket => (
                       <div key={ticket.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                           <div className="flex gap-5 items-start mb-4 md:mb-0">
                               <div className={`mt-1 p-3 rounded-full ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                   {ticket.status === 'Resolved' ? <CheckCircle size={24}/> : <Clock size={24}/>}
                               </div>
                               <div>
                                   <div className="flex items-center gap-2 mb-1">
                                      <span className="font-mono text-xs font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">{ticket.id}</span>
                                      <span className="text-xs text-slate-400 font-bold">• {ticket.date}</span>
                                   </div>
                                   <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{ticket.subject}</h4>
                                   <p className="text-sm font-bold text-slate-500 mt-1">{ticket.category}</p>
                               </div>
                           </div>
                           
                           <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                               <span className={`px-4 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${getPriorityColor(ticket.priority)}`}>
                                   <AlertCircle size={12} /> {ticket.priority}
                               </span>
                               <span className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                                   {ticket.status}
                               </span>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       )}

       {activeTab === 'Contact Support' && (
           <div className="max-w-3xl mx-auto animate-slideDown py-8">
               <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
                   
                   <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-blue-500/30">
                       <MessageSquare size={40} />
                   </div>
                   
                   <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Still need help?</h2>
                   <p className="text-slate-500 mb-10 text-lg max-w-md mx-auto">Our support team is available Mon-Fri, 9am - 6pm EST to assist you with any issues.</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <button className="p-6 border-2 border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-blue-50 group transition-all text-left relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                              <MessageSquare size={64} className="text-blue-600"/>
                           </div>
                           <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 mb-1">Live Chat</h4>
                           <p className="text-sm text-slate-500 font-medium">Connect instantly</p>
                           <div className="mt-4 inline-block px-3 py-1 bg-white rounded-lg text-xs font-bold text-green-600 border border-slate-200">
                              Average wait: 2 mins
                           </div>
                       </button>
                       
                       <button className="p-6 border-2 border-slate-100 rounded-3xl hover:border-pink-500 hover:bg-pink-50 group transition-all text-left relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                              <CheckCircle size={64} className="text-pink-600"/>
                           </div>
                           <h4 className="font-bold text-lg text-slate-800 group-hover:text-pink-600 mb-1">Email Support</h4>
                           <p className="text-sm text-slate-500 font-medium">Send us a detailed query</p>
                           <div className="mt-4 inline-block px-3 py-1 bg-white rounded-lg text-xs font-bold text-blue-600 border border-slate-200">
                              Response in 24 hrs
                           </div>
                       </button>
                   </div>
               </div>
           </div>
       )}

    </div>
  );
};

export default SupportHelpCenter;
