export const getProgressStatus = (progress) => {
  if (progress === 100)
    return {
      label: "Resolved",
      color: "from-green-400 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-700",
    };
  if (progress >= 34)
    return {
      label: "Ongoing",
      color: "from-orange-400 to-orange-500",
      bg: "bg-orange-50",
      text: "text-orange-700",
    };
  return {
    label: "Initial",
    color: "from-blue-400 to-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  };
};

export const getSeverityColor = (severity) => {
  switch (severity) {
    case "High":
      return "bg-red-100 text-red-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
};
