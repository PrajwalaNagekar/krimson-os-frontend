export const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

export const getTypeColor = (type) => {
  switch (type) {
    case "Lesson Plan":
      return "from-cyan-400 to-blue-500";
    case "Assessment":
      return "from-pink-400 to-purple-500";
    case "Assignment":
      return "from-blue-400 to-cyan-500";
    default:
      return "from-gray-400 to-gray-500";
  }
};

export const getActionColor = (action) => {
  switch (action) {
    case "Approved":
      return "text-green-600";
    case "Revision Requested":
      return "text-orange-600";
    case "Rejected":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getTimeAgo = (timestamp) => {
  const now = new Date();
  const submitted = new Date(timestamp);
  const diffMs = now - submitted;
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHrs / 24);

  if (diffDays > 0) return `${diffDays}d ago`;
  if (diffHrs > 0) return `${diffHrs}h ago`;
  return "Just now";
};
