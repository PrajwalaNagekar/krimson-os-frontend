# Krimson-OS

**Krimson-OS** is a comprehensive educational management system interface built with modern web technologies. It provides a role-based experience for various stakeholders in an educational institution, including Administrators, Students, Teachers, Academic Coordinators, Registrars, Principals, Parents, and Finance Officers.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM v7
- **Layouts:** React Grid Layout (for dynamic dashboards)
- **Icons:** Lucide React
- **Utilities:** Axios (HTTP), Luxon (Date/Time), React Toastify (Notifications)

## 📂 Project Structure

```bash
Krimson-OS/
├── src/
│   ├── assets/             # Static assets (images, styles)
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Generic components (cards, buttons, inputs)
│   │   ├── layout/         # Layout wrappers (Sidebar, Headers)
│   │   └── navigation/     # Navigation related components
│   ├── pages/              # Application Pages
│   │   ├── auth/           # Login & Authentication interfaces
│   │   ├── dashboards/     # Role-specific dashboards
│   │   │   ├── admin/      # Admin dashboard & controls
│   │   │   ├── coordinator/# Academic Coordinator features
│   │   │   ├── finance/    # Finance & Billing modules
│   │   │   ├── parent/     # Parent portal
│   │   │   ├── principal/  # Principal administrative views
│   │   │   ├── registrar/  # Student registration & records
│   │   │   ├── student/    # Student LMS & grades
│   │   │   ├── teacher/    # Classroom management & grading
│   │   │   └── GlobalDashboard.jsx # Overview dashboard
│   │   └── landing/        # Landing page (WelcomeLanding.jsx)
│   ├── routes/             # Route configurations
│   │   ├── AdminRoutes.jsx
│   │   ├── AuthRoutes.jsx
│   │   ├── CoordinatorRoutes.jsx
│   │   ├── FinanceRoutes.jsx
│   │   ├── ParentRoutes.jsx
│   │   ├── PrincipalRoutes.jsx
│   │   ├── RegistrarRoutes.jsx
│   │   ├── StudentRoutes.jsx
│   │   └── TeacherRoutes.jsx
│   ├── services/           # API integration & Business logic
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── userService.js
│   ├── utils/              # Helper functions & constants
│   └── App.jsx             # Main Application Entry Component
└── ...config files (vite.config.js, tailwind.config.js, etc.)
```

## 🛠️ Setup & Run

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Development Server:**

    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🔐 Role-Based Access

The application uses a robust routing system to segregate features by user role:

- **Auth Pages:** Login and initial access.
- **Admin:** System configuration and user management.
- **Student:** Access to grades, assignments, and schedule.
- **Teacher:** Class management, attendance, and grading.
- **Coordinator:** Curriculum and academic oversight.
- **Registrar:** Admissions and student records.
- **Principal:** High-level school oversight and reports.
- **Parent:** Monitoring child's progress and communication.
- **Finance:** Fee collection and financial reporting.

## ✨ Key Features

- **Dynamic Dashboards:** Customizable grid-based layouts for overview screens.
- **Modular Architecture:** Separation of concerns via dedicated Routes and Layouts for each role.
- **Responsive Design:** Mobile-friendly interface powered by Tailwind CSS.
"# krimson-os-frontend" 
