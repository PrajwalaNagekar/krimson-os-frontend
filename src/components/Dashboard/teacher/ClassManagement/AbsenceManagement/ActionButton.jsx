import React from "react";

const ActionButton = ({
  active,
  icon: Icon,
  label,
  color,
  onClick,
  disabled,
}) => {
  const baseConfig = {
    blue: "text-blue-600 border-blue-500 bg-blue-50 hover:bg-blue-100",
    purple:
      "text-purple-600 border-purple-500 bg-purple-50 hover:bg-purple-100",
    emerald:
      "text-emerald-600 border-emerald-500 bg-emerald-50 hover:bg-emerald-100",
    rose: "text-rose-600 border-rose-500 bg-rose-50 hover:bg-rose-100",
  };

  const defaultConfig =
    "text-slate-500 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50";
  const disabledConfig =
    "text-slate-300 border-slate-100 bg-slate-50 cursor-not-allowed opacity-60";

  let styles = disabled
    ? disabledConfig
    : active
      ? baseConfig[color]
      : defaultConfig;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`flex flex-col items-center justify-center p-3 sm:p-4 border rounded-xl gap-2 transition-all duration-200 shadow-sm ${styles}`}
    >
      <Icon size={18} />
      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-center leading-tight">
        {label}
      </span>
    </button>
  );
};

export default ActionButton;
