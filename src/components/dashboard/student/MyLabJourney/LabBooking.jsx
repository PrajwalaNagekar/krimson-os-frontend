import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Beaker } from 'lucide-react';

const LabBooking = ({ data }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [filterSubject, setFilterSubject] = useState('All');

  // Get unique subjects for filtering
  const subjects = ['All', ...new Set(data.map(booking => booking.subject))];

  // Filter bookings
  const filteredBookings = data.filter(booking => 
    filterSubject === 'All' || booking.subject === filterSubject
  );

  // Sort bookings: upcoming first, then completed
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (a.status === 'upcoming' && b.status !== 'upcoming') return -1;
    if (a.status !== 'upcoming' && b.status === 'upcoming') return 1;
    return new Date(a.date) - new Date(b.date);
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'completed':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'today':
        return 'bg-gradient-to-r from-orange-500 to-pink-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  const getPrepStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Pending':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 0) return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `In ${diffDays} days`;
  };

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div>
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Calendar className="text-cyan-500" size={24} />
            Lab Schedule & Bookings
          </h3>
          <p className="text-sm text-gray-600 mt-1">View and prepare for your upcoming lab sessions</p>
        </div>
        
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
        >
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedBookings.map(booking => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Card Header with Status */}
            <div className={`${getStatusColor(booking.status)} px-6 py-4 flex justify-between items-center`}>
              <div>
                <h4 className="font-bold text-lg">{booking.subject}</h4>
                <p className="text-sm opacity-90">{booking.labName}</p>
              </div>
              <Beaker size={32} className="opacity-80" />
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              {/* Experiment Title */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                <h5 className="font-bold text-gray-800 text-sm mb-1">Experiment</h5>
                <p className="text-gray-700 font-medium">{booking.experiment}</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Calendar size={18} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Date</p>
                    <p className="text-sm font-bold text-gray-800">{formatDate(booking.date)}</p>
                    <p className="text-xs text-gray-600">{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Time</p>
                    <p className="text-sm font-bold text-gray-800">{booking.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Location</p>
                    <p className="text-sm font-bold text-gray-800">{booking.room}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User size={18} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Instructor</p>
                    <p className="text-sm font-bold text-gray-800">{booking.teacher}</p>
                  </div>
                </div>
              </div>

              {/* Preparation Status */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-700">Preparation Status:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPrepStatusColor(booking.prepStatus)}`}>
                  {booking.prepStatus}
                </span>
              </div>

              {/* Expandable Materials Section */}
              <button
                onClick={() => setExpandedId(expandedId === booking.id ? null : booking.id)}
                className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-cyan-50 hover:to-blue-50 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 hover:text-cyan-600 transition-all group"
              >
                <span className="flex items-center gap-2">
                  {booking.prepStatus === 'Completed' ? <CheckCircle2 size={16} className="text-green-500" /> : <AlertCircle size={16} className="text-orange-500" />}
                  Materials Needed ({booking.materialsNeeded.length})
                </span>
                {expandedId === booking.id ? <ChevronUp size={18} className="group-hover:text-cyan-600" /> : <ChevronDown size={18} className="group-hover:text-cyan-600" />}
              </button>

              {expandedId === booking.id && (
                <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-xl p-4 space-y-2 border border-cyan-100 animate-in fade-in duration-300">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Required Materials</p>
                  <ul className="space-y-2">
                    {booking.materialsNeeded.map((material, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <span className="font-medium text-gray-700">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-12 text-center border-2 border-dashed border-cyan-200">
          <Calendar size={48} className="mx-auto text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">No Lab Sessions Found</h3>
          <p className="text-gray-600">No lab bookings available for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default LabBooking;
