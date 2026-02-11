import React from "react";
import {
  BookOpen,
  Users,
  Heart,
  Trophy,
  Microscope,
  Filter,
} from "lucide-react";

const AwardCategories = ({ categories }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "BookOpen":
        return BookOpen;
      case "Users":
        return Users;
      case "Heart":
        return Heart;
      case "Trophy":
        return Trophy;
      case "Microscope":
        return Microscope;
      default:
        return BookOpen;
    }
  };

  const SectionHeader = ({ title, icon: Icon, description }) => (
    <div className="flex items-center gap-4 mb-6 text-slate-800">
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
        <Icon size={24} className="text-slate-600" />
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        {description && (
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-0.5">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
      <SectionHeader
        title="Award Category"
        icon={Filter}
        description="Select Primary Classification"
      />
      <div className="grid grid-cols-1 gap-3">
        {categories.map((cat) => {
          const Icon = getIcon(cat.icon);
          return (
            <button
              key={cat.id}
              className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 ${cat.bg} ${cat.color} rounded-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon size={18} />
                </div>
                <span className="text-sm font-bold text-slate-700">
                  {cat.label}
                </span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AwardCategories;
