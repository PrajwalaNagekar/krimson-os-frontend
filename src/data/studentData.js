export const STUDENT_DATA = {
  user: {
    name: "Alex Johnson",
    role: "Grade 10 Student",
    id: "S-2026-1054",
    section: "10-B",
    avatar: "https://i.pravatar.cc/150?img=12",
    house: "Red House",
    attendance: "94%",
    about:
      "I am a passionate learner interested in Physics and Computer Science. I love building things and solving complex problems.",
    skills: ["Physics", "Coding", "Debate", "Robotics"],
    goals: [
      "Achieve 95%+ in Physics",
      "Win National Science Olympiad",
      "Master Python Programming",
      "Publish research paper",
    ],
    interests: [
      "Quantum Physics",
      "Machine Learning",
      "Robotics",
      "Space Exploration",
      "Environmental Science",
    ],
    joinedClubs: [
      {
        id: 1,
        name: "Robotics Club",
        category: "STEM",
        role: "Member",
        joinedDate: "2025-09-01",
      },
      {
        id: 2,
        name: "Debate Society",
        category: "Arts & Culture",
        role: "Active Member",
        joinedDate: "2025-09-15",
      },
    ],
    joinedGroups: [
      { id: 1, name: "Grade 10 Class Group", role: "Member" },
      { id: 2, name: "Red House Team", role: "Member" },
    ],
    availableClubs: [
      {
        id: 1,
        name: "Robotics Club",
        category: "STEM",
        description:
          "Build and program robots, participate in competitions, and explore automation and AI.",
        members: 45,
      },
      {
        id: 2,
        name: "Debate Society",
        category: "Arts & Culture",
        description:
          "Develop critical thinking and public speaking skills through structured debates.",
        members: 30,
      },
      {
        id: 3,
        name: "Science Club",
        category: "STEM",
        description:
          "Conduct experiments, attend science fairs, and explore various scientific fields.",
        members: 50,
      },
      {
        id: 4,
        name: "Coding Club",
        category: "STEM",
        description:
          "Learn programming languages, participate in hackathons, and build software projects.",
        members: 38,
      },
      {
        id: 5,
        name: "Drama Club",
        category: "Arts & Culture",
        description:
          "Perform in plays, develop acting skills, and explore theatrical production.",
        members: 25,
      },
      {
        id: 6,
        name: "Environmental Club",
        category: "Environment",
        description:
          "Work on sustainability projects, organize clean-ups, and promote environmental awareness.",
        members: 28,
      },
      {
        id: 7,
        name: "Chess Club",
        category: "Sports & Games",
        description:
          "Learn chess strategies, participate in tournaments, and improve logical thinking.",
        members: 20,
      },
      {
        id: 8,
        name: "Art Club",
        category: "Arts & Culture",
        description:
          "Explore various art mediums, create artwork, and participate in exhibitions.",
        members: 32,
      },
      {
        id: 9,
        name: "Music Band",
        category: "Arts & Culture",
        description:
          "Play instruments, perform at events, and collaborate on musical compositions.",
        members: 22,
      },
      {
        id: 10,
        name: "Astronomy Club",
        category: "STEM",
        description:
          "Study celestial objects, use telescopes, and learn about space exploration.",
        members: 18,
      },
    ],
    email: "alex.johnson@school.edu",
    phone: "+1 (555) 123-4567",

    // Skill Badges
    earnedSkills: [
      {
        id: 1,
        name: "Python Programming",
        category: "Technical",
        proficiency: 75,
        level: "Advanced",
        earnedDate: "2025-10-15",
        icon: "💻",
        description: "Proficient in Python for data analysis and automation",
      },
      {
        id: 2,
        name: "Robotic Assembly",
        category: "Technical",
        proficiency: 65,
        level: "Intermediate",
        earnedDate: "2025-09-20",
        icon: "🤖",
        description: "Build and program robots for competitions",
      },
      {
        id: 3,
        name: "Public Speaking",
        category: "Leadership",
        proficiency: 80,
        level: "Advanced",
        earnedDate: "2025-11-05",
        icon: "🎤",
        description: "Confident speaker in debates and presentations",
      },
      {
        id: 4,
        name: "Research Methods",
        category: "Academic",
        proficiency: 70,
        level: "Advanced",
        earnedDate: "2025-08-30",
        icon: "🔬",
        description: "Design and conduct scientific research",
      },
      {
        id: 5,
        name: "Data Visualization",
        category: "Technical",
        proficiency: 60,
        level: "Intermediate",
        earnedDate: "2025-12-10",
        icon: "📊",
        description: "Create charts and graphs to present data",
      },
      {
        id: 6,
        name: "Team Leadership",
        category: "Leadership",
        proficiency: 85,
        level: "Expert",
        earnedDate: "2025-07-15",
        icon: "👥",
        description: "Lead and motivate team members effectively",
      },
      {
        id: 7,
        name: "Critical Thinking",
        category: "Academic",
        proficiency: 78,
        level: "Advanced",
        earnedDate: "2025-10-01",
        icon: "🧠",
        description: "Analyze complex problems and develop solutions",
      },
      {
        id: 8,
        name: "Digital Design",
        category: "Creative",
        proficiency: 50,
        level: "Intermediate",
        earnedDate: "2025-11-20",
        icon: "🎨",
        description: "Create digital artwork and graphics",
      },
    ],

    recommendedSkills: [
      {
        id: 10,
        name: "Machine Learning Basics",
        category: "Technical",
        reason: "Based on your Python skills and AI interests",
        icon: "🤖",
        difficulty: "Intermediate",
      },
      {
        id: 11,
        name: "Arduino Programming",
        category: "Technical",
        reason: "Complement your robotics knowledge",
        icon: "⚡",
        difficulty: "Beginner",
      },
      {
        id: 12,
        name: "Scientific Writing",
        category: "Academic",
        reason: "Perfect for publishing research papers",
        icon: "📝",
        difficulty: "Intermediate",
      },
      {
        id: 13,
        name: "3D Modeling",
        category: "Creative",
        reason: "Enhance your robotics and design projects",
        icon: "🎲",
        difficulty: "Intermediate",
      },
      {
        id: 14,
        name: "Debate Strategy",
        category: "Leadership",
        reason: "Build on your public speaking skills",
        icon: "⚖️",
        difficulty: "Advanced",
      },
    ],
    achievements: [
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
        description: "10+ modules completed",
      },
      {
        id: 4,
        title: "Team Player",
        icon: "🤝",
        color: "green",
        description: "Group project excellence",
      },
      {
        id: 5,
        title: "Science Star",
        icon: "🌟",
        color: "purple",
        description: "Science Fair Winner",
      },
      {
        id: 6,
        title: "Top Performer",
        icon: "🏆",
        color: "gold",
        description: "Class Rank #3",
      },
    ],
    leaderboard: {
      classRank: 3,
      gradeRank: 15,
      totalStudents: 120,
      points: 2450,
    },

    // Health Notes (Limited View)
    healthNotes: {
      bloodGroup: "O+",
      height: "5'8\"",
      weight: "65 kg",
      allergies: ["Peanuts", "Dust"],
      chronicConditions: [],
      lastCheckupDate: "2025-12-15",
      vaccinations: [
        {
          id: 1,
          name: "COVID-19 Booster",
          date: "2025-11-20",
          status: "completed",
        },
        {
          id: 2,
          name: "Flu Shot",
          date: "2025-10-05",
          status: "completed",
        },
      ],
      emergencyContact: {
        name: "Sarah Johnson (Mother)",
        relationship: "Parent",
        phone: "+1 (555) 123-4567",
      },
      physicalActivitiesRestrictions: "None",
      note: "Limited health information is displayed for privacy. Full medical records are maintained by school nurse and available to authorized personnel only.",
    },
  },

  // Activity Log
  profileActivityLog: {
    recentActivity: [
      {
        id: 1,
        action: "Logged in",
        time: "2026-02-02 09:30 AM",
        ip: "192.168.1.1",
      },
      {
        id: 2,
        action: "Submitted Assignment",
        time: "2026-02-01 02:15 PM",
        ip: "192.168.1.1",
      },
      {
        id: 3,
        action: "Updated Profile",
        time: "2026-01-30 11:00 AM",
        ip: "192.168.1.1",
      },
      {
        id: 4,
        action: "Password Changed",
        time: "2026-01-15 10:00 AM",
        ip: "192.168.1.1",
      },
      {
        id: 5,
        action: "Logged in",
        time: "2026-01-14 09:00 AM",
        ip: "192.168.1.1",
      },
    ],
  },

  // Portfolio Data
  portfolio: {
    projects: [
      {
        id: 1,
        title: "Eco-Friendly Smart Home",
        type: "Project",
        date: "2025-11-15",
        thumbnail:
          "https://images.unsplash.com/photo-1558002038-1091a166111c?w=500&auto=format&fit=crop&q=60",
        tags: ["Science", "Sustainability"],
        showcase: true,
      },
      {
        id: 2,
        title: "History of Rome Timeline",
        type: "Project",
        date: "2025-10-20",
        thumbnail:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60",
        tags: ["History", "Research"],
        showcase: false,
      },
    ],
    labs: [
      {
        id: 3,
        title: "Optics & Light Refraction",
        type: "Lab",
        date: "2026-01-10",
        thumbnail:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60",
        tags: ["Physics", "Lab Work"],
        showcase: true,
      },
    ],
    assessments: [
      {
        id: 4,
        title: "Mid-Term Mathematics",
        type: "Assessment",
        date: "2025-12-10",
        thumbnail:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60",
        tags: ["Math", "Grade A"],
        showcase: true,
      },
    ],
    cca: [
      {
        id: 5,
        title: "Debate Championship Winner",
        type: "Achievement",
        date: "2025-09-05",
        thumbnail:
          "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500&auto=format&fit=crop&q=60",
        tags: ["Extra Curricular", "Public Speaking"],
        showcase: true,
      },
    ],
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

  // Class Details for Timetable (Current Topic, Latest Post, Upcoming Work, Key Resources)
  classDetails: {
    // Monday Classes
    "Math-1-Monday": {
      currentTopic: "Quadratic Equations and Graphing Parabolas",
      latestPost: {
        message:
          "Great work on today's practice problems! Remember to review the vertex form before our next class.",
        time: "2 hours ago",
      },
      upcomingWork: [
        {
          title: "Trigonometry Worksheet",
          dueDate: "Today 5:00 PM",
          type: "assignment",
          priority: "high",
        },
        {
          title: "Chapter 4 Quiz - Quadratics",
          dueDate: "Tomorrow 9:00 AM",
          type: "quiz",
          priority: "medium",
        },
      ],
      keyResources: [
        {
          title: "Quadratic Equations Guide",
          type: "document",
          icon: "📄",
          url: "#",
        },
        {
          title: "Practice Problems Set",
          type: "worksheet",
          icon: "📝",
          url: "#",
        },
        {
          title: "Khan Academy - Quadratics",
          type: "video",
          icon: "🎥",
          url: "#",
        },
        {
          title: "Graphing Calculator Tool",
          type: "tool",
          icon: "🔧",
          url: "#",
        },
      ],
    },
    "English-2-Monday": {
      currentTopic: "Shakespeare - Romeo & Juliet Act 3 Analysis",
      latestPost: {
        message:
          "The essay submissions were impressive! Remember that our group discussion on themes is scheduled for next week.",
        time: "3 hours ago",
      },
      upcomingWork: [
        {
          title: "Essay on Romeo & Juliet",
          dueDate: "Tomorrow 11:59 PM",
          type: "essay",
          priority: "high",
        },
        {
          title: "Reading - Act 4 & 5",
          dueDate: "Wednesday",
          type: "reading",
          priority: "medium",
        },
      ],
      keyResources: [
        {
          title: "Romeo & Juliet Full Text",
          type: "document",
          icon: "📖",
          url: "#",
        },
        {
          title: "Character Analysis Notes",
          type: "document",
          icon: "📄",
          url: "#",
        },
        {
          title: "Literary Devices Guide",
          type: "reference",
          icon: "📚",
          url: "#",
        },
        { title: "BBC Shakespeare Video", type: "video", icon: "🎥", url: "#" },
      ],
    },
    "Physics-3-Monday": {
      currentTopic: "Optics - Refraction and Lens Experiments",
      latestPost: {
        message:
          "Lab safety reminder: Please bring your safety goggles for tomorrow's practical session on lenses.",
        time: "1 hour ago",
      },
      upcomingWork: [
        {
          title: "Lab Report - Optics Experiment",
          dueDate: "Wednesday 11:59 PM",
          type: "lab report",
          priority: "high",
        },
        {
          title: "Unit Test - Waves & Optics",
          dueDate: "Friday",
          type: "test",
          priority: "urgent",
        },
      ],
      keyResources: [
        { title: "Optics Lab Manual", type: "document", icon: "📄", url: "#" },
        {
          title: "Refraction Simulation",
          type: "interactive",
          icon: "🔬",
          url: "#",
        },
        { title: "Ray Diagrams Tutorial", type: "video", icon: "🎥", url: "#" },
        {
          title: "Physics Formula Sheet",
          type: "reference",
          icon: "📋",
          url: "#",
        },
      ],
    },
    "Chemistry-4-Monday": {
      currentTopic: "Organic Chemistry - Functional Groups and Nomenclature",
      latestPost: {
        message:
          "Don't forget to review the IUPAC naming conventions we discussed. Practice makes perfect!",
        time: "30 minutes ago",
      },
      upcomingWork: [
        {
          title: "Organic Chemistry Assignment",
          dueDate: "Thursday",
          type: "assignment",
          priority: "medium",
        },
        {
          title: "Group Project Presentation",
          dueDate: "Next Monday",
          type: "project",
          priority: "high",
        },
      ],
      keyResources: [
        {
          title: "Functional Groups Chart",
          type: "reference",
          icon: "📊",
          url: "#",
        },
        { title: "IUPAC Naming Guide", type: "document", icon: "📄", url: "#" },
        {
          title: "Organic Chemistry 3D Models",
          type: "interactive",
          icon: "🧪",
          url: "#",
        },
        {
          title: "Practice Questions",
          type: "worksheet",
          icon: "📝",
          url: "#",
        },
      ],
    },

    // Tuesday Classes
    "Chemistry-1-Tuesday": {
      currentTopic: "Chemical Bonding - Ionic and Covalent Structures",
      latestPost: {
        message:
          "Today's lab on ionic compounds was excellent! Make sure to complete your lab reports by Friday.",
        time: "5 hours ago",
      },
      upcomingWork: [
        {
          title: "Chemical Bonding Lab Report",
          dueDate: "Friday",
          type: "lab report",
          priority: "high",
        },
        {
          title: "Bonding Quiz",
          dueDate: "Next Tuesday",
          type: "quiz",
          priority: "medium",
        },
      ],
      keyResources: [
        {
          title: "Bonding Theory Notes",
          type: "document",
          icon: "📄",
          url: "#",
        },
        {
          title: "Lewis Structure Tutorial",
          type: "video",
          icon: "🎥",
          url: "#",
        },
        {
          title: "Periodic Table Interactive",
          type: "interactive",
          icon: "🔬",
          url: "#",
        },
        { title: "Practice Problems", type: "worksheet", icon: "📝", url: "#" },
      ],
    },
    "History-2-Tuesday": {
      currentTopic: "World War II - Major Battles and Turning Points",
      latestPost: {
        message:
          "Your timeline projects are due next week. Remember to include primary sources and detailed analysis.",
        time: "4 hours ago",
      },
      upcomingWork: [
        {
          title: "WWII Timeline Project",
          dueDate: "Next Monday",
          type: "project",
          priority: "high",
        },
        {
          title: "Chapter 8 Reading",
          dueDate: "Thursday",
          type: "reading",
          priority: "medium",
        },
      ],
      keyResources: [
        {
          title: "WWII Documentary Series",
          type: "video",
          icon: "🎥",
          url: "#",
        },
        {
          title: "Primary Sources Collection",
          type: "document",
          icon: "📚",
          url: "#",
        },
        {
          title: "Interactive WWII Map",
          type: "interactive",
          icon: "🗺️",
          url: "#",
        },
        { title: "Timeline Template", type: "worksheet", icon: "📝", url: "#" },
      ],
    },
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

  // Screen 8: Communication Hub - Messages with Priority \u0026 Expiry
  communicationMessages: [
    {
      id: 1,
      from: "Principal Office",
      subject: "Parent-Teacher Meeting",
      content:
        "Mandatory parent-teacher meeting scheduled for all grade 10 students. Please inform your parents to attend on February 5th, 2026 at 10:00 AM in the main auditorium. Attendance is compulsory.",
      time: "2 hrs ago",
      timestamp: "2026-02-02T08:00:00",
      category: "school",
      icon: "Building2",
      priority: "high",
      isPinned: true,
      unread: true,
      requiresAck: true,
      expiryDate: "2026-02-05T23:59:59",
    },
    {
      id: 2,
      from: "Exam Department",
      subject: "Mid-Term Examination Schedule",
      content:
        "Mid-term examinations will commence from February 10th, 2026. The detailed schedule has been uploaded to your portal. Please check the exam section for venue and timing details.",
      time: "5 hrs ago",
      timestamp: "2026-02-02T05:00:00",
      category: "school",
      icon: "Building2",
      priority: "high",
      isPinned: true,
      unread: true,
      requiresAck: true,
      expiryDate: "2026-02-10T23:59:59",
    },
    {
      id: 3,
      from: "Mrs. Davis (English)",
      subject: "Shakespeare Workshop",
      content:
        "Join us for an exciting Shakespeare workshop this Saturday! We'll be analyzing Romeo & Juliet and performing selected scenes. Great opportunity to improve your literature understanding.",
      time: "1 day ago",
      timestamp: "2026-02-01T14:30:00",
      category: "teacher",
      icon: "BookOpen",
      subjectCode: "ENG-10-B",
      priority: "normal",
      isPinned: false,
      unread: true,
      requiresAck: false,
      expiryDate: "2026-02-08T23:59:59",
    },
    {
      id: 4,
      from: "Mr. Sharma (Physics)",
      subject: "Lab Report Submission Reminder",
      content:
        "This is a reminder to submit your Physics lab reports on Newton's Laws by tomorrow 5 PM. Late submissions will incur penalty. Make sure to include all diagrams and calculations.",
      time: "1 day ago",
      timestamp: "2026-02-01T10:00:00",
      category: "teacher",
      icon: "BookOpen",
      subjectCode: "PHY-10-B",
      priority: "urgent",
      isPinned: true,
      unread: false,
      requiresAck: true,
      expiryDate: "2026-02-03T17:00:00",
    },
    {
      id: 5,
      from: "Sports Department",
      subject: "Annual Sports Day Registration",
      content:
        "Registration for Annual Sports Day 2026 is now open! Choose from athletics, basketball, cricket, and many more events. Register before Feb 15th to secure your spot.",
      time: "2 days ago",
      timestamp: "2026-01-31T09:00:00",
      category: "school",
      icon: "Building2",
      priority: "normal",
      isPinned: false,
      unread: false,
      requiresAck: false,
      expiryDate: "2026-02-15T23:59:59",
    },
    {
      id: 6,
      from: "Ms. Kumar (Mathematics)",
      subject: "Extra Classes Announcement",
      content:
        "I'm conducting extra classes for Quadratic Equations this week. Sessions will be held on Wednesday and Friday from 4-5 PM in Room 201. All students are welcome!",
      time: "2 days ago",
      timestamp: "2026-01-31T08:00:00",
      category: "teacher",
      icon: "BookOpen",
      subjectCode: "MATH-10-B",
      priority: "normal",
      isPinned: false,
      unread: false,
      requiresAck: false,
      expiryDate: "2026-02-07T23:59:59",
    },
    {
      id: 7,
      from: "Counselor Ms. Reddy",
      subject: "Career Guidance Session",
      content:
        "Individual career counseling sessions are available this month. If you'd like to discuss your future academic and career plans, please book a slot through the support section.",
      time: "3 days ago",
      timestamp: "2026-01-30T11:00:00",
      category: "private",
      icon: "User",
      priority: "low",
      isPinned: false,
      unread: false,
      requiresAck: false,
      expiryDate: "2026-02-28T23:59:59",
    },
    {
      id: 8,
      from: "Library Department",
      subject: "New Books Arrived",
      content:
        "We've added 50+ new books to our collection including latest science fiction, academic references, and competitive exam preparation materials. Visit the library to explore!",
      time: "4 days ago",
      timestamp: "2026-01-29T10:00:00",
      category: "school",
      icon: "Building2",
      priority: "low",
      isPinned: false,
      unread: false,
      requiresAck: false,
      expiryDate: "2026-03-01T23:59:59",
    },
    {
      id: 9,
      from: "Dr. Patel (Chemistry)",
      subject: "Chemistry Practical Rescheduled",
      content:
        "Tomorrow's chemistry practical on organic compounds has been rescheduled to Thursday 11 AM due to lab maintenance. Please bring your lab coats and safety goggles.",
      time: "5 days ago",
      timestamp: "2026-01-28T15:00:00",
      category: "teacher",
      icon: "BookOpen",
      subjectCode: "CHEM-10-B",
      priority: "urgent",
      isPinned: false,
      unread: false,
      requiresAck: true,
      expiryDate: "2026-02-06T23:59:59",
    },
    {
      id: 10,
      from: "Student Council",
      subject: "Valentine's Day Fundraiser",
      content:
        "Student Council is organizing a Valentine's Day charity fundraiser! All proceeds will go to local community development. Support the cause and join us for fun activities!",
      time: "1 week ago",
      timestamp: "2026-01-26T12:00:00",
      category: "school",
      icon: "Building2",
      priority: "low",
      isPinned: false,
      unread: false,
      requiresAck: false,
      expiryDate: "2026-02-14T23:59:59",
    },
    {
      id: 11,
      from: "Fee Department",
      subject: "Term 2 Fee Payment Reminder",
      content:
        "This is a gentle reminder that Term 2 fees are due by January 31st, 2026. Please clear your dues to avoid late payment charges. Payment can be made online or at the accounts office.",
      time: "1 week ago",
      timestamp: "2026-01-25T09:00:00",
      category: "school",
      icon: "Building2",
      priority: "high",
      isPinned: false,
      unread: false,
      requiresAck: true,
      expiryDate: "2026-01-31T23:59:59",
    },
  ],

  // Screen 8: Groups - WhatsApp-style group communications
  groups: [
    {
      id: 1,
      name: "Class 10-B",
      type: "class",
      memberCount: 42,
      avatar: "👥",
      description: "Main class group for announcements and discussions",
      lastMessage: {
        sender: "Rahul Sharma",
        content: "Did anyone complete the physics assignment?",
        timestamp: "2026-02-02T13:30:00",
        time: "1 hr ago",
      },
      unreadCount: 5,
      messages: [
        {
          id: 1,
          sender: "Priya Patel",
          content: "Anyone have notes for chemistry chapter 5?",
          timestamp: "2026-02-02T10:00:00",
          time: "10:00 AM",
          isOwn: false,
          status: "read",
        },
        {
          id: 2,
          sender: "You",
          content: "Yes, I have them. I'll share after school.",
          timestamp: "2026-02-02T10:15:00",
          time: "10:15 AM",
          isOwn: true,
          status: "read",
        },
        {
          id: 3,
          sender: "Arjun Singh",
          content: "Thanks! That would be really helpful.",
          timestamp: "2026-02-02T10:20:00",
          time: "10:20 AM",
          isOwn: false,
          status: "read",
        },
        {
          id: 4,
          sender: "Sneha Gupta",
          content: "Don't forget the math quiz tomorrow!",
          timestamp: "2026-02-02T12:00:00",
          time: "12:00 PM",
          isOwn: false,
          status: "read",
        },
        {
          id: 5,
          sender: "Rahul Sharma",
          content: "Did anyone complete the physics assignment?",
          timestamp: "2026-02-02T13:30:00",
          time: "1:30 PM",
          isOwn: false,
          status: "delivered",
        },
      ],
    },
    {
      id: 2,
      name: "Science Club",
      type: "club",
      memberCount: 15,
      avatar: "🔬",
      description: "Science enthusiasts and project collaborators",
      lastMessage: {
        sender: "Ms. Kumar",
        content: "Science fair meeting at 4 PM today",
        timestamp: "2026-02-02T11:00:00",
        time: "3 hrs ago",
      },
      unreadCount: 2,
      messages: [
        {
          id: 1,
          sender: "Ms. Kumar",
          content: "Great work on your projects everyone! Keep it up.",
          timestamp: "2026-02-02T09:00:00",
          time: "9:00 AM",
          isOwn: false,
          status: "read",
        },
        {
          id: 2,
          sender: "Vikram Reddy",
          content: "When is the next meeting?",
          timestamp: "2026-02-02T09:30:00",
          time: "9:30 AM",
          isOwn: false,
          status: "read",
        },
        {
          id: 3,
          sender: "Ms. Kumar",
          content: "Science fair meeting at 4 PM today",
          timestamp: "2026-02-02T11:00:00",
          time: "11:00 AM",
          isOwn: false,
          status: "delivered",
        },
      ],
    },
    {
      id: 3,
      name: "Math Study Group",
      type: "study",
      memberCount: 8,
      avatar: "📐",
      description: "Collaborative math problem solving",
      lastMessage: {
        sender: "You",
        content: "I figured out problem 12! Want me to explain?",
        timestamp: "2026-02-01T16:45:00",
        time: "Yesterday",
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          sender: "Ananya Desai",
          content: "Problem 12 is really tough! Anyone solved it?",
          timestamp: "2026-02-01T15:00:00",
          time: "Yesterday 3:00 PM",
          isOwn: false,
          status: "read",
        },
        {
          id: 2,
          sender: "Karan Mehta",
          content: "Still working on it. The quadratic part is confusing.",
          timestamp: "2026-02-01T15:30:00",
          time: "Yesterday 3:30 PM",
          isOwn: false,
          status: "read",
        },
        {
          id: 3,
          sender: "You",
          content: "I figured out problem 12! Want me to explain?",
          timestamp: "2026-02-01T16:45:00",
          time: "Yesterday 4:45 PM",
          isOwn: true,
          status: "read",
        },
      ],
    },
    {
      id: 4,
      name: "Football Team",
      type: "sports",
      memberCount: 22,
      avatar: "⚽",
      description: "School football team coordination",
      lastMessage: {
        sender: "Coach Williams",
        content: "Practice tomorrow at 7 AM sharp!",
        timestamp: "2026-02-01T18:00:00",
        time: "Yesterday",
      },
      unreadCount: 1,
      messages: [
        {
          id: 1,
          sender: "Coach Williams",
          content: "Great game today team! Excellent teamwork.",
          timestamp: "2026-02-01T17:00:00",
          time: "Yesterday 5:00 PM",
          isOwn: false,
          status: "read",
        },
        {
          id: 2,
          sender: "Captain Rohan",
          content: "Thanks coach! Everyone played well.",
          timestamp: "2026-02-01T17:15:00",
          time: "Yesterday 5:15 PM",
          isOwn: false,
          status: "read",
        },
        {
          id: 3,
          sender: "Coach Williams",
          content: "Practice tomorrow at 7 AM sharp!",
          timestamp: "2026-02-01T18:00:00",
          time: "Yesterday 6:00 PM",
          isOwn: false,
          status: "delivered",
        },
      ],
    },
    {
      id: 5,
      name: "Debate Society",
      type: "club",
      memberCount: 12,
      avatar: "🎤",
      description: "Debate practice and competition updates",
      lastMessage: {
        sender: "Sarah Khan",
        content: "Topic for Friday's debate: Climate Change Solutions",
        timestamp: "2026-02-01T14:00:00",
        time: "Yesterday",
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          sender: "Mr. Patel",
          content: "Remember to prepare your arguments for the next session.",
          timestamp: "2026-02-01T10:00:00",
          time: "Yesterday 10:00 AM",
          isOwn: false,
          status: "read",
        },
        {
          id: 2,
          sender: "Sarah Khan",
          content: "Topic for Friday's debate: Climate Change Solutions",
          timestamp: "2026-02-01T14:00:00",
          time: "Yesterday 2:00 PM",
          isOwn: false,
          status: "read",
        },
      ],
    },
  ],

  // Screen 8: Communication (Legacy)
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

    // Pillar Activity Views - Six Key Domains
    pillarActivities: {
      // Pillar overview stats
      totalPillarActivities: 24,
      pillarStats: [
        { pillar: "Imaginarium", count: 4, points: 45, icon: "🎨" },
        { pillar: "Literary", count: 4, points: 40, icon: "📚" },
        { pillar: "Science & Astronomy", count: 4, points: 50, icon: "🔬" },
        { pillar: "Leadership & Service", count: 4, points: 55, icon: "🤝" },
        { pillar: "Sports & Wellness", count: 4, points: 60, icon: "⚽" },
        { pillar: "Music & Dance", count: 4, points: 35, icon: "🎵" },
      ],

      // Detailed activities by pillar
      imaginarium: [
        {
          id: 1,
          title: "Digital Art Creation Workshop",
          description:
            "Created digital illustrations using advanced graphic design tools and techniques",
          date: "2026-01-18",
          duration: "3 days",
          points: 15,
          level: "Advanced",
          mentors: ["Ms. Sarah Chen", "Mr. David Park"],
          skills: ["Digital Design", "Creativity", "Visual Communication"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 2,
          title: "3D Modeling Challenge",
          description:
            "Designed and rendered 3D models for a sustainable city project",
          date: "2025-12-20",
          duration: "1 week",
          points: 12,
          level: "Intermediate",
          mentors: ["Mr. Alex Turner"],
          skills: ["3D Modeling", "Problem Solving", "Innovation"],
          status: "completed",
          certificate: false,
          showcase: true,
        },
        {
          id: 3,
          title: "Creative Photography Exhibition",
          description: "Captured and curated a photo series on 'Urban Nature'",
          date: "2025-11-15",
          duration: "2 weeks",
          points: 10,
          level: "Beginner",
          mentors: ["Ms. Rachel Green"],
          skills: ["Photography", "Artistic Vision", "Curation"],
          status: "completed",
          certificate: true,
          showcase: false,
        },
        {
          id: 4,
          title: "Innovation Hackathon",
          description:
            "Developed creative solutions for school sustainability challenges",
          date: "2025-10-10",
          duration: "2 days",
          points: 8,
          level: "Intermediate",
          mentors: ["Dr. James Wilson"],
          skills: ["Innovation", "Teamwork", "Design Thinking"],
          status: "completed",
          certificate: false,
          showcase: true,
        },
      ],

      literary: [
        {
          id: 5,
          title: "Poetry Slam Competition",
          description: "Performed original poetry on social justice themes",
          date: "2026-01-12",
          duration: "1 day",
          points: 12,
          level: "Advanced",
          mentors: ["Mrs. Emma Thompson"],
          skills: ["Creative Writing", "Public Speaking", "Expression"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 6,
          title: "School Magazine Editorial Team",
          description:
            "Served as editor for the quarterly school literary magazine",
          date: "2025-12-01",
          duration: "3 months",
          points: 15,
          level: "Advanced",
          mentors: ["Mr. Robert Brown"],
          skills: ["Editing", "Leadership", "Content Creation"],
          status: "in-progress",
          certificate: false,
          showcase: true,
        },
        {
          id: 7,
          title: "Book Club Leadership",
          description: "Led weekly discussions on contemporary literature",
          date: "2025-11-05",
          duration: "Ongoing",
          points: 8,
          level: "Intermediate",
          mentors: ["Ms. Lisa Anderson"],
          skills: ["Critical Analysis", "Leadership", "Communication"],
          status: "in-progress",
          certificate: false,
          showcase: false,
        },
        {
          id: 8,
          title: "Creative Writing Workshop",
          description: "Completed intensive workshop on short story writing",
          date: "2025-10-25",
          duration: "5 days",
          points: 5,
          level: "Beginner",
          mentors: ["Mr. Michael Davis"],
          skills: [
            "Storytelling",
            "Narrative Structure",
            "Character Development",
          ],
          status: "completed",
          certificate: true,
          showcase: false,
        },
      ],

      scienceAstronomy: [
        {
          id: 9,
          title: "Astronomy Night Observation",
          description:
            "Led stargazing session and identified 20+ celestial objects",
          date: "2026-01-08",
          duration: "1 night",
          points: 15,
          level: "Advanced",
          mentors: ["Dr. Neil Sharma", "Ms. Stella Kumar"],
          skills: ["Astronomy", "Scientific Observation", "Teaching"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 10,
          title: "Science Fair Project - Renewable Energy",
          description:
            "Developed working solar panel efficiency comparison model",
          date: "2025-12-15",
          duration: "6 weeks",
          points: 18,
          level: "Advanced",
          mentors: ["Dr. Priya Patel"],
          skills: ["Research", "Experimentation", "Presentation"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 11,
          title: "Rocket Launch Workshop",
          description: "Built and launched model rockets studying aerodynamics",
          date: "2025-11-20",
          duration: "3 days",
          points: 10,
          level: "Intermediate",
          mentors: ["Mr. Raj Gupta"],
          skills: ["Physics", "Engineering", "Teamwork"],
          status: "completed",
          certificate: false,
          showcase: true,
        },
        {
          id: 12,
          title: "Planetarium Visit & Report",
          description:
            "Attended planetarium show and wrote detailed astronomical report",
          date: "2025-10-18",
          duration: "1 day",
          points: 7,
          level: "Beginner",
          mentors: ["Ms. Kavita Singh"],
          skills: ["Astronomy", "Scientific Writing", "Research"],
          status: "completed",
          certificate: false,
          showcase: false,
        },
      ],

      leadershipService: [
        {
          id: 13,
          title: "Community Clean-Up Drive Leader",
          description:
            "Organized and led 50+ volunteers in neighborhood cleanup",
          date: "2026-01-15",
          duration: "1 day",
          points: 20,
          level: "Advanced",
          mentors: ["Mr. John Williams"],
          skills: ["Leadership", "Community Service", "Organization"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 14,
          title: "Peer Mentoring Program",
          description:
            "Mentored 5 junior students in math and science subjects",
          date: "2025-12-01",
          duration: "3 months",
          points: 15,
          level: "Advanced",
          mentors: ["Mrs. Sandra Lee"],
          skills: ["Mentoring", "Teaching", "Empathy"],
          status: "in-progress",
          certificate: false,
          showcase: true,
        },
        {
          id: 15,
          title: "School Prefect Duties",
          description:
            "Served as school prefect maintaining discipline and assisting students",
          date: "2025-09-01",
          duration: "Ongoing",
          points: 12,
          level: "Intermediate",
          mentors: ["Principal Dr. Monica Verma"],
          skills: ["Leadership", "Responsibility", "Communication"],
          status: "in-progress",
          certificate: false,
          showcase: false,
        },
        {
          id: 16,
          title: "Food Drive Organizer",
          description:
            "Collected and distributed food packages to 30+ families",
          date: "2025-11-22",
          duration: "2 weeks",
          points: 8,
          level: "Intermediate",
          mentors: ["Mrs. Karen Martinez"],
          skills: ["Organization", "Community Service", "Compassion"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
      ],

      sportsWellness: [
        {
          id: 17,
          title: "Inter-School Football Tournament",
          description: "Represented school in regional football championship",
          date: "2026-01-20",
          duration: "3 days",
          points: 20,
          level: "Advanced",
          mentors: ["Coach Mike Johnson"],
          skills: ["Teamwork", "Physical Fitness", "Strategy"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 18,
          title: "Yoga & Mindfulness Workshop",
          description: "Completed wellness workshop focused on mental health",
          date: "2025-12-10",
          duration: "1 week",
          points: 10,
          level: "Beginner",
          mentors: ["Ms. Priya Reddy"],
          skills: ["Wellness", "Mindfulness", "Self-Care"],
          status: "completed",
          certificate: true,
          showcase: false,
        },
        {
          id: 19,
          title: "Swimming Championship",
          description: "Won silver medal in 100m freestyle event",
          date: "2025-11-08",
          duration: "2 days",
          points: 18,
          level: "Advanced",
          mentors: ["Coach Sarah Wilson"],
          skills: ["Swimming", "Endurance", "Discipline"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 20,
          title: "Sports Day Volunteer",
          description: "Assisted in organizing annual school sports day events",
          date: "2025-10-05",
          duration: "1 day",
          points: 12,
          level: "Intermediate",
          mentors: ["Mr. David Clarke"],
          skills: ["Organization", "Leadership", "Event Management"],
          status: "completed",
          certificate: false,
          showcase: false,
        },
      ],

      musicDance: [
        {
          id: 21,
          title: "Annual Concert Performance",
          description:
            "Performed classical guitar solo at school annual concert",
          date: "2026-01-25",
          duration: "1 evening",
          points: 12,
          level: "Advanced",
          mentors: ["Mr. Carlos Rodriguez"],
          skills: ["Music", "Performance", "Stage Presence"],
          status: "completed",
          certificate: true,
          showcase: true,
        },
        {
          id: 22,
          title: "Dance Competition - Contemporary",
          description:
            "Participated in inter-school contemporary dance competition",
          date: "2025-12-18",
          duration: "1 day",
          points: 10,
          level: "Intermediate",
          mentors: ["Ms. Anjali Nair"],
          skills: ["Dance", "Expression", "Coordination"],
          status: "completed",
          certificate: false,
          showcase: true,
        },
        {
          id: 23,
          title: "School Band Member",
          description: "Regular member of school band performing at events",
          date: "2025-09-01",
          duration: "Ongoing",
          points: 8,
          level: "Intermediate",
          mentors: ["Mr. Thomas Lee"],
          skills: ["Music", "Collaboration", "Rhythm"],
          status: "in-progress",
          certificate: false,
          showcase: false,
        },
        {
          id: 24,
          title: "Vocal Training Workshop",
          description:
            "Completed beginner vocal training covering techniques and theory",
          date: "2025-10-30",
          duration: "4 weeks",
          points: 5,
          level: "Beginner",
          mentors: ["Ms. Maria Santos"],
          skills: ["Singing", "Vocal Technique", "Music Theory"],
          status: "completed",
          certificate: true,
          showcase: false,
        },
      ],
    },

    // CCA Attendance Tracking
    ccaAttendance: {
      overview: {
        totalActivities: 4,
        totalSessions: 32,
        attendedSessions: 28,
        attendancePercentage: 87.5,
        missedSessions: 4,
      },
      activities: [
        {
          id: 1,
          name: "Robotics Club",
          category: "STEM",
          schedule: "Every Monday & Wednesday, 3:30 PM - 5:00 PM",
          instructor: "Mr. David Park",
          totalSessions: 12,
          attendedSessions: 11,
          missedSessions: 1,
          attendancePercentage: 92,
          sessions: [
            {
              date: "2026-01-27",
              status: "present",
              topic: "Arduino Programming Basics",
            },
            {
              date: "2026-01-22",
              status: "present",
              topic: "Sensor Integration",
            },
            {
              date: "2026-01-20",
              status: "present",
              topic: "Motor Control Systems",
            },
            {
              date: "2026-01-15",
              status: "absent",
              topic: "Robot Assembly Workshop",
              reason: "Medical appointment",
            },
            { date: "2026-01-13", status: "present", topic: "Circuit Design" },
            {
              date: "2026-01-08",
              status: "present",
              topic: "Power Supply Management",
            },
          ],
        },
        {
          id: 2,
          name: "Debate Society",
          category: "Arts & Culture",
          schedule: "Every Thursday, 4:00 PM - 5:30 PM",
          instructor: "Ms. Rachel Adams",
          totalSessions: 8,
          attendedSessions: 7,
          missedSessions: 1,
          attendancePercentage: 87.5,
          sessions: [
            {
              date: "2026-01-23",
              status: "present",
              topic: "Parliamentary Debate Practice",
            },
            {
              date: "2026-01-16",
              status: "present",
              topic: "Argumentation Techniques",
            },
            {
              date: "2026-01-09",
              status: "present",
              topic: "Public Speaking Skills",
            },
            {
              date: "2026-01-02",
              status: "absent",
              topic: "Mock Debate Competition",
              reason: "Family function",
            },
            {
              date: "2025-12-19",
              status: "present",
              topic: "Research Methods",
            },
          ],
        },
        {
          id: 3,
          name: "Basketball Team",
          category: "Sports",
          schedule: "Every Tuesday & Friday, 4:00 PM - 5:30 PM",
          instructor: "Coach Michael Brown",
          totalSessions: 8,
          attendedSessions: 7,
          missedSessions: 1,
          attendancePercentage: 87.5,
          sessions: [
            {
              date: "2026-01-24",
              status: "present",
              topic: "Team Practice Match",
            },
            {
              date: "2026-01-21",
              status: "present",
              topic: "Defensive Drills",
            },
            {
              date: "2026-01-17",
              status: "present",
              topic: "Shooting Practice",
            },
            {
              date: "2026-01-14",
              status: "present",
              topic: "Passing & Movement",
            },
            {
              date: "2026-01-10",
              status: "absent",
              topic: "Conditioning Session",
              reason: "Minor injury",
            },
          ],
        },
        {
          id: 4,
          name: "Music Band",
          category: "Arts & Culture",
          schedule: "Every Saturday, 10:00 AM - 12:00 PM",
          instructor: "Ms. Emily Watson",
          totalSessions: 4,
          attendedSessions: 3,
          missedSessions: 1,
          attendancePercentage: 75,
          sessions: [
            {
              date: "2026-01-25",
              status: "present",
              topic: "Full Band Rehearsal",
            },
            {
              date: "2026-01-18",
              status: "present",
              topic: "New Song Practice",
            },
            {
              date: "2026-01-11",
              status: "absent",
              topic: "Individual Section Practice",
              reason: "Out of town",
            },
            {
              date: "2026-01-04",
              status: "present",
              topic: "Ensemble Coordination",
            },
          ],
        },
      ],
    },
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
  },

  // My Lab Journey Data
  labJourney: {
    // Lab Booking - Scheduled lab sessions
    labBookings: [
      {
        id: 1,
        subject: "Physics",
        labName: "Optics Laboratory",
        room: "Lab 3",
        date: "2026-02-05",
        time: "10:30 AM - 12:30 PM",
        teacher: "Mr. Sharma",
        experiment: "Refraction and Lens Experiments",
        status: "upcoming",
        prepStatus: "Completed",
        materialsNeeded: ["Safety goggles", "Lab coat", "Calculator"],
      },
      {
        id: 2,
        subject: "Chemistry",
        labName: "Organic Chemistry Lab",
        room: "Lab 2",
        date: "2026-02-06",
        time: "02:00 PM - 04:00 PM",
        teacher: "Dr. Patel",
        experiment: "Functional Groups Analysis",
        status: "upcoming",
        prepStatus: "Pending",
        materialsNeeded: ["Lab coat", "Gloves", "Safety goggles"],
      },
      {
        id: 3,
        subject: "Biology",
        labName: "Microbiology Lab",
        room: "Lab 4",
        date: "2026-02-03",
        time: "09:00 AM - 11:00 AM",
        teacher: "Ms. Kapoor",
        experiment: "Cell Structure Observation",
        status: "completed",
        prepStatus: "Completed",
        materialsNeeded: ["Microscope slides", "Cover slips", "Lab coat"],
      },
      {
        id: 4,
        subject: "Physics",
        labName: "Mechanics Lab",
        room: "Lab 1",
        date: "2026-02-08",
        time: "11:00 AM - 01:00 PM",
        teacher: "Mr. Sharma",
        experiment: "Simple Pendulum - Time Period Calculation",
        status: "upcoming",
        prepStatus: "In Progress",
        materialsNeeded: ["Stopwatch", "Meter scale", "Thread"],
      },
    ],

    // Lab Safety Instructions - Hardcoded
    safetyInstructions: {
      generalRules: [
        {
          id: 1,
          title: "Always Wear Proper PPE",
          description:
            "Lab coat, safety goggles, and closed-toe shoes are mandatory in all lab sessions.",
          icon: "👔",
          priority: "high",
        },
        {
          id: 2,
          title: "No Food or Drinks",
          description:
            "Absolutely no eating, drinking, or chewing gum in the laboratory.",
          icon: "🚫",
          priority: "high",
        },
        {
          id: 3,
          title: "Report All Accidents",
          description:
            "Immediately inform your teacher of any spills, breaks, or injuries, no matter how minor.",
          icon: "🚨",
          priority: "high",
        },
        {
          id: 4,
          title: "Read Instructions Carefully",
          description:
            "Before starting any experiment, read all instructions thoroughly and ask questions if unsure.",
          icon: "📖",
          priority: "medium",
        },
        {
          id: 5,
          title: "Keep Workspace Clean",
          description:
            "Maintain a tidy workspace. Clean up all materials and equipment after completing your work.",
          icon: "🧹",
          priority: "medium",
        },
      ],
      equipmentHandling: [
        {
          id: 1,
          title: "Handle Glassware with Care",
          description:
            "Check for cracks before use. Report damaged glassware immediately.",
          icon: "🧪",
        },
        {
          id: 2,
          title: "Proper Chemical Handling",
          description:
            "Never touch, taste, or smell chemicals unless specifically instructed. Use spatulas and pipettes.",
          icon: "⚗️",
        },
        {
          id: 3,
          title: "Electrical Safety",
          description:
            "Keep electrical equipment away from water. Turn off equipment when not in use.",
          icon: "⚡",
        },
        {
          id: 4,
          title: "Bunsen Burner Safety",
          description:
            "Tie back long hair. Keep flammable materials away from flames. Turn off gas when done.",
          icon: "🔥",
        },
      ],
      emergencyProcedures: [
        {
          id: 1,
          title: "Fire Emergency",
          description:
            "Alert others immediately. Use fire extinguisher if trained. Evacuate calmly through designated exits.",
          icon: "🧯",
        },
        {
          id: 2,
          title: "Chemical Spill",
          description:
            "Alert teacher immediately. Do not attempt to clean large spills yourself. Evacuate if fumes are present.",
          icon: "🧴",
        },
        {
          id: 3,
          title: "Eye Contact with Chemicals",
          description:
            "Rinse eyes at eyewash station for 15 minutes. Keep eyes open while rinsing. Seek medical attention.",
          icon: "👁️",
        },
        {
          id: 4,
          title: "First Aid Station",
          description:
            "Location: Near Lab Entrance. Contains: bandages, burn gel, eye wash, emergency contact numbers.",
          icon: "🏥",
        },
      ],
    },

    // Lab Logbook - Experiment entries
    labLogbook: [
      {
        id: 1,
        title: "Refraction Through Glass Slab",
        subject: "Physics",
        date: "2026-01-28",
        labRoom: "Lab 3",
        teacher: "Mr. Sharma",
        hypothesis:
          "Light bends when passing from one medium to another due to change in speed, following Snell's Law.",
        procedure: [
          "Set up glass slab on white paper with incident ray marked",
          "Direct light ray at various angles through the glass slab",
          "Mark emergent ray positions for each angle of incidence",
          "Measure angles of incidence, refraction, and emergence",
          "Calculate refractive index using Snell's Law formula",
        ],
        observations:
          "Light ray bent towards normal when entering glass, bent away when exiting. Emergent ray parallel to incident ray but laterally displaced.",
        conclusion:
          "Verified Snell's Law. Calculated refractive index of glass: 1.52 (close to theoretical value of 1.5)",
        status: "completed",
        grade: "A",
        aiSuggestion:
          "Consider exploring how refraction varies with different wavelengths of light (dispersion).",
      },
      {
        id: 2,
        title: "Photosynthesis Rate Measurement",
        subject: "Biology",
        date: "2026-01-25",
        labRoom: "Lab 4",
        teacher: "Ms. Kapoor",
        hypothesis:
          "Rate of photosynthesis increases with light intensity up to a saturation point.",
        procedure: [
          "Set up aquatic plant (Hydrilla) in beaker with water",
          "Place light source at varying distances (10cm, 20cm, 30cm, 40cm)",
          "Count oxygen bubbles released per minute at each distance",
          "Repeat measurements 3 times for accuracy",
          "Plot graph of bubble rate vs. light intensity",
        ],
        observations:
          "Bubble rate: 45/min at 10cm, 28/min at 20cm, 15/min at 30cm, 8/min at 40cm. Clear inverse relationship with distance.",
        conclusion:
          "Photosynthesis rate decreases with distance from light source (reduced light intensity). Supports hypothesis.",
        status: "completed",
        grade: "A+",
        aiSuggestion:
          "Excellent observation skills. Next, try varying CO₂ concentration to study limiting factors.",
      },
      {
        id: 3,
        title: "Acid-Base Titration",
        subject: "Chemistry",
        date: "2026-01-20",
        labRoom: "Lab 2",
        teacher: "Dr. Patel",
        hypothesis:
          "The unknown acid concentration can be determined by neutralization with a standard base solution.",
        procedure: [
          "Fill burette with 0.1M NaOH solution",
          "Pipette 10ml unknown HCl into conical flask",
          "Add 2 drops phenolphthalein indicator",
          "Titrate slowly until persistent pink color appears",
          "Record burette readings and calculate molarity",
        ],
        observations:
          "Initial reading: 0.0ml, Final reading: 12.4ml. Solution turned from colorless to light pink at endpoint.",
        conclusion:
          "Unknown acid concentration calculated as 0.124M using neutralization equation. Endpoint clearly visible with phenolphthalein.",
        status: "completed",
        grade: "B+",
        aiSuggestion:
          "Good technique. For improvement, try multiple trials and calculate average to reduce error.",
      },
      {
        id: 4,
        title: "Pendulum Time Period vs Length",
        subject: "Physics",
        date: "2026-02-01",
        labRoom: "Lab 1",
        teacher: "Mr. Sharma",
        hypothesis:
          "Time period of a simple pendulum is directly proportional to the square root of its length.",
        procedure: [
          "Set up pendulum with 20cm thread length",
          "Measure time for 20 oscillations, calculate average time period",
          "Repeat for lengths: 40cm, 60cm, 80cm, 100cm",
          "Plot graph of T² vs L",
          "Calculate 'g' from slope of graph",
        ],
        observations:
          "Linear relationship between T² and L observed. Slope = 4π²/g used to determine gravitational acceleration.",
        conclusion:
          "Verified T ∝ √L relationship. Calculated g = 9.78 m/s² (2% error from standard value 9.8 m/s²)",
        status: "in-progress",
        grade: null,
        aiSuggestion:
          "Include error analysis discussing possible sources of the 2% deviation (air resistance, human reaction time).",
      },
    ],

    // Observation Notes - Detailed measurements
    observationNotes: [
      {
        id: 1,
        experimentTitle: "Refraction Through Glass Slab",
        subject: "Physics",
        date: "2026-01-28",
        dataTable: [
          {
            trial: 1,
            angleOfIncidence: 30,
            angleOfRefraction: 19,
            angleOfEmergence: 30,
            lateralDisplacement: 0.8,
          },
          {
            trial: 2,
            angleOfIncidence: 45,
            angleOfRefraction: 28,
            angleOfEmergence: 45,
            lateralDisplacement: 1.2,
          },
          {
            trial: 3,
            angleOfIncidence: 60,
            angleOfRefraction: 35,
            angleOfEmergence: 60,
            lateralDisplacement: 1.6,
          },
        ],
        qualitativeObservations: [
          "Incident ray, refracted ray, and normal all lie in same plane",
          "Emergent ray parallel to incident ray but displaced laterally",
          "Greater angle of incidence results in larger lateral displacement",
          "No dispersion observed (white light remained white)",
        ],
        aiSuggestion:
          "Record glass slab thickness for more precise refractive index calculation.",
      },
      {
        id: 2,
        experimentTitle: "Photosynthesis Rate Measurement",
        subject: "Biology",
        date: "2026-01-25",
        dataTable: [
          {
            distance: "10 cm",
            trial1: 46,
            trial2: 44,
            trial3: 45,
            average: 45,
          },
          {
            distance: "20 cm",
            trial1: 29,
            trial2: 27,
            trial3: 28,
            average: 28,
          },
          {
            distance: "30 cm",
            trial1: 16,
            trial2: 14,
            trial3: 15,
            average: 15,
          },
          {
            distance: "40 cm",
            trial1: 9,
            trial2: 7,
            trial3: 8,
            average: 8,
          },
        ],
        qualitativeObservations: [
          "Plant appeared healthier and greener in brighter light",
          "Bubbles more vigorous and consistent at 10cm distance",
          "At 40cm, bubbles became irregular and slow",
          "Water temperature remained constant (25°C) throughout",
        ],
        aiSuggestion:
          "Consider recording bubble size as well as count for more accurate oxygen production measurement.",
      },
      {
        id: 3,
        experimentTitle: "Pendulum Time Period",
        subject: "Physics",
        date: "2026-02-01",
        dataTable: [
          { length: 20, time20Osc: 17.8, timePeriod: 0.89, tSquared: 0.79 },
          { length: 40, time20Osc: 25.3, timePeriod: 1.27, tSquared: 1.61 },
          { length: 60, time20Osc: 31.0, timePeriod: 1.55, tSquared: 2.4 },
          { length: 80, time20Osc: 35.8, timePeriod: 1.79, tSquared: 3.2 },
          { length: 100, time20Osc: 40.1, timePeriod: 2.01, tSquared: 4.04 },
        ],
        qualitativeObservations: [
          "Pendulum motion remained in single plane for small amplitudes",
          "Slight energy loss observed over multiple oscillations",
          "Thread remained taut throughout oscillations",
          "Air resistance effect minimal for small bob",
        ],
        aiSuggestion:
          "Try varying bob mass to verify that time period is independent of mass.",
      },
    ],

    // Inference Builder - Reasoning from observations
    inferences: [
      {
        id: 1,
        title: "Understanding Snell's Law",
        subject: "Physics",
        experiment: "Refraction Through Glass Slab",
        date: "2026-01-29",
        observation:
          "Light bent towards normal when entering glass, bent away when exiting. Emergent ray parallel to incident ray.",
        reasoning: [
          {
            step: 1,
            question: "Why does light bend when entering glass?",
            studentAnswer:
              "Light slows down in glass because it's denser than air, causing the direction to change.",
            aiCoaching:
              "Excellent! This shows understanding of the relationship between medium density and light speed.",
            strength: "strong",
          },
          {
            step: 2,
            question: "Why is the emergent ray parallel to the incident ray?",
            studentAnswer:
              "Because the light exits into the same medium (air) it entered from, and the surfaces are parallel.",
            aiCoaching:
              "Perfect reasoning! You've identified the key factors: parallel surfaces and same initial/final medium.",
            strength: "strong",
          },
          {
            step: 3,
            question: "What real-world applications use this principle?",
            studentAnswer:
              "Eyeglasses, cameras, telescopes, and microscopes all use refraction to focus light.",
            aiCoaching:
              "Great examples! Can you think about how this relates to prisms and rainbows as well?",
            strength: "strong",
          },
        ],
        finalInference:
          "Refraction occurs due to change in light speed across media. The refractive index quantifies this change. Parallel surfaces ensure emergent ray parallels incident ray despite lateral displacement.",
        masteryLevel: "Advanced",
      },
      {
        id: 2,
        title: "Photosynthesis and Light Intensity",
        subject: "Biology",
        experiment: "Photosynthesis Rate Measurement",
        date: "2026-01-26",
        observation:
          "Oxygen bubble rate decreased from 45/min to 8/min as light distance increased from 10cm to 40cm.",
        reasoning: [
          {
            step: 1,
            question: "What does the bubble rate represent?",
            studentAnswer:
              "The bubbles are oxygen gas produced during photosynthesis, so more bubbles mean faster photosynthesis.",
            aiCoaching:
              "Exactly right! You've made the connection between observable bubbles and the chemical process.",
            strength: "strong",
          },
          {
            step: 2,
            question: "Why does increasing distance reduce bubble rate?",
            studentAnswer:
              "Light intensity decreases with distance, so less light energy is available for photosynthesis.",
            aiCoaching:
              "Good! This follows the inverse square law. Can you explain what might happen at very high light intensity?",
            strength: "partial",
          },
          {
            step: 3,
            question: "What other factors could limit photosynthesis rate?",
            studentAnswer:
              "CO2 concentration, water availability, and temperature could also limit the rate.",
            aiCoaching:
              "Excellent understanding of limiting factors! You're thinking about the bigger picture of plant biology.",
            strength: "strong",
          },
        ],
        finalInference:
          "Light intensity is a limiting factor for photosynthesis. As intensity increases, rate increases until another factor (CO2, water, enzymes) becomes limiting. This explains why plants need adequate sunlight for optimal growth.",
        masteryLevel: "Proficient",
      },
      {
        id: 3,
        title: "Simple Harmonic Motion Principles",
        subject: "Physics",
        experiment: "Pendulum Time Period",
        date: "2026-02-02",
        observation:
          "T² vs L graph showed linear relationship with slope proportional to 1/g.",
        reasoning: [
          {
            step: 1,
            question: "Why is the relationship between T² and L linear?",
            studentAnswer:
              "Because the formula T = 2π√(L/g) means T² = (4π²/g)L, which is y = mx form.",
            aiCoaching:
              "Outstanding mathematical insight! You've connected the physics formula to linear graph representation.",
            strength: "strong",
          },
          {
            step: 2,
            question: "Why doesn't the bob's mass affect the time period?",
            studentAnswer:
              "I'm not completely sure, but I think gravity accelerates all masses equally?",
            aiCoaching:
              "You're on the right track! Think about F = ma and gravitational force. The mass cancels out in the equation.",
            strength: "partial",
          },
          {
            step: 3,
            question: "What causes the 2% error in your calculated 'g' value?",
            studentAnswer:
              "Maybe air resistance, or I didn't count the oscillations perfectly, or the thread stretched slightly.",
            aiCoaching:
              "Excellent error analysis! These are all valid sources. Which do you think had the biggest impact?",
            strength: "strong",
          },
        ],
        finalInference:
          "Simple pendulum motion depends only on length and gravity, not mass. This is characteristic of SHM where restoring force is proportional to displacement. Experimental errors are inevitable but can be minimized through careful technique.",
        masteryLevel: "Proficient",
      },
    ],

    // Reflection Journal - Metacognitive entries
    reflectionJournal: [
      {
        id: 1,
        title: "The Beauty of Physics in Everyday Life",
        date: "2026-01-30",
        linkedExperiments: ["Refraction Through Glass Slab"],
        subjects: ["Physics"],
        prompt:
          "Reflect on how today's lab connects to your daily experiences.",
        reflection:
          "Today's refraction experiment made me realize why a straw looks bent in a glass of water - something I've seen countless times but never understood! The way light bends between air and water is the same principle. It's amazing how physics explains these 'magic tricks' of nature. I also thought about how eyeglasses work for my grandmother - they're using refraction to correct her vision by bending light before it enters her eye. Science suddenly feels less like abstract formulas and more like understanding the world around me. I want to observe more carefully in daily life now.",
        tags: ["Real-world connection", "Curiosity", "Observation skills"],
        skillsDeveloped: [
          "Scientific observation",
          "Critical thinking",
          "Making connections",
        ],
        valuesReflection:
          "This experience reminds me to stay curious and question ordinary things. There's so much to learn from simply paying attention.",
        aiCoaching:
          "Beautiful reflection! You're making strong connections between theory and observation. Consider: How might this principle apply to photography or art?",
        mood: "Excited",
      },
      {
        id: 2,
        title: "Patience and Precision in Scientific Work",
        date: "2026-01-26",
        linkedExperiments: [
          "Photosynthesis Rate Measurement",
          "Acid-Base Titration",
        ],
        subjects: ["Biology", "Chemistry"],
        prompt:
          "What challenges did you face today, and what did you learn about yourself?",
        reflection:
          "Counting oxygen bubbles for a full minute was harder than I expected - I kept losing count and had to restart! It taught me that good science requires extreme patience and focus. I used to rush through things, but today I learned that careful, repeated measurements are what make results reliable. When I finally got consistent readings across three trials, I felt proud. It's not about being fast; it's about being accurate. The same thing happened during titration - one drop too many and I'd overshoot the endpoint. These labs are teaching me self-discipline and attention to detail, which I know will help in other subjects too, even beyond science.",
        tags: ["Perseverance", "Self-discipline", "Attention to detail"],
        skillsDeveloped: ["Patience", "Precision", "Experimental technique"],
        valuesReflection:
          "I'm learning that excellence requires patience. Quick results aren't always good results. This applies to studying for exams too - consistent effort over time beats last-minute cramming.",
        aiCoaching:
          "Wonderful self-awareness! You're developing a growth mindset. How might you apply this 'precision over speed' lesson to other areas of your academic work?",
        mood: "Reflective",
      },
      {
        id: 3,
        title: "Understanding Through Struggle",
        date: "2026-02-02",
        linkedExperiments: ["Pendulum Time Period vs Length"],
        subjects: ["Physics"],
        prompt: "Describe a moment of confusion and how you worked through it.",
        reflection:
          "I was really confused when plotting T² vs L because my first graph wasn't linear at all - I thought I'd completely messed up the experiment. But instead of giving up, I rechecked my calculations and realized I had written down one length measurement wrong (60 cm instead of 80 cm). After correcting it, the beautiful straight line appeared! This taught me that mistakes don't mean failure - they're opportunities to check your work and learn. I also learned to stay calm when things don't match expectations. My initial frustration turned into satisfaction when I fixed the error. It felt like solving a puzzle. Mr. Sharma said 'Science is 10% inspiration and 90% perspiration,' and I really understand that now.",
        tags: ["Problem-solving", "Resilience", "Error analysis"],
        skillsDeveloped: [
          "Troubleshooting",
          "Self-correction",
          "Emotional regulation",
        ],
        valuesReflection:
          "Mistakes are valuable learning moments, not signs of incompetence. The key is to stay calm and methodically check your work. I want to carry this attitude into exams - even if I get stuck, I should stay calm and work through it.",
        aiCoaching:
          "Exceptional growth mindset! Your ability to persist through confusion is a key scientific skill. How did it feel when your corrected graph showed the expected linear relationship?",
        mood: "Accomplished",
      },
      {
        id: 4,
        title: "Teamwork in the Laboratory",
        date: "2026-01-28",
        linkedExperiments: ["Photosynthesis Rate Measurement"],
        subjects: ["Biology"],
        prompt: "How did working with lab partners impact your learning today?",
        reflection:
          "Today I worked with Priya and Arjun on the photosynthesis experiment. Initially, we argued about who would control the light distance and who would count bubbles. But then we realized we could take turns and cross-check each other's counts. This made our data much more reliable! Arjun noticed patterns I missed, and Priya suggested we record water temperature (which I hadn't thought of). I learned that collaboration isn't about dividing work - it's about combining perspectives to get better results. Three pairs of eyes are definitely better than one in science. I also learned to listen more and be less stubborn about 'my way' of doing things. Different approaches can all be valid.",
        tags: ["Teamwork", "Collaboration", "Communication"],
        skillsDeveloped: [
          "Collaborative problem-solving",
          "Active listening",
          "Flexibility",
        ],
        valuesReflection:
          "Working together makes us all smarter. I should be more open to others' ideas instead of assuming my way is the only right way. Humility and teamwork are important values in science and in life.",
        aiCoaching:
          "Fantastic insight about collaboration! Scientific breakthroughs often come from teams combining different viewpoints. How can you bring this collaborative spirit to group projects in other subjects?",
        mood: "Grateful",
      },
    ],
  },
  // Screen 13: Support & Well-being
  supportData: {
    hero: {
      title: "Student Support Hub",
      subtitle:
        "Need help with studies, technical issues, or just want to talk? We're here for you.",
      placeholder: "Search for help (e.g., 'grades', 'wifi', 'stress')...",
    },
    tabs: [
      "FAQs",
      "Request Help",
      "Connect with Wellbeing",
      "Govt & Regulations",
    ],
    ticketForm: {
      categories: ["Academic", "Technical", "Facility", "Other"],
      priorities: ["Low", "Medium", "High", "Critical"],
    },
    recentTickets: [
      {
        id: "#TKT-1024",
        title: "Library Access Issue",
        status: "Resolved",
        statusColor: "green",
        time: "2 days ago",
      },
      {
        id: "#TKT-1035",
        title: "Grade Discrepancy in Math",
        status: "Open",
        statusColor: "blue",
        time: "Today",
      },
    ],
    counselorAvailability: {
      days: "Monday - Friday",
      hours: "9:00 AM - 3:00 PM",
      walkInLabel: "Walk-in Hours",
      walkInHours: "12:00 PM - 1:00 PM",
      counselorName: "Dr. Emily Stone",
      location: "Room 104",
    },
    wellnessArticles: [
      {
        icon: "Book",
        color: "green",
        title: "Managing Exam Stress",
        desc: "Practical techniques to stay calm during exams.",
        action: "Read Article",
      },
      {
        icon: "Heart",
        color: "blue",
        title: "Building Resilience",
        desc: "Develop mental strength to handle challenges.",
        action: "Learn More",
      },
      {
        icon: "User",
        color: "purple",
        title: "Self-Care Tips",
        desc: "Simple habits for better mental health.",
        action: "Explore Tips",
      },
    ],
    regulations: [
      {
        icon: "Gavel",
        title: "Compulsory Education Act",
        badge: "MOE Singapore",
        description:
          "Under the Compulsory Education Act, all Singaporean children residing in Singapore are required to attend school regularly. This ensures every child has the opportunity to receive a core education.",
        checklist: ["Mandatory primary education", "Regular attendance checks"],
        action: "Read Full Act",
        variant: "indigo",
      },
      {
        icon: "Lock",
        title: "PDPA & Data Privacy",
        badge: "Data Protection",
        description:
          "Your personal data is protected under the Personal Data Protection Act (PDPA). Schools collect data only for educational purposes and ensure strict confidentiality.",
        checklist: [
          "Consent required for data use",
          "Right to access your records",
        ],
        action: "View Privacy Policy",
        variant: "purple",
      },
      {
        icon: "Globe",
        title: "Cyber Wellness",
        badge: "Digital Safety",
        description:
          "Guidelines to ensure safe and responsible use of technology. Includes topics on cyberbullying, netiquette, and managing screen time effectively.",
        checklist: [],
        action: "Cyber Wellness Tips",
        variant: "cyan",
      },
      {
        icon: "Heart",
        title: "Student Welfare",
        badge: "Support",
        description:
          "Information on financial assistance schemes (FAS), bursaries, and counseling support available for students in need.",
        checklist: [],
        action: "Check Eligibility",
        variant: "rose",
      },
    ],
  },
};
