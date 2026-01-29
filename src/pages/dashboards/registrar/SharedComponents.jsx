import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}>
    {children}
  </div>
);

export const StatCard = ({ icon, value, label, color, bg }) => {
  const Icon = icon;
  return (
  <Card className="flex flex-col justify-between h-full min-h-[140px]">
    <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center`}>
      <Icon className={`h-6 w-6 ${color}`} />
    </div>
    <div>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      <p className="text-slate-500 font-medium text-sm">{label}</p>
    </div>
  </Card>
);
};

export const Badge = ({ children, color }) => {
  const styles = {
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${styles[color] || styles.blue}`}>{children}</span>;
};
