import React, { useState } from "react";
import Header from "../../../components/dashboard/teacher/AcademicDecision/Header";
import PromotionTab from "../../../components/dashboard/teacher/AcademicDecision/PromotionTab";
import AwardsTab from "../../../components/dashboard/teacher/AcademicDecision/AwardsTab";
import CertificatesTab from "../../../components/dashboard/teacher/AcademicDecision/CertificatesTab";
import { TEACHER_DATA } from "../../../data/teacherData";

const AcademicDecision = () => {
  const [activeTab, setActiveTab] = useState("promotion"); // promotion, awards, certificates
  // status state was unused in original code except for defined, keeping it for now if needed or can be removed
  // const [status, setStatus] = useState('Draft');

  const data = TEACHER_DATA.academicDecision;

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-12">
      {/* HEADER SECTION */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} data={data} />

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto">
        {activeTab === "promotion" && <PromotionTab data={data} />}

        {activeTab === "awards" && <AwardsTab data={data} />}

        {activeTab === "certificates" && <CertificatesTab data={data} />}
      </div>
    </div>
  );
};

export default AcademicDecision;
