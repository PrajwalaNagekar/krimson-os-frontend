import {
  CheckCircle,
  Clock,
  Activity,
  XCircle,
  FileText,
  BookOpen,
  DollarSign,
  GraduationCap,
  Shield,
} from "lucide-react";

export const getStatusColor = (status) => {
  switch (status) {
    case "cleared":
    case "approved":
    case "completed":
      return {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: CheckCircle,
      };
    case "pending":
    case "initiated":
      return {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-300",
        icon: Clock,
      };
    case "in-progress":
    case "ready-tc":
      return {
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-300",
        icon: Activity,
      };
    case "rejected":
      return {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
        icon: XCircle,
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

export const getClearanceSteps = () => [
  { key: "library", label: "Library", icon: BookOpen, color: "cyan" },
  { key: "finance", label: "Finance", icon: DollarSign, color: "blue" },
  { key: "academic", label: "Academic", icon: GraduationCap, color: "purple" },
  { key: "principal", label: "Principal", icon: Shield, color: "pink" },
];
