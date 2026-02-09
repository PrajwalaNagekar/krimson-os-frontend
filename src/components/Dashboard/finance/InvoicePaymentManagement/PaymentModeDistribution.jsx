import React from "react";
import { Activity, CreditCard, DollarSign, Receipt } from "lucide-react";

const PaymentModeDistribution = ({ paymentModeStats }) => {
  const getPaymentModeIcon = (mode) => {
    switch (mode) {
      case "Online":
        return <Activity className="w-4 h-4" />;
      case "Card":
        return <CreditCard className="w-4 h-4" />;
      case "Cash":
        return <DollarSign className="w-4 h-4" />;
      case "Cheque":
        return <Receipt className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Payment Mode Distribution
          </h2>
          <p className="text-sm text-gray-600">Breakdown of payment methods</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentModeStats.map((stat, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                {getPaymentModeIcon(stat.mode)}
                <span className="text-white font-bold ml-1">{stat.mode}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-800">
                {stat.count}
              </span>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
                {stat.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentModeDistribution;
