import React, { useState, useEffect } from "react";
import {
  User,
  Settings,
  Shield,
  Users,
  Building,
  Monitor,
  AlertTriangle,
  UserCheck,
  ShieldAlert,
  Download,
  Filter,
  Search,
  Plus,
  MoreVertical,
  Trash2,
  Edit2,
  CheckCircle,
  XCircle,
  Clock,
  Key,
  Lock,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mail,
  Camera,
  Activity,
  LogOut,
  UserPlus,
} from "lucide-react";
import { ADMIN_DATA } from "../../../data/adminData";
import { useAppDispatch } from "../../../store/hooks";
import { addNotification } from "../../../store/slices/uiSlice";

// Components
import Header from "../../../components/dashboard/admin/UserManagement/Header";
import StatsCards from "../../../components/dashboard/admin/UserManagement/StatsCards";
import FiltersPanel from "../../../components/dashboard/admin/UserManagement/FiltersPanel";
import UserActionPanel from "../../../components/dashboard/admin/UserManagement/UserActionPanel";
// Tabs
import UserAccounts from "../../../components/dashboard/admin/UserManagement/Tabs/UserAccounts";
import ActivityLogs from "../../../components/dashboard/admin/UserManagement/Tabs/ActivityLogs";
import GroupsDepartments from "../../../components/dashboard/admin/UserManagement/Tabs/GroupsDepartments";
import SecurityEscalations from "../../../components/dashboard/admin/UserManagement/Tabs/SecurityEscalations";

const UserManagement = () => {
  const dispatch = useAppDispatch();
  const data = ADMIN_DATA.userManagement;

  // State
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState(data.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(null);
  const [filters, setFilters] = useState({
    role: "all",
    status: "all",
    department: "all",
    search: "",
  });

  // Filter Logic
  useEffect(() => {
    let result = data.users;

    if (filters.role !== "all") {
      result = result.filter((user) => user.roles.includes(filters.role));
    }
    if (filters.status !== "all") {
      result = result.filter(
        (user) => user.status.toLowerCase() === filters.status.toLowerCase(),
      );
    }
    if (filters.department !== "all") {
      result = result.filter((user) => user.department === filters.department);
    }
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.userId.toLowerCase().includes(query),
      );
    }

    setUsers(result);
  }, [filters, data.users]);

  // Handlers
  const handleAddUser = (newUser) => {
    const user = {
      ...newUser,
      id: `user_${Date.now()}`,
      userId: `USR${new Date().getFullYear()}${Math.floor(Math.random() * 1000)}`,
      status: "Active",
      lastLogin: null,
      accountCreated: new Date().toISOString().split("T")[0],
      totalLogins: 0,
      avatar: null,
    };
    setUsers([user, ...users]);
    dispatch(
      addNotification({
        type: "success",
        message: "User account created successfully",
        duration: 5000,
      }),
    );
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
    dispatch(
      addNotification({
        type: "success",
        message: "User account updated successfully",
        duration: 5000,
      }),
    );
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
      dispatch(
        addNotification({
          type: "success",
          message: "User account deleted successfully",
          duration: 5000,
        }),
      );
    }
  };

  const handleExport = () => {
    dispatch(
      addNotification({
        type: "info",
        message: "Exporting user data...",
        duration: 3000,
      }),
    );
    // Mock export
    setTimeout(() => {
      dispatch(
        addNotification({
          type: "success",
          message: "User report downloaded successfully",
          duration: 5000,
        }),
      );
    }, 1500);
  };

  // Helper Functions (passed as props or used in render if needed, but components are self-contained mostly)
  // We passed getStatusColor/Icon logic INTO UserAccounts component.

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <Header />

      {/* Stats Cards */}
      <StatsCards stats={data.stats} />

      {/* Action Panel (Add/Edit User) */}
      <UserActionPanel
        users={users}
        allRoles={data.roles.map((r) => r.name)}
        departments={data.departments.map((d) => d.name)}
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
      />

      {/* Filters */}
      <FiltersPanel
        filters={filters}
        setFilters={setFilters}
        departments={data.departments}
      />

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden min-h-[600px]">
        {/* Helper for Tabs Navigation */}
        <div className="border-b border-slate-100 p-1 bg-slate-50/50">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {[
              { id: "users", label: "User Accounts", icon: Users },
              { id: "activity", label: "Activity Logs", icon: Activity },
              { id: "groups", label: "Groups & Departments", icon: Building },
              {
                id: "security",
                label: "Security & Escalations",
                icon: ShieldAlert,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white text-cyan-600 shadow-sm ring-1 ring-slate-100"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                }`}
              >
                <tab.icon
                  size={18}
                  className={
                    activeTab === tab.id ? "text-cyan-500" : "text-slate-400"
                  }
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "users" && (
          <UserAccounts
            users={users}
            totalUsers={data.stats.totalUsers}
            // Passing empty functions if we want to use the internal ones in UserAccounts
            getStatusColor={undefined}
            getStatusIcon={undefined}
          />
        )}

        {activeTab === "activity" && <ActivityLogs logs={data.activityLogs} />}

        {activeTab === "groups" && (
          <GroupsDepartments
            departments={data.departments}
            roleGroups={data.roleGroups} // Added to adminData.js
            showCreateForm={showCreateForm}
            setShowCreateForm={setShowCreateForm}
          />
        )}

        {activeTab === "security" && (
          <SecurityEscalations
            stats={data.securityStats} // Added to adminData.js
            logs={data.securityLogs} // Added to adminData.js
          />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
