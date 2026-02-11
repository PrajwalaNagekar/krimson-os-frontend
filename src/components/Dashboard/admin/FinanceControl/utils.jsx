import React from "react";
import { CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react";

export const getColorClasses = (color) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      icon: "bg-blue-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      icon: "bg-purple-100",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      icon: "bg-amber-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      icon: "bg-green-100",
    },
  };
  return colorMap[color] || colorMap.blue;
};

export const getStatusColor = (status) => {
  switch (status) {
    case "Success":
    case "Completed":
    case "Approved":
      return "bg-green-100 text-green-700 border-green-200";
    case "Pending":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "Failed":
    case "Rejected":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Success":
    case "Completed":
    case "Approved":
      return <CheckCircle size={14} />;
    case "Pending":
      return <Clock size={14} />;
    case "Failed":
    case "Rejected":
      return <XCircle size={14} />;
    default:
      return <AlertCircle size={14} />;
  }
};
