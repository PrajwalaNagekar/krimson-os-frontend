export const SYSTEM_ADMIN_DATA = {
  user: {
    name: "Neena Guptaa", // Based on BRD System Admin name
    role: "System Administrator",
    id: "SYS-ADMIN-01",
    avatar: "https://i.pravatar.cc/150?img=60" // Placeholder avatar
  },
  health: { // Screen 1
    uptime: "99.98%",
    cpuUsage: 42, // %
    memoryUsage: 65, // %
    activeSessions: 234,
    apiResponseTime: 120, // ms
    alerts: [
      { id: 1, type: "error", msg: "Database connection spike detected", time: "10:00 AM" },
      { id: 2, type: "warning", msg: "API Gateway latency > 300ms", time: "09:45 AM" }
    ]
  },
  security: { // Screen 2
    users: [
      { id: "U-101", name: "Administrator", role: "Admin", status: "Active", lastLogin: "Just now" },
      { id: "U-102", name: "Principal", role: "Principal", status: "Active", lastLogin: "1 hr ago" },
      { id: "U-103", name: "Teacher A", role: "Teacher", status: "Locked", lastLogin: "2 days ago" }
    ],
    mfaStatus: "Enabled (Admin Only)"
  },
  backups: { // Screen 3
    lastBackup: "Today, 02:00 AM",
    nextBackup: "Tomorrow, 02:00 AM",
    integrityScore: "100%",
    history: [
      { id: "BK-2026-01-06", type: "Full", size: "4.2 GB", status: "Success", location: "AWS S3" },
      { id: "BK-2026-01-05", type: "Incremental", size: "120 MB", status: "Success", location: "AWS S3" },
      { id: "BK-2026-01-04", type: "Incremental", size: "115 MB", status: "Success", location: "AWS S3" }
    ]
  },
  logs: { // Screen 4
    maintenance: [
      { id: "LOG-001", action: "Security Patch v1.0.6", user: "System", date: "2026-01-05", status: "Completed" },
      { id: "LOG-002", action: "User Access Revocation", user: "Neena Guptaa", date: "2026-01-04", status: "Completed" },
      { id: "LOG-003", action: "Database Indexing", user: "System", date: "2026-01-03", status: "Completed" }
    ],
    version: "v1.0.6 (Stable)"
  }
};
