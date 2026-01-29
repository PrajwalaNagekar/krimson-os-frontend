export const LIBRARIAN_DATA = {
  user: {
    name: "Sarah Jenkins",
    role: "Head Librarian",
    id: "LIB-2025-01",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  stats: { // Screen 1
    totalBooks: 12500,
    issued: 845,
    reserved: 120,
    overdue: 45
  },
  catalog: [ // Screen 1
    { id: "BK-1001", title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", category: "Fiction", stock: 12, available: 8 },
    { id: "BK-1002", title: "Introduction to Physics", author: "Halliday & Resnick", isbn: "9781118230718", category: "Science", stock: 30, available: 5 },
    { id: "BK-1003", title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", category: "Technology", stock: 15, available: 15 },
    { id: "BK-1004", title: "World History", author: "William Duiker", isbn: "9781133606581", category: "History", stock: 20, available: 2 }
  ],
  transactions: [ // Screen 2
    { id: "TX-5001", studentId: "S-101", studentName: "Aravind Kumar", book: "Introduction to Physics", issueDate: "2025-12-01", dueDate: "2025-12-15", status: "Overdue", fine: "SGD 5.00" },
    { id: "TX-5002", studentId: "S-105", studentName: "Meera Tan", book: "The Great Gatsby", issueDate: "2026-01-02", dueDate: "2026-01-16", status: "Issued", fine: "SGD 0.00" }
  ],
  reservations: [ // Screen 3
    { id: "RES-201", student: "John Lim", book: "Harry Potter & The Sorcerer's Stone", date: "2026-01-05", status: "Pending" },
    { id: "RES-202", student: "Sarah Lee", book: "Introduction to Physics", date: "2026-01-06", status: "Approved" }
  ],
  analytics: [ // Screen 4
    { title: "Harry Potter Series", borrows: 150 },
    { title: "Diary of a Wimpy Kid", borrows: 120 },
    { title: "Percy Jackson", borrows: 95 }
  ]
};
