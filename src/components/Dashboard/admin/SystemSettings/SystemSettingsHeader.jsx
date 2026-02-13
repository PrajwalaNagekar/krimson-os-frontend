import React from "react";
import { Settings } from "lucide-react";

/**
 * @component SystemSettingsHeader
 * @description Header component for the System Settings page with gradient background and title.
 */
const SystemSettingsHeader = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Gradient matching Admin Sidebar (Cyan → Blue → Pink) */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />

      {/* Decorative Glass Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                System Administration
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/5 px-2 py-1 rounded-md">
                <Settings size={12} className="animate-spin-slow" />
                v2.4.0
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              Settings & System Configuration
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
              Control global system parameters and maintain unified digital
              identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsHeader;
