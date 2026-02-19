import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import RosterHeader from "../../../components/dashboard/teacher/RosterAndGroups/RosterHeader";
import RosterStats from "../../../components/dashboard/teacher/RosterAndGroups/RosterStats";
import RosterTabs from "../../../components/dashboard/teacher/RosterAndGroups/RosterTabs";
import RosterList from "../../../components/dashboard/teacher/RosterAndGroups/RosterList";
import LearningGroups from "../../../components/dashboard/teacher/RosterAndGroups/LearningGroups";
import CommunicationHub from "../../../components/dashboard/teacher/RosterAndGroups/CommunicationHub";
import StudentGroupSelector from "../../../components/dashboard/teacher/RosterAndGroups/StudentGroupSelector";
import AIStrategicAnalysis from "../../../components/dashboard/teacher/RosterAndGroups/AIStrategicAnalysis";

const RosterAndGroups = () => {
  // --- State Management ---
  // Initialize state from TEACHER_DATA if available, else default to empty/static
  const data = TEACHER_DATA.rosterAndGroups || {
    students: [],
    groups: [],
    chatMessages: [],
    statsConfig: [],
    tabsConfig: [],
    listConfig: {},
    chatConfig: {},
    groupClusterConfig: {},
  };

  const [students, setStudents] = useState(data.students);
  const [groups, setGroups] = useState(data.groups);
  const [messages, setMessages] = useState(data.chatMessages);

  const [activeTab, setActiveTab] = useState("roster"); // 'roster', 'groups', 'messages'
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    roll: "",
    competency: "Proficient",
    pace: "Moderate",
  });

  // Chat Specific State
  const [activeChat, setActiveChat] = useState(null);
  const [chatMessage, setChatMessage] = useState("");

  const [selectorGroupId, setSelectorGroupId] = useState(null); // Used to trigger adding students to a specific group
  const [studentToGroup, setStudentToGroup] = useState(null);

  // --- Actions ---
  const createNewGroup = () => {
    // This is for the header button - generally creates a placeholder
    // Or we could trigger the modal in LearningGroups if we lifted state
    const newGroup = {
      id: Date.now(),
      name: `New Group ${groups.length + 1}`,
      members: [],
      type: "Mixed Ability",
      description: "Newly created group",
    };
    setGroups([newGroup, ...groups]);
    setActiveTab("groups");
  };

  const deleteGroup = (id) => setGroups(groups.filter((g) => g.id !== id));

  const toggleStudentInGroup = (groupId, studentId) => {
    setGroups((prev) =>
      prev.map((group) => {
        if (group.id === groupId) {
          const isMember = group.members.some((m) => m.id === studentId);
          if (isMember)
            return {
              ...group,
              members: group.members.filter((m) => m.id !== studentId),
            };
          const student = students.find((s) => s.id === studentId);
          return { ...group, members: [...group.members, student] };
        }
        return group;
      }),
    );
  };

  const handleAddStudent = (e) => {
    // This function was present in original code but not fully integrated with a UI form
    if (e) e.preventDefault();
    const id = students.length + 1;
    setStudents([
      ...students,
      {
        ...newStudent,
        id,
        mastery: 0,
        attendance: "100%",
        phone: "Not Assigned",
        status: "Online",
      },
    ]);
    setNewStudent({
      name: "",
      email: "",
      roll: "",
      competency: "Proficient",
      pace: "Moderate",
    });
    setShowAddStudentModal(false);
  };

  const initiateChat = (target) => {
    setActiveChat(target);
    setActiveTab("messages");
    setSelectedStudent(null);
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;
    const newMsg = {
      id: Date.now(),
      senderId: "me",
      text: chatMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
      sender: "You",
    };
    setMessages([...messages, newMsg]);
    setChatMessage("");
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const conversations = groups.filter((g) =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // --- Stats calculation ---
  const totalMastery = students.reduce((acc, curr) => acc + curr.mastery, 0);
  const avgMastery =
    students.length > 0 ? Math.round(totalMastery / students.length) : 0;

  // Use config from data but merge with dynamic values
  const stats = (data.statsConfig || []).map((stat) => {
    let dynamicValue = stat.value;
    if (stat.id === "mastery") dynamicValue = `${avgMastery}%`;
    if (stat.id === "clusters") dynamicValue = groups.length;
    // Attendance and Messages are static in data for now, or could be calculated if data existed

    return { ...stat, value: dynamicValue };
  });

  return (
    <div className="space-y-6 md:space-y-8 min-h-screen bg-[#F8FAFC] pb-12 font-sans">
      <RosterHeader
        studentsCount={students.length}
        groupsCount={groups.length}
        setShowAddStudentModal={setShowAddStudentModal}
        createNewGroup={createNewGroup}
      />

      <RosterStats stats={stats} />

      <RosterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabsConfig={data.tabsConfig}
      />

      {/* Content Transition Wrapper */}
      <div className="animate-fadeIn mt-8">
        {activeTab === "roster" && (
          <RosterList
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredStudents={filteredStudents}
            setSelectedStudent={setSelectedStudent}
            setStudentToGroup={setStudentToGroup}
            initiateChat={initiateChat}
            config={data.listConfig}
          />
        )}

        {activeTab === "groups" && (
          <LearningGroups
            groups={groups}
            setGroups={setGroups}
            students={students}
            createNewGroup={createNewGroup}
            deleteGroup={deleteGroup}
          />
        )}

        {activeTab === "messages" && (
          <CommunicationHub
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            messages={messages}
            setMessages={setMessages}
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}
            sendMessage={sendMessage}
            conversations={conversations}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            config={data.chatConfig}
          />
        )}
      </div>

      <StudentGroupSelector
        studentToGroup={studentToGroup}
        setStudentToGroup={setStudentToGroup}
        groups={groups}
        toggleStudentInGroup={toggleStudentInGroup}
      />

      <AIStrategicAnalysis
        showAIModal={showAIModal}
        setShowAIModal={setShowAIModal}
      />

      <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 20px; border: 2px solid transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
                
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes scaleIn {
                  from { opacity: 0; transform: scale(0.9) translateY(30px); }
                  to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-scaleIn { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .anim-float { animation: float 6s ease-in-out infinite; }
            `}</style>
    </div>
  );
};

export default RosterAndGroups;
