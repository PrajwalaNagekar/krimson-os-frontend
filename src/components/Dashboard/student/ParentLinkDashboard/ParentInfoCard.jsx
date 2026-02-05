import React from "react";
import { User, Mail, Link2, TrendingUp } from "lucide-react";

const ParentInfoCard = ({ parentInfo }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <User className="text-blue-500" size={24} />
        Linked Parent Account
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
          <div className="p-2 bg-blue-200 rounded-xl">
            <User size={20} className="text-blue-700" />
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium">Parent Name</div>
            <div className="font-bold text-blue-900">{parentInfo.name}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
          <div className="p-2 bg-green-200 rounded-xl">
            <Mail size={20} className="text-green-700" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm text-green-600 font-medium">Email</div>
            <div className="font-bold text-green-900 truncate">
              {parentInfo.email}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-2xl">
          <div className="p-2 bg-purple-200 rounded-xl">
            <Link2 size={20} className="text-purple-700" />
          </div>
          <div>
            <div className="text-sm text-purple-600 font-medium">
              Linked Since
            </div>
            <div className="font-bold text-purple-900">
              {parentInfo.linkedDate}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-2xl">
          <div className="p-2 bg-pink-200 rounded-xl">
            <TrendingUp size={20} className="text-pink-700" />
          </div>
          <div>
            <div className="text-sm text-pink-600 font-medium">Sync Status</div>
            <div className="font-bold text-pink-900">
              {parentInfo.syncEnabled ? "Active" : "Paused"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentInfoCard;
