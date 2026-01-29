// ============================================================================
// 🔴 API INTEGRATION PENDING - MOCK DATA FOR DEVELOPMENT ONLY
// ============================================================================
// This file contains static mock data for admin dashboard features.
// When backend APIs are ready, replace imports from this file with
// service layer calls from src/services/adminService.js
//
// Backend Endpoints Needed:
// - GET /api/admin/dashboard        (overview stats)
// - GET /api/admin/admissions        (admissions pipeline)
// - GET /api/admin/classes           (class configurations)
// - GET /api/admin/staff             (HR management)
// - GET /api/admin/finance           (financial overview)
// - GET /api/admin/attendance        (attendance logs)
// - GET /api/admin/notifications     (notification history)
// - GET /api/admin/compliance        (compliance documents)
// - GET /api/admin/audit             (audit logs)
// - GET /api/admin/infrastructure    (infrastructure inventory)
// - GET /api/admin/backups           (backup logs)
// - GET /api/admin/analytics         (analytics data)
// - GET /api/admin/tickets           (helpdesk tickets)
// ============================================================================

export const ADMIN_DATA = {
  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 1: Overview
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/dashboard
  // Action: Replace 'overview' object with API call
  // Error Handling: Add try/catch, loading state, retry logic
  // Refresh Rate: Real-time via WebSocket or poll every 30 seconds
  // Auth: Requires admin JWT token in Authorization header
  // ---------------------------------------------------
  overview: {
    users: 2450,
    staff: 150,
    classes: 45,
    courses: 12,
    attendance: { students: 96, staff: 98 },
    pipeline: { inquiries: 120, verified: 45, enrolled: 12 },
    finance: { collected: 450000, due: 120000 },
    alerts: [
      { id: 1, text: "Fire Safety Inspection Due", type: "Urgent" },
      {
        id: 2,
        text: "Waitlist exceeding capacity in Grade 1",
        type: "Warning",
      },
    ],
  },

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 2: Admissions
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/admissions?status=all&limit=50
  // Query Params: status (applied|verified|enrolled), grade, dateRange
  // Action: Replace 'admissions' array with paginated API response
  // Features Needed: Filtering, sorting, pagination, search
  // ---------------------------------------------------
  admissions: [
    {
      id: 101,
      studentId: "STU2026001",
      name: "Rahul Sharma",
      stage: "Applied",
      date: "2026-01-05",
      grade: "5",
      leadSource: "Web Form",
      parentName: "Mr. Rajesh Sharma",
      parentEmail: "rajesh.s@email.com",
      parentPhone: "+91 98765 43210",
      dateOfBirth: "2015-03-15",
      gender: "Male",
      previousSchool: "St. Mary's Primary School",
      documents: {
        birthCertificate: { uploaded: true, verified: false },
        previousMarksheet: { uploaded: true, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: true, verified: false },
        photoId: { uploaded: true, verified: false },
        medicalRecords: { uploaded: false, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Strong academic background, waiting for document verification",
      appliedBy: "Parent",
      timestamp: "2026-01-05T10:30:00",
    },
    {
      id: 102,
      studentId: "STU2026002",
      name: "Sarah Johnson",
      stage: "Verified",
      date: "2026-01-04",
      grade: "8",
      leadSource: "Referral",
      parentName: "Mrs. Lisa Johnson",
      parentEmail: "lisa.j@email.com",
      parentPhone: "+91 98765 43211",
      dateOfBirth: "2012-07-22",
      gender: "Female",
      previousSchool: "International Academy",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-22",
      remarks: "All documents verified, awaiting interview",
      appliedBy: "Admission Staff",
      timestamp: "2026-01-04T14:00:00",
    },
    {
      id: 103,
      studentId: "STU2026003",
      name: "Mike Thompson",
      stage: "Enrolled",
      date: "2026-01-02",
      grade: "3",
      leadSource: "Walk-in",
      parentName: "Mr. David Thompson",
      parentEmail: "david.t@email.com",
      parentPhone: "+91 98765 43212",
      dateOfBirth: "2017-11-10",
      gender: "Male",
      previousSchool: "Green Valley School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-15",
      interviewCompleted: true,
      enrollmentConfirmed: true,
      enrollmentDate: "2026-01-18",
      classAssigned: "3A",
      remarks: "Enrollment complete, all formalities cleared",
      appliedBy: "Parent",
      timestamp: "2026-01-02T09:00:00",
    },
    {
      id: 104,
      studentId: "STU2026004",
      name: "Priya Agarwal",
      stage: "Applied",
      date: "2026-01-06",
      grade: "1",
      leadSource: "Web Form",
      parentName: "Mrs. Anita Agarwal",
      parentEmail: "anita.a@email.com",
      parentPhone: "+91 98765 43213",
      dateOfBirth: "2019-05-08",
      gender: "Female",
      previousSchool: "None (First Admission)",
      documents: {
        birthCertificate: { uploaded: true, verified: false },
        previousMarksheet: { uploaded: false, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: true, verified: false },
        photoId: { uploaded: false, verified: false },
        medicalRecords: { uploaded: true, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "New student, documents pending",
      appliedBy: "Parent",
      timestamp: "2026-01-06T11:15:00",
    },
    {
      id: 105,
      studentId: "STU2026005",
      name: "Kevin Wong",
      stage: "Verified",
      date: "2026-01-03",
      grade: "6",
      leadSource: "Web Form",
      parentName: "Mr. James Wong",
      parentEmail: "james.w@email.com",
      parentPhone: "+91 98765 43214",
      dateOfBirth: "2014-02-14",
      gender: "Male",
      previousSchool: "Pioneer International School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: true,
      interviewDate: "2026-01-25",
      remarks: "Documents verified, payment pending",
      appliedBy: "Parent",
      timestamp: "2026-01-03T16:45:00",
    },
    {
      id: 106,
      studentId: "STU2026006",
      name: "Aisha Khan",
      stage: "Enrolled",
      date: "2025-12-28",
      grade: "10",
      leadSource: "Referral",
      parentName: "Dr. Ahmed Khan",
      parentEmail: "ahmed.k@email.com",
      parentPhone: "+91 98765 43215",
      dateOfBirth: "2010-09-30",
      gender: "Female",
      previousSchool: "Delhi Public School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-08",
      interviewCompleted: true,
      enrollmentConfirmed: true,
      enrollmentDate: "2026-01-12",
      classAssigned: "10B",
      remarks: "Excellent academic record, leadership potential",
      appliedBy: "Parent",
      timestamp: "2025-12-28T10:00:00",
    },
    {
      id: 107,
      studentId: "STU2026007",
      name: "Lucas Martinez",
      stage: "Applied",
      date: "2026-01-07",
      grade: "2",
      leadSource: "Walk-in",
      parentName: "Mrs. Maria Martinez",
      parentEmail: "maria.m@email.com",
      parentPhone: "+91 98765 43216",
      dateOfBirth: "2018-01-20",
      gender: "Male",
      previousSchool: "Little Angels School",
      documents: {
        birthCertificate: { uploaded: true, verified: false },
        previousMarksheet: { uploaded: false, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: true, verified: false },
        photoId: { uploaded: true, verified: false },
        medicalRecords: { uploaded: false, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: false,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Application fee payment pending",
      appliedBy: "Admission Staff",
      timestamp: "2026-01-07T13:30:00",
    },
    {
      id: 108,
      studentId: "STU2026008",
      name: "Emma Davis",
      stage: "Verified",
      date: "2026-01-01",
      grade: "7",
      leadSource: "Web Form",
      parentName: "Mr. Robert Davis",
      parentEmail: "robert.d@email.com",
      parentPhone: "+91 98765 43217",
      dateOfBirth: "2013-06-12",
      gender: "Female",
      previousSchool: "Cambridge International School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: false },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Transfer certificate verification pending",
      appliedBy: "Parent",
      timestamp: "2026-01-01T15:20:00",
    },
    {
      id: 109,
      studentId: "STU2026009",
      name: "Arjun Patel",
      stage: "Applied",
      date: "2026-01-08",
      grade: "4",
      leadSource: "Referral",
      parentName: "Mr. Vijay Patel",
      parentEmail: "vijay.p@email.com",
      parentPhone: "+91 98765 43218",
      dateOfBirth: "2016-10-05",
      gender: "Male",
      previousSchool: "Modern Public School",
      documents: {
        birthCertificate: { uploaded: true, verified: false },
        previousMarksheet: { uploaded: true, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: false, verified: false },
        photoId: { uploaded: true, verified: false },
        medicalRecords: { uploaded: true, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Recently applied, document verification in progress",
      appliedBy: "Parent",
      timestamp: "2026-01-08T09:00:00",
    },
    {
      id: 110,
      studentId: "STU2026010",
      name: "Sofia Fernandez",
      stage: "Verified",
      date: "2025-12-30",
      grade: "9",
      leadSource: "Web Form",
      parentName: "Mrs. Isabella Fernandez",
      parentEmail: "isabella.f@email.com",
      parentPhone: "+91 98765 43219",
      dateOfBirth: "2011-04-18",
      gender: "Female",
      previousSchool: "Heritage School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-20",
      remarks: "All documents verified, awaiting interview",
      appliedBy: "Parent",
      timestamp: "2025-12-30T11:00:00",
    },
    {
      id: 111,
      studentId: "STU2026011",
      name: "Ethan Brown",
      stage: "Enrolled",
      date: "2025-12-27",
      grade: "11",
      leadSource: "Walk-in",
      parentName: "Mr. Michael Brown",
      parentEmail: "michael.b@email.com",
      parentPhone: "+91 98765 43220",
      dateOfBirth: "2009-08-25",
      gender: "Male",
      previousSchool: "National Public School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-10",
      interviewCompleted: true,
      enrollmentConfirmed: true,
      enrollmentDate: "2026-01-14",
      classAssigned: "11A",
      remarks: "Science stream, strong in mathematics",
      appliedBy: "Admission Staff",
      timestamp: "2025-12-27T14:30:00",
    },
    {
      id: 112,
      studentId: "STU2026012",
      name: "Zara Ali",
      stage: "Applied",
      date: "2026-01-09",
      grade: "6",
      leadSource: "Web Form",
      parentName: "Dr. Fatima Ali",
      parentEmail: "fatima.a@email.com",
      parentPhone: "+91 98765 43221",
      dateOfBirth: "2014-12-03",
      gender: "Female",
      previousSchool: "Sunshine School",
      documents: {
        birthCertificate: { uploaded: true, verified: false },
        previousMarksheet: { uploaded: true, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: true, verified: false },
        photoId: { uploaded: false, verified: false },
        medicalRecords: { uploaded: false, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Application just submitted today",
      appliedBy: "Parent",
      timestamp: "2026-01-09T10:45:00",
    },
    {
      id: 113,
      studentId: "STU2026013",
      name: "Noah Williams",
      stage: "Verified",
      date: "2026-01-02",
      grade: "5",
      leadSource: "Referral",
      parentName: "Mrs. Emily Williams",
      parentEmail: "emily.w@email.com",
      parentPhone: "+91 98765 43222",
      dateOfBirth: "2015-07-16",
      gender: "Male",
      previousSchool: "Global Public School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: false, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: true,
      interviewDate: "2026-01-23",
      remarks: "Medical records pending, otherwise complete",
      appliedBy: "Parent",
      timestamp: "2026-01-02T12:00:00",
    },
    {
      id: 114,
      studentId: "STU2026014",
      name: "Olivia Chen",
      stage: "Enrolled",
      date: "2025-12-29",
      grade: "12",
      leadSource: "Web Form",
      parentName: "Mr. Wei Chen",
      parentEmail: "wei.c@email.com",
      parentPhone: "+91 98765 43223",
      dateOfBirth: "2008-11-22",
      gender: "Female",
      previousSchool: "International Baccalaureate School",
      documents: {
        birthCertificate: { uploaded: true, verified: true },
        previousMarksheet: { uploaded: true, verified: true },
        transferCertificate: { uploaded: true, verified: true },
        addressProof: { uploaded: true, verified: true },
        photoId: { uploaded: true, verified: true },
        medicalRecords: { uploaded: true, verified: true },
      },
      applicationFee: 500,
      applicationFeePaid: true,
      admissionFee: 15000,
      admissionFeePaid: true,
      interviewScheduled: true,
      interviewDate: "2026-01-07",
      interviewCompleted: true,
      enrollmentConfirmed: true,
      enrollmentDate: "2026-01-11",
      classAssigned: "12B",
      remarks: "Final year student, excellent academic record",
      appliedBy: "Parent",
      timestamp: "2025-12-29T16:00:00",
    },
    {
      id: 115,
      studentId: "STU2026015",
      name: "Aarav Reddy",
      stage: "Applied",
      date: "2026-01-10",
      grade: "1",
      leadSource: "Walk-in",
      parentName: "Mr. Suresh Reddy",
      parentEmail: "suresh.r@email.com",
      parentPhone: "+91 98765 43224",
      dateOfBirth: "2019-03-28",
      gender: "Male",
      previousSchool: "None (First Admission)",
      documents: {
        birthCertificate: { uploaded: false, verified: false },
        previousMarksheet: { uploaded: false, verified: false },
        transferCertificate: { uploaded: false, verified: false },
        addressProof: { uploaded: false, verified: false },
        photoId: { uploaded: false, verified: false },
        medicalRecords: { uploaded: false, verified: false },
      },
      applicationFee: 500,
      applicationFeePaid: false,
      admissionFee: 15000,
      admissionFeePaid: false,
      interviewScheduled: false,
      interviewDate: null,
      remarks: "Walk-in inquiry today, documents to be uploaded",
      appliedBy: "Admission Staff",
      timestamp: "2026-01-10T09:30:00",
    },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 4: Class Config
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/classes
  // Action: Replace 'classes' array with API call
  // Features: CRUD operations (Create/Read/Update/Delete classes)
  // Related Routes:
  //   - POST /api/admin/classes (create new class)
  //   - PUT /api/admin/classes/:id (update class)
  //   - DELETE /api/admin/classes/:id (delete class)
  // ---------------------------------------------------

  // Academic year configuration
  academicYears: [
    { id: "2025-26", label: "2025-2026", isActive: true },
    { id: "2024-25", label: "2024-2025", isActive: false },
  ],

  // Comprehensive grades and sections data
  grades: [
    {
      id: 1,
      name: "Grade 1",
      sections: 3,
      totalStudents: 87,
      capacity: 90,
      status: "Active",
      sectionsData: [
        {
          id: "1A",
          section: "A",
          teacher: "Mrs. Sarah Johnson",
          teacherId: "T101",
          students: 28,
          capacity: 30,
          room: "101",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "1B",
          section: "B",
          teacher: "Ms. Emily Chen",
          teacherId: "T102",
          students: 30,
          capacity: 30,
          room: "102",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "1C",
          section: "C",
          teacher: "Mr. David Brown",
          teacherId: "T103",
          students: 29,
          capacity: 30,
          room: "103",
          timetableLinked: false,
          status: "Active",
          assignedSince: "2025-08-20",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-15",
        },
      ],
    },
    {
      id: 2,
      name: "Grade 2",
      sections: 3,
      totalStudents: 85,
      capacity: 90,
      status: "Active",
      sectionsData: [
        {
          id: "2A",
          section: "A",
          teacher: "Mrs. Lisa Anderson",
          teacherId: "T104",
          students: 28,
          capacity: 30,
          room: "201",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "2B",
          section: "B",
          teacher: "Mr. James Wilson",
          teacherId: "T105",
          students: 29,
          capacity: 30,
          room: "202",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "2C",
          section: "C",
          teacher: null,
          teacherId: null,
          students: 28,
          capacity: 30,
          room: "203",
          timetableLinked: false,
          status: "Draft",
          assignedSince: null,
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2026-01-05",
        },
      ],
    },
    {
      id: 3,
      name: "Grade 3",
      sections: 2,
      totalStudents: 58,
      capacity: 60,
      status: "Active",
      sectionsData: [
        {
          id: "3A",
          section: "A",
          teacher: "Mrs. Maria Garcia",
          teacherId: "T106",
          students: 30,
          capacity: 30,
          room: "301",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "3B",
          section: "B",
          teacher: "Mr. Robert Lee",
          teacherId: "T107",
          students: 28,
          capacity: 30,
          room: "302",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
      ],
    },
    {
      id: 4,
      name: "Grade 4",
      sections: 2,
      totalStudents: 55,
      capacity: 60,
      status: "Active",
      sectionsData: [
        {
          id: "4A",
          section: "A",
          teacher: "Mrs. Jennifer Taylor",
          teacherId: "T108",
          students: 27,
          capacity: 30,
          room: "401",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
        {
          id: "4B",
          section: "B",
          teacher: "Mr. Michael Zhang",
          teacherId: "T109",
          students: 28,
          capacity: 30,
          room: "402",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
      ],
    },
    {
      id: 5,
      name: "Grade 5",
      sections: 2,
      totalStudents: 62,
      capacity: 60,
      status: "Active",
      sectionsData: [
        {
          id: "5A",
          section: "A",
          teacher: "Mrs. Davis",
          teacherId: "T110",
          students: 32,
          capacity: 30,
          room: "501",
          timetableLinked: true,
          status: "Locked",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-11-20",
        },
        {
          id: "5B",
          section: "B",
          teacher: "Mr. Lee",
          teacherId: "T111",
          students: 30,
          capacity: 30,
          room: "502",
          timetableLinked: true,
          status: "Active",
          assignedSince: "2025-08-15",
          lastUpdatedBy: "Admin",
          lastUpdatedOn: "2025-12-10",
        },
      ],
    },
  ],

  // Student allocation data (for modal/drawer view)
  studentsAllocation: {
    "1A": [
      {
        id: "S1001",
        name: "Alex Johnson",
        admissionId: "ADM001",
        gender: "Male",
        status: "Active",
      },
      {
        id: "S1002",
        name: "Emma Smith",
        admissionId: "ADM002",
        gender: "Female",
        status: "Active",
      },
      {
        id: "S1003",
        name: "Oliver Brown",
        admissionId: "ADM003",
        gender: "Male",
        status: "Active",
      },
      // ... would have 28 total students
    ],
    "5A": [
      {
        id: "S5001",
        name: "Sophia Williams",
        admissionId: "ADM501",
        gender: "Female",
        status: "Active",
      },
      {
        id: "S5002",
        name: "Liam Davis",
        admissionId: "ADM502",
        gender: "Male",
        status: "Active",
      },
      {
        id: "S5003",
        name: "Ava Martinez",
        admissionId: "ADM503",
        gender: "Female",
        status: "Withdrawn",
      },
      // ... would have 32 total students
    ],
  },

  // Unassigned students
  unassignedStudents: [
    {
      id: "S9001",
      name: "Noah Anderson",
      admissionId: "ADM901",
      gender: "Male",
      grade: 2,
    },
    {
      id: "S9002",
      name: "Isabella Taylor",
      admissionId: "ADM902",
      gender: "Female",
      grade: 1,
    },
    {
      id: "S9003",
      name: "James Wilson",
      admissionId: "ADM903",
      gender: "Male",
      grade: 3,
    },
  ],

  // Legacy classes array for backward compatibility
  classes: [
    { id: "5A", grade: 5, section: "A", teacher: "Mrs. Davis", students: 32 },
    { id: "5B", grade: 5, section: "B", teacher: "Mr. Lee", students: 30 },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 5: HR/Staff Management
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/staff
  // Action: Replace 'staff' array with API call
  // Features: Staff profiles, attendance tracking, leave management
  // Real-time: Update attendance status via WebSocket
  // ---------------------------------------------------
  staff: [
    {
      id: "T01",
      name: "Alisha K.",
      role: "Teacher",
      status: "Active",
      attendance: "Present",
    },
    {
      id: "T02",
      name: "Bob M.",
      role: "Admin",
      status: "On Leave",
      attendance: "Absent",
    },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 6: Finance Control
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/finance/overview
  // Action: Replace 'finance' object with API call
  // Features: Transactions list, pending payments, reports
  // Related Routes:
  //   - GET /api/admin/finance/transactions?page=1&limit=20
  //   - GET /api/admin/finance/pending
  // ---------------------------------------------------
  finance: {
    transactions: [
      {
        id: "TX123",
        date: "2026-01-07",
        amount: 5000,
        type: "Fee Payment",
        status: "Success",
      },
    ],
    pending: 120000,
  },

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 7: Attendance Oversight
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/attendance/summary?date=2026-01-08
  // Action: Replace 'attendanceLog' array with API call
  // Real-time: Poll every 5 minutes or use WebSocket
  // ---------------------------------------------------
  attendanceLog: [
    { class: "5A", present: 30, absent: 2, teacher: "Present" },
    { class: "5B", present: 28, absent: 2, teacher: "Present" },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 8: Notification Center
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/notifications
  // Related Routes:
  //   - POST /api/admin/notifications (send new notification)
  //   - PUT /api/admin/notifications/:id (update notification)
  // Features: Create, schedule, track delivery status
  // ---------------------------------------------------
  notifications: [
    {
      id: 1,
      title: "School Closed",
      date: "2025-12-24",
      groups: ["All"],
      status: "Sent",
    },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 9: Compliance Vault
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/compliance/documents
  // Action: Replace 'documents' array with API call
  // Features: Upload documents, track expiry, send alerts
  // Related Routes:
  //   - POST /api/admin/compliance/documents (upload)
  //   - GET /api/admin/compliance/expiring (get expiring docs)
  // ---------------------------------------------------
  documents: [
    { name: "Fire Safety Cert", expiry: "2026-06-01", status: "Valid" },
    {
      name: "Staff CPR Training",
      expiry: "2026-02-15",
      status: "Expiring Soon",
    },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 10: Audit Trail
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/audit/logs?page=1&limit=50
  // Query Params: user, action, dateRange, level (info|warn|error)
  // Features: Filterable logs, export to CSV, search
  // Security: Immutable logs, requires admin privileges
  // ---------------------------------------------------
  auditLogs: [
    { id: 1, user: "Admin", action: "Created User", time: "10:30 AM" },
    { id: 2, user: "Principal", action: "Approved Leave", time: "11:15 AM" },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 11: Infrastructure
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/infrastructure/inventory
  // Action: Replace 'infrastructure' array with API call
  // Features: Asset tracking, maintenance scheduling, status updates
  // ---------------------------------------------------
  infrastructure: [
    { item: "Laptops", total: 50, inUse: 45, maintenance: 2 },
    { item: "Projectors", total: 10, inUse: 10, maintenance: 0 },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 12: Backup & Recovery
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/backups/history
  // Related Routes:
  //   - POST /api/admin/backups/trigger (manual backup)
  //   - POST /api/admin/backups/restore (restore from backup)
  // Features: View history, trigger backup, restore
  // ---------------------------------------------------
  backups: [
    { date: "2026-01-06", size: "2.5 GB", status: "Success" },
    { date: "2026-01-05", size: "2.4 GB", status: "Success" },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 13: Analytics Engine
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/analytics
  // Query Params: metric, period (daily|weekly|monthly|yearly)
  // Action: Replace 'analytics' object with API call
  // Features: Charts, trend analysis, predictive insights
  // ---------------------------------------------------
  analytics: {
    conversionRate: 65,
    feeCollection: [80, 85, 90, 92], // Percentage by month
    staffUtilization: 95,
  },

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 15: Helpdesk/Support
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/tickets?status=open&priority=high
  // Related Routes:
  //   - POST /api/admin/tickets (create ticket)
  //   - PUT /api/admin/tickets/:id (update/resolve ticket)
  //   - POST /api/admin/tickets/:id/comments (add comment)
  // Features: Ticket management, assignment, SLA tracking
  // ---------------------------------------------------
  tickets: [
    // TECHNICAL CATEGORY
    {
      id: "TK101",
      subject: "Student Portal Login Authentication Error",
      category: "Technical",
      description:
        "Unable to login to student portal. Error message: 'Invalid credentials' even with correct password.",
      from: "Rajesh Kumar",
      fromRole: "Parent",
      fromContact: "rajesh.k@email.com",
      status: "Open",
      priority: "Critical",
      createdDate: "2026-01-19T08:30:00",
      hoursElapsed: 30,
      assignedTo: "IT Support Team",
      escalated: true,
      escalationLevel: "L2",
      comments: [
        {
          user: "Admin",
          text: "Ticket escalated to senior IT team",
          time: "2026-01-19T10:00:00",
        },
        {
          user: "IT Support",
          text: "Investigating database connection issues",
          time: "2026-01-19T14:30:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T08:30:00", user: "System" },
        { status: "Escalated", time: "2026-01-19T10:00:00", user: "Admin" },
      ],
    },
    {
      id: "TK102",
      subject: "Projector Malfunction in Room 305",
      category: "Technical",
      description:
        "Classroom projector not turning on. Already checked power cables.",
      from: "Sarah Mitchell",
      fromRole: "Teacher",
      fromContact: "s.mitchell@school.edu",
      status: "Resolved",
      priority: "Medium",
      createdDate: "2026-01-18T11:00:00",
      hoursElapsed: 51,
      resolvedDate: "2026-01-18T15:30:00",
      resolutionTime: 4.5,
      assignedTo: "Maintenance Team",
      escalated: false,
      comments: [
        {
          user: "Maintenance",
          text: "Replaced faulty bulb",
          time: "2026-01-18T15:00:00",
        },
        {
          user: "Sarah Mitchell",
          text: "Working perfectly now, thank you!",
          time: "2026-01-18T15:30:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-18T11:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-18T13:00:00",
          user: "Maintenance",
        },
        {
          status: "Resolved",
          time: "2026-01-18T15:30:00",
          user: "Maintenance",
        },
      ],
    },
    {
      id: "TK103",
      subject: "WiFi Connectivity Issues in Library",
      category: "Technical",
      description:
        "Students unable to connect to WiFi network in library area. Signal strength very weak.",
      from: "Michael Chen",
      fromRole: "Librarian",
      fromContact: "m.chen@school.edu",
      status: "Open",
      priority: "High",
      createdDate: "2026-01-19T13:00:00",
      hoursElapsed: 25,
      assignedTo: "Network Admin",
      escalated: false,
      comments: [
        {
          user: "Network Admin",
          text: "Checking router configuration",
          time: "2026-01-19T14:30:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T13:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-19T14:30:00",
          user: "Network Admin",
        },
      ],
    },
    {
      id: "TK104",
      subject: "Mobile App Crashing on iOS Devices",
      category: "Technical",
      description:
        "School mobile app crashes immediately after opening on iOS 17+ devices.",
      from: "Emma Watson",
      fromRole: "Parent",
      fromContact: "e.watson@email.com",
      status: "Open",
      priority: "High",
      createdDate: "2026-01-20T09:00:00",
      hoursElapsed: 5,
      assignedTo: "Development Team",
      escalated: false,
      comments: [],
      statusHistory: [
        { status: "Open", time: "2026-01-20T09:00:00", user: "System" },
      ],
    },

    // ACADEMIC CATEGORY
    {
      id: "TK105",
      subject: "Grade Entry Error for Term 1 Exam",
      category: "Academic",
      description:
        "Incorrect grade recorded for Math exam. Shows 65 but actual score is 85.",
      from: "Priya Sharma",
      fromRole: "Parent",
      fromContact: "p.sharma@email.com",
      status: "Resolved",
      priority: "High",
      createdDate: "2026-01-17T10:00:00",
      hoursElapsed: 76,
      resolvedDate: "2026-01-17T16:00:00",
      resolutionTime: 6,
      assignedTo: "Academic Coordinator",
      escalated: false,
      comments: [
        {
          user: "Academic Coordinator",
          text: "Verified with teacher, correcting grade",
          time: "2026-01-17T14:00:00",
        },
        {
          user: "Academic Coordinator",
          text: "Grade updated successfully",
          time: "2026-01-17T16:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-17T10:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-17T14:00:00",
          user: "Academic Coordinator",
        },
        {
          status: "Resolved",
          time: "2026-01-17T16:00:00",
          user: "Academic Coordinator",
        },
      ],
    },
    {
      id: "TK106",
      subject: "Request for Subject Change Approval",
      category: "Academic",
      description:
        "Student wants to switch from French to Spanish for elective. Need approval process.",
      from: "David Thompson",
      fromRole: "Student",
      fromContact: "d.thompson@student.edu",
      status: "Open",
      priority: "Low",
      createdDate: "2026-01-19T15:00:00",
      hoursElapsed: 23,
      assignedTo: "Principal",
      escalated: false,
      comments: [
        {
          user: "Admin",
          text: "Forwarded to principal for approval",
          time: "2026-01-19T16:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T15:00:00", user: "System" },
      ],
    },
    {
      id: "TK107",
      subject: "Missing Assignment Submission Acknowledgment",
      category: "Academic",
      description:
        "Submitted assignment via portal but no confirmation received. Need verification.",
      from: "Lisa Anderson",
      fromRole: "Student",
      fromContact: "l.anderson@student.edu",
      status: "Open",
      priority: "Medium",
      createdDate: "2026-01-20T08:00:00",
      hoursElapsed: 6,
      assignedTo: "Teacher - Mrs. Johnson",
      escalated: false,
      comments: [],
      statusHistory: [
        { status: "Open", time: "2026-01-20T08:00:00", user: "System" },
      ],
    },
    {
      id: "TK108",
      subject: "Timetable Conflict - Two Classes Same Period",
      category: "Academic",
      description:
        "Student schedule shows Chemistry and Physics both in Period 3 on Wednesdays.",
      from: "Academic Office",
      fromRole: "Staff",
      fromContact: "academic@school.edu",
      status: "Open",
      priority: "Critical",
      createdDate: "2026-01-20T07:00:00",
      hoursElapsed: 7,
      assignedTo: "Timetable Coordinator",
      escalated: true,
      escalationLevel: "L1",
      comments: [
        {
          user: "Admin",
          text: "Urgent - affects 15 students",
          time: "2026-01-20T08:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-20T07:00:00", user: "System" },
        { status: "Escalated", time: "2026-01-20T08:00:00", user: "Admin" },
      ],
    },

    // HR CATEGORY
    {
      id: "TK109",
      subject: "Leave Request Not Approved",
      category: "HR",
      description:
        "Submitted leave request 2 weeks ago but haven't received approval or rejection.",
      from: "Robert Wilson",
      fromRole: "Teacher",
      fromContact: "r.wilson@school.edu",
      status: "Open",
      priority: "Medium",
      createdDate: "2026-01-18T09:00:00",
      hoursElapsed: 53,
      assignedTo: "HR Manager",
      escalated: true,
      escalationLevel: "L1",
      comments: [
        {
          user: "HR Manager",
          text: "Reviewing leave balance, will respond by EOD",
          time: "2026-01-19T10:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-18T09:00:00", user: "System" },
        {
          status: "Escalated",
          time: "2026-01-19T09:00:00",
          user: "Robert Wilson",
        },
      ],
    },
    {
      id: "TK110",
      subject: "Payroll Discrepancy - December Salary",
      category: "HR",
      description:
        "Received salary is ₹5000 less than expected. Need clarification on deductions.",
      from: "Anita Desai",
      fromRole: "Teacher",
      fromContact: "a.desai@school.edu",
      status: "Resolved",
      priority: "High",
      createdDate: "2026-01-16T11:00:00",
      hoursElapsed: 98,
      resolvedDate: "2026-01-16T17:00:00",
      resolutionTime: 6,
      assignedTo: "Payroll Team",
      escalated: false,
      comments: [
        {
          user: "Payroll Team",
          text: "Tax deduction applied. Sending detailed breakdown via email",
          time: "2026-01-16T15:00:00",
        },
        {
          user: "Anita Desai",
          text: "Understood, thank you for clarification",
          time: "2026-01-16T17:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-16T11:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-16T14:00:00",
          user: "Payroll Team",
        },
        {
          status: "Resolved",
          time: "2026-01-16T17:00:00",
          user: "Payroll Team",
        },
      ],
    },
    {
      id: "TK111",
      subject: "ID Card Replacement Request",
      category: "HR",
      description:
        "Lost staff ID card. Need replacement urgently for building access.",
      from: "Mark Robinson",
      fromRole: "Staff",
      fromContact: "m.robinson@school.edu",
      status: "Open",
      priority: "Low",
      createdDate: "2026-01-20T10:00:00",
      hoursElapsed: 4,
      assignedTo: "Admin Office",
      escalated: false,
      comments: [],
      statusHistory: [
        { status: "Open", time: "2026-01-20T10:00:00", user: "System" },
      ],
    },

    // FINANCE CATEGORY
    {
      id: "TK112",
      subject: "Fee Payment Not Reflected in Portal",
      category: "Finance",
      description:
        "Paid tuition fee via online transfer but portal still shows pending. Transaction ID: TXN789456123",
      from: "Kavita Patel",
      fromRole: "Parent",
      fromContact: "k.patel@email.com",
      status: "Open",
      priority: "High",
      createdDate: "2026-01-19T16:00:00",
      hoursElapsed: 22,
      assignedTo: "Finance Team",
      escalated: false,
      comments: [
        {
          user: "Finance Team",
          text: "Verifying transaction with bank",
          time: "2026-01-20T09:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T16:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-20T09:00:00",
          user: "Finance Team",
        },
      ],
    },
    {
      id: "TK113",
      subject: "Request for Fee Installment Plan",
      category: "Finance",
      description:
        "Requesting permission to pay annual fee in 3 installments instead of lump sum.",
      from: "Suresh Reddy",
      fromRole: "Parent",
      fromContact: "s.reddy@email.com",
      status: "Resolved",
      priority: "Medium",
      createdDate: "2026-01-15T10:00:00",
      hoursElapsed: 124,
      resolvedDate: "2026-01-15T18:00:00",
      resolutionTime: 8,
      assignedTo: "Finance Manager",
      escalated: false,
      comments: [
        {
          user: "Finance Manager",
          text: "Installment plan approved. Details sent via email",
          time: "2026-01-15T17:00:00",
        },
        {
          user: "Suresh Reddy",
          text: "Thank you very much!",
          time: "2026-01-15T18:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-15T10:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-15T14:00:00",
          user: "Finance Manager",
        },
        {
          status: "Resolved",
          time: "2026-01-15T18:00:00",
          user: "Finance Manager",
        },
      ],
    },
    {
      id: "TK114",
      subject: "Incorrect Late Fee Charge Applied",
      category: "Finance",
      description:
        "Late fee of ₹1000 charged but payment was made before deadline. Need reversal.",
      from: "James Brown",
      fromRole: "Parent",
      fromContact: "j.brown@email.com",
      status: "Open",
      priority: "Medium",
      createdDate: "2026-01-19T12:00:00",
      hoursElapsed: 26,
      assignedTo: "Finance Team",
      escalated: false,
      comments: [
        {
          user: "Finance Team",
          text: "Checking payment timestamp",
          time: "2026-01-19T14:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T12:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-19T14:00:00",
          user: "Finance Team",
        },
      ],
    },
    {
      id: "TK115",
      subject: "Fee Receipt Download Issue",
      category: "Finance",
      description:
        "Unable to download fee receipt PDF. Button not working on portal.",
      from: "Nina Gupta",
      fromRole: "Parent",
      fromContact: "n.gupta@email.com",
      status: "Resolved",
      priority: "Low",
      createdDate: "2026-01-19T09:00:00",
      hoursElapsed: 29,
      resolvedDate: "2026-01-19T11:00:00",
      resolutionTime: 2,
      assignedTo: "IT Support",
      escalated: false,
      comments: [
        {
          user: "IT Support",
          text: "Fixed PDF generation issue. Please try again",
          time: "2026-01-19T11:00:00",
        },
        {
          user: "Nina Gupta",
          text: "Working now, thanks!",
          time: "2026-01-19T11:15:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T09:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-19T10:00:00",
          user: "IT Support",
        },
        { status: "Resolved", time: "2026-01-19T11:00:00", user: "IT Support" },
      ],
    },
    {
      id: "TK116",
      subject: "Scholarship Application Status Inquiry",
      category: "Finance",
      description:
        "Applied for merit scholarship 3 months ago. Need update on application status.",
      from: "Aisha Khan",
      fromRole: "Student",
      fromContact: "a.khan@student.edu",
      status: "Open",
      priority: "Low",
      createdDate: "2026-01-20T11:00:00",
      hoursElapsed: 3,
      assignedTo: "Scholarship Committee",
      escalated: false,
      comments: [],
      statusHistory: [
        { status: "Open", time: "2026-01-20T11:00:00", user: "System" },
      ],
    },

    // ADDITIONAL MIXED TICKETS
    {
      id: "TK117",
      subject: "Library Book Lost Penalty Dispute",
      category: "Academic",
      description:
        "Charged for lost book but I returned it 2 weeks ago. Have stamp proof.",
      from: "Tom Harris",
      fromRole: "Student",
      fromContact: "t.harris@student.edu",
      status: "Open",
      priority: "Medium",
      createdDate: "2026-01-18T14:00:00",
      hoursElapsed: 48,
      assignedTo: "Librarian",
      escalated: true,
      escalationLevel: "L1",
      comments: [
        {
          user: "Librarian",
          text: "Searching library records",
          time: "2026-01-19T10:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-18T14:00:00", user: "System" },
        {
          status: "Escalated",
          time: "2026-01-19T14:00:00",
          user: "Tom Harris",
        },
      ],
    },
    {
      id: "TK118",
      subject: "CCTV Footage Request for Incident Investigation",
      category: "Technical",
      description:
        "Need CCTV footage from playground on Jan 18 between 2-3 PM for incident review.",
      from: "Principal Office",
      fromRole: "Staff",
      fromContact: "principal@school.edu",
      status: "Resolved",
      priority: "Critical",
      createdDate: "2026-01-19T09:00:00",
      hoursElapsed: 29,
      resolvedDate: "2026-01-19T12:00:00",
      resolutionTime: 3,
      assignedTo: "Security Team",
      escalated: false,
      comments: [
        {
          user: "Security Team",
          text: "Footage extracted and sent to principal office",
          time: "2026-01-19T12:00:00",
        },
      ],
      statusHistory: [
        { status: "Open", time: "2026-01-19T09:00:00", user: "System" },
        {
          status: "In Progress",
          time: "2026-01-19T10:00:00",
          user: "Security Team",
        },
        {
          status: "Resolved",
          time: "2026-01-19T12:00:00",
          user: "Security Team",
        },
      ],
    },
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 3: User & Role Management
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/users
  // Action: Replace 'userManagement' object with API calls
  // Features: User CRUD, role assignment, activity logs, group management
  // Security: Two-factor authentication for role escalations
  // ---------------------------------------------------
  userManagement: {
    // User statistics
    stats: {
      totalUsers: 2450,
      activeUsers: 2381,
      suspendedUsers: 45,
      pendingUsers: 24,
      recentRoleChanges: 12,
    },

    // Role definitions
    roles: [
      {
        id: "role_001",
        name: "Super Admin",
        permissions: 150,
        memberCount: 3,
        color: "from-red-500 to-pink-500",
        description: "Full system access and control",
        requiresTwoFactorAuth: true,
      },
      {
        id: "role_002",
        name: "Admin",
        permissions: 120,
        memberCount: 12,
        color: "from-blue-500 to-indigo-500",
        description: "Administrative privileges",
        requiresTwoFactorAuth: true,
      },
      {
        id: "role_003",
        name: "Principal",
        permissions: 100,
        memberCount: 1,
        color: "from-purple-500 to-pink-500",
        description: "School leadership access",
        requiresTwoFactorAuth: false,
      },
      {
        id: "role_004",
        name: "Teacher",
        permissions: 45,
        memberCount: 150,
        color: "from-green-500 to-emerald-500",
        description: "Teaching and grading access",
        requiresTwoFactorAuth: false,
      },
      {
        id: "role_005",
        name: "Coordinator",
        permissions: 60,
        memberCount: 25,
        color: "from-orange-500 to-amber-500",
        description: "Department coordination",
        requiresTwoFactorAuth: false,
      },
      {
        id: "role_006",
        name: "Student",
        permissions: 15,
        memberCount: 2100,
        color: "from-cyan-500 to-blue-500",
        description: "Student portal access",
        requiresTwoFactorAuth: false,
      },
      {
        id: "role_007",
        name: "Parent",
        permissions: 12,
        memberCount: 1800,
        color: "from-teal-500 to-green-500",
        description: "Parent portal access",
        requiresTwoFactorAuth: false,
      },
    ],

    // User accounts
    users: [
      {
        id: "user_001",
        userId: "USR2024001",
        name: "Dr. Sarah Thompson",
        email: "sarah.thompson@school.edu",
        phone: "+91 98765 43210",
        roles: ["Principal"],
        status: "Active",
        department: "Administration",
        grade: null,
        avatar: null,
        lastLogin: "2026-01-20T14:30:00",
        lastLoginIp: "192.168.1.100",
        accountCreated: "2024-08-15",
        totalLogins: 856,
        failedLoginAttempts: 0,
        twoFactorEnabled: true,
        ssoLinked: true,
      },
      {
        id: "user_002",
        userId: "USR2024002",
        name: "Mr. Robert Chen",
        email: "robert.chen@school.edu",
        phone: "+91 98765 43211",
        roles: ["Admin", "IT Coordinator"],
        status: "Active",
        department: "IT",
        grade: null,
        avatar: null,
        lastLogin: "2026-01-20T15:15:00",
        lastLoginIp: "192.168.1.105",
        accountCreated: "2024-08-15",
        totalLogins: 723,
        failedLoginAttempts: 0,
        twoFactorEnabled: true,
        ssoLinked: true,
      },
      {
        id: "user_003",
        userId: "USR2024003",
        name: "Mrs. Emily Watson",
        email: "emily.watson@school.edu",
        phone: "+91 98765 43212",
        roles: ["Teacher", "Coordinator"],
        status: "Active",
        department: "Academic",
        grade: "Grade 5",
        avatar: null,
        lastLogin: "2026-01-20T09:00:00",
        lastLoginIp: "192.168.1.120",
        accountCreated: "2024-08-15",
        totalLogins: 645,
        failedLoginAttempts: 0,
        twoFactorEnabled: false,
        ssoLinked: true,
      },
      {
        id: "user_004",
        userId: "USR2024004",
        name: "Mr. David Martinez",
        email: "david.martinez@school.edu",
        phone: "+91 98765 43213",
        roles: ["Teacher"],
        status: "Active",
        department: "Academic",
        grade: "Grade 8",
        avatar: null,
        lastLogin: "2026-01-19T16:30:00",
        lastLoginIp: "192.168.1.125",
        accountCreated: "2024-08-20",
        totalLogins: 512,
        failedLoginAttempts: 0,
        twoFactorEnabled: false,
        ssoLinked: true,
      },
      {
        id: "user_005",
        userId: "USR2024005",
        name: "Ms. Jennifer Lee",
        email: "jennifer.lee@school.edu",
        phone: "+91 98765 43214",
        roles: ["Teacher"],
        status: "Suspended",
        department: "Academic",
        grade: "Grade 3",
        avatar: null,
        lastLogin: "2026-01-10T11:00:00",
        lastLoginIp: "192.168.1.130",
        accountCreated: "2024-09-01",
        totalLogins: 234,
        failedLoginAttempts: 3,
        twoFactorEnabled: false,
        ssoLinked: false,
        suspensionReason: "Leave of absence",
        suspendedDate: "2026-01-11",
      },
      {
        id: "user_006",
        userId: "USR2024006",
        name: "Dr. Michael Brown",
        email: "michael.brown@school.edu",
        phone: "+91 98765 43215",
        roles: ["Admin", "Finance Coordinator"],
        status: "Active",
        department: "Finance",
        grade: null,
        avatar: null,
        lastLogin: "2026-01-20T13:45:00",
        lastLoginIp: "192.168.1.110",
        accountCreated: "2024-08-15",
        totalLogins: 687,
        failedLoginAttempts: 0,
        twoFactorEnabled: true,
        ssoLinked: true,
      },
      {
        id: "user_007",
        userId: "USR2024007",
        name: "Mrs. Priya Sharma",
        email: "priya.sharma@school.edu",
        phone: "+91 98765 43216",
        roles: ["Teacher"],
        status: "Active",
        department: "Academic",
        grade: "Grade 10",
        avatar: null,
        lastLogin: "2026-01-20T10:30:00",
        lastLoginIp: "192.168.1.135",
        accountCreated: "2024-08-15",
        totalLogins: 701,
        failedLoginAttempts: 0,
        twoFactorEnabled: true,
        ssoLinked: true,
      },
      {
        id: "user_008",
        userId: "USR2025008",
        name: "Mr. James Wilson",
        email: "james.wilson@school.edu",
        phone: "+91 98765 43217",
        roles: ["Teacher"],
        status: "Pending",
        department: "Academic",
        grade: "Grade 2",
        avatar: null,
        lastLogin: null,
        lastLoginIp: null,
        accountCreated: "2026-01-15",
        totalLogins: 0,
        failedLoginAttempts: 0,
        twoFactorEnabled: false,
        ssoLinked: false,
        pendingReason: "Email verification pending",
      },
    ],

    // Activity logs
    activityLogs: [
      {
        id: "log_001",
        userId: "USR2024001",
        userName: "Dr. Sarah Thompson",
        action: "Login",
        description: "Successful login from admin portal",
        timestamp: "2026-01-20T14:30:00",
        ipAddress: "192.168.1.100",
        status: "Success",
        category: "Authentication",
      },
      {
        id: "log_002",
        userId: "USR2024002",
        userName: "Mr. Robert Chen",
        action: "Role Assignment",
        description: "Assigned 'IT Coordinator' role to self",
        timestamp: "2026-01-20T11:15:00",
        ipAddress: "192.168.1.105",
        status: "Success",
        category: "Role Management",
        changedBy: "Dr. Sarah Thompson",
      },
      {
        id: "log_003",
        userId: "USR2024005",
        userName: "Ms. Jennifer Lee",
        action: "Account Suspended",
        description: "Account suspended due to leave of absence",
        timestamp: "2026-01-11T09:00:00",
        ipAddress: "192.168.1.100",
        status: "Success",
        category: "Account Management",
        changedBy: "Dr. Sarah Thompson",
      },
      {
        id: "log_004",
        userId: "USR2024003",
        userName: "Mrs. Emily Watson",
        action: "Password Reset",
        description: "Password reset requested and completed",
        timestamp: "2026-01-18T16:20:00",
        ipAddress: "192.168.1.120",
        status: "Success",
        category: "Security",
      },
      {
        id: "log_005",
        userId: "USR2024007",
        userName: "Mrs. Priya Sharma",
        action: "Role Assignment",
        description: "Assigned 'Department Head' role",
        timestamp: "2026-01-15T10:00:00",
        ipAddress: "192.168.1.100",
        status: "Success",
        category: "Role Management",
        changedBy: "Dr. Sarah Thompson",
      },
      {
        id: "log_006",
        userId: "unknown",
        userName: "Unknown User",
        action: "Failed Login",
        description: "Failed login attempt - invalid credentials",
        timestamp: "2026-01-20T03:15:00",
        ipAddress: "45.123.45.67",
        status: "Failed",
        category: "Authentication",
      },
      {
        id: "log_007",
        userId: "USR2024006",
        userName: "Dr. Michael Brown",
        action: "Two-Factor Enabled",
        description: "Enabled two-factor authentication",
        timestamp: "2026-01-12T14:00:00",
        ipAddress: "192.168.1.110",
        status: "Success",
        category: "Security",
      },
      {
        id: "log_008",
        userId: "USR2024004",
        userName: "Mr. David Martinez",
        action: "Login",
        description: "Successful login from teacher portal",
        timestamp: "2026-01-19T16:30:00",
        ipAddress: "192.168.1.125",
        status: "Success",
        category: "Authentication",
      },
    ],

    // Login history
    loginHistory: [
      {
        id: "login_001",
        userId: "USR2024001",
        userName: "Dr. Sarah Thompson",
        loginTime: "2026-01-20T14:30:00",
        logoutTime: null,
        duration: "45 min (active)",
        ipAddress: "192.168.1.100",
        device: "Windows 11 - Chrome",
        location: "Main Campus",
        status: "Active",
      },
      {
        id: "login_002",
        userId: "USR2024002",
        userName: "Mr. Robert Chen",
        loginTime: "2026-01-20T15:15:00",
        logoutTime: null,
        duration: "30 min (active)",
        ipAddress: "192.168.1.105",
        device: "macOS - Safari",
        location: "IT Office",
        status: "Active",
      },
      {
        id: "login_003",
        userId: "USR2024003",
        userName: "Mrs. Emily Watson",
        loginTime: "2026-01-20T09:00:00",
        logoutTime: "2026-01-20T15:00:00",
        duration: "6 hours",
        ipAddress: "192.168.1.120",
        device: "iPad - Safari",
        location: "Classroom 5A",
        status: "Logged Out",
      },
      {
        id: "login_004",
        userId: "USR2024004",
        userName: "Mr. David Martinez",
        loginTime: "2026-01-19T16:30:00",
        logoutTime: "2026-01-19T18:00:00",
        duration: "1.5 hours",
        ipAddress: "192.168.1.125",
        device: "Android - Chrome",
        location: "Staff Room",
        status: "Logged Out",
      },
    ],

    // Department groups
    departments: [
      {
        id: "dept_001",
        name: "Administration",
        memberCount: 15,
        description: "School administration and management",
        head: "Dr. Sarah Thompson",
        color: "from-blue-500 to-indigo-500",
      },
      {
        id: "dept_002",
        name: "Academic",
        memberCount: 150,
        description: "Teaching and academic staff",
        head: "Mrs. Priya Sharma",
        color: "from-green-500 to-emerald-500",
      },
      {
        id: "dept_003",
        name: "IT",
        memberCount: 8,
        description: "Information technology and systems",
        head: "Mr. Robert Chen",
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "dept_004",
        name: "Finance",
        memberCount: 12,
        description: "Financial operations and accounting",
        head: "Dr. Michael Brown",
        color: "from-orange-500 to-amber-500",
      },
      {
        id: "dept_005",
        name: "Student Services",
        memberCount: 20,
        description: "Student support and counseling",
        head: "Ms. Rachel Green",
        color: "from-teal-500 to-cyan-500",
      },
    ],

    // Grade groups
    gradeGroups: [
      {
        id: "grade_001",
        name: "Primary (Grades 1-5)",
        memberCount: 65,
        description: "Primary school teachers",
        coordinator: "Mrs. Emily Watson",
      },
      {
        id: "grade_002",
        name: "Middle School (Grades 6-8)",
        memberCount: 45,
        description: "Middle school teachers",
        coordinator: "Mr. David Martinez",
      },
      {
        id: "grade_003",
        name: "High School (Grades 9-12)",
        memberCount: 40,
        description: "High school teachers",
        coordinator: "Mrs. Priya Sharma",
      },
    ],

    // Security escalation requests
    securityEscalations: [
      {
        id: "esc_001",
        requestedBy: "Mr. Robert Chen",
        requestedRole: "Super Admin",
        currentRole: "Admin",
        requestDate: "2026-01-18T10:00:00",
        status: "Pending",
        approver1: {
          name: "Dr. Sarah Thompson",
          approved: false,
          approvedDate: null,
        },
        approver2: {
          name: "Principal Board",
          approved: false,
          approvedDate: null,
        },
        reason: "System maintenance and configuration updates",
      },
      {
        id: "esc_002",
        requestedBy: "Mrs. Priya Sharma",
        requestedRole: "Admin",
        currentRole: "Teacher",
        requestDate: "2026-01-10T14:00:00",
        status: "Approved",
        approver1: {
          name: "Dr. Sarah Thompson",
          approved: true,
          approvedDate: "2026-01-10T15:00:00",
        },
        approver2: {
          name: "HR Director",
          approved: true,
          approvedDate: "2026-01-10T16:00:00",
        },
        reason: "Department head responsibilities",
        completedDate: "2026-01-10T16:30:00",
      },
    ],
  },
};
