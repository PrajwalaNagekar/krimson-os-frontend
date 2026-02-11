export const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "from-blue-400 to-cyan-500";
    case "Overdue":
      return "from-red-400 to-pink-500";
    case "Completed":
      return "from-green-400 to-emerald-500";
    case "Remedial":
      return "from-orange-400 to-amber-500";
    default:
      return "from-slate-400 to-slate-500";
  }
};

export const getStatusBadge = (status) => {
  switch (status) {
    case "Active":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Overdue":
      return "bg-red-100 text-red-700 border-red-200";
    case "Completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "Remedial":
      return "bg-orange-100 text-orange-700 border-orange-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
