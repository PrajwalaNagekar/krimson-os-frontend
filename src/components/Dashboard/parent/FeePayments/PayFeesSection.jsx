import React, { useState } from "react";
import {
  CreditCard,
  Shield,
  Smartphone,
  ArrowRight,
  Clock,
  Info,
  X,
  CheckCircle,
} from "lucide-react";

const PayFeesSection = ({ feeStatus }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState("initial"); // initial, processing, success

  const handlePayment = () => {
    setShowPaymentModal(true);
    setPaymentStep("initial");
  };

  const processPayment = () => {
    setPaymentStep("processing");
    // Simulate Razorpay payment processing
    setTimeout(() => {
      setPaymentStep("success");
      setTimeout(() => {
        setShowPaymentModal(false);
        setPaymentStep("initial");
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
            <CreditCard size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg md:text-xl">
              Pay Fees
            </h2>
            <p className="text-xs text-slate-500">
              Quick and secure payment options
            </p>
          </div>
        </div>

        {/* Quick Pay Card */}
        <div className="bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden mb-4">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <div className="relative z-10">
            <p className="text-white/80 text-sm mb-2">Quick Payment</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              SGD {feeStatus.totalOutstanding.toFixed(2)}
            </h3>

            {/* Payment Breakdown */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 space-y-2">
              <p className="text-white/90 text-xs font-semibold mb-2">
                Payment Breakdown:
              </p>
              {feeStatus.upcomingDues.map((due) => (
                <div
                  key={due.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white/80">{due.description}</span>
                  <span className="text-white font-semibold">
                    SGD {due.amount.toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-white/30 pt-2 mt-2">
                <div className="flex items-center justify-between text-base font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">
                    SGD {feeStatus.totalOutstanding.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-auto mx-auto block bg-white text-blue-600 px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-300 mb-4"
            >
              <div className="flex items-center justify-center gap-3">
                <CreditCard size={24} />
                <span>Pay Full Amount Now</span>
                <ArrowRight size={24} />
              </div>
            </button>

            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Shield size={16} />
              <span>Secure payment via Stripe & Razorpay</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 mb-4">
          <h3 className="font-bold text-slate-800 text-sm">
            Accepted Payment Methods
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center hover:border-cyan-400 transition-colors">
              <CreditCard size={24} className="mx-auto mb-1 text-slate-600" />
              <p className="text-xs font-medium text-slate-700">Credit Card</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center hover:border-cyan-400 transition-colors">
              <CreditCard size={24} className="mx-auto mb-1 text-slate-600" />
              <p className="text-xs font-medium text-slate-700">Debit Card</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center hover:border-cyan-400 transition-colors">
              <Smartphone size={24} className="mx-auto mb-1 text-slate-600" />
              <p className="text-xs font-medium text-slate-700">
                Digital Wallet
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center hover:border-cyan-400 transition-colors">
              <Shield size={24} className="mx-auto mb-1 text-slate-600" />
              <p className="text-xs font-medium text-slate-700">
                Bank Transfer
              </p>
            </div>
          </div>
        </div>

        {/* Payment Reminders */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-3 md:p-4 border border-cyan-200">
          <div className="flex items-start gap-3 mb-3">
            <Clock size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-sm text-cyan-700 mb-1">
                Due in {feeStatus.daysLeft} days
              </p>
              <p className="text-xs text-slate-600">
                {new Date(feeStatus.dueDate).toLocaleDateString("en-SG", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-white/60 rounded-lg p-2">
            <Info size={14} className="text-cyan-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600">
              Auto-reminders active: You'll receive notifications 7, 3, and 1
              day before due date.
            </p>
          </div>
        </div>
      </div>

      {/* Razorpay Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-fadeIn">
            {paymentStep === "initial" && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">
                    Razorpay Payment
                  </h3>
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-slate-600 mb-1">Amount to Pay</p>
                  <p className="text-3xl font-bold text-slate-800">
                    SGD {feeStatus.totalOutstanding.toFixed(2)}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield size={16} className="text-green-500" />
                    <span>Secure payment gateway</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>PCI DSS compliant</span>
                  </div>
                </div>

                <button
                  onClick={processPayment}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Proceed to Payment
                </button>
              </div>
            )}

            {paymentStep === "processing" && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Processing Payment...
                </h3>
                <p className="text-sm text-slate-600">
                  Please wait while we process your payment
                </p>
              </div>
            )}

            {paymentStep === "success" && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Payment Successful!
                </h3>
                <p className="text-sm text-slate-600">
                  Your payment has been processed successfully
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PayFeesSection;
