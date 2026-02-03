import React from 'react';
import { Star, Calendar, ExternalLink, Edit2 } from 'lucide-react';

export const PortfolioCard = ({ item, onToggleShowcase, onEdit }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative h-40 overflow-hidden bg-slate-100">
        <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <span className="text-white text-xs font-bold px-2 py-1 bg-black/20 backdrop-blur-md rounded-lg border border-white/20">
                {item.type}
            </span>
        </div>
        
        {/* Showcase Toggle */}
        <button 
            onClick={() => onToggleShowcase(item.id)}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                item.showcase 
                ? 'bg-yellow-400 text-white shadow-yellow-500/30 shadow-lg scale-110' 
                : 'bg-white/30 text-white hover:bg-white hover:text-yellow-400'
            }`}
            title={item.showcase ? "Remove from Showcase" : "Add to Showcase"}
        >
            <Star size={16} fill={item.showcase ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors" title={item.title}>
                {item.title}
            </h3>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-4 font-medium">
            <Calendar size={14} />
            <span>{item.date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, i) => (
                <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide border ${
                    i % 2 === 0 
                    ? 'bg-blue-50 text-blue-600 border-blue-100' 
                    : 'bg-cyan-50 text-cyan-600 border-cyan-100'
                }`}>
                    {tag}
                </span>
            ))}
        </div>

        {/* Edit Button */}
        <button 
            onClick={() => onEdit && onEdit(item)}
            className="w-full py-2 px-3 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all font-bold text-sm flex items-center justify-center gap-2"
        >
            <Edit2 size={14} /> Edit Details
        </button>
      </div>
    </div>
  );
};

export const PortfolioSection = ({ title, items, icon: Icon, colorClass, onToggleShowcase, onEdit }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="mb-10 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${colorClass} bg-opacity-10`}>
                    <Icon size={22} className={colorClass.replace('bg-', 'text-')} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                <div className="flex-1 h-px bg-slate-100 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map(item => (
                    <PortfolioCard 
                        key={item.id} 
                        item={item} 
                        onToggleShowcase={() => onToggleShowcase(item.id)}
                        onEdit={onEdit}
                    />
                ))}
                
                {/* Empty State / Add New Placeholder (Optional) */}
                <div className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500 transition-all cursor-pointer group h-full min-h-[280px]">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                        <ExternalLink size={20} />
                    </div>
                    <span className="text-sm font-bold">Add {title}</span>
                </div>
            </div>
        </div>
    );
};
