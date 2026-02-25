import React from "react";
import { AlertTriangle, X } from "lucide-react";

const DeleteConfirmModal = ({ itemName, onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <AlertTriangle size={28} className="text-red-500" />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-1">Confirm Delete</h3>
      <p className="text-sm text-slate-500 mb-6">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-slate-700">"{itemName}"</span>?
        <br />
        This action cannot be undone.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 transition-colors shadow-sm"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
);

export default DeleteConfirmModal;
