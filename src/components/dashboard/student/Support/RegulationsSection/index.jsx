import React from "react";
import { Shield, Gavel, Lock, Globe, Heart } from "lucide-react";
import RegulationCard from "./RegulationCard";
import { STUDENT_DATA } from "../../../../../data/studentData";

const iconMap = {
  Gavel: Gavel,
  Lock: Lock,
  Globe: Globe,
  Heart: Heart,
  Shield: Shield,
};

const RegulationsSection = () => {
  const regulations = STUDENT_DATA.supportData.regulations.map((reg) => ({
    ...reg,
    icon: iconMap[reg.icon] || Shield, // Fallback icon
  }));

  return (
    <div className="animate-slideDown space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
            <Shield size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Student Rights & Regulations
            </h2>
            <p className="text-slate-500">
              Essential information about legal frameworks and student welfare
              in Singapore.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regulations.map((regulation, idx) => (
            <RegulationCard key={idx} {...regulation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegulationsSection;
