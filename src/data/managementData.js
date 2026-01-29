export const MANAGEMENT_DATA = {
  user: {
    name: "Dr. A. Sharma",
    role: "Trustee / Director",
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  overview: { // Screen 1
    studentStrength: { current: 1250, target: 1400 },
    facultyStrength: 85,
    retentionRate: 94,
    avgAttendance: 96.5,
    academicIndex: 88, // API score
    feeEfficiency: 92, // % Collected
    alerts: [
      { type: "critical", msg: "Science Dept below target retention (88%)" },
      { type: "warning", msg: "SSG Compliance Audit pending for Q1" }
    ]
  },
  academic: { // Screen 2
    clusters: [
      { name: "STEM", score: 85, trend: "+2%" },
      { name: "Humanities", score: 78, trend: "+1%" },
      { name: "Languages", score: 91, trend: "+4%" }
    ],
    distribution: { top: 15, mid: 60, bottom: 25 }, // %
    passRate: { G1: 100, G2: 98, G3: 95, G4: 92, G5: 90, G6: 88 }
  },
  admissions: { // Screen 3
    funnel: {
      inquiries: 500,
      verified: 350,
      tours: 200,
      enrolled: 120
    },
    demographics: [
      { region: "Domestic (SG)", val: 60, color: "bg-blue-500" },
      { region: "India (Expats)", val: 25, color: "bg-orange-500" },
      { region: "ASEAN", val: 15, color: "bg-green-500" }
    ]
  },
  finance: { // Screen 4
    revenue: { month: "SGD 45K", term: "SGD 180K", annual: "SGD 2.1M" },
    receivables: "SGD 24.5K",
    surplus: "+12%",
    settlement: "All gateways reconciled"
  },
  operations: { // Screen 5
    ratio: { target: "1:20", actual: "1:22" },
    lessonSubmission: 98, // %
    feedbackTime: 2.1, // days
    responseLag: 4, // hours
    utilization: 85 // %
  },
  compliance: { // Screen 6
    riskIndex: "Low", // Green
    status: "Green",
    auditReadiness: 95, // %
    checklist: [
      { item: "PEI Registration", status: "Valid" },
      { item: "Teacher Certs", status: "2 Expiring" },
      { item: "Data Backup", status: "Verified" }
    ]
  },
  strategy: { // Screen 7
    targets: [
      { goal: "Enrollment Growth", target: 1500, actual: 1250 },
      { goal: "Avg Grade", target: 85, actual: 82 }
    ],
    insights: [
      "Focus on Middle School retention to hit FY26 targets.",
      "Expand STEM lab capacity to improve utilization."
    ]
  }
};
