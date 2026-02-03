import React from "react";
import { Plus, CheckCircle } from "lucide-react";
import { STUDENT_DATA } from "../../../../../data/studentData";

const TicketForm = ({ form, onFormChange, onSubmit, submitted }) => {
  const { categories, priorities } = STUDENT_DATA.supportData.ticketForm;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Plus className="text-indigo-600" size={24} /> Submit a Request
      </h2>

      {submitted ? (
        <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Ticket Submitted!
          </h3>
          <p className="text-green-700">
            Your request has been received. Ticket ID: #TKT-
            {Math.floor(Math.random() * 10000)}
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Issue Category
              </label>
              <select
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                value={form.category}
                onChange={(e) =>
                  onFormChange({ ...form, category: e.target.value })
                }
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Priority Level
              </label>
              <select
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                value={form.priority}
                onChange={(e) =>
                  onFormChange({ ...form, priority: e.target.value })
                }
              >
                {priorities.map((prio) => (
                  <option key={prio} value={prio}>
                    {prio}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Brief summary of the issue..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
              required
              value={form.subject}
              onChange={(e) =>
                onFormChange({ ...form, subject: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Please describe the issue in detail..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700 resize-none"
              required
              value={form.description}
              onChange={(e) =>
                onFormChange({ ...form, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all transform active:scale-95"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TicketForm;
