import React from "react";
import { Scan, Search, Calendar, CheckCircle, RefreshCw } from "lucide-react";

const IssueBookForm = ({
  barcodeInput,
  setBarcodeInput,
  memberSearch,
  setMemberSearch,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
          <Scan className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Issue New Book</h2>
          <p className="text-sm text-gray-600">
            Scan barcode or search manually
          </p>
        </div>
      </div>

      {/* Barcode Scanner & Search */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Book Barcode / ISBN
          </label>
          <div className="relative">
            <Scan className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              placeholder="Scan or enter barcode..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Use barcode scanner or type manually
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Member ID / Name
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={memberSearch}
              onChange={(e) => setMemberSearch(e.target.value)}
              placeholder="Search student or staff..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Enter member ID or name to search
          </p>
        </div>
      </div>

      {/* Due Date */}
      <div className="grid md:grid-cols-3 gap-6 mb-6 p-5 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-2xl border border-cyan-100">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            Due Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
            defaultValue="2024-02-03"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Loan Period
          </label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
            <option value="14">14 Days (Standard)</option>
            <option value="7">7 Days (Short Term)</option>
            <option value="30">30 Days (Extended)</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Confirm Issue</span>
          </div>
          <div className="text-[10px] opacity-70">get in app</div>
        </button>
        <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 transition-all flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          <span>Reset Form</span>
        </button>
      </div>
    </div>
  );
};

export default IssueBookForm;
