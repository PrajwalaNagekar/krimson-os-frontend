import React from 'react';
import { Heart, AlertCircle, Shield, Phone, Activity, Calendar, Syringe, Info } from 'lucide-react';

/**
 * HealthNotesSection Component
 * 
 * Layout: LI — Profile & Info
 * Data Control: Configurable
 * AI: None
 * Purpose: Display limited health information for student profile
 */
const HealthNotesSection = ({ healthNotes }) => {
  if (!healthNotes) return null;

  const {
    bloodGroup,
    height,
    weight,
    allergies = [],
    chronicConditions = [],
    lastCheckupDate,
    vaccinations = [],
    emergencyContact,
    physicalActivitiesRestrictions,
    note
  } = healthNotes;

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl shadow-md">
          <Heart className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Health Notes
          </h2>
          <p className="text-sm text-slate-500">Limited View</p>
        </div>
      </div>

      {/* LI Layout: List on Left, Info on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: List of Health Metrics (2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Basic Vitals */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-100">
            <h3 className="text-sm font-bold text-slate-600 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-500" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-xs text-slate-500 mb-1">Blood Group</p>
                <p className="text-2xl font-bold text-red-500">{bloodGroup}</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-xs text-slate-500 mb-1">Height</p>
                <p className="text-2xl font-bold text-blue-500">{height}</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-xs text-slate-500 mb-1">Weight</p>
                <p className="text-2xl font-bold text-green-500">{weight}</p>
              </div>
            </div>
          </div>

          {/* Allergies & Conditions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Allergies */}
            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
              <h3 className="text-sm font-bold text-orange-800 mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-orange-500" />
                Allergies
              </h3>
              {allergies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {allergies.map((allergy, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-xs font-semibold"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-orange-600">No known allergies</p>
              )}
            </div>

            {/* Chronic Conditions */}
            <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
              <h3 className="text-sm font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Shield size={16} className="text-purple-500" />
                Chronic Conditions
              </h3>
              {chronicConditions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {chronicConditions.map((condition, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-semibold"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-purple-600">None reported</p>
              )}
            </div>
          </div>

          {/* Vaccinations */}
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <h3 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
              <Syringe size={16} className="text-green-500" />
              Recent Vaccinations
            </h3>
            {vaccinations.length > 0 ? (
              <div className="space-y-2">
                {vaccinations.map((vaccination) => (
                  <div
                    key={vaccination.id}
                    className="flex items-center justify-between p-2 bg-white rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{vaccination.name}</p>
                      <p className="text-xs text-slate-500">{vaccination.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold">
                      {vaccination.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-green-600">No vaccinations recorded</p>
            )}
          </div>

          {/* Physical Activities Restrictions */}
          {physicalActivitiesRestrictions && (
            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <h3 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Activity size={16} className="text-blue-500" />
                Physical Activities Restrictions
              </h3>
              <p className="text-sm text-slate-700">{physicalActivitiesRestrictions}</p>
            </div>
          )}
        </div>

        {/* Right Section: Info Panel (1/3 width on desktop) */}
        <div className="space-y-4">
          {/* Emergency Contact */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-5 border border-red-100">
            <h3 className="text-sm font-bold text-red-800 mb-4 flex items-center gap-2">
              <Phone size={16} className="text-red-500" />
              Emergency Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-red-600 mb-1">Name</p>
                <p className="text-sm font-bold text-slate-800">{emergencyContact.name}</p>
              </div>
              <div>
                <p className="text-xs text-red-600 mb-1">Relationship</p>
                <p className="text-sm font-semibold text-slate-700">{emergencyContact.relationship}</p>
              </div>
              <div>
                <p className="text-xs text-red-600 mb-1">Phone</p>
                <p className="text-sm font-mono font-bold text-red-700">{emergencyContact.phone}</p>
              </div>
            </div>
          </div>

          {/* Last Checkup */}
          {lastCheckupDate && (
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 border border-cyan-100">
              <h3 className="text-sm font-bold text-cyan-800 mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-cyan-500" />
                Last Checkup
              </h3>
              <p className="text-lg font-bold text-slate-800">{new Date(lastCheckupDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</p>
            </div>
          )}

          {/* Privacy Note */}
          {note && (
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <div className="flex items-start gap-2 mb-2">
                <Info size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <h3 className="text-xs font-bold text-slate-600">Privacy Notice</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthNotesSection;
