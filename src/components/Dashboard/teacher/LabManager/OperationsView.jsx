import React from "react";
import { Calendar, Plus, Search } from "lucide-react";
import { LAB_DATA } from "../../../../data/teacherData";

const OperationsView = ({
  bookings,
  setBookings,
  inventoryRequests,
  handleBookSlot,
}) => {
  const { timeSlots, labs, inventoryItems } = LAB_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Calendar size={20} className="text-slate-400" /> Lab Booking
            Schedule
          </h3>

          <div className="space-y-6">
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 text-xs font-bold text-slate-400">
                  {time}
                </div>
                {labs.map((lab) => {
                  const booking = bookings.find(
                    (b) => b.lab === lab && b.slot === time,
                  );
                  return (
                    <button
                      key={`${lab}-${time}`}
                      onClick={() => handleBookSlot(lab, time)}
                      className={`col-span-5 p-4 rounded-2xl border text-left transition-all ${
                        booking
                          ? booking.type === "warn"
                            ? "bg-amber-50 border-amber-200 text-amber-700"
                            : "bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed"
                          : "bg-white border-dashed border-slate-200 text-slate-400 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
                      }`}
                    >
                      {booking ? (
                        <div>
                          <div className="font-bold text-xs uppercase tracking-wider mb-1">
                            {booking.status}
                          </div>
                          {booking.class && (
                            <div className="text-[10px] font-bold">
                              {booking.class} • {booking.teacher}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                          <Plus size={14} /> {lab}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Inventory Express
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search item..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl font-bold text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {inventoryItems.map((item) => (
                <button
                  key={item}
                  className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Recent Requests
            </h4>
            <div className="space-y-3">
              {inventoryRequests.map((req) => (
                <div
                  key={req.id}
                  className="flex justify-between items-center bg-slate-50 p-3 rounded-xl"
                >
                  <div>
                    <div className="font-bold text-xs text-slate-700">
                      {req.item}
                    </div>
                    <div className="text-[10px] text-slate-400">{req.date}</div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${req.status === "Approved" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"}`}
                  >
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsView;
