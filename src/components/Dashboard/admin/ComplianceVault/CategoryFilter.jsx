import React from "react";
import {
  Filter,
  Package,
  Award,
  Shield,
  BookOpen,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  totalDocuments,
}) => {
  const iconMap = {
    Award: <Award size={20} />,
    Shield: <Shield size={20} />,
    BookOpen: <BookOpen size={20} />,
    Users: <Users size={20} />,
    DollarSign: <DollarSign size={20} />,
    BarChart3: <BarChart3 size={20} />,
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Filter className="text-blue-500" size={24} />
        Compliance Categories Filter
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
            selectedCategory === "all"
              ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/30"
              : "bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:shadow-md"
          }`}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div
              className={`p-3 rounded-xl transition-colors ${
                selectedCategory === "all"
                  ? "bg-white/10"
                  : "bg-slate-100 group-hover:bg-slate-200"
              }`}
            >
              <Package size={24} />
            </div>
            <p className="font-bold text-sm">All Documents</p>
            <p className="text-xs opacity-80">{totalDocuments} files</p>
          </div>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`relative p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
              selectedCategory === category.id
                ? `bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 text-white border-${category.color}-500 shadow-lg shadow-${category.color}-500/30`
                : `bg-white text-slate-600 border-slate-200 hover:border-${category.color}-300 hover:shadow-md`
            }`}
          >
            <div className="flex flex-col items-center gap-3 relative z-10">
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white/20 backdrop-blur-sm"
                    : `bg-${category.color}-50 text-${category.color}-600 group-hover:scale-110`
                }`}
              >
                {iconMap[category.iconName]}
              </div>
              <div className="text-center">
                <p className="font-bold text-sm mb-0.5">{category.name}</p>
                <p
                  className={`text-xs ${
                    selectedCategory === category.id
                      ? "text-white/80"
                      : "text-slate-400"
                  }`}
                >
                  {category.count} files
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
