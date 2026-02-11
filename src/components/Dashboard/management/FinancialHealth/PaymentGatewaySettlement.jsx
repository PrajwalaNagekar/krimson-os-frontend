import React from "react";
import { CreditCard, CheckCircle, Clock } from "lucide-react";

const PaymentGatewaySettlement = ({ data }) => {
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Payment Gateway Settlement
          </h2>
          <p className="text-sm text-gray-600">
            Transaction reconciliation reports
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 border-b-2 border-cyan-200">
              <th className="p-4 text-left text-xs font-bold text-gray-700 uppercase">
                Gateway
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Transactions
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Amount
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Settled
              </th>
              <th className="p-4 text-right text-xs font-bold text-gray-700 uppercase">
                Charges
              </th>
              <th className="p-4 text-center text-xs font-bold text-gray-700 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((gateway, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors"
              >
                <td className="p-4 font-bold text-gray-800">
                  {gateway.gateway}
                </td>
                <td className="p-4 text-center text-gray-700">
                  {gateway.transactions}
                </td>
                <td className="p-4 text-right font-bold text-gray-800">
                  {formatCurrency(gateway.amount)}
                </td>
                <td className="p-4 text-right font-bold text-green-700">
                  {formatCurrency(gateway.settled)}
                </td>
                <td className="p-4 text-right font-bold text-red-700">
                  {formatCurrency(gateway.charges)}
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      gateway.status === "Settled"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {gateway.status === "Settled" && (
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                    )}
                    {gateway.status === "Pending" && (
                      <Clock className="w-3 h-3 inline mr-1" />
                    )}
                    {gateway.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentGatewaySettlement;
