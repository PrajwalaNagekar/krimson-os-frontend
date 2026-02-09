import React, { useState } from "react";
import { FileText, CreditCard, Receipt } from "lucide-react";
import { feeStatus, transactionHistory } from "../../../data/parentData";
import PaymentHeader from "../../../components/dashboard/parent/FeePayments/PaymentHeader";
import FeeStatement from "../../../components/dashboard/parent/FeePayments/FeeStatement";
import PayFeesSection from "../../../components/dashboard/parent/FeePayments/PayFeesSection";
import TransactionHistory from "../../../components/dashboard/parent/FeePayments/TransactionHistory";
import AnnualSummary from "../../../components/dashboard/parent/FeePayments/AnnualSummary";

const FeePayments = () => {
  const [activeTab, setActiveTab] = useState("statement");

  const tabs = [
    { id: "statement", label: "Fee Statement", icon: FileText },
    { id: "payment", label: "Pay Now", icon: CreditCard },
    { id: "history", label: "History", icon: Receipt },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <PaymentHeader />

      {/* Toggle Buttons */}
      <div className="relative z-10 mb-4 md:mb-6">
        <div className="bg-white/95 backdrop-blur-2xl rounded-xl md:rounded-2xl p-2 shadow-xl border border-white/60 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-102"
                  }`}
                >
                  <Icon size={16} className="hidden sm:block" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Based on Active Tab */}
      <div className="relative z-10 animate-fadeIn">
        {activeTab === "statement" && <FeeStatement feeStatus={feeStatus} />}

        {activeTab === "payment" && <PayFeesSection feeStatus={feeStatus} />}

        {activeTab === "history" && (
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
            <TransactionHistory transactions={transactionHistory} />
            <AnnualSummary />
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default FeePayments;
