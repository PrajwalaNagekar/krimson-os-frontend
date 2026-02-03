import React from "react";
import { Book, Wifi, Heart } from "lucide-react";

const FAQsSection = ({ faqs, searchQuery }) => {
  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Academic":
        return Book;
      case "Technical":
        return Wifi;
      case "Wellness":
        return Heart;
      default:
        return Book;
    }
  };

  const getCategoryStyles = (category) => {
    switch (category) {
      case "Academic":
        return "bg-blue-100 text-blue-600";
      case "Technical":
        return "bg-orange-100 text-orange-600";
      case "Wellness":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideDown">
      {filteredFaqs.map((faq) => {
        const Icon = getCategoryIcon(faq.category);
        return (
          <div
            key={faq.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer"
          >
            <div
              className={`mb-4 w-10 h-10 rounded-xl flex items-center justify-center ${getCategoryStyles(faq.category)}`}
            >
              <Icon size={20} />
            </div>
            <h4 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
              {faq.question}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        );
      })}
      {filteredFaqs.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-slate-400 font-bold">No results found.</p>
        </div>
      )}
    </div>
  );
};

export default FAQsSection;
