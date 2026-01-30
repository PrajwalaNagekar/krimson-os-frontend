export const STUDENT_DATA = {
  user: {
    name: "Alex Johnson",
    role: "Grade 10 Student",
    id: "S-2026-1054",
    section: "10-B",
    avatar: "https://i.pravatar.cc/150?img=12",
    house: "Red House",
    attendance: "94%",
  },

  // Screen 1: Home Dashboard
  dashboard: {
    nextClass: {
      subject: "Physics",
      room: "Lab 3",
      time: "10:30 AM",
      teacher: "Mr. Sharma",
    },
    assignmentsDue: 3,
    examCountdown: { subject: "Mathematics Mid-Term", days: 5 },
    performanceTrend: "+5%",
    streak: 5, // Days attending consecutively
    notifications: [
      {
        id: 1,
        text: "Science Fair registration closes tomorrow",
        category: "event",
        priority: "high",
      },
      {
        id: 2,
        text: "New assignment uploaded in History",
        category: "assignment",
        priority: "medium",
      },
      {
        id: 3,
        text: "Physics lab report graded - A+",
        category: "grade",
        priority: "low",
      },
    ],
    // Quick Actions
    quickActions: [
      {
        id: 1,
        title: "Join Class",
        icon: "video",
        status: "active",
        color: "cyan",
        description: "Physics Lab starts in 15 min",
      },
      {
        id: 2,
        title: "Submit Assignment",
        icon: "upload",
        status: "pending",
        color: "blue",
        description: "3 assignments due today",
      },
      {
        id: 3,
        title: "View Report",
        icon: "chart",
        status: "ready",
        color: "pink",
        description: "Mid-term results available",
      },
      {
        id: 4,
        title: "Study Materials",
        icon: "book",
        status: "normal",
        color: "purple",
        description: "230 resources available",
      },
      {
        id: 5,
        title: "Ask Doubts",
        icon: "message",
        status: "normal",
        color: "indigo",
        description: "Teacher available now",
      },
      {
        id: 6,
        title: "Check Schedule",
        icon: "calendar",
        status: "normal",
        color: "violet",
        description: "5 classes today",
      },
    ],
    // Today's Timetable
    todayTimetable: [
      {
        period: 1,
        subject: "Mathematics",
        time: "08:00 - 09:00",
        teacher: "Ms. Kumar",
        room: "Room 201",
        type: "Lecture",
        status: "completed",
      },
      {
        period: 2,
        subject: "English",
        time: "09:00 - 10:00",
        teacher: "Mr. Davis",
        room: "Room 105",
        type: "Literature",
        status: "completed",
      },
      {
        period: 3,
        subject: "Physics",
        time: "10:30 - 11:30",
        teacher: "Mr. Sharma",
        room: "Lab 3",
        type: "Lab",
        status: "current",
        timeLeft: "15 min",
      },
      {
        period: 4,
        subject: "Chemistry",
        time: "11:30 - 12:30",
        teacher: "Dr. Patel",
        room: "Lab 2",
        type: "Practical",
        status: "upcoming",
      },
      {
        period: 5,
        subject: "History",
        time: "14:00 - 15:00",
        teacher: "Mrs. Singh",
        room: "Room 303",
        type: "Discussion",
        status: "upcoming",
      },
    ],
    // Today's Homework
    todayHomework: [
      {
        id: 1,
        title: "Trigonometry Worksheet",
        subject: "Math",
        dueTime: "Today 5:00 PM",
        progress: 60,
        status: "in-progress",
        priority: "high",
      },
      {
        id: 2,
        title: "Essay on Climate Change",
        subject: "English",
        dueTime: "Today 11:59 PM",
        progress: 0,
        status: "pending",
        priority: "high",
      },
      {
        id: 3,
        title: "Physics Lab Report",
        subject: "Physics",
        dueTime: "Tomorrow 9:00 AM",
        progress: 90,
        status: "almost-done",
        priority: "medium",
      },
    ],
    // Achievement Badges
    achievementBadges: [
      {
        id: 1,
        title: "5 Day Streak",
        icon: "🔥",
        color: "orange",
        description: "Perfect attendance",
      },
      {
        id: 2,
        title: "Math Wizard",
        icon: "🎯",
        color: "blue",
        description: "95% in Math test",
      },
      {
        id: 3,
        title: "Quick Learner",
        icon: "⚡",
        color: "yellow",
        description: "Completed 10 modules",
      },
      {
        id: 4,
        title: "Team Player",
        icon: "🤝",
        color: "green",
        description: "Group project excellence",
      },
    ],
    // Multiple Upcoming Exams
    upcomingExams: [
      {
        id: 1,
        subject: "Mathematics Mid-Term",
        date: "2026-01-24",
        daysLeft: 5,
        syllabus: "Chapters 1-5",
        priority: "high",
      },
      {
        id: 2,
        subject: "Physics Unit Test",
        date: "2026-01-27",
        daysLeft: 8,
        syllabus: "Optics & Waves",
        priority: "medium",
      },
      {
        id: 3,
        subject: "Chemistry Practical",
        date: "2026-01-29",
        daysLeft: 10,
        syllabus: "Organic Chemistry",
        priority: "medium",
      },
    ],
  },

  // Screen 2: Timetable
  timetable: {
    monday: [
      {
        period: 1,
        subject: "Math",
        time: "08:00 - 09:00",
        type: "Lecture",
        teacher: "Ms. Kumar",
        room: "Room 201",
        teacherImage: "https://i.pravatar.cc/150?img=5",
        status: "completed",
        isSubstitute: false,
      },
      {
        period: 2,
        subject: "English",
        time: "09:00 - 10:00",
        type: "Lecture",
        teacher: "Mr. Davis",
        room: "Room 105",
        teacherImage: "https://i.pravatar.cc/150?img=3",
        status: "completed",
        isSubstitute: false,
      },
      {
        period: 3,
        subject: "Physics",
        time: "10:30 - 11:30",
        type: "Lab",
        teacher: "Mr. Sharma",
        room: "Lab 3",
        teacherImage: "https://i.pravatar.cc/150?img=11",
        status: "active",
        isSubstitute: true,
      },
      {
        period: 4,
        subject: "Chemistry",
        time: "11:30 - 12:30",
        type: "Lecture",
        teacher: "Mrs. Patel",
        room: "Lab 2",
        teacherImage: "https://i.pravatar.cc/150?img=9",
        status: "upcoming",
        isSubstitute: false,
      },
    ],
    tuesday: [
      {
        period: 1,
        subject: "Chemistry",
        time: "08:00 - 09:00",
        type: "Lab",
        teacher: "Mrs. Patel",
        room: "Lab 2",
        teacherImage: "https://i.pravatar.cc/150?img=9",
        status: "upcoming",
        isSubstitute: false,
      },
      {
        period: 2,
        subject: "History",
        time: "09:00 - 10:00",
        type: "Lecture",
        teacher: "Mr. Thompson",
        room: "Room 304",
        teacherImage: "https://i.pravatar.cc/150?img=15",
        status: "upcoming",
        isSubstitute: false,
      },
    ],
  },

  // Screen 3: Attendance
  attendance: {
    heatmap: {
      present: ["2026-01-01", "2026-01-02", "2026-01-03", "2026-01-05"],
      absent: ["2026-01-04"],
    },
    totalDays: 120,
    presentDays: 112,
    percentage: 93.3,
    weeklyAttendance: [
      { week: "Week 1", percentage: 98 },
      { week: "Week 2", percentage: 95 },
      { week: "Week 3", percentage: 92 },
      { week: "Week 4", percentage: 96 },
    ],
  },

  // Screen 4: Assignments
  assignments: [
    // PENDING ASSIGNMENTS
    {
      id: 1,
      title: "Trigonometry Worksheet",
      subject: "Mathematics",
      dueDate: "Today",
      daysLeft: 0,
      status: "Pending",
      progress: 0,
      type: "Worksheet",
      plagiarismScore: 0,
      plagiarismFlag: false,
    },
    {
      id: 2,
      title: "Essay on Romeo & Juliet",
      subject: "English Literature",
      dueDate: "Tomorrow",
      daysLeft: 1,
      status: "In Progress",
      progress: 50,
      type: "Essay",
      plagiarismScore: 0,
      plagiarismFlag: false,
    },
    {
      id: 8,
      title: "Ecosystem Analysis Report",
      subject: "Environmental Science",
      dueDate: "Jan 30",
      daysLeft: 3,
      status: "Pending",
      progress: 25,
      type: "Research",
      plagiarismScore: 0,
      plagiarismFlag: false,
    },

    // SUBMITTED ASSIGNMENTS
    {
      id: 4,
      title: "History Research Paper",
      subject: "World History",
      dueDate: "Jan 05",
      status: "Submitted",
      progress: 100,
      type: "Research Paper",
      plagiarismScore: 12,
      plagiarismFlag: true,
      submittedFile: "history_paper_draft.docx",
    },
    {
      id: 9,
      title: "Physics Kinematics Problems",
      subject: "Physics",
      dueDate: "Jan 20",
      status: "Submitted",
      progress: 100,
      type: "Problem Set",
      plagiarismScore: 3,
      plagiarismFlag: false,
      submittedFile: "physics_problems.pdf",
    },

    // GRADED ASSIGNMENTS - All Mastery Levels

    // 1. MASTERED (92%) - Chemistry Assignment
    {
      id: 3,
      title: "Quadratic Equations Assignment",
      subject: "Mathematics",
      dueDate: "Jan 10",
      status: "Graded",
      grade: "92",
      maxGrade: "100",
      teacherFeedback:
        "Outstanding work! Your problem-solving approach is systematic and thorough.",
      type: "Problem Set",
      plagiarismScore: 2,
      plagiarismFlag: false,
      submittedFile: "quadratic_equations.pdf",
    },

    // 2. STRONG PASS (78%) - Biology Assignment
    {
      id: 5,
      title: "Photosynthesis Lab Report",
      subject: "Biology",
      dueDate: "Jan 08",
      status: "Graded",
      grade: "78",
      maxGrade: "100",
      teacherFeedback:
        "Good understanding of photosynthesis process. Work on cell structure details for better comprehension.",
      type: "Lab Report",
      plagiarismScore: 0,
      plagiarismFlag: false,
      submittedFile: "photosynthesis_lab.pdf",
    },

    // 3. WEAK (55%) - English Essay
    {
      id: 6,
      title: "Argumentative Essay: Climate Change",
      subject: "English Composition",
      dueDate: "Jan 12",
      status: "Graded",
      grade: "55",
      maxGrade: "100",
      teacherFeedback:
        "Citation format is good, but thesis development and essay structure need significant improvement.",
      type: "Essay",
      plagiarismScore: 5,
      plagiarismFlag: false,
      submittedFile: "climate_essay.docx",
    },

    // 4. NOT MASTERED (35%) - Trigonometry
    {
      id: 7,
      title: "Trigonometry Fundamentals Test",
      subject: "Advanced Mathematics",
      dueDate: "Jan 15",
      status: "Graded",
      grade: "35",
      maxGrade: "100",
      teacherFeedback:
        "You showed good effort, but core trigonometry concepts need comprehensive review. Let's schedule additional support sessions.",
      type: "Test",
      plagiarismScore: 0,
      plagiarismFlag: false,
      submittedFile: "trig_test.pdf",
    },

    // Additional graded assignments for variety
    {
      id: 10,
      title: "Chemical Bonding Lab",
      subject: "Chemistry",
      dueDate: "Jan 05",
      status: "Graded",
      grade: "88",
      maxGrade: "100",
      teacherFeedback:
        "Excellent lab technique and data analysis. Minor improvements needed in conclusion writing.",
      type: "Lab Report",
      plagiarismScore: 1,
      plagiarismFlag: false,
      submittedFile: "chem_bonding.pdf",
    },
    {
      id: 11,
      title: "World War II Timeline Project",
      subject: "History",
      dueDate: "Dec 28",
      status: "Graded",
      grade: "65",
      maxGrade: "100",
      teacherFeedback:
        "Timeline is accurate but lacks depth in analysis. Add more context for historical events.",
      type: "Project",
      plagiarismScore: 8,
      plagiarismFlag: false,
      submittedFile: "wwii_timeline.pdf",
    },
  ],

  // Screen 5: Resources
  // Screen 5: Resources
  resources: [
    {
      id: 1,
      subject: "MATH",
      title: "Calculus Basics",
      type: "Document",
      chapter: "Chapter 4",
      topic: "Calculus",
      week: "Week 1",
      source: "NCERT",
      saved: false,
      read: false,
      url: "#",
    },
    {
      id: 2,
      subject: "HISTORY",
      title: "World War II Notes",
      type: "Document",
      chapter: "Chapter 4",
      topic: "World War II",
      week: "Week 2",
      source: "NCERT",
      saved: true,
      read: false,
      url: "#",
    },
    {
      id: 3,
      subject: "PHYSICS",
      title: "Gravity Experiment",
      type: "Experiment",
      chapter: "Chapter 2",
      topic: "Gravitation",
      week: "Week 3",
      source: "Lab Manual",
      saved: false,
      read: true,
      url: "#",
    },
    {
      id: 4,
      subject: "CHEMISTRY",
      title: "Chemical Reactions",
      type: "Video",
      chapter: "Chapter 5",
      topic: "Organic Chemistry",
      week: "Week 4",
      source: "Khan Academy",
      saved: true,
      read: false,
      url: "#",
    },
    {
      id: 5,
      subject: "BIOLOGY",
      title: "Cell Structure",
      type: "Document",
      chapter: "Chapter 1",
      topic: "Cell Biology",
      week: "Week 1",
      source: "NCERT",
      saved: false,
      read: false,
      url: "#",
    },
    {
      id: 6,
      subject: "MATH",
      title: "Algebra Introduction",
      type: "Video",
      chapter: "Chapter 3",
      topic: "Algebra",
      week: "Week 2",
      source: "MIT OCW",
      saved: false,
      read: true,
      url: "#",
    },
  ],

  // Screen 6: Exams
  exams: [
    {
      id: 1,
      title: "Math Mid-Term",
      date: "2026-01-15",
      time: "09:00 AM",
      syllabus: "Chapters 1-5",
    },
    {
      id: 2,
      title: "Physics Unit Test",
      date: "2026-01-20",
      time: "10:00 AM",
      syllabus: "Optics",
    },
  ],

  // Screen 7: Grades
  grades: [
    { subject: "Mathematics", term1: 85, term2: 92, trend: "up" },
    { subject: "English", term1: 78, term2: 80, trend: "up" },
    { subject: "Science", term1: 88, term2: 85, trend: "down" },
  ],

  // Screen 8: Communication
  messages: [
    {
      id: 1,
      from: "Mrs. Davis (English)",
      content: "Great job on the essay!",
      time: "2 hrs ago",
      unread: true,
    },
    {
      id: 2,
      from: "Admin Office",
      content: "Fee reminder for Term 2",
      time: "Yesterday",
      unread: false,
    },
  ],

  // Screen 9: Analytics
  analytics: {
    gpa: 3.8,
    grade: "A",
    attendance: 98, // percentage
    assignmentsCompleted: 45,
    totalAssignments: 50,
    rank: 4,
    totalStudents: 42,
    percentile: "Top 10%",
    academicGrowth: [
      { term: "Term 1", math: 75, science: 70, english: 80 },
      { term: "Term 2", math: 82, science: 75, english: 82 },
      { term: "Term 3", math: 88, science: 85, english: 85 },
      { term: "Term 4", math: 92, science: 88, english: 88 },
    ],
    subjectStrengths: [
      { subject: "Math", score: 92, fullMark: 100 },
      { subject: "Physics", score: 85, fullMark: 100 },
      { subject: "Chem", score: 78, fullMark: 100 },
      { subject: "Bio", score: 88, fullMark: 100 },
      { subject: "Eng", score: 90, fullMark: 100 },
      { subject: "Hist", score: 80, fullMark: 100 },
    ],
    aiStudyTips: [
      {
        id: 1,
        subject: "Physics",
        topic: "Optics",
        tip: "Focus on ray diagrams. Your practical scores are high, but theory needs review.",
        action: "Review Chapter 4",
        color: "blue",
      },
      {
        id: 2,
        subject: "History",
        topic: "World War II",
        tip: "Create a timeline for key events. Visualizing dates will improve retention.",
        action: "View Timeline",
        color: "orange",
      },
    ],
  },

  // Screen 10: Fees
  fees: {
    totalDue: 1500,
    totalPaid: 4500,
    dueDate: "2026-01-31",
    status: "Pending",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=school@bank&pn=KrimsonHigh&am=1500&cu=INR", // Mock QR
    upcomingDues: [
      {
        id: 1,
        title: "Term 2 Tuition",
        amount: 1500,
        date: "2026-01-31",
        type: "Tuition",
      },
      {
        id: 2,
        title: "Lab Maintenance",
        amount: 500,
        date: "2026-02-15",
        type: "Lab",
      },
    ],
    history: [
      {
        id: 104,
        date: "2025-09-01",
        amount: 1500,
        status: "Paid",
        method: "Online",
      },
      {
        id: 103,
        date: "2025-06-01",
        amount: 1500,
        status: "Paid",
        method: "Bank Transfer",
      },
      {
        id: 102,
        date: "2025-03-01",
        amount: 750,
        status: "Paid",
        method: "Cash",
      },
      {
        id: 101,
        date: "2025-01-01",
        amount: 750,
        status: "Paid",
        method: "Online",
      },
    ],
  },

  // Screen 11: Behavior
  behavior: {
    // Overall Statistics
    totalPoints: 120,
    rank: "Excellent",
    percentile: "Top 10%",

    // Attendance Trends (for chart)
    attendanceTrends: [
      { month: "Sep", percentage: 95 },
      { month: "Oct", percentage: 92 },
      { month: "Nov", percentage: 98 },
      { month: "Dec", percentage: 94 },
      { month: "Jan", percentage: 96 },
    ],
    punctuality: {
      onTime: 85,
      late: 3,
      percentage: 96.6,
    },

    // Positive Behavior Log
    achievements: [
      {
        id: 1,
        title: "Class Monitor",
        description: "Demonstrated excellent leadership as class monitor",
        points: 25,
        date: "2026-01-15",
        teacher: "Ms. Kumar",
        category: "Leadership",
      },
      {
        id: 2,
        title: "Library Organization",
        description:
          "Organized and catalogued 200+ books in the school library",
        points: 15,
        date: "2026-01-05",
        teacher: "Mrs. Davis",
        category: "Community Service",
      },
      {
        id: 3,
        title: "Science Fair Winner",
        description: "Led team to win first place in inter-school science fair",
        points: 30,
        date: "2025-12-18",
        teacher: "Mr. Sharma",
        category: "Academic",
      },
      {
        id: 4,
        title: "Peer Tutor",
        description: "Helped 5 classmates improve their mathematics grades",
        points: 20,
        date: "2025-12-10",
        teacher: "Ms. Kumar",
        category: "Academic",
      },
    ],

    participationPoints: [
      { subject: "Mathematics", points: 18, maxPoints: 20 },
      { subject: "Science", points: 20, maxPoints: 20 },
      { subject: "English", points: 15, maxPoints: 20 },
      { subject: "History", points: 12, maxPoints: 20 },
    ],

    // Warnings with Counselor Notes
    warnings: [
      {
        id: 1,
        type: "Punctuality",
        severity: "Minor",
        description: "Late to class by 10 minutes",
        date: "2025-12-20",
        teacher: "Mrs. Singh",
        counselorNotes:
          "Student has been advised to manage time better. Parents have been notified. Showed improvement in following week. Continue monitoring.",
        resolved: true,
      },
    ],

    // Consistency Streak
    consistencyStreak: 3,
    streakType: "Zero late arrivals",

    // Legacy logs for backward compatibility
    points: 120,
    logs: [
      { date: "2026-01-05", type: "Positive", note: "Helped organize library" },
      { date: "2025-12-20", type: "Warning", note: "Late to class" },
    ],
  },

  // Screen 12: Profile
  profile: {
    goals: ["Score 95% in Math", "Join Debate Club", "Complete Python Course"],
    interests: ["Robotics", "Football", "Creative Writing"],
    clubs: ["Science Club", "Football Team", "Debate Society"],
    leaderboard: {
      rank: 4,
      totalStudents: 42,
      points: 1250,
      percentile: "Top 10%",
      weeklyChange: "+2",
    },
    achievements: [
      {
        id: 1,
        title: "Math Wizard",
        icon: "calculate",
        color: "blue",
        date: "2025-12-15",
      },
      {
        id: 2,
        title: "Science Fair Winner",
        icon: "science",
        color: "purple",
        date: "2025-11-20",
      },
      {
        id: 3,
        title: "Perfect Attendance",
        icon: "event_available",
        color: "green",
        date: "2025-10-01",
      },
    ],
  },

  // Screen 13: Parent Link Dashboard
  parentLinkData: {
    // Parent Information
    parentInfo: {
      name: "John Johnson",
      email: "john.johnson@email.com",
      phone: "+1 234-567-8900",
      relationship: "Father",
      linkedDate: "2025-09-01",
      syncEnabled: true,
    },

    // Read-Only Data Mirror (What Parent Sees)
    mirrorData: {
      attendance: {
        percentage: 94.5,
        present: 85,
        absent: 5,
        leave: 0,
        totalDays: 90,
      },
      latestResults: {
        term: "Term 2 - 2025",
        overall: "A Grade",
        overallPercentage: 91,
        subjects: [
          { name: "Mathematics", grade: "A", percentage: 92 },
          { name: "Science", grade: "A+", percentage: 96 },
          { name: "English", grade: "B+", percentage: 85 },
          { name: "History", grade: "A", percentage: 88 },
        ],
      },
      feeStatus: {
        totalDue: 15000,
        paid: 10000,
        pending: 5000,
        dueDate: "2026-02-15",
        status: "Partially Paid",
      },
    },

    // Parental Messages & Alerts
    parentalMessages: [
      {
        id: 1,
        from: "Parent",
        subject: "Permission for field trip",
        message:
          "Please ensure you have all necessary items for the upcoming field trip. Pack your kit tonight and double-check the permission slip.",
        date: "2026-01-18",
        time: "10:30 AM",
        read: false,
        requiresAck: true,
        acknowledged: false,
      },
      {
        id: 2,
        from: "Parent",
        subject: "Study schedule",
        message:
          "We've reviewed your exam timetable. Let's prepare a study schedule this weekend.",
        date: "2026-01-15",
        time: "07:00 PM",
        read: true,
        requiresAck: false,
        acknowledged: false,
      },
    ],

    // Teacher Comments for Parents
    teacherComments: [
      {
        id: 1,
        teacher: "Ms. Kumar",
        subject: "Mathematics",
        comment:
          "Excellent progress this term. Alex shows strong analytical skills and participates actively in class. Keep up the good work!",
        date: "2026-01-15",
        sharedWithParent: true,
        read: false,
      },
      {
        id: 2,
        teacher: "Mr. Sharma",
        subject: "Science",
        comment:
          "Outstanding performance in the science fair project. Alex demonstrated excellent research and presentation skills.",
        date: "2026-01-10",
        sharedWithParent: true,
        read: true,
      },
    ],

    // Joint Activities Requiring Acknowledgment
    jointActivities: [
      {
        id: 1,
        title: "Parent-Teacher Meeting",
        description:
          "Scheduled for next week to discuss term progress and upcoming exams. Your attendance is mandatory.",
        date: "2026-01-25",
        time: "2:00 PM",
        location: "School Main Hall",
        requiresBothAck: true,
        studentAck: false,
        parentAck: true,
      },
      {
        id: 2,
        title: "Field Trip Consent",
        description:
          "Science Museum visit on Feb 5th. Both student and parent acknowledgment required for participation.",
        date: "2026-02-05",
        time: "9:00 AM",
        location: "Science Museum",
        requiresBothAck: true,
        studentAck: false,
        parentAck: false,
      },
    ],
  },

  // Screen 14: Co-Curricular Activities & Achievements
  cocurricularActivities: {
    // Overall Stats
    totalPoints: 185,
    totalActivities: 12,
    certificatesEarned: 6,

    // Activity Categories
    categories: [
      { name: "Sports", count: 5, points: 80, icon: "Trophy" },
      { name: "Arts", count: 4, points: 60, icon: "Palette" },
      { name: "Debate", count: 3, points: 45, icon: "MessageSquare" },
    ],

    // Detailed Activity Log
    activities: [
      {
        id: 1,
        name: "Inter-School Football Championship",
        category: "Sports",
        type: "Competition",
        role: "Team Captain",
        achievement: "Runner Up",
        points: 30,
        date: "2026-01-10",
        description:
          "Led team to finals in regional football tournament with 15 participating schools",
        status: "Completed",
        certificate: true,
      },
      {
        id: 2,
        name: "Annual Art Exhibition",
        category: "Arts",
        type: "Exhibition",
        role: "Participant",
        achievement: "Best Painting Award",
        points: 25,
        date: "2026-01-05",
        description:
          "Exhibited watercolor painting series on environmental themes",
        status: "Completed",
        certificate: true,
      },
      {
        id: 3,
        name: "State-Level Debate Championship",
        category: "Debate",
        type: "Competition",
        role: "Speaker",
        achievement: "Quarter Finalist",
        points: 20,
        date: "2025-12-18",
        description:
          "Participated in state debate championship on climate change policy",
        status: "Completed",
        certificate: true,
      },
      {
        id: 4,
        name: "Basketball Tournament",
        category: "Sports",
        type: "Competition",
        role: "Player",
        achievement: "Winner",
        points: 25,
        date: "2025-12-05",
        description: "Won inter-house basketball tournament as key player",
        status: "Completed",
        certificate: false,
      },
      {
        id: 5,
        name: "Drama Society Performance",
        category: "Arts",
        type: "Performance",
        role: "Lead Actor",
        achievement: "Best Actor",
        points: 20,
        date: "2025-11-20",
        description:
          "Performed lead role in school annual play 'Shakespeare Reimagined'",
        status: "Completed",
        certificate: true,
      },
      {
        id: 6,
        name: "Model UN Conference",
        category: "Debate",
        type: "Conference",
        role: "Delegate",
        achievement: "Best Delegate",
        points: 15,
        date: "2025-11-10",
        description:
          "Represented as delegate for Model UN conference on global security",
        status: "Completed",
        certificate: true,
      },
      {
        id: 7,
        name: "Swimming Gala",
        category: "Sports",
        type: "Competition",
        role: "Participant",
        achievement: "Silver Medal",
        points: 15,
        date: "2025-10-28",
        description: "Won silver medal in 100m freestyle swimming event",
        status: "Completed",
        certificate: false,
      },
      {
        id: 8,
        name: "Music Competition",
        category: "Arts",
        type: "Competition",
        role: "Performer",
        achievement: "Runner Up",
        points: 10,
        date: "2025-10-15",
        description:
          "Performed classical guitar piece in inter-school music competition",
        status: "Completed",
        certificate: true,
      },
      {
        id: 9,
        name: "Elocution Contest",
        category: "Debate",
        type: "Competition",
        role: "Speaker",
        achievement: "Winner",
        points: 10,
        date: "2025-09-25",
        description:
          "Won first place in school elocution contest on 'Future of Technology'",
        status: "Completed",
        certificate: false,
      },
      {
        id: 10,
        name: "Cricket Tournament",
        category: "Sports",
        type: "Competition",
        role: "Organizer",
        achievement: "Organizer Badge",
        points: 5,
        date: "2025-09-15",
        description: "Organized and managed inter-class cricket tournament",
        status: "Completed",
        certificate: false,
      },
      {
        id: 11,
        name: "Photography Workshop",
        category: "Arts",
        type: "Workshop",
        role: "Participant",
        achievement: "Certificate of Completion",
        points: 5,
        date: "2025-09-08",
        description:
          "Completed 3-day workshop on digital photography techniques",
        status: "Completed",
        certificate: false,
      },
      {
        id: 12,
        name: "Athletics Meet",
        category: "Sports",
        type: "Competition",
        role: "Volunteer",
        achievement: "Volunteer Badge",
        points: 5,
        date: "2025-09-01",
        description:
          "Volunteered for annual school athletics meet organization",
        status: "Completed",
        certificate: false,
      },
    ],

    // Achievement Timeline (chronological by month)
    timeline: [
      {
        month: "January",
        year: "2026",
        achievements: [
          { name: "Football Championship", category: "Sports", points: 30 },
          { name: "Art Exhibition", category: "Arts", points: 25 },
        ],
      },
      {
        month: "December",
        year: "2025",
        achievements: [
          { name: "Debate Championship", category: "Debate", points: 20 },
          { name: "Basketball Tournament", category: "Sports", points: 25 },
        ],
      },
      {
        month: "November",
        year: "2025",
        achievements: [
          { name: "Drama Performance", category: "Arts", points: 20 },
          { name: "Model UN", category: "Debate", points: 15 },
        ],
      },
      {
        month: "October",
        year: "2025",
        achievements: [
          { name: "Swimming Gala", category: "Sports", points: 15 },
          { name: "Music Competition", category: "Arts", points: 10 },
        ],
      },
      {
        month: "September",
        year: "2025",
        achievements: [
          { name: "Elocution Contest", category: "Debate", points: 10 },
          { name: "Cricket Tournament", category: "Sports", points: 5 },
          { name: "Photography Workshop", category: "Arts", points: 5 },
          { name: "Athletics Meet", category: "Sports", points: 5 },
        ],
      },
      {
        month: "August",
        year: "2025",
        achievements: [
          { name: "Independence Day Parade", category: "Sports", points: 10 },
          { name: "Patriotic Song Competition", category: "Arts", points: 15 },
        ],
      },
      {
        month: "July",
        year: "2025",
        achievements: [
          { name: "Chess Championship", category: "Sports", points: 20 },
          { name: "Creative Writing Workshop", category: "Arts", points: 5 },
        ],
      },
      {
        month: "June",
        year: "2025",
        achievements: [
          {
            name: "Summer Camp Leadership",
            category: "Leadership",
            points: 30,
          },
        ],
      },
    ],
  },

  // Legacy activities for backward compatibility
  activities: [
    {
      id: 1,
      name: "Inter-School Debate",
      date: "2025-11-10",
      role: "Participant",
      achievement: "Runner Up",
    },
    {
      id: 2,
      name: "Annual Sports Day",
      date: "2025-12-05",
      role: "Volunteer",
      achievement: "Organizer Badge",
    },
  ],

  // My Progress - Curriculum Tracking & Mastery-Based Learning
  myProgress: {
    // Overall Statistics
    overallStats: {
      totalChapters: 48,
      completedChapters: 28,
      inProgressChapters: 8,
      lockedChapters: 12,
      totalTimeSpent: "127h 45m",
      averageMastery: 72,
      completionPercentage: 58,
    },

    // Subject-wise Curriculum Overview
    curriculum: [
      {
        id: 1,
        subject: "Mathematics",
        color: "blue",
        icon: "📐",
        totalChapters: 12,
        completedChapters: 8,
        progress: 67,
        timeSpent: "34h 20m",
      },
      {
        id: 2,
        subject: "Physics",
        color: "purple",
        icon: "⚛️",
        totalChapters: 10,
        completedChapters: 6,
        progress: 60,
        timeSpent: "28h 15m",
      },
      {
        id: 3,
        subject: "Chemistry",
        color: "green",
        icon: "🧪",
        totalChapters: 9,
        completedChapters: 5,
        progress: 56,
        timeSpent: "22h 30m",
      },
      {
        id: 4,
        subject: "Biology",
        color: "teal",
        icon: "🧬",
        totalChapters: 8,
        completedChapters: 4,
        progress: 50,
        timeSpent: "18h 10m",
      },
      {
        id: 5,
        subject: "English",
        color: "pink",
        icon: "📚",
        totalChapters: 6,
        completedChapters: 3,
        progress: 50,
        timeSpent: "15h 45m",
      },
      {
        id: 6,
        subject: "History",
        color: "orange",
        icon: "🏛️",
        totalChapters: 3,
        completedChapters: 2,
        progress: 67,
        timeSpent: "8h 45m",
      },
    ],

    // Detailed Chapter-wise Progress
    chapters: [
      // Mathematics Chapters
      {
        id: 1,
        subject: "Mathematics",
        chapterNumber: 1,
        title: "Real Numbers",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "4h 30m",
        lastAccessed: "2026-01-20",
        isLocked: false,
        prerequisites: [],
        topics: [
          "Euclid's Division",
          "Fundamental Theorem",
          "Decimal Expansion",
        ],
        quiz_score: 95,
      },
      {
        id: 2,
        subject: "Mathematics",
        chapterNumber: 2,
        title: "Polynomials",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "5h 15m",
        lastAccessed: "2026-01-22",
        isLocked: false,
        prerequisites: [1],
        topics: [
          "Zeros of Polynomial",
          "Division Algorithm",
          "Algebraic Identities",
        ],
        quiz_score: 92,
      },
      {
        id: 3,
        subject: "Mathematics",
        chapterNumber: 3,
        title: "Linear Equations in Two Variables",
        progress: 100,
        status: "completed",
        mastery: "advanced",
        timeSpent: "3h 45m",
        lastAccessed: "2026-01-24",
        isLocked: false,
        prerequisites: [2],
        topics: [
          "Graphical Solution",
          "Algebraic Methods",
          "Cross-multiplication",
        ],
        quiz_score: 88,
      },
      {
        id: 4,
        subject: "Mathematics",
        chapterNumber: 4,
        title: "Quadratic Equations",
        progress: 75,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "2h 20m",
        lastAccessed: "2026-01-27",
        isLocked: false,
        prerequisites: [2, 3],
        topics: [
          "Standard Form",
          "Factorization",
          "Quadratic Formula",
          "Nature of Roots",
        ],
        quiz_score: 0,
      },
      {
        id: 5,
        subject: "Mathematics",
        chapterNumber: 5,
        title: "Arithmetic Progressions",
        progress: 30,
        status: "in-progress",
        mastery: "beginner",
        timeSpent: "1h 10m",
        lastAccessed: "2026-01-26",
        isLocked: false,
        prerequisites: [3],
        topics: ["AP Definition", "nth Term", "Sum of n Terms"],
        quiz_score: 0,
      },
      {
        id: 6,
        subject: "Mathematics",
        chapterNumber: 6,
        title: "Triangles",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [4],
        topics: [
          "Similar Triangles",
          "Pythagoras Theorem",
          "Triangle Properties",
        ],
        quiz_score: 0,
      },

      // Physics Chapters
      {
        id: 13,
        subject: "Physics",
        chapterNumber: 1,
        title: "Light - Reflection and Refraction",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "5h 20m",
        lastAccessed: "2026-01-18",
        isLocked: false,
        prerequisites: [],
        topics: [
          "Laws of Reflection",
          "Spherical Mirrors",
          "Refraction",
          "Lenses",
        ],
        quiz_score: 94,
      },
      {
        id: 14,
        subject: "Physics",
        chapterNumber: 2,
        title: "Human Eye and Colorful World",
        progress: 100,
        status: "completed",
        mastery: "advanced",
        timeSpent: "3h 45m",
        lastAccessed: "2026-01-21",
        isLocked: false,
        prerequisites: [13],
        topics: [
          "Eye Structure",
          "Defects of Vision",
          "Atmospheric Refraction",
          "Dispersion",
        ],
        quiz_score: 89,
      },
      {
        id: 15,
        subject: "Physics",
        chapterNumber: 3,
        title: "Electricity",
        progress: 85,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "4h 10m",
        lastAccessed: "2026-01-27",
        isLocked: false,
        prerequisites: [],
        topics: [
          "Electric Current",
          "Ohm's Law",
          "Resistance",
          "Electric Power",
        ],
        quiz_score: 0,
      },
      {
        id: 16,
        subject: "Physics",
        chapterNumber: 4,
        title: "Magnetic Effects of Current",
        progress: 40,
        status: "in-progress",
        mastery: "beginner",
        timeSpent: "1h 50m",
        lastAccessed: "2026-01-25",
        isLocked: false,
        prerequisites: [15],
        topics: [
          "Magnetic Field",
          "Electromagnetic Induction",
          "Electric Motor",
        ],
        quiz_score: 0,
      },
      {
        id: 17,
        subject: "Physics",
        chapterNumber: 5,
        title: "Sources of Energy",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [15, 16],
        topics: [
          "Fossil Fuels",
          "Solar Energy",
          "Nuclear Energy",
          "Renewable Sources",
        ],
        quiz_score: 0,
      },

      // Chemistry Chapters
      {
        id: 25,
        subject: "Chemistry",
        chapterNumber: 1,
        title: "Chemical Reactions and Equations",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "4h 15m",
        lastAccessed: "2026-01-19",
        isLocked: false,
        prerequisites: [],
        topics: [
          "Chemical Equations",
          "Types of Reactions",
          "Oxidation-Reduction",
        ],
        quiz_score: 96,
      },
      {
        id: 26,
        subject: "Chemistry",
        chapterNumber: 2,
        title: "Acids, Bases and Salts",
        progress: 100,
        status: "completed",
        mastery: "advanced",
        timeSpent: "3h 50m",
        lastAccessed: "2026-01-23",
        isLocked: false,
        prerequisites: [25],
        topics: ["pH Scale", "Neutralization", "Common Acids & Bases"],
        quiz_score: 91,
      },
      {
        id: 27,
        subject: "Chemistry",
        chapterNumber: 3,
        title: "Metals and Non-metals",
        progress: 60,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "2h 30m",
        lastAccessed: "2026-01-27",
        isLocked: false,
        prerequisites: [25],
        topics: [
          "Physical Properties",
          "Chemical Properties",
          "Reactivity Series",
        ],
        quiz_score: 0,
      },
      {
        id: 28,
        subject: "Chemistry",
        chapterNumber: 4,
        title: "Carbon and its Compounds",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [26, 27],
        topics: ["Covalent Bonding", "Organic Compounds", "Functional Groups"],
        quiz_score: 0,
      },

      // Biology Chapters
      {
        id: 37,
        subject: "Biology",
        chapterNumber: 1,
        title: "Life Processes",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "5h 0m",
        lastAccessed: "2026-01-17",
        isLocked: false,
        prerequisites: [],
        topics: ["Nutrition", "Respiration", "Transportation", "Excretion"],
        quiz_score: 93,
      },
      {
        id: 38,
        subject: "Biology",
        chapterNumber: 2,
        title: "Control and Coordination",
        progress: 100,
        status: "completed",
        mastery: "advanced",
        timeSpent: "4h 20m",
        lastAccessed: "2026-01-22",
        isLocked: false,
        prerequisites: [37],
        topics: ["Nervous System", "Hormones", "Plant Coordination"],
        quiz_score: 87,
      },
      {
        id: 39,
        subject: "Biology",
        chapterNumber: 3,
        title: "How Do Organisms Reproduce?",
        progress: 55,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "2h 15m",
        lastAccessed: "2026-01-26",
        isLocked: false,
        prerequisites: [37],
        topics: [
          "Asexual Reproduction",
          "Sexual Reproduction",
          "Human Reproduction",
        ],
        quiz_score: 0,
      },
      {
        id: 40,
        subject: "Biology",
        chapterNumber: 4,
        title: "Heredity and Evolution",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [39],
        topics: ["Mendel's Laws", "DNA", "Evolution", "Speciation"],
        quiz_score: 0,
      },

      // English Chapters
      {
        id: 43,
        subject: "English",
        chapterNumber: 1,
        title: "A Letter to God",
        progress: 100,
        status: "completed",
        mastery: "advanced",
        timeSpent: "2h 30m",
        lastAccessed: "2026-01-16",
        isLocked: false,
        prerequisites: [],
        topics: ["Theme", "Character Analysis", "Literary Devices"],
        quiz_score: 90,
      },
      {
        id: 44,
        subject: "English",
        chapterNumber: 2,
        title: "Nelson Mandela: Long Walk to Freedom",
        progress: 80,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "3h 15m",
        lastAccessed: "2026-01-25",
        isLocked: false,
        prerequisites: [],
        topics: ["Biography", "Historical Context", "Freedom Struggle"],
        quiz_score: 0,
      },
      {
        id: 45,
        subject: "English",
        chapterNumber: 3,
        title: "Two Stories about Flying",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [44],
        topics: ["Narrative Structure", "Symbolism", "Character Development"],
        quiz_score: 0,
      },

      // History Chapters
      {
        id: 46,
        subject: "History",
        chapterNumber: 1,
        title: "The Rise of Nationalism in Europe",
        progress: 100,
        status: "mastered",
        mastery: "mastered",
        timeSpent: "4h 20m",
        lastAccessed: "2026-01-15",
        isLocked: false,
        prerequisites: [],
        topics: [
          "French Revolution",
          "Nationalism",
          "Unification of Italy & Germany",
        ],
        quiz_score: 94,
      },
      {
        id: 47,
        subject: "History",
        chapterNumber: 2,
        title: "Nationalism in India",
        progress: 70,
        status: "in-progress",
        mastery: "intermediate",
        timeSpent: "2h 40m",
        lastAccessed: "2026-01-24",
        isLocked: false,
        prerequisites: [46],
        topics: [
          "Non-Cooperation",
          "Civil Disobedience",
          "Independence Movement",
        ],
        quiz_score: 0,
      },
      {
        id: 48,
        subject: "History",
        chapterNumber: 3,
        title: "The Making of a Global World",
        progress: 0,
        status: "locked",
        mastery: "beginner",
        timeSpent: "0h 0m",
        lastAccessed: null,
        isLocked: true,
        prerequisites: [47],
        topics: ["Trade", "Colonialism", "Globalization"],
        quiz_score: 0,
      },
    ],

    // Weekly Progress Timeline
    weeklyTimeline: [
      { week: "Week 1", hoursSpent: 18, chaptersCompleted: 2 },
      { week: "Week 2", hoursSpent: 22, chaptersCompleted: 3 },
      { week: "Week 3", hoursSpent: 24, chaptersCompleted: 4 },
      { week: "Week 4", hoursSpent: 20, chaptersCompleted: 2 },
      { week: "This Week", hoursSpent: 16, chaptersCompleted: 1 },
    ],

    // Recent Activity
    recentActivity: [
      {
        id: 1,
        action: "Completed",
        chapter: "Quadratic Equations - Topic: Factorization",
        subject: "Mathematics",
        time: "2 hours ago",
      },
      {
        id: 2,
        action: "Started",
        chapter: "Electricity - Topic: Ohm's Law",
        subject: "Physics",
        time: "5 hours ago",
      },
      {
        id: 3,
        action: "Mastered",
        chapter: "Chemical Reactions and Equations",
        subject: "Chemistry",
        time: "Yesterday",
      },
      {
        id: 4,
        action: "Quiz Completed",
        chapter: "Human Eye - Score: 89%",
        subject: "Physics",
        time: "2 days ago",
      },
    ],

    // Learning Streak
    learningStreak: {
      currentStreak: 12,
      longestStreak: 28,
      totalDaysActive: 87,
    },
  },

  // Detailed Mastery Data for Assignments
  masteryData: {
    3: {
      score: 92,
      status: "Mastered",
      concepts: [
        { name: "Quadratic Equations", strength: "strong" },
        { name: "Factorization", strength: "strong" },
        { name: "Graph Interpretation", strength: "partial" },
      ],
      nextAction: "advance",
      nextActionText: "You can proceed to Assignment 12: Advanced Algebra",
      feedback: {
        wellDone:
          "Excellent grasp of quadratic solving techniques and systematic approach.",
        improve: "Minor improvements needed in graph interpretation.",
        reason:
          "Your mastery score is 92%, demonstrating strong understanding of core concepts.",
        nextSteps:
          "Continue to advanced algebra topics and review graph interpretation notes.",
      },
      canProgress: true,
    },
    5: {
      score: 78,
      status: "Strong Pass",
      concepts: [
        { name: "Photosynthesis", strength: "strong" },
        { name: "Cell Structure", strength: "partial" },
        { name: "Enzymes", strength: "strong" },
      ],
      nextAction: "reinforcement",
      nextActionText: "Complete one reinforcement task before next assignment",
      feedback: {
        wellDone: "Great understanding of photosynthesis and enzyme functions.",
        improve: "Cell structure details need more attention.",
        reason:
          "Your score of 78% shows solid understanding with room for reinforcement.",
        nextSteps:
          "Complete the cell structure review quiz, then proceed to next assignment.",
      },
      canProgress: true,
      reinforcementTask: "Cell Structure Review Quiz (5 questions)",
    },
    6: {
      score: 55,
      status: "Weak",
      concepts: [
        { name: "Essay Structure", strength: "partial" },
        { name: "Thesis Development", strength: "weak" },
        { name: "Citation Format", strength: "strong" },
      ],
      nextAction: "remedial",
      nextActionText: "Complete remedial tasks before proceeding",
      feedback: {
        wellDone: "Your citation formatting is accurate and consistent.",
        improve:
          "Thesis statements need more clarity and essay structure requires improvement.",
        reason:
          "With a score of 55%, additional practice is needed to build mastery.",
        nextSteps:
          "Watch the essay structure tutorial, complete 5 practice exercises, and retake assessment.",
      },
      canProgress: false,
      remedialTasks: [
        "Watch: Essay Structure Fundamentals (12 min)",
        "Read: Thesis Development Guide",
        "Practice: 5 Thesis Writing Exercises",
        "Reassessment Quiz",
      ],
    },
    7: {
      score: 35,
      status: "Not Mastered",
      concepts: [
        { name: "Trigonometry Basics", strength: "weak" },
        { name: "Angle Calculation", strength: "weak" },
        { name: "Unit Circle", strength: "weak" },
      ],
      nextAction: "block",
      nextActionText: "Progress blocked - Full remediation required",
      feedback: {
        wellDone: "You showed effort in attempting all questions.",
        improve: "Core trigonometry concepts need comprehensive review.",
        reason:
          "Your score of 35% indicates fundamental gaps that must be addressed.",
        nextSteps:
          "Complete the full remedial program and schedule a review session with your teacher.",
      },
      canProgress: false,
      teacherNotified: true,
      remedialTasks: [
        "Watch: Trigonometry Foundations (20 min)",
        "Read: Unit Circle Explained (with examples)",
        "Practice: 10 Basic Angle Questions",
        "Practice: 10 Unit Circle Questions",
        "One-on-one Teacher Session",
        "Complete Reassessment",
      ],
    },
    10: {
      score: 88,
      status: "Strong Pass",
      concepts: [
        { name: "Ionic Bonding", strength: "strong" },
        { name: "Covalent Bonding", strength: "strong" },
        { name: "Metallic Bonding", strength: "partial" },
      ],
      nextAction: "reinforcement",
      nextActionText: "Complete one reinforcement task before next assignment",
      feedback: {
        wellDone:
          "Excellent understanding of ionic and covalent bonding principles.",
        improve: "Metallic bonding concepts need slight review.",
        reason: "Your 88% demonstrates strong mastery with minor gaps.",
        nextSteps:
          "Review metallic bonding notes and proceed to molecular geometry.",
      },
      canProgress: true,
      reinforcementTask: "Metallic Bonding Quick Review (3 questions)",
    },
    11: {
      score: 65,
      status: "Pass",
      concepts: [
        { name: "Timeline Accuracy", strength: "strong" },
        { name: "Historical Analysis", strength: "partial" },
        { name: "Context Understanding", strength: "partial" },
      ],
      nextAction: "reinforcement",
      nextActionText: "Complete targeted practice before next assignment",
      feedback: {
        wellDone: "Timeline dates and events are accurate and well-organized.",
        improve:
          "Historical analysis lacks depth. Add more context and significance to events.",
        reason:
          "Your 65% shows good factual knowledge but needs deeper analytical thinking.",
        nextSteps:
          "Read the historical analysis guide and practice with 2 sample events.",
      },
      canProgress: true,
      reinforcementTask: "Historical Analysis Practice (2 events)",
    },
  },

  assignmentHistory: {
    3: [
      {
        attemptNumber: 1,
        date: "2026-01-15",
        masteryScore: 85,
        status: "Strong Pass",
        concepts: [
          { name: "Quadratic Equations", strength: "strong" },
          { name: "Factorization", strength: "partial" },
          { name: "Graph Interpretation", strength: "weak" },
        ],
        feedback: {
          strengths: "Good problem-solving approach with quadratic equations.",
          improvements: "Graph interpretation needs more practice.",
        },
        hasResponses: true,
      },
      {
        attemptNumber: 2,
        date: "2026-01-20",
        masteryScore: 92,
        status: "Mastered",
        concepts: [
          { name: "Quadratic Equations", strength: "strong" },
          { name: "Factorization", strength: "strong" },
          { name: "Graph Interpretation", strength: "partial" },
        ],
        feedback: {
          strengths: "Excellent mastery of core algebra concepts.",
          improvements: "Minor improvements in graph interpretation.",
        },
        hasResponses: true,
      },
    ],
    5: [
      {
        attemptNumber: 1,
        date: "2026-01-18",
        masteryScore: 78,
        status: "Strong Pass",
        concepts: [
          { name: "Photosynthesis", strength: "strong" },
          { name: "Cell Structure", strength: "partial" },
          { name: "Enzymes", strength: "strong" },
        ],
        feedback: {
          strengths: "Strong understanding of photosynthesis and enzymes.",
          improvements: "Cell structure details need review.",
        },
        hasResponses: true,
      },
    ],
    6: [
      {
        attemptNumber: 1,
        date: "2026-01-10",
        masteryScore: 48,
        status: "Weak",
        concepts: [
          { name: "Essay Structure", strength: "weak" },
          { name: "Thesis Development", strength: "weak" },
          { name: "Citation Format", strength: "partial" },
        ],
        feedback: {
          strengths: "Basic citation format is present.",
          improvements:
            "Thesis needs clarity, essay structure requires improvement.",
        },
        hasResponses: true,
      },
      {
        attemptNumber: 2,
        date: "2026-01-14",
        masteryScore: 55,
        status: "Weak",
        concepts: [
          { name: "Essay Structure", strength: "partial" },
          { name: "Thesis Development", strength: "weak" },
          { name: "Citation Format", strength: "strong" },
        ],
        feedback: {
          strengths:
            "Citation format improved, essay structure shows progress.",
          improvements: "Thesis development still needs work.",
        },
        hasResponses: true,
      },
    ],
    7: [
      {
        attemptNumber: 1,
        date: "2026-01-12",
        masteryScore: 35,
        status: "Not Mastered",
        concepts: [
          { name: "Trigonometry Basics", strength: "weak" },
          { name: "Angle Calculation", strength: "weak" },
          { name: "Unit Circle", strength: "weak" },
        ],
        feedback: {
          strengths: "Effort shown in attempting all questions.",
          improvements: "Core trigonometry concepts need comprehensive review.",
        },
        hasResponses: true,
      },
    ],
    10: [
      {
        attemptNumber: 1,
        date: "2026-01-22",
        masteryScore: 88,
        status: "Strong Pass",
        concepts: [
          { name: "Ionic Bonding", strength: "strong" },
          { name: "Covalent Bonding", strength: "strong" },
          { name: "Metallic Bonding", strength: "partial" },
        ],
        feedback: {
          strengths: "Excellent grasp of ionic and covalent bonding.",
          improvements: "Metallic bonding needs slight review.",
        },
        hasResponses: true,
      },
    ],
    11: [
      {
        attemptNumber: 1,
        date: "2026-01-25",
        masteryScore: 65,
        status: "Pass",
        concepts: [
          { name: "Timeline Accuracy", strength: "strong" },
          { name: "Historical Analysis", strength: "partial" },
          { name: "Context Understanding", strength: "partial" },
        ],
        feedback: {
          strengths: "Timeline dates and events are accurate.",
          improvements: "Historical analysis needs more depth.",
        },
        hasResponses: true,
      },
    ],
  },

  conceptWeaknessAnalysis: {
    6: [
      // English Essay (Weak)
      {
        concept: "Thesis Development",
        gap: "Lack of Specificity",
        observation:
          "Thesis statements tend to be broad generalizations rather than arguable claims.",
        recommendation:
          'Use the "Though/However" formula to create tension in your argument.',
        action: "Practice: Refine 3 broad thesis statements",
      },
      {
        concept: "Essay Structure",
        gap: "Topic Sentence Alignment",
        observation:
          "Paragraphs often drift from the main point introduced in the topic sentence.",
        recommendation:
          "Ensure every sentence in the body paragraph directly supports the topic sentence.",
        action: "Review: Paragraph Unity Guide",
      },
    ],
    7: [
      // Trigonometry (Not Mastered)
      {
        concept: "Unit Circle",
        gap: "Quadrant-Sign Confusion",
        observation:
          "Consistently misidentifying +/- signs for Sine and Cosine in Quadrants II and III.",
        recommendation:
          'Remember "All Students Take Calculus" (ASTC) mnemonic for signs.',
        action: "Drill: 20 Quadrant Sign Identification problems",
      },
      {
        concept: "Angle Calculation",
        gap: "Reference Angle Calculation",
        observation:
          "Difficulty converting obtuse angles to acute reference angles.",
        recommendation:
          "Visualize the angle to the nearest x-axis (180° or 360°).",
        action: "Practice: Find reference angles for 10 given angles",
      },
    ],
    5: [
      // Biology (Strong Pass - but has partial concept)
      {
        concept: "Cell Structure",
        gap: "Organelle Function Differentiation",
        observation:
          "Confusing functions of Golgi Apparatus and Endoplasmic Reticulum.",
        recommendation:
          "Create a comparison table highlighting synthesis vs. packaging roles.",
        action: "Task: Complete Organelle Match-up Activity",
      },
    ],
  },

  // Chapter Details with Assignments, Quizzes, AI Suggestions
  chapterDetails: {
    default: {
      assignments: [
        { id: 1, name: "Problem Set 1", status: "completed", score: 95 },
        { id: 2, name: "Worksheet Practice", status: "completed", score: 88 },
        {
          id: 3,
          name: "Advanced Problems",
          status: "in-progress",
          score: null,
        },
      ],
      quizzes: [
        { id: 1, name: "Chapter Quiz", status: "completed", score: 92 },
        { id: 2, name: "Practice Test", status: "pending", score: null },
      ],
      aiSuggestions: [
        {
          id: 1,
          type: "Remedial",
          title: "Core Concept Review",
          description:
            "Review the fundamental principles to improve your baseline understanding.",
          icon: "RefreshCw",
          color: "bg-orange-50 border-orange-200 text-orange-700",
          badge: "Needs Attention",
        },
        {
          id: 2,
          type: "Extension",
          title: "Advanced Application",
          description: "Try solving real-world problems using these concepts.",
          icon: "TrendingUp",
          color: "bg-blue-50 border-blue-200 text-blue-700",
          badge: "Recommended",
        },
      ],
      conceptWeaknesses: [
        {
          id: 1,
          topic: "Quadratic Formula",
          weakness: "Sign Errors in Discriminant",
          observation: "Frequent calculation errors when a or c is negative.",
          recommendation:
            "Use parentheses for every substitution: b² - 4(a)(c)",
          fix: "Practice: 5 Discriminant Calcs",
        },
      ],
    },
  },

  recommendedResources: [
    { title: "Advanced Calculus Guide", subject: "MATH", icon: "📐" },
    { title: "Periodic Table Study", subject: "CHEMISTRY", icon: "⚗️" },
    { title: "World History Timeline", subject: "HISTORY", icon: "📜" },
  ],

  communicationMessages: [
    {
      id: 1,
      category: "school",
      from: "Principal's Office",
      subject: "Winter Break Update",
      content:
        "The school will remain closed from Dec 24th to Jan 2nd for winter break. Classes will resume on Jan 3rd. Wishing all students and parents a wonderful holiday season!",
      timestamp: "2026-01-19T09:30:00",
      time: "2 hrs ago",
      unread: true,
      priority: "high",
      requiresAck: true,
      icon: "Building2",
    },
    {
      id: 2,
      category: "teacher",
      from: "Mrs. Davis (English)",
      subject: "Essay Feedback: Improving Thesis Statements",
      content:
        "Hi Alex, I've reviewed your latest essay. Your arguments are strong, but work on refining your thesis statement to be more specific. See the attached comments for details.",
      timestamp: "2026-01-18T14:15:00",
      time: "Yesterday",
      unread: false,
      priority: "medium",
      requiresAck: false,
      icon: "User",
    },
    {
      id: 3,
      category: "private",
      from: "Mr. Sharma (Physics)",
      subject: "Regarding Physics Project",
      content:
        "Alex, please meet me after class to discuss your project proposal. I have some suggestions for the experiment setup.",
      timestamp: "2026-01-15T10:00:00",
      time: "Jan 15",
      unread: true,
      priority: "low",
      requiresAck: false,
      icon: "Lock",
    },
  ],

  examPerformance: {
    average: 82,
    strongest: { subject: "Mathematics", score: 95 },
    weakest: { subject: "History", score: 68 },
    term1Avg: 78,
    term2Avg: 82,
    examHistory: [
      { id: 1, exam: "Mid-Term 1", date: "Oct 2025", score: 78, grade: "B+" },
      { id: 2, exam: "Final Term 1", date: "Dec 2025", score: 81, grade: "A-" },
      { id: 3, exam: "Unit Test 1", date: "Jan 2026", score: 85, grade: "A" },
    ],
  },

  gradesTeacherInsights: [
    {
      teacher: "Mr. Sharma",
      subject: "Mathematics",
      insight:
        "Alex is showing consistent improvement in calculus. Needs to focus more on probability.",
      date: "Jan 15, 2026",
    },
    {
      teacher: "Mrs. Davis",
      subject: "English",
      insight:
        "Great creativity in writing assignments. Grammar usage has improved significantly.",
      date: "Jan 12, 2026",
    },
  ],

  libraryData: {
    issuedBooks: [
      {
        id: 1,
        title: "Advanced Physics Concepts",
        author: "H.C. Verma",
        issueDate: "2026-01-15",
        dueDate: "2026-01-29",
        cover: "https://covers.openlibrary.org/b/id/8259443-M.jpg",
        status: "Overdue",
        fine: 15,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        issueDate: "2026-01-20",
        dueDate: "2026-02-03",
        cover: "https://covers.openlibrary.org/b/id/12632205-M.jpg",
        status: "Active",
        fine: 0,
      },
    ],
    borrowingHistory: [
      {
        id: 101,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        returnedDate: "2025-12-15",
        status: "Returned",
      },
      {
        id: 102,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        returnedDate: "2025-11-20",
        status: "Returned",
      },
    ],
    stats: {
      booksRead: 12,
      currentLoans: 2,
      fineDue: 15,
      totalVisits: 45,
    },
  },

  profileActivityLog: [
    { id: 1, action: "Login", time: "Today, 09:00 AM", ip: "192.168.1.10" },
    {
      id: 2,
      action: "Submitted Assignment",
      time: "Yesterday, 02:30 PM",
      ip: "192.168.1.10",
    },
    {
      id: 3,
      action: "Updated Profile",
      time: "Jan 10, 11:15 AM",
      ip: "192.168.1.10",
    },
  ],

  supportFaqs: [
    {
      id: 1,
      question: "How do I start a new assignment?",
      category: "Academic",
      answer:
        "Go to the Assignments tab, click on the assignment card, and press 'Start'. Ensure you submit before the due date.",
    },
    {
      id: 2,
      question: "My grade isn't updating after submission.",
      category: "Academic",
      answer:
        "Grades may take up to 24 hours to sync after teacher approval. If it takes longer, please raise a ticket.",
    },
    {
      id: 3,
      question: "Where can I find the exam syllabus?",
      category: "Academic",
      answer:
        "The syllabus is available in the 'Resources' section under each subject folder, or directly on the Exam Dashboard.",
    },
    {
      id: 4,
      question: "How do I request a re-evaluation?",
      category: "Academic",
      answer:
        "You can request a re-evaluation within 3 days of result declaration via the 'Grades' page.",
    },
    {
      id: 5,
      question: "I can't log in to the library portal.",
      category: "Technical",
      answer:
        "Ensure you are using your student ID (e.g., S-2023-XXX). Reset your password in Settings if the issue persists.",
    },
    {
      id: 6,
      question: "How to connect to school WiFi?",
      category: "Technical",
      answer:
        "Use network 'School_Student' and your student credentials. If it fails, forget the network and try again.",
    },
    {
      id: 7,
      question: "My profile picture isn't uploading.",
      category: "Technical",
      answer:
        "Please ensure the image file is under 2MB and in JPG or PNG format.",
    },
    {
      id: 8,
      question: "Tablet/Laptop not syncing with projector.",
      category: "Technical",
      answer:
        "For screen mirroring issues, ensure both devices are on the same 'Classroom' network.",
    },
    {
      id: 9,
      question: "I feel overwhelmed with exam stress.",
      category: "Wellness",
      answer:
        "It's okay to feel this way. Visit the Wellness Corner to book a session with our counselor or try our breathing exercises.",
    },
    {
      id: 10,
      question: "How to manage study time better?",
      category: "Wellness",
      answer:
        "Check out the 'Study Tips' in your Analytics dashboard or speak to a student mentor for a personalized schedule.",
    },
    {
      id: 11,
      question: "Who can I talk to about bullying?",
      category: "Wellness",
      answer:
        "We have a zero-tolerance policy. Please reach out to the Counselor directly or submit an anonymous report via the 'Request Help' tab.",
    },
    {
      id: 12,
      question: "I'm having trouble sleeping due to anxiety.",
      category: "Wellness",
      answer:
        "Our Wellness Corner has guided sleep meditations. If it persists, please book a chat with the school counselor.",
    },
  ],
  // Screen 10: Library Account
  libraryData: {
    currentLoans: [
      {
        id: 1,
        bookTitle: "A Brief History of Time",
        author: "Stephen Hawking",
        issueDate: "2026-01-10",
        dueDate: "2026-01-24",
        status: "overdue",
        daysOverdue: 6,
      },
      {
        id: 2,
        bookTitle: "To Kill a Mockingbird",
        author: "Harper Lee",
        issueDate: "2026-01-20",
        dueDate: "2026-02-03",
        status: "normal",
        daysRemaining: 4,
      },
    ],
    borrowingHistory: [
      {
        id: 101,
        bookTitle: "1984",
        issueDate: "2025-12-01",
        returnDate: "2025-12-15",
        status: "returnedOnTime",
      },
      {
        id: 102,
        bookTitle: "The Great Gatsby",
        issueDate: "2025-11-10",
        returnDate: "2025-11-26",
        status: "returnedLate",
      },
    ],
  },

  // Screen 12: Help & Support (Simple Version)
  helpAndSupport: {
    options: [
      {
        id: 1,
        title: "Browse FAQs",
        description:
          "Find answers to common questions about exams, fees, and login issues.",
        icon: "HelpCircle",
        color: "blue",
      },
      {
        id: 2,
        title: "Raise a Ticket",
        description:
          "Report a technical problem or academic concern to the administration.",
        icon: "MessageCircle",
        color: "purple",
      },
    ],
    concerns: {
      title: "Wellness Helpline",
      description:
        "Feeling stressed or anxious? Talk to our counselors confidentially.",
      action: "Chat with Counselor",
    },
  },

  // Screen 9: Tasks
  tasks: [
    {
      id: 1,
      title: "Complete Math Worksheet",
      dueDate: "Today, 5:00 PM",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Read Chapter 4: History",
      dueDate: "Tomorrow",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "Submit Science Project Proposal",
      dueDate: "Jan 15",
      status: "completed",
      priority: "high",
    },
  ],

  // Screen 1: Attendance Context
  attendanceContext: {
    currentMonth: "January 2026",
    daysInMonth: 31,
    heatmapStart: "2026-01-",
  },

  // Analytics Focus Area
  analyticsFocusArea: {
    subject: "Chemistry",
    score: 78,
    message:
      "Your Chemistry score (78%) is slightly below your average. Consistent revision of organic compounds is recommended this week.",
    color: "orange",
  },
};
