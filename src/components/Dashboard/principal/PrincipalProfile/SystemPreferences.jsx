import React from "react";

const SystemPreferences = ({ theme, preferences, setPreferences }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
      ></div>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        System Preferences
      </h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-800">Email Notifications</p>
            <p className="text-sm text-slate-500">
              Receive weekly digests and critical alerts
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={() =>
                setPreferences((p) => ({
                  ...p,
                  emailNotifications: !p.emailNotifications,
                }))
              }
              className="sr-only peer"
            />
            <div
              className={`w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}
            ></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-800">SMS Alerts</p>
            <p className="text-sm text-slate-500">
              Receive urgent security notifications
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.smsNotifications}
              onChange={() =>
                setPreferences((p) => ({
                  ...p,
                  smsNotifications: !p.smsNotifications,
                }))
              }
              className="sr-only peer"
            />
            <div
              className={`w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r ${theme.gradient}`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferences;
