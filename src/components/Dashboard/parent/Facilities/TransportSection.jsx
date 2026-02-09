import React, { useState } from "react";
import {
  Bus,
  MapPin,
  Clock,
  User,
  Phone,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Navigation,
  Shield,
  Calendar,
  FileText,
} from "lucide-react";

const TransportSection = ({ transportRequests, transportTracking }) => {
  const [activeTab, setActiveTab] = useState("tracking");
  const [expandedRequest, setExpandedRequest] = useState(null);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
      case "approved":
        return "bg-green-50 text-green-700 border-green-200";
      case "in transit":
      case "processing":
      case "under review":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "scheduled":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "delayed":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveTab("tracking")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "tracking"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4" />
            Live Tracking
          </div>
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "requests"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Requests & Changes
          </div>
        </button>
      </div>

      {/* Live Tracking Section */}
      {activeTab === "tracking" && (
        <div className="space-y-6">
          {/* Current Assignment Card */}
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 rounded-2xl p-6 border-2 border-cyan-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Bus className="w-6 h-6 text-cyan-600" />
              Current Transport Assignment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Route</p>
                <p className="font-bold text-gray-800">
                  {transportRequests.currentAssignment.routeNumber} -{" "}
                  {transportRequests.currentAssignment.routeName}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Vehicle Number</p>
                <p className="font-bold text-gray-800">
                  {transportRequests.currentAssignment.vehicleNumber}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Pickup Point</p>
                <p className="font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  {transportRequests.currentAssignment.pickupPoint}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Timings</p>
                <p className="font-bold text-gray-800">
                  {transportRequests.currentAssignment.pickupTime} -{" "}
                  {transportRequests.currentAssignment.dropTime}
                </p>
              </div>
            </div>
          </div>

          {/* Live Tracking Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Navigation className="w-6 h-6 text-blue-600" />
                Live Bus Location
              </h3>
              <div
                className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                  transportTracking.liveTracking.currentStatus,
                )}`}
              >
                {transportTracking.liveTracking.currentStatus}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Current Location</p>
                <p className="font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  {transportTracking.liveTracking.currentLocation}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">Next Stop</p>
                <p className="font-bold text-gray-800">
                  {transportTracking.liveTracking.nextStop}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">ETA</p>
                <p className="font-bold text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  {transportTracking.liveTracking.eta}
                </p>
              </div>
            </div>

            {/* Driver & Conductor Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Driver</p>
                    <p className="font-bold text-gray-800">
                      {transportTracking.driver.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {transportTracking.driver.phone}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Experience: {transportTracking.driver.experience}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Conductor</p>
                    <p className="font-bold text-gray-800">
                      {transportTracking.conductor.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {transportTracking.conductor.phone}
                </p>
              </div>
            </div>

            {/* Safety Checks */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Safety Checks
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">GPS Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Contacts Updated
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Next: {transportTracking.safetyChecks.nextInspection}
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Contacts - NEW SECTION */}
            {transportTracking.emergencyContacts && (
              <div className="mt-6 bg-red-50 rounded-xl p-4 border-2 border-red-100">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Emergency Contacts
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {transportTracking.emergencyContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-lg p-3 border border-red-100 flex justify-between items-center"
                    >
                      <div>
                        <p className="text-sm font-bold text-gray-800">
                          {contact.role}
                        </p>
                        <p className="text-xs text-gray-600">{contact.name}</p>
                        <p className="text-xs text-green-600 font-semibold mt-1">
                          Available: {contact.available}
                        </p>
                      </div>
                      <a
                        href={`tel:${contact.phone}`}
                        className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Requests & Changes Section */}
      {activeTab === "requests" && (
        <div className="space-y-6">
          {/* Pending Requests */}
          {transportRequests.pendingRequests.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                Pending Requests
              </h3>
              <div className="space-y-3">
                {transportRequests.pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          {request.type}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Requested on {request.requestDate}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            request.status,
                          )}`}
                        >
                          {request.status}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                            request.priority,
                          )}`}
                        >
                          {request.priority} priority
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <span className="font-semibold">From:</span>{" "}
                        {request.fromRoute}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">To:</span>{" "}
                        {request.toRoute}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Reason:</span>{" "}
                        {request.reason}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Estimated Completion:
                        </span>{" "}
                        {request.estimatedCompletion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Request History */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Request History
            </h3>
            <div className="space-y-3">
              {transportRequests.requestHistory.map((request) => (
                <div
                  key={request.id}
                  className="border-2 border-gray-100 rounded-xl"
                >
                  <button
                    onClick={() =>
                      setExpandedRequest(
                        expandedRequest === request.id ? null : request.id,
                      )
                    }
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div className="text-left">
                        <h4 className="font-bold text-gray-800">
                          {request.type}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {request.requestDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          request.status,
                        )}`}
                      >
                        {request.status}
                      </span>
                      {expandedRequest === request.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>
                  {expandedRequest === request.id && (
                    <div className="px-4 pb-4 space-y-2 text-sm bg-gray-50 rounded-b-xl">
                      <p className="text-gray-700">
                        <span className="font-semibold">Details:</span>{" "}
                        {request.details ||
                          `${request.fromStop || ""} → ${request.toStop || ""}`}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Reason:</span>{" "}
                        {request.reason}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Approved:</span>{" "}
                        {request.approvedDate}
                      </p>
                      {request.validUntil && (
                        <p className="text-gray-700">
                          <span className="font-semibold">Valid Until:</span>{" "}
                          {request.validUntil}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Available Routes */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Bus className="w-6 h-6 text-purple-600" />
              Available Routes for Transfer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {transportRequests.availableRoutes.map((route) => (
                <div
                  key={route.id}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-gray-800 mb-2">
                    {route.routeNumber}
                  </h4>
                  <p className="text-sm font-semibold text-purple-700 mb-3">
                    {route.routeName}
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">Areas:</span>{" "}
                      {route.areas.join(", ")}
                    </p>
                    <p>
                      <span className="font-semibold">Available Seats:</span>{" "}
                      <span className="text-green-600 font-bold">
                        {route.availableSeats}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Pickup Time:</span>{" "}
                      {route.pickupTime}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                    Request Transfer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransportSection;
