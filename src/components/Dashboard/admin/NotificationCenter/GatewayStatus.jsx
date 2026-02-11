import React from "react";
import { Shield, Smartphone, Mail, Bell } from "lucide-react";

const GatewayStatus = ({ gatewayStatus }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Shield className="text-blue-500" size={24} />
        Gateway Integration Status
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SMS Gateway */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Smartphone size={24} />
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
              {gatewayStatus.sms.status}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">SMS Gateway</h3>
          <p className="text-sm text-slate-500 mb-4">
            {gatewayStatus.sms.provider}
          </p>

          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Monthly Usage</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold text-slate-800">
                  {gatewayStatus.sms.monthlySent.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">
                  / {gatewayStatus.sms.monthlyLimit.toLocaleString()}
                </p>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  style={{
                    width: `${(gatewayStatus.sms.monthlySent / gatewayStatus.sms.monthlyLimit) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Balance:</span>
              <span className="font-bold text-green-600">
                {gatewayStatus.sms.balance}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Last Sync:</span>
              <span className="font-bold text-slate-700">
                {gatewayStatus.sms.lastSync}
              </span>
            </div>
          </div>
        </div>

        {/* Email Gateway */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Mail size={24} />
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
              {gatewayStatus.email.status}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            Email Gateway
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            {gatewayStatus.email.provider}
          </p>

          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Monthly Usage</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold text-slate-800">
                  {gatewayStatus.email.monthlySent.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">
                  / {gatewayStatus.email.monthlyLimit.toLocaleString()}
                </p>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                  style={{
                    width: `${(gatewayStatus.email.monthlySent / gatewayStatus.email.monthlyLimit) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Balance:</span>
              <span className="font-bold text-green-600">
                {gatewayStatus.email.balance}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Last Sync:</span>
              <span className="font-bold text-slate-700">
                {gatewayStatus.email.lastSync}
              </span>
            </div>
          </div>
        </div>

        {/* Firebase/App Notifications */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
              <Bell size={24} />
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold border border-green-200">
              {gatewayStatus.firebase.status}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            App Notifications
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            {gatewayStatus.firebase.provider}
          </p>

          <div className="space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Monthly Sent</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold text-slate-800">
                  {gatewayStatus.firebase.monthlySent.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 font-bold">
                  {gatewayStatus.firebase.monthlyLimit}
                </p>
              </div>
              <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-full"></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Status:</span>
              <span className="font-bold text-green-600">
                {gatewayStatus.firebase.balance}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Last Sync:</span>
              <span className="font-bold text-slate-700">
                {gatewayStatus.firebase.lastSync}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatewayStatus;
