export const COUNSELOR_DATA = {
  user: {
    name: "Dr. Elena Ray",
    role: "School Counselor",
    id: "CNS-2026-01",
    avatar: "https://i.pravatar.cc/150?img=44"
  },
  behaviorLogs: [ // Screen 1
    { id: "B-101", student: "Rohan Gupta", class: "5-A", category: "Behavioral", type: "Negative", date: "2026-01-07", description: "Disruptive in Math class.", recordedBy: "Teacher A" },
    { id: "B-102", student: "Sarah Lee", class: "6-B", category: "Social", type: "Positive", date: "2026-01-06", description: "Helped peer with injury.", recordedBy: "Sports Coach" },
    { id: "B-103", student: "John Lim", class: "4-C", category: "Emotional", type: "Concern", date: "2026-01-05", description: "Appears withdrawn/anxious.", recordedBy: "Mrs. Tan" }
  ],
  cases: [ // Screen 2
    { id: "CASE-55", student: "Aravind Kumar", issue: "Academic Anxiety", status: "Ongoing", progress: 60, severity: "Medium", lastUpdate: "2 days ago" },
    { id: "CASE-56", student: "Meera Tan", issue: "Peer Conflict", status: "Resolved", progress: 100, severity: "Low", lastUpdate: "1 week ago" },
    { id: "CASE-57", student: "Rahul V", issue: "Attendance/Truancy", status: "Initial", progress: 10, severity: "High", lastUpdate: "Yesterday" }
  ],
  wellbeing: { // Screen 3
    avgMoodIndex: 7.2, // out of 10
    highRiskStudents: 3,
    attendanceCorrelation: [ // Mock data for chart
      { day: "Mon", attendance: 95, mood: 8 },
      { day: "Tue", attendance: 92, mood: 7 },
      { day: "Wed", attendance: 88, mood: 5 }, // Dip
      { day: "Thu", attendance: 94, mood: 7 },
      { day: "Fri", attendance: 96, mood: 9 }
    ]
  },
  collaboration: [ // Screen 4
    { id: 1, type: "Meeting", with: "Parent of Rohan Gupta", date: "2026-01-08", time: "10:00 AM", status: "Scheduled" },
    { id: 2, type: "Feedback", with: "Class Teacher (5-A)", content: "Discussion regarding seating arrangement.", date: "2026-01-06", status: "Completed" }
  ]
};
