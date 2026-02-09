import React from "react";
import { User } from "lucide-react";

const TeacherQuickConnect = ({ onSendNote }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-lg">
      <h3 className="font-bold text-lg mb-4">Teacher Quick Connect</h3>
      <p className="text-blue-100 text-sm mb-6">
        Send a secure note to a class teacher regarding a student's emotional
        state.
      </p>
      <div className="flex gap-2 items-center bg-white/20 p-2 rounded-xl backdrop-blur-sm mb-4">
        <User size={18} className="ml-2" />
        <input
          type="text"
          placeholder="Search Teacher..."
          className="bg-transparent placeholder-blue-100 text-white outline-none w-full text-sm"
        />
      </div>
      <textarea
        placeholder="Type confidential note..."
        className="w-full h-24 bg-white/10 rounded-xl p-3 text-sm text-white placeholder-blue-200 outline-none resize-none"
      ></textarea>
      <button
        onClick={onSendNote}
        className="w-full mt-4 py-2 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
      >
        Send Secure Note
      </button>
    </div>
  );
};

export default TeacherQuickConnect;
