import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Briefcase, Zap, BookOpen, Award, ArrowLeft, User } from "lucide-react";
import { PARENT_DATA } from "../../../data/parentData";
import { PortfolioSection } from "../../../components/dashboard/parent/ChildrenOverview/PortfolioComponents";
import AchievementsSection from "../../../components/dashboard/student/Profile/AchievementsSection";
import SkillBadgesSection from "../../../components/dashboard/student/Profile/SkillBadgesSection";

const StudentProfileView = () => {
  const { childId } = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchChild = () => {
      setLoading(true);
      // Find child by ID from local data
      const foundChild = PARENT_DATA.children.find((c) => c.id === childId);

      if (foundChild) {
        setChild(foundChild);
      } else {
        // Handle child not found (redirect or show error)
        console.error(`Child with ID ${childId} not found`);
        // navigate('/dashboard/parent/children'); // Optional: redirect back
      }
      setLoading(false);
    };

    fetchChild();
  }, [childId, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!child) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <User size={64} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-600">Student Not Found</h2>
        <button
          onClick={() => navigate("/dashboard/parent/children")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Overview
        </button>
      </div>
    );
  }

  const portfolioItems = child.portfolio || {};
  const projects = portfolioItems.projects || [];
  const labs = portfolioItems.labs || [];
  const assessments = portfolioItems.assessments || [];
  const cca = portfolioItems.cca || [];

  return (
    <div className="pb-10 animate-fade-in-up">
      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard/parent/children")}
        className="mb-6 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-medium group"
      >
        <div className="p-2 rounded-full bg-white border border-slate-200 group-hover:border-slate-300 shadow-sm">
          <ArrowLeft size={16} />
        </div>
        Back to Dashboard
      </button>

      {/* Header Profile Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 rounded-3xl shadow-lg overflow-hidden mb-8 text-white relative">
        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

        <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={child.photo}
            alt={child.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover border-4 border-white/30 shadow-2xl"
          />
          <div className="text-center md:text-left pt-2">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
              {child.name}
            </h1>
            <p className="text-blue-100 text-lg font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                {child.class}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                ID: {child.id}
              </span>
            </p>
            <div className="flex items-center gap-6 text-sm font-semibold opacity-90">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-blue-200">
                  Attendance
                </span>
                <span className="text-lg">{child.attendance}%</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-blue-200">
                  Growth
                </span>
                <span className="text-lg">{child.academicGrowth}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        {/* Achievements Section */}
        {child.achievements && child.achievements.length > 0 && (
          <AchievementsSection user={child} />
        )}

        {/* Skill Badges Section */}
        {child.earnedSkills && child.earnedSkills.length > 0 && (
          <SkillBadgesSection user={child} />
        )}

        {/* Portfolio Content */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Student Portfolio
            </h2>
            <p className="text-slate-500">
              Comprehensive record of projects, assessments, and activities.
            </p>
          </div>

          {/* Empty State */}
          {projects.length === 0 &&
            labs.length === 0 &&
            assessments.length === 0 &&
            cca.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <BookOpen size={40} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-600 mb-2">
                  No Portfolio Items Yet
                </h3>
                <p className="text-sm">
                  There are no portfolio items recorded for this student yet.
                </p>
              </div>
            )}

          {/* Projects Section */}
          <PortfolioSection
            title="Projects"
            items={projects}
            icon={Briefcase}
            colorClass="bg-blue-500"
            readOnly={true}
          />

          {/* Labs Section */}
          <PortfolioSection
            title="Labs & Experiments"
            items={labs}
            icon={Zap}
            colorClass="bg-cyan-500"
            readOnly={true}
          />

          {/* Assessments Section */}
          <PortfolioSection
            title="Assessments"
            items={assessments}
            icon={BookOpen}
            colorClass="bg-purple-500"
            readOnly={true}
          />

          {/* CCA Section */}
          <PortfolioSection
            title="Co-Curricular & Achievements"
            items={cca}
            icon={Award}
            colorClass="bg-pink-500"
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileView;
