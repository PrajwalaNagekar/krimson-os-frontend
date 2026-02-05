import React, { useState } from "react";
import { Book, Wifi, Heart, ChevronDown } from "lucide-react";

const FAQsSection = ({ faqs, searchQuery }) => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-4 animate-slideDown max-w-4xl mx-auto">
      {filteredFaqs.map((faq, index) => {
        const Icon = getCategoryIcon(faq.category);
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.id}
            className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-blue-200 shadow-md"
                : "border-slate-100 hover:border-blue-100"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getCategoryStyles(faq.category)}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4
                    className={`font-bold text-lg transition-colors ${isOpen ? "text-blue-600" : "text-slate-800"}`}
                  >
                    {faq.question}
                  </h4>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    {faq.category}
                  </span>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pl-[4.5rem] pt-0">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {filteredFaqs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 border-dashed">
          <p className="text-slate-400 font-bold">
            No results found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQsSection;
