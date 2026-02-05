import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Award,
  Heart,
  BookOpen,
  Sparkles,
  ChevronRight,
  Search,
  Filter as FilterIcon,
} from "lucide-react";

/**
 * Community Service Section
 * Displays Service Opportunities (LB - List to Detail) and Service Reflection (LD - Content Studio with AI Coach)
 */
const CommunityServiceSection = ({ communityService }) => {
  const [activeTab, setActiveTab] = useState("opportunities"); // 'opportunities' | 'reflections'
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedReflection, setSelectedReflection] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { opportunities, reflections } = communityService;

  // Filter opportunities
  const filteredOpportunities = opportunities.availableOpportunities.filter(
    (opp) => {
      const matchesCategory =
        filterCategory === "All" || opp.category === filterCategory;
      const matchesSearch =
        searchTerm === "" ||
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    },
  );

  // Status badge colors
  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700";
      case "full":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Category colors
  const getCategoryColor = (category) => {
    const colors = {
      Environmental: "bg-green-100 text-green-700",
      Education: "bg-blue-100 text-blue-700",
      Health: "bg-red-100 text-red-700",
      "Animal Welfare": "bg-purple-100 text-purple-700",
      "Community Development": "bg-orange-100 text-orange-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Heart className="text-rose-500" size={32} />
            Community Service
          </h2>
          <p className="text-slate-600 mt-1">
            Make a difference through service learning and reflection
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-2xl">
            <div className="text-2xl font-bold text-rose-600">
              {opportunities.overview.hoursCompleted}
            </div>
            <div className="text-xs text-slate-600">Hours Completed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
            <div className="text-2xl font-bold text-purple-600">
              {opportunities.overview.hoursRequired}
            </div>
            <div className="text-xs text-slate-600">Required Hours</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl">
            <div className="text-2xl font-bold text-blue-600">
              {reflections.entries.length}
            </div>
            <div className="text-xs text-slate-600">Reflections</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-slate-700">
            Service Hours Progress
          </span>
          <span className="text-sm font-bold text-rose-600">
            {Math.round(
              (opportunities.overview.hoursCompleted /
                opportunities.overview.hoursRequired) *
                100,
            )}
            %
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 h-full rounded-full transition-all duration-500"
            style={{
              width: `${(opportunities.overview.hoursCompleted / opportunities.overview.hoursRequired) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          {opportunities.overview.hoursRequired -
            opportunities.overview.hoursCompleted}{" "}
          hours remaining to complete requirement
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-3 border-b border-slate-200">
        <button
          onClick={() => {
            setActiveTab("opportunities");
            setSelectedOpportunity(null);
            setSelectedReflection(null);
          }}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === "opportunities"
              ? "text-rose-600 border-b-2 border-rose-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Service Opportunities
        </button>
        <button
          onClick={() => {
            setActiveTab("reflections");
            setSelectedOpportunity(null);
            setSelectedReflection(null);
          }}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === "reflections"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Service Reflection
        </button>
      </div>

      {/* Service Opportunities Tab */}
      {activeTab === "opportunities" && (
        <div className="grid md:grid-cols-12 gap-6">
          {/* List View */}
          <div
            className={`${selectedOpportunity ? "md:col-span-5" : "md:col-span-12"} space-y-4`}
          >
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="All">All Categories</option>
                {opportunities.categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Opportunities List */}
            <div className="space-y-3">
              {filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  onClick={() => setSelectedOpportunity(opp)}
                  className={`bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer ${
                    selectedOpportunity?.id === opp.id
                      ? "ring-2 ring-rose-400"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800 text-lg flex-1">
                      {opp.title}
                    </h3>
                    {opp.featured && (
                      <Award className="text-yellow-500" size={20} />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    {opp.organization}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(opp.category)}`}
                    >
                      {opp.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusColor(opp.status)}`}
                    >
                      {opp.status === "available" ? "Available" : "Full"}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      {opp.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{opp.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{opp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>
                        {opp.volunteersEnrolled}/{opp.volunteersNeeded}
                      </span>
                    </div>
                  </div>
                  {selectedOpportunity?.id === opp.id && (
                    <div className="mt-3 flex items-center gap-2 text-rose-600 text-sm font-semibold">
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Detail View */}
          {selectedOpportunity && (
            <div className="md:col-span-7 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-800">
                  {selectedOpportunity.title}
                </h2>
                {selectedOpportunity.featured && (
                  <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    <Award size={16} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">
                    Organization
                  </h3>
                  <p className="text-slate-800">
                    {selectedOpportunity.organization}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">
                    Description
                  </h3>
                  <p className="text-slate-700">
                    {selectedOpportunity.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-1">
                      Location
                    </h3>
                    <p className="text-slate-800 flex items-center gap-2">
                      <MapPin size={16} />
                      {selectedOpportunity.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-1">
                      Date
                    </h3>
                    <p className="text-slate-800 flex items-center gap-2">
                      <Calendar size={16} />
                      {selectedOpportunity.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-1">
                      Duration
                    </h3>
                    <p className="text-slate-800 flex items-center gap-2">
                      <Clock size={16} />
                      {selectedOpportunity.duration}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-1">
                      Credit Hours
                    </h3>
                    <p className="text-slate-800 flex items-center gap-2">
                      <Award size={16} />
                      {selectedOpportunity.creditHours} hours
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-2">
                    Skills Required
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedOpportunity.skillsRequired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">
                    Volunteers
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-rose-400 to-purple-400 h-full"
                        style={{
                          width: `${(selectedOpportunity.volunteersEnrolled / selectedOpportunity.volunteersNeeded) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-slate-700">
                      {selectedOpportunity.volunteersEnrolled} /{" "}
                      {selectedOpportunity.volunteersNeeded}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-1">
                    Coordinator
                  </h3>
                  <p className="text-slate-800">
                    {selectedOpportunity.coordinator}
                  </p>
                  <p className="text-sm text-slate-600">
                    {selectedOpportunity.contactEmail}
                  </p>
                </div>

                <button
                  disabled={selectedOpportunity.status === "full"}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    selectedOpportunity.status === "available"
                      ? "bg-gradient-to-r from-rose-500 to-purple-500 text-white hover:shadow-lg"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  {selectedOpportunity.status === "available"
                    ? "Enroll Now"
                    : "Enrollment Full"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Service Reflection Tab */}
      {activeTab === "reflections" && (
        <div className="grid md:grid-cols-12 gap-6">
          {/* Reflections List */}
          <div
            className={`${selectedReflection ? "md:col-span-4" : "md:col-span-12"} space-y-4`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Your Reflections
              </h3>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all">
                + New Reflection
              </button>
            </div>

            {reflections.entries.map((reflection) => (
              <div
                key={reflection.id}
                onClick={() => setSelectedReflection(reflection)}
                className={`bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer ${
                  selectedReflection?.id === reflection.id
                    ? "ring-2 ring-purple-400"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-slate-800 flex-1">
                    {reflection.reflectionTitle}
                  </h4>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-100 to-orange-100 px-2 py-1 rounded-full">
                    <Sparkles className="text-orange-500" size={14} />
                    <span className="text-xs font-semibold text-orange-700">
                      {reflection.aiCoachFeedback.score}/10
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  {reflection.serviceActivity}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{reflection.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{reflection.hoursServed} hours</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Draft Reflections */}
            {reflections.draftReflections.length > 0 && (
              <>
                <h3 className="text-sm font-semibold text-slate-500 mt-6 mb-2">
                  Drafts
                </h3>
                {reflections.draftReflections.map((draft) => (
                  <div
                    key={draft.id}
                    className="bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-300"
                  >
                    <h4 className="font-semibold text-slate-700">
                      {draft.serviceActivity}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {draft.date} • {draft.hoursServed} hours
                    </p>
                    <button className="mt-2 text-sm text-purple-600 font-semibold">
                      Continue Writing →
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Reflection Detail */}
          {selectedReflection && (
            <div className="md:col-span-8 space-y-6">
              {/* Reflection Content */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {selectedReflection.reflectionTitle}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 mb-1">
                      Activity
                    </h4>
                    <p className="text-sm text-slate-800">
                      {selectedReflection.serviceActivity}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 mb-1">
                      Date
                    </h4>
                    <p className="text-sm text-slate-800">
                      {selectedReflection.date}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 mb-1">
                      Hours Served
                    </h4>
                    <p className="text-sm text-slate-800">
                      {selectedReflection.hoursServed} hours
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 mb-1">
                      Location
                    </h4>
                    <p className="text-sm text-slate-800">
                      {selectedReflection.location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Reflection
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedReflection.reflectionContent}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Learning Outcomes
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedReflection.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="text-slate-700 text-sm">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedReflection.skillsDeveloped.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">
                      Challenges Faced
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">
                      Future Goals
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.futureGoals}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Coach Feedback */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6 rounded-2xl shadow-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      AI Coach Feedback
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">
                        Reflection Score:
                      </span>
                      <span className="text-lg font-bold text-orange-600">
                        {selectedReflection.aiCoachFeedback.score}/10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-1 flex items-center gap-2">
                      <BookOpen size={16} />
                      Strengths
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.aiCoachFeedback.strengths}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-700 mb-1 flex items-center gap-2">
                      <Sparkles size={16} />
                      Suggestions
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.aiCoachFeedback.suggestions}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-700 mb-1 flex items-center gap-2">
                      <ChevronRight size={16} />
                      Next Steps
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.aiCoachFeedback.nextSteps}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-rose-700 mb-1 flex items-center gap-2">
                      <Heart size={16} />
                      Emotional Intelligence
                    </h4>
                    <p className="text-sm text-slate-700">
                      {selectedReflection.aiCoachFeedback.emotionalIntelligence}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunityServiceSection;
