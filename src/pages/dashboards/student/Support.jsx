import React, { useState } from 'react';
import { 
  Search, MessageSquare, Plus, AlertCircle, CheckCircle, Clock, 
  HelpCircle, ChevronRight, Heart, Book, Wifi, User, Shield, Gavel, FileText, Globe, Lock
} from 'lucide-react';
import { STUDENT_DATA } from '../../../data/studentData';

const Support = () => {
  const [activeTab, setActiveTab] = useState('FAQs'); // FAQs | Request Help | Wellness
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketForm, setTicketForm] = useState({ subject: '', category: 'Academic', description: '', priority: 'Medium' });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const { user, supportFaqs } = STUDENT_DATA;
  
  // Handle supportFaqs - it could be an array or object
  const faqs = Array.isArray(supportFaqs) ? supportFaqs : (supportFaqs?.faqs || []);
  const wellnessArticles = supportFaqs?.wellnessArticles || [
    { icon: 'Book', color: 'green', title: 'Managing Exam Stress', desc: 'Practical techniques to stay calm during exams.', action: 'Read Article' },
    { icon: 'Heart', color: 'blue', title: 'Building Resilience', desc: 'Develop mental strength to handle challenges.', action: 'Learn More' },
    { icon: 'User', color: 'purple', title: 'Self-Care Tips', desc: 'Simple habits for better mental health.', action: 'Explore Tips' }
  ];

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) || f.category.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
        setTicketSubmitted(false);
        setTicketForm({ subject: '', category: 'Academic', description: '', priority: 'Medium' });
    }, 3000);
  };

  return (
    <div className="space-y-8 pb-10 max-w-6xl mx-auto animate-fade-in-up">
       
       {/* Hero Header */}
       <div className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Student Support Hub</h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl font-medium">Need help with studies, technical issues, or just want to talk? We're here for you.</p>
            
            <div className="relative max-w-xl">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
               <input 
                  type="text" 
                  placeholder="Search for help (e.g., 'grades', 'wifi', 'stress')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-800 bg-white shadow-lg outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium placeholder:text-slate-400"
               />
            </div>
          </div>
       </div>

       {/* Navigation Tabs */}
       <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {['FAQs', 'Request Help', 'Connect with Wellbeing', 'Govt & Regulations'].map(tab => (
              <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ${
                    activeTab === tab 
                    ? 'bg-cyan-500 text-white shadow-cyan-200' 
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                 }`}
              >
                 {tab === 'FAQs' && <HelpCircle size={18} />}
                 {tab === 'Request Help' && <MessageSquare size={18} />}
                 {tab === 'Connect with Wellbeing' && <Heart size={18} />}
                 {tab === 'Govt & Regulations' && <Shield size={18} />}
                 {tab}
              </button>
          ))}
       </div>

       {/* CONTENT SECTIONS */}
       
       {/* 1. FAQs Section */}
       {activeTab === 'FAQs' && (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideDown">
              {filteredFaqs.map(faq => (
                 <div key={faq.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer">
                    <div className={`mb-4 w-10 h-10 rounded-xl flex items-center justify-center ${
                        faq.category === 'Academic' ? 'bg-blue-100 text-blue-600' : 
                        faq.category === 'Technical' ? 'bg-orange-100 text-orange-600' : 'bg-pink-100 text-pink-600'
                    }`}>
                        {faq.category === 'Academic' && <Book size={20} />}
                        {faq.category === 'Technical' && <Wifi size={20} />}
                        {faq.category === 'Wellness' && <Heart size={20} />}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{faq.question}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                 </div>
              ))}
              {filteredFaqs.length === 0 && (
                 <div className="col-span-full text-center py-12">
                    <p className="text-slate-400 font-bold">No results found.</p>
                 </div>
              )}
           </div>
       )}

       {/* 2. Request Help Section */}
       {activeTab === 'Request Help' && (
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slideDown">
              <div className="lg:col-span-2">
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                       <Plus className="text-indigo-600" size={24} /> Submit a Request
                    </h2>
                    
                    {ticketSubmitted ? (
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">Ticket Submitted!</h3>
                            <p className="text-green-700">Your request has been received. Ticket ID: #TKT-{Math.floor(Math.random()*10000)}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleTicketSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Issue Category</label>
                                    <select 
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                                        value={ticketForm.category}
                                        onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                                    >
                                        <option>Academic</option>
                                        <option>Technical</option>
                                        <option>Facility</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Priority Level</label>
                                    <select 
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                                        value={ticketForm.priority}
                                        onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Critical</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    placeholder="Brief summary of the issue..."
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                                    required
                                    value={ticketForm.subject}
                                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                                <textarea 
                                    rows="4"
                                    placeholder="Please describe the issue in detail..."
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700 resize-none"
                                    required
                                    value={ticketForm.description}
                                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all transform active:scale-95">
                                    Submit Ticket
                                </button>
                            </div>
                        </form>
                    )}
                 </div>
              </div>

              {/* Recent Tickets Sidebar */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-fit">
                 <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-slate-400" /> Recent Activity
                 </h3>
                 <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-mono text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">#TKT-1024</span>
                            <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Resolved</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-700">Library Access Issue</h4>
                        <p className="text-xs text-slate-500 mt-1">2 days ago</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-mono text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">#TKT-1035</span>
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Open</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-700">Grade Discrepancy in Math</h4>
                        <p className="text-xs text-slate-500 mt-1">Today</p>
                    </div>
                 </div>
              </div>
           </div>
       )}

        {/* 3. Connect with Wellbeing */}
       {activeTab === 'Connect with Wellbeing' && (
           <div className="animate-slideDown space-y-8">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1">
                          <h2 className="text-3xl font-bold mb-4">Your Mental Health Matters</h2>
                          <p className="text-pink-100 text-lg mb-6 leading-relaxed">
                              School can be stressful, but you don't have to go through it alone. Our counselors are here to listen, support, and guide you.
                          </p>
                          <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-50 transition-all transform active:scale-95 flex items-center gap-2">
                              <User size={20} /> Chat with School Counselor
                          </button>
                      </div>
                      <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                              <Clock size={20} /> Counselor Availability
                          </h3>
                          <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                  <span className="opacity-80">Monday - Friday</span>
                                  <span className="font-bold">9:00 AM - 3:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                  <span className="opacity-80">Walk-in Hours</span>
                                  <span className="font-bold">12:00 PM - 1:00 PM</span>
                              </div>
                              <div className="pt-2 border-t border-white/20 mt-2">
                                  <p className="text-xs opacity-75">Dr. Emily Stone (Room 104)</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {wellnessArticles.map((article, idx) => {
                      const Icon = { Book, Heart, User }[article.icon] || Book;
                      const colors = {
                        green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:border-green-200' },
                        blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:border-blue-200' },
                        purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:border-purple-200' }
                      }[article.color] || { bg: 'bg-gray-100', text: 'text-gray-600', hover: 'hover:border-gray-200' };

                      return (
                          <div key={idx} className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${colors.hover} transition-all`}>
                              <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4`}>
                                  <Icon size={24} />
                              </div>
                              <h3 className="font-bold text-slate-800 text-lg mb-2">{article.title}</h3>
                              <p className="text-sm text-slate-500 mb-4">{article.desc}</p>
                              <button className={`${colors.text} text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all`}>
                                  {article.action} <ChevronRight size={16} />
                              </button>
                          </div>
                      );
                  })}
              </div>
           </div>
       )}

       {/* 4. Govt & Regulations (Singapore Context) */}
       {activeTab === 'Govt & Regulations' && (
           <div className="animate-slideDown space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
                          <Shield size={32} />
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold text-slate-800">Student Rights & Regulations</h2>
                          <p className="text-slate-500">Essential information about legal frameworks and student welfare in Singapore.</p>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Compulsory Education Act */}
                      <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
                          <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600 border border-slate-100">
                                      <Gavel size={24} />
                                  </div>
                                  <h3 className="font-bold text-slate-800 text-lg">Compulsory Education Act</h3>
                              </div>
                              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-200">MOE Singapore</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                              Under the Compulsory Education Act, all Singaporean children residing in Singapore are required to attend school regularly. This ensures every child has the opportunity to receive a core education.
                          </p>
                          <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <CheckCircle size={14} className="text-green-500" />
                                  <span>Mandatory primary education</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <CheckCircle size={14} className="text-green-500" />
                                  <span>Regular attendance checks</span>
                              </div>
                          </div>
                          <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                              Read Full Act
                          </button>
                      </div>

                      {/* PDPA Compliance */}
                      <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
                          <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600 border border-slate-100">
                                      <Lock size={24} />
                                  </div>
                                  <h3 className="font-bold text-slate-800 text-lg">PDPA & Data Privacy</h3>
                              </div>
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-lg border border-purple-200">Data Protection</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                              Your personal data is protected under the Personal Data Protection Act (PDPA). Schools collect data only for educational purposes and ensure strict confidentiality.
                          </p>
                          <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <CheckCircle size={14} className="text-green-500" />
                                  <span>Consent required for data use</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <CheckCircle size={14} className="text-green-500" />
                                  <span>Right to access your records</span>
                              </div>
                          </div>
                          <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                              View Privacy Policy
                          </button>
                      </div>

                      {/* Cyber Wellness */}
                      <div className="p-6 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
                          <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-600 border border-slate-100">
                                      <Globe size={24} />
                                  </div>
                                  <h3 className="font-bold text-slate-800 text-lg">Cyber Wellness</h3>
                              </div>
                              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-lg border border-cyan-200">Digital Safety</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                              Guidelines to ensure safe and responsible use of technology. Includes topics on cyberbullying, netiquette, and managing screen time effectively.
                          </p>
                          <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                              Cyber Wellness Tips
                          </button>
                      </div>

                      {/* Student Welfare */}
                      <div className="p-6 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
                          <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white rounded-lg shadow-sm text-rose-600 border border-slate-100">
                                      <Heart size={24} />
                                  </div>
                                  <h3 className="font-bold text-slate-800 text-lg">Student Welfare</h3>
                              </div>
                              <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-lg border border-rose-200">Support</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                              Information on financial assistance schemes (FAS), bursaries, and counseling support available for students in need.
                          </p>
                          <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                              Check Eligibility
                          </button>
                      </div>
                  </div>
              </div>
           </div>
       )}

    </div>
  );
};

export default Support;
