export const behaviorStats = {
  positivePoints: 24,
  negativePoints: 3,
  positiveChange: +12, // % change from last period
  negativeChange: -25, // % change from last period
  overallRating: "Excellent",
  trend: "improving",
};

export const monthlyBehaviorData = [
  { month: "Sep", positive: 18, negative: 5 },
  { month: "Oct", positive: 22, negative: 4 },
  { month: "Nov", positive: 20, negative: 2 },
  { month: "Dec", positive: 24, negative: 3 },
];

export const teacherFeedback = [
  {
    id: 1,
    teacher: "Mrs. Sarah Tan",
    subject: "Class Teacher",
    date: "2026-01-18",
    type: "positive",
    category: "Leadership",
    feedback:
      "Aravind demonstrated excellent leadership during the group science project. He ensured everyone participated and helped struggling teammates understand the concepts.",
    tags: ["Leadership", "Teamwork", "Academic Excellence"],
  },
  {
    id: 2,
    teacher: "Mr. David Lee",
    subject: "Mathematics",
    date: "2026-01-15",
    type: "constructive",
    category: "Punctuality",
    feedback:
      "Need to improve homework submission timeliness. Last two assignments were submitted late. Please ensure deadlines are met.",
    tags: ["Time Management", "Responsibility"],
  },
  {
    id: 3,
    teacher: "Ms. Jennifer Wong",
    subject: "English",
    date: "2026-01-12",
    type: "positive",
    category: "Participation",
    feedback:
      "Outstanding participation in class discussions. Aravind asks thoughtful questions and helps create an engaging learning environment.",
    tags: ["Communication", "Engagement"],
  },
];

export const peerCollaboration = [
  {
    id: 1,
    activity: "Science Fair Project - Solar System Model",
    date: "2026-01-10",
    role: "Team Leader",
    teamSize: 4,
    rating: "Excellent",
    insights:
      "Led team effectively, delegated tasks well, ensured quality output. Team members praised his organizational skills.",
    skills: ["Leadership", "Coordination", "Creativity"],
  },
  {
    id: 2,
    activity: "Math Olympics - Team Competition",
    date: "2025-12-15",
    role: "Problem Solver",
    teamSize: 5,
    rating: "Very Good",
    insights:
      "Contributed significantly to problem-solving. Helped peers understand complex concepts during practice sessions.",
    skills: ["Analytical Thinking", "Mentoring", "Patience"],
  },
  {
    id: 3,
    activity: "Cultural Week - Dance Performance",
    date: "2025-11-20",
    role: "Participant",
    teamSize: 8,
    rating: "Good",
    insights:
      "Showed enthusiasm and commitment. Attended all rehearsals and supported team members.",
    skills: ["Teamwork", "Dedication", "Cultural Awareness"],
  },
];

export const flaggedPatterns = {
  hasFlags: true,
  patterns: [
    {
      id: 1,
      type: "attention",
      severity: "low",
      pattern: "Homework submission delays",
      frequency: "2 times in last month",
      recommendation: "Consider setting up a homework schedule with reminders",
    },
  ],
};
