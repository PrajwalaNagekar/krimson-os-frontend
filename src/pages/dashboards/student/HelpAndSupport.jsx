import { STUDENT_DATA } from '../../../data/studentData';
import { HelpCircle, MessageCircle, Phone, Search } from 'lucide-react';

const HelpAndSupport = () => {
  const { helpAndSupport } = STUDENT_DATA;

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
         {helpAndSupport.options.map((option) => {
           const Icon = { HelpCircle, MessageCircle }[option.icon] || HelpCircle;
           const colors = option.color === 'blue' 
            ? { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', border: 'hover:border-blue-200' }
            : { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600', border: 'hover:border-purple-200' };

           return (
             <div key={option.id} className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${colors.border} transition-colors cursor-pointer group`}>
                <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 ${colors.hoverBg} group-hover:text-white transition-colors`}>
                   <Icon size={24}/>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{option.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{option.description}</p>
             </div>
           );
         })}
      </div>

      <div className="bg-green-50 rounded-3xl p-8 flex items-center gap-6 border border-green-100">
         <div className="p-4 bg-white rounded-full text-green-600 shadow-sm">
            <Phone size={32} />
         </div>
         <div>
            <h3 className="font-bold text-green-800 text-xl">{helpAndSupport.concerns.title}</h3>
            <p className="text-sm text-green-700 mt-1 mb-3">{helpAndSupport.concerns.description}</p>
            <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-xl text-sm hover:bg-green-700">{helpAndSupport.concerns.action}</button>
         </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
