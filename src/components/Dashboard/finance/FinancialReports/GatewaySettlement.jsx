import React from "react";
import { Download, CreditCard, CheckCircle } from "lucide-react";

const GatewaySettlement = ({ gatewayData }) => {
  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Gateway Settlement
            </h2>
            <p className="text-xs text-gray-600">Payment reconciliation</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all text-sm flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>CSV</span>
        </button>
      </div>

      <div className="space-y-3">
        {gatewayData.map((gateway, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-800">{gateway.gateway}</h3>
                <p className="text-xs text-gray-600">
                  {gateway.transactions} transactions
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${gateway.status === "Settled" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
              >
                {gateway.status === "Settled" && (
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                )}
                {gateway.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-gray-500">Amount</p>
                <p className="font-bold text-gray-800">
                  {formatCurrency(gateway.amount)}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Settlement</p>
                <p className="font-bold text-green-600">
                  {formatCurrency(gateway.settlement)}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Charges</p>
                <p className="font-bold text-red-600">
                  {formatCurrency(gateway.charges)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatewaySettlement;
