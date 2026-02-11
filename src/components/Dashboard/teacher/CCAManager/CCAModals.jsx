import React, { createElement } from "react";
import {
  X,
  CheckCircle2,
  UploadCloud,
  Sparkles,
  Calendar,
  Zap,
  Heart,
  Star,
  Trophy,
  Globe,
  Music,
} from "lucide-react";

const CCAModals = ({
  activeModal,
  closeModal,
  selectedBadgeForAssignment,
  assignmentData,
  setAssignmentData,
  attendanceLog,
  studentClubs,
  handleAssignBadge,
  clubs,
  newSession,
  setNewSession,
  handleAddSession,
  newBadge,
  setNewBadge,
}) => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Zap":
        return Zap;
      case "Heart":
        return Heart;
      case "Star":
        return Star;
      case "Trophy":
        return Trophy;
      case "Globe":
        return Globe;
      case "Music":
        return Music;
      default:
        return Star;
    }
  };

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`bg-white rounded-[2rem] p-8 w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-8 duration-300 relative ${activeModal === "createSession" || activeModal === "createBadge" || activeModal === "assignBadge" ? "max-w-4xl" : "max-w-2xl"}`}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* ASSIGN BADGE MODAL */}
        {activeModal === "assignBadge" && selectedBadgeForAssignment && (
          <div className="space-y-8">
            <div className="text-center">
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-${selectedBadgeForAssignment.color}-100 text-${selectedBadgeForAssignment.color}-600 flex items-center justify-center mb-4 shadow-inner`}
              >
                {createElement(
                  getIconComponent(selectedBadgeForAssignment.icon),
                  { size: 48 },
                )}
              </div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Assign Badge
              </h2>
              <p className="font-bold text-indigo-500">
                {selectedBadgeForAssignment.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Select Student
                  </label>
                  <select
                    value={assignmentData.student}
                    onChange={(e) =>
                      setAssignmentData({
                        ...assignmentData,
                        student: e.target.value,
                      })
                    }
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                  >
                    {Object.keys(attendanceLog).map((student) => (
                      <option key={student} value={student}>
                        {student}{" "}
                        {studentClubs[student]
                          ? `• ${studentClubs[student]}`
                          : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Award Date
                  </label>
                  <input
                    type="date"
                    value={assignmentData.date}
                    onChange={(e) =>
                      setAssignmentData({
                        ...assignmentData,
                        date: e.target.value,
                      })
                    }
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col justify-center">
                <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                  <Sparkles size={18} /> Assignment Context
                </h4>
                <p className="text-sm text-indigo-700/80 mb-4 leading-relaxed">
                  This badge will be added to the student's permanent record.
                  Ensure they have met the following criteria:
                </p>
                <div className="bg-white p-4 rounded-xl border border-indigo-100 text-xs font-medium text-slate-500 italic">
                  "{selectedBadgeForAssignment.criteria}"
                </div>
              </div>
            </div>

            <button
              onClick={handleAssignBadge}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={20} /> Confirm Assignment
            </button>
          </div>
        )}

        {/* CREATE CLUB MODAL - UPDATED WITH BANNER UPLOAD */}
        {activeModal === "createClub" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Create New Club
            </h2>

            {/* Banner Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Club Banner
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-300 group-hover:text-indigo-500 mb-2">
                  <UploadCloud size={24} />
                </div>
                <p className="text-sm font-bold text-slate-600 group-hover:text-indigo-700">
                  Click to upload banner
                </p>
                <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Club Name
              </label>
              <input
                type="text"
                placeholder="e.g. Photography Club"
                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Development Pillar
                </label>
                <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400">
                  <option>Innovation</option>
                  <option>Leadership</option>
                  <option>Service</option>
                  <option>Arts</option>
                  <option>Sports</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Capacity
                </label>
                <input
                  type="number"
                  placeholder="30"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                />
              </div>
            </div>
            <button
              onClick={closeModal}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all"
            >
              Create Club
            </button>
          </div>
        )}

        {/* CREATE SESSION MODAL */}
        {activeModal === "createSession" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12 mb-2">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Plan CCA Session
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center text-center">
                <Calendar size={40} className="text-indigo-400 mb-2" />
                <p className="font-bold text-indigo-900">Select Date</p>
                <input
                  type="date"
                  value={newSession.date}
                  onChange={(e) =>
                    setNewSession({ ...newSession, date: e.target.value })
                  }
                  className="mt-2 bg-white border border-indigo-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="time"
                  value={newSession.time}
                  onChange={(e) =>
                    setNewSession({ ...newSession, time: e.target.value })
                  }
                  className="mt-2 bg-white border border-indigo-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Target Club
                  </label>
                  <select
                    value={newSession.club}
                    onChange={(e) =>
                      setNewSession({ ...newSession, club: e.target.value })
                    }
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-700 focus:outline-none focus:border-indigo-400"
                  >
                    {clubs.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Science Lab 1"
                    value={newSession.location}
                    onChange={(e) =>
                      setNewSession({ ...newSession, location: e.target.value })
                    }
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-sm text-slate-700 focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Session Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Intro to Robotics"
                  value={newSession.title}
                  onChange={(e) =>
                    setNewSession({ ...newSession, title: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-white border border-slate-200 font-bold text-slate-800 focus:outline-none focus:border-indigo-500 text-lg placeholder:text-slate-300"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-700">Activities</h4>
                  <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:bg-indigo-50 px-2 py-1 rounded">
                    <Sparkles size={12} /> AI Suggest
                  </button>
                </div>
                <textarea
                  rows="3"
                  value={newSession.details}
                  onChange={(e) =>
                    setNewSession({ ...newSession, details: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 focus:outline-none focus:border-indigo-400 resize-none"
                  placeholder="Describe activities..."
                ></textarea>
              </div>
              <button
                onClick={handleAddSession}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-indigo-700 shadow-lg transition-all"
              >
                Save & Publish
              </button>
            </div>
          </div>
        )}

        {/* CREATE BADGE MODAL */}
        {activeModal === "createBadge" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2 mb-2">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Badge Builder
              </h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Badge Name
                </label>
                <input
                  type="text"
                  value={newBadge.name}
                  onChange={(e) =>
                    setNewBadge({ ...newBadge, name: e.target.value })
                  }
                  placeholder="e.g. Master Orator"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Select Icon
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {["Zap", "Heart", "Star", "Trophy", "Globe", "Music"].map(
                    (icon) => {
                      const IconComp = getIconComponent(icon);
                      return (
                        <button
                          key={icon}
                          onClick={() => setNewBadge({ ...newBadge, icon })}
                          className={`p-3 rounded-xl border-2 transition-all ${newBadge.icon === icon ? "border-indigo-500 bg-indigo-50 text-indigo-600 scale-105" : "border-slate-100 text-slate-400 hover:border-indigo-200"}`}
                        >
                          <IconComp size={20} />
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Criteria
                </label>
                <textarea
                  rows="3"
                  value={newBadge.criteria}
                  onChange={(e) =>
                    setNewBadge({ ...newBadge, criteria: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700 focus:outline-none focus:border-indigo-400 resize-none"
                  placeholder="e.g. Participate in 5 debates..."
                ></textarea>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col items-center justify-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                Live Preview
              </p>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl w-64 text-center border border-slate-100 transform hover:scale-105 transition-transform duration-500">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-${newBadge.color}-100 text-${newBadge.color}-600 flex items-center justify-center mb-4 shadow-inner ring-4 ring-white`}
                >
                  {createElement(getIconComponent(newBadge.icon), { size: 40 })}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">
                  {newBadge.name || "Badge Name"}
                </h3>
                <p className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-3">
                  {newBadge.skill || "Skill"}
                </p>
                <div className="h-1 w-8 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {newBadge.criteria ||
                    "Criteria description will appear here..."}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 shadow-lg"
              >
                Create Badge
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CCAModals;
