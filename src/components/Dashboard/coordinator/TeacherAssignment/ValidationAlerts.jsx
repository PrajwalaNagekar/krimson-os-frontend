import React from "react";
import { AlertTriangle, XCircle, CheckCircle, Info, X } from "lucide-react";

/**
 * ValidationAlerts Component
 * Displays validation warnings, errors, and success messages
 * for teacher assignment operations
 */
const ValidationAlerts = ({ alerts, onDismiss }) => {
  if (!alerts || alerts.length === 0) return null;

  const getAlertStyles = (type) => {
    switch (type) {
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-800",
          icon: XCircle,
          iconColor: "text-red-600",
        };
      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          text: "text-yellow-800",
          icon: AlertTriangle,
          iconColor: "text-yellow-600",
        };
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          icon: CheckCircle,
          iconColor: "text-green-600",
        };
      case "info":
      default:
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          icon: Info,
          iconColor: "text-blue-600",
        };
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => {
        const styles = getAlertStyles(alert.type);
        const Icon = styles.icon;

        return (
          <div
            key={alert.id || index}
            className={`${styles.bg} border ${styles.border} rounded-lg p-4 flex items-start gap-3 animate-in slide-in-from-top-2 duration-300`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <Icon className={`h-5 w-5 ${styles.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1">
              {alert.title && (
                <h4 className={`font-semibold ${styles.text} mb-1`}>
                  {alert.title}
                </h4>
              )}
              <p className={`text-sm ${styles.text}`}>{alert.message}</p>
              {alert.details && (
                <p className={`text-xs ${styles.text} mt-1 opacity-80`}>
                  {alert.details}
                </p>
              )}
            </div>

            {/* Dismiss Button */}
            {onDismiss && (
              <button
                onClick={() => onDismiss(alert.id || index)}
                className={`flex-shrink-0 ${styles.text} hover:opacity-70 transition-opacity`}
                aria-label="Dismiss alert"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ValidationAlerts;
