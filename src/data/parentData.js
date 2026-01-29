export const PARENT_DATA = {
  user: {
    name: "Administrator", // Matching the screenshot name
    role: "Parent",
    id: "P-2025-001",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  children: [
    {
      id: "S-101",
      name: "Aravind Kumar",
      class: "Grade 5-A",
      photo: "https://i.pravatar.cc/150?img=12",
      attendance: 92, // Screen 1 & 3
      academicGrowth: 78, // Screen 6
    },
    {
      id: "S-102",
      name: "Meera Kumar",
      class: "Grade 3-B",
      photo: "https://i.pravatar.cc/150?img=5",
      attendance: 98,
      academicGrowth: 85,
    }
  ],
  connectedApps: [ // Matching the screenshot "Connected Applications"
    { name: "Skolaro", icon: "S", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Extramarks", icon: "E", color: "text-orange-500", bg: "bg-orange-50" },
    { name: "GPT Tutor", icon: "G", color: "text-green-500", bg: "bg-green-50" },
    { name: "Wordsworth", icon: "W", color: "text-red-500", bg: "bg-red-50" },
    { name: "Xperimentor", icon: "X", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Moodle", icon: "M", color: "text-yellow-500", bg: "bg-yellow-50" },
  ],
  widgets: {
    fees: {
      status: "Due",
      amount: "SGD 450",
      dueDate: "2026-01-15",
      lastPaid: "2025-12-01"
    },
    exams: [
      { subject: "Mathematics", date: "2026-01-10", type: "Unit Test" },
      { subject: "Science", date: "2026-01-12", type: "Lab Exam" }
    ],
    remarks: [
      { date: "Yesterday", teacher: "Mrs. Tan", text: "Excellent participation in the EVS Matter workshop." }, // Ref BRD [cite: 434]
      { date: "2 days ago", teacher: "Mr. Lee", text: "Needs to bring geometry kit tomorrow." }
    ]
  }
};
