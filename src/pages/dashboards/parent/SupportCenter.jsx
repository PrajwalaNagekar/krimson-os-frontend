import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search,
  Send,
  Ticket,
  MessageCircle,
  BookOpen,
  DollarSign,
  Bus,
  Laptop,
  ChevronDown,
  ChevronUp,
  User,
  Bot,
  Paperclip,
  X,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState('faq'); // faq, tickets, chat
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ticketForm, setTicketForm] = useState({
    category: 'Academic',
    subject: '',
    description: '',
    priority: 'medium'
  });
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! I\'m here to help. How can I assist you today?', time: '09:00 AM' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Mock Data - Will be replaced with Zendesk / In-App Ticketing API
  const faqs = [
    {
      id: 1,
      category: 'Academic',
      question: 'How do I access my child\'s progress reports?',
      answer: 'Navigate to the Report Card section from the dashboard. You can view term reports and download PDF copies. Reports are updated at the end of each term.'
    },
    {
      id: 2,
      category: 'Academic',
      question: 'How can I contact my child\'s teacher?',
      answer: 'Go to Communication Hub and select "Messages". Choose your child\'s teacher from the list and send a message. Teachers typically respond within 24 hours during school days.'
    },
    {
      id: 3,
      category: 'Finance',
      question: 'Where can I download fee receipts?',
      answer: 'Visit the Fee Payments section. Under Transaction History, click the download icon next to any completed payment to get your receipt in PDF format.'
    },
    {
      id: 4,
      category: 'Finance',
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, bank transfers, and online banking. All payments are processed through secure payment gateways in the mobile app.'
    },
    {
      id: 5,
      category: 'Transport',
      question: 'How do I apply for a bus route change?',
      answer: 'Submit a ticket under the Transport category with your current and requested routes. The transport coordinator will review and respond within 3-5 business days.'
    },
    {
      id: 6,
      category: 'Transport',
      question: 'Can I track the school bus in real-time?',
      answer: 'Yes! The real-time bus tracking feature is available in the mobile app. Go to Transport > Live Tracking to see your bus location.'
    },
    {
      id: 7,
      category: 'Technical',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click "Forgot Password" on the login page. Enter your registered email, and you\'ll receive a reset link. If issues persist, contact us via live chat.'
    },
    {
      id: 8,
      category: 'Technical',
      question: 'The app is not working properly. What should I do?',
      answer: 'First, try clearing your browser cache or updating the app to the latest version. If the issue continues, submit a technical support ticket with details about the problem.'
    }
  ];

  const myTickets = [
    {
      id: 'TKT-2026-001',
      category: 'Transport',
      subject: 'Request for bus route change',
      status: 'in-progress',
      createdAt: '2026-01-18',
      lastUpdate: '2026-01-19'
    },
    {
      id: 'TKT-2026-002',
      category: 'Finance',
      subject: 'Fee receipt not received',
      status: 'resolved',
      createdAt: '2026-01-15',
      lastUpdate: '2026-01-16'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, color: 'from-slate-500 to-gray-500' },
    { id: 'Academic', name: 'Academic', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'Finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'Transport', name: 'Transport', icon: Bus, color: 'from-amber-500 to-orange-500' },
    { id: 'Technical', name: 'Technical', icon: Laptop, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      text: chatInput,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setChatInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: 'bot',
        text: 'Thank you for your message. A support agent will respond shortly. Is there anything else I can help you with?',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleSubmitTicket = () => {
    console.log('Submitting ticket:', ticketForm);
    // API call will be added here
    alert('Ticket submitted successfully! You will receive updates via email.');
    setTicketForm({
      category: 'Academic',
      subject: '',
      description: '',
      priority: 'medium'
    });
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'resolved':
        return <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1">
          <CheckCircle size={12} /> Resolved
        </span>;
      case 'in-progress':
        return <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center gap-1">
          <Clock size={12} /> In Progress
        </span>;
      default:
        return <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
          <Clock size={12} /> Pending
        </span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <HelpCircle size={24} className="md:hidden text-white" />
            <HelpCircle size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Support & Help Center
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">Get help, submit tickets, or chat with our team</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-white/70 backdrop-blur-sm rounded-xl w-fit">
          {[
            { id: 'faq', label: 'FAQs', icon: HelpCircle },
            { id: 'tickets', label: 'My Tickets', icon: Ticket },
            { id: 'chat', label: 'Live Chat', icon: MessageCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ View */}
      {activeTab === 'faq' && (
        <div className="relative z-10">
          {/* Search & Category Filters */}
          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search frequently asked questions..."
                className="w-full pl-10 pr-4 py-3 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => {
                const Icon = category.icon;
                const count = category.id === 'all' ? faqs.length : faqs.filter(f => f.category === category.id).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-white/80 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{category.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id ? 'bg-white/30' : 'bg-slate-100'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-4 md:p-5 flex items-start justify-between gap-3 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        faq.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                        faq.category === 'Finance' ? 'bg-green-100 text-green-700' :
                        faq.category === 'Transport' ? 'bg-amber-100 text-amber-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-800">{faq.question}</h3>
                  </div>
                  {expandedFaq === faq.id ? (
                    <ChevronUp size={20} className="text-cyan-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 text-center shadow-lg">
                <Search size={40} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No FAQs found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tickets View */}
      {activeTab === 'tickets' && (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Ticket Form */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Ticket className="text-cyan-600" size={24} />
              Create Support Ticket
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                <select
                  value={ticketForm.category}
                  onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                >
                  <option value="Academic">Academic</option>
                  <option value="Finance">Finance</option>
                  <option value="Transport">Transport</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Priority</label>
                <div className="flex gap-2">
                  {['low', 'medium', 'high'].map((priority) => (
                    <button
                      key={priority}
                      onClick={() => setTicketForm({...ticketForm, priority})}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                        ticketForm.priority === priority
                          ? priority === 'high' ? 'bg-red-500 text-white' :
                            priority === 'medium' ? 'bg-amber-500 text-white' :
                            'bg-blue-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {priority}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                <textarea
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  placeholder="Please provide detailed information about your issue..."
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all resize-none"
                  rows={5}
                />
              </div>

              <button
                onClick={handleSubmitTicket}
                disabled={!ticketForm.subject || !ticketForm.description}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <div className="flex flex-col items-center">
                  <span>Submit Ticket</span>
                  <span className="text-[8px] opacity-80">get in app</span>
                </div>
              </button>
            </div>
          </div>

          {/* My Tickets List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FileText className="text-purple-600" size={24} />
              My Tickets
            </h2>
            
            {myTickets.map((ticket) => (
              <div key={ticket.id} className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/60 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-500">#{ticket.id}</span>
                      {getStatusBadge(ticket.status)}
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{ticket.subject}</h3>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      ticket.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                      ticket.category === 'Finance' ? 'bg-green-100 text-green-700' :
                      ticket.category === 'Transport' ? 'bg-amber-100 text-amber-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {ticket.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span>Created: {new Date(ticket.createdAt).toLocaleDateString('en-SG')}</span>
                  <span>Updated: {new Date(ticket.lastUpdate).toLocaleDateString('en-SG')}</span>
                </div>

                <button className="w-full bg-slate-100 text-slate-700 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  <div className="flex flex-col items-center">
                    <span>View Details</span>
                    <span className="text-[8px]">get in app</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Chat View */}
      {activeTab === 'chat' && (
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 280px)', minHeight: '500px' }}>
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold">Support Chat</h3>
                <p className="text-white/80 text-xs">Typically responds in 5 minutes</p>
              </div>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-white" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                    <div className={`max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-tr-sm'
                        : 'bg-slate-100 text-slate-800 rounded-tl-sm'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <span className={`text-[10px] mt-1 block ${
                        message.sender === 'user' ? 'text-white/70' : 'text-slate-500'
                      }`}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <button className="p-2.5 hover:bg-slate-200 rounded-lg transition-colors">
                  <Paperclip size={20} className="text-slate-500" />
                </button>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                >
                  <Send size={18} />
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold">Send</span>
                    <span className="text-[8px] opacity-80">get in app</span>
                  </div>
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">Live chat is available during school hours (8 AM - 5 PM)</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SupportCenter;
