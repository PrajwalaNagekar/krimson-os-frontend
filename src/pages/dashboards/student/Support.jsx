import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  HeroHeader,
  NavigationTabs,
  FAQsSection,
  RequestHelpSection,
  WellbeingSection,
  RegulationsSection,
} from "../../../components/dashboard/student/Support";

const Support = () => {
  const [activeTab, setActiveTab] = useState("FAQs");
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "Academic",
    description: "",
    priority: "Medium",
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const { supportFaqs, supportData } = STUDENT_DATA;

  // Handle supportFaqs - it could be an array or object
  const faqs = Array.isArray(supportFaqs)
    ? supportFaqs
    : supportFaqs?.faqs || [];

  const wellnessArticles = supportData?.wellnessArticles || [];

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketForm({
        subject: "",
        category: "Academic",
        description: "",
        priority: "Medium",
      });
    }, 3000);
  };

  return (
    <div className="space-y-8 pb-10 max-w-6xl mx-auto animate-fade-in-up">
      <HeroHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Sections */}
      {activeTab === "FAQs" && (
        <FAQsSection faqs={faqs} searchQuery={searchQuery} />
      )}

      {activeTab === "Request Help" && (
        <RequestHelpSection
          ticketForm={ticketForm}
          onFormChange={setTicketForm}
          onSubmit={handleTicketSubmit}
          submitted={ticketSubmitted}
        />
      )}

      {activeTab === "Connect with Wellbeing" && (
        <WellbeingSection wellnessArticles={wellnessArticles} />
      )}

      {activeTab === "Govt & Regulations" && <RegulationsSection />}
    </div>
  );
};

export default Support;
