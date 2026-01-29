/**
 * @component ToastContainer
 * @description Global toast notification container that displays alerts/messages.
 * Reads notification queue from Redux and displays them with auto-dismiss.
 * 
 * Features:
 * - 4 notification types (success, error, warning, info)
 * - Auto-dismiss after 3 seconds
 * - Manual dismiss by clicking X
 * - Animated entrance/exit
 * - Stacked vertically
 * - Accessible with ARIA
 * 
 * @returns {JSX.Element} Toast notification container
 * 
 * @example
 * // Add to App.jsx
 * <ToastContainer />
 * 
 * // Trigger from any component
 * dispatch(addNotification({
 *   type: 'success',
 *   message: 'Data saved successfully!'
 * }));
 */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeNotification } from '../../store/slices/uiSlice';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import clsx from 'clsx';

const ToastContainer = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(state => state.ui.notifications);

  /**
   * Auto-dismiss notification after 3 seconds
   */
  useEffect(() => {
    if (notifications.length > 0) {
      const latestNotification = notifications[notifications.length - 1];
      
      const timer = setTimeout(() => {
        dispatch(removeNotification(latestNotification.id));
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [notifications, dispatch]);

  /**
   * Get icon component based on notification type
   */
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <XCircle size={20} />;
      case 'warning':
        return <AlertCircle size={20} />;
      case 'info':
      default:
        return <Info size={20} />;
    }
  };

  /**
   * Get color classes based on notification type
   */
  const getColorClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  /**
   * Manual dismiss notification
   */
  const handleDismiss = (id) => {
    dispatch(removeNotification(id));
  };

  // Don't render if no notifications
  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed top-4 right-4 z-[100] space-y-3 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={clsx(
            'flex items-start gap-3 p-4 rounded-xl border shadow-lg',
            'animate-slideDown pointer-events-auto',
            getColorClasses(notification.type)
          )}
          role="alert"
        >
          {/* Icon */}
          <div className="shrink-0 mt-0.5">
            {getIcon(notification.type)}
          </div>

          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium break-words">
              {notification.message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => handleDismiss(notification.id)}
            className={clsx(
              'shrink-0 p-1 rounded-lg transition-colors',
              'hover:bg-black/10 focus:outline-none focus:ring-2',
              notification.type === 'success' ? 'focus:ring-green-400' :
              notification.type === 'error' ? 'focus:ring-red-400' :
              notification.type === 'warning' ? 'focus:ring-yellow-400' :
              'focus:ring-blue-400'
            )}
            aria-label="Dismiss notification"
            type="button"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
