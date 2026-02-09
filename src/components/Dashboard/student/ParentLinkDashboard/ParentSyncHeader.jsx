import React from "react";
import { Users, Bell } from "lucide-react";

const ParentSyncHeader = ({ unreadMessages, unreadComments }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <Users size={32} />
              Parent Link Dashboard
            </h1>
            <p className="text-white/90 text-sm md:text-base">
              View what your parent sees and receive parental messages
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Synced</span>
          </div>
        </div>

        {/* Alert Badge */}
        {(unreadMessages > 0 || unreadComments > 0) && (
          <div className="inline-flex bg-orange-500/80 backdrop-blur-sm px-4 py-2 rounded-xl items-center gap-2">
            <Bell size={18} />
            <span className="text-sm font-bold">
              {unreadMessages + unreadComments} New{" "}
              {unreadMessages + unreadComments === 1 ? "Alert" : "Alerts"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentSyncHeader;
