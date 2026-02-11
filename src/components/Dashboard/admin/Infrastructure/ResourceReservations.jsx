import React from "react";
import { Calendar, Plus, User, Users, Edit } from "lucide-react";

const ResourceReservations = ({ reservations, getStatusColor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 via-purple-50 to-slate-50 px-8 py-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Calendar className="text-purple-500" size={24} />
              Resource Reservations
            </h2>
            <p className="text-sm text-slate-500">
              Upcoming facility and transport bookings
            </p>
          </div>
          <button className="px-5 py-2.5 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Plus size={18} />
              New Booking
            </div>
          </button>
        </div>
      </div>

      <div className="p-8 space-y-4">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all bg-gradient-to-br from-white to-purple-50/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    {reservation.resource}
                  </h3>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${getStatusColor(reservation.status)}`}
                  >
                    {reservation.status}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-200">
                    {reservation.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  {reservation.purpose}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <p className="text-slate-500 font-medium mb-1">Booked By</p>
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-purple-500" />
                      <p className="font-bold text-purple-600">
                        {reservation.bookedBy}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">
                      Department
                    </p>
                    <p className="font-bold text-slate-700">
                      {reservation.department}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">
                      Date & Time
                    </p>
                    <p className="font-bold text-slate-700">
                      {reservation.date}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {reservation.timeSlot}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-medium mb-1">Students</p>
                    <div className="flex items-center gap-1">
                      <Users size={12} className="text-blue-500" />
                      <p className="font-bold text-blue-600">
                        {reservation.students}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-200 flex flex-col items-center">
                  <Edit size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceReservations;
