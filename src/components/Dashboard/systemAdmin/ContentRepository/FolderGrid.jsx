import React from "react";
import { Folder, Lock, Globe } from "lucide-react";

const FolderGrid = ({ folders }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Folders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <Folder className="text-blue-500" size={32} />
              {folder.isShared ? (
                <Globe className="text-green-500" size={16} />
              ) : (
                <Lock className="text-slate-400" size={16} />
              )}
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{folder.name}</h3>
            <p className="text-xs text-slate-600 mb-2">{folder.type}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {folder.itemCount} items
              </span>
              <span className="text-xs font-semibold text-blue-600">
                {folder.size}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-blue-200">
              <span
                className={`text-xs px-2 py-1 rounded-md ${
                  folder.isShared
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {folder.accessLevel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderGrid;
