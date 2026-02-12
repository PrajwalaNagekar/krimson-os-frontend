import React from "react";
import { MessageSquare, Menu } from "lucide-react";

const EmptyState = ({ onOpenMobileList }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-center">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 shadow-2xl animate-float">
        <MessageSquare size={32} className="md:w-10 md:h-10 text-cyan-500" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-1 md:mb-2">
        Select a conversation
      </h3>
      <p className="text-xs md:text-sm text-slate-500 font-medium max-w-xs">
        Choose a thread from the list to view details and respond
      </p>
      <button
        onClick={onOpenMobileList}
        className="lg:hidden mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <Menu size={18} />
        View Messages
      </button>
    </div>
  );
};

export default EmptyState;
