import React, { useState } from "react";
import {
  Bus,
  MapPin,
  Clock,
  User,
  Phone,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Users,
  Navigation,
} from "lucide-react";

const TransportUpdates = ({ transportData }) => {
  const [expandedRoute, setExpandedRoute] = useState(null);

  // Color scheme matching student sidebar
  const gradientBg = "bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400";
  const cardGradient = "bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50";

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "On Time":
        return "text-green-600 bg-green-50 border-green-200";
      case "Running Late":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "Cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getAlertIcon = (iconName) => {
    switch (iconName) {
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5" />;
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      case "User":
        return <User className="w-5 h-5" />;
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5" />;
      case "Clock":
        return <Clock className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`${gradientBg} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden`}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Transport Updates</h2>
              <p className="text-white/90 text-sm">
                Real-time bus alerts and route information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Feed - Communication Hub Style */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Recent Alerts
        </h3>
        <div className="space-y-3">
          {transportData.alerts.map((alert) => (
            <div
              key={alert.id}
              className={`${cardGradient} rounded-xl p-4 border-2 ${
                alert.read ? "border-gray-200" : "border-cyan-300"
              } hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`p-3 rounded-xl ${getPriorityColor(
                    alert.priority,
                  )} text-white flex-shrink-0`}
                >
                  {getAlertIcon(alert.icon)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4
                      className={`font-semibold text-gray-800 ${
                        !alert.read ? "font-bold" : ""
                      }`}
                    >
                      {alert.title}
                    </h4>
                    {!alert.read && (
                      <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0 mt-1.5"></span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{alert.message}</p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.timestamp}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full ${getPriorityColor(
                          alert.priority,
                        )} text-white font-semibold`}
                      >
                        {alert.priority}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-cyan-600 flex items-center gap-1">
                      <Bus className="w-3 h-3" />
                      {alert.routeNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routes Information */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-cyan-600" />
          Bus Routes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transportData.routes.map((route) => (
            <div
              key={route.id}
              className={`${cardGradient} rounded-xl p-5 border-2 border-transparent hover:border-cyan-300 transition-all duration-300 cursor-pointer group`}
              onClick={() =>
                setExpandedRoute(expandedRoute === route.id ? null : route.id)
              }
            >
              {/* Route Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Bus className="w-5 h-5 text-cyan-600" />
                    <h4 className="font-bold text-gray-800">
                      {route.routeNumber}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">{route.routeName}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 group-hover:text-cyan-600 transition-all ${
                    expandedRoute === route.id ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Status Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${getStatusColor(
                  route.status,
                )}`}
              >
                {route.status === "On Time" ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <AlertTriangle className="w-3 h-3" />
                )}
                {route.status}
                {route.delay && ` - ${route.delay}`}
              </div>

              {/* Quick Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>{route.totalStops} stops</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>
                    {route.currentOccupancy}/{route.capacity} seats
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  <span>Departs: {route.timing.departure}</span>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedRoute === route.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-fade-in">
                  {/* Areas Covered */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-600 mb-2">
                      Areas Covered
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {route.areas.map((area, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white rounded-lg text-xs text-gray-700 border border-gray-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-600 mb-2">
                      Timings
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-gray-500">Morning</div>
                        <div className="font-semibold text-gray-800">
                          {route.timing.departure} - {route.timing.arrival}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-gray-500">Evening</div>
                        <div className="font-semibold text-gray-800">
                          {route.timing.returnDeparture} -{" "}
                          {route.timing.returnArrival}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Driver Info */}
                  <div>
                    <h5 className="text-xs font-semibold text-gray-600 mb-2">
                      Contact Information
                    </h5>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2 border border-gray-200 flex items-center gap-2">
                        <User className="w-4 h-4 text-cyan-600" />
                        <div className="text-xs">
                          <div className="font-semibold text-gray-800">
                            {route.driver.name}
                          </div>
                          <div className="text-gray-500">Driver</div>
                        </div>
                        <a
                          href={`tel:${route.driver.phone}`}
                          className="ml-auto p-1.5 bg-cyan-100 rounded-lg hover:bg-cyan-200 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="w-3 h-3 text-cyan-600" />
                        </a>
                      </div>
                      <div className="bg-white rounded-lg p-2 border border-gray-200 flex items-center gap-2">
                        <User className="w-4 h-4 text-pink-600" />
                        <div className="text-xs">
                          <div className="font-semibold text-gray-800">
                            {route.conductor.name}
                          </div>
                          <div className="text-gray-500">Conductor</div>
                        </div>
                        <a
                          href={`tel:${route.conductor.phone}`}
                          className="ml-auto p-1.5 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="w-3 h-3 text-pink-600" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Number */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
                    <div className="text-xs text-gray-600 mb-1">
                      Vehicle Number
                    </div>
                    <div className="font-bold text-gray-800 tracking-wider">
                      {route.vehicleNumber}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Safety Guidelines */}
      <div className={`${cardGradient} rounded-xl p-5 border border-cyan-200`}>
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          Safety Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {transportData.safetyGuidelines.map((guideline, index) => (
            <div
              key={index}
              className="text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2"
            >
              {guideline}
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className={`${cardGradient} rounded-xl p-5 border border-red-200`}>
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-red-600" />
          Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {transportData.emergencyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-xl p-4 border border-gray-200"
            >
              <h4 className="font-semibold text-gray-800 mb-2">
                {contact.title}
              </h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-semibold text-gray-700">{contact.name}</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
                <p className="text-xs">Available: {contact.available}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportUpdates;
