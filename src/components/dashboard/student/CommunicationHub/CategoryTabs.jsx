import React from 'react';

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory, activeMessages, groupsUnreadCount = 0 }) => {
  return (
    <div className="bg-white rounded-3xl p-2 shadow-xl border-2 border-slate-100">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {categories.map(cat => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          const categoryCount = cat.id === 'all' 
            ? activeMessages.length 
            : cat.id === 'groups'
            ? groupsUnreadCount
            : activeMessages.filter(m => m.category === cat.id).length;
          
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-lg scale-105'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-102'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-semibold hidden sm:inline">{cat.label}</span>
              <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{categoryCount}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
