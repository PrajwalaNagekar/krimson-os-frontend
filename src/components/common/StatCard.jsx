/**
 * @component StatCard
 * @description Reusable statistics card component with icon and metrics.
 * Used across admin, principal, management, and other role dashboards
 * to display key performance indicators and stats.
 * 
 * @param {Object} props
 * @param {string} props.title - Card title (e.g., "Total Users", "Attendance Today")
 * @param {string|number} props.value - Main metric value to display
 * @param {string} [props.subtitle] - Optional subtitle/secondary information
 * @param {React.Component} props.icon - Lucide React icon component
 * @param {string} [props.color='blue'] - Color theme: 'blue', 'green', 'purple', 'orange', 'red'
 * @param {Function} [props.onClick] - Optional click handler for interactive cards
 * @param {string} [props.className] - Additional CSS classes
 * 
 * @example
 * <StatCard 
 *   title="Total Users"
 *   value={2450}
 *   subtitle="150 staff, 2300 students"
 *   icon={Users}
 *   color="blue"
 *   onClick={() => navigate('/users')}
 * />
 */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: IconComponent, 
  color = 'blue', 
  onClick, 
  className 
}) => {
  // Map color prop to Tailwind utility classes
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    red: 'bg-red-50 text-red-600',
    cyan: 'bg-cyan-50 text-cyan-600'
  };

  return (
    <div 
      className={clsx(
        // Base styles
        "bg-white p-6 rounded-2xl shadow-sm border border-slate-100",
        "flex items-center gap-4 transition-all duration-200",
        // Interactive styles if onClick provided
        onClick && "cursor-pointer hover:shadow-md hover:scale-[1.02]",
        // Custom classes
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
    >
      {/* Icon container with dynamic color theme */}
      <div className={clsx(
        "p-4 rounded-xl shrink-0",
        colorClasses[color] || colorClasses.blue
      )}>
        <IconComponent size={24} aria-hidden="true" />
      </div>

      {/* Metrics content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold text-slate-800 truncate">
          {value}
        </h3>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide truncate">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-slate-400 mt-1 truncate">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'purple', 'orange', 'red', 'cyan']),
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default StatCard;
