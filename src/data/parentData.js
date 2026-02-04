export const PARENT_DATA = {
  user: {
    name: "Administrator", // Matching the screenshot name
    role: "Parent",
    id: "P-2025-001",
    avatar: "https://i.pravatar.cc/150?img=32",
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
    },
  ],
  connectedApps: [
    // Matching the screenshot "Connected Applications"
    { name: "Skolaro", icon: "S", color: "text-blue-500", bg: "bg-blue-50" },
    {
      name: "Extramarks",
      icon: "E",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      name: "GPT Tutor",
      icon: "G",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    { name: "Wordsworth", icon: "W", color: "text-red-500", bg: "bg-red-50" },
    {
      name: "Xperimentor",
      icon: "X",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    { name: "Moodle", icon: "M", color: "text-yellow-500", bg: "bg-yellow-50" },
  ],
  widgets: {
    fees: {
      status: "Due",
      amount: "SGD 450",
      dueDate: "2026-01-15",
      lastPaid: "2025-12-01",
    },
    exams: [
      { subject: "Mathematics", date: "2026-01-10", type: "Unit Test" },
      { subject: "Science", date: "2026-01-12", type: "Lab Exam" },
    ],
    remarks: [
      {
        date: "Yesterday",
        teacher: "Mrs. Tan",
        text: "Excellent participation in the EVS Matter workshop.",
      }, // Ref BRD [cite: 434]
      {
        date: "2 days ago",
        teacher: "Mr. Lee",
        text: "Needs to bring geometry kit tomorrow.",
      },
    ],
    assignments: [
      {
        subject: "Mathematics",
        title: "Chapter 5 Homework",
        due: "2026-01-22",
        priority: "High",
      },
      {
        subject: "Science",
        title: "Lab Report - Photosynthesis",
        due: "2026-01-24",
        priority: "Medium",
      },
      {
        subject: "English",
        title: "Essay: Environmental Care",
        due: "2026-01-25",
        priority: "Medium",
      },
    ],
    todaySchedule: [
      {
        subject: "Mathematics",
        time: "08:00 AM - 09:00 AM",
        status: "Present",
        teacher: "Mr. Sharma",
      },
      {
        subject: "Science",
        time: "09:15 AM - 10:15 AM",
        status: "Present",
        teacher: "Mrs. Veritas",
      },
      {
        subject: "English",
        time: "10:30 AM - 11:30 AM",
        status: "Late",
        teacher: "Ms. Li",
      },
      {
        subject: "History",
        time: "12:00 PM - 01:00 PM",
        status: "Upcoming",
        teacher: "Mr. Tan",
      },
    ],
    upcomingActions: [
      {
        id: 1,
        type: "Fee",
        title: "Term 2 School Fees",
        date: "2026-03-15",
        amount: "SGD 450",
        status: "Due Soon",
        actionLabel: "Pay Now",
      },
      {
        id: 2,
        type: "PTM",
        title: "Parent-Teacher Meeting",
        date: "2026-02-10 • 10:30 AM",
        status: "Scheduled",
        actionLabel: "Reschedule",
      },
      {
        id: 3,
        type: "Consent",
        title: "Science Center Field Trip",
        date: "Deadline: 2026-02-08",
        status: "Pending",
        actionLabel: "Sign Consent",
      },
    ],
  },
  attendanceRecord: {
    currentMonth: "January 2026",
    totalDays: 22,
    present: 19,
    absent: 3,
    holidays: 8,
    percentage: 86.4,
    classAverage: 92.5,
    term: {
      totalDays: 110,
      present: 95,
      percentage: 86.4,
    },
    absenceReasons: [
      {
        date: "2026-01-08",
        reason: "Sick Leave - Medical certificate verified by nurse",
        submittedBy: "Class Teacher",
      },
      {
        date: "2026-01-15",
        reason: "Medical appointment - Early dismissal approved",
        submittedBy: "Class Teacher",
      },
      {
        date: "2026-01-22",
        reason: "Family emergency - Parent informed administration",
        submittedBy: "Class Teacher",
      },
    ],
    monthlyTrend: [
      { month: "Sep", percentage: 95.2, classAvg: 93.8 },
      { month: "Oct", percentage: 92.1, classAvg: 92.5 },
      { month: "Nov", percentage: 88.5, classAvg: 91.2 },
      { month: "Dec", percentage: 84.3, classAvg: 90.8 },
      { month: "Jan", percentage: 86.4, classAvg: 92.5 },
    ],
    calendar: [
      // Week 1
      { day: null, status: null },
      { day: null, status: null },
      { day: 1, status: "present" },
      { day: 2, status: "present" },
      { day: 3, status: "present" },
      { day: 4, status: "weekend" },
      { day: 5, status: "weekend" },
      // Week 2
      { day: 6, status: "present" },
      { day: 7, status: "present" },
      { day: 8, status: "absent" },
      { day: 9, status: "present" },
      { day: 10, status: "present" },
      { day: 11, status: "weekend" },
      { day: 12, status: "weekend" },
      // Week 3
      { day: 13, status: "present" },
      { day: 14, status: "present" },
      { day: 15, status: "absent" },
      { day: 16, status: "present" },
      { day: 17, status: "present" },
      { day: 18, status: "weekend" },
      { day: 19, status: "weekend" },
      // Week 4
      { day: 20, status: "present" },
      { day: 21, status: "present" },
      { day: 22, status: "absent" },
      { day: 23, status: "present" },
      { day: 24, status: "present" },
      { day: 25, status: "weekend" },
      { day: 26, status: "weekend" },
      // Week 5
      { day: 27, status: "holiday" },
      { day: 28, status: "present" },
      { day: 29, status: "present" },
      { day: 30, status: "present" },
      { day: 31, status: "present" },
      { day: null, status: null },
      { day: null, status: null },
    ],
  },
};
