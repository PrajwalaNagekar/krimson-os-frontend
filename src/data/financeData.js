export const FINANCE_DATA = {
  user: {
    name: "Ashok Bhattacharya", // Based on BRD Finance Officer Name [cite: 369]
    role: "Finance Officer",
    id: "FIN-2025-09",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  summary: {
    totalCollected: "SGD 450,200", // Year To Date
    outstanding: "SGD 24,500",     // Current Dues
    refunds: "SGD 1,200",          // Adjustments [cite: 130]
    monthlyTrend: [65, 59, 80, 81, 56, 55, 40, 70, 75, 68, 85, 90]
  },
  feeHeads: [ // Screen 2 
    { id: 1, name: "Term 1 Tuition", amount: 1200, type: "Academic", frequency: "Termly" },
    { id: 2, name: "Transport Fee", amount: 450, type: "Facility", frequency: "Monthly" },
    { id: 3, name: "Science Lab Material", amount: 150, type: "Resource", frequency: "Annual" },
    { id: 4, name: "CCA Sports", amount: 200, type: "Activity", frequency: "Termly" }
  ],
  transactions: [ // Screen 3 & 1 [cite: 126]
    { id: "TRX-9901", student: "Aravind Kumar", class: "5-A", amount: "SGD 1200", status: "Paid", mode: "Stripe", date: "2026-01-06" },
    { id: "TRX-9902", student: "Meera Tan", class: "3-B", amount: "SGD 450", status: "Pending", mode: "Cash", date: "2026-01-05" },
    { id: "TRX-9903", student: "John Lim", class: "6-C", amount: "SGD 200", status: "Failed", mode: "Razorpay", date: "2026-01-05" },
  ],
  defaulters: [ // Screen 4 [cite: 129]
    { id: "S-105", name: "Rohan Gupta", class: "Grade 5", amount: "SGD 1,650", daysOverdue: 15, contact: "Mrs. Gupta" },
    { id: "S-108", name: "Sarah Lee", class: "Grade 4", amount: "SGD 450", daysOverdue: 5, contact: "Mr. Lee" }
  ],
  auditLog: [ // Screen 7 [cite: 126]
    { id: 1, action: "Invoice Generated", user: "System", time: "10:00 AM", details: "Batch Gen for Term 2" },
    { id: 2, action: "Refund Approved", user: "Principal", time: "09:15 AM", details: "Refund #RF-202 for S-102" }
  ]
};
