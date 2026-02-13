import React from "react";
import { Lock, Radio, Megaphone, User } from "lucide-react";

export const getTabIcon = (tab, size = 18) => {
  switch (tab) {
    case "counselor":
      return <Lock size={size} />;
    case "broadcasts":
      return <Radio size={size} />;
    case "announcements":
      return <Megaphone size={size} />;
    default:
      return <User size={size} />;
  }
};

export const getTabGradient = (tab) => {
  switch (tab) {
    case "counselor":
      return "from-purple-500 to-indigo-600";
    case "broadcasts":
      return "from-orange-400 to-red-500";
    case "announcements":
      return "from-emerald-400 to-teal-600";
    default:
      return "from-cyan-400 via-blue-400 to-pink-400";
  }
};
