import React from "react";
import {
  CheckCircle,
  Activity,
  Clock,
  AlertTriangle,
  FileText,
} from "lucide-react";

export const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: CheckCircle,
      };
    case "in-progress":
      return {
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-300",
        icon: Activity,
      };
    case "pending":
      return {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-300",
        icon: Clock,
      };
    case "overdue":
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
        icon: AlertTriangle,
      };
    case "submitted":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: CheckCircle,
      };
    case "verified":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: CheckCircle,
      };
    case "pending-review":
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        border: "border-yellow-300",
        icon: Clock,
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-700",
        border: "border-gray-300",
        icon: FileText,
      };
  }
};

export const getPriorityBadge = (priority) => {
  switch (priority) {
    case "high":
      return (
        <span className="px-2 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold">
          HIGH
        </span>
      );
    case "medium":
      return (
        <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold">
          MED
        </span>
      );
    case "low":
      return (
        <span className="px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold">
          LOW
        </span>
      );
    default:
      return null;
  }
};
