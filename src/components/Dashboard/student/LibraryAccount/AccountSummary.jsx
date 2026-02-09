import React from "react";
import {
  Trophy,
  Sparkles,
  BookOpen,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const AccountSummary = ({
  issuedBooks,
  overdueInfo,
  hoveredCard,
  setHoveredCard,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <Trophy className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Account Summary</h2>
          <Sparkles className="text-yellow-500 ml-auto" size={20} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Total Books - Enhanced */}
          <div
            className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredCard("books")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <BookOpen size={24} />
                </div>
                <div className="text-4xl font-bold drop-shadow-lg">
                  {issuedBooks.length}
                </div>
              </div>
              <p className="text-sm text-white/90 font-medium">
                Currently Issued
              </p>
              <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/60 rounded-full transition-all duration-500"
                  style={{ width: hoveredCard === "books" ? "100%" : "60%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Overdue Count - Enhanced */}
          <div
            className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
              overdueInfo.count > 0
                ? "bg-gradient-to-br from-red-500 via-rose-600 to-orange-600"
                : "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600"
            }`}
            onMouseEnter={() => setHoveredCard("overdue")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <AlertCircle size={24} />
                </div>
                <div className="text-4xl font-bold drop-shadow-lg">
                  {overdueInfo.count}
                </div>
              </div>
              <p className="text-sm text-white/90 font-medium">Overdue Books</p>
              <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/60 rounded-full transition-all duration-500"
                  style={{ width: hoveredCard === "overdue" ? "100%" : "40%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Total Fine - Enhanced */}
          <div
            className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
              overdueInfo.fineAmount > 0
                ? "bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-600"
                : "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600"
            }`}
            onMouseEnter={() => setHoveredCard("fine")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <span className="text-2xl font-bold">₹</span>
                </div>
                <div className="text-4xl font-bold drop-shadow-lg">
                  {overdueInfo.fineAmount}
                </div>
              </div>
              <p className="text-sm text-white/90 font-medium">Fine Amount</p>
              <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/60 rounded-full transition-all duration-500"
                  style={{ width: hoveredCard === "fine" ? "100%" : "30%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Clearance Status - Enhanced */}
          <div
            className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${
              overdueInfo.clearanceStatus === "cleared"
                ? "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600"
                : "bg-gradient-to-br from-orange-500 via-amber-600 to-red-600"
            }`}
            onMouseEnter={() => setHoveredCard("clearance")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  {overdueInfo.clearanceStatus === "cleared" ? (
                    <CheckCircle size={24} />
                  ) : (
                    <XCircle size={24} />
                  )}
                </div>
                <div className="text-4xl font-bold drop-shadow-lg">
                  {overdueInfo.clearanceStatus === "cleared" ? "✓" : "✗"}
                </div>
              </div>
              <p className="text-sm text-white/90 font-medium">
                {overdueInfo.clearanceStatus === "cleared"
                  ? "Cleared"
                  : "Pending Dues"}
              </p>
              <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/60 rounded-full transition-all duration-500"
                  style={{
                    width: hoveredCard === "clearance" ? "100%" : "50%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
